import React, { Component } from "react";

class Profile extends Component {

    state = {
        id:null,
    }

    componentDidMount() {
        
    }


    render() {
        return (
            <div className="profile">
                <h1>Profile</h1>
                <ul className="ulprofile">
                    <li className="liprofile">ID :</li>
                </ul>
            </div>
        );
    }
}

export default Profile;
