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

let listCommands = [];
function onDataReceived(text) {
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
    listCommands[listCommands.length - 1] = taskNumber;
  } else {
    listCommands[taskNumber - 1] = text;
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
  listCommands.push(secondPart);
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
  for (let i = 0; i < listArray.length; i++) {
    console.log(j++ + "-" + [] + listArray[i]);
  }
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("Hasan Awwad");
