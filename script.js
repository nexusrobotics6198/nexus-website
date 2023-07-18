window.addEventListener("load", ()=>{
    let direction = false;
    function rotateShi(){
        let internaldirection = false;
        let counter = 0;
        document.querySelectorAll(".decor_hollowcircle").forEach((v)=>{
            const m = parseInt(v.style.transform.split("te(")[1].split("deg")[0]);
            let delta = 360;
            let baseSpeed = 360;
            let n = parseInt(v.classList[1].split("_")[1]) + 1;
            baseSpeed = (n == 2) ? baseSpeed*n*-1 : baseSpeed*n;
            if(direction){
                if(internaldirection){
                    delta*=-1;
                }
            }else{
               if(!internaldirection){
                    delta*=-1;
               }
            }
            v.style.transform = "rotate("+(m+baseSpeed)+"deg)";
            internaldirection = !internaldirection;
            counter++;
            if(counter >= 3){
                direction = !direction;
            }
        })
        setTimeout(rotateShi, 20000);
    }
    rotateShi();
    document.querySelectorAll(".randRot").forEach((v)=>{
        const num = Math.random()*360;
        v.style.transform = "rotate("+num+"deg)";
    })
    document.querySelectorAll(".card_team").forEach(v=>{
        v.onmousemove = (s)=>{
            const x = s.clientX - v.getBoundingClientRect().left;
            const y = s.clientY - v.getBoundingClientRect().top;
            v.style.background = "radial-gradient(at "+x+"px "+y+"px, rgba(176,61,206,0.4) 0%, rgba(239,0,255,0) 100%)";
        }
        v.onmouseleave = ()=>{
            v.style.background = "";
        }
    })
})