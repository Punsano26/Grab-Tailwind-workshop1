import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
const FormEdit = () => {
     const { id } = useParams();
  const [restaurant, setRestaurant] = useState({
    img: "",
    title: "",
    type: "",
  });
    useEffect(() => {
      fetch("http://localhost:3000/restaurants/" + id)
        .then(
          // convert เป็น jason
          (res) => {
            return res.json();
          }
        )
        // เรียกใช้ State
        .then((response) => {
          setRestaurant(response);
        })
        // เปลี่ยนเป็น messsage
        .catch((err) => {
          console.log(err.message);
        });
    }, [id]);
   
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleSummit = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants/" + id, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(restaurant),
      }); //เราส่ง http reqauis ไปโดย method post
      if (response.ok) {
        //ถ้าสำเร็จ จะข้อควมแจ้งเตือน
        alert("Restaurant add success fully!");
       
      }
    } catch (error) {}
  };

  return (
    <div>
      <div className="">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSummit}>
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
                  <div className="col-lg-12 text-center py-2 text-lg">
                    <div className="form-group">
                      <label htmlFor="img">Image</label>
                      {restaurant.img && (
                        <div className="flex items-center gap-2">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormEdit;
