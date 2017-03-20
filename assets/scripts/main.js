$(document).ready(function(){
    $('#vertudo').on('click', function(){
        $('#blog + .page-content, #blog + .page-content > .wrapper').css({'height':'100%'});
        $('#vejamais').hide();
    });
    
     $("button[data-anchor]").on('click', function() {
        var anchor = $(this).data('anchor');
        $('html,body').animate({
          scrollTop: $("#" + anchor).offset().top
        }, 'slow');
      });
      
      $('#navbar a:not(:first-child)').on('click', function(e){
          e.preventDefault();
          var id = $(this).attr('href');
          $('html,body').animate({
              scrollTop: $(id).offset().top
            }, 'slow');
      });
      
      $('#btnloja').on('click', function(){
          window.open('https://www.lojameeplebrjogos.com.br/', '_blank');
      })
})