const customEmitter = require('./customEventEmitter');

function simulateUserLogin(userId) {
  const randomDelay = Math.random() * 1.9 + 0.1; // Random delay between 0.1 and 2 seconds
  setTimeout(() => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${timestamp}: USER_${userId} logged in`);
    customEmitter.emit('userLoggedIn', `USER_${userId}`);
    simulateUserLogout(userId);
  }, randomDelay * 1000);
}

function simulateUserLogout(userId) {
  const randomDelay = Math.random() * 1.9 + 0.1; // Random delay between 0.1 and 2 seconds
  setTimeout(() => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${timestamp}: USER_${userId} logged out`);
    customEmitter.emit('userLoggedOut', `USER_${userId}`);
    simulateUserLogin(userId);
  }, randomDelay * 1000);
}

customEmitter.on('userLoggedIn', (user) => {
  console.log(`Event: ${user} logged in`);
});

customEmitter.on('userLoggedOut', (user) => {
  console.log(`Event: ${user} logged out`);
});

for (let i = 1; i <= 5; i++) {
  simulateUserLogin(i);
}

console.log('Simulation started. Press Ctrl+C to exit.');
