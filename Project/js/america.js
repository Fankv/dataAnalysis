var ass_af= [1305.45, 3627.55, 5490.3, 6107, 5195.75, 5251.77, 7298.8, 8823.51, 6820.27, 8349.38, 5463.12, 4456.28, 4620.44];

var bur_af= [3962.6, 6444.46, 6610.75, 6982.42, 5874.35, 6580.48, 10650.34, 10481.52, 10288.41, 9439.77, 8169.14, 5574.61, 4591.67];

var int_af=[169.94, 338.61, 355.9, 429.6, 429.78, 401.32, 500.03, 476.66, 548.76, 483.73];

var kid_af=[19.08, 31.77, 46.32, 44.61, 47.95, 42.28, 47.59, 38.89, 48.08, 42.34, 27.47];
var mot_af= [3050.45, 2996.55, 2059.89, 2297.84, 2195.29, 2410.42, 3547.74, 3452.06, 3269.29, 3730.26, 3281.47, 3344.66, 3032.85];

var rap_af=[169.94, 338.61, 355.9, 429.6, 429.78, 401.32, 500.03, 476.66, 548.76, 483.73];

var rob_af= [1466.43, 3202.15, 5077.49, 6442.69, 5464.56, 5910.59, 6356.91, 6799.54, 6696.86, 5761.62, 6308.72, 6169.4, 4485.07];

var sex_af=['-', 210.8, 595.9, 1030.5, 1150.1, 1332.9, 1979.9, 2105.6, 2418.8, 2334.5, 1610.1, 1009.8];

var the_af= [12504.32, 15543.64, 12871.78, 17131.32, 15865.05, 17700.4, 18294.06, 18418.53, 18742.67, 17970.43, 15243.78, 14450.93, 14865.65];

var myChart = echarts.init(document.getElementById('main'));


var xAxisData = ['2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'];

option = {
    title: {
        text: '各类犯罪情况年变化趋势',
        x:'left',
        y:'top',
    },
    legend: {
        data: ['Assault', 'Burglary', 'International Homicide', 'Kidnapping', 'Motor Vehicle Theft','Rape','Robbery','Sexual Offence agianst Children','Theft'],
        align: 'left',
        x:'left',
        y:'20px',
    },
    toolbox: {
        // y: 'bottom',
        show:false,
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
            show: false
        }
    },
    yAxis: {
    },
    series: [{
        name: 'Assault',
        type: 'line',
        data: ass_af,
        animationDelay: function (idx) {
            return idx * 10;
        }
    }, {
        name: 'Burglary',
        type: 'line',
        data: bur_af,
        animationDelay: function (idx) {
            return idx * 10 + 100;
        }
    }, {
        name: 'Intentional Homcide',
        type: 'line',
        data: int_af,
        animationDelay: function (idx) {
            return idx * 10 + 100;
        }
    },
    {
        name: 'Kidnapping',
        type: 'line',
        data: kid_af,
        animationDelay: function (idx) {
            return idx * 10 + 100;
        }
},
{
    name: 'Motor Vehicle Theft',
    type: 'line',
    data: mot_af,
    animationDelay: function (idx) {
        return idx * 10 + 100;
    }
},
{
    name: 'Rape',
    type: 'line',
    data: rap_af,
    animationDelay: function (idx) {
        return idx * 10 + 100;
    }
},
{
    name: 'Robbery',
    type: 'line',
    data: rob_af,
    animationDelay: function (idx) {
        return idx * 10 + 100;
    }
},
{
    name: 'Sexual Offence agianst Children',
    type: 'line',
    data: sex_af,
    animationDelay: function (idx) {
        return idx * 10 + 100;
    }
},
{
    name: 'Theft',
    type: 'line',
    data: the_af,
    animationDelay: function (idx) {
        return idx * 10 + 100;
    }
}

],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
};

myChart.setOption(option);
