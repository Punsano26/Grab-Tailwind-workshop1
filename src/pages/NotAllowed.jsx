import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import NotAlowedimg from "../assets/say-no.png"
const NotAllowed = () => {
    const [counter, setCounter] = useState(10);
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setInterval(() => {
            navigate("/");
        }, 5000);
        const countDown = setInterval(() => {
            setCounter((prevCounter) => {
                if(prevCounter <=1) {
                    clearInterval(countDown);
                    return 0;
                }
                return prevCounter - 1;
            })
        }, 1000);
        return () => {
            clearTimeout(timer);
            clearInterval(countDown);
        }
       }, [navigate]);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={NotAlowedimg}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            NotAllowed
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>You are not allowed to access this page.</p>
         
        </div>
      </div>
    </div>
  );
}

export default NotAllowed