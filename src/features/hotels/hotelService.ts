import axios from "axios";
const BASE_URL = "http://localhost:5000";


const getHotels = async () => {
    const response = await axios.get(`${BASE_URL}/api/v1/hotels`);

    console.log("response", response);
} 

const getHotel = async () => {
    const response = await axios.get(`${BASE_URL}/api/v1/hotels`);

    console.log("response", response);
} 

const createHotel = async (hotel: any) => {
    const response = await axios.post(`${BASE_URL}/api/v1/hotels`);

    console.log("response", response);
} 

const hotelsService = {
    getHotels,
    getHotel,
    createHotel
}


export default hotelsService;