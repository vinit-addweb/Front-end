const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      Name: "",
      Cname: "",
      fullname:""
    };
  },
  // computed:{
  //     fullname()
  //     {
      
  //       if(this.Name===''){
  //         return '';
        
  //       }
  //       else
  //       {
  //       return this.Name + " "+'Dhunaria';
  //       }
  //     }
  //   },

  watch:
  {
   name(value)
   {
     if(value===''){
       this.fullname='';
     }
     else
     {
       this.fullname=value+' '+'Dhunaria';
     }
   },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },

    dec(num) {
      this.counter = this.counter - num;
    },

    setName(event) {
      this.Name = event.target.value;
    },

    submitForm() {
      // event.preventDefault();
      alert("Data is Submitted");
    },

    confirmname() {
      this.Cname = this.Name;
    
    },

    resetbtn(){
      this.Name= '';

    },
    outputfullname(){
      if(this.Name==''){
        return '';
      
      }else{
      return this.Name + " "+'Dhunaria';
     
     }
    },
  }
});

app.mount("#events");
