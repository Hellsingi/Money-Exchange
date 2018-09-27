// PLEASE DON'T change function name
// Your code goes here!
module.exports = function makeExchange(currency) {
    let H = 0, Q= 0, D=0, N=0, P=0; 
    if(currency>=10000)
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if(currency<1) return {}; 
    if(currency>=50)
        {
        for(H=0;currency>=50;H++)
            currency-=50;
        }
    if(currency>=25)
        {
        for(Q=0;currency>=25;Q++)
            currency-=25;
        }
    if(currency>=10)
        {
        for(D=0;currency>=10;D++)
            currency-=10;
        }
    if(currency>=5)
        {
        for(N=0;currency>=5;N++)
            currency-=5;
        }
    if(currency>=1)
        {
        for(P=0;currency>=1;P++)
            currency-=1;
        }
    let cashCoin = {"H": H,"Q": Q,"D": D,"N": N,"P": P,}
    for(i in cashCoin)
        if(cashCoin[i]==0)
            delete cashCoin[i];
    return cashCoin;
     // Return an object containing the minimum number of coins needed to make change
}
