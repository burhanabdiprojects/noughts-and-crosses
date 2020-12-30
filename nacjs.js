
var topa = [];
var topb = [];
var topc = [];
var mida = [];
var midb = [];
var midc = [];
var bota = [];
var botb = [];
var botc = [];

var turn;

var player1 = {
    "icon" : "",
    "toss": "",
    "order": "",
    "score" : 0,
};
var player2 = {
    "icon" : "",
    "toss": "",
    "order": "",
    "score" : 0,
};


var rounds;
var roundscompleted = 0;
var victor;

function begin() { 
/* Type of game, either playervsplayer or playervscomputer. User selects this on first screen. */
    document.getElementById("intro").style.display = "none";
    document.getElementById("roundschoose").style.display = "flex"; /* change this to flex later when redesigning */
}


function roundschoose(b) {
/* Select the number of rounds for the game. This will, when a win is triggered, either restart the game or declare the winner depending 
on the score. */
    document.getElementById("roundschoose").style.display = "none";
    rounds = b;
    document.getElementById("headsortails").style.display = "flex";
}

function headsortails(c) { /* Player one chooses whether they wanna be heads or tails for the coin toss */
/*remember to have if statement depending on type */
    document.getElementById("headsortails").style.display = "none";

    if (c == "heads"){
        player1.toss = "heads";
        player2.toss = "tails";
    }else if (c == "tails"){
        player1.toss = "tails";
        player2.toss = "heads";
    }

cointoss()

}


function gamestats() {
    if(turn == "p1"){
        document.getElementById("turn").innerHTML = "Player 1's Turn";
    }else if(turn == "p2"){
        document.getElementById("turn").innerHTML = "Player 2's Turn";
    }

}

var rand;
var nextbutton;

function cointoss (){
rand = Math.random();
rand *= 10;

nextbutton = document.createElement("button");
nextbutton.classList.add("slidebtn");
nextbutton.id = "next";
nextbutton.onclick = function () {chooseicon()};
nextbutton.innerHTML = "Next";

if(rand >= 5){
    /* Heads wins, find out who is heads and they go first */
    if (player1.toss == "heads"){
        console.log("player1 wins the toss");
        player1.order = 1;
        player2.order = 2;

        document.getElementById("ordernotif").style.display = "flex";
 
        let notif = document.createElement("p");
    
        notif.innerHTML = "Heads wins, Player 1 goes first."

        document.getElementById("ordernotif").appendChild(notif);

        document.getElementById("ordernotif").appendChild(nextbutton);

        turn = "p1";
        

    }else if (player2.toss == "heads"){
        console.log("player2 wins the toss");
        player1.order = 2;
        player2.order = 1;  
        
        document.getElementById("ordernotif").style.display = "flex";
 
        let notif = document.createElement("p");

        notif.innerHTML = "Heads wins, Player 2 goes first."

        document.getElementById("ordernotif").appendChild(notif);

        document.getElementById("ordernotif").appendChild(nextbutton);

        turn = "p2";
        
    
    }
}else if (rand < 5){
    /* Tails wins, find out who is heads and they go first */
    if (player1.toss == "tails"){
        console.log("player1 wins the toss");
        player1.order = 1;
        player2.order = 2;
        
        document.getElementById("ordernotif").style.display = "flex";
 
        let notif = document.createElement("p");

        notif.innerHTML = "Tails wins, Player 1 goes first."
    
        document.getElementById("ordernotif").appendChild(notif);

        document.getElementById("ordernotif").appendChild(nextbutton);       
        
        turn = "p1";
        

    }else if (player2.toss == "tails"){
        console.log("player2 wins the toss");
        player1.order = 2;
        player2.order = 1;  
        
        document.getElementById("ordernotif").style.display = "flex";
 
        let notif = document.createElement("p");

        notif.innerHTML = "Tails wins, Player 2 goes first."

        document.getElementById("ordernotif").appendChild(notif);

        document.getElementById("ordernotif").appendChild(nextbutton);

        turn = "p2";
        
    }

}


}


