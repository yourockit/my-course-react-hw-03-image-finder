import  axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

const searchParams = new URLSearchParams ({
    key: '33752530-4b24ec44329786fc732f0a267',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
});

export const getImages = async (query, page) => {
const response = await axios.get(`?q=${query}&page=${page}&${searchParams}`);
return response.data;
};