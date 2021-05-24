const yargs = require('yargs');
const notes = require('./notes');

const msg = notes.getNotes();

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
    handler : function(argv) {
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
    handler: function (argv){
        notes.removeNotes(argv.title);
    }
})

yargs.parse();
//console.log(yargs.argv);