function chooseicon () { /* whoever won the toss also chooses their icon first*/

    document.getElementById("ordernotif").style.display = "none";

    if(player1.order == 1){
        document.getElementById("iconchoice").innerHTML = "Player 1, select your icon";
    }else if (player2.order == 1){
        document.getElementById("iconchoice").innerHTML = "Player 2, select your icon";
    }    

    document.getElementById("icon").style.display = "flex";

}

function startGame(icon, oppoicon) {

    document.getElementById("icon").style.display = "none";

    if(player1.order == 1){
        player1.icon = icon;
        player2.icon = oppoicon;
    }else if (player2.order == 1){
        player2.icon = icon;
        player1.icon = oppoicon;
    }    

    console.log("Player1 is " + player1.icon + " and Player2 is " + player2.icon);
    document.getElementById("board").style.display = "grid";
    document.getElementById("gamestats").style.display = "flex";

    gamestats();
    


}

function topaclick() {

if(topa[0] != "closed"){
   if(turn == "p1" && player1.icon == "noughts"){

        document.getElementById("topanought").style.display = "block";
        topa.push("closed","noughts");
        turn = "p2";
        boardcheck();
        gamestats();
        
    }else if(turn == "p1" && player1.icon == "crosses"){

        document.getElementById("topacross").style.display = "block";
        topa.push("closed","crosses");
        turn = "p2";
        boardcheck();
        gamestats();

    }else if(turn == "p2" && player2.icon == "noughts"){

        document.getElementById("topanought").style.display = "block";
        topa.push("closed","noughts");
        turn = "p1";
        boardcheck();
        gamestats();

    }else if(turn == "p2" && player2.icon == "crosses"){

        document.getElementById("topacross").style.display = "block";
        topa.push("closed","crosses");
        turn = "p1";
        boardcheck();
        gamestats();

    }else{console.log("nothing fits here");}

    
}else {}
    
}

function topbclick() {
    
    if(topb[0] != "closed"){
       if(turn == "p1" && player1.icon == "noughts"){
    
            document.getElementById("topbnought").style.display = "block";
            topb.push("closed","noughts");
            boardcheck();
            turn = "p2";
            gamestats();
    
        }else if(turn == "p1" && player1.icon == "crosses"){
    
            document.getElementById("topbcross").style.display = "block";
            topb.push("closed","crosses");
            boardcheck();
            turn = "p2";
            gamestats();
    
        }else if(turn == "p2" && player2.icon == "noughts"){
    
            document.getElementById("topbnought").style.display = "block";
            topb.push("closed","noughts");
            boardcheck();
            turn = "p1";
            gamestats();
    
        }else if(turn == "p2" && player2.icon == "crosses"){
    
            document.getElementById("topbcross").style.display = "block";
            topb.push("closed","crosses");
            boardcheck();
            turn = "p1";
            gamestats();
    
        }else{}
    
    }else {console.log("nothing fits here");}
        
}
    
function topcclick() {
    
    if(topc[0] != "closed"){
       if(turn == "p1" && player1.icon == "noughts"){
    
            document.getElementById("topcnought").style.display = "block";
            topc.push("closed","noughts");
            boardcheck();
            turn = "p2";
            gamestats();
    
        }else if(turn == "p1" && player1.icon == "crosses"){
    
            document.getElementById("topccross").style.display = "block";
            topc.push("closed","crosses");
            boardcheck();
            turn = "p2";
            gamestats();
    
        }else if(turn == "p2" && player2.icon == "noughts"){
    
            document.getElementById("topcnought").style.display = "block";
            topc.push("closed","noughts");
            boardcheck();
            turn = "p1";
            gamestats();
    
        }else if(turn == "p2" && player2.icon == "crosses"){
    
            document.getElementById("topccross").style.display = "block";
            topc.push("closed","crosses");
            boardcheck();
            turn = "p1";
            gamestats();
    
        }else{}

    }else {}
        
}

