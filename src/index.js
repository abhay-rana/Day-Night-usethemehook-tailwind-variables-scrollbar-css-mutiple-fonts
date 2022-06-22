import React from "react";
import "./wdyr";
import ReactDOM from "react-dom/client";

import "./global.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<>
		<App />
	</>
);
