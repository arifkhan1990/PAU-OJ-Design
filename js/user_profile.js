
function randomDate(start, end) {
    var date = new Date(+start + Math.random() * (end - start));
    return moment(date).format('YYYY-MM-DD');
}

var events = ( Math.random() * 200 ).toFixed(0);
var data = [];
for (var i = 0; i < events; i++ ) {
    data.push({
        count: parseInt( ( Math.random() * 200 ).toFixed(0) ),
        date: randomDate( moment().subtract(1, 'year').subtract(5,'months').format('x'), moment().format('x') )
    });
}

$("#cal-heatmap").CalendarHeatmap(data, {
    labels: {
    days: true,
    months: true,
    custom: {
        weekDayLabels: null,
        monthLabels: null
    }
},
});

$("#heatmap-2").CalendarHeatmap(data, {
    title: "Gradient \"red\", end one month from current",
    lastMonth: moment().month(),
    coloring: "red",
    legend: {
        minLabel: "Fewer"
    },
    labels: {
        custom: {
            monthLabels: "MMM"
        }
    }
});

$("#heatmap-3").CalendarHeatmap(data, {
    title: "Gradient \"electric\", labels days and custom month labels, end one year from current",
    months: 5,
    lastYear: moment().subtract(1,'years').year(),
    coloring: "electric",
    legend: {
        align: "left",
        minLabel: "Fewer"
    },
    labels: {
        days: true,
        custom: {
            monthLabels: "MMM 'YY"
        }
    },
    tooltips:{
        show: true
    }
});

$("#heatmap-4").CalendarHeatmap( [], {
    title: "No Data"
});

// Highcharts.chart('contestGraph', {
//     chart: {
//         type: 'scatter',
//         margin: [20,20,50,60],
//         events: {
//             click: function (e) {
//                 // find the clicked values and the series
//                 // var x = Math.round(e.xAxis[0].value),
//                 //     y = Math.round(e.yAxis[0].value),
//                 //     series = this.series[0];

//                 // Add it
//                 // series.addPoint([x, y]);

//             }
//         }
//     },
//     title: {
//         text: ''
//     },
//     subtitle: {
//     },
//     accessibility: {
//         announceNewData: {
//             enabled: true
//         }
//     },
//     xAxis: {
//         gridLineWidth: 1,
//         minPadding: 0.2,
//         maxPadding: 0.2,
//         maxZoom: 60
//     },
//     yAxis: {
//         title: {
//             text: 'Score'
//         },
//         minPadding: 0.2,
//         maxPadding: 0.2,
//         maxZoom: 60,
//         plotLines: [{
//             value: 0,
//             width: 1,
//             color: '#808080'
//         }]
//     },
//     legend: {
//         enabled: false
//     },
//     exporting: {
//         enabled: false
//     },
//     plotOptions: {
//         series: {
//             lineWidth: 1,
//             point: {
//                 events: {
//                     click: function () {
//                         // if (this.series.data.length > 1) {
//                         //     this.remove();
//                         // }
//                     }
//                 }
//             }
//         }
//     },
//     series: [{
//         data: [[20, 20], [66, 66],[72,55],[73,52],[74,49],[75,44],[77,50],[83,47],[89,48],[98,49]]
//     }]
// });

Highcharts.chart('contestGraph', {
    series: [{
        data: [0, 5, 10, 15, 10, 11, 9, 10, 16, 22, 18, 19, 22, 26],
        zones: [{
            value: 0,
            color: '#bbb'
        }, {
            value: 10,
            color: '#7cb5ec'
        }, 
        {
            value: 20,
            color: '#f7a35c'
        },
        {
            value: 25,
            color: 'purple'
        },{
            color: 'red'
        }]
    }]
});