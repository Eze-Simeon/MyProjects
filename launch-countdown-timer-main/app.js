const daysEl = document.getElementById("days"),
    hoursEl = document.getElementById("hours"),
    minutesEl = document.getElementById("minutes"),
    secondsEl = document.getElementById("seconds"),
    h3 = document.querySelector("h3");

// let countTo= "31 Dec 2030";






const countDown = setInterval(() => {
    const currentDate = new Date();
    const endDate = new Date("31 Dec 2030");
     
    const totalSeconds = (endDate - currentDate)/1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const minutes = Math.floor(totalSeconds / 60 ) % 60;
    const seconds = Math.floor(totalSeconds / 1 ) % 60;
        
    daysEl.innerHTML = `${days}`;
        hoursEl.innerHTML = `${format(hours)}`;
        minutesEl.innerHTML = `${format(minutes)}`;
        secondsEl.innerHTML = `${format(seconds)}`;

    if (totalSeconds < 0){
        clearInterval(countDown);
        h3.innerHTML = "Product launch Begins"
    }

}, 1000);


    function format(count){
    return count < 10 ? `0${count}`: count;
    }



