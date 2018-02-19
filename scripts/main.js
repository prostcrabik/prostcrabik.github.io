var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/yJSJYmN1IQs.jpg') {
      myImage.setAttribute ('src','images/znR4eswiYF0.jpg');
    } else {
      myImage.setAttribute ('src','images/yJSJYmN1IQs.jpg');
    }
}
