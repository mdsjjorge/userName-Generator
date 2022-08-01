
let fullName = document.querySelector('#fullName');
let result1 = document.querySelector('.result1');
let result2 = document.querySelector('.result2');
let result3 = document.querySelector('.result3');
let result4 = document.querySelector('.result4');
let result5 = document.querySelector('.result5');
let result6 = document.querySelector('.result6');
let result7 = document.querySelector('.result7');
let result8 = document.querySelector('.result8');

const userNameGenerate = () => {

    let nameLength = fullName.value.split(' ').length

    let userName1;
    let userName2;
    let userName3;
    let userName4;
    let userName5;
    let userName6;
    let userName7;
    let userName8;
    
    if (fullName.value.split(' ')[1] === undefined ) {
        console.log("Por gentileza, coloque o nome completo.");
    } else {

        // ----------- userName 1 -----------
        userName1 = fullName.value.split(' ')[0];

        for (let i = 1; i < nameLength; i++) {            
            userName1 += fullName.value.split(' ')[i][0]; 
        }

        // ----------- userName 2 -----------
        userName2 = fullName.value.split(' ')[0][0];

        for (let i = 1; i < nameLength - 1; i++) {            
            userName2 += fullName.value.split(' ')[i][0]; 
        }
        userName2 += fullName.value.split(' ')[nameLength - 1];

        // ----------- userName 3 -----------
        userName3 = fullName.value.split(' ')[1].substring(0,3) + "_" +
                    fullName.value.split(' ')[0].substring(0,3);

        // ----------- userName 4 -----------
        userName4 = fullName.value.split(' ')[0].substring(0,3) + "_" +
                    fullName.value.split(' ')[1].substring(0,3);

        // ----------- userName 5 -----------
        userName5 = fullName.value.split(' ')[0] + "." +
                    fullName.value.split(' ')[1];

        // ----------- userName 6 -----------
        userName6 = fullName.value.split(' ')[1] + "." +
                    fullName.value.split(' ')[0];

        // ----------- userName 7 -----------
        userName7 = fullName.value.split(' ')[0].substring(0,5) + 
                    fullName.value.split(' ')[1].substring(0,5);

        // ----------- userName 8 -----------
        userName8 = fullName.value.split(' ')[1].substring(0,5) + 
                    fullName.value.split(' ')[0].substring(0,5);

        result1.innerHTML = `1 - ${userName1}`
        result2.innerHTML = `2 - ${userName2}`
        result3.innerHTML = `3 - ${userName3}`
        result4.innerHTML = `4 - ${userName4}`
        result5.innerHTML = `5 - ${userName5}`
        result6.innerHTML = `6 - ${userName6}`
        result7.innerHTML = `7 - ${userName7}`
        result8.innerHTML = `8 - ${userName8}`
    }
}
