<template>
    <section>
        <h2>News</h2>
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
import NewsItem from './NewsItem';

export default {
    data() {
        return {
            news: null,
        };
    },
    components: {
        NewsItem
    },
    created() {
        this.searchNews();
    },
    methods: {
        searchNews() {
            api.getNews()
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
