    var aBox = document.querySelector('#box');
    aBox.addEventListener('collide', function() 
    {
        aBox.setAttribute('scale',{x: 2, y: 2, z: 2})
    });
