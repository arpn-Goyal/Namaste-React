import RestaurantCard from "./RestuarantCard";
import restaurants from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
    const [searchText, setSearchText] = useState("");
    // console.log(useState(restaurants));

    const searchResturants = () => {

    }
    const filterTopRatedRes = () => {
        setFilteredRestaurants(restaurants.filter(r => r.info.avgRating > 4));
    }
    return (
        <div className="body">
            <div className="search">
                <span className="search-icon">⌕</span>
                <input
                    onChange={(e) => {
                        const value = e.target.value;
                        setSearchText(value);

                        const filtered = restaurants.filter(r =>
                            r.info.cuisines.some((cuisine) =>
                                cuisine.toLowerCase().includes(value.toLowerCase())
                            ));
                        setFilteredRestaurants(filtered);
                    }}
                    type="text"
                    value={searchText}
                    placeholder="Search restaurants..."
                />
            </div>
            <div className="filter-btn" onClick={() => { filterTopRatedRes() }}>
                ★ Top Rated Restaurants
            </div>
            <div className="res-container">
                {
                    filteredRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} restObj={restaurant} />)
                }
            </div>
        </div>
    )
}

export default Body;