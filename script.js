const container = $('.container');
const euro = $('input');
const pln = $('.pln');
const dollar = $('.dollar');
const pound = $('.pound');
const score = $('.score');
let finalScore;


fetch('http://data.fixer.io/api/latest?access_key=f17b0292e60376986d28d653209219fb')
.then(result=>{
    console.log(result);
    return result.json();
})
.then(data=>{
    
    const plnRate = data.rates.PLN;
    const dolRate = data.rates.USD;
    const pouRate = data.rates.GBP;
    console.log(data)
    console.log(data.rates.PLN);
    console.log(data.rates.GBP);
    pln.on('click',function(){
        finalScore = Number(euro.val()).toPrecision(2) * Number(plnRate).toPrecision(4);
        if(isNaN(finalScore)){
            score.html('Please insert numbers');
        }else{
            score.html(finalScore.toFixed(2));
        }
        
    })
    dollar.on('click',function(){
        finalScore = Number(euro.val()).toPrecision(2) * Number(dolRate).toPrecision(4);
        if(isNaN(finalScore)){
            score.html('Please insert numbers');
        }else{
            score.html(finalScore.toFixed(2));
        }
    })
    pound.on('click',function(){
        finalScore = Number(euro.val()).toPrecision(2) * Number(pouRate).toPrecision(4);
        if(isNaN(finalScore)){
            score.html('Please insert numbers');
        }else{
            score.html(finalScore.toFixed(2));
        }
    })

}).catch(error=>console.log(error));
