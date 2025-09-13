const dice=document.getElementById("dice");
const result=document.getElementById("result");
const r=document.getElementById("roll");
r.addEventListener("click",()=>
{
    dice.classList.add("dice_rotate");
    setTimeout(()=>{
    {
        dice.classList.remove("dice_rotate");
        const ans=Math.floor(Math.random()*6)+1;
        dice.textContent=["🎲","⚀","⚁","⚂","⚃","⚄","⚅"][ans];

    }
    },600);
    
});