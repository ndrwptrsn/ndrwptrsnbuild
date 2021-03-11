
var Starfield = (function() {
  var settings = [
     {
        "colors":[
           "rgba(76,167,149,0.2)",
           "rgba(31,151,184,0.3)",
           "rgba(88,78,235,0.0)",
           "rgba(51,116,182,0.6)",
           "rgba(70,255,243,0.2)",
           "rgba(166,124,54,0.3)"
        ],
        "numbers":[
           0.8815426356859155,
           0.5441295087362039,
           0.4113147275839719
        ]
     },
     {
        "colors":[
           "rgba(146,171,125,0.8)",
           "rgba(21,81,27,0.4)",
           "rgba(57,171,231,0.6)",
           "rgba(215,6,234,0.1)",
           "rgba(100,29,182,0.3)",
           "rgba(141,91,55,0.9)"
        ],
        "numbers":[
           0.7394620584959448,
           0.5581293026062619,
           0.8599979800713367
        ]
     },
     {
        "colors":[
           "rgba(50,24,146,0.8)",
           "rgba(42,139,255,0.1)",
           "rgba(123,184,96,0.3)",
           "rgba(90,241,161,0.2)",
           "rgba(75,219,148,0.8)",
           "rgba(45,130,217,0.4)"
        ],
        "numbers":[
           0.9968057024995622,
           0.2997846450019399,
           0.06064256843475513
        ]
     },
     {
        "colors":[
           "rgba(160,196,50,0.0)",
           "rgba(36,155,42,0.1)",
           "rgba(70,163,193,0.4)",
           "rgba(219,153,146,0.3)",
           "rgba(230,206,184,0.4)",
           "rgba(139,69,68,0.3)"
        ],
        "numbers":[
           0.2153873680123657,
           0.28912356348085644,
           0.9254637443458458
        ]
     },
     ,
     {
        "colors":[
           "rgba(1,166,113,0.3)",
           "rgba(243,254,108,0.3)",
           "rgba(228,252,211,0.1)",
           "rgba(79,92,151,0.8)",
           "rgba(170,60,15,0.7)",
           "rgba(123,115,87,0.7)"
        ],
        "numbers":[
           0.5341841544564214,
           0.5158588487397939,
           0.8563048653192331
        ]
     },
     {
        "colors":[
           "rgba(217,63,78,0.2)",
           "rgba(49,223,104,0.1)",
           "rgba(43,197,229,0.2)",
           "rgba(194,68,208,0.5)",
           "rgba(42,236,3,1.0)",
           "rgba(198,166,116,0.8)"
        ],
        "numbers":[
           0.9635637150951841,
           0.063162109738643,
           0.044565073184616555
        ]
     },
     {
        "colors":[
           "rgba(139,202,203,0.5)",
           "rgba(234,37,110,0.7)",
           "rgba(235,108,67,0.7)",
           "rgba(116,199,12,0.2)",
           "rgba(36,1,236,0.4)",
           "rgba(218,73,128,0.0)"
        ],
        "numbers":[
           0.2197284326167397,
           0.2729905196545306,
           0.5990981929879418
        ]
     },
     {
        "colors":[
           "rgba(70,101,98,0.1)",
           "rgba(222,103,110,0.5)",
           "rgba(154,167,85,0.2)",
           "rgba(126,247,30,0.1)",
           "rgba(44,71,235,0.3)",
           "rgba(78,107,193,0.6)"
        ],
        "numbers":[
           0.48646391828820423,
           0.4102494375886656,
           0.9084795699980819
        ]
     },
     {
        "colors":[
           "rgba(139,25,95,0.2)",
           "rgba(19,4,118,0.1)",
           "rgba(108,18,40,0.1)",
           "rgba(110,233,155,0.5)",
           "rgba(178,104,9,0.9)",
           "rgba(103,88,37,0.4)"
        ],
        "numbers":[
           0.2538672730915488,
           0.8709592763136929,
           0.23012335826080865
        ]
     },
     {
        "colors":[
           "rgba(167,157,153,0.7)",
           "rgba(163,20,213,0.3)",
           "rgba(135,251,14,0.1)",
           "rgba(144,78,6,0.8)",
           "rgba(172,126,173,0.3)",
           "rgba(163,169,206,0.3)"
        ],
        "numbers":[
           0.4298231455633277,
           0.665790024117749,
           0.30470532666480055
        ]
     },
     {
        "colors":[
           "rgba(198,214,253,0.7)",
           "rgba(248,108,0,0.3)",
           "rgba(197,106,61,0.1)",
           "rgba(184,96,226,0.9)",
           "rgba(197,55,67,0.5)",
           "rgba(191,45,57,0.5)"
        ],
        "numbers":[
           0.9243753340964667,
           0.4906762943422798,
           0.07067865280371444
        ]
     },
     {
        "colors":[
           "rgba(130,111,235,0.9)",
           "rgba(220,117,92,0.7)",
           "rgba(95,181,89,0.9)",
           "rgba(133,29,249,0.5)",
           "rgba(69,125,224,0.5)",
           "rgba(228,200,205,0.7)"
        ],
        "numbers":[
           0.13785139110430378,
           0.05602306676856017,
           0.2975597834179935
        ]
     },
     {
        "colors":[
           "rgba(212,185,172,0.1)",
           "rgba(39,185,84,0.7)",
           "rgba(175,200,189,0.7)",
           "rgba(216,35,184,0.3)",
           "rgba(212,150,31,0.4)",
           "rgba(248,77,77,0.7)"
        ],
        "numbers":[
           0.8810392714506752,
           0.9382917479479913,
           0.8693023692807742
        ]
     },
     {
        "colors":[
           "rgba(230,197,241,0.3)",
           "rgba(28,77,115,0.4)",
           "rgba(118,84,252,0.3)",
           "rgba(68,79,13,0.1)",
           "rgba(207,78,147,0.1)",
           "rgba(101,140,75,0.4)"
        ],
        "numbers":[
           0.3205322980945995,
           0.038335073723094526,
           0.07939187416399651
        ]
     },
     {
        "colors":[
           "rgba(71,54,28,0.4)",
           "rgba(7,139,12,0.0)",
           "rgba(246,107,55,0.8)",
           "rgba(139,232,202,0.0)",
           "rgba(157,104,241,0.3)",
           "rgba(154,152,111,0.5)"
        ],
        "numbers":[
           0.5599906933544074,
           0.43284921723629344,
           0.6179599164285474
        ]
     },
     {
        "colors":[
           "rgba(99,104,15,0.6)",
           "rgba(244,140,31,0.4)",
           "rgba(33,206,137,0.6)",
           "rgba(226,46,200,0.3)",
           "rgba(248,177,36,0.7)",
           "rgba(75,170,183,0.1)"
        ],
        "numbers":[
           0.40978550637803046,
           0.14922898042570365,
           0.4684204129701768
        ]
     },
     {
        "colors":[
           "rgba(105,86,89,0.2)",
           "rgba(32,16,204,0.1)",
           "rgba(18,167,210,0.2)",
           "rgba(2,42,194,0.1)",
           "rgba(53,5,88,0.6)",
           "rgba(254,54,123,0.4)"
        ],
        "numbers":[
           0.6381172798386814,
           0.2414978675025643,
           0.15024456055704638
        ]
     },
     {
        "colors":[
           "rgba(127,26,28,0.1)",
           "rgba(30,13,46,0.5)",
           "rgba(158,167,84,0.7)",
           "rgba(97,233,192,0.2)",
           "rgba(252,97,3,0.6)",
           "rgba(146,124,160,0.2)"
        ],
        "numbers":[
           0.5053181739938004,
           0.8151699768081535,
           0.044378799703186145
        ]
     },
     {
        "colors":[
           "rgba(217,40,208,0.5)",
           "rgba(103,161,175,0.2)",
           "rgba(149,237,164,0.7)",
           "rgba(146,106,226,0.1)",
           "rgba(65,174,251,0.6)",
           "rgba(243,56,103,0.5)"
        ],
        "numbers":[
           0.9272770952659779,
           0.18395021913793563,
           0.5538500918704246
        ]
     },
     {
        "colors":[
           "rgba(180,150,44,0.4)",
           "rgba(191,146,252,0.7)",
           "rgba(174,96,45,0.7)",
           "rgba(21,234,173,0.3)",
           "rgba(196,165,193,0.3)",
           "rgba(216,251,207,0.7)"
        ],
        "numbers":[
           0.8813411706109318,
           0.937689032484623,
           0.8965378944130389
        ]
     },
     {
        "colors":[
           "rgba(162,150,226,0.3)",
           "rgba(64,150,177,0.4)",
           "rgba(166,90,150,0.1)",
           "rgba(180,69,229,0.5)",
           "rgba(61,185,247,0.3)",
           "rgba(52,206,165,0.1)"
        ],
        "numbers":[
           0.5154329819769137,
           0.45520388204196904,
           0.2731963035387066
        ]
     },
     {
        "colors":[
           "rgba(163,95,135,0.8)",
           "rgba(15,97,64,0.3)",
           "rgba(17,177,253,0.2)",
           "rgba(231,113,117,0.6)",
           "rgba(99,143,0,0.1)",
           "rgba(216,238,87,0.8)"
        ],
        "numbers":[
           0.47282206062940135,
           0.48883721284207593,
           0.4244281540338941
        ]
     },
     {
        "colors":[
           "rgba(17,2,62,0.6)",
           "rgba(100,144,86,0.3)",
           "rgba(137,132,60,0.3)",
           "rgba(130,227,19,0.6)",
           "rgba(37,78,211,0.8)",
           "rgba(208,200,130,0.9)"
        ],
        "numbers":[
           0.029728579298006652,
           0.15203735283483777,
           0.19561100909073903
        ]
     },
     {
        "colors":[
           "rgba(77,64,44,0.3)",
           "rgba(77,230,191,0.4)",
           "rgba(205,97,29,0.8)",
           "rgba(43,104,32,0.1)",
           "rgba(168,201,199,0.3)",
           "rgba(191,142,5,0.7)"
        ],
        "numbers":[
           0.3403991354484428,
           0.8379071035481838,
           0.9794933178439158
        ]
     },
     {
        "colors":[
           "rgba(174,189,101,0.1)",
           "rgba(212,109,71,0.3)",
           "rgba(239,224,153,0.7)",
           "rgba(25,101,25,0.3)",
           "rgba(136,251,7,0.2)",
           "rgba(9,121,157,0.2)"
        ],
        "numbers":[
           0.5674698551806612,
           0.4778208498518921,
           0.8963075943244991
        ]
     },
     {
        "colors":[
           "rgba(130,109,61,0.1)",
           "rgba(51,21,120,0.8)",
           "rgba(1,20,109,0.5)",
           "rgba(241,76,148,0.4)",
           "rgba(130,163,203,0.0)",
           "rgba(149,71,255,0.2)"
        ],
        "numbers":[
           0.16802239194082746,
           0.18088366585863658,
           0.24666717388107506
        ]
     },
     {
        "colors":[
           "rgba(188,170,131,0.5)",
           "rgba(133,173,6,0.3)",
           "rgba(6,24,184,0.0)",
           "rgba(118,98,68,0.5)",
           "rgba(62,63,24,1.0)",
           "rgba(242,165,5,0.7)"
        ],
        "numbers":[
           0.2822874725882709,
           0.6970442858418309,
           0.029992460097528983
        ]
     },
     {
        "colors":[
           "rgba(203,50,18,0.6)",
           "rgba(52,136,94,0.5)",
           "rgba(38,85,88,0.3)",
           "rgba(203,200,186,0.3)",
           "rgba(43,233,5,0.2)",
           "rgba(81,28,230,0.5)"
        ],
        "numbers":[
           0.4151178627291161,
           0.15904388210898301,
           0.040068064212309684
        ]
     },
     {
        "colors":[
           "rgba(255,168,241,0.2)",
           "rgba(177,228,224,0.6)",
           "rgba(4,25,105,0.2)",
           "rgba(223,243,212,0.0)",
           "rgba(205,189,70,0.7)",
           "rgba(124,82,61,0.9)"
        ],
        "numbers":[
           0.9163702951475872,
           0.8802084829955432,
           0.39390461849054303
        ]
     },
     {
        "colors":[
           "rgba(115,161,44,0.3)",
           "rgba(185,162,233,0.1)",
           "rgba(136,20,72,0.1)",
           "rgba(113,100,28,0.4)",
           "rgba(112,69,102,1.0)",
           "rgba(97,133,221,0.1)"
        ],
        "numbers":[
           0.5618228151212448,
           0.9812697744026069,
           0.33578683485753125
        ]
     },
     {
        "colors":[
           "rgba(39,149,93,0.2)",
           "rgba(19,92,122,0.2)",
           "rgba(32,54,88,0.6)",
           "rgba(146,7,195,0.5)",
           "rgba(225,177,153,0.5)",
           "rgba(242,155,44,0.6)"
        ],
        "numbers":[
           0.1673744359697802,
           0.6266121883184987,
           0.7928771079916637
        ]
     },
     {
        "colors":[
           "rgba(200,216,223,0.1)",
           "rgba(230,36,135,0.2)",
           "rgba(245,177,51,0.8)",
           "rgba(148,129,103,0.2)",
           "rgba(165,96,242,0.2)",
           "rgba(198,197,133,0.8)"
        ],
        "numbers":[
           0.3324995045378707,
           0.05228358893201834,
           0.22701172641536904
        ]
     },
     {
        "colors":[
           "rgba(134,22,58,0.7)",
           "rgba(37,62,186,0.7)",
           "rgba(124,169,212,0.4)",
           "rgba(213,203,18,0.5)",
           "rgba(38,1,181,0.3)",
           "rgba(30,111,79,0.5)"
        ],
        "numbers":[
           0.5049173465074368,
           0.7300561988757195,
           0.40851644575400803
        ]
     },
     {
        "colors":[
           "rgba(118,201,148,0.1)",
           "rgba(153,116,35,0.2)",
           "rgba(130,31,79,0.2)",
           "rgba(116,148,134,0.9)",
           "rgba(168,99,60,0.3)",
           "rgba(177,192,100,0.4)"
        ],
        "numbers":[
           0.988490793655892,
           0.8692801583794048,
           0.0525638083642892
        ]
     },
     {
        "colors":[
           "rgba(238,208,120,0.4)",
           "rgba(28,117,35,0.4)",
           "rgba(112,125,160,0.7)",
           "rgba(8,97,111,0.3)",
           "rgba(22,116,173,0.2)",
           "rgba(169,253,13,0.2)"
        ],
        "numbers":[
           0.06484641700006377,
           0.18788839177470273,
           0.6171018767540863
        ]
     },
     {
        "colors":[
           "rgba(203,200,167,0.6)",
           "rgba(113,146,105,0.4)",
           "rgba(132,34,43,0.3)",
           "rgba(146,92,39,0.1)",
           "rgba(134,47,6,0.6)",
           "rgba(187,79,211,0.8)"
        ],
        "numbers":[
           0.7158839359573577,
           0.5413188858317894,
           0.401599688034983
        ]
     },
     {
        "colors":[
           "rgba(253,109,138,0.9)",
           "rgba(133,119,118,0.5)",
           "rgba(107,43,69,0.4)",
           "rgba(242,72,65,0.7)",
           "rgba(133,235,191,0.6)",
           "rgba(95,44,193,0.1)"
        ],
        "numbers":[
           0.6235936064390566,
           0.7969749407355908,
           0.276606569726495
        ]
     },
     {
        "colors":[
           "rgba(99,140,221,0.9)",
           "rgba(223,87,41,0.3)",
           "rgba(104,75,109,0.4)",
           "rgba(167,104,211,0.8)",
           "rgba(6,210,197,0.3)",
           "rgba(184,39,48,0.3)"
        ],
        "numbers":[
           0.7543344165481638,
           0.24437257188318107,
           0.036479230398869245
        ]
     },
     {
        "colors":[
           "rgba(86,29,197,0.0)",
           "rgba(76,214,68,0.7)",
           "rgba(207,235,13,0.5)",
           "rgba(79,71,171,0.3)",
           "rgba(199,109,55,0.0)",
           "rgba(161,160,172,0.3)"
        ],
        "numbers":[
           0.16332469231013902,
           0.9004131078783475,
           0.9301903403507998
        ]
     },
     {
        "colors":[
           "rgba(90,123,211,0.2)",
           "rgba(176,17,122,0.4)",
           "rgba(48,129,30,0.2)",
           "rgba(168,204,17,0.2)",
           "rgba(109,34,7,0.6)",
           "rgba(225,184,221,0.5)"
        ],
        "numbers":[
           0.142677717052766,
           0.13022155278513803,
           0.8244795607199698
        ]
     },
     {
        "colors":[
           "rgba(31,44,239,1.0)",
           "rgba(42,13,66,0.8)",
           "rgba(17,34,130,0.7)",
           "rgba(17,171,238,0.2)",
           "rgba(243,158,175,0.8)",
           "rgba(7,72,173,0.9)"
        ],
        "numbers":[
           0.1399090771550351,
           0.1090168741529407,
           0.60027439965434
        ]
     }
  ];
  var container;
  var windowWidth, windowHeight, windowHalfWidth, windowHalfHeight;
  var camera, scene, renderer;
  var starfield;
  var mouseX = 0, mouseY = 0;
  // let colors = [
  //   random_rgba(),
  //   random_rgba(),
  //   random_rgba(),
  //   random_rgba(),
  //   random_rgba(),
  //   random_rgba()
  // ];
  // let numbers = [
  //   randomNumber(),
  //   randomNumber(),
  //   randomNumber()
  // ];
  let num = (Math.floor(Math.random() * 35));
  let choiceSettings = [
    3,33,33,16,17,27,33,32,8,34
  ];
    // 3,6,14,16,17,27,30,32,33,34
  console.log(num);
  let colors = settings[choiceSettings[0]].colors;
  let numbers = settings[num].numbers;


  function download(filename) {
    // let text = '{\n';
    // text += '    colors: [\n';
    // colors.map((c) => text += '        ' + c.toString() + ',\n');
    // text += '    ],\n    numbers: [\n';
    // numbers.map((n) => text += '        ' + n.toString() + ',\n');
    // text += '    ]\n';
    // text += '},';
    // var element = document.createElement('a');
    // element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    // element.setAttribute('download', filename);
    //
    // element.style.display = 'none';
    // document.body.appendChild(element);
    //
    // element.click();
    //
    // document.body.removeChild(element);
  }

  function initialize(element) {
    console.log('')
    document.body.style.background = colors[3];
    document.getElementById("main").style.background = 'linear-gradient(to bottom, ' + colors[3] + ',' + colors[1] + ')';

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

      addCelestialObjectsTo(starfield, 1000 * numbers[0]^2, createStar);
      addCelestialObjectsTo(starfield, 1000 * numbers[1]^2, createRedDwarf);

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

  function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }

  function createRedDwarf() {
    var canvas = document.createElement('canvas');
    canvas.width = 160;
    canvas.height = 160;

    var ctx = canvas.getContext('2d');
    var gradient = ctx.createRadialGradient(80, 80, 0, 80, 80, 80);
    gradient.addColorStop(0,    'rgba(255,255,255,.8)' );
    gradient.addColorStop(numbers[2],  colors[4] );
    gradient.addColorStop(numbers[0],  colors[5] );
    gradient.addColorStop(numbers[1],  colors[0] );
    gradient.addColorStop(1,    'rgba(0,0,0,0)' );

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 160, 160);
    return canvas;
  }

  function createStar() {
    var canvas = document.createElement('canvas');
    canvas.width = 160;
    canvas.height = 160;

    var ctx = canvas.getContext('2d');
    var gradient = ctx.createRadialGradient(80, 80, 0, 80, 80, 80);
    gradient.addColorStop(0,    'rgba(255,255,255,.8)' );
    gradient.addColorStop(numbers[0],  colors[1] );
    gradient.addColorStop(numbers[1],  colors[2] );
    gradient.addColorStop(numbers[2],  colors[3] );
    gradient.addColorStop(1,    'rgba(0,0,0,0)' );

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 160, 160);
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
    camera.position.x += ( mouseX - camera.position.x ) * numbers[1]/80;
    camera.position.y += ( mouseY - camera.position.y ) * numbers[0]/80;

    starfield.rotation.x -= numbers[0]/8000;
    starfield.rotation.y += numbers[1]/8000;

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
