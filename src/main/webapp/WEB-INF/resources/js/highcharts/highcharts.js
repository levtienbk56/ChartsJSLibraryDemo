/*******************************************************************************
 * LINE-CHART
 ******************************************************************************/
// Basic chart with data labels.
// by default: label doesn't shown, instead tooltip will show up when
// mouseover/mousetracking.
// and, you can custom format for tooltip, too.
$(function() {
	$('#line-chart-container-1').highcharts({
		chart : {
			type : 'line'
		},
		title : {
			text : 'Monthly Average Temperature'
		},
		subtitle : {
			text : 'Source: WorldClimate.com'
		},
		xAxis : {
			categories : [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov' ]
		},
		yAxis : {
			title : {
				text : 'Temperature (°C)'
			}
		},
		plotOptions : {
			line : {
				dataLabels : {
					enabled : true
				},
				enableMouseTracking : true
			}
		},
		series : [ {
			name : 'Tokyo',
			data : [ 7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6 ]
		}, {
			name : 'London',
			data : [ 3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8 ]
		} ]
	});
});

// Time data with irregular intervals.
// use Date class.
// custom tooltip format
$(function() {
	$('#line-chart-container-2').highcharts(
			{
				chart : {
					type : 'spline'
				},
				title : {
					text : 'Snow depth at Vikjafjellet, Norway'
				},
				subtitle : {
					text : 'Irregular time data in Highcharts JS'
				},
				xAxis : {
					type : 'datetime',
					dateTimeLabelFormats : { // don't display the dummy year
						month : '%e. %b',
						year : '%b'
					},
					title : {
						text : 'Date'
					}
				},
				yAxis : {
					title : {
						text : 'Snow depth (m)'
					},
					min : 0
				},
				tooltip : {
					headerFormat : '<b>{series.name}</b><br>',
					pointFormat : '{point.x:%e. %b}: {point.y:.2f} m'
				},

				plotOptions : {
					spline : {
						marker : {
							enabled : true
						}
					}
				},

				series : [
						{
							name : 'Winter 2012-2013',
							// Define the data points. All series have a dummy
							// year
							// of 1970/71 in order to be compared on the same x
							// axis. Note
							// that in JavaScript, months start at 0 for
							// January, 1 for February etc.
							data : [ [ Date.UTC(1970, 9, 21), 0 ], [ Date.UTC(1970, 10, 4), 0.28 ], [ Date.UTC(1970, 10, 9), 0.25 ], [ Date.UTC(1970, 10, 27), 0.2 ], [ Date.UTC(1970, 11, 2), 0.28 ], [ Date.UTC(1970, 11, 26), 0.28 ], [ Date.UTC(1970, 11, 29), 0.47 ], [ Date.UTC(1971, 0, 11), 0.79 ],
									[ Date.UTC(1971, 0, 26), 0.72 ], [ Date.UTC(1971, 1, 3), 1.02 ], [ Date.UTC(1971, 1, 11), 1.12 ], [ Date.UTC(1971, 1, 25), 1.2 ], [ Date.UTC(1971, 2, 11), 1.18 ], [ Date.UTC(1971, 3, 11), 1.19 ], [ Date.UTC(1971, 4, 1), 1.85 ], [ Date.UTC(1971, 4, 5), 2.22 ],
									[ Date.UTC(1971, 4, 19), 1.15 ], [ Date.UTC(1971, 5, 3), 0 ] ]
						},
						{
							name : 'Winter 2013-2014',
							data : [ [ Date.UTC(1970, 9, 29), 0 ], [ Date.UTC(1970, 10, 9), 0.4 ], [ Date.UTC(1970, 11, 1), 0.25 ], [ Date.UTC(1971, 0, 1), 1.66 ], [ Date.UTC(1971, 0, 10), 1.8 ], [ Date.UTC(1971, 1, 19), 1.76 ], [ Date.UTC(1971, 2, 25), 2.62 ], [ Date.UTC(1971, 3, 19), 2.41 ],
									[ Date.UTC(1971, 3, 30), 2.05 ], [ Date.UTC(1971, 4, 14), 1.7 ], [ Date.UTC(1971, 4, 24), 1.1 ], [ Date.UTC(1971, 5, 10), 0 ] ]
						},
						{
							name : 'Winter 2014-2015',
							data : [ [ Date.UTC(1970, 10, 25), 0 ], [ Date.UTC(1970, 11, 6), 0.25 ], [ Date.UTC(1970, 11, 20), 1.41 ], [ Date.UTC(1970, 11, 25), 1.64 ], [ Date.UTC(1971, 0, 4), 1.6 ], [ Date.UTC(1971, 0, 17), 2.55 ], [ Date.UTC(1971, 0, 24), 2.62 ], [ Date.UTC(1971, 1, 4), 2.5 ],
									[ Date.UTC(1971, 1, 14), 2.42 ], [ Date.UTC(1971, 2, 6), 2.74 ], [ Date.UTC(1971, 2, 14), 2.62 ], [ Date.UTC(1971, 2, 24), 2.6 ], [ Date.UTC(1971, 3, 2), 2.81 ], [ Date.UTC(1971, 3, 12), 2.63 ], [ Date.UTC(1971, 3, 28), 2.77 ], [ Date.UTC(1971, 4, 5), 2.68 ],
									[ Date.UTC(1971, 4, 10), 2.56 ], [ Date.UTC(1971, 4, 15), 2.39 ], [ Date.UTC(1971, 4, 20), 2.3 ], [ Date.UTC(1971, 5, 5), 2 ], [ Date.UTC(1971, 5, 10), 1.85 ], [ Date.UTC(1971, 5, 15), 1.49 ], [ Date.UTC(1971, 5, 23), 1.08 ] ]
						} ]
			});
});

// Spline with symbols.
// custom spline(size, linecolor)
// custom marker(over url)
// custom tooltip.
$(function() {
	$('#line-chart-container-3').highcharts({
		chart : {
			type : 'spline'
		},
		title : {
			text : 'Monthly Average Temperature'
		},
		subtitle : {
			text : 'Source: WorldClimate.com'
		},
		xAxis : {
			categories : [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
		},
		yAxis : {
			title : {
				text : 'Temperature'
			},
			labels : {
				formatter : function() {
					return this.value + '°';
				}
			}
		},
		tooltip : {
			crosshairs : true,
			shared : true
		},
		plotOptions : {
			spline : {
				marker : {
					radius : 4,
					lineColor : '#666666',
					lineWidth : 1
				}
			}
		},
		series : [ {
			name : 'Tokyo',
			marker : {
				symbol : 'square'
			},
			data : [ 7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
				y : 26.5,
				marker : {
					symbol : 'url(https://www.highcharts.com/samples/graphics/sun.png)'
				}
			}, 23.3, 18.3, 13.9, 9.6 ]

		}, {
			name : 'London',
			marker : {
				symbol : 'diamond'
			},
			data : [ {
				y : 3.9,
				marker : {
					symbol : 'url(https://www.highcharts.com/samples/graphics/snow.png)'
				}
			}, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8 ]
		} ]
	});
});
/*******************************************************************************
 * COLUMN & BAR -CHART
 ******************************************************************************/
// basic column
$(function() {
	$('#column-chart-container-1').highcharts({
		chart : {
			type : 'column'
		},
		title : {
			text : 'Monthly Average Rainfall'
		},
		subtitle : {
			text : 'Source: WorldClimate.com'
		},
		xAxis : {
			categories : [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
			crosshair : true
		},
		yAxis : {
			min : 0,
			title : {
				text : 'Rainfall (mm)'
			}
		},
		tooltip : {
			headerFormat : '<span style="font-size:10px">{point.key}</span><table>',
			pointFormat : '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
			footerFormat : '</table>',
			shared : true,
			useHTML : true
		},
		plotOptions : {
			column : {
				pointPadding : 0.2,
				borderWidth : 0
			}
		},
		series : [ {
			name : 'Tokyo',
			data : [ 49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4 ]

		}, {
			name : 'New York',
			data : [ 83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3 ]

		}, {
			name : 'London',
			data : [ 48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2 ]

		}, {
			name : 'Berlin',
			data : [ 42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1 ]

		} ]
	});
});

// Stacked Column Chart.
// custom legend.
// custom tooltips.
$(function() {
	$('#column-chart-container-2').highcharts({
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

// population pyramid chart
// Data gathered from http://populationpyramid.net/germany/2015/
$(function() {
	// Age categories
	var categories = [ '0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39', '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80-84', '85-89', '90-94', '95-99', '100 + ' ];
	$(document).ready(function() {
		$('#column-chart-container-3').highcharts({
			chart : {
				type : 'bar'
			},
			title : {
				text : 'Population pyramid for Germany, 2015'
			},
			subtitle : {
				text : 'Source: <a href="http://populationpyramid.net/germany/2015/">Population Pyramids of the World from 1950 to 2100</a>'
			},
			xAxis : [ {
				categories : categories,
				reversed : false,
				labels : {
					step : 1
				}
			}, { // mirror axis on right side
				opposite : true,
				reversed : false,
				categories : categories,
				linkedTo : 0,
				labels : {
					step : 1
				}
			} ],
			yAxis : {
				title : {
					text : null
				},
				labels : {
					formatter : function() {
						return Math.abs(this.value) + '%';
					}
				}
			},

			plotOptions : {
				series : {
					stacking : 'normal'
				}
			},

			tooltip : {
				formatter : function() {
					return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' + 'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
				}
			},

			series : [ {
				name : 'Male',
				data : [ -2.2, -2.2, -2.3, -2.5, -2.7, -3.1, -3.2, -3.0, -3.2, -4.3, -4.4, -3.6, -3.1, -2.4, -2.5, -2.3, -1.2, -0.6, -0.2, -0.0, -0.0 ]
			}, {
				name : 'Female',
				data : [ 2.1, 2.0, 2.2, 2.4, 2.6, 3.0, 3.1, 2.9, 3.1, 4.1, 4.3, 3.6, 3.4, 2.6, 2.9, 2.9, 1.8, 1.2, 0.6, 0.1, 0.0 ]
			} ]
		});
	});

});

/*******************************************************************************
 * AREA-CHART
 ******************************************************************************/

// Stacked-area chart.
// custom plotOptions.marker
$(function() {
	$('#area-chart-container-1').highcharts({
		chart : {
			type : 'area'
		},
		title : {
			text : 'Historic and Estimated Worldwide Population Growth by Region'
		},
		subtitle : {
			text : 'Source: Wikipedia.org'
		},
		xAxis : {
			categories : [ '1750', '1800', '1850', '1900', '1950', '1999', '2050' ],
			tickmarkPlacement : 'on',
			title : {
				enabled : false
			}
		},
		yAxis : {
			title : {
				text : 'Billions'
			},
			labels : {
				formatter : function() {
					return this.value / 1000;
				}
			}
		},
		tooltip : {
			shared : true,
			valueSuffix : ' millions'
		},
		plotOptions : {
			area : {
				stacking : 'normal',
				lineColor : '#666666',
				lineWidth : 1,
				marker : {
					lineWidth : 1,
					lineColor : '#666666'
				}
			}
		},
		series : [ {
			name : 'Asia',
			data : [ 502, 635, 809, 947, 1402, 3634, 5268 ]
		}, {
			name : 'Africa',
			data : [ 106, 107, 111, 133, 221, 767, 1766 ]
		}, {
			name : 'Europe',
			data : [ 163, 203, 276, 408, 547, 729, 628 ]
		}, {
			name : 'America',
			data : [ 18, 31, 54, 156, 339, 818, 1201 ]
		}, {
			name : 'Oceania',
			data : [ 2, 2, 2, 6, 13, 30, 46 ]
		} ]
	});
});

// Area-Spline.
// custom plotBands.
$(function() {
	$('#area-chart-container-2').highcharts({
		chart : {
			type : 'areaspline'
		},
		title : {
			text : 'Average fruit consumption during one week'
		},
		legend : {
			layout : 'vertical',
			align : 'left',
			verticalAlign : 'top',
			x : 150,
			y : 100,
			floating : true,
			borderWidth : 1,
			backgroundColor : (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
		},
		xAxis : {
			categories : [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ],
			plotBands : [ { // visualize the weekend
				from : 4.5,
				to : 6.5,
				color : 'rgba(68, 170, 213, .2)'
			} ]
		},
		yAxis : {
			title : {
				text : 'Fruit units'
			}
		},
		tooltip : {
			shared : true,
			valueSuffix : ' units'
		},
		credits : {
			enabled : false
		},
		plotOptions : {
			areaspline : {
				fillOpacity : 0.5
			}
		},
		series : [ {
			name : 'John',
			data : [ 3, 4, 3, 5, 4, 10, 12 ]
		}, {
			name : 'Jane',
			data : [ 1, 3, 4, 3, 3, 5, 4 ]
		} ]
	});
});