function midaclick() {

    if(mida[0] != "closed"){
       if(turn == "p1" && player1.icon == "noughts"){
    
            document.getElementById("midanought").style.display = "block";
            mida.push("closed","noughts");
            turn = "p2";
            boardcheck();
            gamestats();
            
        }else if(turn == "p1" && player1.icon == "crosses"){
    
            document.getElementById("midacross").style.display = "block";
            mida.push("closed","crosses");
            turn = "p2";
            boardcheck();
            gamestats();
    
        }else if(turn == "p2" && player2.icon == "noughts"){
    
            document.getElementById("midanought").style.display = "block";
            mida.push("closed","noughts");
            turn = "p1";
            boardcheck();
            gamestats();
    
        }else if(turn == "p2" && player2.icon == "crosses"){
    
            document.getElementById("midacross").style.display = "block";
            mida.push("closed","crosses");
            turn = "p1";
            boardcheck();
            gamestats();
    
        }else{}

    }else {}
        
    }
    
    function midbclick() {

        
        if(midb[0] != "closed"){
           if(turn == "p1" && player1.icon == "noughts"){
        
                document.getElementById("midbnought").style.display = "block";
                midb.push("closed","noughts");
                boardcheck();
                turn = "p2";
                gamestats();
        
            }else if(turn == "p1" && player1.icon == "crosses"){
        
                document.getElementById("midbcross").style.display = "block";
                midb.push("closed","crosses");
                boardcheck();
                turn = "p2";
                gamestats();
        
            }else if(turn == "p2" && player2.icon == "noughts"){
        
                document.getElementById("midbnought").style.display = "block";
                midb.push("closed","noughts");
                boardcheck();
                turn = "p1";
                gamestats();
        
            }else if(turn == "p2" && player2.icon == "crosses"){
        
                document.getElementById("midbcross").style.display = "block";
                midb.push("closed","crosses");
                boardcheck();
                turn = "p1";
                gamestats();
        
            }else{}

        }else {}
            
    }
        
    function midcclick() {
    
        console.log("ran");
        
        if(midc[0] != "closed"){
           if(turn == "p1" && player1.icon == "noughts"){
        
                document.getElementById("midcnought").style.display = "block";
                midc.push("closed","noughts");
                boardcheck();
                turn = "p2";
                gamestats();
        
            }else if(turn == "p1" && player1.icon == "crosses"){
        
                document.getElementById("midccross").style.display = "block";
                midc.push("closed","crosses");
                boardcheck();
                turn = "p2";
                gamestats();
        
            }else if(turn == "p2" && player2.icon == "noughts"){
        
                document.getElementById("midcnought").style.display = "block";
                midc.push("closed","noughts");
                boardcheck();
                turn = "p1";
                gamestats();
        
            }else if(turn == "p2" && player2.icon == "crosses"){
        
                document.getElementById("midccross").style.display = "block";
                midc.push("closed","crosses");
                boardcheck();
                turn = "p1";
                gamestats();
        
            }else{}
        
            console.log(midc);
        }else {}
            
    }



