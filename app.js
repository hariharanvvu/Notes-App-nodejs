const yargs = require('yargs');
const notes = require('./notes');

const msg = notes.getNotes();

yargs.command({
    command: 'add',
    describe: "Add a note",
    builder: {
        title : {
            describe: "Add a title",
            demandOptions: true,
            type: 'string'
        },
        body : {
            describe: "Add a body",
            demandOptions: true,
            type: 'string'
        }
    },
    handler : function(argv) {
        notes.addNotes(argv.title, argv.body);
    }
})

yargs.parse();
//console.log(yargs.argv);