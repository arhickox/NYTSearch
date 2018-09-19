var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"

url += "?" + $.param({
    "api-key": "0a94c61548784861b5488da2c9caaa10",
    "q": $("#searchTerm").val(),
    "page" : $("#recordsRetrieved").val(),
    "begin_date": $("#beginDate").val(),
    "end_date": $("#endDate").val(),
});
$.ajax({
    url: url,
    method: "GET",
}).done(function(result){
    console.log(result);
}).fail(function(err) {
    throw err;
});

