$(document).ready(function() {
	var trig = 0;
	//API call and return quote
	$("#btnHit").on("click", function() {
		$.ajax({
			url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
			cache: false,
			success: function(result) {
				$("#quoteDiv").html(result[0].content + "<br>" + "- " + result[0].title);
				var clearQuote = result[0].content.replace(/(<([^>]+)>)/ig, "");
				var clearQuoter = result[0].title.replace(/(<([^>]+)>)/ig, "");
				$("a").attr("href", 'https://twitter.com/intent/tweet?text=' + clearQuote + '%0D%0A' + '- ' + clearQuoter);
			}
		});
		trig = 1;
	});
	//END - API call and return quote
	$("#btnTweet").on("click", function() {
		if (trig == 0) {
			$("#quoteDiv").html("<p>There is no tweet to share</p><p>Click the 'Hit me!' button to generate a new quote</p>");
		}
	});
});
