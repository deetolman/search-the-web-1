export default {
    getNews(searchTerm = '') {

        if(searchTerm.startsWith('bananas')) {
            return Promise.reject(new Error('sorry that is a bad search'));
        }
        return fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(searchTerm)}&apiKey=0dfabefdb08a44cb8866e5824c68c6d1`)
            .then(response => response.json());
    }
};