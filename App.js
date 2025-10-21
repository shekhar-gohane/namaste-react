import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://seeklogo.com/images/F/foodx-online-food-ordering-system-logo-145CB16578-seeklogo.com.png" />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );  
};

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <h3>Meghana Foods</h3>
        </div>
    );
};

const Body = () => {
    <div className="body">
        <div className="search">Search</div>
        <div className="restaurant-container">
            <RestaurantCard/>
        </div>
    </div>
};

const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);