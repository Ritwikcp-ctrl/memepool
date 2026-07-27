function alertEngine(trade,threshold) {
    if(!trade) {
        console.log("Trade is required");
        return ;
    }

    const price = parseFloat(trade.p) ;
    if(price > threshold) {
        console.log(`ALWRT :  price crossed ${threshold} -> current : ${price}`);
    }
}

export default alertEngine;