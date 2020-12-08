
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let login = [];
let allLogins = [];

const isLoginValid = (login) => {
    if (login.length > 3 && login.length < 17) {
        return true; 
    } else {
        return false;
    };
}

const isLoginUnique = (allLogins, login) => {
    for (const oneLogin of allLogins) {

        if (allLogins.includes(login)) {
            return false;
        } else {
            return true;
        }
    }
}

const addLogin = (allLogins, login) => {

    if (isLoginValid === false) {
        
        return ('Ошибка! Логин должен быть от 4 до 16 символов');

    } else if (isLoginValid === true) {

        if (isLoginUnique === false){

            return ('Такой логин уже используется!');

        } else if (isLoginUnique === true) {

            allLogins.push(login);
            return ('Логин успешно добавлен!');
        }
    }

}

console.log(addLogin(logins, 'Ajax')); 
console.log(addLogin(logins, 'robotGoogles')); 
console.log(addLogin(logins, 'Zod')); 
console.log(addLogin(logins, 'jqueryisextremelyfast')); 


// console.log(isLoginUnique(allLogins, 'Qwerty123'));

// const isLoginUnique = (Logins, login) => {
//     if (Logins.includes(login)) {
//         return console.log('Такой логин уже используется!');
//     } 
// };

// const addLogin = function(Logins, login) {
//     if (isLoginValid && isLoginUnique) {
//         logins.push(login);
//         console.log('Логин успешно добавлен!');
//         return logins;
//     }
    
// };
  



//     login = prompt('Введите логин от 4 до 16 символов');

//     if (login === null) {
//     } else if (login.length < 4) {
//         alert ('Ваш логин слишком короткий');
//     } else if (login.length > 16) {
//         alert ('Ваш логин слишком длинный');
//     } else {
//     }

// return login;








// for (const oneLogin of allLogins) {
//     if (allLogins.includes(login)) {
//         return true;
//     } else {
//         return false;
//     }
// }
  // for (let i = 0; i < allLogins.length; i += 1) {
    //     if (allLogins.includes(login)) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }