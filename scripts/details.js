const eventsURL = "https://striveschool-api.herokuapp.com/api/product/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYjk5N2Y0YmQ0NzAwMTU4NWIxZTUiLCJpYXQiOjE3NjI1MDcxNTksImV4cCI6MTc2MzcxNjc1OX0.AFeaXx2HXx3EkDdiz0ZqCQ17pDc3dPvAVzh9lnWHKTU";

const urlParams = new URLSearchParams(location.search);
const id = urlParams.get("productId");

if (id) {
  fetch(eventsURL + id, {
    headers: { Authorization: token },
  })
    .then(res => {
      if (!res.ok) throw new Error("Errore: " + res.status);
      return res.json();
    })
    .then(product => {
      document.getElementById("name").textContent = product.name;
      document.getElementById("brand").textContent = product.brand;
      document.getElementById("description").textContent = product.description;
      document.getElementById("price").textContent = product.price + " €";
      document.getElementById("imageUrl").src = product.imageUrl;
    })
    .catch(err => console.log("Errore nel caricamento :", err));
}

