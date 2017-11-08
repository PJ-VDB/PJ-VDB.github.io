
$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '5750213486',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '5750213486.1677ed0.3b2435ed19b3453f90e7e36ee42b6051',
        sortBy: 'most-recent',
        template: '<article class=""><a href="{{link}}"><img src="{{image}}" alt="{{caption}}" class="image"/></a><div class="caption">  <h3>{{caption}}</h3></div></article>',
    });


    userFeed.run();


});

var terms = $("ul li");

	function rotateTerm() {

	 var ct = $("#rotate").data("term") || 0;

	// console.log(terms.eq([ct]).text());
	 
	  $("#rotate").data("term", 
	  	ct == terms.length -1 ? 0 : ct + 1).text(terms.eq([ct]).text())
	  .fadeIn().delay(2000).fadeOut(200, rotateTerm);

	}
	$(rotateTerm);

//old
//template: '<div class="col-lg-4 instaimg hvr-float"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
//
//new
//        template: '<article><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="image"/></a><div class="caption"><h3>{{caption}}</h3></div></article>',

//<article><a href="{{link}}"><img src="{{image}}" alt="{{caption}}" class="image"/></a><div class="caption">  <h3>{{caption}}</h3></div></article>


// Change background depending on time of day
$(document).ready(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 19 || n < 6)
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’
	  document.body.className = "night";
	else if (n > 16 && n < 19)
	  // If time is between 4PM – 7PM sunset theme to ‘body’
	  document.body.className = "sunset";
	else
	  // Else use ‘day’ theme
	  document.body.className = "day";
});