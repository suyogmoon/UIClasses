match1Req.done(function(res){
    $(".loadingBlock").hide();
    console.log("success ");
    displayMatchDetails('match1', res);
});