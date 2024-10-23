/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { isString, splitOnWhitespace } from "./lib/helpers.js";
import { consonants } from "./lib/consonants.js";
import { longest } from "./lib/longest.js";
import { palindrome } from "./lib/palindrome.js";
import { reverse } from "./lib/reverse.js";
import { shortest } from "./lib/shortest.js";
import { vowels } from "./lib/vowels.js";

const test = isString("hæ");
console.log("test er strengur?", test);

const stringWithWhitespace = `halló
\theimur
hæ`;
const split = splitOnWhitespace(stringWithWhitespace);
console.log(split);

const textAreaElement = document.querySelector("textarea");
const formElement = document.querySelector("form");

function submitHandler(ev) {
  ev.preventDefault();
  const { target } = ev;
  const textAreaElement = target.querySelector("textarea");
  const outputElement = document.querySelector(".output");

  const inputString = textAreaElement.value.trim();
  if (!isString(inputString)) {
    outputElement.classList.add("hidden");
    console.log("Input string is invalid");
    return;
  }

  if (inputString === "") {
    outputElement.classList.add("hidden");
    console.log("Input string is empty");
    return;
  }

  const words = splitOnWhitespace(inputString).join(" ");

  outputElement.querySelector(".input").textContent = inputString;
  outputElement.querySelector(".consonants").textContent = consonants(words);
  outputElement.querySelector(".longest").textContent = longest(words);
  outputElement.querySelector(".palindrome").textContent = palindrome(words)
    ? ""
    : "ekki";
  outputElement.querySelector(".reversed").textContent = reverse(words);
  outputElement.querySelector(".shortest").textContent = shortest(words);
  outputElement.querySelector(".vowels").textContent = vowels(words);

  outputElement.classList.remove("hidden");
}

function resethandler() {
  const outputElement = document.querySelector(".output");
  outputElement.classList.add("hidden");
}

formElement.addEventListener("submit", submitHandler);
formElement.addEventListener("reset", resethandler);
textAreaElement.addEventListener("input", () => {
  submitHandler({ preventDefault: () => {}, target: formElement });
});
