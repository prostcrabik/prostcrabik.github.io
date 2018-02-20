var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test.jpg') {
      myImage.setAttribute ('src','images/test2.jpg');
    } else {
      myImage.setAttribute ('src','images/test.jpg');
    }
}

