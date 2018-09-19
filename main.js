let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"

$('document').ready(function () {

    $('#searchBtn').on('click', function () {

        url += "?" + $.param({
            "api-key": "570821d2229143f680c8280a52df84d9",
            "q": $('#searchTerm').val().trim(),         // grabs the user's search term
            "page" : 1,                                 // grabs the selected page range
            "begin_date": $('#beginDate').val().trim(), // grabs the begin date from the form
            "end_date": $('#endDate').val().trim(),     // grabs the end date from the form
        });

        let myResult;      // will store our response for future instances

        $.ajax({
            url: url,
            method: "GET",      // ajax GET method requests data from the nytimes API
        }).done(function(result){
            console.log(result);    // log the response for debugging
            myResult = result;
            createElements(myResult);   // calls the createElements function to display the articles
        }).fail(function(err) {
            throw err;
        }); 
        
    });
    

});

function createElements (result) {
    let newDiv = $("<div>");        // create a new div for the response elements

    for (let x = 0; x < result.response.docs.length; x++ ) {    // loop through all objects and display 
        newDiv.append(`<h3>${result.response.docs[x].headline.main}</h3>
            <p>${result.response.docs[x].byline.original}</p>
            <p>${result.response.docs[x].snippet}</p>`);
        $('#resultCard').append(newDiv);
    }
}


