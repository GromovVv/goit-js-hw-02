
const checkForSpam = function (message) {
    const checkFor = message.toLowerCase();
    return (checkFor.includes('sale') || checkFor.includes('spam'));
}

console.log(checkForSpam('Latest technology news')); 

console.log(checkForSpam('JavaScript weekly newsletter')); 

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));