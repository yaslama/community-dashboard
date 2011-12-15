google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(sizeChart)

function sizeChart() {
    // fetch our data
    $.getJSON('/data/size.json', function(json) {

        var data = new google.visualization.DataTable();
        var options = {title: 'phonegap-x.x.x.js filesize in kb'}

        data.addColumn('string', 'platform');
        data.addColumn('number', '1.0');
        data.addColumn('number', '1.1');
        data.addColumn('number', '1.2');

        // ftr, I hate this code
        var obj = { ios:['ios']
                  , android:['android']
                  , blackberry:['blackberry']
                  , windows:['windows']
                  , bada:['bada']
                  , webos:['webos']
                  , symbian:['symbian']
                  }

        // walk thru each release
        Object.keys(json).forEach(function(release) {
            // walk thru each platform for given release
            json[release].forEach(function(platform) {
                // asign kb to platform
                obj[platform.name].push(~~platform.js)
            })
        })

        // add it back and render the fkn chart
        data.addRows([obj.ios, obj.android, obj.blackberry, obj.windows, obj.bada, obj.webos, obj.symbian])
        var chart = new google.visualization.BarChart(document.getElementById('js-size'))
        chart.draw(data, options)
    })
}
