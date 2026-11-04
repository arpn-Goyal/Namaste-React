import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count1 : 0,
            count2 : 1,
        }
        console.log(`Mounted : Child's Constructor`);
    }

    componentDidMount(){
        console.log(`Mounted : Child's Did Mount`);
    }
    componentDidUpdate(){
        console.log(`Mounted : Child's DidUpdate`)
    }
    render() {
        console.log(`Mounted : Child's Render Method`);
        const {name, role, email, location} = this.props;
        return (
            <div className="user-card">
                <h2>Count 1 : {this.state.count1}</h2>
                <button onClick={()=>{
                    this.setState({
                        count1: this.state.count1 + 1,
                    });
                }}>Count Increase </button>
                <h2>{this.props.name}</h2>
                <p>Role: {this.props.role}</p>
                <p>Email: {this.props.email}</p>
                <p>Location: {this.props.location}</p>

            </div>
        );
    }
}

export default UserClass;