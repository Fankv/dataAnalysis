var ass_af= ['-', 263.63, 492.66, 485.11, 513.59, 815.01, 606.42, 567.54, 538.58, 507.22, 480.07, 501.09, 279.86];

var bur_af= [1793.85, 1611.77, 2897.27, 2828.47, 2647.02, 2591.35, 2441.19, 2296.76, 2279.1, 2131.82, 2006.02, 770, 769.87];

var int_af= ['-', '-', 24.04, 28.25, 26.97, 26.37, 26.06, 25.84, 30.08, 29.8];

var kid_af= ['-', '-', 6.99, 8.38, 7.98, 7.98, 6.98, 8, 9.31, 8.08, 6.99];

var mot_af= [498.08, 440.01, 975.68, 961.85, 872.79, 815.8, 773.61, 672.26, 690.47, 629.81, 634.53, 190.84, 194.6];

var rap_af= ['-', '-', 24.04, 28.25, 26.97, 26.37, 26.06, 25.84, 30.08, 29.8];

var rob_af=  ['-', 26.43, 61.27, 75.66, 77.95, 72.33, 61.56, 123.07, 113.68, 104.47, 95.84, 86.73, 37.41];

var sex_af=  ['-', '-', 113.4, 139.3, 139.4, 130.9, 132, 139, 174.3, 171.9, 190.2, '-'];

var the_af= [3162.04, 2920.61, 5864.29, 5759.67, 5418.26, 5290.89, 5044.03, 4830.03, 4828.36, 4528.2, 4401.02, 2054.72, 2122.49];

var myChart = echarts.init(document.getElementById('main'));


var xAxisData = ['2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'];

option = {
    title: {
        text: '各类犯罪情况年变化趋势'
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
