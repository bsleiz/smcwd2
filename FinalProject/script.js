$(document).ready(function () {

  var Resources = [
    'air', 'abolition', 'brainstorming', 'cargo', 'chemical', 'demos', 'demolish', 'dire', 'disasters', 'earth', 'efficiency', 'fire', 'fragile', 'groups', 'hearings', 'infographics', 'jury', 'lands',
    'marshlands', 'nature', 'nautical', 'observations', 'premonitions', 'resources', 'relationships',
    'safety', 'security', 'sand', 'solar', 'sunshine', 'trials', 'uv', 'water', 'wind', 'xenophobia', 'yoda', 'zenith'
  ];
  $('#search').autocomplete({
    source: Resources
  });
  var img1 = document.getElementById('hotspot');
  var img2 = document.getElementById('keystone');
  var img3 = document.getElementById('hurricane');

  $('.tyson').hide();
  $('.firstcross').on('click', function () {
    if (img1.alt == "hotspots") {
      img1.src = "bleum.png";
      img1.alt = "second hotpost";
    } else {
      img1.src = "bleu.png";
      img1.alt = "hotspots";
    }
    $('.tyson').toggle();


  });

  $('.oil').hide();
  $('.nextcross').on('click', function () {
    if (img2.alt == "pipeline") {
      img2.src = "bleum.png";
      img2.alt = "pipelines";
    } else {
      img2.src = "bleu.png";
      img2.alt = "pipeline";
    }
    $('.oil').toggle();
  });

  $('.carolina').hide();
  $('.lastcross').on('click', function () {
    if (img3.alt == "hurricanes") {
      img3.src = "bleum.png";
      img3.alt = "hurricane";
    } else {
      img3.src = "bleu.png";
      img3.alt = "hurricanes";
    }
    $('.carolina').toggle();

  });

  $('.donated').click(function () {

    $('.donatenow').remove();

    $('.appreciate').show();
  });

  $('.donated1').click(function () {

    $('.donatenow1').remove();

    $('.appreciate1').show();
  });
 


  $('.toggle-button').click(function () {
    $('.nav-item').toggleClass('hidden');
  });
  $('.img-toggle').click(function () {
    $('.toggle-button').toggle();
  });

  $('.race').hide();
  $('.box1-sm').on('click', function () {

    $('.races').css('height', '100%').toggle();
    $('.race').show();
  });


  $('.floods').hide();
  $('.box2-sm').on('click', function () {

    $('.flooding').css('height', '100%').toggle();
    $('.floods').show();


  });

  $('.bear').hide();
  $('.box3-sm').on('click', function () {

    $('.bears').css('height', '100%').toggle();
    $('.bear').show();


  });

  $('.midst').hide();
  $('.box4-sm').on('click', function () {

    $('.house').css('height', '100%').toggle();
    $('.midst').show();


  });

  $('.town').hide();
  $('.box5-sm').on('click', function () {

    $('.towns').css('height', '100%').toggle();
    $('.town').show();


  });


}); //end ready