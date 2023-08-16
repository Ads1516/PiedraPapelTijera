
var NombreJ1 = prompt("Cuál es el nombre del Jugador 1?")
var J1 = prompt(NombreJ1 + ", escoge: Piedra, Papel o Tijera")
J1 = J1.toLowerCase()
var NombreJ2 = prompt("Cuál es el nombre del Jugador 2?")
var J2 = prompt(NombreJ2 +", escoge: Piedra, Papel o Tijera")
J1 = J1.toLowerCase()

if (J1==J2){
    alert("EMPATE!")
}else if ((J1 == "piedra" && J2 == "papel") ||
    (J1 == "papel" && J2 == "tijera") ||
    (J1 == "tijera" && J2 == "piedra")
    ) {
    alert ("¡¡Ganó " + NombreJ2 + "!!")
}else if ((J2 == "piedra" && J1 == "papel") ||
    (J2 == "papel" && J1 == "tijera") ||
    (J2 == "tijera" && J1 == "piedra")
    ) {
    alert ("¡¡Ganó " + NombreJ1 + "!!")
}else{
    alert("Valores no especificados")
}