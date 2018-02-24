// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

//  STEPS
// 1. render, scene, camera
// 2. geometry, material, mesh

// 1.

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({ antialias: true }); //smooths jagged edges
// rebder size
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

// //Configure scene color
scene.background = new THREE.Color(0x000000);

var camera = new THREE.PerspectiveCamera(
  75,			// Field of view
  window.innerWidth / window.innerHeight,	// Aspect ratio
  0.1,		// Near
  10000		// Far
);

// camera's XYZ coordinates
camera.position.set(15, 10, 15);

//camera at the scene object position
camera.lookAt(scene.position);


//2.
//geometry + material = mesh
var geometry = new THREE.TorusBufferGeometry(10, 3, 16, 100 );
var material = new THREE.MeshLambertMaterial({ color: 0x348442, wireframe: true, emissive: 0x61316b });
var mesh = new THREE.Mesh(geometry, material);
//mesh is added to scene
scene.add(mesh);


var light = new THREE.PointLight(0xFFFF00);
light.position.set(100, 0, 10);
scene.add(light);

//animation
var render = function () {
  requestAnimationFrame(render);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
};
render();




// 
// var renderer = new THREE.WebGLRenderer({antialias:true}); //smooths jagged edges



// // Configure renderer size
// renderer.setSize( 800 / 640);

// // Append Renderer to DOM
// document.body.appendChild( renderer.domElement );

// // Create an empty scene
// var scene = new THREE.Scene();

// //In the camera variable definition,
// var camera = new THREE.PerspectiveCamera( 
//   75,  //the first parameter in the PerspectiveCamera function handles the field of view width. 
//   800 / 640, //The second parameter defines the aspect ratio: viewing area width divided by viewing area height. 
//   //The third and fourth parameters specify cut-off points for objects in the camera's view. 
//   0.1, 	// Near
//   1000 ); // Far

//   // x, y,z coordinates 
//   camera.position.set( 15, 10, 4 );

//   //points the camera at the scene object position
//   camera.lookAt( scene.position );


// // ------------------------------------------------
// // FUN STARTS HERE
// // ------------------------------------------------

// // Create a Cube Mesh with basic material
// var geometry = new THREE.BoxGeometry( 5, 5, 5 );
// 	var material = new THREE.MeshLambertMaterial( { color: 0xFF0000 } );
// 	var mesh = new THREE.Mesh( geometry, material );
//   // Add mesh to Scene
//   scene.add( mesh );


//   var render = function () {


    // Render the scene
  //   renderer.render(scene, camera);
  // };

  // render();










