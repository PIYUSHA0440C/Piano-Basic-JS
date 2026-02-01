const piano = document.getElementById('piano')
const blackKeysContainer = document.querySelector('.black-keys')
const blackStart = document.querySelector('.black-start')
const blackEnd = document.querySelector('.black-end')


const notesMap = {
    'a': 'c',
    's': 'd',
    'd': 'e',
    'j': 'f',
    'k': 'g',
    'l': 'a',
    ';': 'b',
    'w': 'cs',
    'e': 'ds',
    'i': 'fs',
    'o': 'gs',
    'p': 'as'
}


function playSound(noteId){
    noteId = noteId.toLowerCase()
    let note = notesMap[noteId]
    
    new Audio(`./sounds/${note}.mp3`).play();
}

// function playSoundKey(key){
//     let sound = key.toLowerCase()
//     new Audio(`sounds/${sound.replace}.mp3`)
    
// }

function pressEffect(elem){
    const key = document.getElementById(elem)
    key.style.scale = 0.96
    setTimeout(()=>{
        key.style.scale = 1
    },100)
}


const whiteKeys = [
    {
        lable: 'A'
    },
    {
        lable: 'S'
    },
    {
        lable: 'D'
    },
    {
        lable: 'J'
    },
    {
        lable: 'K'
    },
    {
        lable: 'L'
    },
    {
        lable: ';'
    }
]

whiteKeys.forEach((item)=>{
    const key = document.createElement('div')
    key.className = 'white'
    key.id = item.lable
    key.innerHTML = `<p>${item.lable}</p>`

    key.addEventListener('click', ()=>{
        pressEffect(item.lable)
        playSound(item.lable);
    })

    piano.appendChild(key)
})


const blackKeys = [
    {
        lable: 'W',
        left: 8.9,
    },
    {
        lable: 'E',
        left: 23,
    },
    {
        lable: 'I',
        left: 51.5,
    },
    {
        lable: 'O',
        left: 66,
    },
    {
        lable: 'P',
        left: 81,
    }
]


blackKeys.forEach(item => {
    const key = document.createElement('div')
    key.className = 'black'
    key.id = item.lable
    key.innerHTML = `<p>${item.lable}</p>`
    key.style.left = item.left + '%'

    key.addEventListener('click', ()=>{
        pressEffect(item.lable)
        playSound(item.lable)
    })

    
    blackKeysContainer.appendChild(key)

})

document.addEventListener('keydown',(dets)=>{
    key = ""+dets.key
    pressEffect(key.toUpperCase())
    playSound(key)
    
})



