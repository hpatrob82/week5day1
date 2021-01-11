'use strict';

console.log('Scripts Loaded');

const generateMadlib = document.querySelector('#generateMadlib');
// Event Listener
generateMadlib.addEventListener('submit', function(event) {
    event.preventDefault();
    // Event function
    const inputSelectors = document.querySelectorAll("input");
    const nounResponse = document.querySelector("#nounResponse");
    const adjectiveResponse = document.querySelector("#adjectiveResponse");
    const anotherNounResponse = document.querySelector("#anotherNounResponse");
    const placeResponse = document.querySelector("#placeResponse");
    inputSelectors.forEach(function(inputItem) {

        if (inputItem.name === "noun") {
            nounResponse.innerHTML = inputItem.value;
        }
        if (inputItem.name === "adjective") {
            adjectiveResponse.innerHTML = inputItem.value;

        }

        if (inputItem.name === "anotherNoun") {
            anotherNounResponse.innerHTML = inputItem.value;

        }
        if (inputItem.name === "place") {
            placeResponse.innerHTML = inputItem.value;
        }
    });
})