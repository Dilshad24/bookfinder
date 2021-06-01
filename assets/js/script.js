var preloader = document.getElementById('loading');
      function loading(){
        setTimeout(function(){
          preloader.style.display = "none";
        }, 1700);
      }
var preloadersearch = document.getElementById('search');
var lodercanvas = document.getElementById('loading');
      function searchpreload(){
        preloader.style.display = "block";
        preloader.style.opacity = ".7";
        setTimeout(function(){
          preloader.style.display = "none";
        }, 1500);
      }    