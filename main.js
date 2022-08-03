
let fullName = document.querySelector('#fullName');
let almostThere = document.querySelector('.almost');
let result = document.querySelectorAll('.result');
let userName = [];

const userNameGenerate = () => {

    let nameLength = fullName.value.split(' ').length;

    if (fullName.value.split(' ')[1] === undefined) {

        almostThere.innerHTML = 'Quase lá ...';      

    } else {

        almostThere.innerHTML = '';
        // ----------- userName 1 -----------
        userName[0] = fullName.value.split(' ')[0];

        for (let i = 1; i < nameLength; i++) {
            userName[0] += fullName.value.trim().split(' ')[i][0];
        }

        // ----------- userName 2 -----------
        userName[1] = fullName.value.split(' ')[0][0];

        for (let i = 1; i < nameLength - 1; i++) {
            userName[1] += fullName.value.trim().split(' ')[i][0];
        }

        userName[1] += fullName.value.split(' ')[nameLength - 1];

        // ----------- userName 3 -----------
        userName[2] = fullName.value.split(' ')[nameLength-1].substring(0, 3) + "_" +
                      fullName.value.split(' ')[0].substring(0, 3);

        // ----------- userName 4 -----------
        userName[3] = fullName.value.split(' ')[0].substring(0, 3) + "_" +
                      fullName.value.split(' ')[nameLength-1].substring(0, 3);

        // ----------- userName 5 -----------
        userName[4] = fullName.value.split(' ')[0] + "." +
                      fullName.value.split(' ')[nameLength-1];

        // ----------- userName 6 -----------
        userName[5] = fullName.value.split(' ')[nameLength-1] + "." +
                      fullName.value.split(' ')[0];

        // ----------- userName 7 -----------
        userName[6] = fullName.value.split(' ')[0].substring(0, 5) +
                      fullName.value.split(' ')[nameLength-1].substring(0, 5);

        // ----------- userName 8 -----------
        userName[7] = fullName.value.split(' ')[nameLength-1].substring(0, 5) +
                      fullName.value.split(' ')[0].substring(0, 5);

        // ----------- userName 9 -----------
        userName[8] = fullName.value.split(' ')[0];

        for (let i = 0; i < 3; i++) {
            let p = fullName.value.charAt(Math.floor(Math.random() * fullName.value.length))
                if (p !== ' ') userName[8] += p;
        }

        // ----------- userName 10 -----------
        userName[9] = '';

        for (let i = 0; i < 3; i++) {
            let p = fullName.value.charAt(Math.floor(Math.random() * fullName.value.length))
                if (p !== ' ') userName[9] += p;
        }

        userName[9] += fullName.value.split(' ')[0];

        // ----------- screen render -----------
        for (let j = 0; j < result.length; j++) {
            result[j].innerHTML = `${j+1} - ${userName[j]}`;            
        }
    }
}

fullName.addEventListener('input', userNameGenerate);