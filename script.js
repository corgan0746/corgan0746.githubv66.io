let phrase = document.getElementById('ph');
let image = document.getElementById('fortuneImg');
phraseGen = () => {
    image.style.opacity = '0';
    image.style.zIndex = '1';
    let num = Math.floor(Math.random() * 6);
    let sentence;
    switch(num) {
        case 1:
            sentence = 'Be on the alert to recognize your prime at whatever time of your life it may occur.';
            break;
        case 2:
            sentence = 'Your road to glory will be rocky, but fulfilling';
            break;    
        case 3:
            sentence = 'Courage is not simply one of the virtues, but the form of every virtue at the testing point.            ';
            break;
        case 4:
            sentence = 'Patience is your alley at the moment. Don’t worry!';
            break;
        case 5:
            sentence = 'All things are difficult before they are easy.';
            break;
        case 6:
            sentence = 'Don’t worry about money. The best things in life are free.';
            break;
        default:
            sentence = 'our Fortune teller is not available, we apologize for the inconvenience.';
            break;
    }
    phrase.innerHTML = sentence;
    setTimeout(changeDisplay, 1000);
    
}
changeDisplay = () => {
    image.style.display = 'none';
    document.getElementById('btn1').style.display = 'none'
}
