const calculateTemp = () => {

    const tempNumber = document.getElementById('temp').value;


const tempSelected = document.getElementById('tempUnit');

const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

const celTofah = (cel) => {
    let fahrenheit = Math.round(cel * 9/5 + 32);
    return fahrenheit;
}

const fahTocel = (fah) => {
    let celsius = Math.round((fah - 32) * 5/9);
    return celsius;
}

let result;

if(valueTemp == 'cel'){
    result = celTofah(tempNumber);
    document.getElementById('resultContainer').innerHTML= `= ${result} °Fahrenheit`
}
else{
    result = fahTocel(tempNumber);
    document.getElementById('resultContainer').innerHTML = `= ${result} °Celsius`
}
}