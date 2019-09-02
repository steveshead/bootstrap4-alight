// inspired by https://css-tricks.com/snippets/jquery/smooth-scrolling/

var TopOffset = 30;

$('a[data-smooth]').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - TopOffset
      }, 1000);
      return false;
    }
  }
});

// initialize swiper for the gallery
const swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  mousewheel: {},
  effect: 'cube',
  keyboard: {
    enabled: true,
    onlyInViewport: false
  }
});


// work request form modal
$('.btn').click(function() {
  $('.dropdown-menu').toggle();
});

$('#choice').change(function() {
  if ($(this).val() == "") {
    $(this).addClass("empty");

  } else {
    $(this).removeClass("empty")
  }

});

$('form > div input, form > div select').change(function() {
  var empty = false;

  $('.req').each(function() {
    if ($(this).val() == "") {
      $(this).removeClass('ui-full')
    } else {
      $(this).addClass('ui-full');
    }
  });

  if ($('#choice').val() == "") {
    empty = true;
  }
  $('form > div input').each(function() {
    if ($(this).val() == '') {
      empty = true;

    }

  });


  if (empty) {
    $('#btn').removeAttr('disabled');

  } else {
    $('#btn').attr('disabled', 'disabled');
  }

});

$('.referral').submit(function(e) {
  if (this.checkValidity()) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: 5500
    }, 600);

    $('#refer_name').html($('#name').val());
    $('#refer_pos').html($('#position').val());
    $('.modal').slideDown().addClass('show').removeClass('shrink');
    e.preventDefault();
  } else {}
});

$('.close-modal').click(function() {
  $('.modal').removeClass('show').addClass('shrink').slideUp();
})

$('.reset').click(function() {
  $('.modal').removeClass('show').addClass('shrink').slideUp();
  $('.req').val("").removeClass('ui-full');
  $('#choice').val("").addClass('empty');
  $('#btn').attr('disabled', 'disabled');
});

$('select').focus(function() {
  $('.dropdown-wrapper').addClass('outline');
});

$('select').on('focusout', function() {
  $('.dropdown-wrapper').removeClass('outline');
});

$('.pos-card').click(function() {
  $('.desc').removeClass('reveal');
  $(this).find('.desc').toggleClass('reveal');

});

$('.refer').click(function(e) {
  e.stopPropagation();
  //  $('.positions').animate({ height: 'toggle', opacity: 'toggle' }, 'medium');
  $('.positions').addClass('fadeOut');
  $('.refer-card').addClass('fade');
  $('.return').fadeIn('fast');
});

$('.return').click(function() {
  $('.refer-card').removeClass('fade');
  $(this).hide();
  $('.positions').delay('200').removeClass('fadeOut');
  $('.desc').removeClass('reveal');
});

$('#pos_1 .refer').click(function() {
  $('#position').val('UI/UX Design').addClass('ui-full');
});

$('#pos_2 .refer').click(function() {
  $('#position').val('Software Development').addClass('ui-full');
});

$('#pos_3 .refer').click(function() {
  $('#position').val('Systems Engineering').addClass('ui-full');
});

$('#pos_4 .refer').click(function() {
  $('#position').val('Cloud Security').addClass('ui-full');
});

$('#pos_5 .refer').click(function() {
  $('#position').val('Customer Support').addClass('ui-full');
});
