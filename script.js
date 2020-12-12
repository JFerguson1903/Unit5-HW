var DateTime = luxon.DateTime;
var currentDay = luxon.DateTime.local().toFormat('cccc, LLLL dd')
var localStorageKeyDate = luxon.DateTime.local().toFormat('LL-dd-yyyy');

// Assigning variable for hourContainer array
var hourContainer = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// Setting a function for running the page
function timeblockDisplay() {
    var luxonCurrentHour = luxon.DateTime.local().toFormat('ha');
    var currentHourIndex = hourContainer.indexOf(luxonCurrentHour);

    // Looping through each hourContainer index and appending a div that includes a save button
    for (var i = 0; i < hourContainer.length; i++) {
        // Assesses if the current hour is past, present, or future
        if (currentHourIndex === i) {
            hourGhost = 'present';
        } else if (currentHourIndex < i) {
            hourGhost = 'past';
        } else {
            hourGhost = 'future';
        }

        // Assigning a variable for the previouslySavedText from local storage
        var previouslySavedText = localStorage.getItem(`DP_${localStorageKeyDate}_${hourContainer[i]}`);

        // If there isn't an entry for that previouslySavedText then display nothing
        if (previouslySavedText === null) {
            previouslySavedText = "";
        }

        // Append divs as needed from the for loop
        $(".container").append(
            `<div class="row">
                <div id="" class="hour col-2 col-md-1 p-2 text-right">${hourContainer[i]}</div>
                <div id="" class="${hourGhost} col-9 col-md-10 px-0">
                    <textarea id="textArea${hourContainer[i]}" class="w-100 h-100">${previouslySavedText}</textarea>
                </div>
                <button id="" class="saveBtn col-1" value="${hourContainer[i]}">
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
    localStorage.setItem(`DP_${localStorageKeyDate}_${saveBtnValue}`, userEntry);
});