function botaclick() {

    console.log("ran");
    
    if(bota[0] != "closed"){
       if(turn == "p1" && player1.icon == "noughts"){
    
            document.getElementById("botanought").style.display = "block";
            bota.push("closed","noughts");
            turn = "p2";
            boardcheck();
            gamestats();
            
        }else if(turn == "p1" && player1.icon == "crosses"){
    
            document.getElementById("botacross").style.display = "block";
            bota.push("closed","crosses");
            turn = "p2";
            boardcheck();
            gamestats();
    
        }else if(turn == "p2" && player2.icon == "noughts"){
    
            document.getElementById("botanought").style.display = "block";
            bota.push("closed","noughts");
            turn = "p1";
            boardcheck();
            gamestats();
    
        }else if(turn == "p2" && player2.icon == "crosses"){
    
            document.getElementById("botacross").style.display = "block";
            bota.push("closed","crosses");
            turn = "p1";
            boardcheck();
            gamestats();
    
        }else{}
    
    }else {}
        
    }
    
    function botbclick() {
        
        if(botb[0] != "closed"){
           if(turn == "p1" && player1.icon == "noughts"){
        
                document.getElementById("botbnought").style.display = "block";
                botb.push("closed","noughts");
                boardcheck();
                turn = "p2";
                gamestats();
        
            }else if(turn == "p1" && player1.icon == "crosses"){
        
                document.getElementById("botbcross").style.display = "block";
                botb.push("closed","crosses");
                boardcheck();
                turn = "p2";
                gamestats();
        
            }else if(turn == "p2" && player2.icon == "noughts"){
        
                document.getElementById("botbnought").style.display = "block";
                botb.push("closed","noughts");
                boardcheck();
                turn = "p1";
                gamestats();
        
            }else if(turn == "p2" && player2.icon == "crosses"){
        
                document.getElementById("botbcross").style.display = "block";
                botb.push("closed","crosses");
                boardcheck();
                turn = "p1";
                gamestats();
        
            }else{}
        
        }else {}
            
    }
        
    function botcclick() {
    
        if(botc[0] != "closed"){
           if(turn == "p1" && player1.icon == "noughts"){
        
                document.getElementById("botcnought").style.display = "block";
                botc.push("closed","noughts");
                boardcheck();
                turn = "p2";
                gamestats();
        
            }else if(turn == "p1" && player1.icon == "crosses"){
        
                document.getElementById("botccross").style.display = "block";
                botc.push("closed","crosses");
                boardcheck();
                turn = "p2";
                gamestats();
        
            }else if(turn == "p2" && player2.icon == "noughts"){
        
                document.getElementById("botcnought").style.display = "block";
                botc.push("closed","noughts");
                boardcheck();
                turn = "p1";
                gamestats();
        
            }else if(turn == "p2" && player2.icon == "crosses"){
        
                document.getElementById("botccross").style.display = "block";
                botc.push("closed","crosses");
                boardcheck();
                turn = "p1";
                gamestats();
        
            }else{}

        }else {}
            
    }


function showwin(a,b,c,aniw,anii,anin,ic,winner){

    /* Making all the other slots unclickable */

    topa[0] = "closed";
    topb[0] = "closed";
    topc[0] = "closed";
    mida[0] = "closed";
    midb[0] = "closed";
    midc[0] = "closed";
    bota[0] = "closed";
    botb[0] = "closed";
    botc[0] = "closed";

    setTimeout(function() { 
        document.getElementById(a).style.display = "none"; 
        document.getElementById(aniw).style.display = "block";
    }, 500);

    setTimeout(function() { 
        document.getElementById(b).style.display = "none"; 
        document.getElementById(anii).style.display = "block";
    }, 1000);

    setTimeout(function() { 
        document.getElementById(c).style.display = "none"; 
        document.getElementById(anin).style.display = "block";
    }, 1500);

    setTimeout(function() { 
        gameover(ic, winner);
    }, 2200);

}

