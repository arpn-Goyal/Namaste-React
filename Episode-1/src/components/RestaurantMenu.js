import React, { useEffect, useState } from 'react'
import mockMenu from '../../utils/mockMenu.json';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';

const RestaurantMenu = () => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [menuCategories, setMenuCategories] = useState([]);
    const [loading, setLoading] = useState(true);4

    const {resId} = useParams();
    // console.log(param);

    // console.log("Restaurant Menu Component Rendered");

    useEffect(() => {
        // console.log('UseEffect Starts now');
        fetchMenu();
        // console.log('UseEffect ends now');
    }, [])

    // Using the saved Swiggy response instead of the blocked live AP
    const fetchMenu = async () => {
        try {
            const response = await fetch(`https://proxy.cors.dev/https://namastedev.com/api/v1/listRestaurantMenu/${resId}`);
            const json = await response.json();

            // console.log(json);

            const restaurantData = json.data.cards[2]?.card?.card?.info;

            // Menu Categories
            const categories = json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

            // Keep only actual menu categories
            const filteredCategories = categories?.filter(
                (category) =>
                    category?.card?.card?.["@type"]?.includes("ItemCategory")
            );


            setRestaurantInfo(restaurantData);
            setMenuCategories(filteredCategories || []);

        } catch (error) {
            console.error("Error fetching restaurants:", error);
        } finally {
            setLoading(false);
        }
    }

    // Wait until restaurant information is available
    if (loading) {
        return <Shimmer />;
    }

    if (!restaurantInfo) {
        return <h2>Restaurant details unavailable.</h2>;
    }

    // console.log(restaurants);
    return (
        <div className="restaurant-menu">

            {/* Restaurant Details */}
            <div className="restaurant-header">
                <h2>{restaurantInfo.name}</h2>
                <div className="restaurant-image"></div>

                <div className="restaurant-info">
                    <p>
                        ⭐ {restaurantInfo.avgRatingString}
                        {" "}({restaurantInfo.totalRatingsString})
                        · {restaurantInfo.costForTwoMessage}
                    </p>

                    <p>{restaurantInfo.cuisines?.join(", ")}</p>

                    <p>
                        Outlet · {restaurantInfo.locality}
                    </p>

                    <p>{restaurantInfo.sla?.slaString}</p>
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
                {menuCategories.map((category) => (
                    <div
                        className="menu-category"
                        key={category.card.card.title}
                    >
                        <div className="category-header">
                            <h3>
                                {category.card.card.title}
                                {" "}({category.card.card.itemCards?.length})
                            </h3>

                            <span>⌃</span>
                        </div>

                        <div className="menu-items">

                            {category.card.card.itemCards?.map((item) => {
                                const dish = item.card.info;

                                return (
                                    <div key={dish.id} className="menu-item">
                                        <h4>{dish.name}</h4>

                                        <p>
                                            ₹{(dish.price ?? dish.defaultPrice) / 100}
                                        </p>

                                        <p>{dish.description}</p>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default RestaurantMenu