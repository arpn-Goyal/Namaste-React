import RestaurantCard from "./RestuarantCard";
import restaurants from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [topRated, setToprated] = useState(restaurants);

    const filterTopRatedRes =()=>{
        setToprated(restaurants.filter(r => r.info.avgRating > 4));
    }
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filter-btn" onClick={() => {filterTopRatedRes()}}>
                ★ Top Rated Restaurants
            </div>
            <div className="res-container">
                {
                    topRated.map(restaurant => <RestaurantCard key={restaurant.info.id} restObj={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;