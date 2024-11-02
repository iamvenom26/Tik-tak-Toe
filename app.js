let boxes= document.querySelectorAll(".box ");
let reset= document.querySelector("#reset");
let newgame=document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
let count=0;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO =true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const gamedraw = ()=>{
    msg.innerText='Game was a Draw';
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
        box.innerText="O";
        turnO=false;
    }else{ 
        box.innerText="X";
        turnO =true;
        
    }
    box.disabled=true;
    count++;
    let isWinner= checkWinner();
    if(count===9 && !isWinner){
        gamedraw();
    }
    checkWinner();
    });  
});
const showWinner = ()=>{
    msg.innerText='Congratulation ,Winner is  ';
    msgcontainer.classList.remove("hide");
    disableBoxes(); 
}

const checkWinner=() =>{
    for (let pattern of winPattern){
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;
            if(pos1!=""&& pos2!="" && pos3 != ""){
                if(pos1===pos2 && pos2===pos3){
                    console.log("Winner",pos1);
                    showWinner(pos1);
                }
            }
    }
}
newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);