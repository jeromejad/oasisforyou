(function ($) {
  "use strict";

  //Navigation

  $("ul.slimmenu").on("click", function () {
    "use strict";
    var width = $(window).width();
    if (width <= 1200) {
      $(this).slideToggle();
    }
  });
  $("ul.slimmenu").slimmenu({
    resizeWidth: "1200",
    collapserTitle: "",
    easingEffect: "easeInOutQuint",
    animSpeed: "medium",
    indentChildren: true,
    childrenIndenter: "&raquo;",
  });

  /* Scroll Too */

  $(window).load(function () {
    "use strict";

    /* Page Scroll to id fn call */
    $(
      "ul.slimmenu li a,a[href='#top'],a[data-gal='m_PageScroll2id']"
    ).mPageScroll2id({
      highlightSelector: "ul.slimmenu li a",
      offset: 115,
      scrollSpeed: 1000,
      scrollEasing: "easeInOutCubic",
    });

    /* demo functions */
    $("a[rel='next']").click(function (e) {
      e.preventDefault();
      var to = $(this).parent().parent("section").next().attr("id");
      $.mPageScroll2id("scrollTo", to);
    });
  });

  //Tooltip

  $(".tipped").tipper();

  /* Top Carousel */

  $(document).ready(function () {
    "use strict";

    var time = 7; // time in seconds

    var $progressBar, $bar, $elem, isPause, tick, percentTime;

    //Init the carousel
    $("#owl-top").owlCarousel({
      pagination: false,
      transitionStyle: "fade",
      slideSpeed: 500,
      paginationSpeed: 500,
      singleItem: true,
      afterInit: progressBar,
      afterMove: moved,
      startDragging: pauseOnDragging,
    });

    //Init progressBar where elem is $("#owl-demo")
    function progressBar(elem) {
      $elem = elem;
      //build progress bar elements
      buildProgressBar();
      //start counting
      start();
    }

    //create div#progressBar and div#bar then prepend to $("#owl-demo")
    function buildProgressBar() {
      $progressBar = $("<div>", {
        id: "progressBar",
      });
      $bar = $("<div>", {
        id: "bar",
      });
      $progressBar.append($bar).prependTo($elem);
    }

    function start() {
      //reset timer
      percentTime = 0;
      isPause = false;
      //run interval every 0.01 second
      tick = setInterval(interval, 10);
    }

    function interval() {
      if (isPause === false) {
        percentTime += 1 / time;
        $bar.css({
          width: percentTime + "%",
        });
        //if percentTime is equal or greater than 100
        if (percentTime >= 100) {
          //slide to next item
          $elem.trigger("owl.next");
        }
      }
    }

    //pause while dragging
    function pauseOnDragging() {
      isPause = true;
    }

    //moved callback
    function moved() {
      //clear interval
      clearTimeout(tick);
      //start again
      start();
    }

    //uncomment this to make pause on mouseover
    // $elem.on('mouseover',function(){
    //   isPause = true;
    // })
    // $elem.on('mouseout',function(){
    //   isPause = false;
    // })

    var owl = $("#owl-top");

    owl.owlCarousel();

    // Custom Navigation Events
    $(".next").click(function () {
      owl.trigger("owl.next");
    });
    $(".prev").click(function () {
      owl.trigger("owl.prev");
    });
  });

  //Logo Carousel

  $(document).ready(function () {
    "use strict";

    var owl = $("#owl-logo");

    owl.owlCarousel({
      items: 6, //6 items above 1000px browser width
      itemsDesktop: [1000, 4], //4 items between 1000px and 901px
      itemsDesktopSmall: [900, 3], // betweem 900px and 601px
      itemsTablet: [600, 2], //2 items between 600 and 0
      itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
      pagination: false,
      autoPlay: 4000,
      slideSpeed: 500,
      paginationSpeed: 500,
    });

    //Quotes Carousel

    var owl = $("#owl-clients");

    owl.owlCarousel({
      singleItem: true,
      autoPlay: 7000,
      transitionStyle: "backSlide",
      slideSpeed: 600,
      navigation: false,
      pagination: true,
      responsiveRefreshRate: 200,
    });

    //Featured Carousel

    var owl = $("#owl-featured");

    owl.owlCarousel({
      items: 5, //5 items above 1000px browser width
      itemsDesktop: [1000, 3], //3 items between 1000px and 901px
      itemsDesktopSmall: [900, 2], // betweem 900px and 601px
      itemsTablet: [600, 1], //1 items between 600 and 0
      itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
      pagination: false,
      autoPlay: 7000,
      slideSpeed: 500,
      paginationSpeed: 500,
    });

    //services boxes

    var owl = $("#owl-services");

    owl.owlCarousel({
      items: 4, //4 items above 1000px browser width
      itemsDesktop: [1000, 3], //3 items between 1000px and 901px
      itemsDesktopSmall: [900, 2], // betweem 900px and 601px
      itemsTablet: [600, 1], //1 items between 600 and 0
      itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
      autoPlay: 7000,
      slideSpeed: 500,
      pagination: true,
      paginationSpeed: 500,
    });

    //Facts Counter

    $(".counter-facts").counterUp({
      delay: 100,
      time: 3000,
    });

    //Skills Counter

    $(".counter-skills").counterUp({
      delay: 100,
      time: 3000,
    });

    //Full Accordion

    $(".accordion").smk_Accordion({
      closeAble: true,
    });

    //Colorbox single project pop-up

    $(".group1").colorbox({ rel: "group1", maxWidth: "95%", maxHeight: "95%" });
    $(".group2").colorbox({ rel: "group2", maxWidth: "95%", maxHeight: "95%" });
    $(".youtube").colorbox({ iframe: true, innerWidth: 940, innerHeight: 450 });
    $(".vimeo").colorbox({ iframe: true, innerWidth: 940, innerHeight: 450 });

    //Parallax

    $(".parallax-home-pattern").parallax("50%", 0.4);
    $(".parallax-1").parallax("50%", 0.4);
    $(".parallax-2").parallax("50%", 0.4);
    $(".parallax-3").parallax("50%", 0.1);
    $(".parallax-4").parallax("50%", 0.1);
  });

  //Team Carousel

  $(document).ready(function () {
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");

    sync1.owlCarousel({
      singleItem: true,
      autoPlay: 5000,
      transitionStyle: "backSlide",
      slideSpeed: 600,
      navigation: false,
      pagination: false,
      afterAction: syncPosition,
      responsiveRefreshRate: 200,
    });

    sync2.owlCarousel({
      items: 4,
      itemsDesktop: [1199, 4],
      itemsDesktopSmall: [979, 3],
      itemsTablet: [768, 2],
      itemsMobile: [479, 2],
      pagination: false,
      responsiveRefreshRate: 100,
      afterInit: function (el) {
        el.find(".owl-item").eq(0).addClass("synced");
      },
    });

    function syncPosition(el) {
      var current = this.currentItem;
      $("#sync2")
        .find(".owl-item")
        .removeClass("synced")
        .eq(current)
        .addClass("synced");
      if ($("#sync2").data("owlCarousel") !== undefined) {
        center(current);
      }
    }

    $("#sync2").on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).data("owlItem");
      sync1.trigger("owl.goTo", number);
    });

    function center(number) {
      var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
      var num = number;
      var found = false;
      for (var i in sync2visible) {
        if (num === sync2visible[i]) {
          var found = true;
        }
      }

      if (found === false) {
        if (num > sync2visible[sync2visible.length - 1]) {
          sync2.trigger("owl.goTo", num - sync2visible.length + 2);
        } else {
          if (num - 1 === -1) {
            num = 0;
          }
          sync2.trigger("owl.goTo", num);
        }
      } else if (num === sync2visible[sync2visible.length - 1]) {
        sync2.trigger("owl.goTo", sync2visible[1]);
      } else if (num === sync2visible[0]) {
        sync2.trigger("owl.goTo", num - 1);
      }
    }
  });

  //About Slider

  jQuery(document).ready(function ($) {
    var itemInfoWrapper = $(".cd-single-item");

    itemInfoWrapper.each(function () {
      var container = $(this),
        // create slider pagination
        sliderPagination = createSliderPagination(container);

      container.find(".cd-slider").on("click", function (event) {
        //enlarge slider images
        if (
          !container.hasClass("cd-slider-active") &&
          $(event.target).is(".cd-slider")
        ) {
          itemInfoWrapper.removeClass("cd-slider-active");
          container
            .addClass("cd-slider-active")
            .one(
              "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function () {
                $("body,html").animate(
                  { scrollTop: container.offset().top - 115 },
                  500
                );
              }
            );
        }
      });

      container.find(".cd-close").on("click", function () {
        //shrink slider images
        container.removeClass("cd-slider-active");
      });

      //update visible slide
      container.find(".cd-next").on("click", function () {
        nextSlide(container, sliderPagination);
      });

      container.find(".cd-prev").on("click", function () {
        prevSlide(container, sliderPagination);
      });

      container.find(".cd-slider").on("swipeleft", function () {
        var wrapper = $(this),
          bool = enableSwipe(container);
        if (!wrapper.find(".selected").is(":last-child") && bool) {
          nextSlide(container, sliderPagination);
        }
      });

      container.find(".cd-slider").on("swiperight", function () {
        var wrapper = $(this),
          bool = enableSwipe(container);
        if (!wrapper.find(".selected").is(":first-child") && bool) {
          prevSlide(container, sliderPagination);
        }
      });

      sliderPagination.on("click", function () {
        var selectedDot = $(this);
        if (!selectedDot.hasClass("selected")) {
          var selectedPosition = selectedDot.index(),
            activePosition = container.find(".cd-slider .selected").index();
          if (activePosition < selectedPosition) {
            nextSlide(container, sliderPagination, selectedPosition);
          } else {
            prevSlide(container, sliderPagination, selectedPosition);
          }
        }
      });
    });

    //keyboard slider navigation
    $(document).keyup(function (event) {
      if (
        event.which == "37" &&
        $(".cd-slider-active").length > 0 &&
        !$(".cd-slider-active .cd-slider .selected").is(":first-child")
      ) {
        prevSlide(
          $(".cd-slider-active"),
          $(".cd-slider-active").find(".cd-slider-pagination li")
        );
      } else if (
        event.which == "39" &&
        $(".cd-slider-active").length &&
        !$(".cd-slider-active .cd-slider .selected").is(":last-child")
      ) {
        nextSlide(
          $(".cd-slider-active"),
          $(".cd-slider-active").find(".cd-slider-pagination li")
        );
      } else if (event.which == "27") {
        itemInfoWrapper.removeClass("cd-slider-active");
      }
    });

    function createSliderPagination($container) {
      var wrapper = $('<ul class="cd-slider-pagination"></ul>').insertAfter(
        $container.find(".cd-slider-navigation")
      );
      $container.find(".cd-slider li").each(function (index) {
        var dotWrapper =
            index == 0 ? $('<li class="selected"></li>') : $("<li></li>"),
          dot = $('<a href="#0"></a>').appendTo(dotWrapper);
        dotWrapper.appendTo(wrapper);
        dot.text(index + 1);
      });
      return wrapper.children("li");
    }

    function nextSlide($container, $pagination, $n) {
      var visibleSlide = $container.find(".cd-slider .selected"),
        navigationDot = $container.find(".cd-slider-pagination .selected");
      if (typeof $n === "undefined") $n = visibleSlide.index() + 1;
      visibleSlide.removeClass("selected");
      $container
        .find(".cd-slider li")
        .eq($n)
        .addClass("selected")
        .prevAll()
        .addClass("move-left");
      navigationDot.removeClass("selected");
      $pagination.eq($n).addClass("selected");
      updateNavigation($container, $container.find(".cd-slider li").eq($n));
    }

    function prevSlide($container, $pagination, $n) {
      var visibleSlide = $container.find(".cd-slider .selected"),
        navigationDot = $container.find(".cd-slider-pagination .selected");
      if (typeof $n === "undefined") $n = visibleSlide.index() - 1;
      visibleSlide.removeClass("selected");
      $container
        .find(".cd-slider li")
        .eq($n)
        .addClass("selected")
        .removeClass("move-left")
        .nextAll()
        .removeClass("move-left");
      navigationDot.removeClass("selected");
      $pagination.eq($n).addClass("selected");
      updateNavigation($container, $container.find(".cd-slider li").eq($n));
    }

    function updateNavigation($container, $active) {
      $container
        .find(".cd-prev")
        .toggleClass("inactive", $active.is(":first-child"));
      $container
        .find(".cd-next")
        .toggleClass("inactive", $active.is(":last-child"));
    }

    function enableSwipe($container) {
      var mq = window
        .getComputedStyle(document.querySelector(".cd-slider"), "::before")
        .getPropertyValue("content");
      return mq == "mobile" || $container.hasClass("cd-slider-active");
    }
  });

  /* Portfolio Sorting */

  jQuery(document).ready(function ($) {
    (function ($) {
      var container = $("#projects-grid");

      function getNumbColumns() {
        var winWidth = $(window).width(),
          columnNumb = 1;

        if (winWidth > 1500) {
          columnNumb = 4;
        } else if (winWidth > 1200) {
          columnNumb = 3;
        } else if (winWidth > 900) {
          columnNumb = 2;
        } else if (winWidth > 600) {
          columnNumb = 2;
        } else if (winWidth > 300) {
          columnNumb = 1;
        }

        return columnNumb;
      }

      function setColumnWidth() {
        var winWidth = $(window).width(),
          columnNumb = getNumbColumns(),
          postWidth = Math.floor(winWidth / columnNumb);
      }

      $("#portfolio-filter #filter a").click(function () {
        var selector = $(this).attr("data-filter");

        $(this).parent().parent().find("a").removeClass("current");
        $(this).addClass("current");

        container.isotope({
          filter: selector,
        });

        setTimeout(function () {
          reArrangeProjects();
        }, 300);

        return false;
      });

      function reArrangeProjects() {
        setColumnWidth();
        container.isotope("reLayout");
      }

      container.imagesLoaded(function () {
        setColumnWidth();

        container.isotope({
          itemSelector: ".portfolio-box-1",
          layoutMode: "masonry",
          resizable: false,
        });
      });

      $(window).on("debouncedresize", function () {
        reArrangeProjects();
      });
    })(jQuery);
  });

  /* DebouncedResize Function */
  (function ($) {
    var $event = $.event,
      $special,
      resizeTimeout;

    $special = $event.special.debouncedresize = {
      setup: function () {
        $(this).on("resize", $special.handler);
      },
      teardown: function () {
        $(this).off("resize", $special.handler);
      },
      handler: function (event, execAsap) {
        var context = this,
          args = arguments,
          dispatch = function () {
            event.type = "debouncedresize";

            $event.dispatch.apply(context, args);
          };

        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }

        execAsap
          ? dispatch()
          : (resizeTimeout = setTimeout(dispatch, $special.threshold));
      },
      threshold: 150,
    };
  })(jQuery);

  // Portfolio Ajax

  $(window).load(function () {
    "use strict";
    var loader = $(".expander-wrap");
    if (typeof loader.html() == "undefined") {
      $(
        '<div class="expander-wrap"><div id="expander-wrap" class="container clearfix relative"><p class="cls-btn"><a class="close">X</a></p><div/></div></div>'
      )
        .css({ opacity: 0 })
        .hide()
        .insertAfter(".portfolio");
      loader = $(".expander-wrap");
    }
    $(".expander").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var url = $(this).attr("href");

      loader.slideUp(function () {
        $.get(url, function (data) {
          var portfolioContainer = $(".portfolio");
          var topPosition = portfolioContainer.offset().top;
          var bottomPosition = topPosition + portfolioContainer.height();
          $("html,body")
            .delay(600)
            .animate({ scrollTop: bottomPosition - 70 }, 800);
          var container = $("#expander-wrap>div", loader);

          container.html(data);

          $("#owl-portfolio-slider").owlCarousel({
            pagination: true,
            slideSpeed: 300,
            autoPlay: 5000,
            singleItem: true,
          });

          $(".container").fitVids();

          $(".vimeo a,.youtube a").click(function (e) {
            e.preventDefault();
            var videoLink = $(this).attr("href");
            var classeV = $(this).parent();
            var PlaceV = $(this).parent();
            if ($(this).parent().hasClass("youtube")) {
              $(this).parent().wrapAll('<div class="video-wrapper">');
              $(PlaceV).html(
                '<iframe frameborder="0" height="333" src="' +
                  videoLink +
                  '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>'
              );
            } else {
              $(this).parent().wrapAll('<div class="video-wrapper">');
              $(PlaceV).html(
                '<iframe src="' +
                  videoLink +
                  '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=F9690E" width="500" height="281" frameborder="0"></iframe>'
              );
            }
          });

          loader
            .slideDown(function () {
              if (typeof keepVideoRatio == "function") {
                keepVideoRatio(".container > iframe");
              }
            })
            .delay(1000)
            .animate({ opacity: 1 }, 200);
        });
      });
    });

    $(".close", loader).on("click", function () {
      loader.delay(300).slideUp(function () {
        var container = $("#expander-wrap>div", loader);
        container.html("");
        $(this).css({ opacity: 0 });
      });
      var portfolioContainer = $(".portfolio");
      var topPosition = portfolioContainer.offset().top;
      $("html,body")
        .delay(0)
        .animate({ scrollTop: topPosition - 70 }, 500);
    });
  });

  //set your google maps parameters

  jQuery(document).ready(function ($) {
    "use strict";

    var latitude = 44.8013716,
      longitude = 20.4631372,
      map_zoom = 15;

    //google map custom marker icon - .png fallback for IE11
    var is_internetExplorer11 =
      navigator.userAgent.toLowerCase().indexOf("trident") > -1;
    var marker_url = is_internetExplorer11
      ? "images/cd-icon-location.png"
      : "images/cd-icon-location.svg";

    //define the basic color of your map, plus a value for saturation and brightness
    var main_color = "#e67e22",
      saturation_value = -50,
      brightness_value = 14;

    //we define here the style of the map
    var style = [
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36,
          },
          {
            color: "#000000",
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000",
          },
          {
            lightness: 17,
          },
        ],
      },
    ];

    //set google map options
    var map_options = {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: map_zoom,
      panControl: false,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      styles: style,
    };
    //inizialize the map
    var map = new google.maps.Map(
      document.getElementById("google-container"),
      map_options
    );
    //add a custom marker to the map
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(latitude, longitude),
      map: map,
      visible: true,
      icon: marker_url,
    });

    //add custom buttons for the zoom-in/zoom-out on the map
    function CustomZoomControl(controlDiv, map) {
      //grap the zoom elements from the DOM and insert them in the map
      var controlUIzoomIn = document.getElementById("cd-zoom-in"),
        controlUIzoomOut = document.getElementById("cd-zoom-out");
      controlDiv.appendChild(controlUIzoomIn);
      controlDiv.appendChild(controlUIzoomOut);

      // Setup the click event listeners and zoom-in or out according to the clicked element
      google.maps.event.addDomListener(controlUIzoomIn, "click", function () {
        map.setZoom(map.getZoom() + 1);
      });
      google.maps.event.addDomListener(controlUIzoomOut, "click", function () {
        map.setZoom(map.getZoom() - 1);
      });
    }

    var zoomControlDiv = document.createElement("div");
    var zoomControl = new CustomZoomControl(zoomControlDiv, map);

    //insert the zoom div on the top left of the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
  });
})(jQuery);
