$(function () {
    echart_1();
    echart_2();

    echart_3();
    echart_4();

    echart_map();
    echart_5();
    echart_6();

    //echart_1疫情确诊最高十个省
    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}人"
            },
            legend: {
                x: 'center',
                y: '15%',
                data: ['浙江', '福建', '河南', '陕西', '广东', '上海', '台湾', '吉林', '湖北', '香港'],
                icon: 'circle',
                textStyle: {
                    color: '#fff',
                }
            },
            calculable: true,
            series: [{
                name: '',
                type: 'pie',
                //起始角度，支持范围[0, 360]
                startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [50, 100],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '40%'],
                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        formatter: '{c}人'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length2: 1,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{
                    value: 298237,
                    name: '香港',
                    itemStyle: {
                        normal: {
                            color: '#f845f1'
                        }
                    }
                },
                    {
                        value: 68391,
                        name: '湖北',
                        itemStyle: {
                            normal: {
                                color: '#ad46f3'
                            }
                        }
                    },
                    {
                        value: 32156,
                        name: '吉林',
                        itemStyle: {
                            normal: {
                                color: '#5045f6'
                            }
                        }
                    },
                    {
                        value: 23629,
                        name: '台湾',
                        itemStyle: {
                            normal: {
                                color: '#4777f5'
                            }
                        }
                    },
                    {
                        value: 6714,
                        name: '上海',
                        itemStyle: {
                            normal: {
                                color: '#44aff0'
                            }
                        }
                    },
                    {
                        value: 6596,
                        name: '广东',
                        itemStyle: {
                            normal: {
                                color: '#45dbf7'
                            }
                        }
                    },
                    {
                        value: 3221,
                        name: '陕西',
                        itemStyle: {
                            normal: {
                                color: '#f6d54a'
                            }
                        }
                    },
                    {
                        value: 2833,
                        name: '河南',
                        itemStyle: {
                            normal: {
                                color: '#f69846'
                            }
                        }
                    },
                    {
                        value: 2798,
                        name: '福建',
                        itemStyle: {
                            normal: {
                                color: '#ff4343'
                            }
                        }
                    },
                    {
                        value: 2712,
                        name: '浙江',
                        itemStyle: {
                            normal: {
                                color: '#ff444343'
                            }
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //echart_2江苏省疫情累计确诊地图显示
    function echart_2() {
        echarts.registerMap('jiangsu', jiangsuJson);

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_2'));

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption({
            // backgroundColor: '#ffffff',
            visualMap: {
                show: false,
                min: 0,
                max: 100,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color: ['yellow', 'lightskyblue', 'orangered']
                }
            },
            series: [{
                type: 'map',
                map: 'jiangsu',
                name: "累计确诊人数",
                roam: true,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#389BB7',
                        areaColor: '#fff',
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                },
                animation: false,
                "data": [
                    {
                        "name": "徐州市",
                        "value": "94"
                    },
                    {
                        "name": "扬州市",
                        "value": "593"
                    },
                    {
                        "name": "宿迁市",
                        "value": "19"
                    },
                    {
                        "name": "镇江市",
                        "value": "17"
                    },
                    {
                        "name": "连云港市",
                        "value": "193"
                    },
                    {
                        "name": "无锡市",
                        "value": "62"
                    },
                    {
                        "name": "泰州市",
                        "value": "46"
                    },
                    {
                        "name": "盐城市",
                        "value": "40"
                    },
                    {
                        "name": "淮安市",
                        "value": "79"
                    },
                    {
                        "name": "南通市",
                        "value": "41"
                    },
                    {
                        "name": "南京市",
                        "value": "336"
                    },
                    {
                        "name": "常州市",
                        "value": "84"
                    },
                    {
                        "name": "苏州市",
                        "value": "208"
                    },
                    {
                        "name": "境外输入市",
                        "value": "220"
                    },
                    {
                        "name": "待确认市"
                    },
                    {
                        "name": "徐州",
                        "value": "94"
                    },
                    {
                        "name": "扬州",
                        "value": "593"
                    },
                    {
                        "name": "宿迁",
                        "value": "19"
                    },
                    {
                        "name": "镇江",
                        "value": "17"
                    },
                    {
                        "name": "连云港",
                        "value": "193"
                    },
                    {
                        "name": "无锡",
                        "value": "62"
                    },
                    {
                        "name": "泰州",
                        "value": "46"
                    },
                    {
                        "name": "盐城",
                        "value": "40"
                    },
                    {
                        "name": "淮安",
                        "value": "79"
                    },
                    {
                        "name": "南通",
                        "value": "41"
                    },
                    {
                        "name": "南京",
                        "value": "336"
                    },
                    {
                        "name": "常州",
                        "value": "84"
                    },
                    {
                        "name": "苏州",
                        "value": "208"
                    },
                    {
                        "name": "境外输入",
                        "value": "220"
                    },
                    {
                        "name": "待确认"
                    }
                ],
            }],
            tooltip: {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            },
        });
    }

    // echart_map中国地图
    function echart_map() {
        // 基于准备好的dom，初始化echarts实例
        var chart_map = echarts.init(
            document.getElementById('chart_map'), 'white', {renderer: 'canvas'});
        var option_chart_map = {
            "animation": true,
            "animationThreshold": 2000,
            "animationDuration": 1000,
            "animationEasing": "cubicOut",
            "animationDelay": 0,
            "animationDurationUpdate": 300,
            "animationEasingUpdate": "cubicOut",
            "animationDelayUpdate": 0,
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ],
            "series": [
                {
                    "type": "map",
                    "name": "累计确诊人数",
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "mapType": "china",
                    "data": [
                        {
                            "name": "西藏",
                            "value": "1"
                        },
                        {
                            "name": "澳门",
                            "value": "82"
                        },
                        {
                            "name": "青海",
                            "value": "34"
                        },
                        {
                            "name": "台湾",
                            "value": "23629"
                        },
                        {
                            "name": "香港",
                            "value": "298237"
                        },
                        {
                            "name": "贵州",
                            "value": "174"
                        },
                        {
                            "name": "吉林",
                            "value": "32156"
                        },
                        {
                            "name": "新疆",
                            "value": "997"
                        },
                        {
                            "name": "宁夏",
                            "value": "122"
                        },
                        {
                            "name": "内蒙古",
                            "value": "1683"
                        },
                        {
                            "name": "甘肃",
                            "value": "681"
                        },
                        {
                            "name": "天津",
                            "value": "1788"
                        },
                        {
                            "name": "山西",
                            "value": "310"
                        },
                        {
                            "name": "辽宁",
                            "value": "1587"
                        },
                        {
                            "name": "黑龙江",
                            "value": "2443"
                        },
                        {
                            "name": "海南",
                            "value": "206"
                        },
                        {
                            "name": "河北",
                            "value": "1956"
                        },
                        {
                            "name": "陕西",
                            "value": "3221"
                        },
                        {
                            "name": "云南",
                            "value": "2069"
                        },
                        {
                            "name": "广西",
                            "value": "1483"
                        },
                        {
                            "name": "福建",
                            "value": "2798"
                        },
                        {
                            "name": "上海",
                            "value": "6714"
                        },
                        {
                            "name": "北京",
                            "value": "1777"
                        },
                        {
                            "name": "江苏",
                            "value": "2032"
                        },
                        {
                            "name": "四川",
                            "value": "1776"
                        },
                        {
                            "name": "山东",
                            "value": "2590"
                        },
                        {
                            "name": "江西",
                            "value": "1040"
                        },
                        {
                            "name": "重庆",
                            "value": "691"
                        },
                        {
                            "name": "安徽",
                            "value": "1040"
                        },
                        {
                            "name": "湖南",
                            "value": "1330"
                        },
                        {
                            "name": "河南",
                            "value": "2833"
                        },
                        {
                            "name": "广东",
                            "value": "6596"
                        },
                        {
                            "name": "浙江",
                            "value": "2712"
                        },
                        {
                            "name": "湖北",
                            "value": "68391"
                        }
                    ],
                    "roam": true,
                    "aspectScale": 0.75,
                    "nameProperty": "name",
                    "selectedMode": false,
                    "zoom": 1,
                    "mapValueCalculation": "sum",
                    "showLegendSymbol": false,
                    "emphasis": {}
                }
            ],
            "legend": [
                {
                    "data": [
                        "累计确诊人数"
                    ],
                    "selected": {
                        "累计确诊人数": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            },
            "title": [
                {
                    "text": "",
                    "subtext": "截止2022.04.02 14:13 累计确诊分布情况",
                    "left": "center",
                    "top": "10px",
                    "padding": 5,
                    "itemGap": 10
                }
            ],
            "visualMap": {
                "show": true,
                "type": "piecewise",
                "min": 0,
                "max": 100000,
                "inRange": {
                    "color": [
                        "#50a3ba",
                        "#eac763",
                        "#d94e5d"
                    ]
                },
                "textStyle": {
                    "color": "white"
                },
                "calculable": true,
                "inverse": false,
                "splitNumber": 5,
                "orient": "vertical",
                "showLabel": true,
                "itemWidth": 20,
                "itemHeight": 14,
                "borderWidth": 0,
                "pieces": [
                    {
                        "max": 999999,
                        "min": 1001,
                        "label": ">10000",
                        "color": "#8A0808"
                    },
                    {
                        "max": 9999,
                        "min": 1000,
                        "label": "1000-9999",
                        "color": "#B40404"
                    },
                    {
                        "max": 999,
                        "min": 100,
                        "label": "100-999",
                        "color": "#DF0101"
                    },
                    {
                        "max": 99,
                        "min": 10,
                        "label": "10-99",
                        "color": "#F78181"
                    },
                    {
                        "max": 9,
                        "min": 1,
                        "label": "1-9",
                        "color": "#F5A9A9"
                    },
                    {
                        "max": 0,
                        "min": 0,
                        "label": "0",
                        "type": "line",
                        "color": "#FFFFFF"
                    }
                ]
            }
        };
        chart_map.setOption(option_chart_map);

    }

    //echart_3全国疫情情况折线图
    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));
        myChart.clear();
        var time = [];
        var confirmed = [];
        var death = [];
        var cure = [];
        var confirmedIncrement = [];

        $.ajax({
            url: "/trend/time",
            dataType: "json",
            type: "post",
            async: false,       //同步
            data: {},
            //回调函数
            success: function (result) {
                if (result != null && result.length > 0) {
                    for (let i = 0;i < result.length;i++) {
                        time.push(result[i].time);
                        confirmed.push(result[i].confirmed);
                        death.push(result[i].death);
                        cure.push(result[i].cure);
                        confirmedIncrement.push(result[i].confirmedIncrement);
                    }
                    myChart.hideLoading();
                    option = {
                        title: {
                            text: ''
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data: ['累计确诊', '死亡', '治愈', '累计确诊增量'],
                            textStyle: {
                                color: '#fff'
                            },
                            top: '8%'
                        },
                        grid: {
                            top: '40%',
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        color: ['#FF4949', '#FFA74D', '#FFEA51', '#4BF0FF', '#44AFF0', '#4E82FF', '#584BFF', '#BE4DFF', '#F845F1'],
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data:time,
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        yAxis: {
                            name: '人',
                            type: 'value',
                            splitLine: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        series: [
                            {
                                name: '累计确诊',
                                type: 'line',
                                data: confirmed
                            },
                            {
                                name: '死亡',
                                type: 'line',
                                data: death
                            },
                            {
                                name: '治愈',
                                type: 'line',
                                data: cure
                            },
                            {
                                name: '累计确诊增量',
                                type: 'line',
                                data: confirmedIncrement
                            }
                        ]
                    };
                }
            }
        })
        myChart.setOption(option);
    }

    //echart_4()上海市疫情累计确诊地图显示
    function echart_4() {
        var chart_4 = echarts.init(
            document.getElementById('chart_4'), 'white', {renderer: 'canvas'});
        var option_chart_4 = {
            "animation": true,
            "animationThreshold": 2000,
            "animationDuration": 1000,
            "animationEasing": "cubicOut",
            "animationDelay": 0,
            "animationDurationUpdate": 300,
            "animationEasingUpdate": "cubicOut",
            "animationDelayUpdate": 0,
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ],
            "series": [
                {
                    "type": "map",
                    "name": "累计确诊人数",
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "mapType": "上海",
                    "data": [
                        {
                            "name": "嘉定区市",
                            "value": "88"
                        },
                        {
                            "name": "外地来沪人员市",
                            "value": "113"
                        },
                        {
                            "name": "松江区市",
                            "value": "74"
                        },
                        {
                            "name": "黄浦区市",
                            "value": "78"
                        },
                        {
                            "name": "长宁区市",
                            "value": "78"
                        },
                        {
                            "name": "青浦区市",
                            "value": "17"
                        },
                        {
                            "name": "闵行区市",
                            "value": "281"
                        },
                        {
                            "name": "静安区市",
                            "value": "91"
                        },
                        {
                            "name": "虹口区市",
                            "value": "37"
                        },
                        {
                            "name": "宝山区市",
                            "value": "100"
                        },
                        {
                            "name": "浦东新区市",
                            "value": "898"
                        },
                        {
                            "name": "杨浦区市",
                            "value": "35"
                        },
                        {
                            "name": "徐汇区市",
                            "value": "184"
                        },
                        {
                            "name": "奉贤区市",
                            "value": "30"
                        },
                        {
                            "name": "金山区市",
                            "value": "18"
                        },
                        {
                            "name": "普陀区市",
                            "value": "64"
                        },
                        {
                            "name": "崇明区市",
                            "value": "10"
                        },
                        {
                            "name": "境外输入市",
                            "value": "4517"
                        },
                        {
                            "name": "境外来沪人员市",
                            "value": "1"
                        },
                        {
                            "name": "嘉定区",
                            "value": "88"
                        },
                        {
                            "name": "外地来沪人员",
                            "value": "113"
                        },
                        {
                            "name": "松江区",
                            "value": "74"
                        },
                        {
                            "name": "黄浦区",
                            "value": "78"
                        },
                        {
                            "name": "长宁区",
                            "value": "78"
                        },
                        {
                            "name": "青浦区",
                            "value": "17"
                        },
                        {
                            "name": "闵行区",
                            "value": "281"
                        },
                        {
                            "name": "静安区",
                            "value": "91"
                        },
                        {
                            "name": "虹口区",
                            "value": "37"
                        },
                        {
                            "name": "宝山区",
                            "value": "100"
                        },
                        {
                            "name": "浦东新区",
                            "value": "898"
                        },
                        {
                            "name": "杨浦区",
                            "value": "35"
                        },
                        {
                            "name": "徐汇区",
                            "value": "184"
                        },
                        {
                            "name": "奉贤区",
                            "value": "30"
                        },
                        {
                            "name": "金山区",
                            "value": "18"
                        },
                        {
                            "name": "普陀区",
                            "value": "64"
                        },
                        {
                            "name": "崇明区",
                            "value": "10"
                        },
                        {
                            "name": "境外输入",
                            "value": "4517"
                        },
                        {
                            "name": "境外来沪人员",
                            "value": "1"
                        }
                    ],
                    "roam": true,
                    "aspectScale": 0.75,
                    "nameProperty": "name",
                    "selectedMode": false,
                    "zoom": 1,
                    "mapValueCalculation": "sum",
                    "showLegendSymbol": false,
                    "emphasis": {}
                }
            ],
            "legend": [
                {
                    "data": [
                        "累计确诊人数"
                    ],
                    "selected": {
                        "累计确诊人数": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            },
            "title": [
                {
                    "text": "",
                    "subtext": "",
                    "left": "center",
                    "top": "10px",
                    "padding": 5,
                    "itemGap": 10
                }
            ],
            "visualMap": {
                "show": false,
                "type": "piecewise",
                "min": 0,
                "max": 130,
                "inRange": {
                    "color": [
                        "#50a3ba",
                        "#f47920",
                        "#1d953f"
                    ]
                },
                "calculable": true,
                "inverse": false,
                "splitNumber": 5,
                "orient": "vertical",
                "showLabel": false,
                "itemWidth": 20,
                "itemHeight": 14,
                "borderWidth": 0,
            }
        };
        chart_4.setOption(option_chart_4);
    }

    //echart_5()北京市疫情确诊分布图
    function echart_5() {
        var chart_5 = echarts.init(
            document.getElementById('chart_5'), 'white', {renderer: 'canvas'});
        var option_chart_5 = {
            "animation": true,
            "animationThreshold": 2000,
            "animationDuration": 1000,
            "animationEasing": "cubicOut",
            "animationDelay": 0,
            "animationDurationUpdate": 300,
            "animationEasingUpdate": "cubicOut",
            "animationDelayUpdate": 0,
            "color": [
                "#c23531",
                "#2f4554",
                "#61a0a8",
                "#d48265",
                "#749f83",
                "#ca8622",
                "#bda29a",
                "#6e7074",
                "#546570",
                "#c4ccd3",
                "#f05b72",
                "#ef5b9c",
                "#f47920",
                "#905a3d",
                "#fab27b",
                "#2a5caa",
                "#444693",
                "#726930",
                "#b2d235",
                "#6d8346",
                "#ac6767",
                "#1d953f",
                "#6950a1",
                "#918597"
            ],
            "series": [
                {
                    "type": "map",
                    "name": "累计确诊人数",
                    "label": {
                        "show": true,
                        "position": "top",
                        "color": "white",
                        "margin": 8
                    },
                    "mapType": "北京",
                    "data": [
                        {
                            "name": "东城区市",
                            "value": "42"
                        },
                        {
                            "name": "海淀区市",
                            "value": "108"
                        },
                        {
                            "name": "大兴区市",
                            "value": "145"
                        },
                        {
                            "name": "朝阳区市",
                            "value": "133"
                        },
                        {
                            "name": "丰台区市",
                            "value": "350"
                        },
                        {
                            "name": "门头沟区市",
                            "value": "6"
                        },
                        {
                            "name": "通州区市",
                            "value": "27"
                        },
                        {
                            "name": "顺义区市",
                            "value": "48"
                        },
                        {
                            "name": "石景山区市",
                            "value": "15"
                        },
                        {
                            "name": "西城区市",
                            "value": "69"
                        },
                        {
                            "name": "怀柔区市",
                            "value": "8"
                        },
                        {
                            "name": "昌平区市",
                            "value": "70"
                        },
                        {
                            "name": "外地来京人员市",
                            "value": "25"
                        },
                        {
                            "name": "房山区市",
                            "value": "31"
                        },
                        {
                            "name": "延庆区市",
                            "value": "1"
                        },
                        {
                            "name": "密云区市",
                            "value": "7"
                        },
                        {
                            "name": "平谷区市",
                            "value": "0"
                        },
                        {
                            "name": "待确认市",
                            "value": "2"
                        },
                        {
                            "name": "境外输入市",
                            "value": "683"
                        },
                        {
                            "name": "涉冬（残）奥闭环人员市",
                            "value": "4"
                        },
                        {
                            "name": "经济开发区市",
                            "value": "3"
                        },
                        {
                            "name": "东城区",
                            "value": "42"
                        },
                        {
                            "name": "海淀区",
                            "value": "108"
                        },
                        {
                            "name": "大兴区",
                            "value": "145"
                        },
                        {
                            "name": "朝阳区",
                            "value": "133"
                        },
                        {
                            "name": "丰台区",
                            "value": "350"
                        },
                        {
                            "name": "门头沟区",
                            "value": "6"
                        },
                        {
                            "name": "通州区",
                            "value": "27"
                        },
                        {
                            "name": "顺义区",
                            "value": "48"
                        },
                        {
                            "name": "石景山区",
                            "value": "15"
                        },
                        {
                            "name": "西城区",
                            "value": "69"
                        },
                        {
                            "name": "怀柔区",
                            "value": "8"
                        },
                        {
                            "name": "昌平区",
                            "value": "70"
                        },
                        {
                            "name": "外地来京人员",
                            "value": "25"
                        },
                        {
                            "name": "房山区",
                            "value": "31"
                        },
                        {
                            "name": "延庆区",
                            "value": "1"
                        },
                        {
                            "name": "密云区",
                            "value": "7"
                        },
                        {
                            "name": "平谷区",
                            "value": "0"
                        },
                        {
                            "name": "待确认",
                            "value": "2"
                        },
                        {
                            "name": "境外输入",
                            "value": "683"
                        },
                        {
                            "name": "涉冬（残）奥闭环人员",
                            "value": "4"
                        },
                        {
                            "name": "经济开发区",
                            "value": "3"
                        }
                    ],
                    "roam": true,
                    "aspectScale": 0.75,
                    "nameProperty": "name",
                    "selectedMode": false,
                    "zoom": 1,
                    "mapValueCalculation": "sum",
                    "showLegendSymbol": false,
                    "emphasis": {}
                }
            ],
            "legend": [
                {
                    "data": [
                        "累计确诊人数"
                    ],
                    "selected": {
                        "累计确诊人数": true
                    },
                    "show": false,
                    "padding": 5,
                    "itemGap": 10,
                    "itemWidth": 25,
                    "itemHeight": 14
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            },
            "title": [
                {
                    "text": "",
                    "subtext": "",
                    "left": "center",
                    "top": "10px",
                    "padding": 5,
                    "itemGap": 10
                }
            ],
            "visualMap": {
                "show": false,
                "type": "piecewise",
                "min": 0,
                "max": 350,
                "inRange": {
                    "color": [
                        "#50a3ba",
                        "#eac763",
                        "#d94e5d"
                    ]
                },
                "calculable": true,
                "inverse": false,
                "splitNumber": 5,
                "orient": "vertical",
                "showLabel": true,
                "itemWidth": 20,
                "itemHeight": 14,
                "borderWidth": 0,
            }
        };
        chart_5.setOption(option_chart_5);
    }

    //echart_6()广东省疫情确诊分布图
    function echart_6() {
        echarts.registerMap('guangdong', guangdongJson);

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_6'));

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption({
            // backgroundColor: '#ffffff',
            visualMap: {
                show: false,
                min: 0,
                max: 100,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color: ['yellow', 'lightskyblue', 'orangered']
                }
            },
            series: [{
                type: 'map',
                map: 'guangdong',
                name: "累计确诊人数",
                roam: true,
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#389BB7',
                        areaColor: '#fff',
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                },
                animation: false,
                "data": [
                    {
                        "name": "肇庆市",
                        "value": "25"
                    },
                    {
                        "name": "珠海市",
                        "value": "145"
                    },
                    {
                        "name": "河源市",
                        "value": "7"
                    },
                    {
                        "name": "佛山市",
                        "value": "101"
                    },
                    {
                        "name": "清远市",
                        "value": "12"
                    },
                    {
                        "name": "汕尾市",
                        "value": "8"
                    },
                    {
                        "name": "茂名市",
                        "value": "17"
                    },
                    {
                        "name": "阳江市",
                        "value": "15"
                    },
                    {
                        "name": "湛江市",
                        "value": "23"
                    },
                    {
                        "name": "中山市",
                        "value": "81"
                    },
                    {
                        "name": "惠州市",
                        "value": "70"
                    },
                    {
                        "name": "揭阳市",
                        "value": "10"
                    },
                    {
                        "name": "梅州市",
                        "value": "18"
                    },
                    {
                        "name": "深圳市",
                        "value": "1361"
                    },
                    {
                        "name": "汕头市",
                        "value": "25"
                    },
                    {
                        "name": "江门市",
                        "value": "23"
                    },
                    {
                        "name": "韶关市",
                        "value": "11"
                    },
                    {
                        "name": "东莞市",
                        "value": "348"
                    },
                    {
                        "name": "广州市",
                        "value": "541"
                    },
                    {
                        "name": "潮州市",
                        "value": "5"
                    },
                    {
                        "name": "境外输入市",
                        "value": "3743"
                    },
                    {
                        "name": "待确认市"
                    },
                    {
                        "name": "云浮市",
                        "value": "7"
                    },
                    {
                        "name": "肇庆",
                        "value": "25"
                    },
                    {
                        "name": "珠海",
                        "value": "145"
                    },
                    {
                        "name": "河源",
                        "value": "7"
                    },
                    {
                        "name": "佛山",
                        "value": "101"
                    },
                    {
                        "name": "清远",
                        "value": "12"
                    },
                    {
                        "name": "汕尾",
                        "value": "8"
                    },
                    {
                        "name": "茂名",
                        "value": "17"
                    },
                    {
                        "name": "阳江",
                        "value": "15"
                    },
                    {
                        "name": "湛江",
                        "value": "23"
                    },
                    {
                        "name": "中山",
                        "value": "81"
                    },
                    {
                        "name": "惠州",
                        "value": "70"
                    },
                    {
                        "name": "揭阳",
                        "value": "10"
                    },
                    {
                        "name": "梅州",
                        "value": "18"
                    },
                    {
                        "name": "深圳",
                        "value": "1361"
                    },
                    {
                        "name": "汕头",
                        "value": "25"
                    },
                    {
                        "name": "江门",
                        "value": "23"
                    },
                    {
                        "name": "韶关",
                        "value": "11"
                    },
                    {
                        "name": "东莞",
                        "value": "348"
                    },
                    {
                        "name": "广州",
                        "value": "541"
                    },
                    {
                        "name": "潮州",
                        "value": "5"
                    },
                    {
                        "name": "境外输入",
                        "value": "3743"
                    },
                    {
                        "name": "待确认"
                    },
                    {
                        "name": "云浮",
                        "value": "7"
                    }
                ],
            }],
            tooltip: {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "showContent": true,
                "alwaysShowContent": false,
                "showDelay": 0,
                "hideDelay": 100,
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0,
                "padding": 5
            },
        });
    }

    //点击跳转
    //点击首页地图跳转
    $('#chart_map').click(function () {
        window.location.href = '../../view/index.jsp'
    });

    $('.t_btn2').click(function () {
        window.location.href = "../../view/index.jsp";
    });
    $('.t_btn3').click(function () {
        window.location.href = "../../view/index.jsp";
    });
    $('.t_btn4').click(function () {
        window.location.href = "../../view/index.jsp";
    });
    $('.t_btn5').click(function () {
        window.location.href = "../../view/index.jsp";
    });
    $('.t_btn6').click(function () {
        window.location.href = "../../view/index.jsp";
    });
    $('.t_btn7').click(function () {
        window.location.href = "../../view/index.jsp";
    });
    $('.t_btn8').click(function () {
        window.location.href = "../../view/index.jsp";
    });
    $('.t_btn9').click(function () {
        window.location.href = "../../view/index.jsp";
    });
});
