let index = 0;
const totalWorkItems = $(".work-item").length;

$(document).ready(function () {
  let viewPortHeight = window.innerHeight;

  $(".lightbox-img").css("max-height", viewPortHeight * 0.9 + "px");

  //lightbox
  $(".work-item-inner").click(function () {
    index = $(this).parent(".work-item").index();
    $(".lightbox").addClass("open");
    lightboxSlideShow();
    $(".lightbox .prev").click(function () {
      if (index == 0) {
        index = totalWorkItems - 1;
      } else {
        index--;
      }
      lightboxSlideShow();
    });
    $(".lightbox .next").click(function () {
      if (index == totalWorkItems - 1) {
        index = 0;
      } else {
        index++;
      }
      lightboxSlideShow();
    });
  });

  //close lightbox
  $(".lightbox-close").click(function () {
    $(".lightbox").removeClass("open");
  });

  //close lightbox when clicking outside of image box
  $(".lightbox").click(function (event) {
    if ($(event.target).hasClass("lightbox")) {
      $(this).removeClass("open");
    }
  });
});

function lightboxSlideShow() {
  const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
  const category = $(".work-item").eq(index).find("h4").html();
  $(".lightbox-img").attr("src", imgSrc);
  $(".lightbox-category").html(category);
  $(".lightbox-counter").html(totalWorkItems + "/" + (index + 1));
}
