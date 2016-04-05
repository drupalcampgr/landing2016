CountDownTimer('07/01/2016 10:1 AM', 'countdown');

function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id).innerHTML = days + 'Days, ';
        document.getElementById(id).innerHTML += hours + 'hours, ';
        document.getElementById(id).innerHTML += minutes + 'minutes ';
        document.getElementById(id).innerHTML += '& ';
        document.getElementById(id).innerHTML += seconds + 'seconds until the event.';
    }

    timer = setInterval(showRemaining, 1000);
}