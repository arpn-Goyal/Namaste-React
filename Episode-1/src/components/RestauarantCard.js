
import { RES_IMG } from "../../utils/constant";

const RestaurantCard = ({ restObj }) => {
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
        <div className="w-[280px] sm:w-[300px] md:w-[322px] p-0 bg-white rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)]">

            <img
                className="w-full h-[200px] object-cover rounded-2xl block"
                src={RES_IMG + cloudinaryImageId}
                alt={name}
            />

            <div className="px-2 pb-3 font-sans">

                <h3 className="text-xl font-bold text-gray-900 mt-3 mb-1.5 truncate">
                    {name}
                </h3>

                <div className="text-[15px] font-semibold text-gray-800 mb-1.5">
                    <span className="text-green-700">★</span>
                    {" "}{avgRating} · {slaString}
                </div>

                <p className="text-[15px] text-gray-500 my-1 leading-relaxed line-clamp-1">
                    {cuisines.join(", ")}
                </p>

                <p className="text-[15px] text-gray-500 my-1 leading-relaxed">
                    {locality}
                </p>

                <p className="text-[15px] text-gray-500 my-1 leading-relaxed">
                    {costForTwo}
                </p>

            </div>
        </div>
    );
};

export default RestaurantCard;
