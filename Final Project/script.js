
    
    $(document).ready(function() {
    
    var Resources = [
      'air','abolition','brainstorming','cargo','chemical','demos','demolish','dire','disasters'
      ,'earth','efficiency','fire','fragile','groups','hearings','infographics','jury','lands',
      'marshlands','nature','nautical','observations','premonitions','resources','relationships',
      'safety','security','sand','solar','sunshine','trials','uv','water','wind','xenophobia','yoda','zenith'];
    $('#search').autocomplete({
      source: Resources
    });
    var img1=document.getElementById('hotspot');
    var img2=document.getElementById('keystone');
    var img3=document.getElementById('hurricane');

      $('.tyson').hide();
          $('.firstcross').on('click', function (){
            if (img1.alt=="hotspots"){
                img1.src ="bleum.png";
                img1.alt ="second hotpost";
            } else {
                img1.src ="bleu.png";
                img1.alt = "hotspots";
            }
            $('.tyson').toggle();
              
                
        });
          
         $('.oil').hide();
          $('.nextcross').on('click', function (){
            if (img2.alt=="pipeline"){
                img2.src ="bleum.png";
                img2.alt ="pipelines";
            } else {
                img2.src ="bleu.png";
                img2.alt = "pipeline";
            }
              $('.oil').toggle();
        });

               $('.carolina').hide();
                $('.lastcross').on('click', function (){
                    if (img3.alt=="hurricanes"){
                        img3.src ="bleum.png";
                        img3.alt ="hurricane";
                    } else {
                        img3.src ="bleu.png";
                        img3.alt = "hurricanes";
                    }
                    $('.carolina').toggle();
                    
                });
                

    
    }); //end ready
 