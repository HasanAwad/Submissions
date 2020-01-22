/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

function get_Database_Name() {
  let args = process.argv.slice(2);
  if (args == "") {
    return "database.json";
  } else {
    return args.toString();
  }
}
/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */

let listCommands = readFile();
function onDataReceived(text) {
  //listCommands = readFile()
  let finalText = text
    .trim()
    .replace("\n", "")
    .split(" ");

  if (text === "quit\n" || text === "exit\n") {
    quit();
  } else if (finalText[0] === "hello") {
    if (finalText.length > 1) {
      hello(finalText[1]);
    } else {
      console.log(finalText[0] + "!");
    }
  } else if (text === "help\n") {
    help();
  } else if (text === "list\n") {
    list(listCommands);
  } else if (finalText[0] === "add") {
    if (finalText.length > 1) {
      add(finalText.slice(1, finalText.length).join(" "));
    } else {
      console.log("ERROR");
    }
  } else if (finalText[0] === "remove") {
    if (finalText.length > 1) {
      remove(finalText[1]);
    } else {
      remove(false);
    }
  } else if (finalText[0] === "edit") {
    if (finalText.length > 1) {
      if (parseInt(finalText[1])) {
        edit(finalText[1], finalText.slice(2).join(" "));
      } else {
        edit(0, finalText[1]);
      }
    } else {
      console.log("error");
    }
  } else if (finalText[0] === "check") {
    check(finalText[1]);
  } else if (finalText[0] === "uncheck") {
    uncheck(finalText[1]);
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

function edit(taskNumber, text) {
  if (taskNumber > listCommands.length || taskNumber < 1) {
    console.log("The number of the task you entered does not exist");
  } else if (taskNumber === 0) {
    listCommands[listCommands.length - 1].tasks = text;
  } else {
    listCommands[taskNumber - 1].tasks = text;
  }
}

function remove(number) {
  if (number > listCommands.length || number < 1) {
    console.log("number does not exist");
  } else {
    if (number == false) {
      listCommands.splice(listCommands.length--, 1);
      console.log("you are here");
    } else {
      listCommands.splice(number - 1, 1);
    }
  }
}

function add(secondPart) {
  //listCommands.push(secondPart);

  let objects_tasks = {
    tasks: secondPart,
    check: false
  };
  listCommands.push(objects_tasks);

  //writeToFile()
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(name) {
  console.log("hello " + name + "!");
}
/**
 * lists all the possible commands
 *
 * @returns {void}
 */

function help() {
  console.log("commands:");
  console.log(
    "1# hello: say hello! \n2# hello name: say hello name! \n3# list: show your tasks list \n4# add task: add task to list \n5# remove: remove last task from list \n6# remove x: remove task number x \n7# help: shaw all commands  \n8# quit or exit: exit the application"
  );
}

function list(listArray) {
  let j = 1;

  for (let i = 0; i < listCommands.length; i++) {
    let check_value = "";
    if (listCommands[i].check) {
      check_value = "✓";
    } else {
      check_value = "x";
    }
    console.log(j++ + "-" + `[${check_value}]` + listCommands[i].tasks);
  }
}

function check(taskNumber) {
  if (parseInt(taskNumber) <= listCommands.length) {
    listCommands[taskNumber - 1].check = true;
  } else {
    console.log("Error");
  }
}

function uncheck(taskNumber) {
  if (parseInt(taskNumber) <= listCommands.length) {
    listCommands[taskNumber - 1].check = false;
  } else {
    console.log("Error");
  }
}

function readFile() {
  "use strict";

  var fs = require("fs");
  var obj = JSON.parse(fs.readFileSync("database.json", "utf8"));

  return obj;
}

function writeToFile(commadns_list) {
  "use strict";

  console.log("Starting writeToFile");

  const fs = require("fs");

  let data = JSON.stringify(commadns_list, null, 2);

  fs.writeFileSync("database.json", data, err => {
    if (err) throw err;
    console.log("Done with writeToFile... Returning true");
  });
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quiting now... Bye");
  writeToFile(listCommands);
  process.exit();
}

// The following line starts the application
startApp("Hasan Awwad");
