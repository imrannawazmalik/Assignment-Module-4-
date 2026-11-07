// Create a private scope and expose only the byeSpeaker object.
((window) => {
  const speakWord = "Good Bye";

  const byeSpeaker = {};

  byeSpeaker.speak = (name) => {
    console.log(`${speakWord} ${name}`);
  };

  // Make the object available to script.js.
  window.byeSpeaker = byeSpeaker;
})(window);