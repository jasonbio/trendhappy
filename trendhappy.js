/* trendhappy.js - in development, this doesn't actually work yet */

$(document).ready(function() {
	// click "See More" to expand all trending stories
	$("[id^=u_jsonp_3_]").click();
	$("[id^=u_jsonp_2_]").click();
	$("[id^=u_jsonp_4_]").click();
	$("[id^=u_ps_0_6_]").click();
	$("#u_ps_0_6_0").click();
	//$("#u_ps_0_6_6").click();
	//$("#u_jsonp_2_1v").click();
	//$("#u_jsonp_3_2d").click();
	$("#pagelet_trending_tags_and_topics").hide();
});

$("#pagelet_trending_tags_and_topics").hide();