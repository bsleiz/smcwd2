
    
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
                
                $('#dialog').hide();
                $('#submitted').on('click', function (e){
                e.preventDefault();
                   $('#formed').hide();
                    $('#dialog').show().dialog(); 
                });
                   



$('.flood').click(function(){
$(this).hide();
$('.box1').append('<p class="floods">' + 'As hurricane season looms especially large this year, and COVID-19 reveals the deep cracks and fissures in our nation\’s response preparedness, North Carolina is gearing up to release its long-awaited plan to bolster climate resilience. The state\’s “Climate Risk Assessment and Resilience Plan” is expected to outline a comprehensive strategy to help North Carolina stay ahead of the ever-escalating climate crisis. It can\’t come soon enough. But publishing a plan does not automatically equate to implementing a plan. The success of North Carolina\’s resilience plan will ultimately be determined by the steps Governor Roy Cooper, the legislature, and state\’s agencies take to implement the recommendations. That takes leadership and a firm directive from on high that climate resilience is a priority for the state—a mandate that Governor Cooper has fortunately made abundantly clear.' + '</p>').css({'background-color': 'white', 'opacity': 0.5});
});
$('.box1').on('click','.floods',function(){
    $('.floods').remove();
  $('.box1').css({'background-color':'','opacity':''});
    $('.flood').show();
});

$('.floyd').click(function(){
    $(this).hide();
    $('.box2').append('<p class="race">' + 'Recent weeks have brought one horrific reminder after another of the structural and systemic racism that is literally choking the lives out of Black people. We\’ve watched armed white vigilantes hunt down and kill a Black man—Ahmaud Arbery—in cold blood while he jogged in broad daylight through a residential community not far from his home in Brunswick, Georgia. We\’ve seen family members mourn the death of a Black woman—Breonna Taylor—fatally shot by police while she lay asleep in her bed in a Louisville, Kentucky, suburb. And we\’ve watched the life flow out of a Black man—George Floyd—as he was pinned to the street, handcuffed, helpless, and pleading for relief, while a Minneapolis police officer kneeled into the defenseless man\’s neck. Outrage is necessary, but it\’s not enough. To say “I\’m not racist” is not enough. We have an affirmative duty to speak out for justice, to work to bring it into being, and to confront and actively oppose racism in all its forms.' + '</p>').css({'background-color': 'white', 'opacity': 0.5});
});
$('.box2').on('click','.race',function(){
    $('.race').remove();
  $('.box2').css({'background-color':'','opacity':''});
    $('.floyd').show();
});

$('.polar').click(function(){
    $(this).hide();
    $('.box3').append('<p class="bear">' + 'The Keystone XL tar sands pipeline got knocked down again this week when a federal judge invalidated Nationwide Permit 12, a key water-crossing permit issued by the U.S. Army Corps of Engineers and used by Keystone XL as well as many other pipeline projects. The permit has been routinely used to help pipelines avoid thorough environmental reviews and fast-track their approval process.  “The Trump administration’s ongoing effort to give out goodies to Big Oil hit another setback,” says NRDC attorney Cecilia Segal. “Whether they like it or not, the Corps cannot skirt foundational environmental laws.” Challenged by a coalition of conservation and landowner groups, including NRDC, Nationwide Permit 12 allowed the Army Corps to avoid fully assessing the impacts of pipelines on local waterways, lands, wildlife, and communities. The court’s ruling now prohibits the agency from using this permit for pipelines nationwide and could block the construction of Keystone XL across hundreds of water crossings.' + '</p>').css({'background-color': 'white', 'opacity': 0.5});
});
$('.box3').on('click','.bear',function(){
    $('.bear').remove();
  $('.box3').css({'background-color':'','opacity':''});
    $('.polar').show();
});

$('.redhouse').click(function(){
    $(this).hide();
    $('.box4').append('<p class="midst">' + 'In the midst of the global COVID-19 crisis, the Trump administration is trying to give EPA Administrator Andrew Wheeler the power to censor crucial scientific and health research at the EPA. This would severely limit the scientific research that the EPA must consider when setting environmental and public health standards that impact all of us — undermining the agency\’s ability to protect clean air and water, a stable climate, and public health.We must stop this outrageous science-censoring plan. Please submit an urgent letter of opposition to the EPA and call on them to drop this misguided attack on science right away!' + '</p>').css({'background-color': 'white', 'opacity': 0.5});
});
$('.box4').on('click','.midst',function(){
    $('.midst').remove();
  $('.box4').css({'background-color':'','opacity':''});
    $('.redhouse').show();
});


$('.townview').click(function(){
    $(this).hide();
    $('.box5').append('<p class="town">' + 'At the moment the Trump administration should be focusing on making our country healthier, it is instead taking advantage of an unprecedented public health crisis to do favors for polluters that threaten our public health. The Trump administration just gutted clean car standards — strong pollution and fuel efficiency standards for automobiles that have helped reduce massive amounts of toxic air and climate pollution from the nation\'s cars and trucks. And Trump\’s EPA just rolled back pollution rules, inviting industrial facilities to stop monitoring and reporting dangerous air and water pollution during the COVID-19 pandemic, without any public oversight. Both rollbacks will cause immense harm to our environment, public health, and the economy, and will undermine efforts to fight climate change. And these moves come amid a recent growing onslaught of attacks on environmental protections by Trump and his EPA, including their plan to roll back the National Environmental Policy Act (NEPA) — which protects people against pollution in their communities. There is no "right time" to impose higher health and economics costs on the American people — and to do so now, amid a global pandemic, is unconscionable. Submit an urgent letter of opposition to the White House and Trump\'s EPA urging them to drop their misguided rollback of critical public health protections right away!' + '</p>').css({'background-color': 'white', 'opacity': 0.5});
});
$('.box5').on('click','.town',function(){
    $('.town').remove();
  $('.box5').css({'background-color':'','opacity':''});
    $('.townview').show();
});

    }); //end ready
 