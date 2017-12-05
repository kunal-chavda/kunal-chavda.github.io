$(document).ready(function(){

// Change Color of the header on scroll using Scroll Function

  var scroll_start = 0;
   var startchange = $('.banner');
   var offset = startchange.offset();
 if ($(window).width() > 640) {

    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $("nav.navbar.navbar-fixed-top").css({'transition':'all ease 0.5s','background-color': '#fff', 'box-shadow': '0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28)'});
          $("a.navbar-brand, ul.nav.navbar-nav a").css('color', '#000');
          $("span.icon-bar").css('background-color', '#000');
          $(".hvr-underline-from-center").addClass('changed');

       } else {
          $('nav.navbar.navbar-fixed-top').css('background-color', 'transparent');
          $("a.navbar-brand, ul.nav.navbar-nav a").css('color', '#fff');
          $(".hvr-underline-from-center").removeClass('changed');
          $("span.icon-bar").css('background-color', '#fff');
       }
   });
    }
    }
    else{
 if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $("nav.navbar.navbar-fixed-top").css({'transition':'all ease 0.5s','background-color': '#fff', 'box-shadow': '0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28)'});
          $("a.navbar-brand, ul.nav.navbar-nav a").css('color', '#000');
          $("span.icon-bar").css('background-color', '#000');
          $(".navbar-nav").css('background-color', '#FFF');
          $(".hvr-underline-from-center").addClass('changed');

       } else {
          $('nav.navbar.navbar-fixed-top').css('background-color', 'transparent');
          $("a.navbar-brand, ul.nav.navbar-nav a").css('color', '#fff');
          $(".hvr-underline-from-center").removeClass('changed');
          $(".navbar-nav").css('background-color', '#FFF');
          $("span.icon-bar").css('background-color', '#fff');
       }
   });
    }
    }
});

/*For Page scroll active class*/

// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight(),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 500);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});