function boardcheck() {
/*Run this after every single board click. Declare winner at the end. Remember to add something for a draw too!!!! */
if (topa[1] == "crosses" && topb[1] == "crosses" && topc[1] == "crosses"){
    if(player1.icon == "crosses"){
        victor = "player1";
        showwin("topacross","topbcross","topccross","topaxw","topbxi","topcxn","crosses", "Player 1");
        
    }else if(player2.icon == "crosses"){
        victor = "player2";
        showwin("topacross","topbcross","topccross","topaxw","topbxi","topcxn","crosses", "Player 2");

    }
}else if(mida[1] == "crosses" && midb[1] == "crosses" && midc[1] == "crosses"){
    if(player1.icon == "crosses"){
        victor = "player1";
        showwin("midacross","midbcross","midccross","midaxw","midbxi","midcxn","crosses", "Player 1");
    }else if(player2.icon == "crosses"){
        victor = "player2";
        showwin("midacross","midbcross","midccross","midaxw","midbxi","midcxn","crosses", "Player 2");
    }
}else if(bota[1] == "crosses" && botb[1] == "crosses" && botc[1] == "crosses"){
    if(player1.icon == "crosses"){
        victor = "player1";
        showwin("botacross","botbcross","botccross","botaxw","botbxi","botcxn","crosses", "Player 1");

        }else if(player2.icon == "crosses"){
        victor = "player2";
        showwin("botacross","botbcross","botccross","botaxw","botbxi","botcxn","crosses", "Player 2");

        }
}else if(topa[1] == "crosses" && mida[1] == "crosses" && bota[1] == "crosses"){
    if(player1.icon == "crosses"){
        victor = "player1";
        showwin("topacross","midacross","botacross","topaxw","midaxi","botaxn","crosses", "Player 1");

        }else if(player2.icon == "crosses"){
        victor = "player2";
        showwin("topacross","midacross","botacross","topaxw","midaxi","botaxn","crosses", "Player 2");

        }
}else if(topb[1] == "crosses" && midb[1] == "crosses" && botb[1] == "crosses"){
    if(player1.icon == "crosses"){
        victor = "player1";
        showwin("topbcross","midbcross","botbcross","topbxw","midbxi","botbxn","crosses", "Player 1");

        }else if(player2.icon == "crosses"){
        victor = "player2";
        showwin("topbcross","midbcross","botbcross","topbxw","midbxi","botbxn","crosses", "Player 2");

        }
}else if(topc[1] == "crosses" && midc[1] == "crosses" && botc[1] == "crosses"){
    if(player1.icon == "crosses"){
        victor = "player1";
        showwin("topccross","midccross","botccross","topcxw","midcxi","botcxn","crosses", "Player 1");

        }else if(player2.icon == "crosses"){
        victor = "player2";
        showwin("topccross","midccross","botccross","topcxw","midcxi","botcxn","crosses", "Player 2");

        }
}else if(topa[1] == "crosses" && midb[1] == "crosses" && botc[1] == "crosses"){
    if(player1.icon == "crosses"){
        victor = "player1";
        showwin("topacross","midbcross","botccross","topaxw","midbxi","botcxn","crosses", "Player 1");

        }else if(player2.icon == "crosses"){
        victor = "player2";
        showwin("topacross","midbcross","botccross","topaxw","midbxi","botcxn","crosses", "Player 2");

        }
}else if(topc[1] == "crosses" && midb[1] == "crosses" && bota[1] == "crosses"){
    if(player1.icon == "crosses"){
        victor = "player1";
        showwin("topccross","midbcross","botacross","topcxw","midbxi","botaxn","crosses", "Player 1");

        }else if(player2.icon == "crosses"){
        victor = "player2";
        showwin("topccross","midbcross","botacross","topcxw","midbxi","botaxn","crosses", "Player 2");

        }
}else if (topa[1] == "noughts" && topb[1] == "noughts" && topc[1] == "noughts"){
    if(player1.icon == "noughts"){
        victor = "player1";
        showwin("topanought","topbnought","topcnought","topanw","topbni","topcnn","noughts", "Player 1");
        

        }else if(player2.icon == "noughts"){
        victor = "player2";
        showwin("topanought","topbnought","topcnought","topanw","topbni","topcnn","noughts", "Player 2");

        }
}else if(mida[1] == "noughts" && midb[1] == "noughts" && midc[1] == "noughts"){
    if(player1.icon == "noughts"){
        victor = "player1";
        showwin("midanought","midbnought","midcnought","midanw","midbni","midcnn","noughts", "Player 1");

        }else if(player2.icon == "noughts"){
        victor = "player2";
        showwin("midanought","midbnought","midcnought","midanw","midbni","midcnn","noughts", "Player 2");

        }
}else if(bota[1] == "noughts" && botb[1] == "noughts" && botc[1] == "noughts"){
    if(player1.icon == "noughts"){
        victor = "player1";
        showwin("botanought","botbnought","botcnought","botanw","botbni","botcnn","noughts", "Player 1");
        
        }else if(player2.icon == "noughts"){
        victor = "player2";
        showwin("botanought","botbnought","botcnought","botanw","botbni","botcnn","noughts", "Player 2");

        }
}else if(topa[1] == "noughts" && mida[1] == "noughts" && bota[1] == "noughts"){
    if(player1.icon == "noughts"){
        victor = "player1";
        showwin("topanought","midanought","botanought","topanw","midani","botann","noughts", "Player 1");

        }else if(player2.icon == "noughts"){
        victor = "player2";
        showwin("topanought","midanought","botanought","topanw","midani","botann","noughts", "Player 2");

        }
}else if(topb[1] == "noughts" && midb[1] == "noughts" && botb[1] == "noughts"){
    if(player1.icon == "noughts"){
        victor = "player1";
        showwin("topbnought","midbnought","botbnought","topbnw","midbni","botbnn","noughts", "Player 1");
        
        }else if(player2.icon == "noughts"){
        victor = "player2";
        showwin("topbnought","midbnought","botbnought","topbnw","midbni","botbnn","noughts", "Player 2");

        }
}else if(topc[1] == "noughts" && midc[1] == "noughts" && botc[1] == "noughts"){
    if(player1.icon == "noughts"){
        victor = "player1";
        showwin("topcnought","midcnought","botcnought","topcnw","midcni","botcnn","noughts", "Player 1");

        }else if(player2.icon == "noughts"){
        showwin("topcnought","midcnought","botcnought","topcnw","midcni","botcnn","noughts", "Player 2");
        victor = "player2";
        }
}else if(topa[1] == "noughts" && midb[1] == "noughts" && botc[1] == "noughts"){
    if(player1.icon == "noughts"){
        victor = "player1";
        showwin("topanought","midbnought","botcnought","topanw","midbni","botcnn","noughts", "Player 1");

        }else if(player2.icon == "noughts"){
        victor = "player2";
        showwin("topanought","midbnought","botcnought","topanw","midbni","botcnn","noughts", "Player 2");

        }
    console.log("gameover");
}else if(topc[1] == "noughts" && midb[1] == "noughts" && bota[1] == "noughts"){
    if(player1.icon == "noughts"){
        victor = "player1";
        showwin("topcnought","midbnought","botanought","topcnw","midbni","botann","noughts", "Player 1");

        }else if(player2.icon == "noughts"){
        victor = "player2";
        showwin("topcnought","midbnought","botanought","topcnw","midbni","botann","noughts", "Player 2");

        }
}else {}

if(victor != "player1" && victor != "player2" && topa[0] == "closed" && topb[0] == "closed" && topc[0] == "closed" && mida[0] == "closed" && midb[0] == "closed" && midc[0] == "closed" && bota[0] == "closed" && botb[0] == "closed" && botc[0] == "closed"){
gameover(null, "draw");
}



}

