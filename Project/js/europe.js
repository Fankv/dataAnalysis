var ass_af= [7301.75, 8371.73, 9090.47, 9699.1, 9091.87, 9416.87, 7362.28, 5116.37, 5097.97, 5088.95, 4611.93, 4696.47, 3114.9];

var bur_af= [19231.34, 20227.72, 21872.98, 21381.79, 20050.27, 20528.01, 21660.01, 20410.17, 20620.11, 19813.95, 19134.56, 18576.42, 12917.89];

var int_af=[317.53, 339.03, 391.03, 386.65, 379.17, 387.22, 373.93, 402.14, 439.83, 442.47];

var kid_af=[36.68, 53.06, 56.05, 66.05, 62.88, 65.23, 70.09, 63.02, 62.98, 63.79, 65];

var mot_af= [7405.91, 7437.73, 7820.34, 7374.22, 5905.46, 5614.62, 5358.31, 4348.8, 4049.55, 3664.8, 3466.85, 3292.45, 2530.34];

var rap_af= [317.53, 339.03, 391.03, 386.65, 379.17, 387.22, 373.93, 402.14, 439.83, 442.47];

var rob_af=[4551.33, 4529.11, 4631.14, 4693.09, 4360.68, 4368.87, 4278.82, 2656.33, 2621.93, 2554.55, 2395.12, 2139.75, 1611.59];


var sex_af= [1188.6, 1526.5, 1689.4, 1858.2, 2111.1, 2536.5, 2298.4, 2385.5, 2528.4, 2633.3, 3716.5, 3172];

var the_af=  [60264.71, 61743.08, 60321.55, 60096.49, 58068.53, 57755.39, 57026.82, 58371.31, 57422.95, 57537.74, 56883.35, 54282.34, 40209.57];

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