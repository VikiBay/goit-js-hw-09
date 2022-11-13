import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
    datePicker:document.querySelector("#datetime-picker"),
    startBtn:document.querySelector("button[data-start]"),
    daysOutput:document.querySelector("span[data-days]"),
    hoursOutput:document.querySelector("span[data-hours]"),
    minutesOutput:document.querySelector("span[data-minutes]"),
    secondsOutput:document.querySelector("span[data-seconds]"),

}
refs.startBtn.setAttribute("disabled", true)


let currentTime = Date.now();

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
       
    timer.selectedTime = selectedDates[0].getTime();

 
    if (timer.selectedTime<=currentTime){
        Notify.failure('Please choose a date in the future');
//    window.alert("Please choose a date in the future")
    } else{
        refs.startBtn.removeAttribute("disabled", true)
      
    }
// }
    },
  };

  flatpickr(refs.datePicker, options);

  class Timer {
constructor(){
    this.intervalId=null;
    this.selectedTime;
}

onStart(){
    refs.datePicker.disabled = true;
    this.intervalId = setInterval(()=>{
    refs.startBtn.setAttribute('disabled', true)
    currentTime = Date.now()
    
const delta = this.selectedTime - currentTime;

if (delta<1000){
    clearInterval(this.intervalId)
    refs.secondsOutput.textContent='00'
    return
}
const convertedTime = this.convertMs(delta);
updateTimer(convertedTime)
    },1000)
}

convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

 }

  const timer = new Timer()

function addLeadingZero(value){
    return String(value).padStart(2,'0')
  }
  

  function updateTimer({ days, hours, minutes, seconds }){
    refs.daysOutput.textContent = addLeadingZero(days);
    refs.hoursOutput.textContent = addLeadingZero(hours);
    refs.minutesOutput.textContent = addLeadingZero(minutes);
    refs.secondsOutput.textContent = addLeadingZero(seconds);
  }

  refs.startBtn.addEventListener("click", timer.onStart.bind(timer))

  