const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
var che=document.getElementById('btn');
var che2=document.getElementById('btn2');
var che3=document.getElementById('btn3');
var che4=document.getElementById('btn4');
var che5=document.getElementById('btn5');

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  /* p.innerText = text; */
  if(e.results[0].isFinal){
    
    if (text.includes('prende foco 1')) {
        
        che.checked=true;
       
       
      }
      if (text.includes('apaga foco 1')) {
        che.checked=false;
       
       
      }
      if (text.includes('prende foco 2')) {
        
        che2.checked=true;
      
       
      }
      if (text.includes('apaga foco 2')) {
        che2.checked=false;
       
       
      }
      if (text.includes('prende foco 3')) {
        
        che3.checked=true;
       
       
      }
      if (text.includes('apaga foco 3')) {
        che3.checked=false;
        
       
      }
      if (text.includes('prende foco 4')) {
        
        che4.checked=true;
      
       
      }
      if (text.includes('apaga foco 4')) {
        che4.checked=false;
        
       
      }
      if (text.includes('prende foco 5')) {
        
        che5.checked=true;
       
       
      }
      if (text.includes('apaga foco 5')) {
        che5.checked=false;
      
       
      }
   
    
    /* p = document.createElement('p'); */
  }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();