module.exports = function toReadable(number) {
    const primeNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const primeDecimalNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decimalNumbers = [, , 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';

    if (number.toString().length === 1) return primeNumbers[number];

    if (number.toString().length === 2) {
        if (+number.toString().split('')[0] === 1) return primeDecimalNumbers[number - 10];
        return decimalNumbers[+number.toString().split('')[0]] + (+number.toString().split('')[1] !== 0 ?
            ' ' + primeNumbers[+number.toString().split('')[1]] : '')
    }

    if (number.toString().length === 3) {
        if (+number.toString().split('')[1] === 1) {
            return primeNumbers[number.toString().split('')[0]] +
                ' ' + hundred + ' ' +
                primeDecimalNumbers[number.toString().split('')[2]];
        } else {
            if (+number.toString().split('')[1] === 0) {
                return primeNumbers[number.toString().split('')[0]] +
                    ' ' + hundred +
                    (+number.toString().split('')[2] !== 0 ?
                        ' ' + primeNumbers[number.toString().split('')[2]] : '');
            }
        }
        return primeNumbers[+number.toString().split('')[0]] +
            ' ' + hundred + ' ' +
            decimalNumbers[+number.toString().split('')[1]] +
            (+number.toString().split('')[2] !== 0 ?
                ' ' + primeNumbers[number.toString().split('')[2]] : '');

    }

}