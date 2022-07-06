import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.p2pquake.net/v1'
})