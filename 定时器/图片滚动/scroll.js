var speed = 1;
var timer = null;
var oTimerOut = null;
var bPause = true;
window.onload = function()
{
    var oSpeed = document.getElementById('sel_speed');
    var oBtn1 = document.getElementById('btn_left');
    var oBtn2 = document.getElementById('btn_right');
    var oDiv = document.getElementById('roll');
    var oUl = oDiv.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    var oChk = document.getElementById('chk_pause');
    oUl.innerHTML += oUl.innerHTML;
    oUl.style.width = aLi[0].offsetWidth * aLi.length + "px";

    oChk.onclick = function()
    {
        bPause = oChk.getElementsByTagName('input')[0].checked;

    };

    oSpeed.onchange = function()
    {
        speed = parseFloat(this.value);
        console.log(speed);
    };

    oBtn1.onclick = function()
    {
        if ( speed > 1 )
        {
            speed -= 1;
        }
        oSpeed.value = speed;
        console.log(speed);
    };

    oBtn2.onclick = function()
    {
        if( speed < 10 )
        {
            speed += 1;
        }
        oSpeed.value = speed;
        console.log(speed);
    };

    oBtn1.onmouseover = function()
    {
        startMove(true)
    };

    oBtn2.onmouseover = function()
    {
        startMove(false)
    };
    startMove(true);

    for (var i=0; i<aLi.length; i++)
    {
        aLi[i].onmouseover = function()
        {
            stopMove()
        };

        aLi[i].onmouseout = function()
        {
            startMove(go)
        };
    }

    function startMove(lmove)
    {
        go = lmove;
        if (timer)
        {
            clearInterval(timer)
        }
        timer = setInterval(move,30);
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
        var aLi = oUl.getElementsByTagName('li');
        var l = oUl.offsetLeft;

        if(go)
        {
            l -= speed;
            if( l<= -oUl.offsetWidth/2 )
            {
                l += oUl.offsetWidth/2;
            }
        }
        else
        {
            l += speed;
            if(l>=0)
            {
                l -= oUl.offsetWidth/2;
            }
        }
        oUl.style.left = l + 'px';

        if(bPause)
        {
            if(Math.abs(l-Math.round(l/aLi[0].offsetWidth)*aLi[0].offsetWidth)<Math.ceil(speed/2))
            {
                stopMove();
                oTimerOut = setTimeout
                (
                    function ()
                    {
                        startMove(go);
                    }, 1000
                );
            }
            console.log(Math.abs(l-Math.round(l/aLi[0].offsetWidth)*aLi[0].offsetWidth)<Math.ceil(speed/2))
        }
    }
};