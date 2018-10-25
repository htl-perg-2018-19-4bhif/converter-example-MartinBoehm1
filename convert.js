let wrongInput = false;
const arguments = process.argv;
let value;
let firstType;
let secondType;
if (arguments.length === 6) {
    value = arguments[2];
    value=parseFloat(value);
    if(isNaN(value)){
        wrongInput=true;
    }
    firstType = arguments[3];
    secondType = arguments[5];
    let overAllType;
    if ((arguments[4] === "to") && ((typeof(value)) === 'number') && ((typeof(firstType)) === 'string') && ((typeof(secondType)) === 'string')) {
        if (firstType === "m") {
            overAllType = "length";
        } else if (firstType === "dm") {
            value /= 10;
            overAllType = "length";
        } else if (firstType === "cm") {
            value /= 100;
            overAllType = "length";
        } else if (firstType === "mm") {
            value /= 1000;
            overAllType = "length";
        } else if (firstType === "km") {
            value *= 1000;
            overAllType = "length";
        } else if (firstType === "kg") {
            value *= 1000;
            overAllType = "weight";
        } else if (firstType === "dag") {
            value *= 10;
            overAllType = "weight";
        } else if (firstType === "g") {
            overAllType = "weight";
        } else {
            wrongInput = true;
        }
        if (!wrongInput) {
            if (overAllType == "length") {
                if (secondType === "m") {
                } else if (secondType === "dm") {
                    value *= 10;
                } else if (secondType === "cm") {
                    value *= 100;
                } else if (secondType === "mm") {
                    value *= 1000;
                } else if (secondType === "km") {
                    value /= 1000;
                } else {
                    wrongInput = true;
                }
            } else {
                if (secondType === "g") {
                } else if (secondType === "dag") {
                    value /= 10;
                } else if (secondType === "kg") {
                    value /= 1000;
                } else {
                    wrongInput = true;
                }
            }
        }
    } else {
        wrongInput = true;
    }
} else {
    wrongInput = true;
}

if (wrongInput) {
    console.log("Invalid parameters");
} else {
    value=value.toString();
    console.log(arguments[2] + " " + arguments[3] + " are " + value + " " + arguments[5]);
}


