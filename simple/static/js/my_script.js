var name;
var surname;
var birthdate;
var jobExperience;
var salary;
var progLang;
var file;

function checkButton(){
    btn = document.getElementById("submit-btn");
    if (name && surname && birthdate && jobExperience && salary && progLang && file)
    {
        btn.removeAttribute("disabled");
    }
    else btn.setAttribute("disabled", true);
}


function namevalidator(form) {
    inp = document.getElementById("name");
    val = inp.value;
    if(val.length == 0){
        name = false;
        inp.setAttribute("placeholder" , "Please enter name");
        inp.setAttribute("style" , "border-color: #f55");
        
    }
    else{
        name = true;
        inp.setAttribute("style" , "border-color: #af8");
    }
checkButton();
      
 }

function surnamevalidator(form) {
    inp = document.getElementById("surname");
    val = inp.value;
    if(val.length == 0){
        surname = false;
        inp.setAttribute("placeholder" , "Please enter surname");
        inp.setAttribute("style" , "border-color: #f55");
        
    }
    else{
        surname = true;
        inp.setAttribute("style" , "border-color: #af8");
    }
checkButton();
      
 }


function datevalidator(form) {
    inp = document.getElementById("birthdate");
    val = inp.value;

  if ((/(\d{4})-(\d{1,2})-(\d{1,2})/.test(val))){
        birthdate = true;
        inp.setAttribute("style" , "border-color: #af8");
    }

    else{
        birthdate  = false;
        inp.setAttribute("placeholder" , "Please enter date");
        inp.setAttribute("style" , "border-color: #f55");
    }
checkButton();

 }


function jobexpvalidator(form) {
    inp = document.getElementById("jobExperience");
    val = inp.value;
    /*if(val % 1 != 0 || val.length == 0)*/
    if((/^[0-9]+$/.test(val)) || (/^[0-9]+\.[0-9]+$/.test(val)) ){
        jobExperience = true;
        inp.setAttribute("style" , "border-color: #af8");
    }
       
    else{
        jobExperience  = false;
        inp.setAttribute("placeholder" , "Please enter double number");
        inp.setAttribute("style" , "border-color: #f55");
    }
checkButton();
      
 }

function salaryvalidator(form) {
    inp = document.getElementById("salary");
    val = inp.value;
    /*if(val % 1 != 0 || val.length == 0)*/
    if((/^[0-9]+$/.test(val)) || (/^[0-9]+\.[0-9]+$/.test(val)) ){
        salary = true;
        inp.setAttribute("style" , "border-color: #af8");
    }
       
    else{
        salary  = false;
        inp.setAttribute("placeholder" , "Please enter double number");
        inp.setAttribute("style" , "border-color: #f55");
    }
checkButton();
      
 }

 function proglangvalidator(form) {
    inp = document.getElementById("progLang");
    val = inp.value;
    if(val.length == 0){
        progLang = false;
        inp.setAttribute("placeholder" , "Please enter progLang");
        inp.setAttribute("style" , "border-color: #f55");

    }
    else{
        progLang = true;
        inp.setAttribute("style" , "border-color: #af8");
    }
checkButton();

 }

function filevalidator(){
    inp = document.getElementById("file");
    val = inp.value;
    if (val.length == 0){
        file = false;
        inp.setAttribute("placeholder", "Please attach file");
        inp.setAttribute("style", "border-color: #f55");
    }
    else{
        file = true;
    }
    checkButton();
}

document.getElementById("name").onchange = namevalidator;
document.getElementById("surname").onchange = surnamevalidator;
document.getElementById("birthdate").onchange = datevalidator;
document.getElementById("jobExperience").onchange = jobexpvalidator;
document.getElementById("salary").onchange = salaryvalidator;
document.getElementById("progLang").onchange = proglangvalidator;
document.getElementById("file").onchange = filevalidator;


