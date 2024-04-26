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
modelGroup1.position.set(-7, 0.5, 0); // Initial position for the first model

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
    modelGroup2.position.set(-6.95, -1, 0); // Initial position for the second model

    // Load the second model
    loader.load(
        "whitering/scene.gltf",
        function (gltf) {
            const root = gltf.scene;
            root.scale.set(1, 1, 1);
            modelGroup2.add(root);
            scene.add(modelGroup2); // Add the second model group to the scene

            const mixer = new THREE.AnimationMixer(model);
                gltf.animations.forEach((clip) => {
                    mixer.clipAction(clip).play();
                });

        },
        undefined,
        function (error) {
            console.error(error);
        }
    );
}


const modelGroup3 = new THREE.Group();
modelGroup3.position.set(0, -0.5, 0); // Initial position for the first model

let modelGroup4; // Declare modelGroup2 variable to make it accessible in the loadSecondModel function

// Load the third model
loader.load(
    "homeboard/scene.gltf",
    function (gltf) {
        const root = gltf.scene;
        root.scale.set(7.3, 7.3, 7.3);
        modelGroup3.add(root);
        scene.add(modelGroup3); // Add the first model group to the scene

        // Start the animation after loading the first model
        animateUpDown();
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

// Function to load and position the second model
function loadfourthModel() {
    // Create model group for the second model
    modelGroup4 = new THREE.Group();
    modelGroup4.position.set(0, -1, 0); // Initial position for the second model

    // Load the second model
    loader.load(
        "whitering/scene.gltf",
        function (gltf) {
            const root = gltf.scene;
            root.scale.set(1.5, 1, 1.5);
            modelGroup4.add(root);
            scene.add(modelGroup4); // Add the second model group to the scene

            const mixer = new THREE.AnimationMixer(model);
                gltf.animations.forEach((clip) => {
                    mixer.clipAction(clip).play();
                });
                
        },
        undefined,
        function (error) {
            console.error(error);
        }
    );
}



const modelGroup5 = new THREE.Group();
modelGroup5.position.set(7, 0.5, 0); // Initial position for the first model

let modelGroup6; // Declare modelGroup2 variable to make it accessible in the loadSecondModel function

// Load the first model
loader.load(
    "rulesbook2/scene.gltf",
    function (gltf) {
        const root = gltf.scene;
        root.scale.set(3, 3, 3);
        modelGroup5.add(root);
        scene.add(modelGroup5); // Add the first model group to the scene

        // Start the animation after loading the first model
        animateUpDown();
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

// Function to load and position the second model
function loadfifthModel() {
    // Create model group for the second model
    modelGroup6 = new THREE.Group();
    modelGroup6.position.set(7, -1, 0); // Initial position for the second model

    // Load the second model
    loader.load(
        "whitering/scene.gltf",
        function (gltf) {
            const root = gltf.scene;
            root.scale.set(1, 1, 1);
            modelGroup6.add(root);
            scene.add(modelGroup6); // Add the second model group to the scene

            const mixer = new THREE.AnimationMixer(model);
                gltf.animations.forEach((clip) => {
                    mixer.clipAction(clip).play();
                });
                
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
    let upDownSpeed = 0.02; // Speed of movement

    let upDownDirection1 = 1; // Initial direction of movement (1 for up, -1 for down)
    let upDownSpeed1 = 0.02;

    let upDownDirection2 = 1; // Initial direction of movement (1 for up, -1 for down)
    let upDownSpeed2 = 0.02;

    // Animate the model
    function animate() {
        requestAnimationFrame(animate);

        // Move the model up and down along the y-axis
        modelGroup1.position.y += upDownDirection * upDownSpeed; 
        modelGroup3.position.y += upDownDirection1 * upDownSpeed1;
        modelGroup5.position.y += upDownDirection2 * upDownSpeed2;// Adjust model speed and direction here

        // Check if the model reaches the upper or lower limit, and change direction accordingly
        if (modelGroup1.position.y >= 1 || modelGroup1.position.y <= 0) {
            upDownDirection *= -1; // Change direction
        }

        if (modelGroup3.position.y >= 0.5 || modelGroup3.position.y <= -0.5) {
            upDownDirection1 *= -1; // Change direction
        }

        if (modelGroup5.position.y >= 1 || modelGroup5.position.y <= 0) {
            upDownDirection2 *= -1; // Change direction
        }

        renderer.render(scene, camera);
    }

    // Start the animation
    animate();

    // Load and position the second model after starting the animation
    loadSecondModel();
    loadfourthModel();
    loadfifthModel()
}

// Function to animate the scene
function animate() {
    requestAnimationFrame(animate);

    // Rotate the first model around the y-axis if rotation is enabled
    if (rotationEnabled && modelGroup1) {
        modelGroup1.rotation.y += 0.03; // Adjust rotation speed here
    }

    if (rotationEnabled1 && modelGroup3) {
        modelGroup3.rotation.y += 0.03; // Adjust rotation speed here
    }

    if (rotationEnabled2 && modelGroup5) {
        modelGroup5.rotation.y += 0.03; // Adjust rotation speed here
    }

    // Rotate the second model around the y-axis if rotation is enabled
    if (rotationEnabled && modelGroup2) {
        modelGroup2.rotation.y += 0.03; // Adjust rotation speed here
    }

    if (rotationEnabled1 && modelGroup4) {
        modelGroup4.rotation.y += 0.03; // Adjust rotation speed here
    }

    if (rotationEnabled2 && modelGroup6) {
        modelGroup6.rotation.y += 0.03; // Adjust rotation speed here
    }

    renderer.render(scene, camera);
}

// Flag to indicate if rotation is enabled
let rotationEnabled = false;
let rotationEnabled1 = false;
let rotationEnabled2 = false;

// Event listener for mouse enter event on Button 1
document.getElementById("button1").addEventListener("mouseenter", function () {
    rotationEnabled = true; // Enable rotation
});

document.getElementById("button2").addEventListener("mouseenter", function () {
    rotationEnabled1 = true; // Enable rotation
});

document.getElementById("button3").addEventListener("mouseenter", function () {
    rotationEnabled2 = true; // Enable rotation
});

// Event listener for mouse leave event on Button 1
document.getElementById("button1").addEventListener("mouseleave", function () {
    rotationEnabled = false; // Disable rotation
});

document.getElementById("button2").addEventListener("mouseleave", function () {
    rotationEnabled1 = false; // Disable rotation
});

document.getElementById("button3").addEventListener("mouseleave", function () {
    rotationEnabled2 = false; // Disable rotation
});

// Start the animation
animate();
