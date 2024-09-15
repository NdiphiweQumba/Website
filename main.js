// Years of experience // 
let yr = document.querySelector(".years-exp");
const d = new Date();
let year = d.getFullYear();
yr.textContent = year - 2021;

let currentYear = document.querySelector(".currentYear");
currentYear = d;
