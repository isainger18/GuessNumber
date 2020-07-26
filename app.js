let numberText = document.getElementById("numberText");
let btnText = document.querySelector(".btn");
let messageResult = document.getElementById("messageResult");
let previousInput = document.getElementById("previousInput");
let counter= document.getElementById("counter")
let prevValue = document.createElement("div");
prevValue.className = "prevValue";

btnText.addEventListener("click", generateRandomNum);

function generateRandomNum() {
  let randomNum = Math.floor(Math.random() * 10);

  if (randomNum == numberText.value) {
    messageResult.classList.add("sucess");
    messageResult.innerText = "correct";
    messageResult.classList.remove("dngr");
  } else {
    messageResult.classList.remove("sucess");
    messageResult.innerText = "Wrong";
    messageResult.classList.add("dngr");
  }
  let localprevValue = localStorage.getItem("PreviousValue");
  if (localprevValue == null) {
    prevItem = [];
  } else {
    prevItem = JSON.parse(localprevValue);  
  }
  previousInput.appendChild(prevValue);
  prevItem.push(numberText.value);
  
  
  localStorage.setItem("PreviousValue", JSON.stringify(prevItem));
  if (prevItem == []) {
        prevValue.innerHTML = `Your Previous Value was : 0`;
  } else {
   
    prevValue.innerHTML = `Your Previous Value was : ${
        prevItem[prevItem.length - 2]
      }`;
      numberText.value=""
  }
 
   let counterVal= counter.innerHTML
   if(counterVal == 0){
       counter.innerText=10
   }else{
  counter.innerHTML= --counterVal
   }
 
}
