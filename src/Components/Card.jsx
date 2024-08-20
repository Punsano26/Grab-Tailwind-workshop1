import React from "react";
import Swal from "sweetalert2";
import { useAuthContext } from "../context/AuthContext";
import RestaurantService from "../services/restaurant.service";

export const Card = ({ id, img, title, type }) => {
  const { user } = useAuthContext();
  const handleDelete = async (id) => {
    try {
      const response = await RestaurantService.deleteRestaurant(id);
      console.log(response.data);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "สำเร็จ!",
          text: response.data.message,
          position: "top-end",
          timer: 7000,
        }).then(() => {
          window.location.reload();
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Restaurant Delete",
        text: error?.response?.data?.message || error.message,
      });
    }
  };

  return (
    <div>
      <div className="card card-compact w-80 bg-base-100 shadow-xl hover:translate-y-3">
        <figure>
          <img src={img} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{type}</p>
          {user &&
            (user.roles.includes("ROLE_MODERATOR") ||
              user.roles.includes("ROLE_ADMIN")) && (
              <div className="card-actions justify-end">
                <a href={`/Edit/${id}`} className="btn btn-primary">
                  Edit
                </a>
                {user.roles.includes("ROLE_ADMIN") && (
                  <button
                    onClick={() => handleDelete(id)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>
                )}
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
