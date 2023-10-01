import axios from 'axios';

export const instanse = axios.create({
    baseURL: 'https://3z19fwj1-5000.euw.devtunnels.ms/api',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' },
    headers: {
        'ngrok-skip-browser-warning': '69420',
    },
});
