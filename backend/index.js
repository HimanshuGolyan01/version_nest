import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { initrepo } from "./controllers/init.js"; // done basic implementation, needs improvement
import { addrepo } from "./controllers/add.js";  // done basic implementation, needs improvement
import {commitrepo} from "./controllers/commit.js";
import {pushrepo} from "./controllers/push.js";
import {pullrepo} from "./controllers/pull.js";
import {revertrepo} from "./controllers/revert.js";

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
    (args) => {addrepo(args.file);
    })

    .command(
    "commit <message>",
    "Commit the staged files",
    (yargs) => {
        return yargs.positional("message", {
            describe: "The commit message",
            type: "string",
        });
    },
    (args) => {commitrepo(args.message);
    })

    .command("push","push commit to s3", {}, pushrepo)
    .command("pull","pull commit from s3", {}, pullrepo)
    
    .command(
        "revert<commitId>",
        "Revert to a specific commit",
        (yargs) => {
            yars.positional("commitId", {
                describe: "The commit ID to revert to",
                type: "string",
            });
        },
        revertrepo
    ).argv;

