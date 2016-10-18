exports.TinFoil = (() => {
  // Private
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetCaps = alphabet.toUpperCase();
  const numbers = '0123456789';
  const symbols = '!@#$%^&*(){}?[]<>,.';

  function buildSelectionArray(alpha, caps, nums, syms) {
    let selectionArray = [];

    // Split our strings into single character arrays
    const alphabetArray = alpha.split('');
    const capsArray = caps.split('');
    const numArray = nums.split('');

    // Concat chains all the arrays together
    selectionArray = selectionArray.concat(alphabetArray, capsArray, numArray);

    // If we have symbols passed in go ahead and split and add to the selectionArray
    if (syms) {
      const symbolArray = syms.split('');
      selectionArray = selectionArray.concat(symbolArray);
    }

    return selectionArray;
  }

  function getRandomArrayIndex(min = 0, max) {
    return Math.floor(Math.random() * ((max - (min + 1)) + min));
  }

  function generateRandomPassword(length = 8, requireSpecial = 'true') {
    // Build selection array
    let selectionArray = [];
    if (requireSpecial === 'true') {
      selectionArray =
        buildSelectionArray(alphabet, alphabetCaps, numbers, symbols);
    } else {
      selectionArray =
        buildSelectionArray(alphabet, alphabetCaps, numbers);
    }

    // Since arrays start at the 0th item remove one from the total length
    // so we don't encounter array out of bounds errors
    const maxIndex = selectionArray.length - 1;
    const passwordArray = [];

    // Select an item from our selection array at a random index and push it
    // into our passwordArray
    for (let i = 0; i < length; i += 1) {
      const selectionIndex = getRandomArrayIndex(0, maxIndex);
      passwordArray.push(selectionArray[selectionIndex]);
    }

    // Convert our array into a string
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
