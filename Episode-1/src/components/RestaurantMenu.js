
import Shimmer from './Shimmer';
import useRestaurantmenu from '../../utils/useRestaurantmenu';
import { useParams } from "react-router";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const {
        restaurantInfo,
        menuCategories,
        loading
    } = useRestaurantmenu(resId);

    if (loading) {
        return <Shimmer />;
    }

    if (!restaurantInfo) {
        return (
            <h2 className="text-center text-xl font-semibold text-gray-600 mt-10">
                Restaurant details unavailable.
            </h2>
        );
    }

    return (
        <div className="max-w-[800px] mx-auto my-5 px-5 py-5">

            {/* Restaurant Details */}
            <div className="mb-8">

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                    {restaurantInfo.name}
                </h2>

                <div className="w-full h-[200px] rounded-2xl bg-gray-200"></div>

                <div className="mt-4 space-y-2 leading-relaxed text-gray-600">

                    <p className="font-semibold text-gray-800">
                        ⭐ {restaurantInfo.avgRatingString}
                        {" "}({restaurantInfo.totalRatingsString})
                        · {restaurantInfo.costForTwoMessage}
                    </p>

                    <p>
                        {restaurantInfo.cuisines?.join(", ")}
                    </p>

                    <p>
                        Outlet · {restaurantInfo.locality}
                    </p>

                    <p className="font-medium text-green-700">
                        {restaurantInfo.sla?.slaString}
                    </p>

                </div>
            </div>

            {/* Search Dishes */}
            <div className="my-6">

                <input
                    type="text"
                    placeholder="Search for dishes"
                    className="w-full px-4 py-3 bg-gray-100 rounded-xl outline-none border border-transparent focus:border-[#fc8019] focus:ring-4 focus:ring-orange-100 transition-all duration-200"
                />

            </div>

            {/* Menu Filters */}
            <div className="flex gap-3 mb-7">

                <button className="px-5 py-2 border border-gray-300 rounded-full bg-white text-gray-700 font-medium hover:bg-green-50 hover:border-green-600 transition-colors">
                    Veg
                </button>

                <button className="px-5 py-2 border border-gray-300 rounded-full bg-white text-gray-700 font-medium hover:bg-orange-50 hover:border-[#fc8019] transition-colors">
                    Bestseller
                </button>

            </div>

            {/* Menu Categories */}
            <div>

                {menuCategories.map((category) => (
                    <div
                        className="border-t border-gray-200 py-5"
                        key={category.card.card.title}
                    >

                        <div className="flex justify-between items-center">

                            <h3 className="text-lg font-bold text-gray-900">
                                {category.card.card.title}
                                {" "}({category.card.card.itemCards?.length})
                            </h3>

                            <span className="text-xl text-gray-600">
                                ⌃
                            </span>

                        </div>

                        {/* Menu Items */}
                        <div className="mt-4 space-y-5">

                            {category.card.card.itemCards?.map((item) => {
                                const dish = item.card.info;

                                return (
                                    <div
                                        key={dish.id}
                                        className="py-4 border-b border-gray-100"
                                    >

                                        <h4 className="text-base font-semibold text-gray-900">
                                            {dish.name}
                                        </h4>

                                        <p className="mt-1 font-medium text-gray-800">
                                            ₹{(dish.price ?? dish.defaultPrice) / 100}
                                        </p>

                                        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                                            {dish.description}
                                        </p>

                                    </div>
                                );
                            })}

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default RestaurantMenu;
