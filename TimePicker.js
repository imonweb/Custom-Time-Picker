function getTimePartsFromPickable(timePickable){
  // 12:45 pm
  const pattern = /^(\d+):(\d+) (am|pm)$/;
  const [hour, minute, meridiem] = Array.from(timePickable.value.match(pattern)).splice(1);

  // console.log(result);

  return {
    hour,
    minute,
    meridiem
  };
}

function getSelectsFromPicker(timePicker){
  const [hour, minute, meridiem] = timePicker.querySelectorAll(".time-picker__select");

  return {
    hour,
    minute,
    meridiem
  }
}

function getTimeStringFromPicker(timePicker){
  const selects = getSelectsFromPicker(timePicker);

  return `${selects.hour.value}:${selects.minute.value} ${selects.meridiem.value}`;
}

function numberToOption(number){
  const padded = number.toString().padStart(2, "0");
}

const exampleTimePickable = document.querySelector('.time-pickable');
const exampleTimePicker = document.querySelector('.time-picker');

console.log(getTimeStringFromPicker(exampleTimePicker));