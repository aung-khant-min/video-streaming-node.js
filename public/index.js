
//Select Elements
let video = document.getElementById('video')
let videoTitle = document.getElementById('videoTitle')
let videos = document.getElementById('videos')

//Choose Video
const choose = (vid) => {
    video.poster = vid.poster
    videoSrc.src = '/video?title='+vid.video
    videoTitle.textContent = vid.title+" - "+vid.artist
}

//Get Data from Server
fetch('/videoData')
.then(response => response.json())
.then(data => {
    data.map(vid => {
        let temp = document.createElement('div')
        temp.onclick = e => choose(vid)
        temp.className = 'video-item'
        temp.innerHTML = `<img src=${vid.poster}> <h3>${vid.title} <br> ${vid.artist}</h3>`
        videos.appendChild(temp)
    })
})


