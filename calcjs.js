let digits = document.querySelectorAll(".digit");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let fourth = document.querySelector(".fourth");
let third = document.querySelector(".third");
let input = document.querySelectorAll(".input");
let operator = document.querySelectorAll(".operator");
let opSave;
let eqls = document.querySelector("#equal");

for (let i = 0; i < digits.length; i++) {
	digits[i].value = [i]
	digits[i].addEventListener("click", function(){
	if (fourth.value == "" || first.value == ""){
		first.value += this.innerHTML}
	else{third.value += this.innerHTML};
	}) 
};


const removeAllValues = () => {
     let arrLoop = input.forEach(element =>{
     	element.value = "";
     })
    }; 

let clear = document.querySelector("#clear");
clear.addEventListener("click", removeAllValues);

const removeLastValue = () => {
	if(third.value == ""){
		first.value = first.value.substring(0, first.value.length - 1);
	} else {
	third.value = third.value.substring(0, third.value.length - 1);
}
};

let bkspace = document.querySelector("#back");
bkspace.addEventListener("click", removeLastValue);

for (let i = 0; i < operator.length; i++) {
	operator[i].addEventListener("click", function(){
	fourth.value = this.innerHTML;
	opSave = this.id;
	})
};

const operate = () => { 
	let result;
      /*switch(opSave){
      	case plus:
      	result = first.value + third.value;
      	return result;
      	break;
      	case minus:
      	result = first.value - third.value;
      	return result;
      	break;
      	case multiply:
      	result = first.value * third.value;
      	return result;
      	break;
      	case divide:
      	result = first.value / third.value; 
        return result;
      }*/
      if (opSave == "minus"){
      	result = first.value - third.value;
      } else if (opSave == "plus"){
      	result = (+first.value) + (+third.value);
      } else if (opSave == "multiply"){
      	result = first.value * third.value;
      } else {result = first.value / third.value;}
    second.value = result;
}

eqls.addEventListener("click", operate);