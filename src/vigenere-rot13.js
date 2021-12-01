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
    let cipher_text1 = "";
    let cipher_text2 = "";
    let shift = 13; // Shift 13

    for (let i = 0; i < str.length; i++) {
        // Konversi Range 0-25
        let x = (str[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26;

        // Konversi ke alphabet
        x += 'A'.charCodeAt(0);

        cipher_text1 += String.fromCharCode(x);
    }

    for (let i = 0; i < cipher_text1.length; i++) {
        let ch = cipher_text1[i];

        if (ch == ch.toUpperCase(cipher_text1[i])) {
            let chTemp = String.fromCharCode((ch.charCodeAt(0) + shift-65) % 26 + 65);
            cipher_text2 += chTemp;
        } else {
            let chTemp = String.fromCharCode((ch.charCodeAt(0) + shift-97) % 26 + 97);
            cipher_text2 += chTemp;
        }
    }

    console.log("Ciphertext : " + cipher_text2);
}

function decryption(str, key) {
    let plain_text1 = "";
    let plain_text2 = "";
    let shift = 13; // Shift 13

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (ch == ch.toUpperCase(str[i])) {
            let chTemp = String.fromCharCode((ch.charCodeAt(0) + shift-65) % 26 + 65);
            plain_text1 += chTemp;
        } else {
            let chTemp = String.fromCharCode((ch.charCodeAt(0) + shift-97) % 26 + 97);
            plain_text1 += chTemp;
        }
    }

    for (let i = 0; i < plain_text1.length; i++) {
        // Konversi Range 0-25
        let x = (plain_text1[i].charCodeAt(0) - key[i].charCodeAt(0) + 26) % 26;

        // Konversi ke alphabet
        x += 'A'.charCodeAt(0);

        plain_text2 += String.fromCharCode(x);
    }

    console.log("Plaintext : " + plain_text2);
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