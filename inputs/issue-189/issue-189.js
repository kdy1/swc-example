import React from 'react';
import ReactDOM from 'react-dom'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let self = this;
        console.log(self);
    }
    render() {
        return (
            React.createElement("h1", null, "Hi, 世界！")
            // <h1>hi</h1>
        )
    }
}

function main() {
    console.log(React);
    console.log(ReactDOM);
    console.log(new HomePage());
}

main();