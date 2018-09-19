var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json`

url += "?" + $.param({
    "api-key": "####",
    "q": "####"
});
$.ajax({
    url: url;
    method: "GET",
}).done(function(result){
    console.log(result);
}).fail(function(err) {
    throw err;
});