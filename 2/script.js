let music = [
    {
        name  : "Rose Sefid",
        cover : "./photo/Roze-sefid.jpg",
        audios : new Audio("./music/RozeSefid.mp3")
    },
    {
        name  : "Fereshte",
        cover : "./photo/majid.jpg",
        audios : new Audio("./music/MajidRazavi.mp3")
    },
    {
        name  : "Vay Agar",
        cover : "./photo/erfan.jpg",
        audios : new Audio("./music/VayAgar.mp3")
    }
]


let range = document.querySelector("#music-time")
let preBtn = document.querySelector("#pre-btn")
let playBtn = document.querySelector("#play-btn")
let nextBtn = document.querySelector("#nex-btn")
let musicCover = document.querySelector("#music-cover")
let musicName = document.querySelector("#music-name")


let currentMusic = 0;
let audio = music[currentMusic].audios
musicCover.src = music[currentMusic].cover
musicName.innerText = music[currentMusic].name

audio.addEventListener('canplay' , () => {
    range.max = audio.duration
}) 

audio.addEventListener('timeupdate' ,() => {
   range.value = audio.currentTime
})

range.addEventListener('input' ,() => {
    audio.currentTime =  range.value
 })

 playBtn.addEventListener('click' , () => {
    if(audio.paused){
       audio.play()
       musicCover.style.animationPlayState = "running"
       playBtn.classList.replace("fa-play","fa-pause")
    }else{
      audio.pause()
      musicCover.style.animationPlayState = "paused"
      playBtn.classList.replace("fa-pause" ,"fa-play")
    }
 })

 nextBtn.addEventListener('click' , () => {
    changeMusic("next")
 })
 preBtn.addEventListener('click' , () => {
    changeMusic('pre')
 })

 function changeMusic(state){
    audio.pause()
    range.value = 0
    playBtn.classList.replace("fa-pause" ,"fa-play")
    musicCover.style.animationPlayState = "paused"
    audio.currentMusic = 0

    if(state == "next"){

        if(currentMusic == music.length -1)
        currentMusic = 0
        else
        currentMusic += 1

    }else{

        if(currentMusic == 0 )
        currentMusic = music.length -1
        else
        currentMusic -= 1

    }

     audio = music[currentMusic].audios
     musicCover.src = music[currentMusic].cover
     musicName.innerText = music[currentMusic].name
 }