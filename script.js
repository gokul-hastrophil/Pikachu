const balls = document.getElementsByClassName('ball');

document.onmousemove = (a) => 
{

  const x = (a.clientX * 100) / window.innerWidth + '%';

  const y = (a.clientY * 100) / window.innerHeight + '%';

for(i=0;i<100;i++)

{

  balls[i].style.left = x;

  balls[i].style.top = y;

  balls[i].transform = 'translate(-' + x + ',-' + y + ')';

}

};
document.addEventListener('DOMContentLoaded', function() {
  const audioElement = document.getElementById('backgroundSong');

  // Function to play the audio
  function playAudio() {
      audioElement.play();
  }

  // Add a click event listener to the entire body
  document.body.addEventListener('click', playAudio);
});


