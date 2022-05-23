function bigImg(x) {
  x.style.width = "140px";
}
function normalImg(x) {
  x.style.width = "130px";
}

var typed = new Typed(".auto-type", {
  strings: ["Smart Styling", "Extra Comfort"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})

var x = document.getElementById("keyboard");
  document.getElementById("keyboard").addEventListener("click", function(){
    var audio = new Audio ('sound/002.wav');
    audio.play();
  })

var product = {
  brand: "New Balance 327",
  color: "Beige",
  cost: "28.990",
  currency: "KZT"
};
document.getElementById("demo").innerHTML = product.cost + product.currency;

var product = {
  brand: "Converse Chuck 70",
  color: "Dark moss",
  price: "18.900",
  currency: "KZT",
  cost : function() {
    return this.price + this.currency;
  }
};

function myLink() {
  document.getElementById("demon").innerHTML = "https://www.gq.com/story/best-sneaker-brands";
}


document.getElementById("conv").innerHTML = product.cost();

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
