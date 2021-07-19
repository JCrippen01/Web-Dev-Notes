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
        feeling: "I am sick again today, this has slowed me down.",
        lessons: "Today I learned about Unique Identifiers and Creating arrays.",
        time: "I spent 3 hours on book 2 and completed through chaper 4"
    },
    {
        id: 2,
        date: "7/19/2021",
        feeling: "I am feeling much better, I now just have an annoying cough.",
        lessons: "Today I worked on chapter 6 and 7, Displaying toy properties, for...of loops, string interpolation, Push(),",
        time: "Spent 2.5 hours"

    }
]
for (const note of notes) {
    console.log(`Note ${note.id}
Date is ${note.date}
Feeling is ${note.feeling}
What I learned is ${note.lessons}
How long is studied ${note.time}
---------------------------------
`)
}