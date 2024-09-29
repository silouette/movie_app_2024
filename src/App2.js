import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        count: 0
    };

    componentDidMount() {
        console.log('component rendered');
    }

    componentDidUpdate() {
        console.log('I just updated');
    }

    componentWillUnmount() {
        console.log('Goodbye, cruel world');
    }

    add = () => {
        console.log('add');
        this.setState(current => ({
            count: current.count + 1    
        }));
    };

    minus = () => {
        console.log('minus');
        this.setState(current => ({
            count: current.count - 1
        }));
    };

    render() {
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default App;