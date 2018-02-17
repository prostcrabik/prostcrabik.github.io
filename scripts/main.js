var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/yJSJYmN1IQs.jpg') {
      myImage.setAttribute ('src','images/znR4eswiYF0.jpg');
    } else {
      myImage.setAttribute ('src','images/yJSJYmN1IQs.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Пожалуйста введите свое имя.'); //prompt Вызывает диалоговое окно и просит ввести некоторые джанные
	localStorage.setItem('name', myName); //localStorage позволяет сохранять данные в браузере
	myHeading.innerHTML = 'Test, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Test, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}