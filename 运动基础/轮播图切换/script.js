var g_aImgTxt=
    [
        {info: "都市魅力", href: 'http://www.zhinengshe.com/'},
        {info: "古香古色", href: 'http://www.zhinengshe.com/'},
        {info: "沉浸舞步的舞者", href: 'http://www.zhinengshe.com/'},
        {info: "名贵跑车", href: 'http://www.zhinengshe.com/'},
        {info: "聆听天籁的精灵", href: 'http://www.zhinengshe.com/'},
        {info: "绚彩光芒", href: 'http://www.zhinengshe.com/'}
    ];



window.onload = function ()
{
    var oDiv = document.getElementById('playimages');
    var oBtnPrev = getByClass (oDiv, 'prev')[0];
    var oBtnNext = getByClass (oDiv, 'next')[0];
    var oMarkLeft = getByClass (oDiv, 'mark_left')[0];
    var oMarkRight = getByClass (oDiv, 'mark_right')[0];
    var oDivSmall = getByClass (oDiv, 'small_pic')[0];
    var oUlSmall = oDivSmall.getElementsByTagName('ul')[0];
    var aLiSmall = oDivSmall.getElementsByTagName('li');
    var oUlBig = getByClass (oDiv, 'big_pic')[0];
    var aLiBig = oUlBig.getElementsByTagName('li');
    var aImgNum = getByClass (oDiv, 'length')[0];
    var aImgTxt = getByClass (oDiv, 'text')[0];

    aImgNum.innerHTML = '1/'+ aLiSmall.length;
    aImgTxt.innerHTML = g_aImgTxt[0].info;

    var now = 0;
    var nowZIndex = 2;
    oUlSmall.style.width=aLiSmall.length*aLiSmall[0].offsetWidth+'px';

    oBtnPrev.onmouseover = oMarkLeft.onmouseover = function ()
    {
        startMove (oBtnPrev, {opacity: 100});
    };
    oBtnPrev.onmouseout = oMarkLeft.onmouseout = function ()
    {
        startMove (oBtnPrev, {opacity: 0});
    };
    oBtnNext.onmouseover = oMarkRight.onmouseover = function ()
    {
        startMove (oBtnNext, {opacity: 100});
    };
    oBtnNext.onmouseout = oMarkRight.onmouseout = function ()
    {
        startMove (oBtnNext, {opacity: 0});
    };

    for (var i=0; i<aLiSmall.length; i++)
    {
        aLiSmall[i].index = i;
        aLiSmall[i].onclick = function ()
        {
            if (now == this.index) return;
            now = this.index;
            tab();
            console.log(now)
        };

        aLiSmall[i].onmouseover = function ()
        {
            startMove ( this, {opacity: 100})
        };
        aLiSmall[i].onmouseout = function ()
        {
            if ( this.index !== now)
            {
                startMove ( this, {opacity: 60})
            }
        }
    }

    function tab ()
    {
        aLiBig[now].style.zIndex = nowZIndex++;
        for (var i=0; i<aLiSmall.length; i++)
        {
            startMove (aLiSmall[i], {opacity: 60})
        }
        startMove (aLiSmall[now], {opacity:100});
        aLiBig[now].style.height = 0;
        startMove (aLiBig[now], {height: 320});

        if (now == 0)
        {
            startMove(oUlSmall, {left: 0})
        }
        else if (now == aLiSmall.length - 1)
        {
            startMove (oUlSmall, {left: -(now-2)*aLiSmall[0].offsetWidth});
        }
        else
        {
            startMove (oUlSmall, {left: -(now-1)*aLiSmall[0].offsetWidth});
        }
        aImgTxt.innerHTML = g_aImgTxt[now].info;
        aImgNum.innerHTML = (now+1)+ '/'+ aLiSmall.length;
    }

    oBtnPrev.onclick = function ()
    {
        now--;
        if (now == -1)
        {
            now = aLiSmall.length - 1;
        }
        tab();
        console.log(now)
    };
    oBtnNext.onclick = function ()
    {
        now++;
        if (now == aLiSmall.length)
        {
            now = 0;
        }
        tab();
        console.log(now)
    };

    var timer = setInterval(oBtnNext.onclick,2000);

    oDiv.onmouseover = function ()
    {
        clearInterval(timer);
    };
    oDiv.onmouseout = function ()
    {
        timer = setInterval(oBtnNext.onclick,2000);
    }
};