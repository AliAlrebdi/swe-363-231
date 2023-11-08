const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Predefined questions and answers
const chatResponses = {
  'hello': 'Hello! How can I help you?',
  'how are you': 'I am just a computer program, so I do not have feelings.',
  'what is your name': 'I am a chatbot.',
  'exit': 'Goodbye! Have a great day!',
  'quit': 'Goodbye! Have a great day!',
  'what is the best uni?': 'without thinking its KFUPM!',
  'i am lonely': 'not sure what to do with that'
};

// Function to handle user input
function handleUserInput(input) {
  input = input.toLowerCase();
  if (chatResponses[input]) {
    console.log(chatResponses[input]);
  } else {
    console.log("This seems interesting but unfortunately i can't respond to it, so please feel free to ask another question!");
  }
  promptUser();
}

// Function to prompt the user for input
function promptUser() {
  rl.question('You: ', (answer) => {
    if (answer.toLowerCase() === 'exit' || answer.toLowerCase() === 'quit') {
      console.log(chatResponses['exit']);
      rl.close();
    } else {
      handleUserInput(answer);
    }
  });
}

// Start the conversation
console.log('Chatbot: Hello! How can I help you? (Type "exit" to quit)');
promptUser();
