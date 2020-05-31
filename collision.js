document.querySelector('a-cylinder').addEventListener('collide', function (evt) {
    console.log('This A-Frame entity collided with another entity!')
    'a-cylinder'.visible(false);});
