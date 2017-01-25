var surveyJSON = {
 pages: [
  {
   name: "page1",
   questions: [
    {
     type: "multipletext",
     name: "question1",
     title: "Enter dataset details",
     items: [
      {
       name: "dataset-name",
       title: "Name"
      },
      {
       name: "dataset-url",
       title: "URL"
      }
     ]
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "No"
      },
      {
       value: "2",
       text: "Sneaker Net"
      },
      {
       value: "3",
       text: "Data download"
      },
      {
       value: "4",
       text: "Web service (bespoke)"
      },
      {
       value: "5",
       text: "Web service (standardised - e.g. OGC)"
      }
     ],
     name: "question2",
     title: "Is the data accessible to users other than the creator or owner?"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "Not citeable"
      },
      {
       value: "2",
       text: "Citeable via local identifier"
      },
      {
       value: "3",
       text: "Citeable via stable persistent identifier"
      }
     ],
     name: "question4",
     title: "Denoted using a stable, persistent identifier"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "no"
      },
      {
       value: "2",
       text: "internal system only"
      },
      {
       value: "3",
       text: "community wide system"
      }
     ],
     name: "question3",
     title: "Described and tagged, indexed in a well known system (can be general purpose or community specific) "
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "no"
      },
      {
       value: "2",
       text: "informal format"
      },
      {
       value: "3",
       text: "community-agreed format"
      }
     ],
     name: "question5",
     title: "Represented using a common or community-endorsed (i.e. standard) format - loadable"
    }
   ]
  },
  {
   name: "page2",
   questions: [
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "no schema"
      },
      {
       value: "2",
       text: "bespoke schema or data model"
      },
      {
       value: "3",
       text: "internally shared schema or data model"
      },
      {
       value: "4",
       text: "community-shared schema or data model "
      }
     ],
     name: "question6",
     title: "Structured using a discoverable, community-endorsed (standard?) schema or data model - useable"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "no"
      },
      {
       value: "2",
       text: "Accessible via bespoke API"
      },
      {
       value: "3",
       text: "Accessible via well-described standard API"
      }
     ],
     name: "question7",
     title: "Accessible using a well-described API - queriable, sub-settable"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "No"
      },
      {
       value: "2",
       text: "Partial"
      },
      {
       value: "3",
       text: "Yes"
      }
     ],
     name: "question8",
     title: "REST API - web application-compatible"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "no"
      },
      {
       value: "2",
       text: "Some elements are linked"
      },
      {
       value: "3",
       text: "All elements are linked"
      }
     ],
     name: "question9",
     title: "Internal elements (e.g. column definitions, units of measure) are linked to accessible (standard) definitions - comprehensible "
    }
   ]
  },
  {
   name: "page3",
   questions: [
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "no"
      },
      {
       value: "2",
       text: "partial"
      },
      {
       value: "3",
       text: "yes"
      }
     ],
     name: "question10",
     title: "Linked using externally defined identifiers (e.g. URIs) - crawlable"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "no"
      },
      {
       value: "2",
       text: "yes"
      },
      {
       value: "3",
       text: "yes and backed by institution as a trusted repository"
      }
     ],
     name: "question11",
     title: "Part of a regular data collection program or series, with a clear maintenance and update schedule"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "no"
      },
      {
       value: "2",
       text: "yes"
      }
     ],
     name: "question12",
     title: "Data-quality assessment available"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "no"
      },
      {
       value: "2",
       text: "partial provenance"
      },
      {
       value: "3",
       text: "full provenance"
      }
     ],
     name: "question13",
     title: "Origin and workflow that produced the data is available - provenance"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "no license"
      },
      {
       value: "2",
       text: "clear license specified"
      }
     ],
     name: "question14",
     title: "Conditions for re-use are available and clearly expressed - licensed "
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "no information"
      },
      {
       value: "2",
       text: "information available"
      }
     ],
     name: "question15",
     title: "Information about how the data has been used, and how many times"
    }
   ],
   title: "Dataset characteristics"
  },
  {
   name: "page4",
   questions: [
    {
     type: "radiogroup",
     choices: [
      "low",
      {
       value: "med",
       text: "medium"
      },
      "high"
     ],
     isRequired: true,
     name: "mvvmUsing",
     title: "Complexity of the project"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "1 discipline"
      },
      {
       value: "2-4",
       text: "2-4 disciplines"
      },
      {
       value: "5",
       text: "5 or more disciplines"
      }
     ],
     hasOther: true,
     isRequired: true,
     name: "mvvm",
     title: "Interdisciplinary project?"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "1 organisation"
      },
      {
       value: "2",
       text: "2-4 organisations"
      },
      {
       value: "3",
       text: "5 or more organisations"
      }
     ],
     name: "question16",
     title: "Cross-organisational project?"
    }
   ],
   title: "Project, organisational, institutional"
  }
 ],
 title: "Tell us about your data",
 triggers: [
  {
   type: "visible",
   operator: "equal",
   value: "Yes",
   name: "frameworkUsing",
   questions: [
    "framework"
   ]
  },
  {
   type: "visible",
   operator: "equal",
   value: "Yes",
   name: "mvvmUsing",
   questions: [
    "mvvm"
   ]
  }
 ]
}

