$(document).ready(function () {

    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

});

//first chart

var chartHorizontal = new Highcharts.Chart({
    chart: {
        renderTo: 'containerHorizontal',
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
        data: [3.2, 63.1, 4.4, 0.5, 3.5, 10.1, 15.2],
        color: '#2d98da'
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

//second chart

Highcharts.chart('containerVertical', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'What is your average monthly net salary (take-home salary)?'
    },
    subtitle: {
        enabled: true
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
        background: 'yellow',
        color: '#45aaf2',
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

//third chart

Highcharts.chart('containerRound1', {
    chart: {
        type: 'pie'
    },
    xAxis: {
        categories: ['Blogs', 'Portals', 'Photos', 'Forums', 'Social media', 'Micro blogs', 'Videos']
    },
    plotOptions: {
        series: {
            allowPointSelect: true
        }
    },
    title: {
        text: 'Female programmer'
    },
    subtitle: {
        enabled: true
    },
    series: [{
        type: 'pie',
        cursor: 'pointer',
        data: [
            ['Blogs: 1%', 1],
            ['Portals: 27%', 27],
            ['Photos: 6%', 6],
            ['Forums: 13%', 13],
            ['Social media: 27%', 27],
            ['Micro blogs: 22%', 22],
            ['Videos: 4%', 4]
        ]
    }]
});

//fourth chart

Highcharts.chart('containerRound2', {
    chart: {
        type: 'pie'
    },
    xAxis: {
        categories: ['Blogs', 'Portals', 'Photos', 'Forums', 'Social media', 'Micro blogs', 'Videos']
    },
    plotOptions: {
        series: {
            allowPointSelect: true
        }
    },
    title: {
        text: 'Programmer'
    },
    subtitle: {
        enabled: true
    },
    series: [{
        type: 'pie',
        cursor: 'pointer',
        data: [
            ['Blogs: 1%', 1],
            ['Portals: 15%', 15],
            ['Photos: 2%', 2],
            ['Forums: 19%', 19],
            ['Social media: 29%', 29],
            ['Micro blogs: 28%', 28],
            ['Videos: 6%', 6]
        ]
    }]
});
