function checkNumber(){
    var userNumber = document.getElementById('userNumber').value;
    var result = document.getElementById('result');
    if(userNumber % 2 === 0){
     result.innerHTML = ' Result: Even Number'
    }
    else{
        result.innerHTML = 'Result:Odd Number';
    }
}


function submitform(){
    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var output = `userName: ${userName} password: ${password} email: ${email}`
    var h1Tag = document.getElementById('userid');
    h1Tag.innerHTML = userName

    var h1TagEmail = document.getElementById('emailid');
    h1TagEmail.innerHTML = email
    console.log(output)
}



function onChangeHandler(){
    var inputTag = document.getElementById('input');
    console.log(inputTag.value)
}


function Clickme(){
    var inputTag = document.getElementById('input');
    // var userinput = document.getElementById('input').type;  //issa be console ma value/type/etc aa jati ha 
    if(inputTag.type == 'password'){
        inputTag.type = 'text'
    }
    else{
         inputTag.type ='password'
    }
    console.log('Button Clicked',inputTag.type);   //.ka aga jo jaheya lekhya console ma show kar da ga exp:-type/value/placeholder/etc.
}



// var h1tag = document.querySelector('h1');
// var h1tag = document.getElementById('heading');
// var ptag = document.getElementById('pera');
// var tags = document.getElementsByTagName('p');   //agr tag ak sa zyada hunga tu array ban jai gi console ma
// var tags = document.getElementsByClassName('pera');
// var tags = document.querySelector('p');
// var tags = document.querySelectorAll('p');
// var tags = document.querySelectorAll('.pera');
// var tags = document.querySelectorAll('p.pera');
// var tags = document.querySelectorAll('p#pera');
// var tags = document.querySelectorAll('.pera#pera');
// var tags = document.querySelectorAll('p.pera#pera');
// console.log(tags);   //document global variable ha js ma