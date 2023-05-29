function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clearBox(elementID){
  document.getElementById(elementID).innerHTML = "";
}

var expression = document.querySelector("#expression");
var solution;

function random_problem() {
  var option = getRandomInt(1, 2);
  var num1, num2, sym;
  if (option == 1){
    num1 = getRandomInt(1,20);
    num2 = getRandomInt(0, 9);
    sym = "+";
    expression.innerHTML += `${num1} \n${sym}${num2} \n⸻`;
    solution = num1 + num2;
  }
  if (option == 2){
    var num1 = getRandomInt(1, 20);
    var num2 = getRandomInt(0,9);
    sym = "-";
    
    if(num2 >= num1){
      expression.innerHTML += `${num2} \n${sym}${num1} \n⸻`;
      solution = num2 - num1;
    } else if(num1 >= num2){
      expression.innerHTML += `${num1} \n${sym}${num2} \n⸻`;
      solution = num1 - num2;
    }
  }
  
}
random_problem();


/*function random_problem() {
  var num_1 = getRandomInt(0, 10);
  var num_2_addoptions = [1, 2, 5];
  var num_2_suboptions = [0, 1, 2];
  var num_2_add = num_2_addoptions[Math.floor(Math.random() * num_2_addoptions.length)];
  var num_2_sub = num_2_suboptions[Math.floor(Math.random() * num_2_suboptions.length)];
  var equation = document.createElement("pre");
  var order = getRandomInt(1, 2);
  var type = getRandomInt(1, 2);
  if (type == 1) {
    if (order == 1) {
      equation.innerHTML = `\n  ${num_1} \n+ ${num_2_add} \n----`;
    } else if (order == 2) {
      equation.innerHTML = `\n  ${num_2_add} \n+ ${num_1} \n----`;
    }
  } else if (type == 2) {
    if (num_1 >= num_2_sub){
      equation.innerHTML = `\n ${num_1} \n- ${num_2_sub} \n----`;
    } else if(num_2_sub >= num_1){
      equation.innerHTML = `\n ${num_2_sub} \n- ${num_1} \n----`;
    }
  }
  document.querySelector("#question").append(equation);
}
random_problem();*/
