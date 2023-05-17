document.addEventListener("DOMContentLoaded", function () {
  let table = new DataTable("#example", {
    ajax: function (d, cb) {
      fetch("../ajax/data/objects.txt")
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
