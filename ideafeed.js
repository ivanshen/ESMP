var currentStateUpVote = false;
var currentStateDownVote = false;
var imgs = "http://s7.postimg.org/3ul3p8ahj/Upvote.png"
var imgs2 = "http://s11.postimg.org/yn5g3w7rj/Downvote.png"
var up = document.getElementById("upvote");
var down = document.getElementById("downvote");
var normalUp = "http://s23.postimg.org/4y3a8k9if/Neutral_Upvote.png"
var normalDown = "http://s23.postimg.org/71dpg89bb/Neutral_Downvote.png"

function changeUpImage() {
  document.getElementById("upvote").src = imgs;
  document.getElementById("downvote").src = "http://www.clker.com/cliparts/3/K/f/z/x/O/square-black-box.svg";
  imgs.push(imgs.shift());
}

function changeDownImage() {
  document.getElementById("downvote").src = imgs2;
  document.getElementById("upvote").src = "http://www.clker.com/cliparts/3/K/f/z/x/O/square-black-box.svg";
  imgs2.push(imgs.shift());
}

function backUp() {
  document.getElementById("upvote").src = normalUp;
  document.getElementById("downvote").src = normalDown;
  normalUp.push(normalUp.shift());
}

function backDown() {
  document.getElementById("downvote").src = normalDown;
  document.getElementById("upvote").src = normalUp;
  normalDown.push(normalDown.shift());
}

$(document).ready(function() {
  $("#upvote").click(function() {
    if (currentStateUpVote == true) {
      currentStateUpVote = false;
      backUp();
    }
    currentStateUpVote = true;
    changeUpImage();
  });
  
  $("#downvote").click(function() {
    if (currentStateDownVote == true) {
      currentStateDownVote = false;
      backDown();
    }
    currentStateDownVote = true;
    changeDownImage();
  });
});