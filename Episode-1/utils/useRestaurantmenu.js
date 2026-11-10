import React, { useEffect, useState } from 'react'

const useRestaurantmenu = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [menuCategories, setMenuCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!resId) {
            console.error("Restaurant ID is missing!");
            setLoading(false);
            return;
        }
        
        const fetchMenu = async () => {
            try {
                console.log("Fetching menu started...");
                const response = await fetch(`https://proxy.cors.dev/https://namastedev.com/api/v1/listRestaurantMenu/${resId}`);
                console.log("Response status:", response.status);

                const json = await response.json();
                console.log("Complete API response:", json);

                // console.log("Restaurant cards:", json?.data?.cards);
                const cards = json?.data?.cards;
                if (!cards) {
                    throw new Error("Restaurant cards not found in API response");
                }
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

        fetchMenu();

    }, [resId])

    return { restaurantInfo, menuCategories, loading };
}

export default useRestaurantmenu;