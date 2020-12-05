
const checkForSpam = function (message) {
    const checkFor = message.toLowerCase();
    console.log(checkFor.includes('sale') || checkFor.includes('spam'));
}

checkForSpam('Latest technology news'); 
checkForSpam('JavaScript weekly newsletter'); 
checkForSpam('Get best sale offers now!'); 
checkForSpam('[SPAM] How to earn fast money?'); 