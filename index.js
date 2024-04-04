let boxes = document.querySelectorAll('.b');
let output = document.querySelector('.output');
let winningpos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
let gamegrid = ["","","","","","","","",""];
function checkvictory(){
    // console.log('check victory called   ')
    for(let i=0;i<gamegrid.length;i++){
        console.log(gamegrid[i]); 
    }
    for(let i=0;i<winningpos.length;i++){ 
       if(gamegrid[winningpos[i][0]] !="" && gamegrid[winningpos[i][1]]!="" && gamegrid[winningpos[i][2]]!=""){
        if((gamegrid[winningpos[i][0]]==gamegrid[winningpos[i][1]]) && (gamegrid[winningpos[i][2]]==gamegrid[winningpos[i][1]])){
            console.log("true")
            return true;
        } 
    }
    
    }   
    return false;
}

var turn = 0;  //turn of first player
var cntchance =0;
function turns(index){
    console.log(index);
    if(turn==0){
        if(boxes[index].innerHTML==""){
            boxes[index].innerHTML="X";
            gamegrid[index] = "X";
            
            cntchance++;
            turn =1;
            if(checkvictory() && cntchance>=5){
                console.log("Player 1 Won!");
                output.innerHTML = "Player 1 Won!";
            }
            else if(cntchance>=9){
                console.log("Draw!!");
                output.innerHTML = "Draw!!";
            }
        }
    }
    else{
        if(boxes[index].innerHTML==""){
            boxes[index].innerHTML="O";
            gamegrid[index] = "O";
            turn =0;
            cntchance++;
            if(checkvictory() && cntchance>=5){
                console.log("Player 2 Won! ");
                output.innerHTML = "Player 2 Won!";
            }
            else if(cntchance>=9){
                console.log("Draw!!");
                output.innerHTML = "Draw!!";
            }
        }
    }
    
}

function newgame(){
    for(let i=0;i<boxes.length;i++){
        boxes[i].innerHTML = "";
        gamegrid[i] = "";
    }
    output.innerHTML = "--Winner--";
}