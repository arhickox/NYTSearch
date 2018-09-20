let searchKey = '';
let previous = '';
let records;
let page = 0;

$('document').ready(function () {
    var d = new Date();
    document.getElementById("datenyt").innerHTML = d;

    $('#searchBtn').on('click', function () {
        searchKey = $('#searchTerm').val().trim()   // grabs the user's search term
        records = $('#records').val();

        if (previous === searchKey) {  
            page++;                 // requests the next batch of articles if the 
        } else {                    // user clicks the search button twice. Else
            page = 0;               // if the search key is new, the page count resets
        }

        let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
        url += "?" + $.param({
            "api-key": "570821d2229143f680c8280a52df84d9",
            "q": searchKey,         
            "page" : page,  
            "begin_date": $('#beginDate').val().trim(), // grabs the begin date from the form
            "end_date": $('#endDate').val().trim(),     // grabs the end date from the form
        });

        $.ajax({
            url: url,
            method: "GET",      // ajax GET method requests data from the nytimes API
        }).done(function(result){
            console.log(result);    // log the response for debugging
            console.log('records ' + records);
            console.log('searchKey = ' + searchKey);

            $('#resultCard').empty();
            createElements(result);   // calls the createElements function to display the articles
        }).fail(function(err) {
            throw err;
        }); 
        
        previous = searchKey;
    });

    $('#clearBtn').on("click", function (){
        clear();           // call the clear function to clear all form fields
    });
    

});

function createElements (result) {
    let newDiv = $("<div>");        // create a new div for the response elements

    for (let x = 0; x < records; x++ ) {    // loop through all objects and display 
        newDiv.append(`
        <div class="card" onclick="window.open('${result.response.docs[x].web_url}', '_blank');">
        <div class="card-header">
            <h2>${result.response.docs[x].headline.main}</h2>
        </div>
        <div class="card-body">
            <h6 class="card-title">${result.response.docs[x].byline.original}</h6>
            <h5 class="card-text">Snippet: ${result.response.docs[x].snippet}</h5>
        </div>
        </div>
        <br>`);

        
        $('#resultCard').append(newDiv);
    }
}

const clear = () => $('#myForm')[0].reset();    // ES6 arrow functions for the win!!!              




