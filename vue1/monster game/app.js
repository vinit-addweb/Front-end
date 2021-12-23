function getRandomValue(min,max){
    
    return Math.floor(Math.random() * (max-min))+min;
}
const app = Vue.createApp({
    data(){
        return{
        playerHealth:100,
        monsterHealth:100,
        currentRound:0,
        winner:null,
        blog :[],
        }
    },

    computed:{
        monsterStyleBar(){
            if(this.monsterHealth < 0){
                return {width: '0%'};   
            }
            return {width: this.monsterHealth + '%'};
        },
        playerStyleBar(){
            if (this.playerHealth < 0){
                return {width: '0%'}; 
            }
            return {width: this.playerHealth + '%'};
        },
        useSpecialAttack(){
            return this.currentRound % 3 !==0
        }
    },

    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <=0){
                this.winner = 'Drow';
            }
            else if(value <= 0) 
            {
              //player lost
              this.winner='Monster';
            }

        },
        monsterHealth(value){
            if(value<=0 && this.playerHealth <=0){
                // drow
                this.winner = 'Drow';
            }
            else if(value <= 0)
            {
              //monster lost
              this.winner = 'Player';
            }
        }
 
    },

    methods:{
        attackMonster(){
           this.currentRound++ ;
           const attackvalue= getRandomValue(5,12);
           this.monsterHealth = this.monsterHealth - attackvalue;
           this.battle('Player','attack',attackvalue);
           this.attackPlayer();
          

        },
        attackPlayer(){
            const attackvalue= getRandomValue(8,15);
            this.playerHealth -=attackvalue; 
            this.battle('Monster','attack',attackvalue);
        },
        specialAttckMonster(){
            this.currentRound++ ;
            const attackvalue= getRandomValue(10,25);
            this.monsterHealth-= attackvalue;
            this.battle('Player','Special-attack',attackvalue);
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healvalue = getRandomValue(8,20);
            if(this.playerHealth + healvalue>100){
                this.playerHealth = 100;
            }else{
                this.playerHealth +=healvalue;
            }
            this.battle('Player','Heal',healvalue);
            this.attackPlayer();
            
        },
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner  = null;
            this.currentRound = 0;
            this.blog = []
        },
        surrender(){
            this.winner= 'Monster';
        },
        battle(who,what,value){
            this.blog.unshift({
                by:who,
                type:what,
                Value:value
            })
        }


    }
});

app.mount('#game');