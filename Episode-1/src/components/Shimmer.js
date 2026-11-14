
const Shimmer = () => {
    return (
        <div className="flex flex-wrap gap-5 p-5">

            {Array(10).fill("").map((_, index) => (
                <div
                    key={index}
                    className="w-[220px] p-2.5 rounded-2xl bg-white"
                >
                    {/* Image */}
                    <div className="w-full h-[180px] rounded-xl bg-gray-200 animate-pulse" />

                    {/* Title */}
                    <div className="w-3/4 h-4 mt-4 rounded-md bg-gray-200 animate-pulse" />

                    {/* Rating */}
                    <div className="w-[45%] h-3 mt-3 rounded-md bg-gray-200 animate-pulse" />

                    {/* Cuisine */}
                    <div className="w-[90%] h-3 mt-3 rounded-md bg-gray-200 animate-pulse" />

                    {/* Location */}
                    <div className="w-3/5 h-3 mt-3 rounded-md bg-gray-200 animate-pulse" />
                </div>
            ))}

        </div>
    );
};

export default Shimmer;
