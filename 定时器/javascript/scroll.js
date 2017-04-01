var speed = -2;


window.onload = function()
{
    var oDiv = document.getElementById('roll');
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    var oBtn1 = document.getElementById('btn_left');
    var oBtn2 = document.getElementById('btn_right');
    var oSpeed=document.getElementById('sel_speed');




    oSpeed.onchange=function ()
    {

    };


    oBtn1.onmouseover = function()
    {
       speed =  -2;
    };

    oBtn2.onmouseover = function()
    {
        speed = 2;
    };




    oUl.innerHTML += oUl.innerHTML;
    oUl.style.width = aLi[0].offsetWidth * aLi.length+'px';

    function move()
    {
        if(oUl.offsetLeft < -oUl.offsetWidth/2)
        {
            oUl.style.left = '0';
        }

        if(oUl.offsetLeft>0)
        {
            oUl.style.left = -oUl.offsetWidth/2 + 'px';
        }

        oUl.style.left = oUl.offsetLeft + speed + 'px';
    }


    var timer = setInterval(move, 30);
    oUl.onmouseover = function()
    {
        clearInterval(timer);
    };

    oUl.onmouseout = function()
    {
        timer = setInterval(move, 30);
    }


};