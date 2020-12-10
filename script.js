var DateTime = luxon.DateTime;
var currentDay = luxon.DateTime.local().toFormat('cccc, LLLL dd')

var hourContainer = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

function timeblockDisplay() {

    for (var i = 0; i < hourContainer.length; i++) {
        $(".container").append(
            `<div class="row">
                <div id="hour" class="hour col-sm-1 p-2 text-right">${hourContainer[i]}</div>
                <div id="event" class="past present future col-sm-10">
                    <textarea class="w-100 h-100">text</textarea>
                </div>
                <button id="saveBtn" class="saveBtn col-sm-1">
                    <i class="fa fa-save"></i> 
                </button>
            </div>`);
    }
}

timeblockDisplay();


$("#currentDay").append(currentDay);