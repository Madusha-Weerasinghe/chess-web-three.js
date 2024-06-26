// Initialize Three.js scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 8;
scene.add(camera); // Add camera to the scene

// Create renderer
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
    "knight3/scene.gltf",
    function (gltf) {
        const root = gltf.scene;
        const modelGroup = new THREE.Group();
        modelGroup.add(root);
        root.scale.set(2.5, 2.5, 2.5);
        scene.add(modelGroup);

        const oscillationAmplitude = 0.2;
        const oscillationSpeed = 0.02;
        let time = 0;
        const radiusX = 2;
        const radiusZ = 0.5;
        const rotationSpeed = 0.01;

        function animate() {
            requestAnimationFrame(animate);
            time += oscillationSpeed;
            const xPosition = Math.sin(time) * oscillationAmplitude * radiusX;
            const zPosition = Math.cos(time) * radiusZ;
            modelGroup.position.set(-8, -0.8, zPosition);
            modelGroup.rotation.y += rotationSpeed;
            renderer.render(scene, camera);
        }

        animate();

        sixthModel = modelGroup;
    },
    undefined,
    function (error) {
        console.error(error);
    }
);