Survey.Survey.cssType = "bootstrap";

var survey = new Survey.Survey(surveyJSON, "surveyContainer");


function sendDataToServer(survey) {
  $( ".survey-results div#5star-average").empty();
  $( ".survey-results div.dataset-title").empty();
  var resultAsString = JSON.stringify(survey.data);
  var datastr = "text/json;charset=utf-8," + encodeURIComponent(resultAsString);   
  
  var dummyData = [1.1, 3.3, 1.2, 3.3, 5];
  var values = dummyData
  let sum = values.reduce((previous, current) => current += previous);
  let avg = sum / values.length;
  
  //$( ".survey-results pre").text(resultAsString)
  
  /*  Commenting out Chart functionality
  var data = processSurveyData(survey.data);
  var ctx = $( ".survey-results canvas#surveyChart");
  updateSurveyChart(ctx, data);
  
  
  */
  var dataset_name = "";
  if('question1' in survey.data && 'dataset-name' in survey.data['question1']) {
		dataset_name = survey.data['question1']['dataset-name'];
  }
	
  var arrRating = calculateRatings(survey.data);
  avg = calcAverage(arrRating);
  
  //insertStarRatings(dummyData);   
  insertStarRatings(arrRating);   
  
  //$( ".survey-results div#5star-average").text("Score: " + avg.toFixed(2));
  var badgelink = "https://img.shields.io/badge/oznome%20data%20rating-" + avg.toFixed(2) + "%20stars-yellow.svg"
  $( ".survey-results div#5star-average").append("<img src='"+badgelink+"'>");
  $( ".survey-results div.dataset-title").append('<h3>'+dataset_name+'</h3>');

  
  $(".survey-download ").html('<a href="data:' + datastr + '" download="data.json">download JSON</a>');
  $(".survey-questions ").append("<input id=\"btnreRun\" type=\"button\" onclick='reRunSurvey();' value=\"Modify\">");
  
  //alert(resultAsString); //send Ajax request to your web server.
};

var insertStarRatings = function (arrRating) {
	var arrRatingCategories = ['findable', 'accessible', 'interoperable', 'reusable', 'trusted'];
    
	$.each(arrRatingCategories, function(i, category) {
		var id = category + "-rating";
		$("#"+id).rateit('value', arrRating[i]);
	});
	
}

