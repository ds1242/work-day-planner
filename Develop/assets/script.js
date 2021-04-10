// var taskList = JSON.parse(localStorage.get('taskList')) || [];

$(document).ready(function(){
    // generate the date and time at the top of the screen

    // need interval to reset time at the top
    var currentDay = moment().format('dddd, MMMM Do');
    $('#currentDay').text(currentDay);
    var currentTime = moment().format("h A", "America/Denver");
    console.log(currentTime);    

    // set hour in hour section
    $('.hour').each(function(i, obj){
        $(this).text(moment().set("hour", 8 + i).format("h A", "America/Denver"))
    })
    timeCheck(currentTime);
});

// update colors throughout the day
var timeCheck = function(time){    
    // loop through each .description section and determine the color based on a 24hour value starting at 8 for the workday
    // loop ends at the end of the day because the div's end there
    $(".description").each(function(i, obj){
        var timeSection = moment().set("hour", 8 + i).format("HH", "America/Denver");
        
        var currentTime = moment().format("HH", "America/Denver");  
          if(currentTime > timeSection){        
            $(this).addClass("past");
        } else if(currentTime === timeSection){
            $(this).addClass("present") 
        } else if(currentTime < timeSection) {
            $(this).addClass("future");
        }
})

// click on description to open textarea to add tasks
$('.description').on("click", function(){
    var text = $(this)
    .text()
    .trim();

    var textInput = $("<textarea>")
    .addClass("col-md-8")
    .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    var currentTime = moment().format("hh", "America/Denver");
    timeCheck(currentTime);  

    
})
$('.description').on("blur", "textarea", function(){
    var text = $(this)
    .val()
    .trim();

    // recreate p element
    var taskP = $("<p>")
      .addClass("m-1")
      .text(text)

    // replace textarea with p element
    $(this).replaceWith(taskP);

})


};
// interval to check time every hour and refresh colors through the day  
setInterval(function(){
    var currentTime = moment().format("hh", "America/Denver");
    timeCheck(currentTime);  
    console.log("time check done") 
}, 3000);