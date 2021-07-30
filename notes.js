// Note Collection
// In this chapter, you will build an array filled with objects that represent notes about your daily learning.

// Setup
// These commands will create a directory for this project, and a JavaScript file in which you can write your code. Lastly, it will open up the directory is Visual Studio Code.

// cd ~/workspace
// mkdir daily-notes
// cd daily-notes
// touch notes.js

// code .
// Objects in Arrays
// Just like with your phones and toys from the previous project, start with a variable whose value is an array. Define 2 objects in that array. Each object should have the following properties on it.

// id (Unique identifier, or primary key)
// subject (What you learned about)
// date (The date you learned it)
// feeling (How you felt when learning it)
// timeSpent (Roughly how long you learned about it, minutes)
// Vocabulary check: What is the data type of each property? Which ones should be a string type, and which should be an integer?

// Here's some starter code. You add the rest of the properties to each object. You decide what the values of each property should be. Think back on the last few days of what you have worked on at NSS.

// ~/workspace/daily-notes/notes.js
const dogs = [
    {
        id: 1,
        name: "Kenji",
        breed:"Golden",
        age: 4,
        height: 22,
        weight: 67
    },
    {
        id: 2,
        name: "Jefe",
        breed: "Golden",
        age: 2,
        height: 19,
        weight: 60
    }
]
const digby = {
        id: 3,
        name: "Digby",
        breed: "English Pointer",
        age: 1.5,
        height: 19,
        weight: 64
}
dogs.push(digby);

for(const dog of dogs){
    console.log(dog.breed);
}



// When you are done, use console.log() to display the data structure to the terminal. Then run the following command in the terminal to see if it works 
// correctly and displays the array, or if you have a syntax error.  If you do have an error, make sure you have all the commas that you need after
// you properties. node notes.js
// Did you remember to add an id property to the second object?


// Chapter 6 notes:
// Adding a New Note
// In this chapter you will practice using the push() method that is available on every array to add things a new notes to your array.

// After your initial array definition, create a new note about today. Give it the same properties as the other two notes.

// Don't forget the id property.

// const noteAboutToday = {

// }
// Now that you have a new note object, add that new object to the end of your notes array with the push() method. Make sure you write this code before the console.log() 
//so that all of your notes will be displayed in the terminal.

// ---------------------------------------------------------------------
// Journal

// Note 1
// 7/16/2021
// I am sick again today, this has slowed me down.
// Today I learned about Unique Identifiers and Creating arrays.
// I spend 3 hours on book 2 and completed through chaper 4.

// Note 2
// 7/19/2021
// I am feeling much better, I now just have an annoying cough.
// Today I worked on chapter 6 and 7
// Displaying toy properties
// for...of loops
// string interpolation
// Push() 
// Spent 2.5 hours

const notes = [
    {
        id: 1,
        date: "7/16/2021",
        feeling: "poor",
        feelingNote: "I am sick again today, this has slowed me down.",
        lessons: "Today I learned about Unique Identifiers and Creating arrays.",
        time: "I spent 3 hours on book 2 and completed through chaper 4"
    },
    {
        id: 2,
        date: "7/19/2021",
        feeling: "ok",
        feelingNote: "I am feeling much better, I now just have an annoying cough.",
        lessons: "Today I worked on chapter 6 and 7, Displaying toy properties, for...of loops, string interpolation, Push(),",
        time: "Spent 2.5 hours"
    },
    {
        id: 3,
        date: "7/19/2021",
        feeling: "good",
        feelingNote: "I feel like I am moving much faster now.",
        lessons: "After lunch I worked on chapters 7,8,9 all assingnemts.",
        time: "Spent 1 hours"
    }
]

const searchTerm = "poor"
for (const note of notes) {
    if (note.feeling === searchTerm) {
    console.log(`Note ${note.id}
Date is ${note.date}
Feeling is ${note.feeling}
What I learned is ${note.lessons}
How long is studied ${note.time}
---------------------------------
`)
    }
}

//Chapter 9 Notes section:
// Finding a Note
// In this chapter, you need to define a variable named searchTerm. It's value can be the value of any property value you like from your notes. For example, if one of your notes has a feeling property whose value is "Compunctious", you're variable declaration would be the code below.

// const searchTerm = "Compunctious"
// Use that search term in your for..of loop to output only the object that has the value for the corresponding property.

// Here is boilerplate code. You need to enter in the proper condition for the if code block. Refer back to the code you wrote for Leonid's toys since you won't remember this code yet.

// It take a long time to do it from memory.

// for (const note of notes) {
//     if () {

//     }
// }

const note1 = { 
    date: "7/30/2021",
    feeling: "great",
    feelingNote: "slow and steady.",
    lessons: "learning to push up.",
    time: "working in 25 min bursts"
}

const note2 = {
    date: "7/30/2021",
    feeling: "good",
    feelingNote: "Just adding a second entry.",
    lessons: "Yea you push it , yeah you push it, push it.",
    time: "!Static X"
}

const createNote = (noteObject) => {

    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1
 noteObject.id = idForNewNote
 notes.push(noteObject)
}

createNote(note1)
createNote(note2)

for (note of notes) {
    console.log (notes)
}






