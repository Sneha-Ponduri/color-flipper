function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color='#';
    for(let i=0; i<6;i++){
        color += letters[Math.floor(Math.random()*16)];

    }
    return color;
}
function changeBackgroundColor(){
    const colorFlipper = document.querySelector('.container');
    const newColor= getRandomColor();
    colorFlipper.style.backgroundColor = newColor;
}
document.getElementById('change').addEventListener('click',changeBackgroundColor);