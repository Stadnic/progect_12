"use strict"

if ( 4 == 9 ) {
console.log('Ok!');
}
else {
    console.log ('Eror');
}

/*const num = 49;
if (num <49) {
    console.log ('Eror');
}else if (num > 100){
    console.log ('Много');  
}else {
    console.log('Ок!');
}
( num === 50) ?  console.log('Ок!') : console.log ('Eror');*/

const num = '50';
switch (num){
    case '49':
        console.log('Неверно');
        break;
    case '100':
        console.log('Неверно');
        break;
    case '50':
            console.log('Верно');
            break;   
    default:
        console.log('Не сегодня!');
        break;   
}
