
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
    if (isLoginValid(login) === false) {
        return ('Ошибка! Логин должен быть от 4 до 16 символов');
    } else if (isLoginValid(login) === true) {
        if (isLoginUnique(allLogins, login) === false){
            return ('Такой логин уже используется!');
        } else if (isLoginUnique(allLogins, login) === true) {
            allLogins.push(login);
            return ('Логин успешно добавлен!');
        }
    }
}

console.log(addLogin(logins, 'Ajax')); 
console.log(addLogin(logins, 'robotGoogles')); 
console.log(addLogin(logins, 'Zod')); 
console.log(addLogin(logins, 'jqueryisextremelyfast')); 

