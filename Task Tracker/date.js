const currentDate = document.querySelector(".current-date");
const currentTime = document.querySelector(".current-time");
const today = new Date();

// alert(today.toLocaleTimeString());

// Display Date
const getDate = () =>{
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    
    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    
    const day = days[today.getDay()];
    const date = today.getDate();
    const month = months[today.getMonth()]
    const year = today.getFullYear();
    
    return `${day}, ${date} ${month} ${year}`
};
currentDate.innerText = getDate();


// Display Time
const displayTime = () =>{
    const today = new Date();
    currentTime.innerText = today.toLocaleTimeString();
}
setInterval(displayTime, 1000);

