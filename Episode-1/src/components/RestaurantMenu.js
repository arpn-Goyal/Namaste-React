import Shimmer from './Shimmer';
import useRestaurantmenu from '../../utils/useRestaurantmenu';
import { useParams } from "react-router";

const RestaurantMenu = () => {
    const { resId } = useParams();
     console.log("Restaurant ID:", resId);

    const { restaurantInfo,
        menuCategories,
        loading } = useRestaurantmenu(resId);
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