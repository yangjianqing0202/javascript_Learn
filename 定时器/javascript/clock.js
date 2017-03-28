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

window.onload = function()
{
    var oDiv1 = document.getElementById('time');
    var aImg1 = oDiv1.getElementsByTagName('img');

        function tick()
        {
            var oDate = new Date;
            var str = toDou(oDate.getHours()) + toDou(oDate.getMinutes()) + toDou(oDate.getSeconds());

            for (var i=0;i<aImg1.length;i++)
            {
                aImg1[i].src = 'images/'+str[i]+'.png';
            }
        }
        setInterval(tick,1000);
        tick();

};