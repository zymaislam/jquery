for (var i=0; i<data.length; i++){ //openbrace1
	
	var rowData = data[i];
	
	var $template =$('<div class="description">'+ 
				'<div class="titleWhat">'+rowData.titleWhat+'</div>'+
				'<div class="answerWhat">'+rowData.answerWhat+'</div>'
				+
				'<div class="readMore">Read More</div>'+
				'<div class="moreInfo">'+
				'<div class="extraInfo">'+rowData.extraInfo+'</div>'
				+'</div>'
				+'</div>');
				
	$template.find(".readMore").on("click", toggleContent);
	
	function toggleContent(e) { //openbrace2
		$descriptionContainer = $(this).parent(); 
//openbrace3
		if ($descriptionContainer.hasClass("expanded")) {//you can see content!
			$descriptionContainer.removeClass("expanded") //this command removes content
		}//closebrace3
		 else { //openbrace4
			$descriptionContainer.addClass("expanded"); //since you cannot see content, this adds content!
		} //closebrace4
	} //closebrace2

			
	$('#dataContainer').append($template);

	} //closebrace1

