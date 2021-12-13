<template>
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggledetails">Show Details</button>
        <ul v-if="detailsArevisible">
            <li><strong>Phone:</strong>{{friend.Mobile}}</li>
            <li><strong>Email:</strong>{{friend.Email}}</li>
            
        </ul>
    </li>
</template>
<script>
export default {
    data(){
        return{
            detailsArevisible:false,
            friends:{ id:"Vinit",
             name:"Vinit Dhunaria",
             Mobile:"7597844434",
             Email:"Vinit4d@gmail.com"}
        }
    },
    methods:{
        toggledetails(){
            this.detailsArevisible = ! this.detailsArevisible;
        }
    }
};
</script>