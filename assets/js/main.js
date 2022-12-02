const form = document.getElementById('password');
const characterAmount = document.getElementById('length');
const includeUppercase = document.getElementById('uppercase');
const includeLowercase = document.getElementById('lowercase');
const includeNumbers = document.getElementById('numbers');
const includeSymbols = document.getElementById('symbols');
const passwordOutput = document.getElementById('passwordOutput');

const lowercaseCodeLoop = loopCharacterCodes(97, 122);
const uppercaseCodeLoop = loopCharacterCodes(65, 90);
const numbersCodeLoop = loopCharacterCodes(48, 57);
const symbolsCodeLoop = loopCharacterCodes(33, 47).concat(loopCharacterCodes(58, 64)).concat(loopCharacterCodes(65, 64)).concat(loopCharacterCodes(91, 126));

// Submit Event Listener//
form.addEventListener('submit', e => {
    e.preventDefault();
    const passwordLength = characterAmount.value 
    const addUppercase = includeUppercase.checked 
    const addLowercase = includeLowercase.checked 
    const addNumbers = includeNumbers.checked
    const addSymbols = includeSymbols.checked
    const passwordResult = generatePassword(passwordLength, addUppercase, addLowercase, addNumbers, addSymbols)
    passwordOutput.innerText = passwordResult
    console.log(passwordResult)
});

// PasswordResult Function //
function generatePassword(passwordLength, addUppercase, addLowercase, addNumbers, addSymbols) {
    let characterCodes = lowercaseCodeLoop
    if (addUppercase) characterCodes = characterCodes.concat(uppercaseCodeLoop)
    if (addNumbers) characterCodes = characterCodes.concat(numbersCodeLoop)
    if (addSymbols) characterCodes = characterCodes.concat(symbolsCodeLoop)
    
    const createdPassword = []
    for (let i = 0; i < passwordLength; i++) {
        const character = characterCodes[Math.floor(Math.random() * characterCodes.length)]
        createdPassword.push(String.fromCharCode(character))
    }
    return createdPassword.join('')

};

// Array to loop through Character Codes // 
function loopCharacterCodes(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
};
