function firstWord(s) {
  // Trim leading spaces first to handle strings like " Hello World"
  s = s.trimStart();

  // Find index of first space
  const spaceIndex = s.indexOf(' ');

  // If no space found, return the whole string
  if (spaceIndex === -1) {
    return s;
  }

  // Otherwise return substring up to first space
  return s.substring(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
