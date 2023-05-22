let count=0

const btns=document.querySelectorAll(".btn");
const value=document.querySelector("#value");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const styles=e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("increase")){
            count++;
        }else{
            count=0;
        }
        value.style.color=count>0 ? "green" : (count<0 ? "red" : "black")
        value.textContent=count;
    });
});