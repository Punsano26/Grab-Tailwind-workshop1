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

// update restaurant data
const editRestaurant = async (id, restaurant) => {
    return await api.put(RESTO_API + `/${id}`,restaurant);
}

// Delete restaurant data 
const deleteRestaurant =  async (id, restaurant) => {
    return await api.delete(RESTO_API + `/${id}`, restaurant);
}

//add restauranr data
const addRestaurant = async (id, restaurant) => {
    return await api.post(RESTO_API + `/${id}`, restaurant);
}
const RestaurantService = {
    getAllRestaurant,
    getRestaurantByID,
    editRestaurant,
    deleteRestaurant,
    addRestaurant
}

export default RestaurantService;