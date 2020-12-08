const calculateEngravingPrice = (message, pricePerWord) => {
    const engravingPrice = message.split(' ').length;
    const result = engravingPrice * pricePerWord;
    console.log(result);
};

calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10);
calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20);
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40);
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20);
