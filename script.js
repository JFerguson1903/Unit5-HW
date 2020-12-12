var DateTime = luxon.DateTime;
var currentDay = luxon.DateTime.local().toFormat('cccc, LLLL dd')

var hourContainer = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


function timeblockDisplay() {
    var luxonCurrentHour = luxon.DateTime.local().toFormat('ha');
    var currentHourIndex = hourContainer.indexOf(luxonCurrentHour);

    // Looping through each hourContainer item and appending a div that includes a save button
    for (var i = 0; i < hourContainer.length; i++) {

        if (currentHourIndex === i) {
            hourGhost = 'present';
        } else if (currentHourIndex < i) {
            hourGhost = 'past';
        } else {
            hourGhost = 'future';
        }

        $(".container").append(
            `<div class="row">
                <div id="" class="hour col-sm-1 p-2 text-right">${hourContainer[i]}</div>
                <div id="" class="${hourGhost} col-sm-10 px-0">
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
    var userEntry = $(`#textArea${saveBtnValue}`).val();
    localStorage.setItem(`DP_${luxon.DateTime.local().toFormat('LL-dd-yyyy')}_${saveBtnValue}`, userEntry);
});

function calendarPageLoad() {
    localStorage.getItem(saveBtnValue, userEntry);
}