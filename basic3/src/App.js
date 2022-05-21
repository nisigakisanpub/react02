import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeResult: "change default value",
            inputResult: "input default value",
            keyupResult: "keyup default value"
        };
    }
    onChange(e) {
        this.setState({
            changeResult:
                e.target.value
        });
    }
    onInput(e) {
        this.setState({
            inputResult:
                e.target.value
        });
    }
    onKeyup(e) {
        this.setState({
            keyupResult:
                e.target.value
        });
    }
    render() {
        return (
            <div>
                <input value={this.state.changeResult}
                    onChange={this.onChange.bind(this)} placeholder="change" />
                {this.state.changeResult}
                <br />
                <input defaultValue={this.state.inputResult}
                    onInput={this.onInput.bind(this)} placeholder="input" />
                {this.state.inputResult}
                <br />
                <input defaultValue={this.state.keyupResult}
                    onKeyUp={this.onKeyup.bind(this)} placeholder="keyup" />
                {this.state.keyupResult}
            </div>
        );
    }
}
export default App;
