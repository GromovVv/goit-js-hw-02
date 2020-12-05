
const formatString = (str) => {
    const arr1 = str.split(' ');
    const result = arr1.join(' ');
    result.length <= 40 ? console.log(result) : console.log(result.slice(0, 37) + '...');
}

formatString('Curabitur ligula sapien, tincidunt non.');
formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
formatString('Curabitur ligula sapien.');
formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.');


 // if (result.length <= 40){
    //     console.log(result);
    // } else {
    //     const newResult = result.slice(0, 37);
    //     console.log(newResult + '...');
    // }




