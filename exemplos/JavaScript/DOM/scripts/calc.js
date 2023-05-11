function Limpar(id1, id2) {
    document.getElementById(id1).value = "";
    document.getElementById(id2).value = "";
}

function Calcular(numero1, numero2, operacao, saida) {
    if (!numero1)
    {
    var num1 = document.getElementById(numero1).value;
    var num2 = document.getElementById(numero2).value;
    var operador = document.getElementById(operacao).options[document.getElementById(operacao).selectedIndex].value;
    var expressao = num1 + operador + num2;
    resultado = eval(expressao);
    document.getElementById(saida).innerHTML = resultado;
    }
}
