import api from "./api";
const RESTO_API = import.meta.env.VITE_RESTO_API;

//GET ALL RESTAURANT
const getAllRestaurant =  async() =>{
    return await api.get(RESTO_API);
}

//Get restaurant by id
const getRestaurantByID = async(id) =>{
    //http://localhost:5000/api/v1/restuarants/1
    return await api.get(RESTO_API + `/${id}`);
}

const RestaurantService = {
    getAllRestaurant,
    getRestaurantByID
}

export default RestaurantService;