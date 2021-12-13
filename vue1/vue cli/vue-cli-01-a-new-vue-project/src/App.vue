<template>
<section>
    <h2>My Friends</h2>
    <ul>
        <li>
           <friend-list></friend-list>
           <friend-list></friend-list>
        </li>
    </ul>
    </section>
</template>

<script>
export default {
    data(){
    
     return{
         friend:[{
             id:"Vinit",
             name:"Vinit Dhunaria",
             Mobile:"7597844434",
             Email:"Vinit4d@gmail.com"
         },
         {
          id:"Vinay",
             name:"Vinay Shukhla",
             Mobile:"7597867534",
             Email:"Vinay@gmail.com"
         },]
     }
    },
}
</script>