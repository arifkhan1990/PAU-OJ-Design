window.onload = function () {
    CanvasJS.addColorSet("submissionColor",
            [//colorSet Array

            "#27AE60",
            "#E74C3C",
            "#F1C40F",
            "#00AAAA",
            "#2980B9",
            "#86862C"          
            ]);
    CanvasJS.addColorSet("languageColor",
            [//colorSet Array

            "#3498db",
            "#2980b9",
            "#e67e22",
            "#e74c3c",
            "#c0392b",
            "#9b59b6",
            "#c02b42",
            "#4a48d6",
            "#7d9e42",
            "#34d0db",
            "#1a6199",
            "#f97603",
            "#4a4996",
            "#b17a4d", 
            "#ed7084"      
            ]);
var chart1 = new CanvasJS.Chart("languagechartContainer", {
    animationEnabled: true,
    colorSet: "languageColor",
title:{
    text: "",
    horizontalAlign: "left"
    },
    legend: {
    horizontalAlign: "left",
    verticalAlign: "center",
    cursor: "pointer",
    itemclick: explodePie,
   }, 
data: [{
    type: "doughnut",
    startAngle: 60,
    //innerRadius: 60,
            indexLabelFontSize: 13,
            showInLegend: true,
    indexLabel: "{label} - #percent%",
    toolTipContent: "<b>{label}:</b> {y} (#percent%)",
    dataPoints: [
        { y: 123, label: "C",legendText: "C" },
                    { y: 1128, label: "C++",legendText: "C++" },
                    { y: 0, label: "C#",legendText: "C#" },
        { y: 111, label: "Java",legendText: "Java" },
        { y: 7, label: "Javascript",legendText: "Javascript"},
        { y: 315, label: "Python",legendText: "Python"},
        { y: 6, label: "GO",legendText: "GO"}
    ]
}]
});

var chart2 = new CanvasJS.Chart("submissionchartContainer", {
            exportEnabled: true,
            animationEnabled: true,
            colorSet: "submissionColor",
            title:{
                    text: ""
            },
            legend:{
                    horizontalAlign: "left",
                    cursor: "pointer",
                    itemclick: explodePie,
                    verticalAlign: "bottom",

            },
            data: [{
                    type: "pie",
                    showInLegend: true,
                    indexLabelFontSize: 11,
                    toolTipContent: "{name}: <strong>{y}%</strong>",
                    indexLabel: "{name} - {y}%",
                    dataPoints: [
                            { y: 46, name: "Accepted", exploded: true },
                            { y: 40, name: "Wrong Answer" },
                            { y: 3, name: "Compilation Error" },
                            { y: 2, name: "Runtime Error" },
                            { y: 4, name: "Time limit Exceeded" },
                            { y: 5, name: "Presentation Error" }
                    ]
            }]
    });
var chart3 = new CanvasJS.Chart("chartContainer",{
            axisY:{
            title: "",
            gridThickness: 1,
            gridColor: "#ccc"
            },
            title:{
                    text: ""
            },

            legend: {
                    cursor:"pointer",
                    horizontalAlign: "left", // "center" , "right"
                    verticalAlign: "center",  // "top" , "bottom"
                    fontSize: 15,
                    itemclick: function(e){
                    alert( "Legend item clicked with type : " + e.dataSeries.type );
                    }

            },
            data: [
            {
            type: "line",
            showInLegend: true,
            legendText: "Score",
            dataPoints: [
            {label: "Jan", y: 100 },
            {label: "Feb", y: 155},
            {label: "Mar", y: 170},
            {label: "May", y: 140 },
            {label: "Jun", y: 135 },
            {label: "Jul", y: 190 },
            {label: "Aug", y: 240},
            {label: "Sep", y: 320 },      
            {label: "Oct", y: 334 },
            {label: "Nov", y: 380 },
            {label: "Dec", y: 400 },
            ]}
    ]
    });
chart1.render();
chart2.render();
chart3.render();
}

function explodePie (e) {
            if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
                    e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
            } else {
                    e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
            }
            e.chart.render();
    
    }




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