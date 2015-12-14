/**
 * Created by wenbolu on 15/12/4.
 */

$(function () {
    $('#合作人数').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['中软',   45.0],
                ['融才',       26.8],
                {
                    name: '其他',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['你妹',    8.5]
            ]
        }]
    });
});