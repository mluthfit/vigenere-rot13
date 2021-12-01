import ROT13 from './rot13.js';
import Vigenere from './vigenere.js';

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const text = document.querySelector('#input_text').value;
      if (text !== '')  {
        if (this.getAttribute('name') === 'vigenere') {
          const key = document.querySelector('#input_key').value
          if (key !== '') {
            if (this.getAttribute('id') === 'encryption') {
              generateResult(Vigenere.encryption(text, key));
            } else {
              generateResult(Vigenere.decryption(text, key));
            }
          }
        } else if (this.getAttribute('name') === 'rot13') {
          generateResult(ROT13.job(text));
        } else {
          const key = document.querySelector('#input_key').value
          if (key !== '') {
            if (this.getAttribute('id') === 'encryption') {
              const vigenere = Vigenere.encryption(text, key);
              generateResult(ROT13.job(vigenere));
            } else {
              const rot13 = ROT13.job(text);
              generateResult(Vigenere.decryption(rot13, key));
            }
          }
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