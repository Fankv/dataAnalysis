var ass_af=[2303.19, 2421.28, 1118.65, 1035.79, 1742.53, 1668.13, 1500.8, 2001.46, 1889.4, 1214.88, 1294.06, 1818.74, 998.06];

var bur_af= [1509.14, 1527.45, 710.48, 671.66, 934.66, 954.48, 839.09, 501.62, 422.85, 110.38, 124.56, 237.14, 90.12];

var int_af=[115.73, 132.97, 55.46, 59.1, 153.05, 158.13, 214.13, 161.13, 146.04, 65.1];

var kid_af=[14.46, 12.65, 2.22, 3.09, 7.71, 8.01, 9.38, 8.48, 9.45, 10.3, 15.12];

var mot_af=[154.5, 164.41, 130.63, 131.17, 173.85, 158.18, 146.45, 96.08, 104.05, 72.09, 61.48, 71.21, 48.04];

var rap_af=[115.73, 132.97, 55.46, 59.1, 153.05, 158.13, 214.13, 161.13, 146.04, 65.1];

var rob_af= [500.82, 623.78, 424.24, 413.25, 464.11, 519.01, 659.93, 1102.79, 1077.75, 1105.24, 1084.94, 1089.05, 1234.17];

var sex_af=[7.6, 13, 105, 131.7, 138.9, 163.3, 253.6, 292.1, 310.2, 186.7, 172, 152];

var the_af= [4711.3, 4856.43, 2597.78, 2821.81, 3208.5, 3216.42, 2974.95, 3537.7, 3173.84, 1338, 1424.66, 2422.18, 1032.65];

var myChart = echarts.init(document.getElementById('linechart'));


var xAxisData = ['2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'];

option = {
    title: {
        text: '各类犯罪情况年变化趋势'
    },
    legend: {
        data: ['Assault', 'Burglary', 'International Homicide', 'Kidnapping', 'Motor Vehicle Theft','Rape','Robbery','Sexual Offence agianst Children','Theft'],
        align: 'left'
    },
    toolbox: {
        // y: 'bottom',
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
