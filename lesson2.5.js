'use strict';
        /*5.Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
             где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
             переданного значения операции (использовать switch) выполнить одну из арифметических операций
             (использовать функции из задания 4) и вернуть полученное значение */
        function FuncAdd(x,y) {
            return x + y;
        }

        function Subtract(x,y) {
            return x - y;
        }

        function Devision(x,y) {
            return x / y;
        }

        function Multiply(x,y) {
            return x * y;
        }

        
             function mathOperation(arg1, arg2, operation){
                 switch(operation){
                     case '+':
                         return FuncAdd(arg1,arg2);
                     case "-":
                         return Subtract(arg1,arg2);
                     case "/":
                         return Devision(arg1,arg2);
                     case "*":
                         return Multiply(arg1,arg2);
                     default:
                         ('Неверная операция');
                 }

                     
             }

        
console.log(mathOperation(2,5,"+"));
console.log(mathOperation(2,5,"-"));
console.log(mathOperation(2,5,"/"));
console.log(mathOperation(2,5,"*"));
console.log(mathOperation(2,5,"dsfslfsk"));