const zoomin=document.querySelector(".zoomin");
const zoomout=document.querySelector(".zoomout");
zoomin.addEventListener("click",function(){
    // canvas scale up twice
    ctx.scale(1.1,1.1);

    ctx.translate(-60,-10)
    redraw();
})

zoomout.addEventListener("click",function(){

    ctx.scale(0.9,0.9);

    ctx.translate(+60,+10);

    redraw();
});
