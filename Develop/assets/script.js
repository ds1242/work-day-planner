

$(document).ready(function(){
    var currentDay = moment().format('LLLL');
    $('#currentDay').text(currentDay);
});


var timeCheck = function(time){
    // var futureTime = moment().format("hh").add(1, 'hours');
    var currentTime = moment().format("hh");
    console.log(currentTime);
    // console.log(futureTime);
    if(moment(time).isBefore(futureTime)){
        $('description').addClass(".future");
    } else if(time = currentTime){
        $('descritpion').addClass(".present")
    } else {
        $('description').addClass(".past");
    }
};
    
setInterval(function(){
    var currentTime = moment().format("hh", "America/Denver");
    
      timeCheck(currentTime);
      
   
  }, 3000);