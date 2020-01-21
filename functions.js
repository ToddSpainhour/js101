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