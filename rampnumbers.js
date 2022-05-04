let number = 200 // giving a number

let decrescentes = 0  // number of not ramp numbers
let crescentes = decrescentes - number  // ramp numbers


for (let i = 0; i < number + 1; i++) {   //loop into numbers 
     let numArray = i.toString().split("") //
     console.log(numArray)
    if(numArray.length > 1){
         for (let j = 0; j < numArray.length; j++) {
         if (parseInt(numArray[j]) > parseInt(numArray[j +1])){
             decrescentes++
             console.log("numero decrescente")
         }else {
           
         }
     }
    }

    }

console.log(decrescentes, "not ramp numbers")

console.log(crescentes, "ramp numbers")
