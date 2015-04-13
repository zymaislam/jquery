for (var i=0; i<data.length; i++) {//openbrace1

	var rowData = data[i];

	var $template = $('<div class="descriptionContainer">'+
	'<div class="mainQuote">'+rowData.titleWhat+'</div>'+
	'<div class="wholeQuote">'+rowData.answerWhat +'</div>'+
	'<div class="readMore">Read More</div>'+
	'<div class="moreInfo">'+
	
	'<div class="source">'+rowData.extraInfo+'				</div>'+
	'</div>'); //changed variable from template to $template to notify myself that I wrapped it

	$template.find(".readMore").on("click", toggleContent);

	function toggleContent(e) {//openbrace2
		$descriptionContainer = $(e.target).parent(); 
		console.log ($quoteContainer)
		if ($descriptionContainer.hasClass("expanded")) {//openbrace3//you can see content!
			$descriptionContainer.removeClass("expanded") //this command removes content
		}//closebrace3
		 else {//openbrace4
			$descriptionContainer.addClass("expanded"); //since you cannot see content, this adds content!
		}//openbrace4
	}//closera


	$('#dataContainer').append($template);

	}