var announcewinner;
var playagain;
var announceoverallwinner;

function gameover(icon, winner) {

roundscompleted ++;

    if(winner == "Player 1"){
        player1.score ++;
        }else if (winner == "Player 2"){
        player2.score ++;
        }

    if(winner != "draw"){
        document.getElementById("board").style.display = "none";
        document.getElementById("gamestats").style.display = "none";
        document.getElementById("endgame").style.display = "flex";
        announcewinner = document.createElement("p");
        announcewinner.innerHTML = winner + " is the winner";
        document.getElementById("endgame").appendChild(announcewinner);
        pscore = document.createElement("p");
        pscore.innerHTML = "P1 has won <strong>" + player1.score + "</strong> , P2 has won <strong>" + player2.score + "</strong>";
        document.getElementById("endgame").appendChild(pscore);
        
        
    }else{
        document.getElementById("board").style.display = "none";
        document.getElementById("gamestats").style.display = "none";
        document.getElementById("endgame").style.display = "flex";
        announcewinner = document.createElement("p");
        announcewinner.innerHTML = "The game is a draw";
        document.getElementById("endgame").appendChild(announcewinner);
        pscore = document.createElement("p");
        pscore.innerHTML = "PL1 " + player1.score + " : " + player2.score + " PL2";
        document.getElementById("endgame").appendChild(pscore);
    
    }



if (roundscompleted >= rounds){
    if(player1.score > player2.score){
        /*player 1 wins*/
        announceoverallwinner = document.createElement("p");
        announceoverallwinner.innerHTML = "Player 1 Wins The Game";
        document.getElementById("endgame").appendChild(announceoverallwinner);
        console.log("rounds completed worked.");
    }else if(player2.score > player1.score){
        /*player 2 wins */
        announceoverallwinner = document.createElement("p");
        announceoverallwinner.innerHTML = "Player 2 Wins The Game";
        document.getElementById("endgame").appendChild(announceoverallwinner);
    }else if(player1.score == player2.score){
        /*its a draw*/
        announceoverallwinner = document.createElement("p");
        announceoverallwinner.innerHTML = "The Game Is A Draw";
        document.getElementById("endgame").appendChild(announceoverallwinner);
    }else{}

playagain = document.createElement("button");
document.getElementById("endgame").appendChild(playagain);
playagain.innerHTML = "Play Again";
playagain.classList.add("slidebtn");

playagain.onclick = function () {restart()};


}else{
contgame();
}



}

