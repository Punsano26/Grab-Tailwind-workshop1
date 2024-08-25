import React from "react";
import { useAuthContext } from "../context/AuthContext";
import Loading from "../Components/Loading";
import loadinganimetion from "../loading/loading.json";
const ProfileUser = () => {
  const { user } = useAuthContext();
  const maskingString = (str, start, end) => {
    if (
      !str ||
      start < 0 ||
      start > str.length ||
      end < 0 ||
      end > str.length ||
      start > end
    ) {
      return str;
    }
    const maskedStr =
      str.substring(0, start) + "*".repeat(20) + str.substring(end);
    return maskedStr;
  };
  return (
    (<loading animetion={loadinganimetion} />),
    (
      <div className="container flex flex-col items-center p-10 mx-auto space-y-6">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="User"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">UserProfile</h2>
            <p>Use ID: {user.id}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user?.roles.map((role) => role).join(", ")}</p>
            <p>
              Token:{" "}
              {maskingString(user.accessToken, 3, user.accessToken.length - 3)}
            </p>
            <div className="card-actions justify-end py-5">
              <a href="/" className="btn btn-primary">Go back</a>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProfileUser;
