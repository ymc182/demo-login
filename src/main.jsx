import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NearWrapper } from "./context/nearContext";
import "./styles/index.css";
import "./styles/modal.css";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<NearWrapper>
			<App />
		</NearWrapper>
	</React.StrictMode>
);
