var API_HOST = 'https://oznome.csiro.au/5star-api'
var PAGE_URL = 'https://oznome.csiro.au/5star'

var surveyJSON = {
 pages: [
  {
   name: "page1",
   questions: [
    {
     type: "multipletext",
     isRequired: true,
     items: [
      {
       name: "dataset-name",
       title: "Dataset name or title"
      },
      {
       name: "dataset-url",
       title: "URL"
      }
     ],
     name: "question1",
     title: "Dataset identity"
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
       text: "By individual arrangement"
      },
      {
       value: "3",
       text: "File download"
      },
      {
       value: "4",
       text: "Institutional or community repository"
      },
      {
       value: "5",
       text: "Bespoke web service (informal API)"
      },
      {
       value: "6",
       text: "Bespoke web service (OpenAPI/Swagger)"
      },
      {
       value: "7",
       text: "Standard web service API (e.g. OGC)"
      }
     ],
     commentText: "5-star published+hosted",
     isRequired: true,
     name: "question2",
     title: "Published - is the data accessible to users other than the creator or owner?"
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
       text: "Local identifier"
      },
      {
       value: "3",
       text: "Web address (URL - not guaranteed stable)"
      },
      {
       value: "4",
       text: "Persistent web identifier (URI)"
      }
     ],
     commentText: "5-star citeable",
     name: "question3",
     title: "Citeable - denoted using a formal identifier"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "No metadata"
      },
      {
       value: "2",
       text: "Abstract and keywords"
      },
      {
       value: "3",
       text: "Basic metadata (e.g. Dublin Core)"
      },
      {
       value: "4",
       text: "Specialized metadata (e.g. Darwin Core, ISO 19115/19139, schema.org scientific data profile)"
      },
      {
       value: "5",
       text: "Rich metadata using multiple standard RDF vocabularies (e.g. DCAT, PROV, ADMS, GeoDCAT, FOAF, ORG, GeoSPARQL)"
      }
     ],
     commentText: "5-star described",
     name: "question4",
     title: "Described - tagged with metadata"
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
       text: "local or internal system only"
      },
      {
       value: "3",
       text: "community wide or jurisdictional system"
      },
      {
       value: "4",
       text: "highly ranked in general purpose index (Google, Bing etc)"
      }
     ],
     commentText: "5-star findable",
     name: "question5",
     title: "Findable - indexed in a discovery system "
    }
   ],
   title: "... publication and indexing"
  },
  {
   name: "page2",
   questions: [
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "bespoke format (text, binary)"
      },
      {
       value: "2",
       text: "one standard format, denoted by a MIME-type"
      },
      {
       value: "3",
       text: "multiple standard formats"
      }
     ],
     commentText: "5-star loadable",
     name: "question6",
     title: "Loadable - represented using a common or community-endorsed (i.e. standard) format"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "no formal schema"
      },
      {
       value: "2",
       text: "explicit schema or data model, formalized in DDL, XSD, DDI, RDFS, JSON-Schema, data-package or similar"
      },
      {
       value: "3",
       text: "community-shared schema or data model , available from a standard location"
      }
     ],
     name: "question7",
     title: "Useable - structured using a discoverable, community-endorsed (standard?) schema or data model"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "local field codes or labels"
      },
      {
       value: "2",
       text: "labels with full text explanations"
      },
      {
       value: "3",
       text: "community standard labels (e.g. CF Conventions, UCUM units)"
      },
      {
       value: "4",
       text: "some fields linked to externally managed definitions"
      },
      {
       value: "5",
       text: "all fields linked to standard, externally managed definitions"
      }
     ],
     name: "question8",
     title: "Comprehensible - supported with unambiguous definitions for all internal elements"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "no links"
      },
      {
       value: "2",
       text: "in-bound links from a catalogue or landing-page"
      },
      {
       value: "3",
       text: "out-bound links to related data and definitions"
      }
     ],
     name: "question9",
     title: "Linked - to other data and definitions using public identifiers (e.g. URIs)"
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
       text: "license described in text"
      },
      {
       value: "3",
       text: "link to a standard license (e.g. Creative Commons)"
      }
     ],
     name: "question10",
     title: "Licensed - conditions for re-use are available and clearly expressed"
    }
   ],
   title: "... linked and useable"
  },
  {
   name: "page3",
   questions: [
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "once-off dump, no ongoing commitment"
      },
      {
       value: "2",
       text: "best effort, project website"
      },
      {
       value: "3",
       text: "public or institutional repository (e.g. CKAN, GitHub)"
      },
      {
       value: "4",
       text: "certified repository"
      }
     ],
     name: "question11",
     title: "Curated - commitment to ensuring the data is available long term"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "one-time dataset"
      },
      {
       value: "2",
       text: "part of series - occasional/irregular update"
      },
      {
       value: "3",
       text: "part of series - regular scheduled updates"
      }
     ],
     name: "question12",
     title: "Updated - part of a regular data collection program or series, with clear maintenance arrangements and update schedule"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "no quality or lineage information"
      },
      {
       value: "2",
       text: "text lineage statement"
      },
      {
       value: "3",
       text: "formal provenance trace (e.g. PROV-O)"
      }
     ],
     name: "question13",
     title: "Assessable - accompanied by, or linked to, a data-quality assessment and description of the origin and workflow that produced the data"
    },
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "no information about usage"
      },
      {
       value: "2",
       text: "usage statistics available"
      },
      {
       value: "3",
       text: "Clearly endorsed by reputable organization or framework"
      }
     ],
     name: "question14",
     title: "Trusted -  accompanied by, or linked to, information about how the data has been used, by whom, and how many times"
    }
   ],
   title: "... maintenance and provenance"
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
  
  //$( ".survey-results div#5star-average").text("Overall score: " + avg.toFixed(2));
  var badgelink = "https://img.shields.io/badge/oznome%20data%20rating-" + avg.toFixed(2) + "%20stars-yellow.svg"
  $( ".survey-results div#5star-average").append("<img src='"+badgelink+"'>");
  $( ".survey-results div.dataset-title").append('<h3>'+dataset_name+'</h3>');

  
 // $(".survey-download ").html('<a href="data:' + datastr + '" download="data.json">download JSON</a>');

  if(numTimesUserCompletedSurvey == 0 && viewMode) {
	displaySharableLink(dataRatingId);
    $(".survey-end-learnmore ").append("<div>Learn more about the <a target=\'out\' href=\"https://confluence.csiro.au/display/OZNOME/Data+ratings\">rating scheme</a>.") 
  }
  else {
	$(".survey-shareable-link ").empty();
	$(".survey-end-learnmore ").empty();

    $(".survey-questions ").append("<input id=\"btnreRun\" type=\"button\" onclick='reRunSurvey();' value=\"Modify\">");
	$(".survey-shareable-link ").append("<input id=\"btnGetShareableLink\" type=\"button\" onclick='getShareableLink();' value=\"Click to get shareable link\">");
    $(".survey-end-learnmore ").append("<div>Learn more about the <a target=\'out\' href=\"https://confluence.csiro.au/display/OZNOME/Data+ratings\">rating scheme</a>.") 
  }
  
  numTimesUserCompletedSurvey  = numTimesUserCompletedSurvey + 1;
};

