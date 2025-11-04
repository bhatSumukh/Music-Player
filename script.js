let playlist1Songs = [
    {
        title:"halloween1", 
        path: "assets/playlist1/halloween-1.mp3",
        thumbnail: "assets/thumbnail/halloween-thumbnail.png"
    },
     {
        title:"halloween2", 
        path: "assets/playlist1/halloween-2.mp3",
        thumbnail: "assets/thumbnail/halloween-thumbnail.png"
    },
     {
        title:"halloween3", 
        path: "assets/playlist1/halloween-3.mp3",
        thumbnail: "assets/thumbnail/halloween-thumbnail.png"
    },
     {
        title:"halloween4", 
        path: "assets/playlist1/halloween-4.mp3",
        thumbnail: "assets/thumbnail/halloween-thumbnail.png"
    },
     {
        title:"halloween5", 
        path: "assets/playlist1/halloween-5.mp3",
        thumbnail: "assets/thumbnail/halloween-thumbnail.png"
    },
     {
        title:"halloween6", 
        path: "assets/playlist1/halloween-6.mp3",
        thumbnail: "assets/thumbnail/halloween-thumbnail.png"
    },
     {
        title:"halloween7", 
        path: "assets/playlist1/halloween-7.mp3",
        thumbnail: "assets/thumbnail/halloween-thumbnail.png"
    },
     {
        title:"halloween8", 
        path: "assets/playlist1/halloween-8.mp3",
        thumbnail: "assets/thumbnail/halloween-thumbnail.png"
    },
     {
        title:"halloween9", 
        path: "assets/playlist1/halloween-9.mp3",
        thumbnail: "assets/thumbnail/halloween-thumbnail.png"
    },
     {
        title:"halloween10", 
        path: "assets/playlist1/halloween-10.mp3",
        thumbnail: "assets/thumbnail/halloween-thumbnail.png"
    }
];

let playlist2Songs = [
         {
        title:"Motivational 1", 
        path: "assets/playlist2/motivation (1).mp3",
        thumbnail: "assets/thumbnail/motivational-thumbnail.png",
    },
         {
        title:"Motivational 2", 
        path: "assets/playlist2/motivation (2).mp3",
        thumbnail: "assets/thumbnail/motivational-thumbnail.png",
    },
         {
        title:"Motivational 3", 
        path: "assets/playlist2/motivation (3).mp3",
        thumbnail: "assets/thumbnail/motivational-thumbnail.png",
    },
         {
        title:"Motivational 4", 
        path: "assets/playlist2/motivation (4).mp3",
        thumbnail: "assets/thumbnail/motivational-thumbnail.png",
    },
         {
        title:"Motivational 5", 
        path: "assets/playlist2/motivation (5).mp3",
        thumbnail: "assets/thumbnail/motivational-thumbnail.png",
    },
         {
        title:"Motivational 6", 
        path: "assets/playlist2/motivation (6).mp3",
        thumbnail: "assets/thumbnail/motivational-thumbnail.png",
    },
         {
        title:"Motivational 7", 
        path: "assets/playlist2/motivation (7).mp3",
        thumbnail: "assets/thumbnail/motivational-thumbnail.png",
    },
         {
        title:"Motivational 8", 
        path: "assets/playlist2/motivation (8).mp3",
        thumbnail: "assets/thumbnail/motivational-thumbnail.png",
    },
         {
        title:"Motivational 9", 
        path: "assets/playlist2/motivation (9).mp3",
        thumbnail: "assets/thumbnail/motivational-thumbnail.png",
    },
         {
        title:"Motivational 10", 
        path: "assets/playlist2/motivation (10).mp3",
        thumbnail: "assets/thumbnail/motivational-thumbnail.png",
    },
];

