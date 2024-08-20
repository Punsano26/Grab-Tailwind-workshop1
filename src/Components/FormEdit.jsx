import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import RestaurantService from "../services/restaurant.service";
const FormEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({
    img: "",
    title: "",
    type: "",
  });
  //2. Get restaurant By ID
  useEffect(() => {
    RestaurantService.getRestaurantByID(id).then((response) => {
      if (response.status === 200) {
        setRestaurant(response.data);
      }
    });
   
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleSummit = async (e) => {
    try {
      const response = await RestaurantService.editRestaurant(id, restaurant);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "สำเร็จ!",
          text: response.data.message,
        });
        
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Restaurant Update",
        text: error?.response?.data?.message || error.message,
      });
    }
  };

  return (
    <div>
      <div className="">
        <div className="offset-lg-3 col-lg-6">
          <label className="container" >
            <div className="card">
              <div className="card-title justify-center scroll-pt-px flex flex-col">
                <h2 className="text-3xl">Edit Restaurant in Grab!</h2>
                <div className="items-center">
                  <img
                    className="w-32 center"
                    src="https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/restaurant-icon.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="card-body items-center justify-center">
                <div className="row">
                  <div className="col-lg-12 text-center py-2 text-lg">
                    <div className="form-group">
                      <label htmlFor="img">Image</label>
                      {restaurant.img && (
                        <div className="flex items-center gap-2 py-4">
                          <img src={restaurant.img} className="h-32" alt="" />
                        </div>
                      )}
                      <input
                        type="text"
                        required
                        name="img"
                        id="img"
                        value={restaurant.img}
                        onChange={handleChange}
                        className="form-control border-double border-4 border-sky-500"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 text-center py-3 text-lg">
                    <div className="form-group">
                      <label htmlFor="title">Your title restaurant</label>
                      <input
                        type="text"
                        required
                        name="title"
                        id="title"
                        value={restaurant.title}
                        onChange={handleChange}
                        className="form-control border-double border-4 border-sky-500"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 text-center py-3 text-lg">
                    <div className="form-group">
                      <label htmlFor="type">Description</label>
                      <input
                        type="text"
                        required
                        name="type"
                        id="type"
                        value={restaurant.type}
                        onChange={handleChange}
                        className="form-control border-double border-4 border-sky-500"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 text-center py-3 text-lg">
                    <div className="form-group">
                      <button className="btn btn-success mx-5" onClick={handleSummit}>
                        Edit Now!
                      </button>
                      <Link to="/" className="btn btn-danger mx-5">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FormEdit;
