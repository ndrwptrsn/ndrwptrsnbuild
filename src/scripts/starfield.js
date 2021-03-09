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
    container = ( typeof element == 'string') ? document.getElementById(element) : element;
    measure();
    setupCamera();
    setupScene();
    createRenderer();


    // Event listeners
    $(document).mousemove(onMouseMove);
    $(window).resize(onResize);
  }

  function measure() {
    windowWidth       = window.innerWidth;
    windowHeight      = window.innerHeight;
    windowHalfWidth   = window.innerWidth / 2;
    windowHalfHeight  = window.innerHeight / 2;
  }

  function setupCamera() {
     if ( !camera ) {
      camera = new THREE.Camera( 75, windowWidth / windowHeight, 1, 3000 );
      camera.position.z = 1000;
     }
  }

  function setupScene() {
    if ( !scene ) {
      starfield = new THREE.Object3D();
      addCelestialObjectsTo(starfield, 570, createStar);
      addCelestialObjectsTo(starfield, 300, createRedDwarf);

      scene = new THREE.Scene();
      scene.addObject( starfield );
    }
  }

  function createRenderer() {
    if ( !renderer ) {
      renderer = new THREE.CanvasRenderer();
      renderer.setSize(windowWidth, windowHeight);
      container.appendChild(renderer.domElement);
    }
  }

  function randomNumber() {
    return Math.random();
  }

  function createStar(ctx) {
    var gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0,    'rgba(255,255,255,.8)' );
    gradient.addColorStop(randomNumbers[0],  colors[1] );
    gradient.addColorStop(randomNumbers[1],  colors[2] );
    gradient.addColorStop(randomNumbers[2],  colors[3] );
    gradient.addColorStop(1,    'rgba(0,0,0,0)' );

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 16, 16);
  }

  function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }

  function createRedDwarf(ctx) {
    var gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0,    'rgba(255,255,255,.8)' );
    gradient.addColorStop(randomNumbers[2],  colors[4] );
    gradient.addColorStop(randomNumbers[0],  colors[5] );
    gradient.addColorStop(randomNumbers[1],  colors[0] );
    gradient.addColorStop(1,    'rgba(0,0,0,0)' );

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 16, 16);
  }

  function addCelestialObjectsTo(group, max, func) {
    var celObj;
    var material = new THREE.ParticleCanvasMaterial({color: 0xffffff, program: func});

    for(var i=0; i < max; ++i) {
      celObj = new THREE.Particle(material);
      celObj.position.x = Math.random() * 2000 - 1000;
      celObj.position.y = Math.random() * 2000 - 1000;
      celObj.position.z = Math.random() * 2000 - 1000;
      celObj.scale.x = celObj.scale.y = Math.random() * (Math.floor(Math.random() * 40) + 1);

      group.addChild(celObj);
    }
  }

  // ---------------------------------------------------------------------------
  // -- Event Handlers ---------------------------------------------------------
  // ---------------------------------------------------------------------------

  function onMouseMove(e) {
    mouseX = e.clientX - windowHalfWidth;
    mouseY = e.clientY - windowHalfHeight;
  }

  function onResize() {
    measure();

    if ( camera )
      camera.aspect = windowWidth / windowHeight;

    if ( renderer )
      renderer.setSize(windowWidth, windowHeight);
  }

  // ---------------------------------------------------------------------------

  function animate() {
    requestAnimationFrame( animate );
    render();
  }

  function render() {
    // camera.position.x += ( mouseX - camera.position.x ) * 0.005;
    // camera.position.y += ( - mouseY - camera.position.y ) * 0.005;

    starfield.rotation.x -= randomNumbers[0]/5000;
    starfield.rotation.y += randomNumbers[1]/5000;

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
