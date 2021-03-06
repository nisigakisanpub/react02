import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "React sites",
            url1: "https://reactjs.org/",
            url2: "https://material-ui.com/"
        };
    }
    render() {
        return (
            <div>
                <h3>{this.state.title}</h3>
                <ul>
                    <li><a href={this.state.url1}>React</a></li>
                    <li><a href={this.state.url2}>Material-UI</a></li>
                </ul>
            </div>
        );
    }
}
export default App;

