function rot13(str, shift) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (ch.toUpperCase(str[i])) {
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
let shift = 13; // Shift 13

rot13(str, shift); // Function ROT13