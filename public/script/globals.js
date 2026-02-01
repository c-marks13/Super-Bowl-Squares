const yearsArray = [2025, 2024];

//------------------- WINNING NUMBERS -------------------
// [NFC, AFC]
const winningNumbers = {
    2024: [[0,0], [0,3], [0,3], [2,5]]
}
//-------------------------------------------------------


//------------------- TEAM DATA -------------------
const AFC2024 = {Team: 'Chiefs', Color: 'e31837'};
const NFC2024 = {Team: '49ers', Color: 'c3a166'};

const AFC2025 = {Team: 'Chiefs', Color: 'e31837'};
const NFC2025 = {Team: 'Eagles', Color: '004650'};

const teamsMap = {
    2024: {AFC: AFC2024, NFC: NFC2024},
    2025: {AFC: AFC2025, NFC: NFC2025}
};
//-------------------------------------------------


//------------------- GRID NUMBERS -------------------
const tempNumbersArray = ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']

const topNumbersMap = {
    2024: [7, 3, 5, 1, 6, 2, 0, 9, 4, 8],
    2025: [8, 6, 3, 4, 2, 7, 9, 0, 1, 5]
};

const leftNumbersMap = {
    2024: [0, 3, 6, 8, 9, 2, 1, 7, 5, 4],
    2025: [1, 4, 7, 5, 6, 3, 8, 0, 2, 9]
};
//----------------------------------------------------


//------------------- GRID NAMES DATA -------------------
const squares2024 = [
    ["Frey", "EP", "Lez", "Emma", "Joe Zak", "Gerg", "Trey", "Jacki Marks", "Karen Willer", "Con"],
    ["Petrie", "JJ", "Jacki Marks", "Chuck", "Kip & Nell", "Levi", "Emma", "Drew Schling", "Joe Zak", "Beef"],
    ["Zenz", "Will Schling", "Aliza", "cdog", "Logan", "Petrie", "Zach Chives", "EP", "Bergdahl", "Jon Marks"],
    ["Beef", "Jessel", "Con", "Bergdahl", "Tate", "Lez", "Chuck", "Mathew Willer", "Turk", "Max Murr"],
    ["cdog", "Kylee", "Frey", "Gerg", "Trey", "Alex Russo", "Zenz", "Zach Chives", "Will Schling", "Kip & Nell"],
    ["Kole", "Drew Schling", "Zach Chives", "Will Schling", "Jessel", "Con", "Alex Russo", "Joe Zak", "Aliza", "Drew Schling"],
    ["EP", "Beef", "Jon Marks", "Lez", "Max Murr", "Frey", "cdog", "Alex Russo", "Becker", "Jackson"],
    ["Bergdahl", "Mathew Willer", "Petrie", "Kylee", "Chuck", "Jackson", "Levi", "Con", "Alex Russo", "cdog"],
    ["Jim Willer", "Zach Chives", "Logan", "Levi", "Beef", "Jessel", "Sara", "Will Schling", "Petrie", "Tate"],
    ["Levi", "Chuck", "Joe Zak", "Kip & Nell", "Drew Schling", "Bergdahl", "Lez", "Jessel", "Frey", "Gerg"]
];

const squares2025 = [
    ['Hayes', 'Chives', 'Drew', 'Frey', 'Russo', 'Welsh', 'Russo', 'Emma', 'Con', 'Chuck'],
    ['Levi', 'Petrie', 'Emma', 'Drew', 'Beef', 'Jon', 'Jessel', 'Chowder', 'Schling', 'Russo'],
    ['Marcus', 'Welsh', 'Chuck', 'Murr', 'Cdog', 'Emma', 'Russo', 'Janelle', 'Kylee', 'Kennedy'],
    ['EP', 'Jessel', 'Jacki', 'Chowder', 'Hayes', 'Con', 'Schling', 'Beef', 'Trey', 'Petrie'],
    ['Schling', 'Tate', 'Mitch', 'Kennedy', 'Levi', 'Cdog', 'Trey', 'Chives', 'Jacki', 'Marcus'],
    ['Grandma Mickey', 'Beef', 'Trey', 'Max B', 'Petrie', 'Kip', 'Frey', 'Mathew', 'EP', 'Drew'],
    ['Cdog', 'Hayes', 'Chives', 'Bryce M', 'Chuck', 'Kennedy', 'Chowder', 'Marcus', 'Levi', 'Jay'],
    ['Petrie', 'Con', 'Levi', 'Kip', 'Jessel', 'Schling', 'Welsh', 'Hayes', 'Cdog', 'Tate'],
    ['Chowder', 'Chuck', 'Marcus', 'Con', 'Frey', 'Jessel', 'Janelle', 'Grandma Mickey', 'Chives', 'Mitch'],
    ['Jon', 'Kennedy', 'Frey', 'Kylee', 'Drew', 'Trey', 'EP', 'Murr', 'Beef', 'Welsh']
];

// const tempSquareArray = [
//     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
//     [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
//     [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
//     [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
//     [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
//     [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
//     [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
//     [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
//     [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
// ];

const squaresDataMap = {
    2024: squares2024,
    2025: squares2025
};
//-------------------------------------------------------
