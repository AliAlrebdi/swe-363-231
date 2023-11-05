

document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.thecatapi.com/v1/images/search?limit=1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.forEach((image) => {
          const liElement = document.createElement("li");
          const ulCatList = document.getElementById("catList"); 
  
          const imgElement = document.createElement("img");
          imgElement.src = image.url;
  
          liElement.appendChild(imgElement);
          ulCatList.appendChild(liElement);
        });
      })
      .catch((error) => console.log(error));
  });
  
  // I have already done most of exercise 2 and it is implemented in many of my functions in here
  const canvas = document.getElementById('screensaver');
  const content = document.getElementById('content');
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0); 
  
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  
  camera.position.z = 5;
  
  const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
  };
  
  let screensaverActive = false;
  let timeoutId;
  
  const startScreensaver = () => {
      content.style.display = 'none';
      canvas.style.display = 'block';
      screensaverActive = true;
      animate();
  };
  
  const hideScreensaver = () => {
      if (screensaverActive) {
          content.style.display = 'block';
          canvas.style.display = 'none';
          screensaverActive = false;
          cancelAnimationFrame(animate);
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(startScreensaver, 60000);
  };
  
  hideScreensaver(); 
  
  document.addEventListener('mousemove', hideScreensaver);
  document.addEventListener('keydown', hideScreensaver);
  

class blogPost {

    image;
    date;
    title;
    description;

    constructor(image, date, title, description) {
        this.image = image;
        this.date = date;
        this.title = title;
        this.description = description;
    }

    createHtml() {
        const post = document.createElement("aside");

        post.innerHTML = `
            <!-- The picture of the post -->
            <div id="pic">
                <img src="${this.image}" 
        alt="A picture of me" width = 500 height= "250">
            </div>
            
            
            <!-- The date and description of the post -->
            <div id="lowerPart">
                <div id="date">
                    <p>${this.date}</p>
            </div>

            <div id="first_entry">
                <p>${this.title}</p>
            </div>
            <div id="first_entry_desc">
                <p>${this.description}
                </p>
            </div>
        </div>
        `;
        return post;
    }

    createHtml2() {
        const post = document.createElement("section");

        post.innerHTML = `
        <!-- The picture of the post -->
        <div id = 'pic2'>
            <img src="${this.image}" width="300">
        </div>
        
        <!-- The date and description of the post -->
        <div id="date2">
            <p>${this.date}</p>
        </div>

        <div id="second_entry">
            <p>${this.title}</p>
        </div>

        <div id="second_entry_desc">
        <p>${this.description}</p>
        </div>
        `;
    }

    
  }

const firstPost = new blogPost(
    "b32fe114-6924-492a-83cf-321abb58c435.jpeg", 
    "Tuesday, 3 Oct 2023", 
    "First Post on my Blog!", 
    "The start of the course was quite exciting but after digging deeper in the course things statred to get challenging"
    );

const secondPost = new blogPost(
    "project-management-software-in-mother-tongue.png",
    "Monday, 2 Oct 2023",
    "Trial Positioning",
    "This is the solution for exercise 1 in CSS4"
);

const container = document.getElementById('bigContainer');
const container2 = document.getElementById('bigContainer');

container.appendChild(firstPost.createHtml())
container2.appendChild(secondPost.createHtml())

