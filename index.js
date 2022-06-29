const binaryInput = document.getElementById("binaryCode");
const decimalSpan = document.getElementById("decimalCode");

function binaryToDecimal(binaryNumber) {
  let decimalNumber = 0;
  const binary = binaryNumber.toString();
  let exponent = 0;

  for (let i = binary.length - 1; i >= 0; i = i - 1) {
    decimalNumber = decimalNumber + Number(binary[i]) * Math.pow(2, exponent);
    exponent++;
  }

  return decimalNumber;
}

function isBinaryNumber(str) {
  let areThereWrongNumbers = true;

  for (let i = 0; i < str.length; i++) {
    if (Number(str[i]) !== 0 && Number(str[i]) !== 1) {
      areThereWrongNumbers = false;
    }
  }

  return areThereWrongNumbers;
}

function setErrorMessage(message) {
  const errorMessageContainer = document.getElementById("errorMessage");

  if (message === null) {
    errorMessageContainer.innerHTML = "";
  } else {
    errorMessageContainer.innerHTML = `<span class="errorMessage">${message}</span>`;
  }
}

binaryInput.addEventListener("input", (event) => {
  if (isBinaryNumber(event.target.value)) {
    decimalSpan.innerHTML = binaryToDecimal(event.target.value);
    setErrorMessage(null);
  } else {
    setErrorMessage("Invalid number!");
  }
});
