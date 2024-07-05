import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2';
const Formadd = () => {
  const [restaurant, setRestaurant] = useState({
    img: "",
    title: "",
    type: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ป้องกันการ Reface ของการส่งฟอร์ม
    try {
      const response = await fetch("http://localhost:3000/restaurants/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(restaurant),
      });

      if (response.ok) {
        // alert("Restaurant added successfully!");
        Swal.fire({
          icon: 'success',
          title: 'Finished!',
          text: 'เพิ่มร้านหารเสร็จแล้ว',
        }).then(() => {
          setRestaurant({
          img: "",
          title: "",
          type: "",
        });
        });
        navigate("/"); 
      } else {
        alert("Failed to add restaurant.");
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: error.message
      });
    }
  };

  return (
    <div>
      <div className="">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title justify-center scroll-pt-px flex flex-col">
                <h2 className="text-3xl">Add Restaurant in Grab!</h2>
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
                  <div className="col-lg-12 text-center py-3 text-lg">
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

export default Formadd;
