document.addEventListener("DOMContentLoaded", function () {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  let table = new DataTable("#example", {
    ajax: function (d, cb) {
      fetch("https://moviesdatabase.p.rapidapi.com/titles", options)
        .then((response) => response.json())
        .then((data) => cb(data));
    },
    columns: [
      { data: "name" },
      { data: "position" },
      { data: "office" },
      { data: "extn" },
      { data: "start_date" },
      { data: "salary" },
    ],
  });
});
