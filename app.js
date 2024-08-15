const gameBoard = document.querySelector('.gameboard');

const gameInfo = document.querySelector('.info');

gameInfo.innerHTML = 'Circle is first '

const gameBoxs = ["","","","","","","","",""];

let start = "circle";



function gameBox () {
    gameBoxs.forEach((_cell, index) => {
        const box = document.createElement('div');
        box.classList.add('box');
        box.id = index;
        box.addEventListener('click', addGo);
        gameBoard.append(box);
    })
}

gameBox()


function addGo (e) {
    const goDisay = document.createElement('div');
    goDisay.classList.add(start);
    e.target.append(goDisay);
    start = start === 'circle' ? 'cross' : 'circle';
    gameInfo.textContent = 'it is now ' + start + "'s go";
    e.target.removeEventListener("click", addGo);

    checkScore();
}

function checkScore() {
    const allBox = document.querySelectorAll('.box')
    const winningCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6,],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]

    winningCombos.forEach(array => {
        const circleWins = array.every(cell => 
            allBox[cell].firstChild?.classList.contains('circle'))
        if (circleWins) {
        gameInfo.textContent = "Circle Wins!";
        allBox.forEach(box => box.replaceWith(box.cloneNode(true)))
    }
    })

    winningCombos.forEach(array => {
        const crossWins = array.every(cell => 
            allBox[cell].firstChild?.classList.contains('cross'))
        if (crossWins) {
        gameInfo.textContent = "Cross Wins!";
        allBox.forEach(box => box.replaceWith(box.cloneNode(true)));
    }
    })

    
}