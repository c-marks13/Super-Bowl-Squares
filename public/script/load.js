document.addEventListener("DOMContentLoaded", () => {
    populateYearDropdown();
    loadLogo();
    loadSquaresTable();
    loadTeamLogos();
    toggleWinnerButton();
});

function populateYearDropdown() {
    const selectElement = document.getElementById("year-filter-select");
    if (!selectElement) return;

    selectElement.innerHTML = "";

    yearsArray.forEach(year => {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        if (year === yearsArray[0]) option.selected = true; // Select the newest year
        selectElement.appendChild(option);
    });
}

function loadLogo() {
    const selectElement = document.getElementById("year-filter-select");
    const logoElement = document.getElementById("superbowl-logo");

    if (!selectElement || !logoElement) return;

    // Get the selected year or default to the most recent year
    const selectedYear = parseInt(selectElement.value) || Math.max(...yearsArray);

    // Update the logo src dynamically
    logoElement.src = `./static/super_bowl_logos/super_bowl_logo_${selectedYear}.webp`;
}

function loadTeamLogos() {
    const selectElement = document.getElementById("year-filter-select");
    const afcLogoElement = document.getElementById("afc-logo");
    const nfcLogoElement = document.getElementById("nfc-logo");

    if (!selectElement || !afcLogoElement || !nfcLogoElement) return;

    // Get the selected year or default to the first (most recent) year in teamsMap
    const selectedYear = parseInt(selectElement.value) || Object.keys(teamsMap)[0];

    // Get the team data for the selected year
    const teamData = teamsMap[selectedYear];

    if (teamData) {
        const afcTeam = teamData.AFC?.Team;
        const nfcTeam = teamData.NFC?.Team;

        if (afcTeam) afcLogoElement.src = `./static/team_logos/${afcTeam}_Logo.png`;
        if (nfcTeam) nfcLogoElement.src = `./static/team_logos/${nfcTeam}_Logo.png`;
    }
}

function loadSquaresTable() {
    const selectedYear = parseInt(document.getElementById("year-filter-select")?.value);
    if (!selectedYear) return;

    loadTopNumbers(selectedYear);
    loadLeftNumbersAndPeople(selectedYear);
}

// Function to update the top numbers row
function loadTopNumbers(selectedYear) {
    const topNumbersRow = document.getElementById("top-numbers");
    const topNumbers = topNumbersMap[selectedYear] || [];

    if (!topNumbersRow) return;

    topNumbersRow.innerHTML = `<td id="place-holder-cell">
        <img class="squares-logo" src="./static/squares-logo.png" alt="Super Bowl Squares Logo">
    </td>`; // Keep the logo cell

    topNumbers.forEach(num => {
        const cell = document.createElement("td");
        cell.style.background = "#" + teamsMap[selectedYear].NFC.Color; 
        cell.textContent = num;
        topNumbersRow.appendChild(cell);
    });
}

function loadLeftNumbersAndPeople(selectedYear) {
    const tableElement = document.querySelector(".super-bowl-squares");
    const squaresData = squaresDataMap[selectedYear];
    const leftNumbers = leftNumbersMap[selectedYear] || [];

    if (!tableElement || !squaresData) return;

    // Get all rows excluding the top numbers row
    const rows = tableElement.querySelectorAll("tr:not(#top-numbers)");

    rows.forEach((row, rowIndex) => {
        row.innerHTML = "";  // Clear the row

        // Create and insert the left-number cell
        const leftNumberCell = document.createElement("td");
        leftNumberCell.style.background = "#" + teamsMap[selectedYear].AFC.Color; 
        leftNumberCell.classList.add("left-number");
        leftNumberCell.textContent = leftNumbers[rowIndex] ?? ""; // Default to empty if not available
        row.appendChild(leftNumberCell);

        // Append the corresponding squares data cells
        squaresData[rowIndex].forEach((value, columnIndex ) => {
            const cell = document.createElement("td");

            if(value == 0){
                cell.textContent = columnIndex + '-' + rowIndex
            }
            else{
                cell.textContent = people[value].display;
            }
        
            cell.classList.add(columnIndex + "-" + rowIndex);
            row.appendChild(cell);
        });
    });
}

function toggleWinnerButton() {
    const selectElement = document.getElementById("year-filter-select");
    const showWinnerButton = document.getElementById("highlight-winners-container");

    if (!selectElement || !showWinnerButton) return;

    // Get the selected year or default to the most recent available year
    const selectedYear = parseInt(selectElement.value) || Math.max(...Object.keys(winningNumbers).map(Number));

    // Check if the selected year has winning numbers
    if (winningNumbers[selectedYear] && winningNumbers[selectedYear].length > 0) {
        showWinnerButton.style.display = "flex";
    } else {
        showWinnerButton.style.display = "none";
    }
}

