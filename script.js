const gen = async function generataAd() {
let result = await fetch('https://api.adviceslip.com/advice');
const data = await result.json();
document.querySelector('h1').innerText = `Advice #${data.slip.id}`
document.querySelector('p').innerText = `"${data.slip.advice}"`
}
const loadInitialAdvice = async () => {
    await gen();
  };
  document.addEventListener('DOMContentLoaded', loadInitialAdvice);
