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
       value: "no",
       text: "No"
      },
      {
       value: "sneaker-net",
       text: "Sneaker Net"
      },
      {
       value: "data-download",
       text: "Data download"
      },
      {
       value: "web-service",
       text: "Web service (bespoke)"
      },
      {
       value: "standard-web-service",
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
       value: "0",
       text: "Not citeable"
      },
      {
       value: "1",
       text: "Citeable via local identifier"
      },
      {
       value: "2",
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
       value: "one",
       text: "no license"
      },
      {
       value: "two",
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
  insertStarRatings(dummyData);   
  
  //$( ".survey-results div#5star-average").text("Score: " + avg.toFixed(2));
  var badgelink = "https://img.shields.io/badge/oznome%20data%20rating-" + avg.toFixed(2) + "%20stars-yellow.svg"
  $( ".survey-results div#5star-average").append("<img src='"+badgelink+"'>");

  $(".survey-download ").html('<a href="data:' + datastr + '" download="data.json">download JSON</a>');
  $(".survey-questions ").append("<input id=\"btnreRun\" type=\"button\" onclick='reRunSurvey();' value=\"Modify\">");
  
  //alert(resultAsString); //send Ajax request to your web server.
};

var insertStarRatings = function (arrRating) {
	var arrRatingCategories = ['findable', 'accessible', 'interoperable', 'reusable', 'connected'];
    
	$.each(arrRatingCategories, function(i, category) {
		var id = category + "-rating";
		$("#"+id).rateit('value', arrRating[i]);
	});
	
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
