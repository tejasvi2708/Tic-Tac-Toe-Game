let boxes=document.querySelectorAll(".box");
let reset=document.querySelector('.reset_btn');
let newGame=document.querySelector('#new_btn');
let mssg_container=document.querySelector('.mssg_container');
let mssg=document.querySelector('#mssg');
let turn=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const reset_game=()=>{
    turn=true;
    enabled_box();
    mssg_container.classList.add('hide');
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log('box was clicked');
        if(turn){//player O
            box.innerText='O';
            turn=false;
        }
        else{ //player X
            box.innerText='X';
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    });
});
const disabled_box=()=>{
  for(let box of boxes){
box.disabled=true;
  }
};
const enabled_box=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
  mssg.innerText=`Congratulations, the winner is ${winner}`;
  mssg_container.classList.remove('hide');
  disabled_box();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!='' && pos2!='' && pos3!=''){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
            }
        }
    }
};
newGame.addEventListener('click',reset_game);
reset.addEventListener('click',reset_game);