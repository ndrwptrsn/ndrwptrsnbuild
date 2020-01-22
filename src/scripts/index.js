import * as THREE from 'three';
import '../styles/index.scss';
// import './particles-config.json';
// import './particles.min.js';


particlesJS.load('particles-js', 'src/scripts/particles-config.json', function() {
  console.log('callback - particles.js config loaded');
});

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
// import { EquirectangularToCubeGenerator } from 'three/examples/jsm/loaders/EquirectangularToCubeGenerator.js';
// import { PMREMGenerator } from 'three/examples/jsm/pmrem/PMREMGenerator.js';
// import { PMREMCubeUVPacker } from 'three/examples/jsm/pmrem/PMREMCubeUVPacker.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
//
// // const gltfLoader = new this.THREE.GLTFLoader();
// // GLTFLoader(THREE);
// // eslint-disable-next-line no-unused-vars
// // window.addEventListener('scroll', (e) => {
// //   const header = document.querySelector('.header');
// //   const content = document.querySelector('.content');
// //   var scrolled = window.pageYOffset;
// //   var opacity = 1 - ( scrolled / 60 );
// //   header.style.opacity = opacity;
// //   if ( scrolled >= 95 ) {
// //     content.style['position'] = 'fixed';
// //     content.style['top'] = '5px';
// //   } else {
// //     content.style['position'] = 'static';
// //   }
// // });
//
// let canvas = document.getElementById('canvas');
//
// const scene = new THREE.Scene();
//
// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
//
// let renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
// renderer.setPixelRatio( window.devicePixelRatio );
// renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.gammaOutput = true;
// renderer.physicallyCorrectLights = true;
// canvas.appendChild( renderer.domElement );
//
// new RGBELoader()
//   .setDataType( THREE.UnsignedByteType )
//   .setPath( 'src/assets/textures/equirectangular/' )
//   .load( 'pedestrian_overpass_2k.hdr', function ( texture ) {
//
//     var cubeGenerator = new EquirectangularToCubeGenerator( texture, { resolution: 1024 } );
//     cubeGenerator.update( renderer );
//
//     var pmremGenerator = new PMREMGenerator( cubeGenerator.renderTarget.texture );
//     pmremGenerator.update( renderer );
//
//     var pmremCubeUVPacker = new PMREMCubeUVPacker( pmremGenerator.cubeLods );
//     pmremCubeUVPacker.update( renderer );
//
//     var envMap = pmremCubeUVPacker.CubeUVRenderTarget.texture;
//
//     // model
//     var loader = new GLTFLoader().setPath( 'src/assets/DamagedHelmet/glTF/' );
//     loader.load( 'DamagedHelmet.gltf', function ( gltf ) {
//       gltf.scene.traverse( ( child ) => {
//         if ( child.isMesh ) {
//           child.material.envMap = envMap;
//         }
//       } );
//
//       let orange  = gltf.scene;
//       scene.add( orange );
//
//     } );
//
//     pmremGenerator.dispose();
//     pmremCubeUVPacker.dispose();
//     // scene.background = cubeGenerator.renderTarget;
//   } );
//
//
//
// camera.position.z = 5;
//
// let controls = new OrbitControls( camera, renderer.domElement );
// controls.target.set( 0, - 0.2, - 0.2 );
// controls.enableZoom = false;
// controls.update();
//
// let animate = () => {
//   requestAnimationFrame( animate );
//   renderer.render( scene, camera );
// };
//
// function onWindowResize() {
//   camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize( canvas.offsetWidth, canvas.offsetHeight );
//   animate();
// }
//
// window.addEventListener( 'resize', onWindowResize, false );
//
// animate();
