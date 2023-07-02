;(function ($) {
  'use strict' // Start of use strict

  $(document).ready(function () {
    'use strict'

    // $on('scroll', function() {
    // 	console.log('scroll .....')
    // })

    /*RSVP Form*/
    $('.submit_block_1').click(function () {
      send_form('block_1')
      return false
    })

    function send_form(type) {
      var name = $('input#name_' + type).val()
      if (name == '') {
        $('input#name_' + type).css({ border: '1px solid red' })
        $('input#name_' + type).focus()
        return false
      }
      var email = $('input#email_' + type).val()
      if (email == '') {
        $('input#email_' + type).css({ border: '1px solid red' })
        $('input#email_' + type).focus()
        return false
      }
      var guest = $('input#guest_' + type).val()
      if (guest == '') {
        $('input#guest_' + type).css({ border: '1px solid red' })
        $('input#guest_' + type).focus()
        return false
      }
      var attending = $('input#attending_' + type).val()
      if (attending == '') {
        $('input#attending_' + type).css({ border: '1px solid red' })
        $('input#attending_' + type).focus()
        return false
      }

      var dataString =
        '&name=' +
        name +
        '&email=' +
        email +
        '&guest=' +
        guest +
        '&attending=' +
        attending
      var form = $(this)
      var str = form.serialize()
      $.ajax({
        method: 'POST',
        url: 'http://formspree.io/your@mail.com',
        data: dataString,
        dataType: 'json',
        success: function () {
          $('#div_' + type).html(
            "<div id='form_send_message'>Thank you for your request, we will contact you as soon as possible.</div>",
            1500
          )
        }
      })
    }

    /*ScrollR */
    if ($(window).width() > 1280) {
      var s = skrollr.init({
        forceHeight: false
      })
    }

    /*Gallery ColorBox */
    $('.gallery_txt a').colorbox({
      rel: 'gal',
      maxWidth: '100%'
    })

    /*Main Menu Button */
    $('.main_menu_btn').on('click', function (e) {
      $(this).toggleClass('main_menu_btn_open')
      $('.main_menu_block').toggleClass('main_menu_block_open').fadeToggle()
      $('.main_menu_block').find('.menu_wrapper').toggleClass('active')
      $('header .anim').toggleClass('active')
      e.preventDefault()
    })

    /* Section Background */
    $('section, .parallax').each(function () {
      var image = $(this).attr('data-image')
      if (image) {
        $(this).css('background-image', 'url(' + image + ')')
      }
    })

    /*ColorBox*/
    if ($(window).width() >= 760) {
      $('.youtube').colorbox({ iframe: true, innerWidth: 640, innerHeight: 390 })
    } else {
      $('.youtube').colorbox({ iframe: true, innerWidth: 320, innerHeight: 240 })
    }
    $(window).resize(function () {
      if ($(window).width() >= 760) {
        $('.youtube').colorbox({ iframe: true, innerWidth: 640, innerHeight: 390 })
      } else {
        $('.youtube').colorbox({ iframe: true, innerWidth: 320, innerHeight: 240 })
      }
    })

    /*Scroll Effect*/
    $('.intro_down, .go').on('click', function (e) {
      var anchor = $(this)
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr('href')).offset().top
          },
          1000
        )
      e.preventDefault()
    })

    /*Show/Hide Photo in When&Where Block*/
    $('.photocamera span').on('click', function (e) {
      $(this).parents('section').find('.opacity').toggleClass('fade')
      $(this).parents('section').find('.over').fadeToggle()
      e.preventDefault()
    })

    /*Player*/
    $('.music').on('click', function (e) {
      $('.player').fadeToggle()
      e.preventDefault()
    })

    /*CountDown*/
    $('.married_coundown').countdown({ until: new Date(2016, 12, 19) })

    /*OWL Carousel in Our Story*/
    $('.story_wrapper').owlCarousel({
      navigation: true,
      responsive: true,
      responsiveRefreshRate: 200,
      slideSpeed: 200,
      paginationSpeed: 200,
      rewindSpeed: 500,
      items: 3,
      itemsTablet: [768, 1],
      autoPlay: true,
      itemsMobile: [479, 1],
      itemsDesktopSmall: [980, 1],
      itemsDesktop: [1500, 2],
      mouseDrag: false,
      touchDrag: false
    })

    /*Gallery Carousel */
    $('.gallery_wrapper').owlCarousel({
      navigation: true,
      responsive: true,
      responsiveRefreshRate: 200,
      slideSpeed: 200,
      paginationSpeed: 200,
      rewindSpeed: 500,
      items: 3,
      itemsTablet: [768, 2],
      autoPlay: true,
      itemsMobile: [479, 1],
      mouseDrag: false,
      touchDrag: false
    })

    /*Registry Carousel */
    $('.registry_wrapper').owlCarousel({
      navigation: true,
      responsive: true,
      responsiveRefreshRate: 200,
      slideSpeed: 200,
      paginationSpeed: 200,
      rewindSpeed: 500,
      stopOnHover: true,
      autoHeight: true,
      items: 3,
      mouseDrag: false,
      autoPlay: true,
      touchDrag: false
    })

    /*The Crew Carousel*/
    $('.guest_wrapper').owlCarousel({
      navigation: true,
      responsive: true,
      responsiveRefreshRate: 200,
      slideSpeed: 200,
      paginationSpeed: 200,
      rewindSpeed: 500,
      stopOnHover: true,
      autoHeight: true,
      items: 4,
      mouseDrag: false,
      autoPlay: true,
      touchDrag: false
    })

    /*Slider Carousel*/
    $('.slider').owlCarousel({
      navigation: true,
      responsive: true,
      responsiveRefreshRate: 200,
      slideSpeed: 200,
      paginationSpeed: 200,
      rewindSpeed: 500,
      stopOnHover: false,
      autoHeight: true,
      singleItem: true,
      mouseDrag: false,
      autoPlay: true,
      transitionStyle: 'fade',
      touchDrag: false
    })

    /*Blog Inside*/
    $('.blog_inside_wrapper').owlCarousel({
      navigation: true,
      responsive: true,
      responsiveRefreshRate: 200,
      slideSpeed: 200,
      paginationSpeed: 200,
      rewindSpeed: 500,
      stopOnHover: false,
      autoHeight: true,
      singleItem: true,
      mouseDrag: false,
      autoPlay: true,
      transitionStyle: 'fade',
      touchDrag: false
    })

    /* Top Menu Click to Section */
    $('.navbar-nav')
      .find('a')
      .on('click', function (e) {
        $('.navbar-nav').find('a').removeClass('active')
        $(this).addClass('active')
        var anchor = $(this)
        $('html, body')
          .stop()
          .animate(
            {
              scrollTop: $(anchor.attr('href')).offset().top - 50
            },
            1000
          )

        e.preventDefault()
      })

    $('#logo')
      .find('a')
      .on('click', (e) => {
        $('html, body').stop().animate(
          {
            scrollTop: 0
          },
          1000
        )

        e.preventDefault()
      })

    $('#menu-mobile')
      .find('a')
      .on('click', function (e) {
        $('#menu-mobile').find('a').removeClass('active')
        $(this).addClass('active')
        var anchor = $(this)
        $('html, body')
          .stop()
          .animate(
            {
              scrollTop: $(anchor.attr('href')).offset().top - 70
            },
            1000
          )
        $('.nav-icon3').removeClass('open')
        $('body').removeClass('overflow-hidden')
        $('#menu-mobile').removeClass('visible')
        $('#logo').find('a').removeClass('visible-none')
        e.preventDefault()
      })

    /*FireFly in Intro*/
    $.firefly({
      color: '#fff',
      minPixel: 1,
      maxPixel: 3,
      total: 55,
      on: '.into_firefly'
    })

    /* Refresh ScrollR */
    s.refresh($('.guest_wrapper, .our_story'))
  })

  $(window).on('scroll', () => {
    if (!window.scrollY) {
      $('#custom-navbar').removeClass('navbar-scroll')
      $('.nav-icon3').removeClass('scroll')
    } else {
      $('#custom-navbar').addClass('navbar-scroll')
      $('.nav-icon3').addClass('scroll')
    }
  })

  $('.nav-icon3').on('click', (function () {
    $(this).toggleClass('open')
    $('#logo').find('a').toggleClass('visible-none')
    $('#menu-mobile').toggleClass('visible')
    $('body').toggleClass('overflow-hidden')
  }))

  $('.grid').imagesLoaded(function () {
    $('.grid').isotope({
      // options
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use element for option
        columnWidth: '.grid-sizer'
      },
      getSortData: {
        moments: '.moments', // text from querySelector
        category: '[data-category]',
        weight: function (itemElem) {
          // function
          var weight = $(itemElem).find('.weight').text()
          return parseFloat(weight.replace(/[\(\)]/g, ''))
        }
      }
    })
  })

  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
      var number = $(this).find('.number').text()
      return parseInt(number, 10) > 50
    },
    // show if name ends with -ium
    ium: function () {
      var name = $(this).find('.name').text()
      return name.match(/ium$/)
    }
  }
  // bind filter button click
  $('.filters-button-group').find('button').on('click', function () {
    var filterValue = $(this).attr('data-filter')
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue
    $('.grid').isotope({ filter: filterValue })
  })
  // change is-checked class on buttons
  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup)
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked')
      $(this).addClass('is-checked')
    })
  })
})(jQuery)
