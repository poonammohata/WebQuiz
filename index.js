//importing readline package and chalk
var readlineSync=require('readline-sync');
const chalk=require('chalk');

//list of questions and answers
var list=[
  { id:"1",
    question:("Which attribute specifies a unique alphanumeric identifier to be associated with an element?"),
    option:["class","id","article","html"],
    answer:"id",
  },
  { id:"2",
    question:("_________ keyword is used to declare variables in javascript"),
    option:["var","dim","string","none of the above"],
    answer:"var"
  },
  {
    id:"3",
    question:("Which of the following choices is correctly written hexadecimal color code"),
    option:["#FEFEFEFE","#003366","#fE36","none of these"],
    answer:"#003366"
  },
  {
    id:"4",
    question:("What value is used with the dispaly property to change a list from vertical to horizontal"),
    option:["vertical","horizontal","inline","none of these"],
    answer:"inline"
  },
  {
    id:"5",
    question:("How can you make a list that lists the items with numbers"),
    option:["<ul>","<dl>","<ol>","<list>"],
    answer:"<ol>"
  },
  {
    id:"6",
    question:("How many ways are there to include css in html document"),
    option:["4","2","5","3"],
    answer:"3"
  },
  {
    id:"7",
    question:("What value of rel is used to include external css file"),
    option:["css","external","stylesheet","file"],
    answer:"stylesheet"
  },
  {
    id:"8",
    question:("We send and receive html file using which protocol"),
    option:["POP3","HTTP","SMTP","FTP"],
    answer:"HTTP"
  },
  {
     id:"9",
    question:("Which header tag produces the largest size font for a heading "),
    option:["<header6>","<h6>","<h1>","<header1>"],
    answer:"id"
  },
  {
    id:"10",
    question:("By default, all linked test is _________"),
    option:["italic","underlined","bold","like normal text"],
    answer:"underlined"
  }
];

//variable count the score
var count=0;
//function for qna
function qna(question,answer,option,id){
  console.log(chalk.red((id+") "+question)));
  var j=0;
  for(var i=0;i<option.length;i++){
    console.log(chalk.red((++j+". "+option[i])));
  }
  var userans=readlineSync.question(chalk.hex("#047857")("\nenter the correct option "));

  if(option[userans-1]===answer){
    count=count+2;
    console.log(chalk.green("\nYipppi!!, right answer"));
    console.log(chalk.green("you got 1 point"));
    console.log(chalk.rgb(123, 45, 67)("==============================\n"))
  }
  else{
    console.log(chalk.redBright("\nWrong answer"));
    console.log(chalk.redBright("No points"));
    console.log(chalk.rgb(123, 45, 67)("================================\n"))
  }
}


console.log(chalk.red("=====WEB QUIZ====="));
var name=readlineSync.question(chalk.hex("#047857")("Enter your name "));
var count=0;
var linebreak="------------------------------------------";
var doublelineBreak="===========================================";

console.log(chalk.hex("#B91C1C")("\nWelcome to Web Quiz "+name+"\n"));
console.log(chalk.hex("#047857")("Guidelines for the quiz:\n - There will be 10 basic web question \n - For each right answer, you will get 2 points \n - For wrong answer, there is no point\n"));

if(readlineSync.keyInYN("Do you want to start\n")){
  var j=1;
  console.log(linebreak);
  for(var i=0;i<list.length;i++)
    {
        qna(list[i].question,list[i].answer,list[i].option,list[i].id)
    }
  console.log(chalk.green.bgRed("  "+name+" your score is "+count+"  "));
} 
else{
  console.log(chalk.red("\nBye-Bye, have a nice day "+name));
};


