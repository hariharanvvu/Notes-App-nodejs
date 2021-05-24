const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
    command: 'list',
    describe: 'To list Notes',
    handler(){
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'To read a Notes',
    builder: {
        title : {
            describe: 'title field',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
})

yargs.command({
    command: 'add',
    describe: "Add a note",
    builder: {
        title : {
            describe: "Add a title",
            demandOption: true,
            type: 'string'
        },
        body : {
            describe: "Add a body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type: 'string'
        } 
    },
    handler(argv){
        notes.removeNotes(argv.title);
    }
})

yargs.parse();