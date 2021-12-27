<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isloading">Loading........</p>
      <p v-else-if="!isloading && error">{{ error }}</p>
      <p v-else-if="!isloading && (!results || results.length === 0)"> No result found</p>
      
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isloading:false ,
      error:null,
    };
  },
  methods: {
    loadExperiences() {
      this.isloading = true;
      this.error = null;
      fetch('https://vue-http-a48f6-default-rtdb.firebaseio.com/surveys.json').then((response) => {
          if (response.ok) {
            return response.json();
          }
        }).then((data) => {
          this.isloading = false; 
          // console.log(data);
          const results = [];
          for (const id in data) {
            results.push({
              id:id,
              name:data[id].name,
              rating:data[id].rating,
            });
          }
          this.results = results;
        }).catch((error)=>{
          console.log(error);
           this.isloading = false; 
          this.error = "Faild to fetch data - please try again later";
        });
    },
  },
  mounted() {
    this.loadExperiences();  
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>