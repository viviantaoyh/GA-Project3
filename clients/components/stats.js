const totalOwners = document.querySelector(".owners");
const totalStations = document.querySelector(".stations");

fetchOwners().then((res) => (totalOwners.innerHTML = res));
fetchStations().then((res) => (totalStations.innerHTML = res));
