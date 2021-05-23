const fs = require('fs');

const getNotes = function (){
    return "Your notes...";
}

const addNotes = function(title, body){
    const dataBuffer = loadNotes();
    
    dataBuffer.push({
        title: title,
        body: body
    })

    saveNotes(dataBuffer);
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
    console.log('Successfully Saved!');
}

module.exports = {
    getNotes : getNotes,
    addNotes : addNotes
};