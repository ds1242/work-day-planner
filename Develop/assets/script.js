var taskList = JSON.parse(localStorage.getItem("taskList"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
    if (!taskList) {
      taskList = {
        descrip8: [],
        descrip9: [],
        descrip10: [],
        descrip11: [],
        descrip12: [],
        descrip1: [],
        descrip2: [],
        descrip3: [],
        descrip4: [],
        descrip5: []
      };
    };
console.log(taskList);    
var loadTasks = function(taskList) {
    
  
    // loop over object properties
    $.each(taskList, function(list, arr) {
      console.log(list, arr);
      // then loop over sub-array
      arr.forEach(function(task) {
        createTask(task.text, task.date, list);
      });
    });
    console.log(taskList);
  };

$(document).ready(function(){
    // generate the date and time at the top of the screen

    // need interval to reset time at the top
    var currentDay = moment().format('dddd, MMMM Do');
    $('#currentDay').text(currentDay);
    var currentTime = moment().format("h A", "America/Denver");
    console.log(currentTime);    
    loadTasks(taskList);
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
};
// click on description to open textarea to add tasks
$('.row').on("click", ".description", function(event){
    event.preventDefault();
    
    var text = $(this)
    .text()
    .trim();
    // get all classes attached to div to add to new text area
    var classList = $(this).attr("class")
    var classArr = classList.split(/\s+/);
    // get id 
    var propTest = $(this).prop("id");
    
    // create text area and attach classes, text, and id
    var textInput = $("<textarea>")
    .addClass(classArr)
    .addClass("text-area")
    .val(text)
    .attr("id", propTest);
    // replace div with text area 
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    

})

$('.saveBtn').on("click", function(event){
    event.preventDefault();
    // console.log(i);
    var text = $(".text-area")
        .val()
        .trim();

    var id = $(".text-area").prop("id");
    
    // get all classes attached to the text area to put into the new div element
    var classList = $(".text-area").attr("class")
    var classArr = classList.split(/\s+/);

    // recreate div element
    var taskDiv = $("<div>")
        .addClass(classArr)
        .removeClass("text-area")
        .text(text)
        .attr("id", id);      
        
    // replace textarea with div element
    $(".text-area").replaceWith(taskDiv);
    
    var tempArr = []
    var arrName = $(".description").attr("id")
    

    tempArr.push({
        id: arrName,
        text: text
    })

    
    taskList[arrName] = tempArr;
    console.log(text);
    console.log(arrName);
    console.log(taskList[arrName]);
    
    localStorage.setItem('taskList', JSON.stringify(taskList));

})



// interval to check time every hour and refresh colors through the day  
setInterval(function(){
    var currentTime = moment().format("hh", "America/Denver");
    timeCheck(currentTime);  
    console.log("time check done") 
}, 3000);