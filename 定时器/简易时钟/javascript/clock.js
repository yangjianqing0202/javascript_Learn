var g_aWeekName=
    [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven"
    ];

window.onload = function()
{
    var oDiv = document.getElementById('date');
    var aImg = oDiv.getElementsByTagName('img');

    var oDiv2 = document.getElementById('week');
    var aImg2 = oDiv2.getElementsByTagName('img');

        function tick()
        {
            var oDate = new Date;
            var iYear=oDate.getYear();
            var iMonth=oDate.getMonth();
            var iDay=oDate.getDate();
            var iHour=oDate.getHours();
            var iMin=oDate.getMinutes();
            var iSec=oDate.getSeconds();
            var iWeek=(oDate.getDay()+6)%7;


            if(iYear<1900)
            {
                iYear+=1900;
            }

            var str = iYear+toDouble(iMonth+1)+toDouble(iDay)+toDouble(iHour)+toDouble(iMin)+toDouble(iSec);
            var str2 =  ''+iWeek;


            for (var i=0;i<aImg.length;i++)
            {
                aImg[i].src='images/'+ str.charAt(i)+'.png';
            }

            for (var i=0;i<aImg2.length;i++)
            {
                aImg2[i].src='images/'+ g_aWeekName[str2.charAt(i)]+'.png';
            }

        }
        setInterval(tick,1000);
        tick();

};


function toDouble(n)
{
    if(n<10)
    {
        return '0'+n;
    }
    else
    {
        return ''+n;
    }
}
