import React from "react";
import ToDosManager from "./to-dos-manager.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<ToDosManager />
		</div>
	);
};

export default Home;
