document.addEventListener('scroll', function() {
      var elements = document.querySelectorAll('.anim-show');

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (position < windowHeight) {
          element.classList.add('show');
        }
      }
    });