window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// set to var so we can use it
const recognition = new SpeechRecognition();

recognition.interimResult = true;
recognition.lanugage = `en-US`; 

const word = document.querySelector(`.words`)

let p = document.createElement(`p`);

word.append(p);

recognition.addEventListener(`result`, e =>{
    console.log(e); 
    const transcript = Array.from (e.results)
        //map makes a copy of array 
        .map(result => result [0]) 
        .map(result => result.transcript)
        .join('');
        p.textContent = transcript; 

        if(e.result[0].isFinal){
            p = document.createElement(`p`)
            word.appendChild(p)

        }
})
 recognition.addEventListener('end', recognition.start)
recognition.start();

