function openLogin(role){

let roleName = "";

switch(role){

case "admin":
roleName = "المدير";
break;

case "teacher":
roleName = "المدرس";
break;

case "student":
roleName = "الطالب";
break;

case "parent":
roleName = "ولي الأمر";
break;

}

alert("سيتم فتح صفحة تسجيل دخول " + roleName + " في الخطوة القادمة");
}

document.addEventListener("mousemove",(e)=>{

const cards = document.querySelectorAll(".login-card");

cards.forEach(card=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const centerX = rect.width / 2;
const centerY = rect.height / 2;

const rotateY = (x - centerX) / 25;
const rotateX = -(y - centerY) / 25;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

});

document.addEventListener("mouseleave",()=>{

document.querySelectorAll(".login-card").forEach(card=>{

card.style.transform =
"perspective(1000px) rotateX(0deg) rotateY(0deg)";

});

});
