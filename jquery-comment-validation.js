jQuery(function($) {
	var errorContainer = $("<div class='error'><h2><span style='color:red;'>*</span>Please fill out the required fields</h2></div>").appendTo("#commentform").hide();
	var errorLabelContainer = $("<div class='error errorlabels'></div>").appendTo("#commentform").hide();
	$("#commentform").validate({
		rules: {
			author: "required",
			email: {
				required: true,
				email: true
			},
			url: "url",
			comment: "required"
		},
		errorContainer: errorContainer,
		errorLabelContainer: errorLabelContainer,
		ignore: ":hidden"
	});
	$.validator.messages.required = "";
	$.validator.messages.email = "&raquo; " + $.validator.messages.email;
	$.validator.messages.url = "&raquo; " + $.validator.messages.url;
});