var calculateRatings = function(data) {
	var findable = [];
	var accessible = [];
	var interoperable = [];
	var reusable = [];
	//var connectable = [];
	var trusted = [];

	if('question1' in data && 'dataset-name' in data['question1']) {
		label = data['question1']['dataset-name'];
	}
	
	if('question2' in data) {
		accessible.push(scaleRatingsUpFrom(data['question2'],5));		
	}
	if('question3' in data) {
		findable.push(scaleRatingsUpFrom(data['question3'],3)); //scale up from 3 options
	}
	if('question4' in data) { //scale up from 3 options
		reusable.push(scaleRatingsUpFrom(data['question4'],3));
		findable.push(scaleRatingsUpFrom(data['question4'],3)); 
	}
	if('question5' in data) { //scale up from 3 options
		interoperable.push(scaleRatingsUpFrom(data['question5'],3));		
	}
	if('question6' in data) { //scale up from 4 options
		interoperable.push(scaleRatingsUpFrom(data['question6'],4));
		reusable.push(scaleRatingsUpFrom(data['question6'],4));
	}
	if('question7' in data) { //scale up from 3 options
		accessible.push(scaleRatingsUpFrom(data['question7'],3));		
	}
	if('question8' in data) { //scale up from 3 options
		accessible.push(scaleRatingsUpFrom(data['question8'],3));		
	}
	if('question9' in data) { //scale up from 3 options
		interoperable.push(scaleRatingsUpFrom(data['question9'],3));
	}
	if('question10' in data) { //scale up from 3 options
		interoperable.push(scaleRatingsUpFrom(data['question10'],3));
	}
	if('question11' in data) { //scale up from 3 options
		trusted.push(scaleRatingsUpFrom(data['question11'],3));
	}
	if('question12' in data) { //scale up from 2 options
		trusted.push(scaleRatingsUpFrom(data['question12'],2));
	}
	if('question13' in data) { //scale up from 3 options
		reusable.push(scaleRatingsUpFrom(data['question13'],3));
	}
	if('question14' in data) { //scale up from 2 options
		reusable.push(scaleRatingsUpFrom(data['question14'],2));
	}
	if('question15' in data) { //scale up from 2 options
		trusted.push(scaleRatingsUpFrom(data['question15'],2));
	}
	if('question16' in data) {
		
	}
	if('question17' in data) {
	}

	//f(2) a(3) i(4) r(3) c(0) t(3)
    var f_avg = calcAverage(findable);
	var a_avg = calcAverage(accessible);
	var i_avg = calcAverage(interoperable);
	var r_avg = calcAverage(reusable);
	var t_avg = calcAverage(trusted);	
		
	return [f_avg, a_avg, i_avg, r_avg, t_avg];
	
}

var calcAverage = function (values) {
	let sum = values.reduce((previous, current) => current += previous);
    let avg = sum / values.length;
	return avg;
}

var scaleRatingsUpFrom = function (rating, maxNumOptions) {
	var newVal = 0;
	var curr = parseInt(rating);
	if(maxNumOptions == 2) {
		newVal = curr;
		if(curr == 1) 
			newVal = 0;
		
		if(curr == 2) 
			newVal = 5;
		
	}
	if(maxNumOptions == 3) {
		newVal = curr;
		if(curr == 1) 
			newVal = 0;
		if(curr == 2) 
			newVal = 2.5;		
		if(curr == 3) 
			newVal = 5;				
	}
	if(maxNumOptions == 4) {
		newVal = curr;
		if(curr == 1) 
			newVal = 0;
		if(curr == 2) 
			newVal = 2;		
		if(curr == 3) 
			newVal = 3.5;	
		if(curr == 4) 
			newVal = 5;	
	}
	
	if(maxNumOptions == 5) {
		newVal = curr;
		if(curr == 1) 
			newVal = 0;
		if(curr == 2) 
			newVal = 2;		
		if(curr == 3) 
			newVal = 3;	
		if(curr == 4) 
			newVal = 4;
		if(curr == 5) 
			newVal = 5;
	}

	return newVal;
}

var processSurveyData = function(data) {
	var label = "Dataset name";
	if('question1' in data && 'dataset-name' in data['question1']) {
		label = data['question1']['dataset-name'];
	}
	var p1 = []
	var p2 = {
		labels: ["Findable", "Accessible", "Interoperable", "Reusable", "Connected"],
		datasets: [
			{
				label: label,
				backgroundColor: "rgba(255,99,132,0.2)",
				borderColor: "rgba(255,99,132,1)",
				pointBackgroundColor: "rgba(255,99,132,1)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgba(255,99,132,1)",
				data: [1.1, 3.3, 1.2, 3.3, 5]
			}
		]
	};
	
	return p2;
}

var updateSurveyChart = function(ctx, data) {
	var options = {
            scale: {
                ticks: {
                    beginAtZero: true
                }
		}
	};
	
	var myRadarChart = new Chart(ctx, {
		type: 'radar',
		data: data,
		options: options
	});
	
	
	return myRadarChart;
}

function reRunSurvey() {
	var data = survey.data;
    survey.clear();
	//$('#surveyContainer').empty();
	//survey = new Survey.Survey(surveyJSON, "surveyContainer");	
    //survey.onComplete.add(sendDataToServer);
	survey.data = data;
	
    survey.render('survey');
	
	$("#btnreRun").remove();
}

$(this).ready(function() {

	//Use onComplete event to save the data           
	survey.onComplete.add(sendDataToServer);

});
