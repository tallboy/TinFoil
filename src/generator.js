exports.Generator = (() => {
  // Private
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetCaps = alphabet.toUpperCase();
  const numbers = '0123456789';
  const symbols = '!@#$%^&*(){}?[]<>,.';

  function buildSelectionArray(withSpecial) {
    let selectionArray = [];
    const alphabetArray = alphabet.split('');
    const capsArray = alphabetCaps.split('');
    const numArray = numbers.split('');
    selectionArray = selectionArray.concat(alphabetArray, capsArray, numArray);

    if (withSpecial) {
      const symbolArray = symbols.split('');
      selectionArray = selectionArray.concat(symbolArray);
    }

    return selectionArray;
  }

  function getRandomArrayIndex(min = 0, max) {
    return Math.floor(Math.random() * ((max - (min + 1)) + min));
  }

  function generateRandomPassword(length = 8, requireSpecial = true) {
    // Build selection array
    const selectionArray = buildSelectionArray(requireSpecial);
    const maxIndex = selectionArray.length - 1;
    const passwordArray = [];

    for (let i = 0; i < length; i += 1) {
      const selectionIndex = getRandomArrayIndex(0, maxIndex);
      passwordArray.push(selectionArray[selectionIndex]);
    }

    return passwordArray.join('');
  }

  // Public
  return {
    generateRandomPassword: (length, requireSpecial) =>
      generateRandomPassword(length, requireSpecial),
    buildSelectionArray: withSpecial => buildSelectionArray(withSpecial),
    getRandomArrayIndex: (mix, max) => getRandomArrayIndex(mix, max),
  };
})();
