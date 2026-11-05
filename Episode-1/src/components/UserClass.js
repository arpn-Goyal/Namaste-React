import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {},
            count1: 0,
            count2: 1,
        }
        console.log(`Mounted : ${this.props.name}Child's Constructor`);
    }

    async componentDidMount() {
        console.log(`Mounted : ${this.props.name}Child's Did Mount`);
          
        const response = await fetch('https://dummyjson.com/users/1');
        const json = await response.json();
        console.log(json);

        this.setState({
            userInfo: json
        })
    }
    componentDidUpdate(){
        console.log(`Mounted : ${this.props.name}Child's DidUpdate`)
    }

    componentWillUnmount(){
        console.log(`Unmounted: ${this.props.name} child's WillUnmounted Called`)
    }
    render() {
        console.log(`Mounted :  ${this.props.name}Child's Render Method`);
        const {userInfo} = this.state;
        if(!userInfo.id) 
            return <h2>Loading User Information...</h2>;

        const { firstName, lastName,age, email, university, company } = this.state.userInfo;
        return (
            <div className="user-card">
                {/* <h2>Count 1 : {this.state.count1}</h2>
                <button onClick={()=>{
                    this.setState((prevState) =>{
                        count1: prevState.count1 + 1,
                    });
                }}>Count Increase </button> */}
                <h2>{firstName} {lastName}</h2>
                <p>Age: {age}</p>
                <p>Email: {email}</p>
                <p>University: {university}</p>
                <p>Company: {company.name}</p>
                <p>Designation: {company.title}</p> 
                {/* <p>Role: {this.props.role}</p>
                <p>Email: {this.props.email}</p>
                <p>Location: {this.props.location}</p> */}

            </div>
        );
    }
}

export default UserClass;