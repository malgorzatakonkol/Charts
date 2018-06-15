var chart = new Highcharts.Chart({
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
    chart.setSize(400);
});

$('#large').click(function () {
    chart.setSize(800);
});

$('#auto').click(function () {
    chart.setSize(null);
});