<template>
    <section>
        <h2>News</h2>
           
        <NewsSearch :onSearch="handleSearch" :search="search"/>

        <Loader :loading="loading"/>

        <div>
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
import NewsSearch from './NewsSearch';
import NewsItem from './NewsItem';
import Loader from './Loader';

export default {
    data() {
        const search = this.$route.query.search;
        return {
            news: null,
            loading: false,
            search: search ? decodeURIComponent(search) : '',
        };
    },
    components: {
        NewsItem,
        NewsSearch,
        Loader
    },
    created() {
        this.searchNews();
    },
    watch: {
        $route(newRoute, oldRoute) {
            const newSearch = newRoute.query.search;
            const oldSearch = oldRoute.query.search;
            if(newSearch === oldSearch) return;
            this.search = decodeURIComponent(newSearch);
            this.searchNews();
        }
    },
    methods: {
        handleSearch(search) {
            this.search = search || '';
            this.searchNews();
        },
        searchNews() {
            this.loading = true;

            api.getNews(this.search)
                .then(response => {
                    this.news = response.articles;
                    this.loading = false;
                });
        }
    }
};

</script>

<style>

</style>
