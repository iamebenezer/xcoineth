// (function () {
//     const second = 1000,
//           minute = second * 60,
//           hour = minute * 60,
//           day = hour * 24;
  
//     //I'm adding this section so I don't have to keep updating this pen every year :-)
//     //remove this if you don't need it
//     let today = new Date(),
//         dd = String(today.getDate()).padStart(2, "0"),
//         mm = String(today.getMonth() + 1).padStart(2, "0"),
//         yyyy = today.getFullYear(),
//         nextYear = yyyy + 1,
//         dayMonth = "05/21/",
//         birthday = dayMonth + yyyy;
    
//     today = mm + "/" + dd + "/" + yyyy;
//     if (today > birthday) {
//       birthday = dayMonth + nextYear;
//     }
//     //end
    
//     const countDown = new Date(birthday).getTime(),
//         x = setInterval(function() {    
  
//           const now = new Date().getTime(),
//                 distance = countDown - now;
  
//           document.getElementById("days").innerText = Math.floor(distance / (day)),
//             document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
//             document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
//             document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
//           //do something later when date is reached
//           if (distance < 0) {
//             document.getElementById("headline").innerText = "It's my birthday!";
//             document.getElementById("countdown").style.display = "none";
//             document.getElementById("content").style.display = "block";
//             clearInterval(x);
//           }
//           //seconds
//         }, 0)
// //     }());
// function updateTimer() {
//     future  = Date.parse("may 21, 2022 11:30:00");
//     now     = new Date();
//     diff    = future - now;
  
//     days  = Math.floor( diff / (1000*60*60*24) );
//     hours = Math.floor( diff / (1000*60*60) );
//     mins  = Math.floor( diff / (1000*60) );
//     secs  = Math.floor( diff / 1000 );
  
//     d = days;
//     h = hours - days  * 24;
//     m = mins  - hours * 60;
//     s = secs  - mins  * 60;
  
//     document.getElementById("timer")
//       .innerHTML =
//         '<div>' + d + '<span>Days</span></div>' +
//         '<div>' + h + '<span>Hours</span></div>' +
//         '<div>' + m + '<span>Minutes</span></div>' +
//         '<div>' + s + '<span>Seconds</span></div>' ;
//   }
//   setInterval('updateTimer()', 1000 );
  

//   var nyan = document.getElementById('nyan');
// var nyanBtn = document.getElementById('nyan-btn');

// function playPause(song){
//    if (song.paused && song.currentTime >= 0 && !song.ended) {
//       song.play();
//    } else {
//       song.pause();
//    }
// }

// function reset(btn, song){
//    if(btn.classList.contains('playing')){
//       btn.classList.toggle('playing');
//    }
//    song.pause();
//    song.currentTime = 0;
// }

// function progress(btn, song){
//    setTimeout(function(){
//       var end = song.duration; 
//       var current = song.currentTime;
//       var percent = current/(end/100);
//       //check if song is at the end
//       if(current==end){
//          reset(btn, song);
//       }
//       //set inset box shadow
//       btn.style.boxShadow = "inset " + btn.offsetWidth * (percent/100) + "px 0px 0px 0px rgba(0,0,0,0.125)"
//       //call function again
//       progress(btn, song);     
//    }, 1000);
// }

// nyanBtn.addEventListener('click', function(){
//    nyanBtn.classList.toggle('playing');
//    playPause(nyan);
//    progress(nyanBtn, nyan);
// });

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "20 may 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
