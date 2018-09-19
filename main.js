var url = `https://api.nytimes.com/svc/search/v2/articlesearch.json`

url += "?" + $.param({
    "api-key": "570821d2229143f680c8280a52df84d9",
    "q": 'president',
    "page": 3,
    "begin_date": "20160808",
    "end_date": "20180808"
});
$.ajax({
    url: url,
    method: "GET",
}).done(function(result){
    console.log(result);
    console.log()
}).fail(function(err) {
    throw err;
});