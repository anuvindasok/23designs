        var sliderContant = document.querySelectorAll('.portfolio-slide');
        var arrowRight = document.querySelector('#arrowRight');
        var arrowLeft = document.querySelector('#arrowLeft');
        var current = 0;

    //clear all images

    function reset(){
      for(let i = 0; i < sliderContant.length; i++){
        sliderContant[i].style.display = 'none';
      }
    }

    //Init slider

    function startSlide(){
      reset();
      sliderContant[0].style.display = 'block';
    }

    //show prev

    function slideLeft(){
      reset();
      sliderContant[current - 1].style.display = 'block';
      current--;
    }

     //show next

     function slideRight(){
       reset();
       sliderContant[current + 1].style.display = 'block';
       current++;
     }

    //left arrow  click

    arrowLeft.addEventListener('click',function(){
      if(current === 0){
        current = sliderContant.length;
      }
      slideLeft();
    });

      //right arrow click

    arrowRight.addEventListener('click',function(){
      if(current === sliderContant.length - 1){
        current = -1;
      }
      slideRight();
    });
    startSlide();