// Create a private scope and expose only the helloSpeaker object.
((window) => {
  const speakWord = "Hello";

  const helloSpeaker = {};

  helloSpeaker.speak = (name) => {
    console.log(`${speakWord} ${name}`);
  };

  // Make the object available to script.js.
  window.helloSpeaker = helloSpeaker;
})(window);