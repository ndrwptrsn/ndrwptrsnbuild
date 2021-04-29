var Piece = (function() {
  function initialize(element) {
    var all = document.getElementsByClassName('game-cell');
    for (var i = 0; i < all.length; i++) {
      all[i].style.backgroundImage = "url('./src/assets/images/submissionboard2_" + (i + 1) + ".jpg')";
    }
  }
  return {
    initialize: initialize,
  }
})();

$(document).ready(function() {
  Piece.initialize();
});
