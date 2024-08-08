// Console log a welcome message with instructions to mad libs



// Prompt the user to enter parts of speech for mad libs
// You should be asking for at least 4 words
let adjective = prompt("Give me an adjective")
let verb = prompt("Give me a verb that is present tense")
let adjective2 = prompt("Give me another adjective ")
let pluralNoun = prompt("Give me a plural noun")

// Create an array that stores the values the user entered
let userenteredArray =[]

userenteredArray.push(adjective)
userenteredArray.push(verb)
userenteredArray.push(adjective2)
userenteredArray.push(pluralNoun)


// Push the user inputs to the array

console.log(`In a small ${userenteredArray[0]} school in the bronx, there was problem with too many ${userenteredArray[1]}. These ${userenteredArray[1]} love to ${userenteredArray[2]}, which caused Mr.p so many headaches. However, no one wanted to remove them because theu were too ${userenteredArray[3]} so they stayed.`)

// Console log the story with the array values passed into the blanks
// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive








