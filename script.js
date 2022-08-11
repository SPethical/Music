console.log("Welcome to spotify");
// Initialize the variables.
let songIndex = 0;
let audioElement= new Audio('songs/sanam-ho-ja.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterPause = document.getElementById('masterPause');
let gif = document.getElementById("gifid");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let timeItem = Array.from(document.getElementsByClassName("timeItem"));
let songs =[
    {songName: "Sanam ho ja", filePath:"songs/sanam-ho-ja.mp3", coverPath:"musicImage.jpg"},
    {songName: "Bachalo", filePath:"songs/Bachalo - Akhil.mp3", coverPath:"bachalo.jpg"},
    {songName: "Suicide", filePath:"songs/Suicide.mp3", coverPath:"suicide.jpg"},
    {songName: "Khaab", filePath:"songs/Khaab - Akhil- [PagalWorld.NL].mp3", coverPath:"khaab.jpg"},
]


songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.style.color = "blue";
        masterPause.style.color = "white";
        gif.style.opacity = 1;
    }
})
masterPause.addEventListener('click', ()=>{
    if(audioElement.play || audioElement.currentTime>=0){
        audioElement.pause();
        masterPause.style.color = "blue";
        masterPlay.style.color = "white";
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play')

    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src= songs[index].filePath;
        console.log(songs[index].filePath);
        audioElement.currentTime =0;
        audioElement.play();
        masterPlay.style.color="blue";
        masterPause.style.color="White";
    })
})