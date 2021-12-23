$(function () {

	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();

	// var blog = $("#blog");
	// var blogStart = blog.offset().top;
	// var blogHeight = blog.innerHeight();
	// console.log(blogStart, blogHeight, blogStart+blogHeight);

	/*Fixed header*/
	checkScroll(scrollOffset);

	$(window).on("scroll", function () {

		scrollOffset = $(this).scrollTop();
		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {

		if (scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

		// if(Math.floor(blogStart) <= scrollOffset && scrollOffset <= Math.floor(blogStart + blogHeight) ){
		// $("#nav a").removeClass("active");
		// $("[data-scroll = '#blog']").addClass("active");
		// }else{
		// $("[data-scroll = '#blog']").removeClass("active");
		// }
	}

	/*Smooth scroll*/
	$("[data-scroll]").on("click", function (e) {

		e.preventDefault();

		var $this = $(this),
			blockId = $this.data("scroll"),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 1000)

		$("#nav_toggle").removeClass("active");
		$("#nav").removeClass("active");

	});

	/*Menu navtoggle*/
	$("#nav_toggle").on("click", function (e) {

		e.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");

	})

})
