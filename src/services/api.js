export default {
    getNews(searchTerm = '') {
        return fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(searchTerm)}&apiKey=0dfabefdb08a44cb8866e5824c68c6d1`)
            .then(response => response.json());
    }
};