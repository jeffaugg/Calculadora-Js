    let valorTotal = 0;
    let cache = "0";
    let operadorAnterior;
    

    const screen = document.querySelector('.screen');

    function buttonClick(value){
        if(isNaN(value)){
            handleSymbol(value);
        }else{
            handleNumber(value);
        }

        screen.innerText = cache;
    }


    function handleSymbol(symbol){
        switch(symbol){
            case 'C':
                cache = '0';
                 valorTotal = 0;
                break;
            case '=':
                if(operadorAnterior === null ){
                    return 
                }

                flushOperation(parseInt(cache));
                cache = valorTotal;
                valorTotal = 0
                break;
            case '←':
                if(cache.length === 1){
                    cache = '0';
                    // se meu cache possui apenas um elemente, quando ele é retirado, o cache fica vazio;
                }else{
                    cache = cache.substring(0, cache.length - 1);
                    // remove o ultimo elemento do cache retornando o conjunto de cache menos o ultimo 
                }
                break;

            case `+`:
                
            case `−`:

            case `×`:
                handleMath(symbol);
                break;

            case `÷`:
                handleMath(symbol);
                break;
        }
    }


    function handleMath(symbol){
        if(cache === '0'){
            return;
        }

        const intCache = parseInt(cache);

        if(valorTotal === 0){
           valorTotal = intCache; 
        }else{
            flushOperation(intCache);
        }

        operadorAnterior = symbol;
        cache = '0';
        
    }


    function flushOperation(intCache){
        if(operadorAnterior === '+'){
            valorTotal += intCache;
        }else if(operadorAnterior === '−'){
            valorTotal -= intCache;
        }else if(operadorAnterior === '×'){
            valorTotal *= intCache;
        }else if(operadorAnterior === '÷'){
            valorTotal /= intCache;
        }

    }

    function handleNumber(numberString){
        if(cache === '0'){
            cache = numberString;
        }else{
            cache += numberString; 
        }
    }

    function init(){
        document.querySelector(`.calc-buttons`).addEventListener(`click`, function(event){
            buttonClick(event.target.innerText);
        });
    }

    init();