import axios from "axios";
const api = axios.create({
    baseURL: process.env.REACT_APP_API,
    // 'https://sheetdb.io/api/v1/kb2wnmo78wvfp',
    auth: {
        username: process.env.REACT_APP_USERNAME,
        password: process.env.REACT_APP_PASSWORD
    }

});
export default api