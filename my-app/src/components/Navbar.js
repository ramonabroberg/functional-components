import React from "react";

class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!",
            button: "log in",
        }
    }

    handleClick() {
        this.setState((prevState) => {
            console.log(this.state.message)
            return {
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                button: prevState.button === "log in" ? "log out" : "log in",
            }
        })
    }

    render() {
        return (
            <div>
                <h1>My Gallery</h1>
                <span>{this.state.message}</span>
                <button onClick={() => this.handleClick()}>{this.state.button}</button>
            </div>
        )
    }
}

export default NavBarSimple;