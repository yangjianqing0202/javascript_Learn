


window.onload = function()
{
    var oDiv1 = document.getElementById('time');
    var aImg1 = oDiv1.getElementsByTagName('img');
    var oImg2 = document.getElementsByTagName('week');
        function tick()
        {
            var oDate = new Date;
            var str1 = toDou(oDate.getHours()) + toDou(oDate.getMinutes()) + toDou(oDate.getSeconds());

            var iWeek=(oDate.getDay()+6)%7;//星期
            var week_name= ["one", "two", "three", "four", "five", "six", "seven"];

            for (var i=0;i<aImg1.length;i++)
            {
                aImg1[i].src = 'images/'+str1.charAt(i)+'.png';
            }
            for (var i=0;i<oImg2.length;i++)
            {
                oImg2[i].src='images/'+week_name[iWeek]+'.png';
            }


        }
        setInterval(tick,1000);
        tick();

};


function toDou (n)
{
    if(n<10)
    {
        return '0'+ n
    }
    else
    {
        return '' + n
    }
}