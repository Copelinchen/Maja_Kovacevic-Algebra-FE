'use strict';

const input = document.querySelector(`#itunes-input`);
const list = document.querySelector(`#results`);

const handleSearch = () => {
  const nameInput = input.value;
  console.log(nameInput);

  const url = `https://itunes.apple.com/search?term=${nameInput}&entity=song`;

  const request = new XMLHttpRequest();
  request.open(`GET`, url, true);
  request.onload = () => {
    if (request.status === 200 && nameInput.length > 2) {
      const responseObject = JSON.parse(request.response);
      const allResults = responseObject.results;

      for (let i = 0; i < allResults.length; i++) {
        const songName = responseObject.results[i].trackName;
        const newList = document.createElement(`li`);
        newList.innerText = songName;
        list.appendChild(newList);
      }
    } else {
      return;
    }
  };
  request.send();
};

input.addEventListener(`input`, handleSearch);