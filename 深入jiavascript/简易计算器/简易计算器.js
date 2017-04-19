window.onload = function()
{
    var oBtn = document.getElementById('count');
        function getNum(idInput)
        {
            var num = document.getElementById(idInput).value;
            if(isNaN(num))
            {
                alert('不是有效的数字');
            }
            else
            {
                num = parseFloat(num);
                return num;
            }
        }

        function getOpt()
        {
            var opt = "+";
            for(var i=1; i<=4; i++)
            {
                if(document.getElementById('opt'+i).checked)
                {
                    opt = document.getElementById('opt'+i).value;
                    break;
                }
            }
            return opt;
        }

        oBtn.onclick = function ()
        {
            var num1 = getNum('num1');
            var num2 = getNum('num2');
            var opt = getOpt();
            if(num1=="" || num2=="")
            {
                alert('不是有效的数字')
            }
            document.getElementById('result').value = compute( num1,num2,opt );
        };

        function compute ( num1Para,num2Para,optPara )
        {
            var result = 0;
            switch(optPara)
            {
                case "+":
                    result = num1Para+num2Para;
                    break;

                case "-":
                    result = num1Para-num2Para;
                    break;

                case "*":
                    result = num1Para*num2Para;
                    break;

                case "/":
                    result = num1Para/num2Para;
                    break;

                default:
                    result= "不是有效的运算符";
            }
            return result;
        }



};