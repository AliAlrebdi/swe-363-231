document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.thecatapi.com/v1/images/search?limit=1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.forEach((image) => {
          const liElement = document.createElement("li");
          const ulCatList = document.getElementById("catList"); // No "#" symbol
  
          const imgElement = document.createElement("img");
          imgElement.src = image.url;
  
          liElement.appendChild(imgElement);
          ulCatList.appendChild(liElement);
        });
      })
      .catch((error) => console.log(error));
  });
  