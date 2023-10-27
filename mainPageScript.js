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
  