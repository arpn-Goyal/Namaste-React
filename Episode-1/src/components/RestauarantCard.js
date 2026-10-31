import { RES_IMG} from "../../utils/constant";
// Restraunt Container
const RestaurantCard = ({restObj}) => {
    // console.log(restObj)
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        locality,
        costForTwo,
        sla: { slaString }
    } = restObj.info;
    return (
        <div className="res-card">
            <img className="res-logo" src={RES_IMG + cloudinaryImageId} alt={name} />
            <div className="res-card-details">
                <h3>{name}</h3>

                <div className="res-rating">
                    <span>★</span> {avgRating} · {slaString}
                </div>

                <p>{cuisines.join(",")}</p>
                <p>{locality}</p>
                <p>{costForTwo}</p>
            </div>
        </div>
    )
}


export default RestaurantCard;