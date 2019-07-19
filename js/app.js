;(function ($) {
  $(document).ready(function () {

    $('.gallery').masonry({
      itemSelector: '.gallery__item',
      horizontalOrder: true,
      gutter: 30
    });

    var filters = [];

    $(".portfolio-menu").on("click", "a", function (event) {
      event.preventDefault();
      $(this).toggleClass("active");
      var isChecked = $(this).hasClass("active");
      var filter = $(this).attr("data-filter");
      if (isChecked) {
        addFilter(filter);
      } else {
        removeFilter(filter);
      }
      // console.log(filters);
      $(".gallery").isotope({
        filter: filters.join(","),
        masonry: {
          horizontalOrder: true,
          gutter: 30
        }
      })
    });

    function addFilter(filter) {
      if (filters.indexOf(filter) == -1) {
        filters.push(filter);
      }
    };

    function removeFilter(filter) {
      var index = filters.indexOf(filter);
      if (index != -1) {
        filters.splice(index, 1);
      }
    };

  })
})(jQuery)