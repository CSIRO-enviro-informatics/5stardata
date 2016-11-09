var surveyJSON = {
 pages: [
  {
   name: "page1",
   questions: [
    {
     type: "multipletext",
     items: [
      {
       name: "dataset-name",
       title: "Name"
      },
      {
       name: "dataset-url",
       title: "URL"
      }
     ],
     name: "question1",
     title: "Enter dataset details"
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
      "one",
      {
       value: "two",
       text: "second value"
      },
      {
       value: "three",
       text: "third value"
      }
     ],
     name: "question3",
     title: "described and tagged, indexed in a well known system (can be general purpose or community specific) "
    },
    {
     type: "radiogroup",
     choices: [
      "one",
      {
       value: "two",
       text: "second value"
      },
      {
       value: "three",
       text: "third value"
      }
     ],
     name: "question4",
     title: "Denoted using a stable, persistent identifier"
    },
    {
     type: "radiogroup",
     choices: [
      "one",
      {
       value: "two",
       text: "second value"
      },
      {
       value: "three",
       text: "third value"
      }
     ],
     name: "question5",
     title: "represented using a common or community-endorsed (i.e. standard) format - loadable"
    }]
  },	
  {
   name: "page2",
   questions: [	
    {
     type: "radiogroup",
     choices: [
      "one",
      {
       value: "two",
       text: "second value"
      },
      {
       value: "three",
       text: "third value"
      }
     ],
     name: "question6",
     title: "structured using a discoverable, community-endorsed (standard?) schema or data model - useable"
    },
    {
     type: "radiogroup",
     choices: [
      "one",
      {
       value: "two",
       text: "second value"
      },
      {
       value: "three",
       text: "third value"
      }
     ],
     name: "question7",
     title: "Accessible using a well-described API - queriable, sub-settable"
    },
    {
     type: "radiogroup",
     choices: [
      "one",
      {
       value: "two",
       text: "second value"
      },
      {
       value: "three",
       text: "third value"
      }
     ],
     name: "question8",
     title: "REST API - web application-compatible"
    },
    {
     type: "radiogroup",
     choices: [
      "one",
      {
       value: "two",
       text: "second value"
      },
      {
       value: "three",
       text: "third value"
      }
     ],
     name: "question9",
     title: "internal elements (e.g. column definitions, units of measure) are linked to accessible (standard) definitions - comprehensible "
    }]
  },
  {
   name: "page4",
   questions: [
	
    {
     type: "radiogroup",
     choices: [
      "one",
      {
       value: "two",
       text: "second value"
      },
      {
       value: "three",
       text: "third value"
      }
     ],
     name: "question10",
     title: "Linked using externally defined identifiers (e.g. URIs) - crawlable"
    },
    {
     type: "radiogroup",
     choices: [
      "one",
      {
       value: "two",
       text: "second value"
      },
      {
       value: "three",
       text: "third value"
      }
     ],
     name: "question11",
     title: "Part of a regular data collection program or series, with a clear maintenance and update schedule"
    },
    {
     type: "radiogroup",
     choices: [
      "one",
      {
       value: "two",
       text: "second value"
      },
      {
       value: "three",
       text: "third value"
      }
     ],
     name: "question12",
     title: "Data-quality assessment available"
    },
    {
     type: "radiogroup",
     choices: [
      "one",
      {
       value: "two",
       text: "second value"
      },
      {
       value: "three",
       text: "third value"
      }
     ],
     name: "question13",
     title: "Origin and workflow that produced the data is available - provenance"
    },
    {
     type: "radiogroup",
     choices: [
      "one",
      {
       value: "two",
       text: "second value"
      },
      {
       value: "three",
       text: "third value"
      }
     ],
     name: "question14",
     title: "Conditions for re-use are available and clearly expressed - licensed "
    },
    {
     type: "radiogroup",
     choices: [
      "one",
      {
       value: "two",
       text: "second value"
      },
      {
       value: "three",
       text: "third value"
      }
     ],
     name: "question15",
     title: "Information about how the data has been used, and how many times"
    }
   ],
   title: "Dataset characteristics"
  },
  {
   name: "page5",
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
//Use onComplete event to save the data           
survey.onComplete.add(sendDataToServer);

function sendDataToServer(survey) {
  var resultAsString = JSON.stringify(survey.data);
  
  $( ".survey-results pre").text(resultAsString)
  var data = processSurveyData(survey.data);
  var ctx = $( ".survey-results canvas#surveyChart");
  updateSurveyChart(ctx, data);
  
  //alert(resultAsString); //send Ajax request to your web server.
};

var processSurveyData = function(data) {
	var p1 = []
	var p2 = {
		labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
		datasets: [
			{
				label: "My First dataset",
				backgroundColor: "rgba(179,181,198,0.2)",
				borderColor: "rgba(179,181,198,1)",
				pointBackgroundColor: "rgba(179,181,198,1)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgba(179,181,198,1)",
				data: [65, 59, 90, 81, 56, 55, 40]
			},
			{
				label: "My Second dataset",
				backgroundColor: "rgba(255,99,132,0.2)",
				borderColor: "rgba(255,99,132,1)",
				pointBackgroundColor: "rgba(255,99,132,1)",
				pointBorderColor: "#fff",
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgba(255,99,132,1)",
				data: [28, 48, 40, 19, 96, 27, 100]
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
	
	var myRadarChart = new Chart(ctx, {
		type: 'radar',
		data: data,
		options: options
	});
	
	
	return myRadarChart;
}
