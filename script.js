/*$(document).ready(function(){
        $(window).scroll(function(){
            if(this.scroll>20){

                $('.nav').addclass('sticky')

            }
            else{
                
            }

        })
});
$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.navmenu').toggleclass("active");
    });
});
*/


/*button action script*/

$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });