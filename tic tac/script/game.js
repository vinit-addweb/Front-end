var turn =1;

function playgame(game){

 if(turn==1)
 {
     game.innerHTML= "X";
     document.getElementById("msgsection").innerHTML="Player 2 Turn"; 
     turn=2;
 }

 else if(turn==2)
 {
    game.innerHTML= "O";
    document.getElementById("msgsection").innerHTML="Player 1 Turn";
    turn=1;
}
}


