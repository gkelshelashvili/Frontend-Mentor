const rowData = "https://api.adviceslip.com/advice";

const adviceNumber = document.querySelector('.advice');
const someAdvice = document.querySelector('.main_text');
const dice = document.querySelector('.dice_div');

const fetchNewAdvice = async () => {
    try {
        const response = await fetch(rowData);
        if (!response.ok) {
            throw new Error(`something's wwrong `);
        }
        const advice = await response.json(); 
        return advice;
    } catch (error) {
        console.error(error);
    }
};

const renderAdvice = (advObj) => {
    const { id, advice } = advObj;
    adviceNumber.innerHTML = `Advice #${id}`;
    someAdvice.innerHTML = advice;
};

const newAdvice = async () => {
    const data = await fetchNewAdvice();
        const advice = data.slip;
        renderAdvice(advice);
};

window.addEventListener('DOMContentLoaded', () => {
    dice.addEventListener('click', newAdvice);
});

