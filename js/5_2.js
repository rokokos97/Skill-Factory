let x="";
switch (typeof x){
    case "number":
        alert("x — число")
        break
    case "string":
        alert("x —cтрока")
        break
    case "boolean":
        alert("x — логическое значение")
        break
    default :
        alert("Тип x не определён")
}