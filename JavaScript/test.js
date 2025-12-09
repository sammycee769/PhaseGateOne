const prompt = require("prompt-sync")();

function generateRandomNumber(){
let random = parseInt((Math.random()*10));
return random;
}

//console.log(generateRandomNumber());

function generateQuestion(rand){
let number = generateRandomNumber();
let result;
if (number == 0){
result = '3';
return ("5 - 2= ");
}
else if(number == 1){
result = '2';
return ("10 - 8= ");
}
else if(number == 2){
result = '4';
return ("12 - 8= ");
}
else if(number == 3){
result = '7';
return ("15 - 8= ");
}
else if(number == 4){
result = '12';
return ("20 - 8= ");
}
else if(number == 5){
result = '1';
return ("10 - 9= ");
}
else if(number == 6){
result = '12';
return ("30 -18= ");
}
else if(number == 7){
result = '17';
return ("45 - 28= ");
}
else if(number == 8){
result = '7';
return ("25 - 1= 8");
}
else if(number == 9){
result = '21';
return ("40 - 19= ");
}

}
function generateAnswers(rand){
let number = generateRandomNumber();
let result;
if (number == 0){
result = '3';

}
else if(number == 1){
result = '2';

}
else if(number == 2){
result = '4';

}
else if(number == 3){
result = '7';

}
else if(number == 4){
result = '12';

}
else if(number == 5){
result = '1';

}
else if(number == 6){
result = '12';

}
else if(number == 7){
result = '17';

}
else if(number == 8){
result = '7';

}
else if(number == 9){
result = '21';

}
return result;
}



let quest = 0;
let count = 0;
let sum = 0;
while (quest<= 10){
question = (generateQuestion());
input = parseInt(prompt(question, + "="));
quest++;
sum+=input;
if( input != generateAnswers());
while(count<2){
input = parseInt(prompt(question,"="));
count++;
}}
console.log(sum);

