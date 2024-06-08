/*
var allPhotos= document.querySelectorAll('.inner img') ;
var mainBox=document.getElementById('mainBox') ;
var backImage=document.querySelector('#backImage') ;
var closePhoto = document.getElementById('closePhoto') ;


// var backSrc= backImage.getAttribute('src') ;


for (let i = 0; i < allPhotos.length; i++) {
    
    allPhotos[i].addEventListener('click', function (e){
        mainBox.classList.replace('d-none',"d-flex") ;
        var currentSrc =e.target.getAttribute('src') ;
        
        backImage.style.backgroundImage=`url(${currentSrc})`
      

            })
               
    }
//console.log(closePhoto);

closePhoto.addEventListener("click", function(){
            mainBox.classList.replace('d-flex','d-none')
})

mainBox.addEventListener("click", function(){
    mainBox.classList.replace('d-flex','d-none')
})

*/



var allPhoto = Array.from( document.querySelectorAll('.item-card img') );
var lightBoxImage = document.getElementById('lightBoxImage') ;
var lightBox = document.querySelector('#lightBox') ;
var closeImage = document.getElementById('closeImage') ;
var nextImage= document.getElementById('nextImage') ;
var prevImage = document.querySelector('#prevImage')

   

var currentIndex;

    for (let i = 0; i < allPhoto.length; i++) {
        allPhoto[i].addEventListener('click', function(e){
                var current = e.target.getAttribute('src') ;
            lightBoxImage.style.backgroundImage = `url(${current})`
            lightBox.classList.replace('d-none', 'd-flex')
            currentIndex= allPhoto.indexOf(e.target) ;
        })
        
    }

    closeImage.addEventListener('click', function(){
        lightBox.classList.replace('d-flex', 'd-none') 
    })
    
    // lightBox.addEventListener('click', function(e){
    //     lightBox.classList.replace('d-flex', 'd-none') 
    // })



    nextImage.addEventListener('click', function(){
        currentIndex++;
        if (currentIndex >= allPhoto.length) currentIndex=0 ;
        lightBoxImage.style.backgroundImage = `url(${allPhoto[currentIndex].getAttribute('src')})`
    })


    prevImage.addEventListener('click', function(){
            currentIndex--;
        

                if ( currentIndex < 0) return currentIndex=allPhoto.length

            lightBoxImage.style.backgroundImage = ` url(${allPhoto[currentIndex].getAttribute('src')})`
    })

