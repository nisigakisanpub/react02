import React, { Component } from 'react';
import Child from './components/Child';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentValue: 100
        };
    }
    addValueParent(value) {
        const newValue = this.state.parentValue + value;
        this.setState({ parentValue: newValue });
    }
    render() {
        return (
            <Child pval={this.state.parentValue} add={this.addValueParent.bind(this)}>
            </Child>
        );
    }
}
export default App;
