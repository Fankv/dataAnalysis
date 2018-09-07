var data = [
{
	"time":2003,
	"data":[{
		"name":"Africa",
		"value":9434.11
	},
	{
		"name":"Americas",
		"value":23144.69
	},
	{
		"name":"Asia",
		"value":6948.04
	},
	{
		"name":"Europe",
		"value":100384.56
	},
	{
		"name":"Oceania",
		"value":5478.39
	}
	]
},
{
	"time":2004,
	"data":[{
		"name":"Africa",
		"value":9887.73
	},
	{
		"name":"Americas",
		"value":33139.2
	},
	{
		"name":"Asia",
		"value":13726.95
	},
	{
		"name":"Europe",
		"value":104326.4
	},
	{
		"name":"Oceania",
		"value":5282.33
	}
	]
},
{
	"time":2005,
	"data":[{
		"name":"Africa",
		"value":5500.82
	},
	{
		"name":"Americas",
		"value":33833.74
	},
	{
		"name":"Asia",
		"value":16032.06
	},
	{
		"name":"Europe",
		"value":105967.06
	},
	{
		"name":"Oceania",
		"value":10469.25
	}
	]
},
{
    "time":2006,
    "data":[{
        "name":"Africa",
        "value":5398.12
    },
    {
        "name":"Americas",
        "value":41288.5
    },
    {
        "name":"Asia",
        "value":17029.7
    },
    {
        "name":"Europe",
        "value":105639.97
    },
    {
        "name":"Oceania",
        "value":10323.2
    }
    ]
},
{
    "time":2007,
    "data":[{
        "name":"Africa",
        "value":7009.95
    },
    {
        "name":"Americas",
        "value":37058.58
    },
    {
        "name":"Asia",
        "value":14610.89
    },
    {
        "name":"Europe",
        "value":100112.45
    },
    {
        "name":"Oceania",
        "value":9731.76
    }
    ]
},
{
    "time":2008,
    "data":[{
        "name":"Africa",
        "value":7053.67
    },
    {
        "name":"Americas",
        "value":40552.92
    },
    {
        "name":"Asia",
        "value":18582.66
    },
    {
        "name":"Europe",
        "value":100764.21
    },
    {
        "name":"Oceania",
        "value":9789.22
    }
    ]
},
{
    "time":2009,
    "data":[{
        "name":"Africa",
        "value":6800.14
    },
    {
        "name":"Americas",
        "value":49668.44
    },
    {
        "name":"Asia",
        "value":14328.02
    },
    {
        "name":"Europe",
        "value":98510.4
    },
    {
        "name":"Oceania",
        "value":9131.71
    }
    ]
},
{
    "time":2010,
    "data":[{
        "name":"Africa",
        "value":8124.61
    },
    {
        "name":"Americas",
        "value":51499.48
    },
    {
        "name":"Asia",
        "value":16102.13
    },
    {
        "name":"Europe",
        "value":93855.27
    },
    {
        "name":"Oceania",
        "value":8710.05
    }
    ]
},
{
    "time":2011,
    "data":[{
        "name":"Africa",
        "value":7262.89
    },
    {
        "name":"Americas",
        "value":49597.32
    },
    {
        "name":"Asia",
        "value":16324.2
    },
    {
        "name":"Europe",
        "value":92934.24
    },
    {
        "name":"Oceania",
        "value":8690.95
    }
    ]
},
{
    "time":2012,
    "data":[{
        "name":"Africa",
        "value":4234.43
    },
    {
        "name":"Americas",
        "value":48894.4
    },
    {
        "name":"Asia",
        "value":14004.92
    },
    {
        "name":"Europe",
        "value":91886.17
    },
    {
        "name":"Oceania",
        "value":8160.21
    }
    ]
},
{
    "time":2013,
    "data":[{
        "name":"Africa",
        "value":4265.67
    },
    {
        "name":"Americas",
        "value":40589.1
    },
    {
        "name":"Asia",
        "value":12266.59
    },
    {
        "name":"Europe",
        "value":90348.23
    },
    {
        "name":"Oceania",
        "value":7819.9
    }
    ]
},
{
    "time":2014,
    "data":[{
        "name":"Africa",
        "value":5870.43
    },
    {
        "name":"Americas",
        "value":35590.56
    },
    {
        "name":"Asia",
        "value":7483.7
    },
    {
        "name":"Europe",
        "value":86233.96
    },
    {
        "name":"Oceania",
        "value":3605.32
    }
    ]
},
{
    "time":2015,
    "data":[{
        "name":"Africa",
        "value":3671.29
    },
    {
        "name":"Americas",
        "value":32105.79
    },
    {
        "name":"Asia",
        "value":5038.27
    },
    {
        "name":"Europe",
        "value":60441.56
    },
    {
        "name":"Oceania",
        "value":3412.01
    }
    ]
},
]

