import React from "react";
import { Link } from "react-router-dom";


const MainPage = () => {

    return (
        <div>
            <h3>space_for_name</h3>
            <small>Main Page</small>
            <Link to="/poetry">Poetry</Link>
            <Link to="/painting">Painting</Link>
        </div>     
    );
}

export default MainPage;