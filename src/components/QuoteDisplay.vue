<template>
  <div id="quotecontainer">
    <span id="quote">"{{ random_quote }}"</span><br>
    <span id="author">- {{ author }}</span><br>
    <div v-show="this.show_historical_context" id="historical_context">{{ historical_context }}</div>
  </div>
</template>

<style>

#quote {
  font-size: 40px;
  color: #303030;;
  font-style:italic;
}
#author {
  font-size: 30px;
  color:darkgray;
}

#historical_context {
  padding-top:5vh;
  font-size: 20px;
  color:darkgray;
  margin-left:10vw;
  margin-right:10vw;
}

#quotecontainer {
  margin-top:10vh;
  margin-right:10vw;
  margin-left:10vw;
}

</style>

<script>

export default {
  props: {
    random_quote: String,
    author: String,
    historical_context: String,
    show_historical_context: Boolean
  },
  name: 'QuoteDisplay'
}
</script>
