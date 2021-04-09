

$(document).ready(function(){
    var currentDay = moment().format('LLLL');
    $('#currentDay').text(currentDay);
});


var timeCheck = function(time){
    var futureTime = moment(time).add(1, 'hours');
    console.log(time);
    if(moment(time).isBefore(futureTime)){
        $('description').addClass(".future");
    }
};
    
setInterval(function(){
    var currentTime = moment();
    
      timeCheck(currentTime);
   
  }, 30000);