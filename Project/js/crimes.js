$(".tabToggle").click(function () {
    myChart.clear();
    switch( parseInt($(this).val()))
    {
        case 0 :
            crime_assault();
            break;
        case 1 :
            crime_BurglaryBreakingAndEntering();
            break;
        case 2 :
            crime_IntentionalHomicide();
            break;
        case 3 :
            crime_kidnapping();
            break;
        case 4 :
            crime_MotorVehicleTheft();
            break;
        case 5 :
            crime_rape();
            break;
        case 6 :
            crime_robbery();
            break;
        case 7 :
            crime_SexualOffencesagainstChildren();
            break;
        case 8 :
            crime_theft();
            break;

    }
});

var myChart = echarts.init(document.getElementById('main'));

var geoCoordMap={"Afghanistan":[67.709953,33.93911],"Albania":[20.168331,41.153332],"Algeria":[1.659626,28.033886],"American Samoa":[-170.132217,-14.270972],"Andorra":[1.601554,42.546245],"Angola":[17.873887,-11.202692],"Anguilla":[-63.068615,18.220554],"Antigua and Barbuda":[-61.796428,17.060816],"Argentina":[-63.616672,-38.416097],"Armenia":[45.038189,40.069099],"Aruba":[-69.968338,12.52111],"Australia":[133.775136,-25.274398],"Austria":[14.550072,47.516231],"Azerbaijan":[47.576927,40.143105],"Bahamas":[-77.39628,25.03428],"Bahrain":[50.637772,25.930414],"Bangladesh":[90.356331,23.684994],"Barbados":[-59.543198,13.193887],"Belarus":[27.953389,53.709807],"Belgium":[4.469936,50.503887],"Belize":[-88.49765,17.189877],"Benin":[2.315834,9.30769],"Bermuda":[-64.75737,32.321384],"Bhutan":[90.433601,27.514162],"Bolivia":[-63.588653,-16.290154],"Bosnia and Herzegovina":[17.679076,43.915886],"Botswana":[24.684866,-22.328474],"Brazil":[-51.92528,-14.235004],"British Virgin Islands":[-64.639968,18.420695],"Brunei Darussalam":[114.727669,4.535277],"Bulgaria":[25.48583,42.733883],"Burkina Faso":[-1.561593,12.238333],"Burundi":[29.918886,-3.373056],"Cabo Verde":[-24.013197,16.002082],"Cambodia":[104.990963,12.565679],"Cameroon":[12.354722,7.369722],"Canada":[-106.346771,56.130366],"Cayman Islands":[-80.566956,19.513469],"Central African Republic":[20.939444,6.611111],"Chad":[18.732207,15.454166],"Chile":[-71.542969,-35.675147],"China":[104.195397,35.86166],"China, Hong Kong Special Administrative Region":[114.109497,22.396428],"Colombia":[-74.297333,4.570868],"Comoros":[43.872219,-11.875001],"Cook Islands":[-159.777671,-21.236736],"Costa Rica":[-83.753428,9.748917],"Côte d'Ivoire":[-5.54708,7.539989],"Croatia":[15.2,45.1],"Cuba":[-77.781167,21.521757],"Cyprus":[33.429859,35.126413],"Denmark":[9.501785,56.26392],"Djibouti":[42.590275,11.825138],"Dominica":[-61.370976,15.414999],"Dominican Republic":[-70.162651,18.735693],"Ecuador":[-78.183406,-1.831239],"Egypt":[30.802498,26.820553],"El Salvador":[-88.89653,13.794185],"Equatorial Guinea":[10.267895,1.650801],"Estonia":[25.013607,58.595272],"Ethiopia":[40.489673,9.145],"Faroe Islands":[-6.911806,61.892635],"Fiji":[179.414413,-16.578193],"Finland":[25.748151,61.92411],"France":[2.213749,46.227638],"French Guiana":[-53.125782,3.933889],"French Polynesia":[-149.406843,-17.679742],"Gabon":[11.609444,-0.803689],"Gambia":[-15.310139,13.443182],"Georgia":[43.356892,42.315407],"Germany":[10.451526,51.165691],"Ghana":[-1.023194,7.946527],"Gibraltar":[-5.345374,36.137741],"Greece":[21.824312,39.074208],"Greenland":[-42.604303,71.706936],"Grenada":[-61.604171,12.262776],"Guadeloupe":[-62.067641,16.995971],"Guam":[144.793731,13.444304],"Guatemala":[-90.230759,15.783471],"Guernsey":[-2.585278,49.465691],"Guinea":[-9.696645,9.945587],"Guinea-Bissau":[-15.180413,11.803749],"Guyana":[-58.93018,4.860416],"Haiti":[-72.285215,18.971187],"Honduras":[-86.241905,15.199999],"Hungary":[19.503304,47.162494],"Iceland":[-19.020835,64.963051],"India":[78.96288,20.593684],"Indonesia":[113.921327,-0.789275],"Iran":[53.688046,32.427908],"Iraq":[43.679291,33.223191],"Ireland":[-8.24389,53.41291],"Isle of Man":[-4.548056,54.236107],"Israel":[34.851612,31.046051],"Italy":[12.56738,41.87194],"Jamaica":[-77.297508,18.109581],"Japan":[138.252924,36.204824],"Jersey":[-2.13125,49.214439],"Jordan":[36.238414,30.585164],"Kazakhstan":[66.923684,48.019573],"Kenya":[37.906193,-0.023559],"Kiribati":[-168.734039,-3.370417],"Kosovo":[20.902977,42.602636],"Kuwait":[47.481766,29.31166],"Kyrgyzstan":[74.766098,41.20438],"Latvia":[24.603189,56.879635],"Lebanon":[35.862285,33.854721],"Lesotho":[28.233608,-29.609988],"Liberia":[-9.429499,6.428055],"Libya":[17.228331,26.3351],"Liechtenstein":[9.555373,47.166],"Lithuania":[23.881275,55.169438],"Luxembourg":[6.129583,49.815273],"Madagascar":[46.869107,-18.766947],"Malawi":[34.301525,-13.254308],"Malaysia":[101.975766,4.210484],"Maldives":[73.22068,3.202778],"Mali":[-3.996166,17.570692],"Malta":[14.375416,35.937496],"Marshall Islands":[171.184478,7.131474],"Martinique":[-61.024174,14.641528],"Mauritania":[-10.940835,21.00789],"Mauritius":[57.552152,-20.348404],"Mayotte":[45.166244,-12.8275],"Mexico":[-102.552784,23.634501],"Monaco":[7.412841,43.750298],"Mongolia":[103.846656,46.862496],"Montenegro":[19.37439,42.708678],"Morocco":[-7.09262,31.791702],"Mozambique":[35.529562,-18.665695],"Myanmar":[95.956223,21.913965],"Namibia":[18.49041,-22.95764],"Nauru":[166.931503,-0.522778],"Nepal":[84.124008,28.394857],"Netherlands":[5.291266,52.132633],"New Caledonia":[165.618042,-20.904305],"New Zealand":[174.885971,-40.900557],"Nicaragua":[-85.207229,12.865416],"Niger":[8.081666,17.607789],"Nigeria":[8.675277,9.081999],"Northern Mariana Islands":[145.38469,17.33083],"Norway":[8.468946,60.472024],"Oman":[55.923255,21.512583],"Pakistan":[69.345116,30.375321],"Palau":[134.58252,7.51498],"Panama":[-80.782127,8.537981],"Papua New Guinea":[143.95555,-6.314993],"Paraguay":[-58.443832,-23.442503],"Peru":[-75.015152,-9.189967],"Philippines":[121.774017,12.879721],"Poland":[19.145136,51.919438],"Portugal":[-8.224454,39.399872],"Puerto Rico":[-66.590149,18.220833],"Qatar":[51.183884,25.354826],"Republic of Korea":[127.766922,35.907757],"Réunion":[55.536384,-21.115141],"Romania":[24.96676,45.943161],"Russian Federation":[105.318756,61.52401],"Rwanda":[29.873888,-1.940278],"Saint Kitts and Nevis":[-62.782998,17.357822],"Saint Lucia":[-60.978893,13.909444],"Saint Vincent and the Grenadines":[-61.287228,12.984305],"Samoa":[-172.104629,-13.759029],"San Marino":[12.457777,43.94236],"Saudi Arabia":[45.079162,23.885942],"Senegal":[-14.452362,14.497401],"Serbia":[21.005859,44.016521],"Seychelles":[55.491977,-4.679574],"Sierra Leone":[-11.779889,8.460555],"Singapore":[103.819836,1.352083],"Slovakia":[19.699024,48.669026],"Slovenia":[14.995463,46.151241],"Solomon Islands":[160.156194,-9.64571],"South Africa":[22.937506,-30.559482],"South Sudan":[29.970703,7.449624],"Spain":[-3.74922,40.463667],"Sri Lanka":[80.771797,7.873054],"Sudan":[30.217636,12.862807],"Suriname":[-56.027783,3.919305],"Swaziland":[31.465866,-26.522503],"Sweden":[18.643501,60.128161],"Switzerland":[8.227512,46.818188],"Tajikistan":[71.276093,38.861034],"Thailand":[100.992541,15.870032],"Timor-Leste":[125.727539,-8.874217],"Togo":[0.824782,8.619543],"Tonga":[-175.198242,-21.178986],"Trinidad and Tobago":[-61.222503,10.691803],"Tunisia":[9.537499,33.886917],"Turkey":[35.243322,38.963745],"Turkmenistan":[59.556278,38.969719],"Tuvalu":[177.64933,-7.109535],"Uganda":[32.290275,1.373333],"Ukraine":[31.16558,48.379433],"United Arab Emirates":[53.847818,23.424076],"United Kingdom (England and Wales)":[-3.435973,55.378051],"United Republic of Tanzania":[34.888822,-6.369028],"United States of America":[-95.712891,37.09024],"Uruguay":[-55.765835,-32.522779],"Uzbekistan":[64.585262,41.377491],"Vanuatu":[166.959158,-15.376706],"Venezuela (Bolivarian Republic of)":[-66.58973,6.42375],"Viet Nam":[108.277199,14.058324],"Yemen":[48.516388,15.552727],"Zambia":[27.849332,-13.133897],"Zimbabwe":[29.154857,-19.015438]};

