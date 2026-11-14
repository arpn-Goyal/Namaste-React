
import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {},
            count1: 0,
            count2: 1,
        };

        console.log(`Mounted : ${this.props.name}Child's Constructor`);
    }

    async componentDidMount() {
        console.log(`Mounted : ${this.props.name}Child's Did Mount`);

        const response = await fetch('https://dummyjson.com/users/1');
        const json = await response.json();

        console.log(json);

        this.setState({
            userInfo: json
        });
    }

    componentDidUpdate() {
        console.log(`Mounted : ${this.props.name}Child's DidUpdate`);
    }

    componentWillUnmount() {
        console.log(`Unmounted: ${this.props.name} child's WillUnmounted Called`);
    }

    render() {
        console.log(`Mounted : ${this.props.name}Child's Render Method`);

        const { userInfo } = this.state;

        if (!userInfo.id) {
            return (
                <h2 className="text-lg font-semibold text-gray-500 mt-6">
                    Loading User Information...
                </h2>
            );
        }

        const {
            firstName,
            lastName,
            age,
            email,
            university,
            company
        } = this.state.userInfo;

        return (
            <div className="max-w-md mt-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {firstName} {lastName}
                </h2>

                <div className="space-y-3 text-gray-600">

                    <p>
                        <span className="font-semibold text-gray-800">Age:</span>{" "}
                        {age}
                    </p>

                    <p>
                        <span className="font-semibold text-gray-800">Email:</span>{" "}
                        {email}
                    </p>

                    <p>
                        <span className="font-semibold text-gray-800">University:</span>{" "}
                        {university}
                    </p>

                    <p>
                        <span className="font-semibold text-gray-800">Company:</span>{" "}
                        {company.name}
                    </p>

                    <p>
                        <span className="font-semibold text-gray-800">Designation:</span>{" "}
                        {company.title}
                    </p>

                </div>
            </div>
        );
    }
}

export default UserClass;
