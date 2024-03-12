const musicPlayer = document.getElementById("musicPlayer");
const visualizerCanvas = document.getElementById("visualizerCanvas");
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const analyser = audioContext.createAnalyser();
const source = audioContext.createMediaElementSource(musicPlayer);
source.connect(analyser);
analyser.connect(audioContext.destination);

analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

const canvasContext = visualizerCanvas.getContext;
