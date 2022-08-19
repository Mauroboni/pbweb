        function Limpar(id1, id2, resultado) {
            document.getElementById(id1).value = "";
            document.getElementById(id2).value = "";
            document.getElementById(resultado).innerHTML = "";
        }

        function Calcular(numero1, numero2, operacao){
            //captura o valor do select(dropdown) selecionado
            var operador = document.getElementById(operacao).options[document.getElementById(operacao).selectedIndex].value;
            var num1 = document.getElementById(numero1).value;
            var num2 = document.getElementById(numero2).value;
            var StrExpressao = num1 + operador + num2;
            resultado = eval(StrExpressao);
            switch (operador) {
                case '+': 
                    document.getElementById("saida").innerHTML = "A soma entre "+num1+" e "+num2+" é " + resultado;
                    break;
                case '-':
                    document.getElementById("saida").innerHTML = "A diferença entre " + num1 + " e " + num2 + " é " + resultado;
                    break;
                case '*':
                    document.getElementById("saida").innerHTML = "O produto de " + num1 + " por " + num2 + " é " + resultado;
                    break;
                case '/':
                    document.getElementById("saida").innerHTML = "O quociente de " + num1 + " dividido por " + num2 + " é " + resultado;
                    break;
            
                default:
                    break;
            }
            Limpar(numero1,numero2);
        }
