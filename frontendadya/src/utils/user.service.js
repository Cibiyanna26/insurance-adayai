import { getCookie } from "./cookie.service";

import axios from 'axios'
async function checkAuthorization() {
    const token = getCookie('token');
    try {
        const response = await axios.get('http://localhost:5000/api/check', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if (response.data.success) {
            return {status:true,user:response.data.user};
        } else {

            return {status:false};
        }
    } catch (error) {
        console.error('Error checking authorization:', error);
        throw error;
    }
}

export { checkAuthorization };