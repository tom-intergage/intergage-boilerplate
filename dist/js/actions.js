var mobileMenu = function() {
    this.build = function() {
      var header = document.getElementById("header");
      var burger = document.createElement("div");
      var div = document.createElement("div");
      var close = document.createElement("div");
      burger.setAttribute("id", "burger");
      close.setAttribute("id", "close");
      burger.innerHTML = div.outerHTML + div.outerHTML + div.outerHTML;
      close.innerHTML = div.outerHTML + div.outerHTML;
      header.appendChild(burger);
      header.appendChild(close);
  
      burger.addEventListener("click", function() {
        document.body.classList.add("opened");
      });
      close.addEventListener("click", function() {
        document.body.classList.remove("opened");
      });
    };
  };
  var mm = new mobileMenu();
  
  var carousel = function() {
    this.build = function() {
      var carousel = document.getElementById("banner-carousel-inner");
      if (carousel) {
        carousel.firstElementChild.classList.add("active");
      }
    };
  };
  var cs = new carousel();
  
  var productGallery = function() {
      
    this.build = function() {
      var g = document.getElementById("product-gallery");
      var pi = document.getElementById("product-image");
      var p = document.getElementsByClassName("product-gallery__thumbnail");
        
        
        
      if (g) {
          p[0].innerHTML = pi.innerHTML;
        for (var i = 0; i < p.length; i++) {
          (function(index) {
            p[index].addEventListener("click", function() {
                let newImage = this.innerHTML;		  
                pi.innerHTML = newImage;
                let old = document.getElementsByClassName("product-gallery__thumbnail active");
                old[0].classList.remove('active');
                this.classList.add('active');
            });
          })(i);
        }
      }
    };
  };
  var pg = new productGallery();
  
  document.addEventListener("DOMContentLoaded", function() {
    mm.build();
    cs.build();
    pg.build();
  });