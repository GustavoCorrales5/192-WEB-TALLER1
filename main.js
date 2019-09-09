  var pic=document.querySelectorAll('.center__image');
  
  var count=0;
  
  setInterval(SwitchPic,4000);
  
  function SwitchPic() {
    switch(count){
        case 0:
        pic[count].style.opacity=0;
        pic[count+1].style.opacity=1;
        pic[count+2].style.opacity=0;
        break;
        case 1:
        console.log('xd');
        pic[count+1].style.opacity=1;
        pic[count].style.opacity=0;
        pic[count-1].style.opacity=0;
        
        break;
        case 2:
        pic[count-2].style.opacity=1;
        pic[count].style.opacity=0;
        pic[count-1].style.opacity=0;
        break;
        
        
    }
    console.log(count);
    
    count++;
    console.log(count);
    
    if(count>2){
        count=0;
    }
    console.log(count);
    
    
    
}