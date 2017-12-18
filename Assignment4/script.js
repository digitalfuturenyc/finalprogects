var answers = [
  'Yes.', 'No.', 'It is certain.', 'Certainly not for you.', 'Definitely.', 'Absolutely.', 'Most likely.', 'Indeed.', 'Do not count on it.' , 'Try again later.', 'I would rather not tell you.', 'There is a good chance.'];
var colors = ['#ff0000', '#00ff00', '#0000ff'];

document.getElementById('answerButton').onclick = function () {
var answer = answers[Math.floor(Math.random() * answers.length)];
    document.getElementById('answerContainer').innerHTML = answer;
    var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('answerContainer').style.color = random_color;
};


$('#ocirc').click(function () {
    $('.shake').effect("shake", {
        times: 8,
        direction: "up"
    }, 2000);
    var mytimer = window.setTimeout('result()', 3000);
});