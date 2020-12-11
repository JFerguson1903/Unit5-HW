var DateTime = luxon.DateTime;
var currentDay = luxon.DateTime.local().toFormat('cccc, LLLL dd')

var hourContainer = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


function timeblockDisplay() {
    // Looping through each hourContrainer item and appending a div that includes a save button
    for (var i = 0; i < hourContainer.length; i++) {
        $(".container").append(
            `<div class="row">
                <div id="" class="hour col-sm-1 p-2 text-right">${hourContainer[i]}</div>
                <div id="" class="past present future col-sm-10">
                    <textarea id="textArea${hourContainer[i]}" class="w-100 h-100"></textarea>
                </div>
                <button id="" class="saveBtn col-sm-1" value="${hourContainer[i]}">
                    <i class="fa fa-save"></i> 
                </button>
            </div>`);
    }
}

// Calling the function
timeblockDisplay();

// Appending the currentDayto the HTML in the "#currentDay" div
$("#currentDay").append(currentDay);

// On Click event listener for saveBtn
$(document.body).on('click', '.saveBtn', function() {
    var saveBtnValue = $(this).val();
    var userChoice = $(`#textArea${saveBtnValue}`).val();
    console.log(userChoice);
});