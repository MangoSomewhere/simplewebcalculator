function myFunction(){
    alert('I am an alert box!');
}

function addNumber(){
    alert('adding numbers....');
    var num1 = Number(document.getElementById('fnum').value);
    var num2 = Number(document.getElementById('snum').value);    
    var result = num1 + num2;

    document.getElementById('result').innerHTML = result;

};