var assault=[
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

var burglaryBreakingAndEntering=[
    {name: 'Albania', value: 7.791818182},
    {name: 'Algeria', value: 28.58363636},
    {name: 'Andorra', value: 136.1122222},
    {name: 'Armenia', value: 72.59916667},
    {name: 'Australia*', value: 1117.346154},
    {name: 'Austria*', value: 1081.813333},
    {name: 'Azerbaijan', value: 6.053},
    {name: 'Bahamas', value: 98.86},
    {name: 'Bahrain', value: 32.22},
    {name: 'Bangladesh', value: 2.315},
    {name: 'Barbados', value: 666.5141667},
    {name: 'Belarus', value: 265.15},
    {name: 'Belgium', value: 865.8084615},
    {name: 'Belize', value: 379.8225},
    {name: 'Bermuda', value: 1228.393333},
    {name: 'Bhutan', value: 54.14833333},
    {name: 'Bosnia and Herzegovina*', value: 214.029},
    {name: 'Botswana', value: 235.79},
    {name: 'Brazil', value: 175.25875},
    {name: 'Brunei Darussalam', value: 124.36},
    {name: 'Bulgaria', value: 278.05},
    {name: 'Cameroon*', value: 5.43},
    {name: 'Canada', value: 631.4876923},
    {name: 'Chile', value: 672.8872727},
    {name: 'China, Hong Kong Special Administrative Region', value: 75.29818182},
    {name: 'China, Macao Special Administrative Region*', value: 40.7525},
    {name: 'Colombia', value: 76.36636364},
    {name: 'Costa Rica', value: 379.39625},
    {name: 'Cote d\'Ivoire', value: 44.93},
    {name: 'Croatia', value: 444.6169231},
    {name: 'Cyprus', value: 260.7092308},
    {name: 'Czechia', value: 538.7538462},
    {name: 'Denmark', value: 1535.742308},
    {name: 'Dominican Republic', value: 67.775},
    {name: 'Ecuador', value: 86.855},
    {name: 'Egypt', value: 1.151666667},
    {name: 'El Salvador', value: 10.56111111},
    {name: 'Finland', value: 462.0984615},
    {name: 'France*', value: 569.8192308},
    {name: 'Georgia', value: 375.88375},
    {name: 'Germany', value: 517.0384615},
    {name: 'Greece', value: 520.9176923},
    {name: 'Grenada', value: 1112.203636},
    {name: 'Guatemala*', value: 11.54727273},
    {name: 'Guinea', value: 11.43},
    {name: 'Guyana', value: 212.294},
    {name: 'Holy See', value: undefined},
    {name: 'Honduras', value: 4.06},
    {name: 'Hungary', value: 414.72},
    {name: 'Iceland*', value: 709.2584615},
    {name: 'India', value: 7.737},
    {name: 'Indonesia', value: 20.6825},
    {name: 'Iraq (Central Iraq)', value: 0.705},
    {name: 'Ireland', value: 582.4623077},
    {name: 'Israel', value: 701},
    {name: 'Italy', value: 244.235},
    {name: 'Jamaica', value: 96.197},
    {name: 'Japan', value: 139.9683333},
    {name: 'Jordan', value: 0.045},
    {name: 'Kazakhstan', value: 221.5183333},
    {name: 'Kenya', value: 4.899166667},
    {name: 'Kosovo under UNSCR 1244', value: 378.01},
    {name: 'Kyrgyzstan*', value: 53.793},
    {name: 'Latvia*', value: 141.1025},
    {name: 'Lesotho', value: 239.1266667},
    {name: 'Liechtenstein', value: 377.3138462},
    {name: 'Luxembourg', value: 623.2722222},
    {name: 'Madagascar', value: 2.321666667},
    {name: 'Malaysia', value: 99.42},
    {name: 'Maldives', value: 40.41571429},
    {name: 'Malta', value: 335.1238462},
    {name: 'Mauritius', value: 168.2},
    {name: 'Mexico*', value: 145.5016667},
    {name: 'Monaco', value: 294.915},
    {name: 'Mongolia', value: 167.126},
    {name: 'Montenegro', value: 274.5523077},
    {name: 'Morocco', value: 10.7025},
    {name: 'Mozambique', value: 17.93},
    {name: 'Myanmar', value: 0.08},
    {name: 'Nepal', value: 0.135},
    {name: 'Netherlands', value: 1720.633636},
    {name: 'New Zealand', value: 1346.375556},
    {name: 'Nigeria', value: 1.488333333},
    {name: 'Norway', value: 455.0291667},
    {name: 'Panama', value: 71.16},
    {name: 'Paraguay', value: 27.3775},
    {name: 'Peru', value: 19.73333333},
    {name: 'Poland', value: 411.7007692},
    {name: 'Portugal', value: 425.2584615},
    {name: 'Puerto Rico', value: 412.2475},
    {name: 'Qatar', value: 47.28},
    {name: 'Republic of Korea', value: 195.5377778},
    {name: 'Republic of Moldova', value: 106.7581818},
    {name: 'Romania*', value: 90.78615385},
    {name: 'Russian Federation', value: 218.5433333},
    {name: 'Rwanda', value: 21.09833333},
    {name: 'Saint Kitts and Nevis', value: 1256.403333},
    {name: 'Saint Vincent and the Grenadines', value: 1331.817},
    {name: 'Senegal', value: 0.33},
    {name: 'Serbia*', value: 197.0527273},
    {name: 'Sierra Leone', value: 11.54},
    {name: 'Singapore', value: 17.64076923},
    {name: 'Slovakia', value: 289.3123077},
    {name: 'Slovenia', value: 787.0715385},
    {name: 'Solomon Islands', value: 84.322},
    {name: 'Spain*', value: 484.5081818},
    {name: 'Sri Lanka', value: 86.33375},
    {name: 'State of Palestine', value: 1.31},
    {name: 'Suriname', value: 476.945},
    {name: 'Swaziland', value: 770.715},
    {name: 'Sweden', value: 1061.425385},
    {name: 'Switzerland*', value: 814.8976923},
    {name: 'Syrian Arab Republic', value: 4.22},
    {name: 'Tajikistan', value: 8.951666667},
    {name: 'Thailand', value: 8.373333333},
    {name: 'The former Yugoslav Republic of Macedonia', value: 589.813},
    {name: 'Trinidad and Tobago', value: 326.9625},
    {name: 'Turkey', value: 135.646},
    {name: 'Uganda', value: 27.51416667},
    {name: 'United Arab Emirates', value: 39.318},
    {name: 'United Kingdom (England and Wales)', value: 1036.583333},
    {name: 'United Kingdom (Northern Ireland)', value: 671.2966667},
    {name: 'United Kingdom (Scotland)', value: 516.54},
    {name: 'United Republic of Tanzania', value: 30.63},
    {name: 'United States of America', value: 678.0415385},
    {name: 'Uruguay', value: 272.385},
    {name: 'Zimbabwe', value: 420.6433333}
];

var intentionalHomicide=[
    {name: 'Afghanistan', value: 4.61},
    {name: 'Albania', value: 3.91},
    {name: 'Algeria', value: 1.106923077},
    {name: 'Andorra', value: 1.202},
    {name: 'Angola', value: 10.54333333},
    {name: 'Anguilla', value: 19.84222222},
    {name: 'Antigua and Barbuda', value: 11.49111111},
    {name: 'Argentina', value: 7.02},
    {name: 'Armenia', value: 2.473333333},
    {name: 'Aruba', value: 5.85125},
    {name: 'Australia', value: 1.214615385},
    {name: 'Austria', value: 0.676923077},
    {name: 'Azerbaijan', value: 2.162727273},
    {name: 'Bahamas', value: 22.217},
    {name: 'Bahrain', value: 0.654444444},
    {name: 'Bangladesh', value: 2.683846154},
    {name: 'Barbados', value: 9.681538462},
    {name: 'Belarus', value: 5.9},
    {name: 'Belgium***', value: 1.975384615},
    {name: 'Belize', value: 35.47333333},
    {name: 'Benin', value: 6.456666667},
    {name: 'Bermuda', value: 6.757692308},
    {name: 'Bhutan', value: 2.504285714},
    {name: 'Bolivia (Plurinational State of)', value: 9.0725},
    {name: 'Bosnia and Herzegovina', value: 1.471428571},
    {name: 'Botswana', value: 14.35888889},
    {name: 'Brazil', value: 24.69777778},
    {name: 'British Virgin Islands', value: 11.69666667},
    {name: 'Brunei Darussalam', value: 0.595555556},
    {name: 'Bulgaria', value: 2.196923077},
    {name: 'Burkina Faso', value: 0.66875},
    {name: 'Burundi', value: 3.951428571},
    {name: 'Cabo Verde', value: 9.204444444},
    {name: 'Cambodia', value: 2.997777778},
    {name: 'Cameroon', value: 4.2475},
    {name: 'Canada', value: 1.736923077},
    {name: 'Cayman Islands', value: 7.983333333},
    {name: 'Central African Republic', value: 13.88666667},
    {name: 'Chad', value: 9.806666667},
    {name: 'Chile', value: 3.418181818},
    {name: 'China', value: 1.2025},
    {name: 'China, Hong Kong Special Administrative Region', value: 0.503846154},
    {name: 'China, Macao Special Administrative Region', value: 1.265833333},
    {name: 'Colombia', value: 35.48230769},
    {name: 'Comoros', value: 8.483333333},
    {name: 'Congo', value: 10.67333333},
    {name: 'Cook Islands', value: 3.06},
    {name: 'Costa Rica', value: 9.450769231},
    {name: 'Cote d\'Ivoire', value: 13.17},
    {name: 'Croatia', value: 1.317692308},
    {name: 'Cuba', value: 5.172222222},
    {name: 'Cyprus', value: 1.293333333},
    {name: 'Czechia', value: 1.045384615},
    {name: 'Democratic People\'s Republic of Korea', value: 4.763333333},
    {name: 'Democratic Republic of the Congo', value: 13.87666667},
    {name: 'Denmark', value: 0.893076923},
    {name: 'Djibouti', value: 7.51},
    {name: 'Dominica', value: 12.08555556},
    {name: 'Dominican Republic', value: 23.24909091},
    {name: 'Ecuador', value: 15.1275},
    {name: 'Egypt', value: 1.245555556},
    {name: 'El Salvador', value: 60.96692308},
    {name: 'Equatorial Guinea', value: 3.36},
    {name: 'Eritrea', value: 8.29},
    {name: 'Estonia', value: 5.85},
    {name: 'Ethiopia', value: 8.496666667},
    {name: 'Fiji', value: 2.886},
    {name: 'Finland', value: 2.098461539},
    {name: 'France', value: 1.439230769},
    {name: 'French Guiana', value: 18.70333333},
    {name: 'French Polynesia', value: 1.9125},
    {name: 'Gabon', value: 9.826666667},
    {name: 'Gambia', value: 9.573333333},
    {name: 'Georgia', value: 6.115555556},
    {name: 'Germany', value: 0.95},
    {name: 'Ghana', value: 1.878888889},
    {name: 'Greece', value: 1.232307692},
    {name: 'Greenland', value: 17.38846154},
    {name: 'Grenada', value: 9.1225},
    {name: 'Guadeloupe', value: 6.255},
    {name: 'Guam', value: 3.433333333},
    {name: 'Guatemala', value: 38.21181818},
    {name: 'Guinea', value: 9.26},
    {name: 'Guinea-Bissau', value: 10.05333333},
    {name: 'Guyana', value: 19.25833333},
    {name: 'Haiti', value: 7.018333333},
    {name: 'Honduras', value: 67.61307692},
    {name: 'Hungary', value: 1.625},
    {name: 'Iceland', value: 0.64},
    {name: 'India', value: 3.483333333},
    {name: 'Indonesia', value: 0.576666667},
    {name: 'Iran (Islamic Republic of)', value: 4.923333333},
    {name: 'Iraq', value: 43.35},
    {name: 'Iraq (Central Iraq)', value: 10.99571429},
    {name: 'Iraq (Kurdistan Region)', value: 4.231666667},
    {name: 'Ireland', value: 1.132307692},
    {name: 'Israel', value: 2.080833333},
    {name: 'Italy', value: 0.982307692},
    {name: 'Jamaica', value: 49.26461538},
    {name: 'Japan', value: 0.426666667},
    {name: 'Jordan', value: 1.867777778},
    {name: 'Kazakhstan*', value: 9.515384615},
    {name: 'Kenya', value: 5.049166667},
    {name: 'Kiribati', value: 6.002},
    {name: 'Kosovo under UNSCR 1244', value: 3.81375},
    {name: 'Kuwait', value: 1.83},
    {name: 'Kyrgyzstan', value: 7.942307692},
    {name: 'Lao People\'s Democratic Republic', value: 8.173333333},
    {name: 'Latvia', value: 5.018461539},
    {name: 'Lebanon', value: 3.99625},
    {name: 'Lesotho', value: 39.5525},
    {name: 'Liberia', value: 3.646666667},
    {name: 'Libya', value: 3.07},
    {name: 'Liechtenstein', value: 2.7875},
    {name: 'Lithuania', value: 7.865},
    {name: 'Luxembourg', value: 1.15875},
    {name: 'Madagascar', value: 2.072857143},
    {name: 'Malawi', value: 3.412},
    {name: 'Malaysia', value: 2.175},
    {name: 'Maldives', value: 1.541428571},
    {name: 'Mali', value: 11.84333333},
    {name: 'Malta', value: 1.353636364},
    {name: 'Marshall Islands', value: 4.68},
    {name: 'Martinique', value: 4.708333333},
    {name: 'Mauritania', value: 11.14666667},
    {name: 'Mauritius', value: 2.803333333},
    {name: 'Mayotte', value: 5.805},
    {name: 'Mexico', value: 14.61461538},
    {name: 'Micronesia (Federated States of)', value: 4.58},
    {name: 'Monaco', value: 2.956666667},
    {name: 'Mongolia', value: 10.09230769},
    {name: 'Montenegro', value: 2.801111111},
    {name: 'Montserrat', value: 20.65},
    {name: 'Morocco', value: 1.4225},
    {name: 'Mozambique', value: 4.29},
    {name: 'Myanmar', value: 1.936923077},
    {name: 'Namibia', value: 16.22166667},
    {name: 'Nauru', value: 1.31},
    {name: 'Nepal', value: 2.993333333},
    {name: 'Netherlands', value: 0.897692308},
    {name: 'New Caledonia', value: 4.1025},
    {name: 'New Zealand****', value: 1.12},
    {name: 'Nicaragua', value: 12.921},
    {name: 'Niger', value: 4.685},
    {name: 'Nigeria', value: 10.73666667},
    {name: 'Niue', value: 3.07},
    {name: 'Norway', value: 0.841666667},
    {name: 'Oman', value: 0.81},
    {name: 'Pakistan', value: 7.058},
    {name: 'Palau', value: 3.11},
    {name: 'Panama', value: 15.31230769},
    {name: 'Papua New Guinea', value: 9.2},
    {name: 'Paraguay', value: 13.75769231},
    {name: 'Peru', value: 8.204615385},
    {name: 'Philippines*', value: 8.0375},
    {name: 'Poland', value: 1.186153846},
    {name: 'Portugal', value: 1.256923077},
    {name: 'Puerto Rico', value: 21.555},
    {name: 'Qatar', value: 6.63},
    {name: 'Republic of Korea', value: 0.7825},
    {name: 'Republic of Moldova', value: 5.975},
    {name: 'Reunion', value: 2.576666667},
    {name: 'Romania***', value: 1.968461539},
    {name: 'Russian Federation', value: 13.535},
    {name: 'Rwanda', value: 4.625},
    {name: 'Saint Kitts and Nevis', value: 36.084},
    {name: 'Saint Lucia', value: 22.61888889},
    {name: 'Saint Pierre and Miquelon', value: 15.945},
    {name: 'Saint Vincent and the Grenadines', value: 20.916},
    {name: 'Samoa', value: 6.803333333},
    {name: 'San Marino', value: undefined},
    {name: 'Sao Tome and Principe', value: 3.925},
    {name: 'Saudi Arabia', value: 1.21},
    {name: 'Senegal', value: 8.356666667},
    {name: 'Serbia', value: 1.560769231},
    {name: 'Seychelles', value: 6.03125},
    {name: 'Sierra Leone', value: 2.457},
    {name: 'Singapore', value: 0.378461539},
    {name: 'Slovakia', value: 1.691538462},
    {name: 'Slovenia', value: 0.85},
    {name: 'Solomon Islands', value: 4.748},
    {name: 'Somalia', value: 6.1},
    {name: 'South Africa', value: 35.09846154},
    {name: 'South Sudan', value: 13.7},
    {name: 'Spain', value: 0.934615385},
    {name: 'Sri Lanka*', value: 6.189090909},
    {name: 'State of Palestine', value: 1.895},
    {name: 'Sudan', value: 6.916666667},
    {name: 'Suriname', value: 7.78},
    {name: 'Swaziland', value: 14.05222222},
    {name: 'Sweden', value: 0.966153846},
    {name: 'Switzerland', value: 0.738461539},
    {name: 'Syrian Arab Republic', value: 2.42625},
    {name: 'Taiwan Province of China', value: 0.8075},
    {name: 'Tajikistan', value: 1.9225},
    {name: 'Thailand', value: 5.856923077},
    {name: 'The former Yugoslav Republic of Macedonia', value: 1.939166667},
    {name: 'Timor-Leste', value: 4.018571429},
    {name: 'Togo', value: 9.926666667},
    {name: 'Tonga', value: 3.631},
    {name: 'Trinidad and Tobago', value: 29.79692308},
    {name: 'Tunisia', value: 2.5575},
    {name: 'Turkey', value: 4.581},
    {name: 'Turkmenistan', value: 4.536666667},
    {name: 'Turks and Caicos Islands', value: 6.695},
    {name: 'Tuvalu', value: 13.54},
    {name: 'Uganda', value: 9.680833333},
    {name: 'Ukraine', value: 5.98875},
    {name: 'United Arab Emirates', value: 0.685},
    {name: 'United Kingdom of Great Britain and Northern Ireland', value: 1.265833333},
    {name: 'United Republic of Tanzania', value: 7.938333333},
    {name: 'United States Virgin Islands', value: 39.62375},
    {name: 'United States of America', value: 5.131538462},
    {name: 'Uruguay', value: 6.641538462},
    {name: 'Uzbekistan', value: 3.26},
    {name: 'Vanuatu', value: 2.303333333},
    {name: 'Venezuela (Bolivarian Republic of)', value: 48.12},
    {name: 'Viet Nam', value: 1.343333333},
    {name: 'Yemen', value: 4.669090909},
    {name: 'Zambia', value: 5.716666667},
    {name: 'Zimbabwe', value: 8.598333333}
];

var kidnapping=[
    {name: 'Albania', value: 0.24875},
    {name: 'Algeria', value: 0.545454546},
    {name: 'Andorra', value: undefined},
    {name: 'Armenia', value: 1.068},
    {name: 'Australia*', value: 2.775},
    {name: 'Austria', value: 0.075},
    {name: 'Azerbaijan', value: 0.186},
    {name: 'Bahamas', value: 7.705},
    {name: 'Bahrain', value: 1.625},
    {name: 'Bangladesh', value: 0.84},
    {name: 'Barbados', value: 4.977},
    {name: 'Belarus', value: 0.226363636},
    {name: 'Belgium', value: 9.785454546},
    {name: 'Belize', value: 1.734},
    {name: 'Bermuda*', value: 4.254285714},
    {name: 'Bhutan', value: 0.205},
    {name: 'Bolivia (Plurinational State of)', value: 1.215},
    {name: 'Bosnia and Herzegovina', value: 0.127777778},
    {name: 'Botswana', value: 0.18},
    {name: 'Brazil', value: 0.21625},
    {name: 'Brunei Darussalam', value: 0.285},
    {name: 'Bulgaria', value: 1.777272727},
    {name: 'Burundi', value: 0.398333333},
    {name: 'Cabo Verde', value: 3.135},
    {name: 'Cameroon', value: 2.61},
    {name: 'Canada', value: 12.04181818},
    {name: 'Chile*', value: 1.375454546},
    {name: 'China Hong Kong Special Administrative Region', value: 0.0175},
    {name: 'China Macao Special Administrative Region*', value: 0.275},
    {name: 'Colombia', value: 1.196},
    {name: 'Costa Rica', value: 0.17},
    {name: 'Croatia', value: 0.251},
    {name: 'Cyprus', value: 1.809090909},
    {name: 'Czechia', value: 0.112727273},
    {name: 'Dominican Republic', value: 0.186666667},
    {name: 'Ecuador', value: 0.567777778},
    {name: 'Egypt', value: 0.083333333},
    {name: 'El Salvador', value: 0.253333333},
    {name: 'Estonia*', value: 0.13125},
    {name: 'Finland', value: 0.032},
    {name: 'France', value: 3.424545455},
    {name: 'Georgia', value: 0.78},
    {name: 'Germany*', value: 4.209},
    {name: 'Greece', value: 0.646},
    {name: 'Grenada', value: undefined},
    {name: 'Guatemala', value: 0.714},
    {name: 'Guinea', value: 0.156},
    {name: 'Guyana', value: 0.2},
    {name: 'Holy See', value: undefined},
    {name: 'Honduras', value: 0.72},
    {name: 'Hungary', value: 0.138181818},
    {name: 'India', value: 2.938},
    {name: 'Indonesia', value: 0.185},
    {name: 'Iraq (Central Iraq)', value: 4.486666667},
    {name: 'Ireland', value: 2.195454546},
    {name: 'Israel', value: 4.985714286},
    {name: 'Italy', value: 0.513636364},
    {name: 'Jamaica', value: 1.12},
    {name: 'Japan', value: 0.165454546},
    {name: 'Jordan', value: 0.57},
    {name: 'Kazakhstan', value: 0.68},
    {name: 'Kenya', value: 0.326},
    {name: 'Kosovo under UNSCR 1244', value: 2.16},
    {name: 'Kuwait', value: 12.44},
    {name: 'Kyrgyzstan*', value: 0.66},
    {name: 'Latvia', value: 0.566363636},
    {name: 'Lebanon', value: 17.355},
    {name: 'Lesotho', value: 2.803333333},
    {name: 'Liechtenstein', value: undefined},
    {name: 'Lithuania', value: 1.825454546},
    {name: 'Luxembourg', value: 7.495},
    {name: 'Madagascar', value: 0.01},
    {name: 'Maldives', value: 3.43125},
    {name: 'Malta*', value: undefined},
    {name: 'Mauritius', value: 3.176666667},
    {name: 'Mexico*', value: 0.766363636},
    {name: 'Monaco', value: 5.82},
    {name: 'Mongolia', value: 0.046},
    {name: 'Montenegro', value: 0.412857143},
    {name: 'Morocco', value: 1.254444444},
    {name: 'Myanmar', value: 0.05},
    {name: 'Nepal', value: 0.715},
    {name: 'Netherlands*', value: 4.18},
    {name: 'New Zealand*', value: 6.621111111},
    {name: 'Nicaragua', value: 0.143333333},
    {name: 'Nigeria', value: 0.331666667},
    {name: 'Oman', value: 0.42},
    {name: 'Panama*', value: 0.632},
    {name: 'Paraguay', value: 0.064285714},
    {name: 'Peru*', value: 1.725454546},
    {name: 'Philippines', value: 0.043},
    {name: 'Poland', value: 0.212727273},
    {name: 'Portugal', value: 4.532},
    {name: 'Qatar', value: 0.935},
    {name: 'Republic of Korea', value: 0.43375},
    {name: 'Republic of Moldova', value: 1.047777778},
    {name: 'Romania*', value: 1.47},
    {name: 'Russian Federation', value: 0.516},
    {name: 'Rwanda', value: 0.111666667},
    {name: 'Saint Kitts and Nevis', value: 4.45},
    {name: 'Saint Vincent and the Grenadines', value: 3.055555556},
    {name: 'Sao Tome and Principe', value: undefined},
    {name: 'Senegal', value: undefined},
    {name: 'Serbia', value: 0.191111111},
    {name: 'Singapore', value: 0.045},
    {name: 'Slovakia', value: 0.122222222},
    {name: 'Slovenia', value: 0.223636364},
    {name: 'Spain', value: 0.373333333},
    {name: 'Sri Lanka', value: 2.1425},
    {name: 'State of Palestine*', value: 2.27},
    {name: 'Sudan', value: 1.81},
    {name: 'Swaziland', value: 9.99},
    {name: 'Switzerland*', value: 2.66},
    {name: 'Syrian Arab Republic', value: 0.328333333},
    {name: 'Tajikistan', value: 2.373333333},
    {name: 'Thailand', value: 0.016666667},
    {name: 'The former Yugoslav Republic of Macedonia', value: 0.95},
    {name: 'Trinidad and Tobago', value: 1.218},
    {name: 'Turkey', value: 15.323},
    {name: 'Turkmenistan', value: 3.04},
    {name: 'Uganda*', value: 0.462857143},
    {name: 'Ukraine', value: 0.52625},
    {name: 'United Arab Emirates', value: 10.76166667},
    {name: 'United Kingdom (England and Wales)', value: 3.891818182},
    {name: 'United Kingdom (Northern Ireland)', value: 3.636363636},
    {name: 'United Kingdom (Scotland)', value: 5.528},
    {name: 'United Republic of Tanzania', value: undefined},
    {name: 'Uruguay', value: 0.413333333},
    {name: 'Yemen', value: 0.23},
    {name: 'Zimbabwe', value: 1.203333333}
];

var motorVehicleTheft=[
    {name: 'Albania', value: 17.73272727},
    {name: 'Algeria*', value: 7.806153846},
    {name: 'Andorra', value: undefined},
    {name: 'Argentina', value: 127.992},
    {name: 'Armenia', value: 2.737692308},
    {name: 'Australia*', value: 298.6846154},
    {name: 'Austria*', value: 77.46},
    {name: 'Azerbaijan*', value: 0.944166667},
    {name: 'Bahamas', value: 334.37625},
    {name: 'Bahrain', value: 197.8975},
    {name: 'Bangladesh', value: 0.735},
    {name: 'Barbados', value: 34.11833333},
    {name: 'Belarus', value: 12.5825},
    {name: 'Belgium', value: 206.3515385},
    {name: 'Belize', value: 31.83875},
    {name: 'Bermuda', value: 1227.93},
    {name: 'Bolivia (Plurinational State of)', value: 41.44857143},
    {name: 'Bosnia and Herzegovina', value: 43.58727273},
    {name: 'Botswana', value: 13.5},
    {name: 'Brazil', value: 93.23875},
    {name: 'Brunei Darussalam', value: 43.3025},
    {name: 'Bulgaria', value: 64.28846154},
    {name: 'Cabo Verde', value: 15.3475},
    {name: 'Cameroon*', value: 5.46875},
    {name: 'Canada', value: 351.6707692},
    {name: 'Chile', value: 153.07},
    {name: 'China, Hong Kong Special Administrative Region', value: 18.66090909},
    {name: 'China, Macao Special Administrative Region*', value: 86.00625},
    {name: 'Colombia', value: 56.535},
    {name: 'Costa Rica', value: 117.1066667},
    {name: 'Cote d\'Ivoire', value: 11.815},
    {name: 'Croatia', value: 37.24846154},
    {name: 'Cyprus', value: 145.5436364},
    {name: 'Czechia', value: 156.3115385},
    {name: 'Denmark', value: 187.2461538},
    {name: 'Dominican Republic', value: 48.7875},
    {name: 'Ecuador', value: 65.204},
    {name: 'Egypt', value: 6.62},
    {name: 'El Salvador*', value: 21.79909091},
    {name: 'Estonia', value: 54.15090909},
    {name: 'Finland', value: 237.9},
    {name: 'France', value: 333.8258333},
    {name: 'Georgia', value: 13.412},
    {name: 'Germany', value: 100.7515385},
    {name: 'Greece', value: 224.7775},
    {name: 'Grenada', value: undefined},
    {name: 'Guatemala*', value: 52.06727273},
    {name: 'Guinea', value: 0.415},
    {name: 'Guyana', value: 5.918},
    {name: 'Holy See', value: undefined},
    {name: 'Honduras', value: 25.43125},
    {name: 'Hungary', value: 79.18416667},
    {name: 'Iceland', value: 81.13230769},
    {name: 'India', value: 10.181},
    {name: 'Indonesia', value: 15.81875},
    {name: 'Iran (Islamic Republic of)', value: 127.255},
    {name: 'Ireland', value: 256.8592308},
    {name: 'Israel', value: 397.5125},
    {name: 'Italy', value: 363.1276923},
    {name: 'Jamaica*', value: 41.178},
    {name: 'Japan', value: 86.16909091},
    {name: 'Jordan', value: 51.99125},
    {name: 'Kazakhstan', value: 17.272},
    {name: 'Kenya', value: 2.264166667},
    {name: 'Kosovo under UNSCR 1244', value: 19.86571429},
    {name: 'Kuwait', value: 0.488333333},
    {name: 'Kyrgyzstan', value: 5.634615385},
    {name: 'Latvia*', value: 93.83333333},
    {name: 'Lebanon', value: 211.80875},
    {name: 'Lesotho', value: 24.78},
    {name: 'Liechtenstein', value: 26.05615385},
    {name: 'Lithuania', value: 90.61153846},
    {name: 'Luxembourg', value: 82.17},
    {name: 'Madagascar', value: 0.106666667},
    {name: 'Malaysia', value: 286.385},
    {name: 'Maldives', value: 194.9944444},
    {name: 'Malta', value: 113.6707692},
    {name: 'Mauritius', value: 73.14444444},
    {name: 'Mexico*', value: 154.2},
    {name: 'Monaco', value: 371.595},
    {name: 'Mongolia', value: 5.399166667},
    {name: 'Montenegro*', value: 8.645384615},
    {name: 'Morocco', value: 24.54888889},
    {name: 'Myanmar', value: 0.03},
    {name: 'Nepal', value: 0.085},
    {name: 'Netherlands', value: 129.9409091},
    {name: 'New Zealand*', value: 496.3811111},
    {name: 'Nicaragua', value: 5.243333333},
    {name: 'Nigeria', value: 1.268333333},
    {name: 'Norway', value: 255.625},
    {name: 'Oman', value: 6.785},
    {name: 'Panama*', value: 13.38333333},
    {name: 'Paraguay', value: 61.57545455},
    {name: 'Peru', value: 47.54538462},
    {name: 'Philippines*', value: 6.666666667},
    {name: 'Poland', value: 65.62846154},
    {name: 'Portugal', value: 203.2876923},
    {name: 'Puerto Rico', value: 157.08},
    {name: 'Qatar', value: 13.4825},
    {name: 'Republic of Korea', value: 18.13555556},
    {name: 'Republic of Moldova', value: 3.046666667},
    {name: 'Romania*', value: 11.69},
    {name: 'Russian Federation', value: 38.41916667},
    {name: 'Saint Kitts and Nevis', value: 5.66},
    {name: 'Saint Vincent and the Grenadines', value: 32.78888889},
    {name: 'Sao Tome and Principe', value: undefined},
    {name: 'Senegal', value: 0.01},
    {name: 'Serbia', value: 34.75909091},
    {name: 'Singapore', value: 17.58538462},
    {name: 'Slovakia', value: 71.68384615},
    {name: 'Slovenia', value: 32.99307692},
    {name: 'Spain', value: 158.1063636},
    {name: 'Sri Lanka', value: 6.28625},
    {name: 'State of Palestine', value: 8.076666667},
    {name: 'Suriname', value: 11.365},
    {name: 'Swaziland', value: 29.69},
    {name: 'Sweden', value: 453.1576923},
    {name: 'Switzerland*', value: 368.3718182},
    {name: 'Syrian Arab Republic', value: 3.798333333},
    {name: 'Tajikistan', value: 0.6475},
    {name: 'Thailand', value: 23.41},
    {name: 'The former Yugoslav Republic of Macedonia', value: 24.108},
    {name: 'Trinidad and Tobago', value: 97.27166667},
    {name: 'Turkey', value: 41.121},
    {name: 'Turkmenistan', value: 0.1275},
    {name: 'Uganda', value: 3.0325},
    {name: 'Ukraine', value: 11.85875},
    {name: 'United Arab Emirates', value: 11.825},
    {name: 'United Kingdom (England and Wales)', value: 276.7525},
    {name: 'United Kingdom (Northern Ireland)', value: 184.9441667},
    {name: 'United Kingdom (Scotland)', value: 206.73},
    {name: 'United Republic of Tanzania', value: 8.441666667},
    {name: 'United States of America', value: 305.0515385},
    {name: 'Uruguay', value: 373.7116667},
    {name: 'Yemen', value: 4.288},
    {name: 'Zimbabwe', value: 5.341666667}
]

var rape=[
    {name: 'Albania', value: 1.14375},
    {name: 'Algeria*', value: 1.323},
    {name: 'Andorra', value: 2.922},
    {name: 'Argentina', value: 8.2125},
    {name: 'Armenia', value: 0.349},
    {name: 'Austria', value: 9.3},
    {name: 'Azerbaijan', value: 0.354},
    {name: 'Bahamas', value: 28.55625},
    {name: 'Bahrain', value: 2.633333333},
    {name: 'Bangladesh', value: 7.985},
    {name: 'Barbados', value: 25.03111111},
    {name: 'Belarus', value: 2.92},
    {name: 'Belgium', value: 29.595},
    {name: 'Belize', value: 10.78},
    {name: 'Bermuda', value: 24.965},
    {name: 'Bhutan', value: 6.614},
    {name: 'Bolivia (Plurinational State of)', value: 21.7525},
    {name: 'Bosnia and Herzegovina', value: 1.0075},
    {name: 'Botswana', value: 88.19666667},
    {name: 'Brazil', value: 17.60571429},
    {name: 'Brunei Darussalam', value: 7.105},
    {name: 'Bulgaria', value: 4.128},
    {name: 'Burundi', value: 7.61},
    {name: 'Cabo Verde', value: 24.41333333},
    {name: 'Cameroon*', value: 2.788888889},
    {name: 'Canada*', value: 1.621},
    {name: 'Chile', value: 19.13714286},
    {name: 'China Hong Kong Special Administrative Region', value: 1.484},
    {name: 'China Macao Special Administrative Region*', value: 4.488},
    {name: 'Colombia*', value: 7.303333333},
    {name: 'Costa Rica', value: 32.75},
    {name: 'Croatia', value: 3.621},
    {name: 'Cyprus', value: 3.01},
    {name: 'Czechia', value: 5.823},
    {name: 'Denmark', value: 10.823},
    {name: 'Dominican Republic', value: 15.67},
    {name: 'Ecuador', value: 12.23},
    {name: 'Egypt', value: 0.076666667},
    {name: 'El Salvador*', value: 7.131666667},
    {name: 'Estonia', value: 9.523},
    {name: 'Finland', value: 14.196},
    {name: 'France*', value: 16.485},
    {name: 'Georgia', value: 2.39625},
    {name: 'Germany', value: 9.799},
    {name: 'Greece', value: 1.811},
    {name: 'Grenada', value: 27.59875},
    {name: 'Guatemala', value: 2.951111111},
    {name: 'Guinea', value: 0.91},
    {name: 'Guyana', value: 22.7525},
    {name: 'Holy See', value: undefined},
    {name: 'Honduras', value: 18.505},
    {name: 'Hungary', value: 2.546},
    {name: 'Iceland', value: 27.404},
    {name: 'India', value: 1.766666667},
    {name: 'Indonesia', value: 0.946},
    {name: 'Iraq (Central Iraq)', value: 1.954},
    {name: 'Ireland', value: 10.269},
    {name: 'Israel', value: 17.35285714},
    {name: 'Jamaica', value: 28.87285714},
    {name: 'Japan', value: 1.353},
    {name: 'Jordan', value: 1.725},
    {name: 'Kazakhstan', value: 9.94375},
    {name: 'Kenya', value: 2.713333333},
    {name: 'Kosovo under UNSCR 1244', value: 2.02},
    {name: 'Kuwait', value: 4.748333333},
    {name: 'Kyrgyzstan', value: 5.687},
    {name: 'Latvia', value: 5.814},
    {name: 'Lebanon', value: 3.752},
    {name: 'Lesotho', value: 92.13},
    {name: 'Liechtenstein', value: 6.802857143},
    {name: 'Lithuania', value: 6.614},
    {name: 'Luxembourg', value: 11.65857143},
    {name: 'Madagascar', value: 2.016666667},
    {name: 'Maldives', value: 1.75375},
    {name: 'Malta*', value: 3.234},
    {name: 'Mauritius', value: 4.567777778},
    {name: 'Mexico*', value: 12.55333333},
    {name: 'Monaco', value: 5.906666667},
    {name: 'Mongolia', value: 13.207},
    {name: 'Montenegro', value: 1.27},
    {name: 'Morocco', value: 3.09375},
    {name: 'Mozambique', value: 0.263333333},
    {name: 'Myanmar', value: 0.6175},
    {name: 'Nepal', value: 0.78},
    {name: 'Netherlands*', value: 11.592},
    {name: 'New Zealand', value: 27.17625},
    {name: 'Nicaragua', value: 28.14},
    {name: 'Nigeria', value: 1.05},
    {name: 'Norway', value: 19.044},
    {name: 'Oman', value: 5.995},
    {name: 'Panama*', value: 24.57},
    {name: 'Paraguay', value: 20.63},
    {name: 'Peru', value: 24.136},
    {name: 'Philippines', value: 4.058},
    {name: 'Poland', value: 4.662},
    {name: 'Portugal', value: 3.427},
    {name: 'Puerto Rico*', value: 1.488},
    {name: 'Qatar', value: 1.715},
    {name: 'Republic of Korea', value: 12.95},
    {name: 'Republic of Moldova', value: 7.253},
    {name: 'Romania*', value: 4.654},
    {name: 'Russian Federation', value: 4.632222222},
    {name: 'Rwanda', value: 2.952},
    {name: 'Saint Kitts and Nevis', value: 31.81333333},
    {name: 'Saint Vincent and the Grenadines', value: 46.58333333},
    {name: 'Sao Tome and Principe', value: 2.005},
    {name: 'Senegal', value: 3.305},
    {name: 'Serbia', value: 1.07125},
    {name: 'Sierra Leone', value: 1.965},
    {name: 'Singapore', value: 2.913},
    {name: 'Slovakia', value: 3.081},
    {name: 'Slovenia', value: 3.358},
    {name: 'Spain', value: 4.29},
    {name: 'Sri Lanka', value: 8.358571429},
    {name: 'State of Palestine', value: 1.2275},
    {name: 'Sudan', value: 3.49},
    {name: 'Suriname', value: 41.855},
    {name: 'Swaziland', value: 74.85},
    {name: 'Sweden', value: 47.096},
    {name: 'Switzerland*', value: 7.872},
    {name: 'Syrian Arab Republic', value: 0.678333333},
    {name: 'Tajikistan', value: 0.70125},
    {name: 'Thailand*', value: 5.9775},
    {name: 'The former Yugoslav Republic of Macedonia', value: 2.275},
    {name: 'Trinidad and Tobago', value: 20.30444444},
    {name: 'Turkey', value: 2.191666667},
    {name: 'Turkmenistan', value: 0.675},
    {name: 'Uganda', value: 2.331},
    {name: 'Ukraine', value: 1.9025},
    {name: 'United Arab Emirates', value: 1.244},
    {name: 'United Kingdom (England and Wales)', value: 26.447},
    {name: 'United Kingdom (Northern Ireland)', value: 23.962},
    {name: 'United Kingdom (Scotland)*', value: 18.774},
    {name: 'United Republic of Tanzania', value: 13.15},
    {name: 'United States of America*', value: 29.93},
    {name: 'Uruguay', value: 7.212222222},
    {name: 'Yemen', value: 0.594},
    {name: 'Zimbabwe', value: 33.86333333}
]

var robbery=[
    {name: 'Albania', value: 7.865454546},
    {name: 'Algeria*', value: 55.30818182},
    {name: 'Andorra', value: 9.403333333},
    {name: 'Argentina', value: 959.3316667},
    {name: 'Armenia', value: 9.685},
    {name: 'Australia*', value: 52.27333333},
    {name: 'Austria', value: 51.97833333},
    {name: 'Azerbaijan', value: 2.72},
    {name: 'Bahamas', value: 95.34},
    {name: 'Bahrain', value: 36.76166667},
    {name: 'Bangladesh', value: 0.615},
    {name: 'Barbados', value: 137.5658333},
    {name: 'Belarus', value: 69.32833333},
    {name: 'Belgium*', value: 1114.473077},
    {name: 'Belize', value: 148.89625},
    {name: 'Bermuda', value: 121.1233333},
    {name: 'Bhutan', value: 4.926666667},
    {name: 'Bolivia (Plurinational State of)', value: 119.32125},
    {name: 'Bosnia and Herzegovina', value: 23.4425},
    {name: 'Botswana', value: 115.315},
    {name: 'Brazil', value: 494.925},
    {name: 'Brunei Darussalam', value: 2.675},
    {name: 'Bulgaria', value: 43.29538462},
    {name: 'Burundi', value: 41.45428571},
    {name: 'Cabo Verde', value: 787.2616667},
    {name: 'Cameroon*', value: 83.03571429},
    {name: 'Canada', value: 87.98},
    {name: 'Chile', value: 511.9283333},
    {name: 'China, Hong Kong Special Administrative Region', value: 19.12181818},
    {name: 'China, Macao Special Administrative Region*', value: 36.74},
    {name: 'Colombia', value: 147.2675},
    {name: 'Costa Rica*', value: 835.1227273},
    {name: 'Cote d\'Ivoire', value: 3.3},
    {name: 'Croatia', value: 32.22769231},
    {name: 'Cyprus', value: 10.08769231},
    {name: 'Czechia', value: 40.82769231},
    {name: 'Denmark', value: 54.81769231},
    {name: 'Dominican Republic', value: 82.395},
    {name: 'Ecuador', value: 410.752},
    {name: 'Egypt', value: 1.004444444},
    {name: 'El Salvador*', value: 91.25272727},
    {name: 'Estonia', value: 63.50461538},
    {name: 'Finland', value: 31.99},
    {name: 'France*', value: 189.3330769},
    {name: 'Georgia', value: 29.18222222},
    {name: 'Germany', value: 63.04},
    {name: 'Greece', value: 35.88692308},
    {name: 'Grenada', value: 36.90909091},
    {name: 'Guatemala*', value: 47.80272727},
    {name: 'Guinea', value: 1.49},
    {name: 'Guyana', value: 173.7833333},
    {name: 'Holy See', value: undefined},
    {name: 'Honduras', value: 236.2275},
    {name: 'Hungary', value: 29.47666667},
    {name: 'Iceland', value: 14.90153846},
    {name: 'India', value: 1.919},
    {name: 'Indonesia', value: 4.545},
    {name: 'Ireland', value: 57.00846154},
    {name: 'Israel', value: 45.71142857},
    {name: 'Italy', value: 96.10846154},
    {name: 'Jamaica', value: 90.533},
    {name: 'Japan', value: 3.549090909},
    {name: 'Jordan', value: 13.055},
    {name: 'Kazakhstan', value: 83.65636364},
    {name: 'Kenya', value: 10.5475},
    {name: 'Kosovo under UNSCR 1244', value: 28.85571429},
    {name: 'Kuwait', value: 24.59833333},
    {name: 'Kyrgyzstan', value: 43.89222222},
    {name: 'Latvia', value: 69.12153846},
    {name: 'Lebanon*', value: 5.4175},
    {name: 'Lesotho', value: 56.46666667},
    {name: 'Liechtenstein', value: 6.875384615},
    {name: 'Lithuania', value: 102.1138462},
    {name: 'Luxembourg', value: 85.46},
    {name: 'Madagascar', value: 10.63666667},
    {name: 'Malaysia', value: 70.645},
    {name: 'Maldives', value: 178.9255556},
    {name: 'Malta*', value: 52.85384615},
    {name: 'Mauritius', value: 97.84444444},
    {name: 'Mexico*', value: 487.3108333},
    {name: 'Monaco', value: 12.80333333},
    {name: 'Mongolia', value: 23.60461538},
    {name: 'Montenegro*', value: 13.35307692},
    {name: 'Morocco', value: 62.29625},
    {name: 'Mozambique', value: 28.10666667},
    {name: 'Myanmar', value: 0.08},
    {name: 'Nepal', value: 0.72},
    {name: 'Netherlands*', value: 89.52615385},
    {name: 'New Zealand', value: 56.185},
    {name: 'Nicaragua*', value: 446.54},
    {name: 'Nigeria', value: 1.873333333},
    {name: 'Norway*', value: 31.575},
    {name: 'Oman', value: 7.37},
    {name: 'Panama*', value: 217.1291667},
    {name: 'Paraguay', value: 229.729},
    {name: 'Peru', value: 195.1215385},
    {name: 'Philippines*', value: 24.45583333},
    {name: 'Poland', value: 64.82307692},
    {name: 'Portugal', value: 182.2461538},
    {name: 'Puerto Rico', value: 155.62375},
    {name: 'Qatar', value: 3.005},
    {name: 'Republic of Korea', value: 9.2075},
    {name: 'Republic of Moldova', value: 4.018},
    {name: 'Romania*', value: 15.55307692},
    {name: 'Russian Federation', value: 136.145},
    {name: 'Rwanda', value: 20.83833333},
    {name: 'Saint Kitts and Nevis', value: 166.5133333},
    {name: 'Saint Vincent and the Grenadines', value: 89.856},
    {name: 'Sao Tome and Principe', value: 0.58},
    {name: 'Saudi Arabia', value: 0.32},
    {name: 'Senegal', value: 19.83},
    {name: 'Serbia', value: 40.49363636},
    {name: 'Sierra Leone', value: 3.215},
    {name: 'Singapore', value: 13.48923077},
    {name: 'Slovakia', value: 23.96230769},
    {name: 'Slovenia', value: 19.61692308},
    {name: 'Solomon Islands', value: 12.182},
    {name: 'Spain', value: 168.8875},
    {name: 'Sri Lanka', value: 32.12},
    {name: 'State of Palestine*', value: 45.46333333},
    {name: 'Sudan', value: 8.86},
    {name: 'Swaziland', value: 280.065},
    {name: 'Sweden', value: 95.48692308},
    {name: 'Switzerland*', value: 56.95923077},
    {name: 'Syrian Arab Republic', value: 3.828333333},
    {name: 'Tajikistan', value: 3.365},
    {name: 'Thailand*', value: 1.895555556},
    {name: 'The former Yugoslav Republic of Macedonia', value: 24.859},
    {name: 'Trinidad and Tobago', value: 327.2075},
    {name: 'Turkey', value: 17.316},
    {name: 'Turkmenistan', value: 3.825},
    {name: 'Uganda', value: 17.08916667},
    {name: 'Ukraine', value: 76.84375},
    {name: 'United Arab Emirates', value: 8.44875},
    {name: 'United Kingdom (England and Wales)', value: 145.8841667},
    {name: 'United Kingdom (Northern Ireland)', value: 76.86416667},
    {name: 'United Kingdom (Scotland)', value: 53.3525},
    {name: 'United Republic of Tanzania', value: 22.565},
    {name: 'United States of America', value: 127.27},
    {name: 'Uruguay', value: 382.0369231},
    {name: 'Yemen', value: 1.6475},
    {name: 'Zimbabwe', value: 86.29666667}
]

var sexualOffencesagainstChildren=[
    {name: 'Albania', value: 3.89},
    {name: 'Algeria', value: 14.12222222},
    {name: 'Andorra', value: 77.0125},
    {name: 'Armenia', value: 6.99},
    {name: 'Austria', value: 83.70909091},
    {name: 'Azerbaijan', value: 6.6875},
    {name: 'Bahamas', value: 218.7625},
    {name: 'Bahrain', value: 23.9},
    {name: 'Barbados', value: 49.50909091},
    {name: 'Belarus', value: 5.336363636},
    {name: 'Belgium', value: 183.4166667},
    {name: 'Belize', value: 60.85},
    {name: 'Bermuda', value: 153},
    {name: 'Bhutan', value: 9.966666667},
    {name: 'Bolivia (Plurinational State of)', value: 63.47142857},
    {name: 'Bosnia and Herzegovina', value: 5.85},
    {name: 'Botswana', value: 63.125},
    {name: 'Bulgaria', value: 28.8},
    {name: 'Cabo Verde', value: 49.075},
    {name: 'Cameroon', value: 2.066666667},
    {name: 'Canada', value: 54.58333333},
    {name: 'Chile*', value: 175.16},
    {name: 'Colombia', value: 38.42727273},
    {name: 'Costa Rica', value: 175.0625},
    {name: 'Croatia', value: 37.89166667},
    {name: 'Czech Republic', value: 47.725},
    {name: 'Dominican Republic', value: 2.45},
    {name: 'Ecuador', value: 44.06666667},
    {name: 'Egypt', value: 0.288888889},
    {name: 'El Salvador', value: 74.6375},
    {name: 'Estonia', value: 85.43333333},
    {name: 'Finland*', value: 119},
    {name: 'France*', value: 106.8166667},
    {name: 'Georgia', value: 5.4},
    {name: 'Germany*', value: 119.0916667},
    {name: 'Greece', value: 2.981818182},
    {name: 'Grenada', value: 133.43},
    {name: 'Guatemala', value: 4.145454546},
    {name: 'Guinea', value: 1.8},
    {name: 'Guyana', value: 21.94444444},
    {name: 'Honduras', value: 50.46666667},
    {name: 'Hong Kong Special Administrative Region of China', value: 61.57},
    {name: 'Hungary*', value: 55.69166667},
    {name: 'Iceland', value: 106.5428571},
    {name: 'India', value: 1.37},
    {name: 'Israel', value: 121.2571429},
    {name: 'Italy', value: 12.05},
    {name: 'Jamaica', value: 143.0555556},
    {name: 'Japan', value: 23.85833333},
    {name: 'Kazakhstan', value: 3.35},
    {name: 'Kenya', value: 12.37272727},
    {name: 'Kosovo under UNSCR 1244', value: 8.642857143},
    {name: 'Kyrgyzstan*', value: 1.05},
    {name: 'Latvia*', value: 69.33333333},
    {name: 'Liechtenstein', value: 155.175},
    {name: 'Lithuania', value: 48.21666667},
    {name: 'Luxembourg', value: 55.81428571},
    {name: 'Macao Special Administrative Region of China*', value: 17.71428571},
    {name: 'Maldives', value: 188.7571429},
    {name: 'Malta*', value: 35.475},
    {name: 'Mauritius', value: 83.4},
    {name: 'Mexico*', value: 6.025},
    {name: 'Mongolia', value: 17.8625},
    {name: 'Montenegro', value: 6.4},
    {name: 'Morocco', value: 12.73333333},
    {name: 'Myanmar', value: 0.86},
    {name: 'Netherlands', value: 33.09},
    {name: 'New Zealand', value: 147.8222222},
    {name: 'Nicaragua', value: 38.8},
    {name: 'Nigeria', value: 0.3},
    {name: 'Norway', value: 104.5833333},
    {name: 'Panama*', value: 11.3},
    {name: 'Paraguay', value: 72.25555556},
    {name: 'Peru', value: 35.95454545},
    {name: 'Philippines', value: 13.84},
    {name: 'Poland', value: 22.7125},
    {name: 'Portugal', value: 37.55},
    {name: 'Republic of Korea', value: 10.66666667},
    {name: 'Republic of Moldova', value: 18.56363636},
    {name: 'Romania*', value: 17.61428571},
    {name: 'Russian Federation', value: 33.24545455},
    {name: 'Rwanda', value: 33.86666667},
    {name: 'Sao Tome and Principe', value: 2.8},
    {name: 'Serbia', value: 11.96},
    {name: 'Sierra Leone', value: 23.95},
    {name: 'Singapore', value: 39.41111111},
    {name: 'Slovakia', value: 48.72222222},
    {name: 'Slovenia', value: 53.10833333},
    {name: 'Spain', value: 16.1375},
    {name: 'Sri Lanka', value: 23.26666667},
    {name: 'St. Kitts and Nevis', value: 216.8666667},
    {name: 'St. Vincent and the Grenadines', value: 158.9222222},
    {name: 'State of Palestine', value: 0.566666667},
    {name: 'Sweden*', value: 341.8},
    {name: 'Switzerland*', value: 90.18333333},
    {name: 'Syrian Arab Republic', value: 0.2},
    {name: 'Tajikistan', value: 0.08},
    {name: 'Thailand', value: 10.86},
    {name: 'The former Yugoslav Rep. of Macedonia', value: 13.35555556},
    {name: 'Trinidad and Tobago', value: 84.56363636},
    {name: 'Turkey', value: 20.05},
    {name: 'Uganda', value: 56.43},
    {name: 'Ukraine', value: 4.075},
    {name: 'United Arab Emirates', value: 6.9},
    {name: 'United Kingdom (England and Wales)', value: 160.0181818},
    {name: 'United Kingdom (Northern Ireland)', value: 239.4916667},
    {name: 'Uruguay', value: 133.9},
    {name: 'Yemen', value: 1.9}
]

var theft=[
    {name: 'Albania', value: 153.8863636},
    {name: 'Algeria*', value: 138.536},
    {name: 'Andorra', value: 1282.221111},
    {name: 'Argentina', value: 695.745},
    {name: 'Armenia', value: 122.3061538},
    {name: 'Australia*', value: 2366.454615},
    {name: 'Austria', value: 1938.301667},
    {name: 'Azerbaijan', value: 37.47416667},
    {name: 'Bahamas', value: 464.28},
    {name: 'Bahrain', value: 847.6075},
    {name: 'Bangladesh', value: 8.87},
    {name: 'Barbados', value: 660.4758333},
    {name: 'Belarus*', value: 806.8958333},
    {name: 'Belgium', value: 2039.015385},
    {name: 'Belize', value: 362.46625},
    {name: 'Bermuda', value: 1083.567778},
    {name: 'Bhutan', value: 66.155},
    {name: 'Bolivia (Plurinational State of)', value: 47.51625},
    {name: 'Bosnia and Herzegovina*', value: 230.8936364},
    {name: 'Botswana', value: 1265.145},
    {name: 'Brazil', value: 861.22125},
    {name: 'Brunei Darussalam', value: 298.3425},
    {name: 'Bulgaria', value: 585.63},
    {name: 'Burundi', value: 7.506666667},
    {name: 'Cabo Verde', value: 772.4683333},
    {name: 'Cameroon*', value: 76.98},
    {name: 'Canada', value: 1720.413077},
    {name: 'Chile', value: 1064.195455},
    {name: 'China, Hong Kong Special Administrative Region', value: 513.2227273},
    {name: 'China, Macao Special Administrative Region*', value: 528.145},
    {name: 'Colombia', value: 218.4891667},
    {name: 'Costa Rica', value: 333.1581818},
    {name: 'Croatia*', value: 463.3592308},
    {name: 'Cyprus', value: 126.7638462},
    {name: 'Czechia', value: 1322.251538},
    {name: 'Denmark', value: 3642.935385},
    {name: 'Dominican Republic', value: 167.11},
    {name: 'Ecuador*', value: 65.956},
    {name: 'Egypt', value: 64.21333333},
    {name: 'El Salvador*', value: 159.7645455},
    {name: 'Estonia', value: 1707.97},
    {name: 'Finland', value: 2129.674615},
    {name: 'France*', value: 1624.416154},
    {name: 'Georgia', value: 344.86},
    {name: 'Germany*', value: 2111.256154},
    {name: 'Greece', value: 826.1915385},
    {name: 'Grenada', value: 1487.114545},
    {name: 'Guatemala', value: 40.41555556},
    {name: 'Guinea', value: 13.28},
    {name: 'Guyana', value: 409.202},
    {name: 'Holy See', value: undefined},
    {name: 'Honduras', value: 61.325},
    {name: 'Hungary', value: 1237.473333},
    {name: 'Iceland', value: 1336.631538},
    {name: 'India', value: 25.901},
    {name: 'Indonesia', value: 10.22375},
    {name: 'Iran (Islamic Republic of)', value: 155.655},
    {name: 'Iraq (Central Iraq)', value: 32.59571429},
    {name: 'Ireland', value: 1435.781538},
    {name: 'Israel', value: 1476.16},
    {name: 'Italy*', value: 1878.321538},
    {name: 'Jamaica', value: 95.37},
    {name: 'Japan', value: 544.6763636},
    {name: 'Jordan', value: 174.985},
    {name: 'Kazakhstan', value: 683.6709091},
    {name: 'Kenya', value: 29.38083333},
    {name: 'Kosovo under UNSCR 1244', value: 852.0071429},
    {name: 'Kuwait', value: 362.2166667},
    {name: 'Kyrgyzstan*', value: 206.4876923},
    {name: 'Latvia*', value: 1097.403333},
    {name: 'Lebanon', value: 612.06375},
    {name: 'Lesotho', value: 240.3766667},
    {name: 'Liechtenstein', value: 525.2161538},
    {name: 'Lithuania', value: 805.4415385},
    {name: 'Luxembourg', value: 1560.804444},
    {name: 'Madagascar', value: 0.465},
    {name: 'Malaysia', value: 137.2},
    {name: 'Maldives', value: 1476.638333},
    {name: 'Malta', value: 2175.805385},
    {name: 'Mauritius*', value: 1049.243333},
    {name: 'Mexico*', value: 95.8875},
    {name: 'Monaco', value: 982.315},
    {name: 'Mongolia', value: 268.7338462},
    {name: 'Montenegro', value: 155.7846154},
    {name: 'Morocco', value: 251.8888889},
    {name: 'Mozambique', value: 23.955},
    {name: 'Myanmar', value: 4.38},
    {name: 'Nepal', value: 2.05},
    {name: 'Netherlands*', value: 4151.519231},
    {name: 'New Zealand', value: 2726.866667},
    {name: 'Nicaragua', value: 257.52},
    {name: 'Nigeria', value: 16.025},
    {name: 'Norway', value: 2711.96},
    {name: 'Oman', value: 220.165},
    {name: 'Panama*', value: 485.4941667},
    {name: 'Paraguay', value: 529.83},
    {name: 'Peru', value: 215.7092308},
    {name: 'Philippines*', value: 50.21333333},
    {name: 'Poland', value: 574.3061538},
    {name: 'Portugal', value: 910.1530769},
    {name: 'Puerto Rico', value: 786.92625},
    {name: 'Qatar', value: 106.4525},
    {name: 'Republic of Korea', value: 480.3875},
    {name: 'Republic of Moldova', value: 307.9933333},
    {name: 'Romania*', value: 304.7507692},
    {name: 'Russian Federation', value: 848.7108333},
    {name: 'Saint Kitts and Nevis', value: 1004.613333},
    {name: 'Saint Vincent and the Grenadines', value: 1754.068889},
    {name: 'Sao Tome and Principe', value: 6.27},
    {name: 'Senegal', value: 17.93},
    {name: 'Serbia*', value: 214.7427273},
    {name: 'Sierra Leone', value: 188.385},
    {name: 'Singapore', value: 356.7761538},
    {name: 'Slovakia', value: 483.3607692},
    {name: 'Slovenia', value: 1450.875385},
    {name: 'Solomon Islands', value: 183.78},
    {name: 'Spain*', value: 339.3833333},
    {name: 'Sri Lanka', value: 77.0475},
    {name: 'State of Palestine*', value: 83.87875},
    {name: 'Sudan', value: 220.6},
    {name: 'Suriname', value: 2888.25},
    {name: 'Swaziland', value: 1942},
    {name: 'Sweden', value: 4205.738462},
    {name: 'Switzerland*', value: 1984.12},
    {name: 'Syrian Arab Republic', value: 48.4},
    {name: 'Tajikistan', value: 48.2275},
    {name: 'Thailand', value: 76.53181818},
    {name: 'The former Yugoslav Republic of Macedonia', value: 256.0455556},
    {name: 'Trinidad and Tobago', value: 235.0716667},
    {name: 'Turkey', value: 196.402},
    {name: 'Turkmenistan', value: 32.405},
    {name: 'Uganda', value: 107.9108333},
    {name: 'Ukraine', value: 395.95625},
    {name: 'United Arab Emirates*', value: 151.5133333},
    {name: 'United Kingdom (England and Wales)', value: 2922.91},
    {name: 'United Kingdom (Northern Ireland)', value: 1429.15},
    {name: 'United Kingdom (Scotland)', value: 2245.041667},
    {name: 'United Republic of Tanzania', value: 1.3},
    {name: 'United States of America', value: 2085.994615},
    {name: 'Uruguay', value: 2975.380833},
    {name: 'Zimbabwe', value: 971.4983333}
]
 
var convertData = function (data) {
var res = [];
for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
        res.push({
          name:data[i].name,
          value:geoCoord.concat(data[i].value)
        });
    }
}
return res;
};

