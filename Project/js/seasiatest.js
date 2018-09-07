var myChart = echarts.init(document.getElementById('main'));
 var geoCoordMap={"Afghanistan":[67.709953,33.93911],"Albania":[20.168331,41.153332],"Algeria":[1.659626,28.033886],"American Samoa":[-170.132217,-14.270972],"Andorra":[1.601554,42.546245],"Angola":[17.873887,-11.202692],"Anguilla":[-63.068615,18.220554],"Antigua and Barbuda":[-61.796428,17.060816],"Argentina":[-63.616672,-38.416097],"Armenia":[45.038189,40.069099],"Aruba":[-69.968338,12.52111],"Australia":[133.775136,-25.274398],"Austria":[14.550072,47.516231],"Azerbaijan":[47.576927,40.143105],"Bahamas":[-77.39628,25.03428],"Bahrain":[50.637772,25.930414],"Bangladesh":[90.356331,23.684994],"Barbados":[-59.543198,13.193887],"Belarus":[27.953389,53.709807],"Belgium":[4.469936,50.503887],"Belize":[-88.49765,17.189877],"Benin":[2.315834,9.30769],"Bermuda":[-64.75737,32.321384],"Bhutan":[90.433601,27.514162],"Bolivia":[-63.588653,-16.290154],"Bosnia and Herzegovina":[17.679076,43.915886],"Botswana":[24.684866,-22.328474],"Brazil":[-51.92528,-14.235004],"British Virgin Islands":[-64.639968,18.420695],"Brunei Darussalam":[114.727669,4.535277],"Bulgaria":[25.48583,42.733883],"Burkina Faso":[-1.561593,12.238333],"Burundi":[29.918886,-3.373056],"Cabo Verde":[-24.013197,16.002082],"Cambodia":[104.990963,12.565679],"Cameroon":[12.354722,7.369722],"Canada":[-106.346771,56.130366],"Cayman Islands":[-80.566956,19.513469],"Central African Republic":[20.939444,6.611111],"Chad":[18.732207,15.454166],"Chile":[-71.542969,-35.675147],"China":[104.195397,35.86166],"China, Hong Kong Special Administrative Region":[114.109497,22.396428],"Colombia":[-74.297333,4.570868],"Comoros":[43.872219,-11.875001],"Cook Islands":[-159.777671,-21.236736],"Costa Rica":[-83.753428,9.748917],"Côte d'Ivoire":[-5.54708,7.539989],"Croatia":[15.2,45.1],"Cuba":[-77.781167,21.521757],"Cyprus":[33.429859,35.126413],"Denmark":[9.501785,56.26392],"Djibouti":[42.590275,11.825138],"Dominica":[-61.370976,15.414999],"Dominican Republic":[-70.162651,18.735693],"Ecuador":[-78.183406,-1.831239],"Egypt":[30.802498,26.820553],"El Salvador":[-88.89653,13.794185],"Equatorial Guinea":[10.267895,1.650801],"Estonia":[25.013607,58.595272],"Ethiopia":[40.489673,9.145],"Faroe Islands":[-6.911806,61.892635],"Fiji":[179.414413,-16.578193],"Finland":[25.748151,61.92411],"France":[2.213749,46.227638],"French Guiana":[-53.125782,3.933889],"French Polynesia":[-149.406843,-17.679742],"Gabon":[11.609444,-0.803689],"Gambia":[-15.310139,13.443182],"Georgia":[43.356892,42.315407],"Germany":[10.451526,51.165691],"Ghana":[-1.023194,7.946527],"Gibraltar":[-5.345374,36.137741],"Greece":[21.824312,39.074208],"Greenland":[-42.604303,71.706936],"Grenada":[-61.604171,12.262776],"Guadeloupe":[-62.067641,16.995971],"Guam":[144.793731,13.444304],"Guatemala":[-90.230759,15.783471],"Guernsey":[-2.585278,49.465691],"Guinea":[-9.696645,9.945587],"Guinea-Bissau":[-15.180413,11.803749],"Guyana":[-58.93018,4.860416],"Haiti":[-72.285215,18.971187],"Honduras":[-86.241905,15.199999],"Hungary":[19.503304,47.162494],"Iceland":[-19.020835,64.963051],"India":[78.96288,20.593684],"Indonesia":[113.921327,-0.789275],"Iran":[53.688046,32.427908],"Iraq":[43.679291,33.223191],"Ireland":[-8.24389,53.41291],"Isle of Man":[-4.548056,54.236107],"Israel":[34.851612,31.046051],"Italy":[12.56738,41.87194],"Jamaica":[-77.297508,18.109581],"Japan":[138.252924,36.204824],"Jersey":[-2.13125,49.214439],"Jordan":[36.238414,30.585164],"Kazakhstan":[66.923684,48.019573],"Kenya":[37.906193,-0.023559],"Kiribati":[-168.734039,-3.370417],"Kosovo":[20.902977,42.602636],"Kuwait":[47.481766,29.31166],"Kyrgyzstan":[74.766098,41.20438],"Latvia":[24.603189,56.879635],"Lebanon":[35.862285,33.854721],"Lesotho":[28.233608,-29.609988],"Liberia":[-9.429499,6.428055],"Libya":[17.228331,26.3351],"Liechtenstein":[9.555373,47.166],"Lithuania":[23.881275,55.169438],"Luxembourg":[6.129583,49.815273],"Madagascar":[46.869107,-18.766947],"Malawi":[34.301525,-13.254308],"Malaysia":[101.975766,4.210484],"Maldives":[73.22068,3.202778],"Mali":[-3.996166,17.570692],"Malta":[14.375416,35.937496],"Marshall Islands":[171.184478,7.131474],"Martinique":[-61.024174,14.641528],"Mauritania":[-10.940835,21.00789],"Mauritius":[57.552152,-20.348404],"Mayotte":[45.166244,-12.8275],"Mexico":[-102.552784,23.634501],"Monaco":[7.412841,43.750298],"Mongolia":[103.846656,46.862496],"Montenegro":[19.37439,42.708678],"Morocco":[-7.09262,31.791702],"Mozambique":[35.529562,-18.665695],"Myanmar":[95.956223,21.913965],"Namibia":[18.49041,-22.95764],"Nauru":[166.931503,-0.522778],"Nepal":[84.124008,28.394857],"Netherlands":[5.291266,52.132633],"New Caledonia":[165.618042,-20.904305],"New Zealand":[174.885971,-40.900557],"Nicaragua":[-85.207229,12.865416],"Niger":[8.081666,17.607789],"Nigeria":[8.675277,9.081999],"Northern Mariana Islands":[145.38469,17.33083],"Norway":[8.468946,60.472024],"Oman":[55.923255,21.512583],"Pakistan":[69.345116,30.375321],"Palau":[134.58252,7.51498],"Panama":[-80.782127,8.537981],"Papua New Guinea":[143.95555,-6.314993],"Paraguay":[-58.443832,-23.442503],"Peru":[-75.015152,-9.189967],"Philippines":[121.774017,12.879721],"Poland":[19.145136,51.919438],"Portugal":[-8.224454,39.399872],"Puerto Rico":[-66.590149,18.220833],"Qatar":[51.183884,25.354826],"Republic of Korea":[127.766922,35.907757],"Réunion":[55.536384,-21.115141],"Romania":[24.96676,45.943161],"Russian Federation":[105.318756,61.52401],"Rwanda":[29.873888,-1.940278],"Saint Kitts and Nevis":[-62.782998,17.357822],"Saint Lucia":[-60.978893,13.909444],"Saint Vincent and the Grenadines":[-61.287228,12.984305],"Samoa":[-172.104629,-13.759029],"San Marino":[12.457777,43.94236],"Saudi Arabia":[45.079162,23.885942],"Senegal":[-14.452362,14.497401],"Serbia":[21.005859,44.016521],"Seychelles":[55.491977,-4.679574],"Sierra Leone":[-11.779889,8.460555],"Singapore":[103.819836,1.352083],"Slovakia":[19.699024,48.669026],"Slovenia":[14.995463,46.151241],"Solomon Islands":[160.156194,-9.64571],"South Africa":[22.937506,-30.559482],"South Sudan":[29.970703,7.449624],"Spain":[-3.74922,40.463667],"Sri Lanka":[80.771797,7.873054],"Sudan":[30.217636,12.862807],"Suriname":[-56.027783,3.919305],"Swaziland":[31.465866,-26.522503],"Sweden":[18.643501,60.128161],"Switzerland":[8.227512,46.818188],"Tajikistan":[71.276093,38.861034],"Thailand":[100.992541,15.870032],"Timor-Leste":[125.727539,-8.874217],"Togo":[0.824782,8.619543],"Tonga":[-175.198242,-21.178986],"Trinidad and Tobago":[-61.222503,10.691803],"Tunisia":[9.537499,33.886917],"Turkey":[35.243322,38.963745],"Turkmenistan":[59.556278,38.969719],"Tuvalu":[177.64933,-7.109535],"Uganda":[32.290275,1.373333],"Ukraine":[31.16558,48.379433],"United Arab Emirates":[53.847818,23.424076],"United Kingdom (England and Wales)":[-3.435973,55.378051],"United Republic of Tanzania":[34.888822,-6.369028],"United States of America":[-95.712891,37.09024],"Uruguay":[-55.765835,-32.522779],"Uzbekistan":[64.585262,41.377491],"Vanuatu":[166.959158,-15.376706],"Venezuela (Bolivarian Republic of)":[-66.58973,6.42375],"Viet Nam":[108.277199,14.058324],"Yemen":[48.516388,15.552727],"Zambia":[27.849332,-13.133897],"Zimbabwe":[29.154857,-19.015438]};


        var crime_data=[
  {
    "name": "Albania",
    "value": 7.21
  },
  {
    "name": "Algeria*",
    "value": 112.8453846
  },
  {
    "name": "Andorra",
    "value": 149.2188889
  },
  {
    "name": "Argentina",
    "value": 373.0916667
  },
  {
    "name": "Armenia",
    "value": 5.818333333
  },
  {
    "name": "Australia",
    "value": 296.29375
  },
  {
    "name": "Austria",
    "value": 44.76333333
  },
  {
    "name": "Azerbaijan",
    "value": 1.771
  },
  {
    "name": "Bahamas",
    "value": 828.5575
  },
  {
    "name": "Bahrain",
    "value": 364.6233333
  },
  {
    "name": "Bangladesh",
    "value": 0.395
  },
  {
    "name": "Barbados",
    "value": 546.8466667
  },
  {
    "name": "Belarus",
    "value": 16.32333333
  },
  {
    "name": "Belgium",
    "value": 658.8723077
  },
  {
    "name": "Belize",
    "value": 196.1425
  },
  {
    "name": "Bermuda",
    "value": 860.9388889
  },
  {
    "name": "Bhutan",
    "value": 5.373333333
  },
  {
    "name": "Bolivia (Plurinational State of)",
    "value": 70.435
  },
  {
    "name": "Bosnia and Herzegovina*",
    "value": 25.686
  },
  {
    "name": "Botswana",
    "value": 783.91
  },
  {
    "name": "Brazil",
    "value": 343.51125
  },
  {
    "name": "Brunei Darussalam",
    "value": 138.595
  },
  {
    "name": "Bulgaria",
    "value": 40.14153846
  },
  {
    "name": "Burundi",
    "value": 4.625714286
  },
  {
    "name": "Cabo Verde",
    "value": 811.635
  },
  {
    "name": "Cameroon*",
    "value": 20.62333333
  },
  {
    "name": "Canada",
    "value": 158.0846154
  },
  {
    "name": "Chile",
    "value": 121.144
  },
  {
    "name": "China, Hong Kong Special Administrative Region",
    "value": 113.2672727
  },
  {
    "name": "China, Macao Special Administrative Region*",
    "value": 326.4625
  },
  {
    "name": "Colombia",
    "value": 126.2258333
  },
  {
    "name": "Costa Rica",
    "value": 156.46125
  },
  {
    "name": "Cote d'Ivoire",
    "value": 52.315
  },
  {
    "name": "Croatia",
    "value": 23.19153846
  },
  {
    "name": "Cyprus",
    "value": 14.13230769
  },
  {
    "name": "Czechia",
    "value": 180.7558333
  },
  {
    "name": "Denmark",
    "value": 134.1515385
  },
  {
    "name": "Dominican Republic",
    "value": 53.385
  },
  {
    "name": "Ecuador",
    "value": 47.013
  },
  {
    "name": "Egypt",
    "value": 0.181666667
  },
  {
    "name": "El Salvador*",
    "value": 68.43181818
  },
  {
    "name": "Estonia",
    "value": 8.474545455
  },
  {
    "name": "Finland*",
    "value": 340.8923077
  },
  {
    "name": "France*",
    "value": 316.1538462
  },
  {
    "name": "Georgia",
    "value": 5.30625
  },
  {
    "name": "Germany*",
    "value": 371.9623077
  },
  {
    "name": "Greece*",
    "value": 43.68076923
  },
  {
    "name": "Grenada",
    "value": 1268.670909
  },
  {
    "name": "Guatemala",
    "value": 45.05727273
  },
  {
    "name": "Guinea",
    "value": 2.925
  },
  {
    "name": "Guyana*",
    "value": 1211.965
  },
  {
    "name": "Holy See"
  },
  {
    "name": "Honduras",
    "value": 28.1325
  },
  {
    "name": "Hungary",
    "value": 128.1025
  },
  {
    "name": "Iceland",
    "value": 22.937
  },
  {
    "name": "India",
    "value": 24.121
  },
  {
    "name": "Indonesia*",
    "value": 12.94875
  },
  {
    "name": "Iraq (Central Iraq)",
    "value": 88.57428571
  },
  {
    "name": "Ireland",
    "value": 312.6215385
  },
  {
    "name": "Israel",
    "value": 683.2814286
  },
  {
    "name": "Italy",
    "value": 106.9416667
  },
  {
    "name": "Jamaica*",
    "value": 145.0233333
  },
  {
    "name": "Japan",
    "value": 34.65
  },
  {
    "name": "Jordan",
    "value": 279.5
  },
  {
    "name": "Kazakhstan",
    "value": 10.085
  },
  {
    "name": "Kenya",
    "value": 33.58545455
  },
  {
    "name": "Kosovo under UNSCR 1244",
    "value": 154.4885714
  },
  {
    "name": "Kuwait",
    "value": 26.46333333
  },
  {
    "name": "Kyrgyzstan",
    "value": 6.253076923
  },
  {
    "name": "Latvia*",
    "value": 48.72923077
  },
  {
    "name": "Lebanon",
    "value": 180.1125
  },
  {
    "name": "Lesotho",
    "value": 450.2266667
  },
  {
    "name": "Liechtenstein",
    "value": 233.2615385
  },
  {
    "name": "Lithuania",
    "value": 9.027692308
  },
  {
    "name": "Luxembourg",
    "value": 496.8466667
  },
  {
    "name": "Madagascar",
    "value": 12.24666667
  },
  {
    "name": "Malaysia",
    "value": 19.11
  },
  {
    "name": "Maldives",
    "value": 418.3928571
  },
  {
    "name": "Malta*",
    "value": 44.2575
  },
  {
    "name": "Mauritius",
    "value": 13.54333333
  },
  {
    "name": "Mexico*",
    "value": 175.63
  },
  {
    "name": "Monaco",
    "value": 384.44
  },
  {
    "name": "Mongolia",
    "value": 195.6492308
  },
  {
    "name": "Montenegro*",
    "value": 26.26083333
  },
  {
    "name": "Morocco",
    "value": 125.7122222
  },
  {
    "name": "Mozambique",
    "value": 4.151666667
  },
  {
    "name": "Myanmar",
    "value": 6.211428571
  },
  {
    "name": "Nepal",
    "value": 4.08
  },
  {
    "name": "Netherlands*",
    "value": 362.1261538
  },
  {
    "name": "New Zealand",
    "value": 245.684
  },
  {
    "name": "Nicaragua",
    "value": 338.8666667
  },
  {
    "name": "Nigeria",
    "value": 9.853333333
  },
  {
    "name": "Norway*",
    "value": 60.725
  },
  {
    "name": "Oman",
    "value": 73.775
  },
  {
    "name": "Panama",
    "value": 150.313
  },
  {
    "name": "Paraguay",
    "value": 24.73
  },
  {
    "name": "Peru",
    "value": 99.93916667
  },
  {
    "name": "Poland",
    "value": 24.14
  },
  {
    "name": "Portugal",
    "value": 200.1223077
  },
  {
    "name": "Puerto Rico",
    "value": 76.2075
  },
  {
    "name": "Qatar",
    "value": 42.13
  },
  {
    "name": "Republic of Korea*",
    "value": 449.1066667
  },
  {
    "name": "Republic of Moldova*",
    "value": 9.042
  },
  {
    "name": "Romania*",
    "value": 47.59076923
  },
  {
    "name": "Russian Federation",
    "value": 27.24
  },
  {
    "name": "Rwanda",
    "value": 24.23666667
  },
  {
    "name": "Saint Kitts and Nevis",
    "value": 280.2466667
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "value": 1101.63
  },
  {
    "name": "Sao Tome and Principe",
    "value": 1.623333333
  },
  {
    "name": "Saudi Arabia",
    "value": 1.39
  },
  {
    "name": "Senegal",
    "value": 2.546666667
  },
  {
    "name": "Serbia",
    "value": 15.64545455
  },
  {
    "name": "Sierra Leone",
    "value": 352.62
  },
  {
    "name": "Singapore",
    "value": 10.07153846
  },
  {
    "name": "Slovakia",
    "value": 51.26230769
  },
  {
    "name": "Slovenia",
    "value": 104.3438462
  },
  {
    "name": "Solomon Islands",
    "value": 244.718
  },
  {
    "name": "Spain*",
    "value": 141.3545455
  },
  {
    "name": "Sri Lanka",
    "value": 257.52125
  },
  {
    "name": "State of Palestine*",
    "value": 76.08857143
  },
  {
    "name": "Swaziland",
    "value": 1342.94
  },
  {
    "name": "Sweden",
    "value": 476.07
  },
  {
    "name": "Switzerland*",
    "value": 56.11538462
  },
  {
    "name": "Syrian Arab Republic",
    "value": 22.81
  },
  {
    "name": "Tajikistan",
    "value": 85.69
  },
  {
    "name": "Thailand*",
    "value": 26.28545455
  },
  {
    "name": "The former Yugoslav Republic of Macedonia",
    "value": 12.72777778
  },
  {
    "name": "Trinidad and Tobago",
    "value": 48.3175
  },
  {
    "name": "Turkey",
    "value": 230.682
  },
  {
    "name": "Turkmenistan",
    "value": 1.815
  },
  {
    "name": "Uganda",
    "value": 76.92333333
  },
  {
    "name": "Ukraine",
    "value": 11.8925
  },
  {
    "name": "United Arab Emirates",
    "value": 7.548333333
  },
  {
    "name": "United Kingdom (England and Wales)",
    "value": 759.3375
  },
  {
    "name": "United Kingdom (Northern Ireland)",
    "value": 71.20583333
  },
  {
    "name": "United Kingdom (Scotland)*",
    "value": 796.9991667
  },
  {
    "name": "United Republic of Tanzania",
    "value": 3.98
  },
  {
    "name": "United States of America",
    "value": 263.6230769
  },
  {
    "name": "Uruguay",
    "value": 17.046
  },
  {
    "name": "Yemen",
    "value": 0.11
  },
  {
    "name": "Zimbabwe",
    "value": 586.595
  }
];

var convertData = function(data) {
	var res =[];
	for(var i=0;i<data.length;i++){
		var geocoord = geoCoordMap[data[i].name];
		if(geocoord){
			res.push(geocoord.concat(data[i].value));
		}
	}
	return res;
};

option3 ={
	backgroundColor:'#404a59',
	title:{
		 text: '亚犯罪情况',
        subtext: 'data from United Nations',
        sublink: '',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
        },
        tooltip: {
        trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data:['rate'],
            textStyle: {
                color: '#fff'
            }
        },
        visualMap: {
            min: 0,
            max: 1350,
            splitNumber: 6,
            color: ['#d94e5d','#eac736','#50a3ba'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'world',
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: [
        {
            name: 'rate',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(crime_data),
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
        ]
    };
myChart.setOption(option3);
