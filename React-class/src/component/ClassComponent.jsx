import { Component } from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
    }
    state = { number: 20, myName: "Toyese" };

    changeName = () => {
        this.setState({ myName: "Raju" });
    }

    increment = () => {
        this.setState({ number: this.state.number + 1 });
    };

    render() {
        return (
            <> 
                <h1>Class Based Component</h1>
                <h2>{this.state.myName}</h2>
                <h3>{this.state.number}</h3>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.changeName}>Change</button>
            </>
        );   
    }
}

export default ClassComponent;