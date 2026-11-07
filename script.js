// Keep the main program's variables inside an IIFE.
(() => {
  const names = [
    "Yaakov",
    "John",
    "Jen",
    "Jason",
    "Paul",
    "Frank",
    "Larry",
    "Paula",
    "Laura",
    "Jim"
  ];

  // Say goodbye to names beginning with J/j; say hello to all others.
  for (const name of names) {
    const firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter === "j") {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})();