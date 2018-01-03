import React, { Component } from "react";
import "./IPAddress.css";

// This component is responsible for how I'm displaying any additional text and ensuring the IP address is visually formatted the way I want
class IPAddress extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.ip}</h1>
                <p>This is your IP address</p>
            </div>
        );
    }
}

export default IPAddress;