var cont;
var contbtn;

function contgame() {
/*continue the game */
cont = document.createElement("p");
document.getElementById("endgame").appendChild(cont);
cont.innerHTML = "Continue to the next game.";

contbtn = document.createElement("button");
document.getElementById("endgame").appendChild(contbtn);
contbtn.innerHTML = "Next Game";

contbtn.classList.add("slidebtn");
contbtn.onclick = function () {nextround()};
}

function nextround() {
    victor = "";
    document.getElementById("endgame").style.display = "none";
    document.getElementById("endgame").innerHTML = "";
    document.getElementById("gamestats").style.display = "flex";
    document.getElementById("board").style.display = "grid";
    topa = [];
    topb = [];
    topc = [];
    mida = [];
    midb = [];
    midc = [];
    bota = [];
    botb = [];
    botc = [];

    document.getElementById("topacross").style.display = "none";
    document.getElementById("topanought").style.display = "none";
    document.getElementById("topbcross").style.display = "none";
    document.getElementById("topbnought").style.display = "none";
    document.getElementById("topccross").style.display = "none";
    document.getElementById("topcnought").style.display = "none";

    document.getElementById("midacross").style.display = "none";
    document.getElementById("midanought").style.display = "none";
    document.getElementById("midbcross").style.display = "none";
    document.getElementById("midbnought").style.display = "none";
    document.getElementById("midccross").style.display = "none";
    document.getElementById("midcnought").style.display = "none";

    document.getElementById("botacross").style.display = "none";
    document.getElementById("botanought").style.display = "none";
    document.getElementById("botbcross").style.display = "none";
    document.getElementById("botbnought").style.display = "none";
    document.getElementById("botccross").style.display = "none";
    document.getElementById("botcnought").style.display = "none";

    document.getElementById("topaxw").style.display = "none";
    document.getElementById("topbxi").style.display = "none";
    document.getElementById("topcxn").style.display = "none";
    document.getElementById("midaxw").style.display = "none";
    document.getElementById("midbxi").style.display = "none";
    document.getElementById("midcxn").style.display = "none";
    document.getElementById("botaxw").style.display = "none";
    document.getElementById("botbxi").style.display = "none";
    document.getElementById("botcxn").style.display = "none";
    document.getElementById("topbxw").style.display = "none";
    document.getElementById("topcxw").style.display = "none";
    document.getElementById("midaxi").style.display = "none";
    document.getElementById("midcxi").style.display = "none";
    document.getElementById("botaxn").style.display = "none";
    document.getElementById("botbxn").style.display = "none";

    document.getElementById("topanw").style.display = "none";
    document.getElementById("topbni").style.display = "none";
    document.getElementById("topcnn").style.display = "none";
    document.getElementById("midanw").style.display = "none";
    document.getElementById("midbni").style.display = "none";
    document.getElementById("midcnn").style.display = "none";
    document.getElementById("botanw").style.display = "none";
    document.getElementById("botbni").style.display = "none";
    document.getElementById("botcnn").style.display = "none";
    document.getElementById("topbnw").style.display = "none";
    document.getElementById("topcnw").style.display = "none";
    document.getElementById("midani").style.display = "none";
    document.getElementById("midcni").style.display = "none";
    document.getElementById("botann").style.display = "none";
    document.getElementById("botbnn").style.display = "none";

    
}


