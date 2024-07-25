let dolar = 5.66

let usdInput = document.querySelector('#usd');
let brlInput = document.querySelector('#brl');


//Evento que vai executar a conversão no momento da digitação
usdInput.addEventListener('keyup', () => {
    convert("usd-to-brl")
})

brlInput.addEventListener('keyup', () => {
    convert("brl-to-usd")
})

usdInput.addEventListener('blur', ()=> {
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener('blur', ()=> {
    brlInput.value = formatCurrency(brlInput.value)
})

//Prédefine um valor no campo dólar
usdInput.value = "1000,00"
//Converta de usd para brl
convert("usd-to-brl")


//Funções
//Função de conversar 
//(type): Se será de dolar pra real ou de real pra dolar
function formatCurrency(value) {
    // ajustar o valor
    let fixedValue = fixValue(value)
    // formatar o número
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-BR", options)
    // retorna o valor formatado
    return formatter.format(fixedValue)
}

function fixValue(value) {
    //troca a ',' pelo '.'
    let fixedValue = value.replace(",", ".")
    //transforma em número de fato
    let floatValue = parseFloat(fixedValue)
    //verifica, se der errado coloca 0
    if(floatValue == NaN) {
        floatValue = 0
    }
    //retorna o valor que deu certo
    return floatValue
}


function convert(type) {
    if(type == "usd-to-brl") {         
        //ajusta o valor
        let fixedValue = fixValue(usdInput.value)
        // converte o valor
        let result = fixedValue * dolar
        result = result.toFixed(2)
        // mostra no campo de real
        brlInput.value = formatCurrency(result)
    }   
      
    if(type == "brl-to-usd") {
        //ajusta o valor
        let fixedValue = fixValue(brlInput.value)
        // converte o valor
        let result = fixedValue / dolar
        result = result.toFixed(2)
        // mostra no campo de dolar
        usdInput.value = formatCurrency(result)
    }
}

