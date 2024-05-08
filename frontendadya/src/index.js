import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import Home from './components/pages/Home/Home';
import Policy from './components/pages/Policy/Policy';
import PolicyDetails from './components/pages/PolicyDetails/PolicyDetails';
import { Provider } from 'react-redux';
import store from './redux/store';
import Purchased from './components/pages/Purchased_Policy/Purchased';
import Purchase from './components/pages/Purchase/Purchase';

const root = ReactDOM.createRoot(document.getElementById('root'));


const appRouter = createBrowserRouter([
  {
    path:'/signin',
    element:<SignIn />,
  },
  {
    path:'/signup',
    element:<SignUp/>
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"policy/:insuranceType",
        element:<Policy/>
      } ,
      {
        path: "policy/:insuranceType/:policyId",
        element: <PolicyDetails />
      },
      {
        path: 'purchase/:policyId',
        element: <Purchase />
      },
      {
        path:'/user-insurance',
        element:<Purchased/>
      },
  
    ],
  }
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();