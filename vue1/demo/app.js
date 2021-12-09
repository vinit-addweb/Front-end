const app = Vue.createApp({
    data(){
      return {
         courseGoalA:'Finish the course and learn Vue ! ',
         courseGoalB:'Master in Vue and bulid an Amazing App',
         vuelink:'https://vuejs.org/'
     
        };
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber<0.5){
                return this.courseGoalA;
            }
            else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');
// app.mount('#hello');