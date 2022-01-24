import axios from "axios";
const api = axios.create({
    baseURL: process.env.REACT_APP_API,
    
    auth: {
        username: process.env.REACT_APP_USERNAME,
        password: process.env.REACT_APP_PASSWORD
    }

});
export default api