option= {
    backgroundColor:'#404a59',
    title: {
    text: '全球犯罪情况(Assault)(2003-2016平均值)',
    subtext: 'data from UNODC',
    sublink: 'https://data.unodc.org/',
    left: 'center',
    textStyle: {
        color: '#fff'
    }
    },
    tooltip: {
    trigger: 'item',
    formatter : function (params) {
                return params.name + ' : ' + params.value[2]}
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        data:['Average Rate per 100,000 Population'],
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
        roam:true,
        label: {
          normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
            emphasis: {
                show: true
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
        name: 'Average Rate per 100,000 Population',
        type: 'scatter',
        coordinateSystem: 'geo',
        legendHoverLink:true,
        roam:true,
        data: convertData(assault),
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
      },
        {
          name:'Top 10',
          type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(assault.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 11)),
                symbolSize: 12,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        show: false
                    }

                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
        }
    ]
};
var crime_assault=function(){
  option.title.text='全球犯罪情况(Assault)(2003-2016平均值)';
  option.visualMap.min=0;
  option.visualMap.max=1350;
  option.series[0].data=convertData(assault);
  option.series[1].data=convertData(assault.sort(function (a, b) {return b.value - a.value;}).slice(0, 11));
  myChart.setOption(option,true);
}
var crime_BurglaryBreakingAndEntering=function(){
  option.title.text='全球犯罪情况(BurglaryBreakingAndEntering)(2003-2016平均值)';
  option.visualMap.min=0;
  option.visualMap.max=1725;
  option.series[0].data=convertData(burglaryBreakingAndEntering);
  option.series[1].data=convertData(burglaryBreakingAndEntering.sort(function (a, b) {return b.value - a.value;}).slice(0, 11));
  myChart.setOption(option,true);
}
var crime_IntentionalHomicide=function(){
  option.title.text='全球犯罪情况(IntentionalHomicide)(2003-2016平均值)';
  option.visualMap.min=0;
  option.visualMap.max=75;
  option.series[0].data=convertData(intentionalHomicide);
  option.series[1].data=convertData(intentionalHomicide.sort(function (a, b) {return b.value - a.value;}).slice(0, 11));
  myChart.setOption(option,true);
}
var crime_kidnapping=function(){
  option.title.text='全球犯罪情况(Kidnapping)(2003-2016平均值)';
  option.visualMap.min=0;
  option.visualMap.max=18;
  option.series[0].data=convertData(kidnapping);
  option.series[1].data=convertData(kidnapping.sort(function (a, b) {return b.value - a.value;}).slice(0, 11));
  myChart.setOption(option,true);
}
var crime_MotorVehicleTheft=function(){
  option.title.text='全球犯罪情况(MotorVehicleTheft)(2003-2016平均值)';
  option.visualMap.min=0;
  option.visualMap.max=1230;
  option.series[0].data=convertData(motorVehicleTheft);
  option.series[1].data=convertData(motorVehicleTheft.sort(function (a, b) {return b.value - a.value;}).slice(0, 11));
  myChart.setOption(option,true);
}
var crime_rape=function(){
  option.title.text='全球犯罪情况(Rape)(2003-2016平均值)';
  option.visualMap.min=0;
  option.visualMap.max=105;
  option.series[0].data=convertData(rape);
  option.series[1].data=convertData(rape.sort(function (a, b) {return b.value - a.value;}).slice(0, 11));
  myChart.setOption(option,true);
}
var crime_robbery=function(){
  option.title.text='全球犯罪情况(Robbery)(2003-2016平均值)';
  option.visualMap.min=0;
  option.visualMap.max=1116;
  option.series[0].data=convertData(robbery);
  option.series[1].data=convertData(robbery.sort(function (a, b) {return b.value - a.value;}).slice(0, 11));
  myChart.setOption(option,true);
}
var crime_SexualOffencesagainstChildren=function(){
  option.title.text='全球犯罪情况(SexualOffencesagainstChildren)(2003-2016平均值)';
  option.visualMap.min=0;
  option.visualMap.max=345;
  option.series[0].data=convertData(sexualOffencesagainstChildren);
  option.series[1].data=convertData(sexualOffencesagainstChildren.sort(function (a, b) {return b.value - a.value;}).slice(0, 11));
  myChart.setOption(option,true);
}
var crime_theft=function(){
  option.title.text='全球犯罪情况(Theft)(2003-2016平均值)';
  option.visualMap.min=0;
  option.visualMap.max=4212;
  option.series[0].data=convertData(theft);
  option.series[1].data=convertData(theft.sort(function (a, b) {return b.value - a.value;}).slice(0, 11));
  myChart.setOption(option,true);
}
myChart.setOption(option);