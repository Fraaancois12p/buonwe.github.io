setInterval(function time(){
    var d = new Date();
    var days = 5 - d.getDay();
    var hours = 8 - (d.getHours()-9);
    var min = 60 - d.getMinutes();
    if((min + '').length == 1){
      min = '0' + min;
    }
    var sec = 60 - d.getSeconds();
    if((sec + '').length == 1){
          sec = '0' + sec;
    }
     const elem = document.getElementById('textwe');
    if(days == 0 && hours == 0 &&  min == 0){
      elem.text = "Buon WE";
    }
    jQuery('#week-countdown p').html(days+'d : '+hours+'h : '+min+'m : '+sec+'s ')
  }, 1000);
  
  
   
    
  