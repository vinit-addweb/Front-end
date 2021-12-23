<template>
    <li>
       
        <h2>{{name}} {{friendIsFavorite ?'(Favorite)':''}}</h2>
        <button @click="toggleFavorite"> Toggle Favorite</button>
        <button @click="toggleDetails" style="margin-left:30px"> {{detailsAreVisible ?  'Hide Details':'Show Details'}}</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{phoneNumber}}</li>
            <li><strong>Email:</strong>{{emailAddress}}</li>
            
        </ul>
    </li>
</template>

<script>

export default {
    // props:[
    //     'name',
    //     'phoneNumber',
    //     'emailAddress',
    //     'isFavorite'
    // ],

    props:{
        name:
        {
            
            type: String,
            required: true

        },
        phoneNumber:{
            
            type: String,
            required: true

        },
         emailAddress:{
             
            
            type: String,
            required: true

        
         },
         isFavorite:{
             type: Boolean,
            required: false,
            default:false,
            validator:function(value){
                return value === '1' || value === '0';
            }
         }
    },
    data(){
        return{
        detailsAreVisible:false,
        // friend:{
            
        //         id:'Yash',
        //         name:'yash Sharma',
        //         mobile:'9876543210',
        //         email:'yash@gmail.com'
        //     },
           friendIsFavorite:this.isFavorite
        
    }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite(){
           
                this.$$emit('toggle-fav');
            }
    }
};
</script>
