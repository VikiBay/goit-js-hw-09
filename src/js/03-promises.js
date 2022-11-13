import { Notify } from 'notiflix/build/notiflix-notify-aio';
form = document.querySelector('.form')
const {delay,step,amount} = form.elements;

form.addEventListener("submit", onFormSubmit)

function onFormSubmit(evt){
    evt.preventDefault()

    let delayVal = +delay.value;
    const stepVal = +step.value;
    const amountVal = +amount.value;

    for (let i=1;i<=amountVal; i+=1){
        createPromise(i,delayVal)
        .then(({ position, delay }) => {
            // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
            Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          })
          .catch(({ position, delay }) => {
            // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
            Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          });
          delayVal+=stepVal;
    }
}

function createPromise(position, delay) {
 
         return new Promise((resolve,reject) =>{
            setTimeout(()=>{
            const shouldResolve = Math.random() > 0.3;
            if (shouldResolve) {
          resolve({position,delay})
            } else {
          reject({position,delay})      
            }
        },delay)
    })
    
  }