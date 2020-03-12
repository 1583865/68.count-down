// var comingdate = new Date("January 1 2019,00:00:00");

// var d = document.getElementById('d');
// var h = document.getElementById('h');
// var m = document.getElementById('m');
// var s = document.getElementById('s');

// var x = setInterval(function(){
// 	var now = new Date();
// 	var des = comingdate.getTime() - now.getTime();
// 	var days = Math.floor(des / (1000*60*60*24));
// 	var hours = Math.floor(des%(1000*60*60*24)/(1000*60*60));
// 	var mins = Math.floor(des%(1000*60*60)/(1000*60));
// 	var secs = Math.floor(des%(1000*60)/1000);

// 	d.innerHTML = getTrueNumber(days);
// 	h.innerHTML = getTrueNumber(hours);
// 	m.innerHTML = getTrueNumber(mins);
// 	s.innerHTML = getTrueNumber(secs);
	
	
// 	// if(des <= 0) clearInterval(x);
// },1000);

// function getTrueNumber(x) {
// 	if(x<10) return '0'-x;
// 	else return x;
// }


function GetRTime() {
     var EndTime = new Date('2020/06/29 00:00:00');
     var NowTime = new Date();
     var t = EndTime.getTime() - NowTime.getTime();
     var d = 0;
     var h = 0;
     var m = 0;
     var s = 0;
     if (t >= 0) {
         d = Math.floor(t / 1000 / 60 / 60 / 24);
         h = Math.floor(t / 1000 / 60 / 60 % 24);
         m = Math.floor(t / 1000 / 60 % 60);
         s = Math.floor(t / 1000 % 60);
     }

     function toDouble(n) {
         return n < 10 ? '0' + n : n;
     }

     document.getElementById('t_d').innerHTML = d + '天';
     document.getElementById('t_h').innerHTML = toDouble(h) + '时';
     document.getElementById('t_m').innerHTML = toDouble(m) + '分';
     document.getElementById('t_s').innerHTML = toDouble(s) + '秒';

 }
 setInterval(GetRTime, 0)