(function (window) {
  var names = ["Ahmad", "Ali", "Usman", "Furqan", "Abdullah", "Waleed Chattha", "Uair", "Zohaib", "Umar", "Hassan"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);

