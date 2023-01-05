function changeImage() {
    const Heading = document.getElementById("Heading");

    const image = document.getElementById("myImage");

    if (image.src.match("./images/bulboff.png")) {
      image.src = "./images/bulbon.png";
      document.body.style.backgroundColor = "black";
      Heading.style.color = "#f2fcff";
      Heading.innerText = "Touch Again to turn OFF the light.";
    } else {
      image.src = "./images/bulboff.png";
      document.body.style.backgroundColor = "white";
      Heading.style.color = "black";
      Heading.innerText = "Touch Again to turn ON the light.";
    }
  }