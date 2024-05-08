import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/layouts/Header';
import { useEffect } from 'react';
import { checkAuthorization } from './utils/user.service';
import { useNavigate } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/userSlice';

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(()=>{
    checkAuthorization().then((response)=>{
        if(response.status){
          dispatch(setUser(response.user))
        }else{
          navigate('/signin')
        }
    }).catch((error)=>{
      navigate('/signin')
    })
  })


  return (
    <div className=''>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
