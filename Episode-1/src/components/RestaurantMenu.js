import React, { useEffect, useState } from 'react'
import mockMenu from '../../utils/mockMenu.json';

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [])

    // Using the saved Swiggy response instead of the blocked live AP
    const fetchMenu = async () => {
        setResInfo(mockMenu);
        console.log(resInfo);
    }
    return (
        <div className="restaurant-menu">

            {/* Restaurant Details */}
            <div className="restaurant-header">
                <h2>Restaurant Name</h2>
                <div className="restaurant-image"></div>

                <div className="restaurant-info">
                    <p>Rating · Ratings · Price for two</p>
                    <p>Cuisines</p>
                    <p>Outlet · Location</p>
                    <p>Delivery time</p>
                </div>
            </div>

            {/* Search Dishes */}
            <div className="menu-search">
                <input
                    type="text"
                    placeholder="Search for dishes"
                />
            </div>

            {/* Menu Filters */}
            <div className="menu-filters">
                <button>Veg</button>
                <button>Bestseller</button>
            </div>

            {/* Menu Categories */}
            <div className="menu-categories">
                <div className="menu-category">
                    <div className="category-header">
                        <h3>Menu Category</h3>
                        <span>⌃</span>
                    </div>

                    {/* Menu Items will be rendered here */}
                    <div className="menu-items">
                        {/* MenuItem component will go here */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RestaurantMenu