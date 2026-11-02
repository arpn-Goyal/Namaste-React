import RestaurantCard from "./RestauarantCard";
import restaurants from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    // console.log(useState(restaurants));

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            // const fetchedData = await fetch(
            //     "https://proxy.cors.dev/https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.91460&lng=75.85430&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            // );
            const fetchedData = await fetch(
                "https://proxy.cors.dev/https://namastedev.com/api/v1/listRestaurants"
            );
            const json = await fetchedData.json();
            const restaurants = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setFilteredRestaurants(restaurants ?? []);
        } catch (error) {
            console.error("Failed to fetch restaurants:", error);
        } finally {
            setIsLoading(false);
        }
        // console.log(json);
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
            {
                isLoading ? (
                    <Shimmer />
                ) :
                    (<div className="res-container">
                        {
                            filteredRestaurants.map(restaurant => (
                                <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
                                    <RestaurantCard restObj={restaurant} />
                                </Link>
                            )
                            )
                        }
                    </div>
                    )
            }
        </div>
    )
}

export default Body;