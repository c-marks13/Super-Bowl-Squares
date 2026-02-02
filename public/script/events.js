let currentYear = 2025;

function changeYear(){
    currentYear = Number(document.getElementById("year-filter-select").value);

    loadLogo();
    loadSquaresTable();
    loadTeamLogos();
    toggleWinnerButton();
    
    clearTextSearch();
    highlightWinners(false);
}

function toggleSearchBar() {
    const searchRow = document.getElementById("search-row-outer");
    const openSearch = document.getElementById("open-search");
    const closeSearch = document.getElementById("close-search");
    const searchToggleButton = document.getElementById("search-toggle-btn");

    if (!searchRow) return;

    const isOpen = searchRow.classList.toggle("is-open");

    openSearch.style.display = isOpen ? "none" : "block";
    closeSearch.style.display = isOpen ? "block" : "none";

    searchToggleButton.classList.toggle("blue-search", !isOpen);
    searchToggleButton.classList.toggle("red-search", isOpen);
}


function checkForWinners(checkbox){
    if (checkbox.checked) {
        clearTextSearch();
        highlightWinners(true);
    } else {
        highlightWinners(false);
    }
}


function highlightWinners(highlight){
    for(let i = 0; i < 4; i++){
        const winningNumberNFC = winningNumbers[currentYear][i][0];
        const winningNumberAFC = winningNumbers[currentYear][i][1];

        const topNumberCordinate = topNumbersMap[currentYear].indexOf(winningNumberNFC);
        const leftNumberCordinate = leftNumbersMap[currentYear].indexOf(winningNumberAFC);

        const cordinates = topNumberCordinate + '-' + leftNumberCordinate;
        const winners = document.getElementsByClassName(cordinates);

        if (!winners || !winners[0]) continue;

        if(highlight){
            winners[0].classList.add('winner-q' + (i + 1));

            let existingQuarterWon = winners[0].querySelector('.quarter-won');
            if (existingQuarterWon) {
                let currentText = existingQuarterWon.textContent.replace(/[()]/g, '');
                currentText += ', Q' + (i + 1);
                existingQuarterWon.textContent = `(${currentText})`;
            } else {
                const quarterWonDiv = document.createElement('div');
                quarterWonDiv.classList.add('quarter-won');
                quarterWonDiv.style.fontSize = '11px';
                quarterWonDiv.textContent = `(Q${i + 1})`;
                winners[0].appendChild(quarterWonDiv);
            }
        }
        else{
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