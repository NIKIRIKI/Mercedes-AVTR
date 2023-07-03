const button = document.querySelector('.arrays');
const bodyTheme = document.querySelector('body');
const arrColors = ['linear-gradient(180deg, #070a1b 0%, #2a3170 100%)', 'linear-gradient(180deg, rgb(71 40 195),#4650b1)']
let check = 1;


button.addEventListener('click', () => {
    if (check < arrColors.length) {
        bodyTheme.style.background = arrColors[check];
        bodyTheme.style.transition = '.5s';
        check++;

        if (check >= arrColors.length) {
            check = 0
        }
    }
});