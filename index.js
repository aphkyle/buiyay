let speech = window.speechSynthesis
let cantoVoice = new SpeechSynthesisUtterance()
let savedText=''
let index=-1

fetch("saved.json")
  .then(response => response.json())
  .then(json => console.log(json))

console.log("hi im running")

setTimeout(() => {
  console.log(window.speechSynthesis.getVoices());
}, 50);

cantoVoice.lang = "zh-HK"
cantoVoice.volume = 100

submit.onclick = ()=>{
  console.log("s called")
  savedText=t.value
}
show.onclick = ()=>{
  index=-1
  console.log("S called")
  t.value=savedText
}
hide.onclick = ()=>{
  index=0
  console.log("H called")
  t.value=''
}
hint.onclick = ()=>{
  console.log("h called")
  index++
  t.value=savedText.slice(0, index)
}
play.onclick = ()=>{
  console.log("play called")
  if(speech.paused){
    console.log("pausing")
    speech.resume(cantoVoice)
  }else{
    console.log("not pausing")
    cantoVoice.text = savedText
    speech.speak(cantoVoice)
  }
}
pause.onclick = ()=>{
  console.log("pause called")
  speech.pause()
}
stopb.onclick = ()=>{
  console.log("stopb called")
  speech.cancel()
}
cantoVoice.onend = (ev)=>{
  if(loop.checked & !speech.paused){
    speech.speak(cantoVoice)
  }
}
