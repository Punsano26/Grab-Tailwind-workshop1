import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Add = () => {
  const [restaurant, setRestaurant] = useState({
    id: "",
    img: "",
    title: "",
    type: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  const handleSummit = (e) => {
    e.preventDefault();
    const restaurantData = {
      id: restaurant.id,
      img: restaurant.img,
      title: restaurant.title,
      type: restaurant.type,
    };
    fetch("http://localhost:3000/restaurants", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(restaurantData),
    })
      .then((res) => {
        alert("save sucessfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSummit}>
            <div className="card">
              <div className="card-title justify-center scroll-pt-px">
                <h2 className="text-3xl">Add Restaurant in Grab!</h2>
                {/* <div className="items-center">
                <img
                  className="w-32 center"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/restaurant-icon.png"
                  alt=""
                />
              </div> */}
              </div>
              
              <div className="card-body items-center justify-center">
                <div className="row">
                  <div className="col-lg-12 text-center py-2 text-lg">
                    <div className="form-group">
                      <label htmlFor="id">Id restaurant</label>
                      <input
                        type="text"
                        required
                        name="id"
                        id="id"
                        value={restaurant.id}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 text-center py-2 text-lg">
                    <div className="form-group">
                      <label htmlFor="img">Image</label>
                      <input
                        type="text"
                        required
                        name="img"
                        id="img"
                        value={restaurant.img}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 text-center py-2 text-lg">
                    <div className="form-group">
                      <label htmlFor="title">Your title restaurant</label>
                      <input
                        type="text"
                        required
                        name="title"
                        id="title"
                        value={restaurant.title}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 text-center py-2 text-lg">
                    <div className="form-group">
                      <label htmlFor="type">Description</label>
                      <input
                        type="text"
                        required
                        name="type"
                        id="type"
                        value={restaurant.type}
                        onChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 text-center py-2 text-lg">
                    <div className="form-group">
                      <button className="btn btn-success mx-5" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger mx-5">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
