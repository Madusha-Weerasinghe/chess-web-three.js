// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 8;
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Set alpha to true for transparency
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0); // Set clearAlpha to 0 for transparent background
document.body.appendChild(renderer.domElement);

// Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(10, 10, 10);
directionalLight.castShadow = true;
scene.add(directionalLight);

// Create a loader for GLTF files
const loader = new THREE.GLTFLoader();

// Create model group for the first model
const modelGroup1 = new THREE.Group();
modelGroup1.position.set(-7, 1.5, 0); // Initial position for the first model

let modelGroup2; // Declare modelGroup2 variable to make it accessible in the loadSecondModel function

// Load the first model
loader.load(
    "chesspeices/scene.gltf",
    function (gltf) {
        const root = gltf.scene;
        root.scale.set(1.3, 1.3, 1.3);
        modelGroup1.add(root);
        scene.add(modelGroup1); // Add the first model group to the scene

        // Start the animation after loading the first model
        animateUpDown();
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

// Function to load and position the second model
function loadSecondModel() {
    // Create model group for the second model
    modelGroup2 = new THREE.Group();
    modelGroup2.position.set(-7, 0, 0); // Initial position for the second model

    // Load the second model
    loader.load(
        "pinkring/scene.gltf",
        function (gltf) {
            const root = gltf.scene;
            root.scale.set(0.3, 0.5, 0.3);
            modelGroup2.add(root);
            scene.add(modelGroup2); // Add the second model group to the scene
        },
        undefined,
        function (error) {
            console.error(error);
        }
    );
}



// Function to animate the model up and down
function animateUpDown() {
    let upDownDirection = 1; // Initial direction of movement (1 for up, -1 for down)
    let upDownSpeed = 0.01; // Speed of movement

    // Animate the model
    function animate() {
        requestAnimationFrame(animate);

        // Move the model up and down along the y-axis
        modelGroup1.position.y += upDownDirection * upDownSpeed; // Adjust model speed and direction here

        // Check if the model reaches the upper or lower limit, and change direction accordingly
        if (modelGroup1.position.y >= 1.9 || modelGroup1.position.y <= 0.9) {
            upDownDirection *= -1; // Change direction
        }

        renderer.render(scene, camera);
    }

    // Start the animation
    animate();

    // Load and position the second model after starting the animation
    loadSecondModel();
}

// Function to animate the scene
function animate() {
    requestAnimationFrame(animate);

    // Rotate the first model around the y-axis if rotation is enabled
    if (rotationEnabled && modelGroup1) {
        modelGroup1.rotation.y += 0.006; // Adjust rotation speed here
    }

    // Rotate the second model around the y-axis if rotation is enabled
    if (rotationEnabled && modelGroup2) {
        modelGroup2.rotation.y += 0.006; // Adjust rotation speed here
    }

    renderer.render(scene, camera);
}

// Flag to indicate if rotation is enabled
let rotationEnabled = false;

// Event listener for mouse enter event on Button 1
document.getElementById("button1").addEventListener("mouseenter", function () {
    rotationEnabled = true; // Enable rotation
});

// Event listener for mouse leave event on Button 1
document.getElementById("button1").addEventListener("mouseleave", function () {
    rotationEnabled = false; // Disable rotation
});

// Start the animation
animate();
