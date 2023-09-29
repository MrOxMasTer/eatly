import axios from 'axios';

export const instanse = axios.create({
    baseURL: 'https://c99c-213-138-86-109.ngrok-free.app/api',
    // timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' },
    headers: {
        'ngrok-skip-browser-warning': '69420',
    },
});
