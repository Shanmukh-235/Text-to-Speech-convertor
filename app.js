let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged =() =>{
   voices = window.speechSynthesis.getVoices();
   speech.voice = voices[0];
   voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name, i)));

};
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
    speech.lang = voices[voiceSelect.value].lang;
    console.log(voices[voiceSelect.value]);
});
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.SpeechSynthesis.speak(speech);
})