var resetShareableLink = function() {
	$(".survey-shareable-link ").empty();
	  $(".survey-end-learnmore ").empty();
}

var getShareableLink = function() {
	var resultAsString = JSON.stringify(survey.data);
    var dataset_name = "";
    if('question1' in survey.data && 'dataset-name' in survey.data['question1']) {
		dataset_name = survey.data['question1']['dataset-name'];
    }
	
    var arrRating = calculateRatings(survey.data);
    avg = calcAverage(arrRating);
 
    $.ajax({ 
      url: API_HOST + '/data-rating/', 
	  type: "POST",
	  data: { 
	     name: dataset_name,
		 data_rating: resultAsString
	    }
    })
    .done(
       function (a) { 
         console.log(a);
		 displaySharableLink(a["_id"]);

	 }); 
};

var displaySharableLink  = function(id){
	 //var currpage = window.location.pathname;
	 var currpage = PAGE_URL;
	 var link = currpage + '?view=' + id;
   	 $(".survey-shareable-link ").empty();
	 $(".survey-shareable-link ").append("<div>Shareable link: <a href=\"" + link + "\">" + link + "</a></div>");
	 
	 if(viewMode) {
	    //also display time
		strDate = String(Date(dataRatingObj.updatedAt))

		//$(".survey-shareable-link ").append("<div>Last updated: " + strDate + "</div>");
	 	
	 }
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
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
		accessible.push(scaleRatingsUpFrom(data['question2'],7));		
	}
	if('question3' in data) {
		findable.push(scaleRatingsUpFrom(data['question3'],4)); //scale up from 3 options
	}
	if('question4' in data) { //scale up from 3 options
		reusable.push(scaleRatingsUpFrom(data['question4'],5));
		findable.push(scaleRatingsUpFrom(data['question4'],5)); 
	}
	if('question5' in data) { //scale up from 3 options
		reusable.push(scaleRatingsUpFrom(data['question5'],4));
		findable.push(scaleRatingsUpFrom(data['question5'],4)); 		
	}
	if('question6' in data) { //scale up from 4 options
		interoperable.push(scaleRatingsUpFrom(data['question6'],3));		
	}
	if('question7' in data) { //scale up from 3 options
		interoperable.push(scaleRatingsUpFrom(data['question7'],3));
		reusable.push(scaleRatingsUpFrom(data['question7'],3));	
	}
	if('question8' in data) { //scale up from 3 options
		interoperable.push(scaleRatingsUpFrom(data['question8'],5));		
	}
	if('question9' in data) { //scale up from 3 options
		interoperable.push(scaleRatingsUpFrom(data['question9'],3));
	}
	if('question10' in data) { //scale up from 3 options
		reusable.push(scaleRatingsUpFrom(data['question10'],3));
	}
	if('question11' in data) { //scale up from 3 options
		accessible.push(scaleRatingsUpFrom(data['question11'],4));
	}
	if('question12' in data) { //scale up from 2 options
		trusted.push(scaleRatingsUpFrom(data['question12'],3));
	}
	if('question13' in data) { //scale up from 3 options
		reusable.push(scaleRatingsUpFrom(data['question13'],3));
	}
	if('question14' in data) { //scale up from 2 options
		trusted.push(scaleRatingsUpFrom(data['question14'],3));
	}
	if('question15' in data) { //scale up from 2 options
		
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
	if(maxNumOptions == 6) {
		newVal = curr;
		if(curr == 1) 
			newVal = 0;
		if(curr == 2) 
			newVal = 1;		
		if(curr == 3) 
			newVal = 2;	
		if(curr == 4) 
			newVal = 3;
		if(curr == 5) 
			newVal = 4;
		if(curr == 6) 
			newVal = 5;
	}

	if(maxNumOptions == 7) {
		newVal = curr;
		if(curr == 1) 
			newVal = 0;
		if(curr == 2) 
			newVal = 1;		
		if(curr == 3) 
			newVal = 2;	
		if(curr == 4) 
			newVal = 3;
		if(curr == 5) 
			newVal = 3.5;
		if(curr == 6) 
			newVal = 4;
		if(curr == 7) 
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
	resetShareableLink();

	//$('#surveyContainer').empty();
	//survey = new Survey.Survey(surveyJSON, "surveyContainer");	
    //survey.onComplete.add(sendDataToServer);
	survey.data = data;
	modifyMode = true;
    survey.render('survey');
	$("#btnreRun").remove();
}

var initialLoad = false;
var viewMode = false;
var modifyMode = false;
var dataRatingId = '';
var dataRatingObj = {};
var numTimesUserCompletedSurvey = 0;

$(this).ready(function() {
    initialLoad = true;
  
    var viewDataRating = getUrlParameter('view');
    if(viewDataRating) {
	   viewMode = true;
	   dataRatingId = viewDataRating;
       console.log(viewDataRating);
       $.getJSON(API_HOST + '/data-rating/' + viewDataRating, function(data) {
         console.log(data); 
		 dataRatingObj = data;
         //console.log(JSON.parse('{"test":"abc"}')); 
         surveydataobj =JSON.parse(data.data_rating) 
		 console.log(surveydataobj); 
	     survey.data = surveydataobj;
		 
         survey.render('survey');
		 sendDataToServer(survey);
       })

    }

	//Use onComplete event to save the data           
	survey.onComplete.add(sendDataToServer);

});
