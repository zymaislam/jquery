for (var i=0; i<data.length; i++){ //openbrace1
	
	var rowData = data[i];
	
	var $template =$('<div class="description">'+ 
				'<div class="titleWhat">'+rowData.titleWhat+'</div>'+
				'<div class="answerWhat">Project Reconnect,is overseen by the NYC Department of Homeless Services and aims to reinstate homeless shelter residents with family and friends outside of New York by buying them one-way bus tickets to go back home.Project Reconnect has been in place in one form or another since Ed Koch’s tenure as mayor, albeit by different names</div>'+
				'<div class="readMore">Read More</div>'+
				'<div class="moreInfo">'+
				'<div class="extraInfo">In the fiscal year of 2014, the city department spent fifty-thousand dollars. However the document of the preliminary budget hearing of 2015 shows that there is no money allocated for Project Reconnect</div>'
				+'</div>'
				+'</div>');
				
	$template.find(".readMore").on("click", toggleContent);
	
	function toggleContent(e) { //openbrace2
		$descriptionContainer = $(e.target).parent(); 
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

