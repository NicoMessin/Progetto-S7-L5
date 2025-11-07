const eventsURL = "https://striveschool-api.herokuapp.com/api/product/";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYjk5N2Y0YmQ0NzAwMTU4NWIxZTUiLCJpYXQiOjE3NjI1MDcxNTksImV4cCI6MTc2MzcxNjc1OX0.AFeaXx2HXx3EkDdiz0ZqCQ17pDc3dPvAVzh9lnWHKTU";

const urlParams = new URLSearchParams(location.search);
const id = urlParams.get("productId");

if (id) {
  fetch(eventsURL + id, {
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nella risposta del server: " + res.status);
      }
    })
    .then((data) => {
      
      document.getElementById("name").value = data.name;
      document.getElementById("brand").value = data.brand;
      document.getElementById("description").value = data.description;
      document.getElementById("price").value = data.price;
      document.getElementById("imageUrl").value = data.imageUrl;
    })
    .catch((err) => {
      console.log("Errore nel form:", err);
    
    });
}

const form = document.getElementById("event-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
const description = document.getElementById("description").value;
const brand = document.getElementById("brand").value;
const imageUrl = document.getElementById("imageUrl").value;
const price = document.getElementById("price").value;

const newProduct = {
  name: name,
  description: description,
  brand: brand,
  imageUrl: imageUrl,
  price: price
};

  let method;

if (id) {
  method = "PUT";
} else {
  method = "POST";
}

let finalUrl;

if (id) {
  finalUrl = eventsURL + id; 
} else {
  finalUrl = eventsURL; 
}

  fetch(finalUrl, {
  method: method, 
  body: JSON.stringify(newProduct), 
  headers: {
    "Content-Type": "application/json", 
    Authorization: token, 
  },
})
  .then((res) => {
    if (res.ok) {
      alert("Auto salvata con successo!");
     
      form.reset();
    } else {
      throw new Error("Errore nella risposta del server: " + res.status);
    }
  })
  .catch((err) => {
    console.log("PROBLEMA NEL SALVATAGGIO:", err);
  }) })


