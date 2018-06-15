var chartHorizontal = new Highcharts.Chart({
    chart: {
        renderTo: 'container',
        type: 'column'
    },
    title: {
        text: 'What does the career of women in IT look like?'
    },
    subtitle: {
        text: 'What area of IT do you work in?'
    },

    legend: {
        enabled: false
    },

    plotOptions: {
        column: {
            dataLabels: {
                enabled: true
            }
        }
    },
    xAxis:
        {
            categories: [
                'Administration', 'Software development', 'UX/UI', 'Social media', 'Management', 'Project management', 'Other'
            ],

            title: {
                text: 'Employed in the IT industry'
            },
            tickInterval: 1
        },
    yAxis: {
        title: {
            text: 'Data in %'
        },
        tickInterval: 1
    },
    series: [{
        data: [3.2, 63.1, 4.4, 0.5, 3.5, 10.1, 15.2]
    }]
});


$('#small').click(function () {
    chartHorizontal.setSize(400);
});

$('#large').click(function () {
    chartHorizontal.setSize(800);
});

$('#auto').click(function () {
    chartHorizontal.setSize(null);
});

Highcharts.chart ('container1',{
    chart: {
        type: 'bar'
    },
    title: {
        text: 'SALARY LEVEL'
    },
    subtitle: {
        text: 'What is your average monthly net salary (take-home salary)?'
    },
    xAxis: {
        type: 'category',
        title: {
            text: null
        },
        min: 0,
        max: 4,
        scrollbar: {
            enabled: true
        },
        tickLength: 0
    },
    yAxis: {
        min: 0,
        max: 25,
        title: {
            text: 'Data in %',
            align: 'high'
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Employed in the IT industry',
        data: [
            ['Less than PLN 1500', 2.0],
            ["PLN 1500-3000", 19.7],
            ["PLN 3001-4000", 20.1],
            ["PLN 4001-5000", 16.4],
            ["PLN 5001-6000", 11.5],
            ["PLN 6001-7000", 7.9],
            ["PLN 7001-8000", 5.6],
            ["PLN 8001-9000", 3.4],
            ["PLN 9001-10000", 1.2],
            ["PLN 10001-15000", 3.8],
            ["More than 15 000", 0.9]
        ]
    }]
});