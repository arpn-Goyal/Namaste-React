import RestaurantCard from "./RestauarantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const userOnline = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const fetchedData = await fetch(
                "https://proxy.cors.dev/https://namastedev.com/api/v1/listRestaurants"
            );

            const json = await fetchedData.json();

            const restaurantList =
                json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];

            setRestaurants(restaurantList);
            setFilteredRestaurants(restaurantList);

        } catch (error) {
            console.error("Failed to fetch restaurants:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const filterTopRatedRes = () => {
        const filtered = restaurants.filter(
            (r) => r.info.avgRating > 4
        );

        setFilteredRestaurants(filtered);
    };

    const handleSearch = (value) => {
        setSearchText(value);

        const filtered = restaurants.filter((r) =>
            r.info.cuisines.some((cuisine) =>
                cuisine.toLowerCase().includes(value.toLowerCase())
            )
        );

        setFilteredRestaurants(filtered);
    };

    if (!userOnline) {
        return (
            <h2 className="text-center text-xl font-semibold text-red-600 mt-10">
                Oops! You're having an internet connection issue.
            </h2>
        );
    }

    return (
        <div className="w-full">

            {/* Search Bar */}
            <div className="flex items-center gap-3 mx-4 sm:mx-6 md:mx-8 mt-6 px-4 h-[54px] bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300 focus-within:border-[#fc8019] focus-within:ring-4 focus-within:ring-orange-100">

                <span className="text-2xl text-gray-500">
                    ⌕
                </span>

                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search restaurants..."
                    className="flex-1 w-full h-full bg-transparent text-base text-gray-800 placeholder:text-gray-400 outline-none"
                />
            </div>

            {/* Filter Button */}
            <button
                onClick={filterTopRatedRes}
                className="flex items-center gap-2 mx-4 sm:mx-6 md:mx-8 mt-4 mb-5 px-5 py-2.5 bg-white text-gray-800 border border-gray-300 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:border-gray-800 hover:-translate-y-0.5 hover:shadow-md active:scale-95"
            >
                <span className="text-yellow-500 text-lg">★</span>
                Top Rated Restaurants
            </button>

            {/* Restaurant Cards */}
            {isLoading ? (
                <Shimmer />
            ) : (
                <div className="flex flex-wrap items-start gap-6 p-5">

                    {filteredRestaurants.map((restaurant) => (
                        <Link
                            key={restaurant.info.id}
                            to={`/restaurant/${restaurant.info.id}`}
                            className="text-inherit no-underline"
                        >
                            <RestaurantCard restObj={restaurant} />
                        </Link>
                    ))}

                </div>
            )}
        </div>
    );
};

export default Body;
