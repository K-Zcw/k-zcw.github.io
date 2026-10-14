const tornado = document.querySelector(".tornado");

if(tornado){

document.addEventListener("mousemove",(e)=>{

const rect=tornado.getBoundingClientRect();

const distance=Math.hypot(
e.clientX-(rect.left+40),
e.clientY-(rect.top+40)
);


if(distance<150){

tornado.style.animationDuration="1s";
tornado.style.transform="scale(1.3)";

}

else{

tornado.style.animationDuration="10s";
tornado.style.transform="scale(1)";

}

});

}