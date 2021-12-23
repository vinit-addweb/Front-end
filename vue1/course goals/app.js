const app = Vue.createApp({
  data() {
    return { 
      
      enterGoalvalue:'',
      goals: [] };
  },
  methods:{
    addGoals(){
        this.goals.push(this.enterGoalvalue);
      },
    removeGoals(index){
         this.goals.splice(index, 1);
    }  
  }
});

app.mount('#user-goals');
