import RestaurantCard from "./RestuarantCard";
import restaurants from "../../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    restaurants.map(restaurant => <RestaurantCard key={restaurant.info.id} restObj={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;