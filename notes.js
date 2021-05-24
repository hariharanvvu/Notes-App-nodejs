const fs = require('fs');
const chalk = require('chalk');

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blue.bold('Your notes'));
    notes.forEach( (note) => console.log(chalk.green(note.title)));
}

const readNotes = (title) => {
    const notes = loadNotes();
    const findNotes = notes.find((note) => note.title === title)
    if(findNotes){
        console.log(chalk.green.bold('Title: ' + findNotes.title));
        console.log(chalk.green('body: ' + findNotes.title));
    } else {
        console.log(chalk.red.bold('Note not found!'))
    }
}

const addNotes = (title, body) => {
    const notes = loadNotes();
    
    //const duplicateNotes = notes.filter( (note) => note.title===title)
    const duplicateNote = notes.find( (note) => note.title===title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('New Note Added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }    
}

const loadNotes = () => {
    try{
        const dataJSON = fs.readFileSync('notes.json');
        const stringifyData = dataJSON.toString();
        return JSON.parse(stringifyData);
    } catch(e) {
        return []
    }
}

const saveNotes = (data) => {
    fs.writeFileSync('notes.json',JSON.stringify(data));
}

const removeNotes = (title) => {
    const existingNotes = loadNotes();

    const notesToKeep = existingNotes.filter( (note) => note.title !== title)

    saveNotes(notesToKeep);
    if(existingNotes.length !== notesToKeep.length){
        console.log(chalk.green.inverse('Notes Removed'));
    } else {
        console.log(chalk.red.inverse('No note found'));
    }
}

module.exports = {
    listNotes : listNotes,
    readNotes : readNotes, 
    addNotes : addNotes,
    removeNotes : removeNotes
};