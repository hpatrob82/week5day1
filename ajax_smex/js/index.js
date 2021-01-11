'use strict';



const request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this);
    }
};
request.open("GET", "https://caniuse.com/");
request.send();