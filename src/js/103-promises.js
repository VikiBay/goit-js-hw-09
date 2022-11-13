const form = document.querySelector('.form')
const {delay:delayInp,step:stepInp, amount:amountInp} = form.elements;


form.addEventListener('submit', onStart)

function onStart(evt){
    evt.preventDefault()

const amount = Number(amountInp.value);
let delay = Number(delayInp.value);
// const step = Number(stepInp.value);
const step = +stepInp.value;

for (let i=1; i<=amount; i+=1){
        createPromise(i,delay)
        .then(({position,delay}) =>console.log(`✅ Fulfilled promise ${position} in ${delay}ms`))
        .catch(({position,delay}) =>console.log(`❌ Rejected promise ${position} in ${delay}ms`))
        delay+=step;
        }
}

function createPromise(position,delay){
            
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const shouldResolve = Math.random() > 0.3;
            if(shouldResolve){
                resolve({ position, delay })
        
            } else{
                reject({ position, delay })
            }

        },delay)
    })
    }

// function delayTerms (delay,step,amount) {
//     let stepDelay = delay;
//     for (let i=1; i<=amount; i+=1){
//     createPromise(i,stepDelay)
//     .then(({position,delay}) =>console.log(`✅ Fulfilled promise ${position} in ${delay}ms`))
//     .catch(({position,delay}) =>console.log(`❌ Rejected promise ${position} in ${delay}ms`))
//     stepDelay+=step;
//     }
// }


  




// function createPromise(position, delay) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const shouldResolve = Math.random() > 0.3;
//         if (shouldResolve) {
//           resolve({ position, delay });
//         } else {
//           reject({ position, delay });
//         }
//       }, delay);
//     });
//   }
  
//   function listOfDelay(delay, step, amount) {
//     let stepDelay = delay;
//     for (let i = 1; i <= amount; i += 1) {
//       createPromise(i, stepDelay)
//         .then(({ position, delay }) =>
//           Notiflix.Notify.success(
//             `✅ Fulfilled promise ${position} in ${delay}ms`
//           )
//         )
//         .catch(({ position, delay }) =>
//           Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
//         );
//       stepDelay += step;
//     }
//   }
// createPromise(position,delay)
// .then
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

