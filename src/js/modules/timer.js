const timer = (id, deadline) => {

    // функция помошник которая к одной цифре будет дописывать ноль 
    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    // будет выдавать время до конца акции 
    const getTimeRemaining = (endTime) => {
        const time = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((time / 1000) % 60),
            minutes = Math.floor((time / 1000 / 60) % 60),
            hours = Math.floor((time / (1000 * 60 * 60)) % 24),
            days = Math.floor((time / (1000 * 60 * 60 * 24)));

        return {
            time,
            days,
            hours,
            minutes,
            seconds
        };
    };


    //будет отвечать за то чтобы помешать определенное значение в элементы у нас на странице
    const setClock = (selector, entTime) => {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);


        // сколько времени осталось до дедлайна 
        updateClock();
        
        function updateClock() {
            const time = getTimeRemaining(entTime);

            days.textContent = addZero(time.days);
            hours.textContent = addZero(time.hours);
            minutes.textContent = addZero(time.minutes);
            seconds.textContent = addZero(time.seconds);

            if (time.time <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timeInterval);
            }
        }
    };

    setClock(id, deadline);
}

export default timer;