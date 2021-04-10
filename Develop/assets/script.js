

$(document).ready(function(){
    var currentDay = moment().format('LLLL');
    $('#currentDay').text(currentDay);
});


// update colors throughout the day
var timeCheck = function(time){
    $(".description").each(function(i, obj){
        if(moment().isAfter(time)){        
            $(this).addClass("past");
        } else if(moment().isAfter(time)){
            $(this).addClass("future") 
        } else {
            $(this).addClass("present");
        }
})
};
// interval to check time every hour and refresh colors through the day  
setInterval(function(){
    var currentTime = moment().format("hh", "America/Denver");
    
      timeCheck(currentTime);
      
   
  }, 3000);