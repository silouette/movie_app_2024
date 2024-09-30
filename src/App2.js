import React from 'react';
import axios from 'axios';

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    // 영화 데이터 로딩(getMovies() 함수는 시간이 필요하기에 async 추가)
    getMovies = async () => {
        // axios.get()의 실행을 기다리도록 await 추가
        // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
        
        // ES6의 구조 분해 할당으로 movies 키의 데이터들 받아옴
        const {
            data: {
                data: { movies }
            }
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
        console.log(movies);
    };

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading } = this.state;
        return <div>{isLoading ? 'Loading...' : 'We are ready'} </div>;
    }
}

export default App;