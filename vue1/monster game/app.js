function getRandomValue(min,max){
    
    return Math.floor(Math.random() * (max-min))+min;
}
const app = Vue.createApp({
    data(){
        return{
        playerHealth:100,
        monsterHealth:100
        }
    },

    computed:{
        monsterStyleBar(){
            return {width: this.monsterHealth + '%'};
        },
        playerStyleBar(){
            return {width: this.playerHealth + '%'};
        }
    },
    methods:{
        attackMonster(){
           const attackvalue= getRandomValue(5,12);
           this.monsterHealth = this.monsterHealth - attackvalue;
           this.attackPlayer();
        },
        attackPlayer(){
            const attackvalue= getRandomValue(8,15);
            this.playerHealth -=attackvalue; 
        }
    }
});

app.mount('#game');