import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import Router from "./routes/Router";
import SuspenseContent from "./Components/SuspenseContent";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<SuspenseContent />}>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </Suspense>
  </React.StrictMode>
);
