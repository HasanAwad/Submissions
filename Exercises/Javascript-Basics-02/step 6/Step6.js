function mouseOver() {
  document.querySelector("#image1").addEventListener("mouseover", e => {
    document.querySelector("#image1").src = "images/image1_2.jpg";
  });
  document.querySelector("#image2").addEventListener("mouseover", e => {
    document.querySelector("#image2").src = "images/image2_2.jpg";
  });
  document.querySelector("#image3").addEventListener("mouseover", e => {
    document.querySelector("#image3").src = "images/image3_2.jpg";
  });
  document.querySelector("#image4").addEventListener("mouseover", e => {
    document.querySelector("#image4").src = "images/image4_2.jpg";
  });
  document.querySelector("#image5").addEventListener("mouseover", e => {
    document.querySelector("#image5").src = "images/image5_2.jpg";
  });

  document.querySelector("#image1").addEventListener("mouseleave", e => {
    document.querySelector("#image1").src = "images/image1.jpg";
  });
  document.querySelector("#image2").addEventListener("mouseleave", e => {
    document.querySelector("#image2").src = "images/image2.jpg";
  });
  document.querySelector("#image3").addEventListener("mouseleave", e => {
    document.querySelector("#image3").src = "images/image3.jpg";
  });
  document.querySelector("#image4").addEventListener("mouseleave", e => {
    document.querySelector("#image4").src = "images/image4.jpg";
  });
  document.querySelector("#image5").addEventListener("mouseleave", e => {
    document.querySelector("#image5").src = "images/image5.jpg";
  });
}

mouseOver();
