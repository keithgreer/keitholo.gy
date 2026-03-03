


// Greeting
function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
        return "Good morning";
    } else if (hour >= 12 && hour < 17) {
        return "Good afternoon";
    } else if (hour >= 17 && hour < 21) {
        return "Good evening";
    } else {
        return "Good night";
    }
}

// Date
function displayCurrentDate(elementId) {
    const now = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };
    const formattedDate = now.toLocaleDateString("en-GB", options);

    const el = document.getElementById(elementId);
    if (el) {
        el.textContent = formattedDate;
    }
}

// Time
function displayCurrentTime(elementId) {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    const formattedTime = hours + "." + formattedMinutes + ampm;

    const el = document.getElementById(elementId);
    if (el) {
        el.textContent = formattedTime;
    }
    document.title = formattedTime;
}

//
document.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.textContent = getGreeting(); // id="greeting"
    }
    displayCurrentDate("current-date"); // id="current-date"
});

// id="current-time"
document.addEventListener("DOMContentLoaded", function () {
    displayCurrentTime("current-time"); // run immediately
    setInterval(function () {
        displayCurrentTime("current-time");
    }, 60000);
});