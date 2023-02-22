let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let continut = document.getElementById("continut");
  let newCard = document.createElement("div");
  newCard.classList = "card";
  newCard.innerText = continut.value;
  document.getElementsByClassName("cards")[0].appendChild(newCard);
  continut.value = "";
});
