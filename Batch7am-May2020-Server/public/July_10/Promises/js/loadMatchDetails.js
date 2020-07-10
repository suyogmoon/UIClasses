function loadData() {
    $.ajax({
        url: 'http://localhost:8081/cricinfo/data/match1',
        dataType: 'JSON',
        data: {},
        method: 'GET',
        success: function(res) {
            console.log("success ");
            displayMatchDetails('match1', res);
        },
        error: function(err) {
            console.log("Error");
        }
    });
}

function displayMatchDetails(type, data) {
    
    $(".matchInfo_1").loadTemplate($("#matchTemplate"), data);
}

loadData();

