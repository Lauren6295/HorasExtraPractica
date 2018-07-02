let salario = prompt('Ingrese el salario');
let horas = prompt('Ingrese las horas extra');
let categoria = prompt('Ingrese la categoria');

//if (categoria == 1)

if (horas < 30) {
    console.log (30 * horas)
    }else if (horas>30){
    alert('¡Solo se le pagaran 30 horas extra!');
    }