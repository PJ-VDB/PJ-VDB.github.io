
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

//old
//template: '<div class="col-lg-4 instaimg hvr-float"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
//
//new
//        template: '<article><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="image"/></a><div class="caption"><h3>{{caption}}</h3></div></article>',

//<article><a href="{{link}}"><img src="{{image}}" alt="{{caption}}" class="image"/></a><div class="caption">  <h3>{{caption}}</h3></div></article>