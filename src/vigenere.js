function getKey(str, key) {
    key = key.split("");

    if (str.length == key.length) 
        return key.join("");
    else {
        let temp = key.length;
        for (let i = 0; i < (str.length-temp); i++)
                key.push(key[i % ((key).length)]);
    }
} 

function encryption(str, key) {
    let cipher_text = "";

    for (let i = 0; i < str.length; i++) {
        // Konversi Range 0-25
        let x = (str[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26;

        // Konversi ke alphabet
        x += 'A'.charCodeAt(0);

        cipher_text += String.fromCharCode(x);
    }

    console.log("Ciphertext : " + cipher_text);
}

function decryption(str, key) {
    let plain_text = "";

    for (let i = 0; i < str.length; i++) {
        // Konversi Range 0-25
        let x = (str[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;

        // Konversi ke alphabet
        x += 'A'.charCodeAt(0);

        plain_text += String.fromCharCode(x);
    }

    console.log("Plaintext : " + plain_text);
}

function toUpper(strtemp) {
    let str = (strtemp).split("");

    for (let i = 0; i < strtemp.length; i++)
        if (strtemp[i] == strtemp[i].toLowerCase())
            str[i] = strtemp[i].toUpperCase();
    
    strtemp = str.toString();
    return strtemp;
}


let str; // Input Text
let keyword; // Input Key
let key = getKey(str, keyword);
 
encryption(str, key); // Encryption Function
decryption(str, key); // Decryption Function