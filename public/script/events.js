function changeYear(){
    loadLogo();
    loadSquaresTable();
    loadTeamLogos();
    toggleWinnerButton();
    
    clearTextSearch();
    highlightWinners(false);
}

function checkForWinners(clickedDiv){
    if (clickedDiv.textContent.includes('Show')) {
        //Unhighlight text search if there was any
        clearTextSearch();
        highlightWinners(true);
    } else {
        highlightWinners(false);
    }
}

function highlightWinners(highlight){
    const showWinnerButton = document.getElementById("show-winner-button");
    
    for(let i = 0; i<4; i++){
        const winningNumberNFC = winningNumbers[2024][i][0]; //TODO: CHANGE BASED ON YEAR SELECTED
        const winningNumberAFC = winningNumbers[2024][i][1]; //TODO: CHANGE BASED ON YEAR SELECTED
    
        const topNumberCordinate = topNumbersMap[2024].indexOf(winningNumberNFC); //TODO: CHANGE BASED ON YEAR SELECTED
        const leftNumberCordinate = leftNumbersMap[2024].indexOf(winningNumberAFC); //TODO: CHANGE BASED ON YEAR SELECTED

        const cordinates = topNumberCordinate + '-' + leftNumberCordinate;
        const winners = document.getElementsByClassName(cordinates);

        if(highlight){
            showWinnerButton.textContent = 'Hide Winners';

            winners[0].classList.add('winner-q' + (i + 1));
            let existingQuarterWon = winners[0].querySelector('.quarter-won');

            if (existingQuarterWon) {
                // Get current text and remove the parentheses
                let currentText = existingQuarterWon.textContent.replace(/[()]/g, '');
                
                // Append the new quarter
                currentText += ', Q' + (i + 1);
                
                // Update the text content with proper parentheses
                existingQuarterWon.textContent = `(${currentText})`;
            } 
            else {
                // Create new quarter-won div
                const quarterWonDiv = document.createElement('div');
                quarterWonDiv.classList.add('quarter-won');
                quarterWonDiv.style.fontSize = '11px';
                quarterWonDiv.textContent = `(Q${i + 1})`; // Properly formatted from the start

                winners[0].appendChild(quarterWonDiv);
            }
        }
        else{
            showWinnerButton.textContent = 'Show Winners';

            winners[0].classList.remove('winner-q' + (i + 1));
            let existingQuarterWon = winners[0].querySelector('.quarter-won');
            if (existingQuarterWon) {
                existingQuarterWon.remove();
            }
        }
    }
}

let searchInput = document.getElementById('search-input');
let spinner = document.querySelector('.spinner');
let clearButton = document.querySelector('.x');
let superbowlSquares = document.querySelectorAll('.super-bowl-squares tr');

// Debounce function
function debounce(func, delay) {
    let timeout;
    return function () {
    const context = this;
    const args = arguments;

    // Show spinner immediately
    clearButton.classList.add('displayNone');
    clearButton.classList.remove('displayBlock');

    spinner.style.display = 'block';

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        func.apply(context, args);
        // Hide spinner when the debounce delay is reached
        spinner.style.display = 'none';

        if (searchInput.value.trim() === '' || searchInput.value.trim() === null) {
            clearButton.classList.add('displayNone');
            clearButton.classList.remove('displayBlock');
        }
        else{
            clearButton.classList.add('displayBlock');
            clearButton.classList.remove('displayNone');
        }
    }, delay);
    };
}

let performSearch = debounce(function () {
    //Unhighlight winners if they were selected
    highlightWinners(false);

    //Iterate through each cell using a for loop and print the content if it has text
    for (let i = 1; i < superbowlSquares.length; i++) {
        let tr = superbowlSquares[i];
        let td = tr.querySelectorAll('td');

        for(let j = 1; j<td.length; j++){
            let currTd = td[j];

            let currTdText = currTd.textContent.toLowerCase();
            let searchInputText = searchInput.value.toLowerCase();
            
            if (searchInput.value !== '' && currTdText.includes(searchInputText)) {
                currTd.classList.add('name-search-highlight');
            }
            else{
                currTd.classList.remove('name-search-highlight');
            }
        }
    }

    spinner.style.display = 'none';

}, 650); // Adjust the debounce delay as needed

// Attach the event listener
searchInput.addEventListener('input', performSearch);

// Clear the input
clearButton.addEventListener('click', function () {
    searchInput.focus();
    clearTextSearch();
});

function clearTextSearch(){
    for (let i = 1; i < superbowlSquares.length; i++) {
        let tr = superbowlSquares[i];
        let td = tr.querySelectorAll('td');

        for(let j = 1; j<td.length; j++){
            let currTd = td[j];
            currTd.classList.remove('name-search-highlight');
        }
    }

    searchInput.value = '';
    // Hide spinner when clearing the input
    spinner.style.display = 'none';

    clearButton.classList.add('displayNone');
    clearButton.classList.remove('displayBlock');
}