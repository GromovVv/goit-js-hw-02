const calculateEngravingPrice = (message, pricePerWord) => {
    const EngravingPrice = message.split(' ').length;
    const result = EngravingPrice * pricePerWord;
    console.log(result);
};

calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10);
calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20);
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40);
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20);
