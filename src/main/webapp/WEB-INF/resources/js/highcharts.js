$(function() {
	$('#stacked-chart-container').highcharts({
		chart : {
			type : 'column'
		},
		title : {
			text : 'Stacked column chart'
		},
		xAxis : {
			categories : [ 'Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas' ]
		},
		yAxis : {
			min : 0,
			title : {
				text : 'Total fruit consumption'
			},
			stackLabels : {
				enabled : true,
				style : {
					fontWeight : 'bold',
					color : (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
				}
			}
		},
		legend : {
			align : 'right',
			x : -30,
			verticalAlign : 'top',
			y : 25,
			floating : true,
			backgroundColor : (Highcharts.theme && Highcharts.theme.background2) || 'white',
			borderColor : '#CCC',
			borderWidth : 1,
			shadow : false
		},
		tooltip : {
			headerFormat : '<b>{point.x}</b><br/>',
			pointFormat : '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
		},
		plotOptions : {
			column : {
				stacking : 'normal',
				dataLabels : {
					enabled : true,
					color : (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
					style : {
						textShadow : '0 0 3px black'
					}
				}
			}
		},
		series : [ {
			name : 'John',
			data : [ 5, 3, 4, 7, 2 ]
		}, {
			name : 'Jane',
			data : [ 2, 2, 3, 2, 1 ]
		}, {
			name : 'Joe',
			data : [ 3, 4, 4, 2, 5 ]
		} ]
	});
});

$(function () {
    $('#line-chart-container').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Monthly Average Temperature'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'London',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
});

$(function () {
    $('#area-chart-container').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Historic and Estimated Worldwide Population Growth by Region'
        },
        subtitle: {
            text: 'Source: Wikipedia.org'
        },
        xAxis: {
            categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Billions'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000;
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' millions'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Asia',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: 'Africa',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'Europe',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'America',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }, {
            name: 'Oceania',
            data: [2, 2, 2, 6, 13, 30, 46]
        }]
    });
});