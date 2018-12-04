<template>
    <section>
        <h2>News</h2>
        <div>
            <NewsSearch :onSearch="handleSearch" :search="search"/>
            <ul>
                <NewsItem v-for="(newsItem, i) in news"
                    :key="i"
                    :newsItem="newsItem"
                    /> 
            </ul>
        </div>
    </section>
</template>

<script>
import api from '../services/api.js';
import NewsItem from './NewsItem';
import NewsSearch from './NewsSearch';

export default {
    data() {
        return {
            news: null,
            search: decodeURIComponent(this.$route.query.search),
        };
    },
    components: {
        NewsItem,
        NewsSearch
    },
    created() {
        this.searchNews();
    },
    watch: {
        $route(newRoute, oldRoute) {
            const newSearch = newRoute.query.search;
            const oldSearch = oldRoute.query.search;
            // let newPage = newRoute.query.page;
            // const oldPage = oldRoute.query.page;
            if(newSearch === oldSearch) return;
            if(newSearch !== oldSearch) {
                // newPage = 1;
            }
        }
    },
    methods: {
        handleSearch(search) {
            this.search = search || '';
        },
        searchNews() {
            api.getNews(this.search)
                .then(response => {
                    console.log('response', response.articles);
                    this.news = response.articles;
                });
        }
    }
};

</script>

<style>

</style>
