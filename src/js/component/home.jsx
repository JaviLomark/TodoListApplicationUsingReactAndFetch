import React from "react";
import TaskList from "./taskList.jsx";


//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0 myFondo">
			<div className="row mt-4 mb-3">
				<div className="col-12">
					<h1 className=" text-center">
						 TODO LIST
					</h1>
					<TaskList />
				</div>
			</div>
		
	</div>
	);
};

export default Home;