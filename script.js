const API_KEY = "ad9b6781c7msh439ad2ae1d334fdp160f2cjsnb01ccb98a631";

async function getMovies(page = 1) {
  const url = `https://moviesdatabase.p.rapidapi.com/titles?page=${page}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  try {
    startLoadingMovies();
    const response = await fetch(url, options);
    const result = await response.json();
    return await result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function populateMovies(page = 1) {
  const movies = await getMovies(page);
  const content = movies.results.map((movie) => {
    return `<div class='movie'>
                <img src='${
                  movie.primaryImage ? movie.primaryImage.url : ""
                }' />
                <h1>${movie.titleText.text}</h1>
                <p>${movie.releaseYear.year}
                </p>
            </div>`;
  });
  console.log(content);
  document.getElementById("movies").innerHTML = content;
}

function startLoadingMovies() {
  document.getElementById("movies").innerHTML = "<div class='loader'></div>";
}

document.getElementById("page").addEventListener("change", (event) => {
  populateMovies(event.target.value);
});

document.getElementById("next").addEventListener("click", (event) => {
  const page = document.getElementById("page");
  page.value = parseInt(page.value) + 1;
  populateMovies(page.value);
});

document.getElementById("previous").addEventListener("click", (event) => {
  const page = document.getElementById("page");
  page.value = parseInt(page.value) - 1;
  populateMovies(page.value);
});

populateMovies(document.getElementById("page").value);
