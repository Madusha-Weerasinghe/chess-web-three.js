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

let sixthModel;
loader.load(
    "book/scene.gltf",
    function (gltf) {
        const root = gltf.scene;
        const modelGroup = new THREE.Group();
        modelGroup.add(root);
        root.scale.set(0.03, 0.04, 0.03);
        modelGroup.position.x = -7;
        modelGroup.position.y = 1;
        scene.add(modelGroup);
        modelGroup.rotation.y = Math.PI / 4; // Rotate around the y-axis
        modelGroup.rotation.x = Math.PI / 8;

        sixthModel = modelGroup;

        animate(); // Start the animation after loading the model
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

// Function to animate the scene
function animate() {
    requestAnimationFrame(animate);

    // Rotate the model around the y-axis
    if (sixthModel) {
        sixthModel.rotation.y += 0.01; // Adjust rotation speed here
    }

    renderer.render(scene, camera);
}
