// 

$(document).ready(function() {
  var chartsInitialized = false;

  $(window).on('scroll', function() {
      if (!chartsInitialized) {
          $('.chart').each(function() {
              var chart = $(this);
              if (chart.visible()) { // Check if the chart is in the viewport
                  chart.easyPieChart({
                      barColor: "#f76002",
                      trackColor: "#474545",
                      lineWidth: 5,
                      lineCap: 'butt',
                      scaleLength: 0,
                      size: 150,
                      rotate: 270
                  });
                  chartsInitialized = true; // Prevent re-initialization
              }
          });
      }
  });

  // jQuery plugin to check if an element is in the viewport
  $.fn.visible = function() {
      var elementTop = this.offset().top;
      var elementBottom = elementTop + this.outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
  };
});