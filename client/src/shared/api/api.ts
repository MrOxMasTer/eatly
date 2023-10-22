import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' },
    headers: {
        'ngrok-skip-browser-warning': '69420',
    },
});

// api.interceptors.response.use(
//     function (response) {
//         // Do something with response data
//         return response;
//     },
//     function (error) {
//         // Do something with response error
//         return Promise.reject(error);
//     },
// );
