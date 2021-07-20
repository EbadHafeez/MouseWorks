function randomValues() {
    anime({
        targets: '#abs1',
        translateX: function () {
            return anime.random(0, 200);
        },
        translateY: function () {
            return anime.random(0, 100);
        },
        rotateZ: function(){
            return anime.random(0, 360)
        },
        easing: 'easeInOutSine',
        duration: 2000,
    });

    anime({
        targets: '#abs2',
        translateX: function () {
            return anime.random(0, -200);
        },
        translateY: function () {
            return anime.random(0, 100);
        },
        rotateZ: function(){
            return anime.random(0, 360)
        },
        easing: 'easeInOutSine',
        duration: 2000,
    });

    anime({
        targets: '#abs3',
        translateX: function () {
            return anime.random(0, 250);
        },
        translateY: function () {
            return anime.random(0, -100);
        },
        rotateZ: function(){
            return anime.random(0, 360)
        },
        easing: 'easeInOutSine',
        duration: 2000,
    });

    anime({
        targets: '#abs4',
        translateX: function () {
            return anime.random(0, -250);
        },
        translateY: function () {
            return anime.random(0, -100);
        },
        rotateZ: function(){
            return anime.random(0, 360)
        },
        easing: 'easeInOutSine',
        duration: 2000,
    });

}


function myFunction(x) {
    if (x.matches) { // If media query matches
        randomValues();
    }
  }
  
  var x = window.matchMedia("(min-width: 1240px)")
  myFunction(x)
  x.addListener(myFunction)

