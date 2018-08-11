(function(){
    'use strict';


    var price = document.getElementById('price');
    var num = document.getElementById('num');
    var unit = document.getElementById('unit');
    var btn =document.getElementById('btn');
    var result = document.getElementById('result');
    var reset = document.getElementById('reset');


    function checkInput(){
    //    ^[1-9][0-9]*$
        if (
            price.value.match(/^[1-9][0-9]*$/) !== null &&
            num.value.match(/^[1-9][0-9]*$/) !== null
        ){
            btn.classList.remove('disabled');
        }else{
            btn.classList.add('disabled');
        }
    }

    btn.addEventListener('click', function(){
        var payLess;
        var short;
        var payMore;
        var over;
        var str;

            if(this.classList.contains('disabled') === true){
            return;
            }
        // payLess = Math.floor(1000 / 3 / 100) * 100;
        payLess = Math.floor(price.value  / num.value / unit.value) * unit.value;
        //short = 1000 - (300 * 3);
        short = price.value - (payLess * num.value);
        //payMore = Math.ceil(1000 / 3/ 100) * 100;
        payMore = Math.ceil(price.value / num.value / unit.value) * unit.value;
        //over = Math.abs(1000 - (400 * 3 ));
        over = Math.abs(price.value - (payMore * num.value));

        if(over === 0 && short === 0 ){
            str = "each person pay " + (price.value / num.value) + "yen.";
        }else{
            str = "If each person pay " + payLess+"yen, " + short + "yen is short. "
            + "if you pay "+ payMore +"yen, "+ over +"yen is over.";
        };
        result.textContent = str;
        reset.classList.remove('hidden');
    });

    price.addEventListener('keyup', checkInput);
    num.addEventListener('keyup', checkInput);

    reset.addEventListener('click', function(){
        result.textContent = "ここに結果を表示します";
        price.value = '';
        unit.value = 100;
        num.value = '';
        btn.classList.add('disabled');
        this.classList.remove('hidden');
        price.focus();
    });
    price.focus();
})();