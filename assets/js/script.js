
// const navigation = document.getElementById("nav");
// const menu = document.getElementById("menu");

// menu.addEventListener("click", () => {
//   navigation.style.setProperty("--childenNumber", navigation.children.length);
//   navigation.classList.toggle("active");
//   menu.classList.toggle("active");
// });



const navigation = document.getElementById("nav");
const menu = document.getElementById("menu");
const menuItems = navigation.querySelectorAll("li a"); // Dapatkan semua link di dalam menu

// Tambahkan event listener untuk setiap menu item
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    // Tutup navbar dengan delay (opsional)
    

    // Atau tutup navbar langsung (tanpa delay)
    navigation.classList.remove("active");
  });
});

// Event listener untuk menu utama (jika ingin)
menu.addEventListener("click", () => {
  // Hitung jumlah child element di dalam navigation (opsional)
  // const childCount = navigation.children.length;

  // Tampilkan jumlah child element di properti CSS `--childenNumber` (opsional)
  // navigation.style.setProperty("--childenNumber", childCount);

  // Toggle class "active" pada navigation dan menu
  navigation.classList.toggle("active");
  menu.classList.toggle("active");
});








window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    document.getElementById("my-navbar").classList.add("shadow");
  } else {
    document.getElementById("my-navbar").classList.remove("shadow");
  }
});

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}