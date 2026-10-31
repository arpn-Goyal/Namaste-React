import React from 'react'
import { useRouteError, Link } from 'react-router';

const ErrorPage = () => {
    const err = useRouteError();

    return (
        <div style={{ textAlign: "center", marginTop: "80px" }}>
            <h1>Oops!</h1>
            <p>Something went wrong.</p>
            <p>
                {err.status} {err.statusText || err.message}
            </p>
            <Link to="/">Go back home</Link>
        </div>
    )
}

export default ErrorPage