import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { initrepo } from "./controllers/init.js";
import { add } from "./controllers/add.js"; 

yargs(hideBin(process.argv))
    .command( //init repo
    'init',
     "intialize a new repository", 
     {}, 
     initrepo)

   .command(
    "add <file>",
    "Add a file to the repository",
    (yargs) => {
        return yargs.positional("file", {
            describe: "The file to add",
            type: "string",
        });
    },
    add
).argv;
