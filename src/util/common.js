const getRandomValue = (max, min = 0) => {
  let rand = min + Math.random() * ((max + 1) - min);
  return Math.floor(rand);
};

const getRandomElement = (arr) => {
  return arr[getRandomValue(arr.length - 1)];
};

const getPartialArray = (arr, minLength = 0, maxLength = arr.length, isUnique = true) => {
  const array = [];

  if (minLength > maxLength) {
    minLength = maxLength;
  }

  let length = getRandomValue(maxLength, minLength);

  if (!isUnique) {
    for (let i = 0; i < length; i++) {
      array.push(getRandomElement(arr));
    }
  } else {
    arr = Array.from(new Set(arr));

    if (maxLength > arr.length) {
      maxLength = arr.length;
    }

    if (minLength > maxLength) {
      minLength = maxLength;
    }

    length = getRandomValue(maxLength, minLength);
    let randomElement = 0;

    for (let i = 0; i < length; i++) {
      randomElement = getRandomElement(arr);
      if (!array.includes(randomElement)) {
        array.push(randomElement);
        i++;
      }
      i--;
    }
  }

  return array;
};

export {
  getRandomValue,
  getRandomElement,
  getPartialArray
};
