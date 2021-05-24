const fs = require('fs');
const chalk = require('chalk');

const getNotes = function (){
    return "Your notes...";
}

const addNotes = function(title, body){
    const notes = loadNotes();
    
    const duplicateNotes = notes.filter(function(note){
        return note.title===title;
    });

    if(duplicateNotes.length === 0){
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

const loadNotes = function(){
    try{
        const dataJSON = fs.readFileSync('notes.json');
        const stringifyData = dataJSON.toString();
        return JSON.parse(stringifyData);
    } catch(e) {
        return []
    }
}

const saveNotes = function(data){
    fs.writeFileSync('notes.json',JSON.stringify(data));
}

const removeNotes = function(title){
    const existingNotes = loadNotes();

    const notesToKeep = existingNotes.filter(function(note){
        return note.title !== title;
    })

    saveNotes(notesToKeep);
    if(existingNotes.length !== notesToKeep.length){
        console.log(chalk.green.inverse('Notes Removed'));
    } else {
        console.log(chalk.red.inverse('No note found'));
    }
}


module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    removeNotes : removeNotes
};