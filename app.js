var boxes=document.querySelectorAll('.box');
var msg=document.getElementById('msg-display');
var restart=document.getElementById('restart');
const mode=document.getElementById('mode');
var isRunning=false;
var player="X";


function startGame(){

    isRunning=true;
    boxes.forEach(box=>{
        box.innerHTML=" ";
        box.addEventListener("click",()=>{
            if(isRunning && box.innerHTML===" "){
                box.innerHTML=player;              
                changePlayer();
                msg.textContent="Player " +player+ "'s turn";
                drawCondition();
                winCondition()
            }
        })
    })
    
}

startGame()


function changePlayer(){
    player=(player==="O")?"X":"O";
}

function winCondition(){
    let conditions=[
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]
    for(let i=0;i<conditions.length;i++){
        let v0=boxes[conditions[i][0]].innerHTML
        let v1=boxes[conditions[i][1]].innerHTML
        let v2=boxes[conditions[i][2]].innerHTML

        if(v0!=" " && v0===v1 && v0===v2){
            player=(player==="X")?"O":"X"
            msg.textContent="Player " +player+ " Won!"
            isRunning=false
        }
    }

}

function drawCondition(){
    if(isRunning){
      let isDraw=true
      boxes.forEach(box=>{
        if(box.innerHTML===" ") {isDraw=false}
      })

      if(isDraw){
        isRunning=true
        msg.textContent="It's a Draw!"
      }
      

    }  
}

restart.addEventListener("click",restartGame);
function restartGame(){
    boxes.innerHTML=" ";
    player="X";
    msg.textContent="Player " +player+ "'s turn";
    startGame();
}




