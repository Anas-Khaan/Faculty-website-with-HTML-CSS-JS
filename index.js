
// Getting cookie from the cookie string in the browser, if exist
function getCookie(cookieName) {
    const name = `${cookieName}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// setting cookie if it is not in the browser before!
function setCookie(cookieName, cookieValue, daysToExpire) {
    const date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${cookieName}=${cookieValue}; ${expires}; path=/`;
}

//  display Greetings
function displayGreeting(username) {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    let greeting = "";

    if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    const greetingMessage = alert(`${greeting}, ${username}, welcome to SWE642 Survey`);
    // document.getElementById("greeting").textContent = greetingMessage;
}

// Check cookie, parent function for cookies
function checkCookie() {
    let username = getCookie("username");
    if (username !== "") {
      displayGreeting(username);
    } else {
      username = prompt("Please enter your name:");
      if (username !== "" && username !== null) {
        setCookie("username", username, 1); // Set the cookie with an expiration time of 1 day
        location.reload(); // Reload the page to get the new name from the cookie
      }
    }
  }
  