$.get('json/world_continents.json', function (data) {
    echarts.registerMap('world_continents', data);})
    var myChart = echarts.init(document.getElementById('main'));

var option = {
    baseOption: {
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut',
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 1000,
            left: null,
            right: 5,
            top: 20,
            bottom: 20,
            width: 46,
            height: null,
            label: {
                normal: {
                    textStyle: {
                        color: '#ddd'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            symbol: 'none',
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 1
            },
            controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            data: data.map(function(ele) {
                return ele.time
            })
        },
        backgroundColor: '#404a59',
        title: {
            text: '全球犯罪情况总览（2003-2015）',
            link:'index.html',
            target:'self',
            subtext: 'Rate per 100,000 Population',
            left: 'center',
            top: 'top',
            textStyle: {
                fontSize: 25,
                color: 'rgba(255,255,255, 0.9)'
            }
        },
        tooltip: {
            formatter: function(params) {
                if ('value' in params.data) {
                    return params.data.value;
                }
            }
        },
        grid: {
            left: '15%',
            right: '45%',
            top: '70%',
            bottom: 20
        },
        xAxis: {},
        yAxis: {},
        series: [{
            id: 'map',
            type: 'map',
            mapType: 'world_continents',
            top: '10%',
            bottom: '30%',
            left: '25%',
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#404a59'
                },
                emphasis: {
                    label: {
                        show: true
                    },
                    areaColor: 'rgba(255,255,255, 0.5)'
                }
            },
            data: []
        }, {
            id: 'bar',
            type: 'bar',
            tooltip: {
                show: false
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#ddd'
                    }
                }
            },
            data: []
        }, {
            id: 'pie',
            type: 'pie',
            radius: ['8%', '20%'],
            center: ['75%', '85%'],
            tooltip: {
                formatter: '{b} {d}%'
            },
            data: [],
            label: {
                normal: {
                    textStyle: {
                        color: '#ddd'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#ddd'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(0,0,0,0.3)',
                    borderSize: 1
                }
            }
        }]
    },
    options: []
}


for (var i = 0; i < data.length; i++) {
    option.options.push({
        visualMap: [{
            calculable:true,
            dimension: 0,
            left: 10,
            itemWidth: 12,
            min: 3410,
            max: 106000,
            text: ['High', 'Low'],
            textStyle: {
                color: '#ddd'
            },
            inRange: {
                color: ['lightskyblue', 'yellow', 'orangered', 'red']
            }
        }],
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.1],
            axisLabel: {
                show: false,
            }
        },
        yAxis: {
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: '#ddd'
                }
            },
            data:data[i].data.map(function(ele){
                return ele.name
            })
        },
        series: [{
            id: 'map',
            data: data[i].data
        },{
            id:'bar',
            data:data[i].data.map(function(ele){
                return ele.value
            })
        },{
            id: 'pie',
            data: data[i].data.map(function(ele) {
                return {
                    name: ele.name,
                    value: ele.value
                }
            })
        }]
    })
}

myChart.setOption(option);