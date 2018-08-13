import axios from 'axios';

export function getAPOD(date=''){
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=sgKdjST36zZ9Z2IV54l3dlf3wtQeLwEsdmq6GS8T&date=${date}`);
}