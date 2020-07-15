function loadData() {
    var match1Req = $.ajax({
        url: 'http://localhost:8081/cricinfo/data/match1',
        dataType: 'JSON',
        data: {},
        method: 'GET'
    });  
    
    var match2Req = $.ajax({
        url: 'http://localhost:8081/cricinfo/match2',
        dataType: 'JSON',
        data: {},
        method: 'GET'
    }); 

    $.when(match1Req, match2Req).then(function(res1, res2){
        console.log(res1)
        $('.loadingBlock').hide();
        displayMatchDetails('matchInfo_1', res1[0]);
        displayMatchDetails('matchInfo_2', res2[0]);
       
    });
    
}

function displayMatchDetails(type, data) {
    var selector = '.' + type;
    $(selector).loadTemplate($("#matchTemplate"), data);
}

loadData();

