
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

let bishop;
loader.load(
    "king/scene.gltf",
    function (gltf) {
        const root = gltf.scene;
        const modelGroup = new THREE.Group();
        modelGroup.add(root);
        root.scale.set(0.2, 0.2, 0.2);
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
            modelGroup.position.set(1.5, 1, zPosition);
            modelGroup.rotation.y += rotationSpeed;
            renderer.render(scene, camera);
        }

        animate();
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

let secondModel;
loader.load(
    "bishop/scene.gltf",
    function (gltf) {
        const root = gltf.scene;
        const modelGroup = new THREE.Group();
        modelGroup.add(root);
        root.scale.set(0.4, 0.4, 0.4);
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
            modelGroup.position.set(4.5, 2, zPosition);
            modelGroup.rotation.y += rotationSpeed;
            renderer.render(scene, camera);
        }

        animate();
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

let thirdModel;
loader.load(
    "queen/scene.gltf",
    function (gltf) {
        const root = gltf.scene;
        const modelGroup = new THREE.Group();
        modelGroup.add(root);
        root.scale.set(0.2, 0.2, 0.2);
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
            modelGroup.position.set(-1.5, 1, zPosition);
            modelGroup.rotation.y += rotationSpeed;
            renderer.render(scene, camera);
        }

        animate();

        thirdModel = modelGroup;
    },
    undefined,
    function (error) {
        console.error(error);
    }
);


let fourthModel;
loader.load(
    "rook/scene.gltf",
    function (gltf) {
        const root = gltf.scene;
        const modelGroup = new THREE.Group();
        modelGroup.add(root);
        root.scale.set(1, 1, 1);
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
            modelGroup.position.set(7.5, 1, zPosition);
            modelGroup.rotation.y += rotationSpeed;
            renderer.render(scene, camera);
        }

        animate();

        fourthModel = modelGroup;
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

let fifthModel;
loader.load(
    "pawn/scene.gltf",
    function (gltf) {
        const root = gltf.scene;
        const modelGroup = new THREE.Group();
        modelGroup.add(root);
        root.scale.set(0.3, 0.3, 0.3);
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
            modelGroup.position.set(-4.5, 1.6, zPosition);
            modelGroup.rotation.y += rotationSpeed;
            renderer.render(scene, camera);
        }

        animate();

        fifthModel = modelGroup;
    },
    undefined,
    function (error) {
        console.error(error);
    }
);

let sixthModel;
loader.load(
    "knight3/scene.gltf",
    function (gltf) {
        const root = gltf.scene;
        const modelGroup = new THREE.Group();
        modelGroup.add(root);
        root.scale.set(1, 1, 1);
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
            modelGroup.position.set(-7.5, 1, zPosition);
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






// Function to animate the scene
function animate() {
    requestAnimationFrame(animate);

    // Update time
    time += oscillationSpeed;

    // Calculate positions for both models
    const xPosition = Math.sin(time) * oscillationAmplitude * radiusX;
    const zPosition = Math.cos(time) * radiusZ;
    
    // Set positions for both models
    modelGroup.position.set(xPosition, 0.5, zPosition);
    secondModel.position.set(-xPosition, 0.5, -zPosition); // Adjust position as needed
    thirdModel.position.set(xPosition, 0.5, zPosition); // Adjust position as needed
    fourthModel.position.set(xPosition, 0.5, zPosition);
    fifthModel.position.set(xPosition, 0.5, zPosition);
    sixthModel.position.set(xPosition, 0.5, zPosition);
    // Rotate both models around the y-axis
    modelGroup.rotation.y += rotationSpeed;
    secondModel.rotation.y += rotationSpeed; // Adjust rotation speed if needed
    thirdModel.rotation.y += rotationSpeed; // Adjust rotation speed if needed

    renderer.render(scene, camera);
}
