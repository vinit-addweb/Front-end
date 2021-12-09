const app = Vue.createApp({
    data() {
      return {
        counter: 0,
    };
},
    methods:
    {
        add5(num){
           this.counter = this.counter + 5;
        },
        add1(num){
            this.counter = this.counter + 1;
        },
        checker(){
            if(this.counter<37){
                return "Not there yet";
            }
            else if(this.counter>37){
                return "Too much";
            }
            else{
                return "Match";
            }
        },
        watch:{
            counter(value){
                setTimeout(()=>{
                    value=0;
                },5000);
            }
        }
    },
   
});

app.mount('#assignment');