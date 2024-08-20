console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("./audio/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItemPlay = document.getElementsByClassName("songItemPlay ");

let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Heeriye",
    filePath: "audio/1.mp3",
    coverPath: "images/1.jpg",
  },
  {
    songName: "Tauba Tauba",
    filePath: "audio/2.mp3",
    coverPath: "images/2.jpg",
  },
  {
    songName: "Dekha Tenu Pehli",
    filePath: "audio/3.mp3",
    coverPath: "images/3.jpg",
  },
  {
    songName: "Ishq",
    filePath: "audio/4.mp3",
    coverPath: "images/4.jpg",
  },
  {
    songName: "O Mahi O Mahi",
    filePath: "audio/5.mp3",
    coverPath: "images/5.jpg",
  },
  {
    songName: "Khoobsurat",
    filePath: "audio/6.mp3",
    coverPath: "images/6.jpg",
  },
  {
    songName: "Ve Haniya",
    filePath: "audio/7.mp3",
    coverPath: "images/7.jpg",
  },
  {
    songName: "O Sajni Re",
    filePath: "audio/8.mp3",
    coverPath: "images/8.jpg",
  },
  {
    songName: "Dil Vasda",
    filePath: "audio/9.mp3",
    coverPath: "images/9.jpg",
  },
  {
    songName: "Chann",
    filePath: "audio/10.mp3",
    coverPath: "images/10.jpg",
  },
];

//Cover-Images and Song Name

songItems.forEach((element, i) => {
  element.getElementsByClassName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      if (audioElement.paused || audioElement.currentTime <= 0) {
        songIndex = parseInt(e.target.id);
        makeAllPlays();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `audio/${songIndex + 1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
      } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        e.target.classList.remove("fa-pause-circle");
        e.target.classList.add("fa-play-circle");
        gif.style.opacity = 0;
      }
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex > 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `audio/${songIndex + 1}.mp3`;
  masterSongName.innerHTML = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `audio/${songIndex + 1}.mp3`;
  masterSongName.innerHTML = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
