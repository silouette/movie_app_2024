import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    componentDidMount() {
        // 영화 데이터 로딩
        axios.get('https://yts-proxy.now.sh/list_movies.json');
    }

    render() {
        const { isLoading } = this.state;
        return <div>{isLoading ? 'Loading...' : 'We are ready'} </div>;
    }
}

export default App;