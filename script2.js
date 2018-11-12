     
    // main slide show

     var i = 0;
     var x = 4;
     var y = 8;
     var images = [];
     var image = [];
     var img = [];
     var time = 3000;

      images[0] = 'images/responsive1.jpg';
      images[1] = 'images/responsive2.jpg';
      images[2] = 'images/responsive5.png';
      images[3] = 'images/responsive6.jpg';
      image[4] = 'images/design2.jpg';
      image[5] = 'images/design1.jpg';
      image[6] = 'images/design3.jpg';
      image[7] = 'images/design4.jpg';
      img[8] = 'images/development1.jpg';
      img[9] = 'images/development2.jpg';
      img[10] = 'images/development3.jpg';
      img[11] = 'images/development4.jpeg';
       function changeImg(){
         document.mainslide.src = images[i];
         document.designslide.src = image[x];
         document.developslide.src = img[y];
         if(i<images.length-1 && x<image.length-1 && y<img.length-1){
           i++;
           x++;
           y++;
         }else{
           i = 0;
           x = 4;
           y = 8;
         }
         setTimeout("changeImg()",time);
       }
       window.onload = changeImg;



