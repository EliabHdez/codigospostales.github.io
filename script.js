alert("Verifica el codigo postal. Da click en aceptar para continuar")

let codigoPostal

const eventoMultiple = document.getElementById('evento')

eventoMultiple.addEventListener('click', (e) => {
    let codigoPostal = prompt('Ingresa el codigo postal de destino')
    console.log(codigoPostal)
    if (codigoPostal == 54715){
        alert(`SI tenemos cobertura en el codigo postal ${codigoPostal}`)
    }else{
        alert(`NO tenemos cobertura en el codigo postal ingresado (${codigoPostal})`)
    }
})