const numb_1 = document.querySelector(".num-html");
let counter_1 = 0;
setInterval(()=>{
  if(counter_1 == 90){
    clearInterval();
  }else{
    counter_1+=1;
    numb_1.textContent = counter_1 + "%" ;
  }
}, 20);

const numb_2 = document.querySelector(".num-css");
let counter_2 = 0;
setInterval(()=>{
  if(counter_2 == 80){
    clearInterval();
  }else{
    counter_2+=1;
    numb_2.textContent = counter_2 + "%" ;
  }
}, 25);

const numb_3 = document.querySelector(".num-bootstrap");
let counter_3 = 0;
setInterval(()=>{
  if(counter_3 == 90){
    clearInterval();
  }else{
    counter_3+=1;
    numb_3.textContent = counter_3 + "%" ;
  }
}, 20);

const numb_4 = document.querySelector(".nam-javascript");
let counter_4 = 0;
setInterval(()=>{
  if(counter_4 == 60){
    clearInterval();
  }else{
    counter_4+=1;
    numb_4.textContent = counter_4 + "%" ;
  }
}, 30);