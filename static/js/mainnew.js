$(function() {
    (function(a) {
      var c = a(window),
        b = a("body");
      a("[data-bg-image]").each(function() {
        var q = a(this),
          p = q.data("bg-image");
        q.css("background-image", "url(" + p + ")");
      });
      a(window).on("scroll", function(p) {
        var q = a(window).scrollTop() + 1;
        if (q > 250) {
          a(".sticky-nav").addClass("menu_fixed animated fadeInDown");
        } else {
          a(".sticky-nav").removeClass("menu_fixed animated fadeInDown");
        }
      });
      a(".color a").on("click", function() {
        a(".sidebar-widget-list a").removeClass("active");
        a(this).addClass("active");
      });
      a(".size a").on("click", function() {
        a(".sidebar-widget-list a").removeClass("active-2");
        a(this).addClass("active-2");
      });
      a(".pro-details-color a").on("click", function() {
        a(".pro-details-color a").removeClass("active-color");
        a(this).addClass("active-color");
      });
      a(".pro-details-size a").on("click", function() {
        a(".pro-details-size a").removeClass("active-size");
        a(this).addClass("active-size");
      });
      (function() {
        var s = a(".offcanvas-toggle"),
          q = a(".offcanvas"),
          r = a(".offcanvas-overlay"),
          p = a(".mobile-menu-toggle");
        s.on("click", function(v) {
          v.preventDefault();
          var u = a(this),
            t = u.attr("href");
          b.addClass("offcanvas-open");
          a(t).addClass("offcanvas-open");
          r.fadeIn();
          if (u.parent().hasClass("mobile-menu-toggle")) {
            u.addClass("close");
          }
        });
        a(".offcanvas-close, .offcanvas-overlay").on("click", function(t) {
          t.preventDefault();
          b.removeClass("offcanvas-open");
          q.removeClass("offcanvas-open");
          r.fadeOut();
          p.find("a").removeClass("close");
        });
      })();
      function j() {
        var p = a(".offcanvas-menu, .overlay-menu"),
          q = p.find(".sub-menu");
        q.parent().prepend('<span class="menu-expand"></span>');
        p.on("click", "li a, .menu-expand", function(s) {
          var r = a(this);
          if (r.attr("href") === "#" || r.hasClass("menu-expand")) {
            s.preventDefault();
            if (r.siblings("ul:visible").length) {
              r.parent("li").removeClass("active");
              r.siblings("ul").slideUp();
              r.parent("li")
                .find("li")
                .removeClass("active");
              r.parent("li")
                .find("ul:visible")
                .slideUp();
            } else {
              r.parent("li").addClass("active");
              r.closest("li")
                .siblings("li")
                .removeClass("active")
                .find("li")
                .removeClass("active");
              r.closest("li")
                .siblings("li")
                .find("ul:visible")
                .slideUp();
              r.siblings("ul").slideDown();
            }
          }
        });
      }
      j();
      function k() {
        var p = a(".offcanvas-userpanel"),
          q = p.find(".user-sub-menu");
        q.parent().prepend('<span class="offcanvas__user-expand"></span>');
        p.on("click", "li a, .offcanvas__user-expand", function(s) {
          var r = a(this);
          if (r.attr("href") === "#" || r.hasClass("offcanvas__user-expand")) {
            s.preventDefault();
            if (r.siblings("ul:visible").length) {
              r.parent("li").removeClass("active");
              r.siblings("ul").slideUp();
              r.parent("li")
                .find("li")
                .removeClass("active");
              r.parent("li")
                .find("ul:visible")
                .slideUp();
            } else {
              r.parent("li").addClass("active");
              r.closest("li")
                .siblings("li")
                .removeClass("active")
                .find("li")
                .removeClass("active");
              r.closest("li")
                .siblings("li")
                .find("ul:visible")
                .slideUp();
              r.siblings("ul").slideDown();
            }
          }
        });
      }
      k();
      var i = new Swiper(".hero-slider.swiper-container", {
        loop: true,
        speed: 2000,
        effect: "fade",
        autoplay: { delay: 7000, disableOnInteraction: false },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
      });
      var e = new Swiper(".testimonial-wrapper.swiper-container", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1500,
        breakpoints: {
          0: { slidesPerView: 1 },
          478: { slidesPerView: 1 },
          576: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 2 },
          1200: { slidesPerView: 3 }
        }
      });
      var l = new Swiper(".new-product-slider.swiper-container", {
        slidesPerView: 4,
        spaceBetween: 30,
        speed: 1500,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          478: { slidesPerView: 2 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 }
        }
      });
      var g = new Swiper(".gallery-thumbs", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true
      });
      var h = new Swiper(".gallery-top", {
        spaceBetween: 0,
        loop: true,
        thumbs: { swiper: g }
      });
      var n = new Swiper(".zoom-thumbs", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true
      });
      var o = new Swiper(".zoom-top", {
        spaceBetween: 0,
        slidesPerView: 1,
        thumbs: { swiper: n }
      });
      var n = new Swiper(".zoom-thumbs-2", {
        spaceBetween: 0,
        slidesPerView: 4,
        direction: "vertical",
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true
      });
      var o = new Swiper(".zoom-top-2", {
        spaceBetween: 0,
        loop: true,
        thumbs: { swiper: n }
      });
      var d = a(".cart-plus-minus");
      d.prepend('<div class="dec qtybutton">-</div>');
      d.append('<div class="inc qtybutton">+</div>');
      a(".qtybutton").on("click", function() {
        var p = a(this);
        var r = p
          .parent()
          .find("input")
          .val();
        if (p.text() === "+") {
          var q = parseFloat(r) + 1;
        } else {
          if (r > 1) {
            var q = parseFloat(r) - 1;
          } else {
            q = 1;
          }
        }
        p.parent()
          .find("input")
          .val(q);
      });
      var m = new Swiper(".single-product-slider", {
        slidesPerView: 4,
        spaceBetween: 20,
        speed: 1500,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          478: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1200: { slidesPerView: 4 }
        }
      });
      a(".checkout-toggle2").on("click", function() {
        a(".open-toggle2").slideToggle(1000);
      });
      a(".checkout-toggle").on("click", function() {
        a(".open-toggle").slideToggle(1000);
      });
      a.scrollUp({
        scrollText: '<i class="pe-7s-angle-up"></i>',
        easingType: "linear",
        scrollSpeed: 900,
        animation: "fade"
      });
      a("[data-countdown]").each(function() {
        var p = a(this),
          q = a(this).data("countdown");
        p.countdown(q, function(r) {
          p.html(
            r.strftime(
              '<span class="cdown day"><span class="cdown-1">%-D</span><p>Days</p></span> <span class="cdown hour"><span class="cdown-1">%-H</span><p>Hours</p></span> <span class="cdown minutes"><span class="cdown-1">%M</span> <p>Mins</p></span> <span class="cdown second"><span class="cdown-1"> %S</span> <p>Sec</p></span>'
            )
          );
        });
      });
      var m = new Swiper(".blog-post-media.swiper-container", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: { delay: 2000, disableOnInteraction: false },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
      });
      var f = new Swiper(".brand-slider.swiper-container", {
        slidesPerView: 5,
        speed: 1500,
        loop: true,
        autoplay: { delay: 2000, disableOnInteraction: false },
        breakpoints: {
          0: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 }
        }
      });
      a(".shop-sort").niceSelect();
      a(".zoom-image-hover").zoom();
      a(".venobox").venobox();
    })(jQuery);
})