function rot13(str) {
    let result = "";
    let shift = 13; // Shift 13

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (ch == ch.toUpperCase(str[i])) {
            let chTemp = String.fromCharCode((ch.charCodeAt(0) + shift-65) % 26 + 65);
            result += chTemp;
        } else {
            let chTemp = String.fromCharCode((ch.charCodeAt(0) + shift-97) % 26 + 97);
            result += chTemp;
        }
    }

    console.log("Result : " + result);
}

let str; // Input Text

rot13(str); // Function ROT13