const choices=document.querySelectorAll(".choice");
let userWin=0;
let compWin=0;
const genComp=()=>{
    const arr=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return arr[idx];
}
var userVar=document.querySelector("#userWin");
var compVar=document.querySelector("#compWin");
const feedback=document.querySelector("#feedback");
const showWinner=(win)=>{
    if(win)
    {
        userWin++;
        feedback.innerText="You Win";
        feedback.style.backgroundColor="green";
        userVar.innerText=`${userWin}`;
        compVar.innerText=`${compWin}`;
    }
    else{
        compWin++;
        feedback.innerText="You loose";
        feedback.style.backgroundColor="red";
        userVar.innerText=`${userWin}`;
        compVar.innerText=`${compWin}`;
    }
};
const draw=()=>{
    feedback.innerText="Draw";
}
const playGame=(userChoice)=>{
    const compChoice=genComp();
    if(userChoice===compChoice)
    {
       draw();
    }
    else{
        var win=false;
        if(userChoice==="rock")
        {
            win=compChoice==="paper"?true:false;
        }
        else if(userChoice==="paper")
        {
            win=compChoice==="scissors"?true:false;
        }
        else{
            win=compChoice==="rock"?true:false;
        }
        showWinner(win);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
