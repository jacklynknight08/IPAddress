import React, { Component } from "react";

var xhr;

class IPAddressContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            ip_address : "..."
        };

        this.processRequest = this.processRequest.bind(this);
    }

    // When this component becomes active and componetDidMount lifecycle method gets called, the HttpRequest is made and sent off to 'ipinfo.io'
    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipinfo.io/json", true);
        xhr.send();

        xhr.addEventListener("readystatechange", this.processRequest, false);
    }

    // When response is heard, call processRequest function to deal with result
    // Parse the data received and assign it to the object 'response'
    // Store the IP address from the response into a state variable 'ip_address'
    processRequest() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);

            this.setState({
                ip_address: response.ip
            });
        }
    }

    // Reference the IP address stored by the state
    render() {
        return(
            <div>{this.state.ip_address}</div>
        );
    }
}

export default IPAddressContainer;