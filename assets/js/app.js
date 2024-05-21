const parentImage = document.querySelector(".slider-image-parent");
const childImages = document.querySelectorAll(".slider-image-child");
const slideName = document.querySelector(".room-name");
const filterForm = document.querySelector(".filter");
const checkIn = document.querySelector("#checkIn");
const checkOut = document.querySelector("#checkOut");
const inRequired = document.querySelector("#reqIn");
const OutRequired = document.querySelector("#reqOut");
function changeSlider(img) {
  parentImage.src = img;
  childImages.forEach((image, i) => {
    if (image.src.includes(img)) {
      image.classList.add("active");
      switch (i) {
        case 0:
          slideName.innerHTML = "Living Room";
          break;

        case 1:
          slideName.innerHTML = "Dining Room";
          break;
        case 2:
          slideName.innerHTML = "Bedroom";
          break;
        case 3:
          slideName.innerHTML = "Living Room II ";
          break;
      }
    } else {
      image.classList.remove("active");
    }
  });
}

filterForm.addEventListener("submit", (e) => {
  if (checkIn.value.trim() == "" && checkOut.value.trim() == "") {
    inRequired.className = "required";
    OutRequired.className = "required";
  } else if (checkIn.value.trim() == "") {
    inRequired.className = "required";
  } else if (checkOut.value.trim() == "") {
    OutRequired.className = "required";
  } else {
    OutRequired.className = "d-none";
    checkOut.value = "";
    inRequired.className = "d-none";
    checkIn.value = "";
  }

  e.preventDefault();
});
