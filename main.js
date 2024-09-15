// Years of experience // 
let yr = document.querySelector(".years-exp");
const d = new Date();
let currentYear = d.getFullYear();
yr.textContent = currentYear - 2021;

// Current year. footer
let footerYear = document.querySelector(".currentYear");
footerYear.textContent = currentYear;
