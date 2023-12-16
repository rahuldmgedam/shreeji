window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const splitContainer = document.querySelector('.split-container');
    const leftDiv = document.querySelector('.left-div');
    const rightDiv = document.querySelector('.right-div');

    const containerHeight = splitContainer.offsetHeight;
    const splitPoint = containerHeight * 12; 

    if (scrollTop < splitPoint) {
        const offset = (scrollTop / splitPoint) * 100;
        leftDiv.style.transform = `translateX(-${offset}%)`;
        rightDiv.style.transform = `translateX(${offset}%)`;
    }
});






// window.addEventListener('scroll', function() {
//     const scrollTop = window.scrollY;
//     const image = document.getElementById('image1');

//     const rotateAngle = scrollTop; 

  
//     image.style.transform = `rotateY(${rotateAngle}deg)`;
  
// });


let count = 1;
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const image = document.getElementById('image1');
 count++;
 console.log("count", count+1)
 if(count>=46){
    // image.style.border = '9px solid red'; 
 }
    // Calculate rotation angle based on scroll position
    const rotateAngle = scrollTop *.2; // Adjust rotation speed or ratio
    console.log('scroll',scrollTop);
console.log(Math.floor('rotateangle',rotateAngle));
if(scrollTop=="200"){
   image.style.zIndex = "0";
   image.style.display = 'none';
   image.style.border = '9px solid red'; 
   console.log('first')
}
    // Calculate vertical translation based on scroll position
    const translateY = scrollTop * 2; // Adjust the factor for downward movement

    // Apply rotation and translation transform to the image
    image.style.transform = `rotateY(${rotateAngle}deg) translateY(${translateY}px)`;
    
});




window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const image = document.getElementById('image2');

    // Calculate rotation angle based on scroll position
    const rotateAngle = scrollTop *.2; // Adjust rotation speed or ratio

    // Calculate vertical translation based on scroll position
    const translateY = scrollTop * 2; // Adjust the factor for downward movement

    // Apply rotation and translation transform to the image
    image.style.transform = `rotateY(${rotateAngle}deg) translateY(${translateY}px)`;
});


