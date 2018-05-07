var book = $(".book");
var cover = $(".book .cover");

for (var i = 1; i <5; i++) {
	
	page = document.createElement("div");
	pageNumb = document.createElement("span");
	$(page).addClass("page").appendTo($(".book"));

	$(page).css('zIndex', -i);
};

cover.click(function() {
	$(this).css({
		transform: "rotateY(-179deg)",
	})
});
count=0;
 $(".page").click( function(e) {

 	if(parseInt($(this).css("zIndex"))>0){
 		$(this).css({
			transform: "rotateY(0deg)"
		})
 	}
 	else if(parseInt($(this).css("zIndex"))<0){
 		$(this).css({
			transform: "rotateY(-179deg)"
		})
 	}
  	$(this).css('zIndex', (parseInt($(this).css("zIndex")) * (- 1)));
})
$(".page").hover(	
	function () {
    	$(this).css({
    		"background-color":"red"
    	});
    },function () {
       	$(this).css({
       		"background-color":"blue"
       	});
    }
);


