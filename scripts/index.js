const eventsURL = "https://striveschool-api.herokuapp.com/api/product/";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYjk5N2Y0YmQ0NzAwMTU4NWIxZTUiLCJpYXQiOjE3NjI1MDcxNTksImV4cCI6MTc2MzcxNjc1OX0.AFeaXx2HXx3EkDdiz0ZqCQ17pDc3dPvAVzh9lnWHKTU";

const getEvents = function () {
  fetch(eventsURL, {
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      console.log("RESPONSE", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(
          "Errore nella risposta ricevuta dal server: " + res.status
        );
      }
    })
    .then((arrayOfProducts) => {
      console.log("ARRAYOFEVENTS", arrayOfProducts);
      const row = document.getElementById("events-row");
      row.innerHTML = "";

      arrayOfProducts.forEach(function (product) {
        row.innerHTML +=
          '<div class="col">' +
          '<div class="card h-100 d-flex flex-column" role="button" onclick="window.location.href=\'./details.html?productId=' +
          product._id +
          "'\">" +
          '<img src="' +
          product.imageUrl +
          '" class="card-img-top" alt="' +
          product.name +
          '">' +
          '<div class="card-body flex-grow-1">' +
          '<h5 class="card-title">' +
          product.name +
          "</h5>" +
          '<p class="card-text">' +
          product.description +
          "</p>" +
          '<p class="card-text"><strong>' +
          product.brand +
          "</strong></p>" +
          '<p class="card-text">' +
          product.price +
          " €</p>" +
          "</div>" +
          '<div class="card-footer text-center">' +
          '<a href="./backoffice.html?productId=' +
          product._id +
          '" class="btn btn-warning">Modifica</a>' +
          "</div>" +
          "</div>" +
          "</div>";
      });
    })
    .catch((err) => {
      console.log("PROBLEMA", err);
    });
};

getEvents();
