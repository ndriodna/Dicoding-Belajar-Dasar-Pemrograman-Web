// menampilkan scroll to top btn ketika scroll mencapai 500px
window.addEventListener("scroll", () => {
  let btnScroll = document.getElementById("btnFloat");
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollTop > 500) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
});

// menampilkan menu dropdown ketika klik btn hamburger
let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  let menu = document.getElementById("menuMobile");
  if (menu.style.display === "none") {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});
