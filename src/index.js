module.exports = function check(str, bracketsConfig) {

    let stack = [];
    let arrOpeningBrac = [];
    let arrClosingBrac = [];
    let arrSimilarBrac = [];
    let result = 1;
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (bracketsConfig[i][0] !== bracketsConfig[i][1]) {
            arrOpeningBrac.push(bracketsConfig[i][0]);
            arrClosingBrac.push(bracketsConfig[i][1]);
        }
        if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
            arrSimilarBrac.push(bracketsConfig[i][0]);
        }
    }


    let stringArray = str.split('');

    for (let i = 0; i < stringArray.length; i++) {
        let currentSymbol = stringArray[i];

        if (!stack.length) {
            for (let j = 0; j < arrOpeningBrac.length; j++) {
                if (currentSymbol === arrOpeningBrac[j]) {
                    stack.push(currentSymbol);
                }
            }
            for (let n = 0; n < arrSimilarBrac.length; n++) {
                if (currentSymbol === arrSimilarBrac[n]) {
                    stack.push(currentSymbol);
                }
            }
            for (let m = 0; m < arrClosingBrac.length; m++) {
                if (currentSymbol === arrClosingBrac[m]) {
                    result = false;
                }
            }
        }
        else if (stack.length) {
            for (let j = 0; j < arrOpeningBrac.length; j++) {
                if (stringArray[i] === arrOpeningBrac[j]) {
                    stack.push(currentSymbol);
                }
            }
            for (let n = 0; n < arrSimilarBrac.length; n++) {
                if (currentSymbol === arrSimilarBrac[n]) {
                    if (stack[stack.length - 1] === arrSimilarBrac[n]) {
                        stack.pop();

                    } else {
                        stack.push(currentSymbol);
                    }
                }
            }
            for (let m = 0; m < arrClosingBrac.length; m++) {

                if (currentSymbol === arrClosingBrac[m]) {
                    let a = stack.pop();
                    if (a !== arrOpeningBrac[m]) {
                        stack.push(a);
                        stack.push(arrOpeningBrac[m]);
                    }
                }
            }
        }
    }

    if (!stack.length) {
        if (!stack.length % 2) {
            let stack2 = [];
            for (let i = 0; i < stack.length; i++) {
                let currentSymbol = stack[i];

                for (let j = 0; j < arrSimilarBrac.length; j++) {
                    if (!stack2.length) {
                        stack2.push(currentSymbol);

                    } else if (stack2.length) {
                        let b = stack2.pop();

                        if (b !== currentSymbol) {
                            result = false;

                        }
                    }
                }
            }
        } else {
            result = false;

        }
    }

    if (stack.length) {
        result = false;
    }

    if (result === 1) {
        result = true;
    }

    return result;
}

