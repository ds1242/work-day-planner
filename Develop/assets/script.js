

$(document).ready(function(){
    var currentDay = moment().format('LLLL');
    $('#currentDay').text(currentDay);
    var currentTime = moment().format("h A", "America/Denver");
    console.log(currentTime);    


    $('.hour').each(function(i, obj){
        $(this).text(moment().set("hour", 8 + i).format("h A", "America/Denver"))
        var timeSection = moment().set("hour", 8 + i).format("h A", "America/Denver");
        var currentTime = moment().format("h A", "America/Denver");
        console.log("loop check timeSection " + timeSection);
        console.log("loop check currentTime " + currentTime);
        console.log(moment(timeSection).isBefore(currentTime));
        console.log(moment(timeSection).isSame(currentTime));
        
        if(moment(timeSection).isAfter(currentTime)){
            
            $("#task-block").addClass("future")
        } else if(moment(timeSection).isSame(currentTime)){
            $("#task-block").addClass("present")
        } else {
            $("#task-block").addClass("past")
        }
    })
    timeCheck(currentTime);
});


// update colors throughout the day
var timeCheck = function(time){
    
    // console.log("hourDiff " + hourDiff);
    $(".description").each(function(i, obj){
        
        if($('.hour') > time){        
            $(this).addClass("future");
        } else if($('.hour') = time){
            $(this).addClass("present") 
        } else {
            $(this).addClass("past");
        }
})
};
// interval to check time every hour and refresh colors through the day  
setInterval(function(){
    var currentTime = moment().format("hh", "America/Denver");
    timeCheck(currentTime);  
    console.log("time check done") 
     }, 3000);