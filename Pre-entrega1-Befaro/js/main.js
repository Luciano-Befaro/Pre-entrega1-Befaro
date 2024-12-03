alert("Bienvendios al simulador de atención al cliente");

//opciones
let opciones = prompt("Elegi lo que deseas hacer:\n1. Saldo restante\n2. Completar pago\n3. Hablar con un asesor\n4. Finalizar");

if(opciones == 1)
{
    alert ("Tu saldo restante es de 30.000$")
}
else if(opciones == 2)
{
    let monto = prompt("Indica el monto a abonar")

    alert ("¡Tu pago se completo con exito!")
}
else if (opciones == 3)
{
    alert ("Aguardanos un momento, hay demora de 5 minutos")
}
else
{
    alert ("Hasta pronto gracias por visitar este simulador <3")
}

for (let i = 1; i <= 50; i++)
{     
    console.log(i);
}