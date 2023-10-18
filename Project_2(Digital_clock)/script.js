const hourEl = document.getElementById("hour")
const minute = document.getElementsByClassName("minute");
const second = document.getElementsByClassName("second");
const ampm = document.getElementsByClassName("ampm");
function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    // to update am to pm
    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }

    if(h < 10 ){
        h = "0" + h;
    }

    // shortcut to do this is

    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hourEl.innerText = h;  // id se element hai to aasei likh skte hai 
    minute[0].innerText = m; // jb getelementsbyclassname se liye ho to 0th attribute dena hoga
    second[0].innerText = s;
    setTimeout(updateClock,1000);
}

console.log("I am here");
updateClock();