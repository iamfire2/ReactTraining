import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 50b2df81dc54531118b71398ac5eb042640a7a038c8f2241801f97a645ef14b3',
        }
});