let playlist3Songs = [
         {
        title:"Phonk 1", 
        path: "assets/playlist3/phonk (1).mp3",
        thumbnail: "assets/thumbnail/phonk-thumbnail.png",
    },
         {
        title:"Phonk 2", 
        path: "assets/playlist3/phonk (2).mp3",
        thumbnail:  "assets/thumbnail/phonk-thumbnail.png",
    },
         {
        title:"Phonk 3", 
        path: "assets/playlist3/phonk (3).mp3",
        thumbnail:  "assets/thumbnail/phonk-thumbnail.png",
    },
         {
        title:"Phonk 4", 
        path: "assets/playlist3/phonk (4).mp3",
        thumbnail:  "assets/thumbnail/phonk-thumbnail.png",
    },
         {
        title:"Phonk 5", 
        path: "assets/playlist3/phonk (5).mp3",
        thumbnail:  "assets/thumbnail/phonk-thumbnail.png",
    },
         {
        title:"Phonk 6", 
        path: "assets/playlist3/phonk (6).mp3",
        thumbnail:  "assets/thumbnail/phonk-thumbnail.png",
    },
         {
        title:"Phonk 7", 
        path: "assets/playlist3/phonk (7).mp3",
        thumbnail:  "assets/thumbnail/phonk-thumbnail.png",
    },
         {
        title:"Phon 8k", 
        path: "assets/playlist3/phonk (8).mp3",
        thumbnail:  "assets/thumbnail/phonk-thumbnail.png",
    },
         {
        title:"Phonk 9", 
        path: "assets/playlist3/phonk (9).mp3",
        thumbnail:  "assets/thumbnail/phonk-thumbnail.png",
    },
         {
        title:"Phonk 10", 
        path: "assets/playlist3/phonk (10).mp3",
        thumbnail:  "assets/thumbnail/phonk-thumbnail.png",
    },
];
 
let playlists = {
    playlist1: playlist1Songs,
    playlist2: playlist2Songs,
    playlist3: playlist3Songs
};

const songList = document.querySelector("#list-of-song");
const currentThumbnail = document.querySelector("#current-thumbnail");
const currentTitle = document.querySelector("#current-title");
const audioPlayer = document.getElementById("audio-player");

const prevBtn = document.querySelector("#prev-btn");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseIcon = playPauseBtn.querySelector("i");
const nextBtn = document.querySelector("#next-btn");

let currentPlaylist = [];
let currentIndex = 0;


function displaySongs(playlistArray) {
  songList.innerHTML = "";
  playlistArray.forEach((song, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const title = document.createElement("span");

    img.src = song.thumbnail;
    title.textContent = song.title;

    li.appendChild(img);
    li.appendChild(title);
    songList.appendChild(li);

    li.addEventListener("click", function () {
      currentPlaylist = playlistArray;
      currentIndex = index;
      playSong();
    });
  });
}


function playSong() {
  const song = currentPlaylist[currentIndex];
  if (!song) return;

  audioPlayer.src = song.path;
  audioPlayer.play();

  currentThumbnail.src = song.thumbnail;
  currentTitle.textContent = song.title;

  currentThumbnail.style.animationPlayState = "running";
  playPauseIcon.classList.replace("fa-play", "fa-pause");
}

playPauseBtn.addEventListener("click", function () {
  if (audioPlayer.paused) {
    audioPlayer.play();
    currentThumbnail.style.animationPlayState = "running";
    playPauseIcon.classList.replace("fa-play", "fa-pause");
  } else {
    audioPlayer.pause();
    currentThumbnail.style.animationPlayState = "paused";
    playPauseIcon.classList.replace("fa-pause", "fa-play");
  }
});


nextBtn.addEventListener("click", function () {
  if (currentPlaylist.length === 0) return;
  currentIndex = (currentIndex + 1) % currentPlaylist.length;
  playSong();
});


prevBtn.addEventListener("click", function () {
  if (currentPlaylist.length === 0) return;
  currentIndex = (currentIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
  playSong();
});

audioPlayer.addEventListener("ended", function () {
  nextBtn.click();
});
