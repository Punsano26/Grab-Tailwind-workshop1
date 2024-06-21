import React from 'react'

export const Card = ({img, title, type}) => {
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
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
