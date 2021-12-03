import ROT13 from './rot13.js';
import Vigenere from './vigenere.js';

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const textInput = document.querySelector('#input_text') || false;
      const keyInput = document.querySelector('#input_key') || false;
      const textValue = textInput ? textInput.value : '';
      const keyValue = keyInput ? keyInput.value : '';

      if (!textInput || !textValue) {
        clearResult();
        return;
      }

      if (this.getAttribute('name') === 'vigenere') {
        if (!keyInput || !keyValue || !isAllAlphabets(keyValue)) {
          clearResult();
          return;
        }

        if (this.getAttribute('id') === 'encryption') {
          generateResult(Vigenere.encryption(textInput.value, keyInput.value));
        } else {
          generateResult(Vigenere.decryption(textInput.value, keyInput.value));
        }
      } else if (this.getAttribute('name') === 'rot13') {
        generateResult(ROT13.job(textInput.value));
      } else {
        if (!keyInput || !keyValue || !isAllAlphabets(keyValue)) {
          clearResult();
          return;
        }

        if (this.getAttribute('id') === 'encryption') {
          const vigenere = Vigenere.encryption(textInput.value, keyInput.value);
          generateResult(ROT13.job(vigenere));
        } else {
          const rot13 = ROT13.job(textInput.value);
          generateResult(Vigenere.decryption(rot13, keyInput.value))
        }
      }
    });
  })
});

const generateResult = (value) => {
  const result = document.querySelector('.result');
  result.innerHTML = `
    <label for="input_result">Result : </label>
    <input type="text" id="input_result" value='${value}' disabled>
  `;
}

const isAllAlphabets = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (!checkAplhabet(str[i])) return false;
  }

  return true;
}

const checkAplhabet = (char) => {
  return (/[a-zA-Z]/).test(char);
}

const clearResult = () => {
  const result = document.querySelector('.result');
  result.innerHTML = ``;
}