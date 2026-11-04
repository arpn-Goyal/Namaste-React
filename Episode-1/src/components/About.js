import React from 'react'
import UserClass from './UserClass'
import React from 'react';

class About extends React.Component {
  constructor(props){
    super(props);

    console.log("Mounted : Parent's Construstor");
  }
  componentDidMount(){
    console.log('Mounted : Parents Did mount');
  }
  render() {
    console.log("Mounted : Parent's render method")
    return (
      <div style={{ maxWidth: "600px", margin: "40px auto", padding: "0 16px" }}>
        <h1>About Us</h1>
        <p>
          Welcome to our food app! We help you discover great restaurants near
          you and explore dishes from different cuisines, all in one place.
        </p>
        <p>
          This project is built with React as part of my learning journey,
          using components, hooks and routing.
        </p>

        <UserClass name="Arpan Goyal"
          role="Full Stack Developer"
          email="arpan@example.com"
          location="Punjab, India" />
      </div>
    )
  }
}

export default About;