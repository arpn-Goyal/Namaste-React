
import { useRouteError, Link } from 'react-router';

const ErrorPage = () => {
    const err = useRouteError();

    return (
        <div className="flex flex-col items-center text-center mt-20 px-4">

            <h1 className="text-5xl font-bold text-red-500 mb-4">
                Oops!
            </h1>

            <p className="text-lg text-gray-600 mb-3">
                Something went wrong.
            </p>

            <p className="text-gray-500 mb-6">
                {err.status} {err.statusText || err.message}
            </p>

            <Link
                to="/"
                className="px-6 py-2.5 bg-[#fc8019] text-white font-semibold rounded-full hover:bg-[#e96e0c] transition-colors"
            >
                Go back home
            </Link>

        </div>
    );
};

export default ErrorPage;
