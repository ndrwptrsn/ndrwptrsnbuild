var Starfield = (function() {
  var container;
  var windowWidth, windowHeight, windowHalfWidth, windowHalfHeight;
  var camera, scene, renderer;
  var starfield;
  var mouseX = 0, mouseY = 0;
  let colors = [
    random_rgba(),
    random_rgba(),
    random_rgba(),
    random_rgba(),
    random_rgba(),
    random_rgba()
  ];
  let randomNumbers = [randomNumber(), randomNumber(), randomNumber()]

  function initialize(element) {
    // colors
    document.body.style.background = colors[3];
    document.getElementById("main").style.background = 'linear-gradient(to bottom, ' + colors[3] + ',' + colors[1] + ')';
    //
    container = ( typeof element == 'string') ? document.getElementById(element) : element;
    measure();
    setupCamera();
    setupScene();
    createRenderer();


    // Event listeners
    $(document).mousemove(onMouseMove);
    // $(window).resize(onResize);
  }

  function measure() {
    windowWidth       = window.innerWidth;
    windowHeight      = window.innerHeight;
    windowHalfWidth   = window.innerWidth / 2;
    windowHalfHeight  = window.innerHeight / 2;
  }

  function setupCamera() {
     if ( !camera ) {
      camera = new THREE.PerspectiveCamera( 75, windowWidth / windowHeight, 1, 3000 );
      camera.position.z = 1000;
     }
  }

  function setupScene() {
    if ( !scene ) {
      starfield = new THREE.Object3D();

      addCelestialObjectsTo(starfield, 570, createStar);
      addCelestialObjectsTo(starfield, 300, createRedDwarf);

      starfield.frustumCulled = false;

      scene = new THREE.Scene();
      scene.add( starfield );
    }
  }

  function createRenderer() {
    if ( !renderer ) {
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(windowWidth, windowHeight);
      container.appendChild(renderer.domElement);
    }
  }

  function randomNumber() {
    return Math.random();
  }

  // function createStar() {
  //   var gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
  //   gradient.addColorStop(0,    'rgba(255,255,255,.8)' );
  //   gradient.addColorStop(randomNumbers[0],  colors[1] );
  //   gradient.addColorStop(randomNumbers[1],  colors[2] );
  //   gradient.addColorStop(randomNumbers[2],  colors[3] );
  //   gradient.addColorStop(1,    'rgba(0,0,0,0)' );
  //
  //   ctx.fillStyle = gradient;
  //   ctx.fillRect(0, 0, 16, 16);
  // }

  function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }

  function createRedDwarf() {
    var canvas = document.createElement('canvas');
    canvas.width = 1600;
    canvas.height = 1600;

    var ctx = canvas.getContext('2d');
    var gradient = ctx.createRadialGradient(800, 800, 0, 800, 800, 800);
    gradient.addColorStop(0,    'rgba(255,255,255,.8)' );
    gradient.addColorStop(randomNumbers[2],  colors[4] );
    gradient.addColorStop(randomNumbers[0],  colors[5] );
    gradient.addColorStop(randomNumbers[1],  colors[0] );
    gradient.addColorStop(1,    'rgba(0,0,0,0)' );

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1600, 1600);
    return canvas;
  }

  function createStar() {
    var canvas = document.createElement('canvas');
    canvas.width = 1600;
    canvas.height = 1600;

    var ctx = canvas.getContext('2d');
    var gradient = ctx.createRadialGradient(800, 800, 0, 800, 800, 800);
    gradient.addColorStop(0,    'rgba(255,255,255,.8)' );
    gradient.addColorStop(randomNumbers[0],  colors[1] );
    gradient.addColorStop(randomNumbers[1],  colors[2] );
    gradient.addColorStop(randomNumbers[2],  colors[3] );
    gradient.addColorStop(1,    'rgba(0,0,0,0)' );

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1600, 1600);
    return canvas;
  }

  function addCelestialObjectsTo(group, max, func) {
    var celObj;
    let canv = func();
    var amap = new THREE.Texture(canv);
    amap.needsUpdate = true;
    var material = new THREE.SpriteMaterial({ map: amap, color: 0xffffff });
    for (var i = 0; i < max; ++i) {
      celObj = new THREE.Sprite(material);
      celObj.position.x = Math.random() * 2000 - 1000;
      celObj.position.y = Math.random() * 2000 - 1000;
      celObj.position.z = Math.random() * 2000 - 1000;
      let scale = Math.random() * (Math.floor(Math.random() * 500) + 1);
      celObj.scale.set( scale,scale, scale);
      celObj.frustumCulled = false;
      group.add(celObj);
    }
  }

  // ---------------------------------------------------------------------------
  // -- Event Handlers ---------------------------------------------------------
  // ---------------------------------------------------------------------------

  function onMouseMove(e) {
    mouseX = e.clientX - windowHalfWidth;
    mouseY = e.clientY - windowHalfHeight;
  }

  // function onResize() {
  //   measure();
  //
  //   if ( camera )
  //     camera.aspect = windowWidth / windowHeight;
  //
  //   if ( renderer )
  //     renderer.setSize(windowWidth, windowHeight);
  // }

  window.addEventListener( 'resize', onWindowResize, false );

  function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  }

  // ---------------------------------------------------------------------------

  function animate() {
    requestAnimationFrame( animate );
    render();
  }

  function render() {
    camera.position.x += ( mouseX - camera.position.x ) * randomNumbers[1]/80;
    camera.position.y += ( mouseY - camera.position.y ) * randomNumbers[0]/80;

    starfield.rotation.x -= randomNumbers[0]/8000;
    starfield.rotation.y += randomNumbers[1]/8000;

    renderer.render( scene, camera );
  }

  // ---------------------------------------------------------------------------

  return {
    initialize: initialize,
    startAnimation: animate
  }
})();

$(document).ready(function() {
  Starfield.initialize('main');
  Starfield.startAnimation();
});
