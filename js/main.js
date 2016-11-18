var tips = [
  {"text": "",
  "imageUrl": null}
];

function addTip(newTip) {
  tips.push(newTip);
}

function getRandomTip() {
  var min = Math.ceil(0);
  var max = Math.floor(tips.length);
  var randomIndex = Math.floor(Math.random() * (max - min)) + min;
  return tips[randomIndex];
}

$(document).ready(function() {
  $('.submit-tip').click(function() {
    addTip($('.input-tip').val());
  });

  $('.get-tip').click(function() {
    var tip = getRandomTip();
    $('.tip-container').value(tip.text);
    if (tip.imageUrl === null) {
      $('.tip-image').hide();
    } else {
      $('.tip-image').attr("src", tip.imageUrl);
      $('.tip-image').show();

    }
  });

});