function restart() {
/* Button to restart the game, just have everything reset and open up the first slide.   */

    document.getElementById("endgame").style.display = "none";
    document.getElementById("endgame").innerHTML = "";
    document.getElementById("intro").style.display = "flex";

    topa = [];
    topb = [];
    topc = [];
    mida = [];
    midb = [];
    midc = [];
    bota = [];
    botb = [];
    botc = [];

    document.getElementById("topacross").style.display = "none";
    document.getElementById("topanought").style.display = "none";
    document.getElementById("topbcross").style.display = "none";
    document.getElementById("topbnought").style.display = "none";
    document.getElementById("topccross").style.display = "none";
    document.getElementById("topcnought").style.display = "none";

    document.getElementById("midacross").style.display = "none";
    document.getElementById("midanought").style.display = "none";
    document.getElementById("midbcross").style.display = "none";
    document.getElementById("midbnought").style.display = "none";
    document.getElementById("midccross").style.display = "none";
    document.getElementById("midcnought").style.display = "none";

    document.getElementById("botacross").style.display = "none";
    document.getElementById("botanought").style.display = "none";
    document.getElementById("botbcross").style.display = "none";
    document.getElementById("botbnought").style.display = "none";
    document.getElementById("botccross").style.display = "none";
    document.getElementById("botcnought").style.display = "none";

    document.getElementById("topaxw").style.display = "none";
    document.getElementById("topbxi").style.display = "none";
    document.getElementById("topcxn").style.display = "none";
    document.getElementById("midaxw").style.display = "none";
    document.getElementById("midbxi").style.display = "none";
    document.getElementById("midcxn").style.display = "none";
    document.getElementById("botaxw").style.display = "none";
    document.getElementById("botbxi").style.display = "none";
    document.getElementById("botcxn").style.display = "none";
    document.getElementById("topbxw").style.display = "none";
    document.getElementById("topcxw").style.display = "none";
    document.getElementById("midaxi").style.display = "none";
    document.getElementById("midcxi").style.display = "none";
    document.getElementById("botaxn").style.display = "none";
    document.getElementById("botbxn").style.display = "none";

    document.getElementById("topanw").style.display = "none";
    document.getElementById("topbni").style.display = "none";
    document.getElementById("topcnn").style.display = "none";
    document.getElementById("midanw").style.display = "none";
    document.getElementById("midbni").style.display = "none";
    document.getElementById("midcnn").style.display = "none";
    document.getElementById("botanw").style.display = "none";
    document.getElementById("botbni").style.display = "none";
    document.getElementById("botcnn").style.display = "none";
    document.getElementById("topbnw").style.display = "none";
    document.getElementById("topcnw").style.display = "none";
    document.getElementById("midani").style.display = "none";
    document.getElementById("midcni").style.display = "none";
    document.getElementById("botann").style.display = "none";
    document.getElementById("botbnn").style.display = "none";

    player1 = {
        "icon" : "",
        "toss": "",
        "order": "",
        "score" : 0,
    };
    player2 = {
        "icon" : "",
        "toss": "",
        "order": "",
        "score" : 0,
    };

    roundscompleted = 0;
    victor = "";

    document.getElementById("ordernotif").innerHTML = "";

}