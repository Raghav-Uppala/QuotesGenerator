<template>
  <div>
    <TopContainer></TopContainer>
    <QuoteContainer/>
  </div>
</template>

<script>
import QuoteContainer from './components/QuoteContainer.vue';
import TopContainer from './components/TopContainer.vue'

export default {
  name: 'App',
  components: {
    QuoteContainer,
    TopContainer
  }
}
</script>

<style>
#app {
  font-family: Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #494949;
}
</style>
