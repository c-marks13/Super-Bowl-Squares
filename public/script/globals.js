const yearsArray = [2026, 2025, 2024];

//------------------- WINNING NUMBERS -------------------
// [NFC, AFC]
const winningNumbers = {
    2024: [[0,0], [0,3], [0,3], [2,5]],
    2025: [[7,0], [4,0], [4,6], [0,2]]
}
//-------------------------------------------------------

//------------------- PEOPLE -------------------
const people = {
    0:  { firstName: "Place", lastName: "Holder", display: "OPEN" },
    1:  { firstName: "Connor", lastName: "Frey", display: "Frey" },
    2:  { firstName: "Eric", lastName: "Peterson", display: "EP" },
    3:  { firstName: "Beef", lastName: "Friend", display: "Lez" },
    4:  { firstName: "Emma", lastName: "Marks", display: "Emma" },
    5:  { firstName: "Joe", lastName: "Zak", display: "Joe Zak" },
    6:  { firstName: "Charlie", lastName: "Gergens", display: "Gerg" },
    7:  { firstName: "Trey", lastName: "Hensler", display: "Trey" },
    8:  { firstName: "Jacki", lastName: "Marks", display: "Jacki" },
    9:  { firstName: "Karen", lastName: "Willer", display: "Karen Willer" },
    10: { firstName: "Connor", lastName: "Marks", display: "Con" },
    11: { firstName: "Brandon", lastName: "Petrie", display: "Petrie" },
    12: { firstName: "Andrew", lastName: "Johnson", display: "JJ" },
    13: { firstName: "Chuck", lastName: "Willer", display: "Chuck" },
    14: { firstName: "Kip", lastName: "Forsthoffer", display: "Kip" },
    15: { firstName: "Levi", lastName: "Zak", display: "Levi" },
    16: { firstName: "Drew", lastName: "Schling", display: "Drew Schling" },
    17: { firstName: "Andrew", lastName: "Johnson", display: "Beef" },
    18: { firstName: "Brandon", lastName: "Zenz", display: "Zenz" },
    19: { firstName: "Schling", lastName: "Schling", display: "Will Schling" },
    20: { firstName: "Aliza", lastName: "Reinhardt", display: "Aliza" },
    21: { firstName: "Casey", lastName: "Mollenhauer", display: "cdog" },
    22: { firstName: "Beef", lastName: "Friend", display: "Logan" },
    23: { firstName: "Zach", lastName: "Chives", display: "Chives" },
    24: { firstName: "Carter", lastName: "Bergdahl", display: "Bergdahl" },
    25: { firstName: "Jon", lastName: "Marks", display: "Jonnny" },
    26: { firstName: "Jacob", lastName: "Jessel", display: "Jessel" },
    27: { firstName: "Tate", lastName: "Miller", display: "Tate" },
    28: { firstName: "Mathew", lastName: "Willer", display: "Mathew Willer"},
    29: { firstName: "Beef", lastName: "Friend", display: "Turk" },
    30: { firstName: "Max", lastName: "Murray", display: "Murr" },
    31: { firstName: "Kylee", lastName: "Miller", display: "Kylee" },
    32: { firstName: "Alex", lastName: "Russo", display: "Russo" },
    33: { firstName: "Kole", lastName: "Forsthoffer", display: "Kole" },
    34: { firstName: "Jordan", lastName: "Becker", display: "Becker" },
    35: { firstName: "Jackson", lastName: "Welsh", display: "Welsh" },
    36: { firstName: "Sara", lastName: "Forsthoffer", display: "Sara F" },
    37: { firstName: "Jim", lastName: "Willer", display: "Jim Willer" },
    38: { firstName: "Hayes", lastName: "Weiner", display: "Hayes" },
    39: { firstName: "Marcus", lastName: "Hensler", display: "Marcus" },
    40: { firstName: "Kennedy", lastName: "Chives", display: "Kennedy" },
    41: { firstName: "Janelle", lastName: "Forsthoffer", display: "Janelle" },
    42: { firstName: "Michele", lastName: "Unger", display: "Grandma Mickey" },
    43: { firstName: "Mitch", lastName: "Moeller", display: "Mitch Mo" },
    44: { firstName: "Jay", lastName: "Luckow", display: "Jay" },
    45: { firstName: "Max", lastName: "B", display: "Max B" },
    46: { firstName: "Bryce", lastName: "M", display: "Bryce M" }
};
//-------------------------------------------------------


//------------------- TEAM DATA -------------------
const AFC2024 = {Team: 'Chiefs', Color: 'e31837'};
const NFC2024 = {Team: '49ers', Color: 'c3a166'};

const AFC2025 = {Team: 'Chiefs', Color: 'e31837'};
const NFC2025 = {Team: 'Eagles', Color: '004650'};

const AFC2026 = {Team: 'Patriots', Color: 'c8102e'};
const NFC2026 = {Team: 'Seahawks', Color: '55a318'};

const teamsMap = {
    2024: {AFC: AFC2024, NFC: NFC2024},
    2025: {AFC: AFC2025, NFC: NFC2025},
    2026: {AFC: AFC2026, NFC: NFC2026},
};
//-------------------------------------------------


//------------------- GRID NUMBERS -------------------
const tempNumbersArray = ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#']

const topNumbersMap = {
    2024: [7, 3, 5, 1, 6, 2, 0, 9, 4, 8],
    2025: [8, 6, 3, 4, 2, 7, 9, 0, 1, 5],
    2026: tempNumbersArray
};

const leftNumbersMap = {
    2024: [0, 3, 6, 8, 9, 2, 1, 7, 5, 4],
    2025: [1, 4, 7, 5, 6, 3, 8, 0, 2, 9],
    2026: tempNumbersArray
};
//----------------------------------------------------


//------------------- GRID NAMES DATA -------------------
const squares2024 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 8, 13, 14, 15, 4, 16, 5, 17],
    [18, 19, 20, 21, 22, 11, 23, 2, 24, 25],
    [17, 26, 10, 24, 27, 3, 13, 28, 29, 30],
    [21, 31, 1, 6, 7, 32, 18, 23, 19, 14],
    [33, 16, 23, 19, 26, 10, 32, 5, 20, 16],
    [2, 17, 25, 3, 30, 1, 21, 32, 34, 35],
    [24, 28, 11, 31, 13, 35, 15, 10, 32, 21],
    [37, 23, 22, 15, 17, 26, 36, 19, 11, 27],
    [15, 13, 5, 14, 16, 24, 3, 26, 1, 6]
];

const squares2025 = [
    [38, 23, 16, 1, 32, 35, 32, 4, 10, 13],
    [15, 11, 4, 16, 17, 25, 26, 24, 19, 32],
    [39, 35, 13, 30, 21, 4, 32, 41, 31, 40],
    [2, 26, 8, 24, 38, 10, 19, 17, 7, 11],
    [19, 27, 43, 40, 15, 21, 7, 23, 8, 39],
    [42, 17, 7, 45, 11, 14, 1, 28, 2, 16],
    [21, 38, 23, 46, 13, 40, 24, 39, 15, 44],
    [11, 10, 15, 14, 26, 19, 35, 38, 21, 27],
    [24, 13, 39, 10, 1, 26, 41, 42, 23, 43],
    [25, 40, 1, 31, 16, 7, 2, 30, 17, 35]
];

const squares2026 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// const tempSquareArray = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];

const squaresDataMap = {
    2024: squares2024,
    2025: squares2025,
    2026: squares2026
};
//-------------------------------------------------------
