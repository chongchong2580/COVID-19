$(function () {
    echart_map();

    //echart_0北京市
    function echart_0() {
        var chart_0 = echarts.init(
            document.getElementById('chart_0'), 'white', {renderer: 'canvas'});
        var option_chart_0 = {
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
        chart_0.setOption(option_chart_0);
    }

    //北京市渐变堆叠面积图
    function echart_1(){
        var myChart = echarts.init(
            document.getElementById('cloud_1'), 'white', {renderer: 'canvas'});
        myChart.clear();
        var city = [];
        var confirmed = [];
        var death = [];
        var cure = [];
        $.ajax({
            url: "/beijing/findAllBeijing",
            dataType:"json",
            type: "post",
            async: false,   //同步
            data: {},
            //回调函数
            success: function (result) {
                if (result != null && result.length > 0) {
                    for (let i = 0;i < result.length;i++) {
                        city.push(result[i].city)
                        confirmed.push(result[i].confirmed)
                        death.push(result[i].death)
                        cure.push(result[i].cure)
                    }
                    // 隐藏加载动画
                    myChart.hideLoading();
                    option = {
                        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
                        title: {
                            text: ''
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                label: {
                                    backgroundColor: '#6a7985'
                                }
                            }
                        },
                        legend: {
                            left: '0%',
                            textStyle: {
                                color: "white"
                            },
                            data: ['确诊', '死亡', '治愈']
                        },
                        toolbox: {
                            feature: {
                                saveAsImage: {}
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                data: city,
                                axisLabel: {
                                    show: true,
                                    //  去掉背景的网格线
                                    textStyle: {
                                        color: 'white'   //这里用参数代替了
                                    }
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                axisLabel: {
                                    show: true,
                                    //  去掉背景的网格线
                                    textStyle: {
                                        color: 'white'   //这里用参数代替了
                                    }
                                }
                            }
                        ],
                        series: [
                            {
                                name: '确诊',
                                type: 'line',
                                stack: 'Total',
                                //是否是曲线或直线
                                smooth: true,
                                lineStyle: {
                                    width: 0
                                },
                                //是否显示数据点
                                // showSymbol: false,
                                areaStyle: {
                                    opacity: 0.8,
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(128, 255, 165)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(1, 191, 236)'
                                        }
                                    ])
                                },
                                emphasis: {
                                    focus: 'series'
                                },
                                data: confirmed
                            },
                            {
                                name: '死亡',
                                type: 'line',
                                stack: 'Total',
                                smooth: true,
                                lineStyle: {
                                    width: 0
                                },
                                // showSymbol: false,
                                areaStyle: {
                                    opacity: 0.8,
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(0, 221, 255)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(77, 119, 255)'
                                        }
                                    ])
                                },
                                emphasis: {
                                    focus: 'series'
                                },
                                data: death
                            },
                            {
                                name: '治愈',
                                type: 'line',
                                stack: 'Total',
                                smooth: true,
                                lineStyle: {
                                    width: 0
                                },
                                // showSymbol: false,
                                areaStyle: {
                                    opacity: 0.8,
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(55, 162, 255)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(116, 21, 219)'
                                        }
                                    ])
                                },
                                emphasis: {
                                    focus: 'series'
                                },
                                data: cure
                            }
                        ]
                    };
                }
            }
        })

        myChart.setOption(option);
    }

    //echart_2广东省渐变堆叠面积图
    function echart_2() {
        var myChart = echarts.init(
            document.getElementById('cloud'), 'white', {renderer: 'canvas'});
        myChart.clear();

        var city = [];
        var confirmed = [];
        var death = [];
        var cure = [];
        $.ajax({
            url: "/guangdong/findAllGuangdong",
            dataType:"json",
            type: "post",
            async: false,   //同步
            data: {},
            //回调函数
            success: function (result) {
                if (result != null && result.length > 0) {
                    for (let i = 0;i < result.length;i++) {
                        city.push(result[i].city)
                        confirmed.push(result[i].confirmed)
                        death.push(result[i].death)
                        cure.push(result[i].cure)
                    }
                    // 隐藏加载动画
                    myChart.hideLoading();
                    option = {
                        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
                        title: {
                            text: ''
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                label: {
                                    backgroundColor: '#6a7985'
                                }
                            }
                        },
                        legend: {
                            left: '0%',
                            textStyle: {
                                color: "white"
                            },
                            data: ['确诊', '死亡', '治愈']
                        },
                        toolbox: {
                            feature: {
                                saveAsImage: {}
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                data: city,
                                axisLabel: {
                                    show: true,
                                    //  去掉背景的网格线
                                    textStyle: {
                                        color: 'white'   //这里用参数代替了
                                    }
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                axisLabel: {
                                    show: true,
                                    //  去掉背景的网格线
                                    textStyle: {
                                        color: 'white'   //这里用参数代替了
                                    }
                                }
                            }
                        ],
                        series: [
                            {
                                name: '确诊',
                                type: 'line',
                                stack: 'Total',
                                //是否是曲线或直线
                                smooth: true,
                                lineStyle: {
                                    width: 0
                                },
                                //是否显示数据点
                                // showSymbol: false,
                                areaStyle: {
                                    opacity: 0.8,
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(128, 255, 165)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(1, 191, 236)'
                                        }
                                    ])
                                },
                                emphasis: {
                                    focus: 'series'
                                },
                                data: confirmed
                            },
                            {
                                name: '死亡',
                                type: 'line',
                                stack: 'Total',
                                smooth: true,
                                lineStyle: {
                                    width: 0
                                },
                                // showSymbol: false,
                                areaStyle: {
                                    opacity: 0.8,
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(0, 221, 255)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(77, 119, 255)'
                                        }
                                    ])
                                },
                                emphasis: {
                                    focus: 'series'
                                },
                                data: death
                            },
                            {
                                name: '治愈',
                                type: 'line',
                                stack: 'Total',
                                smooth: true,
                                lineStyle: {
                                    width: 0
                                },
                                // showSymbol: false,
                                areaStyle: {
                                    opacity: 0.8,
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(55, 162, 255)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(116, 21, 219)'
                                        }
                                    ])
                                },
                                emphasis: {
                                    focus: 'series'
                                },
                                data: cure
                            }
                        ]
                    };
                }
            }
        })

        myChart.setOption(option);
    }

    // echart_map中国地图
    function echart_map() {
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

    //echart_3广东省
    function echart_3() {
        echarts.registerMap('guangdong', guangdongJson);

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));

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

    //中国铁路
    function echart_4() {
     // 基于准备好的dom，初始化echarts图表
     var myChart = echarts2.init(document.getElementById('chart_4'));
     var effect = {
         show: true,
         scaleSize: 1,
         period: 30, // 运动周期，无单位，值越大越慢
         color: '#fff',
         shadowColor: 'rgba(220,220,220,0.4)',
         shadowBlur: 5
     };

     function itemStyle(idx) {
         return {
             normal: {
                 color: '#fff',
                 borderWidth: 1,
                 borderColor: ['rgba(30,144,255,1)', 'lime'][idx],
                 lineStyle: {
                     //shadowColor : ['rgba(30,144,255,1)','lime'][idx], //默认透明
                     //shadowBlur: 10,
                     //shadowOffsetX: 0,
                     //shadowOffsetY: 0,
                     type: 'solid'
                 }
             }
         }
     };
     option = {
         color: ['rgba(30,144,255,1)', 'lime'],
         title: {
             text: '',
             subtext: '',
             sublink: '',
             x: 'center',
             textStyle: {
                 color: '#fff'
             }
         },
         tooltip: {
             trigger: 'item',
             formatter: '{b}'
         },
         legend: {
             orient: 'vertical',
             x: '2%',
             y: '3%',
             selectedMode: 'single',
             data: ['八纵通道', '八横通道'],
             textStyle: {
                 color: '#fff'
             }
         },
         toolbox: {
             show: true,
             orient: 'vertical',
             x: 'right',
             y: 'center',
             padding: [0 ,30, 0 ,0],
             feature: {
                 mark: {
                     show: true
                 },
                 dataView: {
                     show: true,
                     readOnly: false
                 },
                 restore: {
                     show: true
                 },
                 saveAsImage: {
                     show: true
                 }
             }
         },
         series: [{
                 name: '八纵通道',
                 type: 'map',
                 roam: true,
                 hoverable: false,
                 mapType: 'china',
                 itemStyle: {
                     normal: {
                         borderColor: 'rgba(100,149,237,1)',
                         borderWidth: 0.5,
                         areaStyle: {
                             color: '#1b1b1b'
                         }
                     }
                 },
                 data: [],
                 markLine: {
                     symbol: ['circle', 'circle'],
                     symbolSize: 1,
                     effect: effect,
                     itemStyle: itemStyle(0),
                     smooth: true,
                     data: [
                         [{
                             name: '北京'
                         }, {
                             name: '哈尔滨'
                         }],
                         [{
                             name: '哈尔滨'
                         }, {
                             name: '满洲里'
                         }],

                         [{
                             name: '沈阳'
                         }, {
                             name: '大连'
                         }],
                         [{
                             name: '大连'
                         }, {
                             name: '烟台'
                         }],
                         [{
                             name: '烟台'
                         }, {
                             name: '青岛'
                         }],
                         [{
                             name: '青岛'
                         }, {
                             name: '淮安'
                         }],
                         [{
                             name: '淮安'
                         }, {
                             name: '上海'
                         }],
                         [{
                             name: '上海'
                         }, {
                             name: '杭州'
                         }],
                         [{
                             name: '杭州'
                         }, {
                             name: '宁波'
                         }],
                         [{
                             name: '宁波'
                         }, {
                             name: '温州'
                         }],
                         [{
                             name: '温州'
                         }, {
                             name: '福州'
                         }],
                         [{
                             name: '福州'
                         }, {
                             name: '厦门'
                         }],
                         [{
                             name: '厦门'
                         }, {
                             name: '广州'
                         }],
                         [{
                             name: '广州'
                         }, {
                             name: '湛江'
                         }],

                         [{
                             name: '北京'
                         }, {
                             name: '天津'
                         }],
                         [{
                             name: '天津'
                         }, {
                             name: '济南'
                         }],
                         [{
                             name: '济南'
                         }, {
                             name: '南京'
                         }],
                         [{
                             name: '南京'
                         }, {
                             name: '上海'
                         }],

                         [{
                             name: '北京'
                         }, {
                             name: '南昌'
                         }],
                         [{
                             name: '南昌'
                         }, {
                             name: '深圳'
                         }],
                         [{
                             name: '深圳'
                         }, {
                             name: '九龙红磡'
                         }],

                         [{
                             name: '北京'
                         }, {
                             name: '郑州'
                         }],
                         [{
                             name: '郑州'
                         }, {
                             name: '武汉'
                         }],
                         [{
                             name: '武汉'
                         }, {
                             name: '广州'
                         }],

                         [{
                             name: '大同'
                         }, {
                             name: '太原'
                         }],
                         [{
                             name: '太原'
                         }, {
                             name: '焦作'
                         }],
                         [{
                             name: '焦作'
                         }, {
                             name: '洛阳'
                         }],
                         [{
                             name: '洛阳'
                         }, {
                             name: '柳州'
                         }],
                         [{
                             name: '柳州'
                         }, {
                             name: '湛江'
                         }],

                         [{
                             name: '包头'
                         }, {
                             name: '西安'
                         }],
                         [{
                             name: '西安'
                         }, {
                             name: '重庆'
                         }],
                         [{
                             name: '重庆'
                         }, {
                             name: '贵阳'
                         }],
                         [{
                             name: '贵阳'
                         }, {
                             name: '柳州'
                         }],
                         [{
                             name: '柳州'
                         }, {
                             name: '南宁'
                         }],

                         [{
                             name: '兰州'
                         }, {
                             name: '成都'
                         }],
                         [{
                             name: '成都'
                         }, {
                             name: '昆明'
                         }]
                     ]
                 }
             },
             {
                 name: '八横通道',
                 type: 'map',
                 mapType: 'china',
                 itedmStyle: {
                     normal: {
                         borderColor: 'rgba(100,149,237,1)',
                         borderWidth: 0.5,
                         areaStyle: {
                             color: '#1b1b1b'
                         }
                     }
                 },
                 data: [],
                 markLine: {
                     symbol: ['circle', 'circle'],
                     symbolSize: 1,
                     effect: effect,
                     itemStyle: itemStyle(1),
                     smooth: true,
                     data: [
                         [{
                             name: '北京'
                         }, {
                             name: '兰州'
                         }],
                         [{
                             name: '兰州'
                         }, {
                             name: '拉萨'
                         }],

                         [{
                             name: '大同'
                         }, {
                             name: '秦皇岛'
                         }],

                         [{
                             name: '神木'
                         }, {
                             name: '黄骅'
                         }],

                         [{
                             name: '太原'
                         }, {
                             name: '德州'
                         }],
                         [{
                             name: '德州'
                         }, {
                             name: '龙口'
                         }],
                         [{
                             name: '龙口'
                         }, {
                             name: '烟台'
                         }],

                         [{
                             name: '太原'
                         }, {
                             name: '德州'
                         }],
                         [{
                             name: '德州'
                         }, {
                             name: '济南'
                         }],
                         [{
                             name: '济南'
                         }, {
                             name: '青岛'
                         }],

                         [{
                             name: '长治'
                         }, {
                             name: '邯郸'
                         }],
                         [{
                             name: '邯郸'
                         }, {
                             name: '济南'
                         }],
                         [{
                             name: '济南'
                         }, {
                             name: '青岛'
                         }],

                         [{
                             name: '瓦塘'
                         }, {
                             name: '临汾'
                         }],
                         [{
                             name: '临汾'
                         }, {
                             name: '长治'
                         }],
                         [{
                             name: '长治'
                         }, {
                             name: '汤阴'
                         }],
                         [{
                             name: '汤阴'
                         }, {
                             name: '台前'
                         }],
                         [{
                             name: '台前'
                         }, {
                             name: '兖州'
                         }],
                         [{
                             name: '兖州'
                         }, {
                             name: '日照'
                         }],

                         [{
                             name: '侯马'
                         }, {
                             name: '月山'
                         }],
                         [{
                             name: '月山'
                         }, {
                             name: '新乡'
                         }],
                         [{
                             name: '新乡'
                         }, {
                             name: '兖州'
                         }],
                         [{
                             name: '兖州'
                         }, {
                             name: '日照'
                         }],

                         [{
                             name: '连云港'
                         }, {
                             name: '郑州'
                         }],
                         [{
                             name: '郑州'
                         }, {
                             name: '兰州'
                         }],
                         [{
                             name: '兰州'
                         }, {
                             name: '乌鲁木齐'
                         }],
                         [{
                             name: '乌鲁木齐'
                         }, {
                             name: '阿拉山口'
                         }],

                         [{
                             name: '西安'
                         }, {
                             name: '南阳'
                         }],
                         [{
                             name: '南阳'
                         }, {
                             name: '信阳'
                         }],
                         [{
                             name: '信阳'
                         }, {
                             name: '合肥'
                         }],
                         [{
                             name: '合肥'
                         }, {
                             name: '南京'
                         }],
                         [{
                             name: '南京'
                         }, {
                             name: '启东'
                         }],

                         [{
                             name: '重庆'
                         }, {
                             name: '武汉'
                         }],
                         [{
                             name: '武汉'
                         }, {
                             name: '九江'
                         }],
                         [{
                             name: '九江'
                         }, {
                             name: '铜陵'
                         }],
                         [{
                             name: '铜陵'
                         }, {
                             name: '南京'
                         }],
                         [{
                             name: '南京'
                         }, {
                             name: '上海'
                         }],

                         [{
                             name: '上海'
                         }, {
                             name: '怀化'
                         }],
                         [{
                             name: '怀化'
                         }, {
                             name: '重庆'
                         }],
                         [{
                             name: '重庆'
                         }, {
                             name: '成都'
                         }],
                         [{
                             name: '成都'
                         }, {
                             name: '贵阳'
                         }],
                         [{
                             name: '贵阳'
                         }, {
                             name: '昆明'
                         }],

                         [{
                             name: '昆明'
                         }, {
                             name: '南宁'
                         }],
                         [{
                             name: '南宁'
                         }, {
                             name: '黎塘'
                         }],
                         [{
                             name: '黎塘'
                         }, {
                             name: '湛江'
                         }]
                     ]
                 },
                 geoCoord: {
                     '阿拉山口': [82.5757, 45.1706],
                     '包头': [109.8403, 40.6574],
                     '北京': [116.4075, 39.9040],
                     '成都': [104.0665, 30.5723],
                     '大连': [121.6147, 38.9140],
                     '大同': [113.3001, 40.0768],
                     '德州': [116.3575, 37.4341],
                     '福州': [119.2965, 26.0745],
                     '广州': [113.2644, 23.1292],
                     '贵阳': [106.6302, 26.6477],
                     '哈尔滨': [126.5363, 45.8023],
                     '邯郸': [114.5391, 36.6256],
                     '杭州': [120.1551, 30.2741],
                     '合肥': [117.2272, 31.8206],
                     '侯马': [111.3720, 35.6191],
                     '怀化': [109.9985, 27.5550],
                     '淮安': [119.0153, 33.6104],
                     '黄骅': [117.3300, 38.3714],
                     '济南': [117.1205, 36.6510],
                     '焦作': [113.2418, 35.2159],
                     '九江': [116.0019, 29.7051],
                     '九龙红磡': [114.1870, 22.3076],
                     '昆明': [102.8329, 24.8801],
                     '拉萨': [91.1409, 29.6456],
                     '兰州': [103.8343, 36.0611],
                     '黎塘': [109.1363, 23.2066],
                     '连云港': [119.2216, 34.5967],
                     '临汾': [111.5190, 36.0880],
                     '柳州': [109.4160, 24.3255],
                     '龙口': [120.4778, 37.6461],
                     '洛阳': [112.4540, 34.6197],
                     '满洲里': [117.3787, 49.5978],
                     '南昌': [115.8581, 28.6832],
                     '南京': [118.7969, 32.0603],
                     '南宁': [108.3661, 22.8172],
                     '南阳': [112.5283, 32.9908],
                     '宁波': [121.5440, 29.8683],
                     '启东': [121.6574, 31.8082],
                     '秦皇岛': [119.6005, 39.9354],
                     '青岛': [120.3826, 36.0671],
                     '日照': [119.5269, 35.4164],
                     '厦门': [118.0894, 24.4798],
                     '上海': [121.4737, 31.2304],
                     '深圳': [114.0579, 22.5431],
                     '神木': [110.4871, 38.8610],
                     '沈阳': [123.4315, 41.8057],
                     '台前': [115.8717, 35.9701],
                     '太原': [112.5489, 37.8706],
                     '汤阴': [114.3572, 35.9218],
                     '天津': [117.2010, 39.0842],
                     '铜陵': [117.8121, 30.9454],
                     '瓦塘': [109.7600, 23.3161],
                     '温州': [120.6994, 27.9943],
                     '乌鲁木齐': [87.6168, 43.8256],
                     '武汉': [114.3054, 30.5931],
                     '西安': [108.9402, 34.3416],
                     '新乡': [113.9268, 35.3030],
                     '信阳': [114.0913, 32.1470],
                     '烟台': [121.4479, 37.4638],
                     '兖州': [116.7838, 35.5531],
                     '月山': [113.0550, 35.2104],
                     '湛江': [110.3594, 21.2707],
                     '长治': [113.1163, 36.1954],
                     '郑州': [113.6254, 34.7466],
                     '重庆': [106.5516, 29.5630]
                 }
             }
         ]
     };

     // 为echarts对象加载数据 
     myChart.setOption(option);
    }

    //上海市地图
    function echart_6() {
        var chart_6 = echarts.init(
            document.getElementById('chart_6'), 'white', {renderer: 'canvas'});
        var option_chart_6 = {
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
        chart_6.setOption(option_chart_6);
    }

    //累计确诊前十省份漏斗图
    function echart_7() {
        var myChart = echarts.init(document.getElementById('chart_7'));
        myChart.clear();
        option = {
            title: {
                text: "",
                subtext: "",
                x: "center"
            },
            tooltip: {
                trigger: "item"
            },
            legend: {
                orient: "vertical",
                x: "left",
                y: "center",
                textStyle: {
                  color: "white"
                },
                data: ["香港", "吉林", "上海", "台湾", "四川", "黑龙江", "浙江", "福建", "江苏", "山东"]
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: true
                    },
                    //数据视图
                    // dataView: {
                    //     show: true,
                    //     readOnly: true
                    // },
                    //图像复原
                    // restore: {
                    //     show: true
                    // },
                    //保存图片
                    // saveAsImage: {
                    //     show: true
                    // }
                }
            },
            calculable: true,
            series: [
                {
                    name: "累计确诊增量",
                    type: "funnel",
                    x: "15%",
                    x2: "15%",
                    y2: "10%",
                    max: 1860,
                    itemStyle: {
                        normal: {
                            labelLine: {
                                show: false
                            }
                        },
                        emphasis: {
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    data: [
                        {
                            value: 11924,
                            name: "香港"
                        },
                        {
                            value: 1730,
                            name: "吉林"
                        },
                        {
                            value: 262,
                            name: "上海"
                        },
                        {
                            value: 235,
                            name: "台湾"
                        },
                        {
                            value: 24,
                            name: "四川"
                        },
                        {
                            value: 21,
                            name: "黑龙江"
                        },
                        {
                            value: 15,
                            name: "浙江"
                        },
                        {
                            value: 14,
                            name: "福建"
                        },
                        {
                            value: 12,
                            name: "江苏"
                        },
                        {
                            value: 10,
                            name: "山东"
                        }
                    ]
                }
            ]
        };
        myChart.setOption(option);
    }

    //累计确诊前十柱状图
    function echart_8() {
        var myChart = echarts.init(document.getElementById('chart_8'));
        myChart.clear();

        var province = [];
        var incrmend = [];
        var death = [];
        var cure = [];
        var existing = [];

        $.ajax({
            url: "/increment/top",
            dataType: "json",
            type: "post",
            async: false,   //同步
            data:{},
            //回调函数
            success: function (result) {
                if (result != null && result.length > 0) {
                    for (let i = 0;i < result.length;i++) {
                        province.push(result[i].province);
                        incrmend.push(result[i].confirmedIncrement);
                        death.push(result[i].deathIncrement);
                        cure.push(result[i].cureIncrement);
                        existing.push(result[i].existingConfirmedIncrement);
                    }
                    myChart.hideLoading();
                    option = {
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                crossStyle: {
                                    color: '#999'
                                }
                            }
                        },
                        toolbox: {
                            feature: {
                                dataView: { show: true, readOnly: false },
                                magicType: { show: true, type: ['line', 'bar'] },
                                restore: { show: true },
                                saveAsImage: { show: true }
                            }
                        },
                        legend: {
                            left: '0%',
                            textStyle: {
                                color: "white"
                            },
                            data: ['累计确诊增量', '死亡增量', '治愈增量','现有确诊增量']
                        },
                        xAxis: [
                            {
                                type: 'category',
                                data: province,
                                axisPointer: {
                                    type: 'shadow'
                                },
                                axisLabel: {
                                    show: true,
                                    //  去掉背景的网格线
                                    textStyle: {
                                        color: 'white'   //这里用参数代替了
                                    }
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                min: -1000,
                                max: 2000,
                                interval: 500,
                                axisLabel: {
                                    show: true,
                                    //  去掉背景的网格线
                                    textStyle: {
                                        color: 'white'   //这里用参数代替了
                                    }
                                }
                            }
                        ],
                        series: [
                            {
                                name: '累计确诊增量',
                                type: 'bar',
                                data: incrmend
                            },
                            {
                                name: '死亡增量',
                                type: 'bar',
                                data:death
                            },
                            {
                                name: '治愈增量',
                                type: 'bar',
                                data: cure
                            },
                            {
                                name: '现有确诊增量',
                                type: 'bar',
                                data: existing
                            },
                            {
                                name: '累计确诊增量',
                                type: 'line',
                                data: incrmend
                            },
                            {
                                name: '死亡增量',
                                type: 'line',
                                data:death
                            },
                            {
                                name: '治愈增量',
                                type: 'line',
                                data: cure
                            },
                            {
                                name: '现有确诊增量',
                                type: 'line',
                                data: existing
                            }
                        ]
                    };
                }
            }
        })
        myChart.setOption(option);
    }

    //累计确诊前十省正负条状图
    function echart_9() {
        var myChart = echarts.init(document.getElementById('chart_9'));
        myChart.clear();
        //未前后端交互前图表数据
        // option = {
        //     tooltip: {
        //         trigger: 'axis',
        //         axisPointer: {
        //             type: 'shadow'
        //         }
        //     },
        //     legend: {
        //         left: '0%',
        //         textStyle: {
        //           color: "white"
        //         },
        //         data: ['累计确诊增量', '死亡增量', '治愈增量',"现有确诊增量"]
        //     },
        //     grid: {
        //         left: '3%',
        //         right: '4%',
        //         bottom: '3%',
        //         containLabel: true
        //     },
        //     xAxis: [
        //         {
        //             type: 'value',
        //             axisLabel: {
        //                 show: true,
        //                 //  去掉背景的网格线
        //                 textStyle: {
        //                     color: 'white'   //这里用参数代替了
        //                 }
        //             }
        //         }
        //     ],
        //     yAxis: [
        //         {
        //             type: 'category',
        //             axisTick: {
        //                 show: false
        //             },
        //             axisLabel: {
        //                 show: true,
        //                 //  去掉背景的网格线
        //                 textStyle: {
        //                     color: 'white'   //这里用参数代替了
        //                 }
        //             },
        //             data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        //         }
        //     ],
        //     series: [
        //         {
        //             name: '累计确诊增量',
        //             type: 'bar',
        //             label: {
        //                 show: true,
        //                 position: 'inside'
        //             },
        //             emphasis: {
        //                 focus: 'series'
        //             },
        //             data: [200, 170, 240, 244, 200, 220, 210]
        //         },
        //         {
        //             name: '治愈增量',
        //             type: 'bar',
        //             stack: 'Total',
        //             label: {
        //                 show: true
        //             },
        //             emphasis: {
        //                 focus: 'series'
        //             },
        //             data: [320, 302, 341, 374, 390, 450, 420]
        //         },
        //         {
        //             name: '死亡增量',
        //             type: 'bar',
        //             stack: 'Total',
        //             label: {
        //                 show: true,
        //                 position: 'left'
        //             },
        //             emphasis: {
        //                 focus: 'series'
        //             },
        //             data: [-120, -132, -101, -134, -190, -230, -210]
        //         },
        //         {
        //             name: '现有确诊增量',
        //             type: 'bar',
        //             stack: 'Total',
        //             label: {
        //                 show: true,
        //                 position: 'left'
        //             },
        //             emphasis: {
        //                 focus: 'series'
        //             },
        //             data: [-10, -5, -5, -3, -100, -230, 0]
        //         }
        //     ]
        // };

        // 在数据为动态加载之前建筑loading动画
        myChart.showLoading();
        // 对数据进行重写,变成动态数据
        var shengfeng=[];

        var quezheng=[];

        var siwang=[];
        var zhiyu=[];
        var xiangyou=[];
        $.ajax({
            url: "/increment/top",
            dataType: "json",
            type: "post",
            async: false,   //同步
            data:{},
            //回调函数
            success: function (result) {
                if (result != null && result.length > 0) {
                    for (let i = 0; i < result.length; i++) {
                        shengfeng.push(result[i].province);
                        quezheng.push(result[i].confirmedIncrement);
                        siwang.push(result[i].deathIncrement);
                        zhiyu.push(result[i].cureIncrement);
                        xiangyou.push(result[i].existingConfirmedIncrement);
                    }
                    console.log("省份："+ shengfeng)
                    console.log("累计确诊增量："+ quezheng)
                    console.log("死亡增量："+ siwang)
                    console.log("治愈增量："+ zhiyu)
                    console.log("现有确诊增量："+ xiangyou)
                    // 隐藏加载动画
                    myChart.hideLoading();
                    option = {
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        legend: {
                            left: '0%',
                            textStyle: {
                                color: "white"
                            },
                            data: ['累计确诊增量', '死亡增量', '治愈增量', "现有确诊增量"]
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: 'value',
                                axisLabel: {
                                    show: true,
                                    //  去掉背景的网格线
                                    textStyle: {
                                        color: 'white'   //这里用参数代替了
                                    }
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'category',
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    show: true,
                                    //  去掉背景的网格线
                                    textStyle: {
                                        color: 'white'   //这里用参数代替了
                                    }
                                },
                                data: shengfeng
                            }
                        ],
                        series: [
                            {
                                name: '累计确诊增量',
                                type: 'bar',
                                label: {
                                    show: true,
                                    position: 'inside'
                                },
                                emphasis: {
                                    focus: 'series'
                                },
                                data: quezheng
                            },
                            {
                                name: '治愈增量',
                                type: 'bar',
                                stack: 'Total',
                                label: {
                                    show: true
                                },
                                emphasis: {
                                    focus: 'series'
                                },
                                data: zhiyu
                            },
                            {
                                name: '死亡增量',
                                type: 'bar',
                                stack: 'Total',
                                label: {
                                    show: true,
                                    position: 'left'
                                },
                                emphasis: {
                                    focus: 'series'
                                },
                                data: siwang
                            },
                            {
                                name: '现有确诊增量',
                                type: 'bar',
                                stack: 'Total',
                                label: {
                                    show: true,
                                    position: 'left'
                                },
                                emphasis: {
                                    focus: 'series'
                                },
                                data: xiangyou
                            }
                        ]
                    };

                }
            }
        })
        myChart.setOption(option);
    }

    // 江苏渐变堆叠面积图
    function echart_10(){
        var myChart = echarts.init(document.getElementById('chart_10'));
        myChart.clear();

        var city = [];
        var confirmed = [];
        var death = [];
        var cure = [];
        $.ajax({
            url: "/jiangsu/findAll",
            dataType:"json",
            type: "post",
            async: false,   //同步
            data: {},
            //回调函数
            success: function (result) {
                if (result != null && result.length > 0) {
                    for (let i = 0;i < result.length;i++) {
                        city.push(result[i].city)
                        confirmed.push(result[i].confirmed)
                        death.push(result[i].death)
                        cure.push(result[i].cure)
                    }
                    // 隐藏加载动画
                    myChart.hideLoading();
                    option = {
                        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
                        title: {
                            text: ''
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                label: {
                                    backgroundColor: '#6a7985'
                                }
                            }
                        },
                        legend: {
                            left: '0%',
                            textStyle: {
                                color: "white"
                            },
                            data: ['确诊', '死亡', '治愈']
                        },
                        toolbox: {
                            feature: {
                                saveAsImage: {}
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                data: city,
                                axisLabel: {
                                    show: true,
                                    //  去掉背景的网格线
                                    textStyle: {
                                        color: 'white'   //这里用参数代替了
                                    }
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                axisLabel: {
                                    show: true,
                                    //  去掉背景的网格线
                                    textStyle: {
                                        color: 'white'   //这里用参数代替了
                                    }
                                }
                            }
                        ],
                        series: [
                            {
                                name: '确诊',
                                type: 'line',
                                stack: 'Total',
                                //是否是曲线或直线
                                smooth: true,
                                lineStyle: {
                                    width: 0
                                },
                                //是否显示数据点
                                // showSymbol: false,
                                areaStyle: {
                                    opacity: 0.8,
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(128, 255, 165)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(1, 191, 236)'
                                        }
                                    ])
                                },
                                emphasis: {
                                    focus: 'series'
                                },
                                data: confirmed
                            },
                            {
                                name: '死亡',
                                type: 'line',
                                stack: 'Total',
                                smooth: true,
                                lineStyle: {
                                    width: 0
                                },
                                // showSymbol: false,
                                areaStyle: {
                                    opacity: 0.8,
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(0, 221, 255)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(77, 119, 255)'
                                        }
                                    ])
                                },
                                emphasis: {
                                    focus: 'series'
                                },
                                data: death
                            },
                            {
                                name: '治愈',
                                type: 'line',
                                stack: 'Total',
                                smooth: true,
                                lineStyle: {
                                    width: 0
                                },
                                // showSymbol: false,
                                areaStyle: {
                                    opacity: 0.8,
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(55, 162, 255)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(116, 21, 219)'
                                        }
                                    ])
                                },
                                emphasis: {
                                    focus: 'series'
                                },
                                data: cure
                            }
                        ]
                    };
                }
            }
        })

        myChart.setOption(option);
    }

    //上海渐变堆叠面积图
    function echart_11(){
        var myChart = echarts.init(document.getElementById('chart_11'));
        myChart.clear();

        var city = [];
        var confirmed = [];
        var death = [];
        var cure = [];
        $.ajax({
            url: "/shanghai/findAllShanghai",
            dataType:"json",
            type: "post",
            async: false,   //同步
            data: {},
            //回调函数
            success: function (result) {
                if (result != null && result.length > 0) {
                    for (let i = 0; i < result.length; i++) {
                        city.push(result[i].city)
                        confirmed.push(result[i].confirmed)
                        death.push(result[i].death)
                        cure.push(result[i].cure)
                    }
                    // 隐藏加载动画
                    myChart.hideLoading();
                    option = {
                        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
                        title: {
                            text: ''
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                label: {
                                    backgroundColor: '#6a7985'
                                }
                            }
                        },
                        legend: {
                            left: '0%',
                            textStyle: {
                                color: "white"
                            },
                            data: ['确诊', '死亡', '治愈']
                        },
                        toolbox: {
                            feature: {
                                saveAsImage: {}
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                data: city,
                                axisLabel: {
                                    show: true,
                                    //  去掉背景的网格线
                                    textStyle: {
                                        color: 'white'   //这里用参数代替了
                                    }
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                axisLabel: {
                                    show: true,
                                    //  去掉背景的网格线
                                    textStyle: {
                                        color: 'white'   //这里用参数代替了
                                    }
                                }
                            }
                        ],
                        series: [
                            {
                                name: '确诊',
                                type: 'line',
                                stack: 'Total',
                                //是否是曲线或直线
                                smooth: true,
                                lineStyle: {
                                    width: 0
                                },
                                //是否显示数据点
                                showSymbol: false,
                                areaStyle: {
                                    opacity: 0.8,
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(128, 255, 165)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(1, 191, 236)'
                                        }
                                    ])
                                },
                                emphasis: {
                                    focus: 'series'
                                },
                                data: confirmed
                            },
                            {
                                name: '死亡',
                                type: 'line',
                                stack: 'Total',
                                smooth: true,
                                lineStyle: {
                                    width: 0
                                },
                                showSymbol: false,
                                areaStyle: {
                                    opacity: 0.8,
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(0, 221, 255)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(77, 119, 255)'
                                        }
                                    ])
                                },
                                emphasis: {
                                    focus: 'series'
                                },
                                data: death
                            },
                            {
                                name: '治愈',
                                type: 'line',
                                stack: 'Total',
                                smooth: true,
                                lineStyle: {
                                    width: 0
                                },
                                showSymbol: false,
                                areaStyle: {
                                    opacity: 0.8,
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: 'rgb(55, 162, 255)'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgb(116, 21, 219)'
                                        }
                                    ])
                                },
                                emphasis: {
                                    focus: 'series'
                                },
                                data: cure
                            }
                        ]
                    };
                }
            }
        })
        myChart.setOption(option);
    }

    //疫情预测分析
    // function echart_12() {
    //     var myChart = echarts.init(document.getElementById('chart_12'));
    //     myChart.clear();
    //     var city = [];
    //     var confirmed = [];
    //     var death = [];
    //     var cure = [];
    //     $.ajax({
    //         url: "/shanghai/findAllShanghai",
    //         dataType:"json",
    //         type: "post",
    //         async: false,   //同步
    //         data: {},
    //         //回调函数
    //         success: function (result) {
    //             if (result != null && result.length > 0) {
    //                 for (let i = 0; i < result.length; i++) {
    //                     city.push(result[i].city)
    //                     confirmed.push(result[i].confirmed)
    //                     death.push(result[i].death)
    //                     cure.push(result[i].cure)
    //                 }
    //                 // 隐藏加载动画
    //                 myChart.hideLoading();
    //                 option = {
    //                     color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    //                     title: {
    //                         text: ''
    //                     },
    //                     tooltip: {
    //                         trigger: 'axis',
    //                         axisPointer: {
    //                             type: 'cross',
    //                             label: {
    //                                 backgroundColor: '#6a7985'
    //                             }
    //                         }
    //                     },
    //                     legend: {
    //                         left: '0%',
    //                         textStyle: {
    //                             color: "white"
    //                         },
    //                         data: ['确诊', '死亡', '治愈']
    //                     },
    //                     toolbox: {
    //                         feature: {
    //                             saveAsImage: {}
    //                         }
    //                     },
    //                     grid: {
    //                         left: '3%',
    //                         right: '4%',
    //                         bottom: '3%',
    //                         containLabel: true
    //                     },
    //                     xAxis: [
    //                         {
    //                             type: 'category',
    //                             boundaryGap: false,
    //                             data: city,
    //                             axisLabel: {
    //                                 show: true,
    //                                 //  去掉背景的网格线
    //                                 textStyle: {
    //                                     color: 'white'   //这里用参数代替了
    //                                 }
    //                             }
    //                         }
    //                     ],
    //                     yAxis: [
    //                         {
    //                             type: 'value',
    //                             axisLabel: {
    //                                 show: true,
    //                                 //  去掉背景的网格线
    //                                 textStyle: {
    //                                     color: 'white'   //这里用参数代替了
    //                                 }
    //                             }
    //                         }
    //                     ],
    //                     series: [
    //                         {
    //                             name: '确诊',
    //                             type: 'line',
    //                             stack: 'Total',
    //                             //是否是曲线或直线
    //                             smooth: true,
    //                             lineStyle: {
    //                                 width: 0
    //                             },
    //                             //是否显示数据点
    //                             showSymbol: false,
    //                             areaStyle: {
    //                                 opacity: 0.8,
    //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //                                     {
    //                                         offset: 0,
    //                                         color: 'rgb(128, 255, 165)'
    //                                     },
    //                                     {
    //                                         offset: 1,
    //                                         color: 'rgb(1, 191, 236)'
    //                                     }
    //                                 ])
    //                             },
    //                             emphasis: {
    //                                 focus: 'series'
    //                             },
    //                             data: confirmed
    //                         },
    //                         {
    //                             name: '死亡',
    //                             type: 'line',
    //                             stack: 'Total',
    //                             smooth: true,
    //                             lineStyle: {
    //                                 width: 0
    //                             },
    //                             showSymbol: false,
    //                             areaStyle: {
    //                                 opacity: 0.8,
    //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //                                     {
    //                                         offset: 0,
    //                                         color: 'rgb(0, 221, 255)'
    //                                     },
    //                                     {
    //                                         offset: 1,
    //                                         color: 'rgb(77, 119, 255)'
    //                                     }
    //                                 ])
    //                             },
    //                             emphasis: {
    //                                 focus: 'series'
    //                             },
    //                             data: death
    //                         },
    //                         {
    //                             name: '治愈',
    //                             type: 'line',
    //                             stack: 'Total',
    //                             smooth: true,
    //                             lineStyle: {
    //                                 width: 0
    //                             },
    //                             showSymbol: false,
    //                             areaStyle: {
    //                                 opacity: 0.8,
    //                                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    //                                     {
    //                                         offset: 0,
    //                                         color: 'rgb(55, 162, 255)'
    //                                     },
    //                                     {
    //                                         offset: 1,
    //                                         color: 'rgb(116, 21, 219)'
    //                                     }
    //                                 ])
    //                             },
    //                             emphasis: {
    //                                 focus: 'series'
    //                             },
    //                             data: cure
    //                         }
    //                     ]
    //                 };
    //             }
    //         }
    //     })
    //     myChart.setOption(option);
    // }

    //江苏省地图
    function echart_13(){
        echarts.registerMap('jiangsu', jiangsuJson);

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_13'));

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

    //我国累计确诊、死亡、治愈、现有确诊堆积面积图
    function echart_14(){
        var myChart = echarts.init(document.getElementById('chart_14'));
        myChart.clear();

        var province = [];
        var confirmed = [];
        var death = [];
        var cure = [];
        var exist = [];
        $.ajax({
            url: "/confirmed/listAll",
            dataType: "json",
            type: "post",
            async: false,   //同步
            data: {},
            //回调函数
            success: function (result) {
                if (result != null && result.length > 0) {
                    for (let i = 0;i < result.length;i++) {
                        province.push(result[i].province);
                        confirmed.push(result[i].confirmed)
                        death.push(result[i].death)
                        cure.push(result[i].cure)
                        exist.push(result[i].existingConfirmed)
                    }
                    // 隐藏加载动画
                    myChart.hideLoading();
                    option = {
                        title: {
                            text: ''
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',
                                label: {
                                    backgroundColor: '#6a7985'
                                }
                            }
                        },
                        legend: {
                            left: '0%',
                            textStyle:{
                              color: "white"
                            },
                            data: ['累计确诊', '死亡', '治愈', '现有确诊']
                        },
                        toolbox: {
                            feature: {
                                saveAsImage: {}
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis: [
                            {
                                type: 'category',
                                boundaryGap: false,
                                data: province,
                                axisLine: {
                                    lineStyle: {
                                        color: '#fff'
                                    }
                                }
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                axisLine: {
                                    lineStyle: {
                                        color: '#fff'
                                    }
                                }
                            }
                        ],
                        series: [
                            {
                                name: '累计确诊',
                                type: 'line',
                                stack: 'Total',
                                areaStyle: {},
                                emphasis: {
                                    focus: 'series'
                                },
                                data: confirmed
                            },
                            {
                                name: '死亡',
                                type: 'line',
                                stack: 'Total',
                                areaStyle: {},
                                emphasis: {
                                    focus: 'series'
                                },
                                data: death
                            },
                            {
                                name: '治愈',
                                type: 'line',
                                stack: 'Total',
                                areaStyle: {},
                                emphasis: {
                                    focus: 'series'
                                },
                                data: cure
                            },
                            {
                                name: '现有确诊',
                                type: 'line',
                                stack: 'Total',
                                areaStyle: {},
                                emphasis: {
                                    focus: 'series'
                                },
                                data: exist
                            }
                        ]
                    };
                }
            }
        })
        myChart.setOption(option);
    }


    //操作按钮
    $('.t_btn0').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos0').css('display', 'block');
        echart_map();
    });

    $('.t_btn1').click(function () {
        $('.center_text').css('display', 'none');
        $('.t_cos1').css('display', 'block');
        echart_2();
    });

    $('.t_btn2').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos2').css('display', 'block');
        echart_0();
    });
    $('.t_btn3').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos3').css('display', 'block');
        echart_4();
    });
    $('.t_btn4').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos6').css('display', 'block');
        echart_6();
    });
    $('.t_btn5').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos4').css('display', 'block');
        echart_1();
    });
    $('.t_btn6').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos5').css('display', 'block');
        echart_3();
    });
    $('.t_btn7').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos7').css('display', 'block');
        echart_7();
    });
    $('.t_btn8').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos8').css('display', 'block');
        echart_8();
    });
    $('.t_btn9').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos9').css('display', 'block');
        echart_9();
    });
    $('.t_btn10').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos10').css('display', 'block');
        echart_10();
    });
    $('.t_btn11').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos11').css('display', 'block');
        echart_11();
    });
    $('.t_btn12').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos12').css('display', 'block');
        echart_12();
    });
    $('.t_btn13').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos13').css('display', 'block');
        echart_13();
    });
    $('.t_btn14').click(function(){
        $('.center_text').css('display', 'none');
        $('.t_cos14').css('display', 'block');
        echart_14();
    });
    //获取地址栏参数
    $(function(){
        function getUrlParms(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
                if(r!=null)
                return unescape(r[2]);
                return null;
            }
            var id = getUrlParms("id");
            if(id == 2){
                $('.center_text').css('display', 'none');
                $('.t_cos10').css('display', 'block');
                echart_10();
            }
            if(id == 3){
                $('.center_text').css('display', 'none');
                $('.t_cos11').css('display', 'block');
                echart_11();
            }
            if(id == 4){
                $('.center_text').css('display', 'none');
                $('.t_cos1').css('display', 'block');
                echart_2();
            }
            if(id == 5){
                $('.center_text').css('display', 'none');
                $('.t_cos6').css('display', 'block');
                echart_6();
            }
            if(id == 6){
                $('.center_text').css('display', 'none');
                $('.t_cos4').css('display', 'block');
                echart_1();
            }
            if(id == 7){
                $('.center_text').css('display', 'none');
                $('.t_cos8').css('display', 'block');
                echart_8();
            }
            if(id == 8){
                $('.center_text').css('display', 'none');
                $('.t_cos12').css('display', 'block');
                echart_12();
            }
            if(id == 9){
                $('.center_text').css('display', 'none');
                $('.t_cos13').css('display', 'block');
                echart_13();
            }
    });
});
