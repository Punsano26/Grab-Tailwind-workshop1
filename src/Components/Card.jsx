import React from "react";

export const Card = ({ id, img, title, type }) => {
  const handleDelete = async (id) => {
    try {
      const response = await fetch("http://localhost:3000/restaurants/" + id, {
        method: "DELETE",
      }); //เราส่ง http reqauis ไปโดย method post
      if (response.ok) {
        //ถ้าสำเร็จ จะข้อควมแจ้งเตือน
        alert("Restaurant Delete success fully id =" + id + "is delete");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
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
          <div className="card-actions justify-end">
            <a href={`/Edit/${id}`} className="btn btn-primary">
              Edit
            </a>
            <button onClick={() => handleDelete(id)} className="btn btn-error">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
