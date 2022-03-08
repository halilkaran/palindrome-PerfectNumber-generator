let arr = [];
let arr2 = [];
let limit;
let limitTop;

//?? BUTTON LIST PALINDROME
document.querySelector(".palindrome").addEventListener("click", () => {
   
  limitTop = document.querySelector(".limitTop").value ?? 0;

  limit = document.querySelector(".limit").value ?? 0;
console.log(limitTop,limit);
  palindrome();
  if (limitTop && limit) {
    printText(arr2);
  } else {
    printText(arr);
  }
console.log(arr, arr2);
  arr = [];
  arr2 = [];
});

//? PRINT
const text = document.querySelector(".textPoli");
function printText(arr) {
  text.innerHTML = "";
  arr.forEach((e) => {
    text.innerHTML += `<h6>${e}</h6>`;
  });
}

//? FIND PALINDROME NUMBER
function palindrome() {
  function createPalindrome(input, b, isOdd) {
    let n = input;
    let palin = input;

    if (isOdd == 1) n = parseInt(n / b, 10);

    while (n > 0) {
      palin = palin * b + (n % b);
      n = parseInt(n / b, 10);
    }
    return palin;
  }

  function generatePalindromes(n) {
    let number;

    for (let j = 0; j < 2; j++) {
      let i = 1;
      while ((number = createPalindrome(i, 10, j % 2)) < n) {
        arr.push(number);
        i++;
      }
    }
    return arr;
  }
  //?? LIMIT TO NUMBER
  let limit1;
  limitTop = Number(document.querySelector(".limitTop").value);
    limit =Number( document.querySelector(".limit").value);
    console.log(limit, limitTop);
  if (limitTop > limit) {
    limit1 = limitTop;
  } else {
    limit1 = limit;
  }
  let n = limit1;
  //? sort the number
  let palin = generatePalindromes(n).sort(function (a, b) {
    return a - b;
  });

  //? filter to number
  if (limitTop && limit) {
    arr2 = palin.filter((e) => e > limit);
  }
}

//?? PERFECT NUMBER  ??////
function findPerfectNumbers(upperLimit, currentTry = 2) {
  let perfectNumbers = [];
  let divisor;
  let sum;

  if (typeof upperLimit !== "number" || isNaN(upperLimit) || upperLimit < 2) {
    throw new TypeError(
      `First parameter is expected to a ` +
        `number larger then 1 which is not NaN.`
    );
  }

  while (currentTry <= upperLimit) {
    // <------- Start outer loop
    divisor = 2;
    sum = 0;

    while (currentTry >= divisor) {
      // <------- Start inner loop
      let fraction = currentTry / divisor;
      let leftOver = currentTry % divisor;

      if (leftOver === 0) {
        sum += fraction;
      }

      divisor++;
    } // <-------- End inner loop

    if (sum === currentTry) {
      perfectNumbers.push(currentTry);
    }

    currentTry++;
  } // <-------- End outer loop

  return perfectNumbers;
}
document.querySelector(".Perfect").addEventListener("click", () => {

  const limitTop1 = Number(document.querySelector(".limitTop").value);
  const limit1 = Number(document.querySelector(".limit").value);
  
  let arr11 = findPerfectNumbers(limitTop1, limit1);
  const text1 = document.querySelector(".perfect");
  text1.innerHTML = "";
  arr11.forEach((e) => {
    text1.innerHTML += `<h6>${e}</h6>`;
  });
});
