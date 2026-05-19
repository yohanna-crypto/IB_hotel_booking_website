var singlePrice = 200;
var deluxePrice = 500;
var suitePrice = 1000;

var activeRoom = "";
var currentPrice = 0;

function changeRoom(room, type){

  var image;
  var price;
  var extras;

  if(room == "single"){

    image = document.getElementById("singleImg");
    price = document.getElementById("singlePrice");
    extras = document.getElementById("singleExtras");

    if(type == "single-basic"){

      image.src = "images/deluxeb.jpg";

      singlePrice = 200;

      price.innerHTML = "$200 / 26,000 ETB / night";

      extras.innerHTML =
      "<li>Free WiFi</li>" +
      "<li>Comfort Bed</li>" +
      "<li>City View</li>";
    }

    if(type == "single-premium"){

      image.src = "images/singlepr.jpg";

      singlePrice = 350;

      price.innerHTML = "$350 / 45,000 ETB / night";

      extras.innerHTML =
      "<li>King Bed</li>" +
      "<li>Premium View</li>" +
      "<li>Extra Comfort</li>";
    }
  }

  if(room == "deluxe"){

    image = document.getElementById("deluxeImg");
    price = document.getElementById("deluxePrice");
    extras = document.getElementById("deluxeExtras");

    if(type == "executive-deluxe"){

      image.src ="https://images.unsplash.com/photo-1618773928121-c32242e63f39";

      deluxePrice = 500;

      price.innerHTML = "$500 / 65,000 ETB / night";

      extras.innerHTML =
      "<li>Ocean View</li>" +
      "<li>Breakfast Included</li>" +
      "<li>Luxury Comfort</li>";
    }

    if(type == "family-deluxe"){

      image.src = "images/deluxef.jpg";

      deluxePrice = 650;

      price.innerHTML = "$650 / 84,500 ETB  / night";

      extras.innerHTML =
      "<li>Family Space</li>" +
      "<li>Two Beds</li>" +
      "<li>Free Breakfast</li>";
    }

    if(type == "deluxe-premium"){

      image.src = "images/deluxep.jpg";

      deluxePrice = 800;

      price.innerHTML = "$800 / 104,000 ETB / night";

      extras.innerHTML =
      "<li>Extra Space</li>" +
      "<li>Premium View</li>" +
      "<li>Luxury Upgrade</li>";
    }
  }

  if(room == "suite"){

    image = document.getElementById("suiteImg");
    price = document.getElementById("suitePrice");
    extras = document.getElementById("suiteExtras");

    if(type == "presidential-suite"){

      image.src = "images/suitep.jpg";

      suitePrice = 1000;

      price.innerHTML = "$1000 / 130,000 ETB / night";

      extras.innerHTML =
      "<li>Private Lounge</li>" +
      "<li>Butler Service</li>" +
      "<li>Luxury Suite</li>";
    }

    if(type == "residential-suite"){

      image.src = "images/suiter.jpg";

      suitePrice = 1500;

      price.innerHTML = "$1500 / 195,000 ETB / night";

      extras.innerHTML =
      "<li>Kitchen</li>" +
      "<li>Apartment Style</li>" +
      "<li>Long Stay Comfort</li>";
    }

    if(type == "honeymoon-suite"){

      image.src = "images/suiteh.jpg";

      suitePrice = 2000;

      price.innerHTML = "$2000 / 260,000 ETB / night";

      extras.innerHTML =
      "<li>Romantic Setup</li>" +
      "<li>Private Jacuzzi</li>" +
      "<li>Champagne Service</li>";
    }
  }
}

function openBooking(room){

  activeRoom = room;

  document.getElementById("bookingModal").style.display = "flex";

  if(room == "single"){
    currentPrice = singlePrice;
  }

  if(room == "deluxe"){
    currentPrice = deluxePrice;
  }

  if(room == "suite"){
    currentPrice = suitePrice;
  }

  document.getElementById("finalRoom").innerHTML =
  "Room: " + room;

  document.getElementById("finalPrice").innerHTML =
  "Price Per Night: $" + currentPrice;

  document.getElementById("checkIn").onchange = calculatePrice;
  document.getElementById("checkOut").onchange = calculatePrice;
}

function calculatePrice(){

  var checkIn = document.getElementById("checkIn").value;
  var checkOut = document.getElementById("checkOut").value;

  if(checkIn == "" || checkOut == ""){
    return;
  }

  var start = new Date(checkIn);
  var end = new Date(checkOut);

  var days = (end - start) / (1000 * 60 * 60 * 24);

  if(days < 0){
    days = 0;
  }

  var total = days * currentPrice;

  var birrRate = 130;
  var totalBirr = total * birrRate;

  document.getElementById("nights").innerHTML = days;

  document.getElementById("totalPrice").innerHTML =
    "$" + total + " / " + totalBirr.toLocaleString() + " ETB";
}

function closeBooking(){

  document.getElementById("bookingModal").style.display = "none";
}

function confirmBooking(){

  var method = document.getElementById("paymentMethod").value;
  var card = document.getElementById("cardNumber").value;
  var expiry = document.getElementById("expiry").value;
  var cvv = document.getElementById("cvv").value;

  if(method == "" || card == "" || expiry == "" || cvv == ""){

    alert("Please fill all payment details");
    return;
  }

  if(card.length != 16){

    alert("Card number must be 16 digits");
    return;
  }

  if(cvv.length < 3){

    alert("Invalid CVV");
    return;
  }

  alert("Booking Successful! Welcome to Ivory Bay");

  closeBooking();
}

function goBack() {
window.history.back();
}