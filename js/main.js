(function(){
    'use strict';


    var price = document.getElementById('price');
    var num = document.getElementById('num');
    var unit = document.getElementById('unit');
    var btn =document.getElementById('btn');
    var result = document.getElementById('result');
    var reset = document.getElementById('reset');

    btn.addEventListener('click', function(){
        var payLess;
        var short;
        var payMore;
        var over;
        var str;

        // payLess = Math.floor(1000 / 3 / 100) * 100;
        payLess = Math.floor(price.value  / num.value / unit.value) * unit.value;
        //short = 1000 - (300 * 3);
        short = price.value - (payLess * num.value);
        //payMore = Math.ceil(1000 / 3/ 100) * 100;
        payMore = Math.ceil(price.value / num.value / unit.value) * unit.value;
        //over = Math.abs(1000 - (400 * 3 ));
        over = Math.abs(price.value - (payMore * num.value));

        str = "If each person pay " + payLess+"yen, " + short + "yen is short. "
        + "if you pay "+ payMore +"yen, "+ over +"yen is over.";
        result.textContent = str;
    });
})();