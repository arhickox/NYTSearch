var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"

url += "?" + $.param({
    "api-key": "0a94c61548784861b5488da2c9caaa10",
    "q": "president",
    //"page" : $("#recordsRetrieved").val(),
   // "begin_date": $("#beginDate").val(),
   // "end_date": $("#endDate").val(),
});
$.ajax({
    url: url,
    method: "GET",
}).then(function(response){
    console.log(response);
    const result = response.response.docs;
    console.log(result);

for (var i = 0; i < 5; i++) {
    const title = result[i].headline.main;
    const publishDate = result[i].pub_date;
    const snip = result[i].snippet;
    console.log(title);
    console.log(publishDate);
    console.log(snip);
}});