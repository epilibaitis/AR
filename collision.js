    var laser = document.querySelector('#prism');
    laser.addEventListener('collide', function(e) 
    {
        laser.setAttribute('color',"#ff0000")
        laser.setAttribute('visible','false')
    });

