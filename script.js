let number = +prompt('Son kriting')
while (isNaN(number) ||  number == '') {
    number = +prompt('Noto\'g\'ri kritdingiz, sonni boshidan kriting')
}
let degree = +prompt('Sonni darajasini kriting')
while (isNaN(degree) ||  degree == '') {
    degree = +prompt('Noto\'g\'ri kritdingiz, sonni boshidan kriting')
}


let result = 1;
for (let i = 0; i < degree; i++) {
    result = result * number
}
console.log(result);


