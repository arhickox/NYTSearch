let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
let searchKey = '';
let previous = '';
let records;
let page = 0;

$('document').ready(function () {

    $('#searchBtn').on('click', function () {
        searchKey = $('#searchTerm').val().trim()   // grabs the user's search term
        records = $('#records').val();

        /*if (previous === searchKey) {
            page++;
        }*/

        url += "?" + $.param({
            "api-key": "570821d2229143f680c8280a52df84d9",
            "q": searchKey,         
            "page" : page,  
            "begin_date": $('#beginDate').val().trim(), // grabs the begin date from the form
            "end_date": $('#endDate').val().trim(),     // grabs the end date from the form
        });

        let myResult;      // will store our response for future instances

        $.ajax({
            url: url,
            method: "GET",      // ajax GET method requests data from the nytimes API
        }).done(function(result){
            console.log(result);    // log the response for debugging
            console.log('records ' + records);
            myResult = result;
            $('#resultCard').empty();
            createElements(myResult);   // calls the createElements function to display the articles
        }).fail(function(err) {
            throw err;
        }); 
        
        //previous = searchKey;
    });

    $('#clearBtn').on("click", function (){
        clear();           // call the clear function to clear all form fields
    });
    

});

function createElements (result) {
    let newDiv = $("<div>");        // create a new div for the response elements

    for (let x = 0; x < records; x++ ) {    // loop through all objects and display 
        newDiv.append(`<h3>${result.response.docs[x].headline.main}</h3>
            <p>${result.response.docs[x].byline.original}</p>
            <p>${result.response.docs[x].snippet}</p>
            <a href=${result.response.docs[x].web_url} target="_blank">${result.response.docs[x].web_url}</a>`);
        $('#resultCard').append(newDiv);
    }
}

const clear = () => {               // ES6 arrow functions for the win!!!       
    $('#myForm')[0].reset();        
} 



