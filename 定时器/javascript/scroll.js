var timer = null;
var g_iSpeed = 2;

window.onload = function()
{
    var oDiv = document.getElementById('roll');
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    var oBtn1 = document.getElementById('btn_left');
    var oBtn2 = document.getElementById('btn_right');
    var oSpeed = document.getElementById('sel_speed');
    oUl.innerHTML += oUl.innerHTML;
    oUl.style.width = aLi[0].offsetWidth * aLi.length+'px';

    oBtn1.onmouseover = function()
    {
        startMove(true);
    };

    oBtn2.onmouseover = function()
    {
        startMove(false);
    };
    startMove(true);

    oSpeed.onchange=function ()
    {
        g_iSpeed = parseInt(this.value);
    };

    for (var i=0; i<aLi.length; i++)
    {
        aLi[i].onmouseover = function()
        {
            stopMove();
        };

        aLi[i].onmouseout = function()
        {
            startMove(g_bMoveLeft);
        }
    }


    function startMove (left)
    {
        g_bMoveLeft = left;
        if (timer)
        {
            clearInterval(timer);
        }
        timer = setInterval(move, 30);
    }

    function stopMove()
    {
        clearInterval(timer);
        timer = null;
    }


    function move()
    {
        var oDiv = document.getElementById('roll');
        var oUl = oDiv.getElementsByTagName('ul')[0];


        var l = oUl.offsetLeft;

        if(g_bMoveLeft)
        {
            l-=g_iSpeed;
            if(l<=-oUl.offsetWidth/2)
            {
                l+=oUl.offsetWidth/2;
            }
        }
        else
        {
            l+=g_iSpeed;
            if(l>=0)
            {
                l-=oUl.offsetWidth/2;
            }
        }

        oUl.style.left=l+'px';
    }






};