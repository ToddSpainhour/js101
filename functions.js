console.log("This is your new functions js file.")

const nuggetizer = (animal) => {

const output = `Processed ${animal}`;
return output;
}


console.log(nuggetizer('Chicken'))
console.log(nuggetizer("chichen"))
console.log(nuggetizer("cow"))
console.log(nuggetizer("fish"))
console.log(nuggetizer("pig"))



const dogBreed = (dog) => {
return `My favorite dog breed is ${dog}`
}

console.log(dogBreed('lab'))
console.log(dogBreed('actually I prefer cats.'))

//challenge one - create a function called add42 that take any number and adds 42



const add42 = (anyNumber) => {
return anyNumber + 42
}

console.log(add42(8))




//challenge two - write a function called oldAge that takes the year someone was born and figures out how old they will be in 2099


const ageIn2099 = (yearOfBirth) => {
return 2099 - yearOfBirth;
}

console.log(ageIn2099(1980));