

$(document).ready(function(){
    var currentDay = moment().format('LLLL');
    $('#currentDay').text(currentDay);
    var currentTime = moment().format("h A", "America/Denver");
    console.log(currentTime);    


    $('.hour').each(function(i, obj){
        $(this).text(moment().set("hour", 8 + i).format("h A", "America/Denver"))
        // var timeSection = moment().set("hour", 8 + i).format("h", "America/Denver");
        // var currentTime = moment().format("h", "America/Denver");
        
        
        // if(moment(timeSection).isAfter(currentTime)){
            
        //     $("#task-block").addClass("future")
        // } else if(moment(timeSection).isSame(currentTime)){
        //     $("#task-block").addClass("present")
        // } else {
        //     $("#task-block").addClass("past")
        // }
    })
    timeCheck(currentTime);
});


// update colors throughout the day
var timeCheck = function(time){
    
    // console.log("hourDiff " + hourDiff);
    $(".description").each(function(i, obj){
        var timeSection = moment().set("hour", 8 + i).format("HH", "America/Denver");
        // var timeSection = moment().hour(8 + i);
        var currentTime = moment().format("HH", "America/Denver");  
        console.log("loop check timeSection " + timeSection);
        console.log("loop check currentTime " + currentTime);
        console.log(moment(currentTime).isBefore(timeSection, 'hour'));
        console.log(moment(currentTime).isSame(timeSection, 'hour'))
        console.log(moment(currentTime).isAfter(timeSection, 'hour'))

      
     

        if(currentTime > timeSection){        
            $(this).addClass("past");
        } else if(currentTime === timeSection){
            $(this).addClass("present") 
        } else if(currentTime < timeSection) {
            $(this).addClass("future");
        }
})
};
// interval to check time every hour and refresh colors through the day  
setInterval(function(){
    var currentTime = moment().format("hh", "America/Denver");
    timeCheck(currentTime);  
    console.log("time check done") 
     }, 300000);