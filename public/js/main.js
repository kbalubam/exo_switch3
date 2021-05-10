let var1 = parseInt(prompt("Choisi un nombre"));
let var2 = prompt("Chosis un operateur");
let var3 = parseInt(prompt("Choisi un nombre"));

switch (var2) {
    case "+":
        alert(`le resultat est ${var1 + var3}` )
        break;
    case "-":
        alert(var1 - var3 )
        break;
    case "/":
        alert(var1/var3)
        break;
    case "*":
        alert(var1*var3)
    
    default:
        alert("Choisis un operateur")
        break;
}