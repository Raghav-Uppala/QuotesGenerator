<template>
  <div>
    <div id="buttons">
      <CompleteButton text="New Quote" @func="getQuote"/>
      <CompleteButton text="Historical Context" @func="showHistoricalContext"/>
    </div>
    <QuoteDisplay :show_historical_context="this.show" :random_quote="this.random_quote" :author="this.author" :historical_context="this.historical_context" ></QuoteDisplay>
  </div>
</template>
<style>
#buttons {
  display: flex;
  justify-content:space-between;
  width:55vw;
  margin:auto;
  margin-top:5vh;
}
</style>
<script>
import QuoteDisplay from './QuoteDisplay.vue';
import CompleteButton from './CompleteButton.vue';

import { query, collection, getDocs, getDoc, doc} from "firebase/firestore";
import db from '../firebase/init.js';


export default {
  name: 'QuoteContainer',
  components: {
    QuoteDisplay,
    CompleteButton
  },
  data() {
    return {
      quotes:[],
      random_quote_id: [null],
      random_quote: "Quote incoming",
      author: "By Raghav Uppala",
      historical_context:"Well, there is no quote yet.",
      show: false
    }
  },
  created() {
    this.qutoesCreated()
  },
  methods: {
    async qutoesCreated() { // method on creation so that it can use await
      await this.getQuotesID(); // getting the quote ids
      this.getQuote() // after getting the ids, picking a quote
    },
    async getQuotesID() { // Method to get quote ids

      // Getting the entire quotes collection
      const querySnap = await getDocs(query(collection(db, 'quotes')));

      // getting and saving the ids for each document in the collection
      querySnap.forEach((doc) => {
        this.quotes.push(doc.id) 
      })
    },
    async getQuote() {
      // picking random index excluding the one already shown
      let random_index
      if (this.random_quote_id == null) {
        random_index = Math.floor(Math.random() * (this.quotes.length - 1))
      } 
      else{
        random_index = Math.floor(Math.random() * (this.quotes.length - 1))
        let current_index = Array.prototype.indexOf.call(this.quotes, this.random_quote_id)
        if(random_index >= current_index){
          random_index += 1
        }
      }
  
      this.random_quote_id = this.quotes[random_index]

      // getting document
      const docSnap = await getDoc(doc(db, 'quotes', this.random_quote_id))

      // saving data
      if (docSnap.exists()) {
        console.log(docSnap.data())
        this.random_quote = docSnap.data().quote
        this.author = docSnap.data().author
        this.historical_context = docSnap.data().historical_context
      } else {
        console.log('Document does not exist')
      }
    },
    showHistoricalContext() { // method to toggle historical context
      this.show = !this.show
    }
  }
}
</script>