
import React from 'react';
import UserClass from './UserClass';

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("Mounted : Parent's Constructor");
    }

    componentDidMount() {
        console.log("Mounted : Parents Did mount");
    }

    render() {
        console.log("Mounted : Parent's render method");

        return (
            <div className="max-w-[600px] mx-auto my-10 px-4">

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    About Us
                </h1>

                <p className="text-gray-600 leading-relaxed mb-4">
                    Welcome to our food app! We help you discover great restaurants near
                    you and explore dishes from different cuisines, all in one place.
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                    This project is built with React as part of my learning journey,
                    using components, hooks and routing.
                </p>

                <UserClass
                    name="First"
                    role="Full Stack Developer"
                    email="firstChild@example.com"
                    location="Punjab, India"
                />

            </div>
        );
    }
}

export default About;
