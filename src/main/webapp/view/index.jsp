<%--
  Created by IntelliJ IDEA.
  User: chongchong
  Date: 2022/3/22
  Time: 16:34
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>详情</title>
    <link rel="stylesheet" href="../resources/css/bootstrap.css">
    <link rel="stylesheet" href="../resources/css/base.css">
    <link rel="stylesheet" href="../resources/css/style.css">
    <style>
        .photo{
            float:left;
            width:20%;
        }
        .intro{
            float:right;
            width:50%;
            padding-top: 20px;
            color: white
        }
        .t_btn {
            margin-top: 20px;
        }

        .t_btn li {
            display: inline-block;
            margin: 0 0px 20px 20px;
        }

        .t_btn button,
        .t_a {
            display: inline-block;
            padding: 10px 5px;
            width: 80px;
            border-style: solid;
            border-width: 0;
            cursor: pointer;
            font-family: inherit;
            font-weight: bold;
            line-height: normal;
            margin: 0 0 0.5em 0;
            position: relative;
            text-decoration: none;
            text-align: center;
            display: inline-block;
            font-size: 1em;
            background-color: #2C58A6;
            border-color: #0263ff;
            color: white;
            box-shadow: 0 -2px 0 rgba(0, 0, 0, 0.2) inset !important;
            margin-right: 0.5em;
            border-radius: 4px;
        }

        .t_height {
            line-height: 80px;
            position: absolute;
            right: 28px;
            top: 0;
        }
    </style>
</head>

<body>
<!--header-->
<div class="header">
    <div class="bg_header">
        <div class="header_nav fl t_title">
            新冠疫情(COVID-19)大数据预测分析可视化平台
        </div>
    </div>
    <div class="header_nav fl">
    </div>
    <div class="header_myself fr t_height">
        <a class="t_a" href="../index.jsp">返回 &nbsp;</a>
    </div>
</div>
<!--main-->
<div class="data_content">
    <div class="data_main">
        <div class="main_left fl">
            <div class="left_1">
                <ul class="t_btn">
                    <li>
                        <button class="t_btn0">中国地图</button>
                    </li>
                    <li>
                        <button class="t_btn3">中国铁路</button>
                    </li>
                    <li>
                        <button class="t_btn14">全国面积图</button>
                    </li>
                    <li>
                        <button class="t_btn13">江苏省</button>
                    </li>
                    <li>
                        <button class="t_btn2">北京市</button>
                    </li>
                    <li>
                        <button class="t_btn4">上海市</button>
                    </li>
                    <li>
                        <button class="t_btn6">广东省</button>
                    </li>
                    <li>
                        <button class="t_btn7">前十漏斗图</button>
                    </li>
                    <li>
                        <button class="t_btn8">前十柱状图</button>
                    </li>
                    <li>
                        <button class="t_btn9">前十正负图</button>
                    </li>
                    <li>
                        <button class="t_btn10">江苏面积图</button>
                    </li>
                    <li>
                        <button class="t_btn11">上海面积图</button>
                    </li>
                    <li>
                        <button class="t_btn1">广东面积图</button>
                    </li>
                    <li>
                        <button class="t_btn5">北京面积图</button>
                    </li>
                    <li>
                        <button class="t_btn12">预测分析</button>
                    </li>
                </ul>
            </div>
            <div class="left_2" style="display:none">
                <div class="main_title">
                    江苏省地图
                </div>
            </div>
        </div>

        <div class="main_center fl">

            <%--中国地图--%>
            <div class="center_text t_cos0">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i>
                    <i class="l_t_line"></i>
                </div>
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i>
                    <i class="r_t_line"></i>
                </div>
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i>
                    <i class="b_l_line"></i>
                </div>
                <!--右下边框-->
                <div class="t_line_box">
                    <i class="r_b_line"></i>
                    <i class="b_r_line"></i>
                </div>
                <div class="main_title">
                    中国地图
                </div>
                <div id="chart_map" style="width:100%;height:778px;"></div>
            </div>

            <%--北京市新增确诊分布--%>
            <div class="center_text t_cos2" style="display:none">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i>
                    <i class="l_t_line"></i>
                </div>
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i>
                    <i class="r_t_line"></i>
                </div>
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i>
                    <i class="b_l_line"></i>
                </div>
                <!--右下边框-->
                <div class="t_line_box">
                    <i class="r_b_line"></i>
                    <i class="b_r_line"></i>
                </div>
                <div class="main_title">
                    北京市新增确诊分布
                </div>
                <div id="chart_0" class="chart" style="width:100%;height:778px;"></div>
            </div>

            <%--中国铁路--%>
            <div class="center_text t_cos3" style="display:none">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i>
                    <i class="l_t_line"></i>
                </div>
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i>
                    <i class="r_t_line"></i>
                </div>
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i>
                    <i class="b_l_line"></i>
                </div>
                <!--右下边框-->
                <div class="t_line_box">
                    <i class="r_b_line"></i>
                    <i class="b_r_line"></i>
                </div>
                <div class="main_title">
                    中国铁路
                </div>
                <div id="chart_4" class="chart" style="width:100%;height:778px;"></div>
            </div>


            <%--广东省新增确诊分布--%>
            <div class="center_text t_cos5" style="display:none">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i>
                    <i class="l_t_line"></i>
                </div>
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i>
                    <i class="r_t_line"></i>
                </div>
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i>
                    <i class="b_l_line"></i>
                </div>
                <!--右下边框-->
                <div class="t_line_box">
                    <i class="r_b_line"></i>
                    <i class="b_r_line"></i>
                </div>
                <div class="main_title">
                    广东省新增确诊分布
                </div>
                <div id="chart_3" class="chart" style="width:100%;height:778px;"></div>
            </div>

            <%--上海市疫情分布--%>
            <div class="center_text t_cos6" style="display:none">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i>
                    <i class="l_t_line"></i>
                </div>
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i>
                    <i class="r_t_line"></i>
                </div>
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i>
                    <i class="b_l_line"></i>
                </div>
                <!--右下边框-->
                <div class="t_line_box">
                    <i class="r_b_line"></i>
                    <i class="b_r_line"></i>
                </div>
                <div class="main_title">
                    上海市新增确诊分布
                </div>
                <div id="chart_6" class="chart" style="width:100%;height:778px;"></div>
            </div>

            <%--累计确诊漏斗图--%>
            <div class="center_text t_cos7" style="display:none">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i>
                    <i class="l_t_line"></i>
                </div>
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i>
                    <i class="r_t_line"></i>
                </div>
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i>
                    <i class="b_l_line"></i>
                </div>
                <!--右下边框-->
                <div class="t_line_box">
                    <i class="r_b_line"></i>
                    <i class="b_r_line"></i>
                </div>
                <div class="main_title">
                    累计新增确诊漏斗图
                </div>
                <div id="chart_7" class="chart" style="width:100%;height:778px;"></div>
            </div>

            <%--累计确诊前十省柱状图--%>
            <div class="center_text t_cos8" style="display:none">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i>
                    <i class="l_t_line"></i>
                </div>
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i>
                    <i class="r_t_line"></i>
                </div>
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i>
                    <i class="b_l_line"></i>
                </div>
                <!--右下边框-->
                <div class="t_line_box">
                    <i class="r_b_line"></i>
                    <i class="b_r_line"></i>
                </div>
                <div class="main_title">
                    累计新增前十省柱状图
                </div>
                <div id="chart_8" class="chart" style="width:100%;height:778px;"></div>
            </div>

            <%--累计确诊前十省正负条状图--%>
            <div class="center_text t_cos9" style="display:none">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i>
                    <i class="l_t_line"></i>
                </div>
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i>
                    <i class="r_t_line"></i>
                </div>
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i>
                    <i class="b_l_line"></i>
                </div>
                <!--右下边框-->
                <div class="t_line_box">
                    <i class="r_b_line"></i>
                    <i class="b_r_line"></i>
                </div>
                <div class="main_title">
                    累计新增正负条状图
                </div>
                <div id="chart_9" class="chart" style="width:100%;height:778px;"></div>
            </div>

            <%-- 江苏省渐变堆叠面积图--%>
            <div class="center_text t_cos10" style="display:none">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i>
                    <i class="l_t_line"></i>
                </div>
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i>
                    <i class="r_t_line"></i>
                </div>
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i>
                    <i class="b_l_line"></i>
                </div>
                <!--右下边框-->
                <div class="t_line_box">
                    <i class="r_b_line"></i>
                    <i class="b_r_line"></i>
                </div>
                <div class="main_title">
                    渐变堆叠面积图
                </div>
                <div id="chart_10" class="chart" style="width:100%;height:778px;"></div>
            </div>

            <%--上海渐变堆叠面积图   --%>
            <div class="center_text t_cos11" style="display:none">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i>
                    <i class="l_t_line"></i>
                </div>
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i>
                    <i class="r_t_line"></i>
                </div>
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i>
                    <i class="b_l_line"></i>
                </div>
                <!--右下边框-->
                <div class="t_line_box">
                    <i class="r_b_line"></i>
                    <i class="b_r_line"></i>
                </div>
                <div class="main_title">
                    渐变堆叠面积图
                </div>
                <div id="chart_11" class="chart" style="width:100%;height:778px;"></div>
            </div>

            <%--广东省渐变堆叠面积图--%>
            <div class="center_text t_cos1" style="display:none">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i>
                    <i class="l_t_line"></i>
                </div>
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i>
                    <i class="r_t_line"></i>
                </div>
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i>
                    <i class="b_l_line"></i>
                </div>
                <!--右下边框-->
                <div class="t_line_box">
                    <i class="r_b_line"></i>
                    <i class="b_r_line"></i>
                </div>
                <div class="main_title">
                    渐变堆叠面积图
                </div>
                <div id="cloud" class="chart" style="width:100%;height:778px; cursor: pointer;"></div>
            </div>

            <%--北京市渐变堆叠面积图--%>
           <div class="center_text t_cos4" style="display:none">
                    <!--左上边框-->
                    <div class="t_line_box">
                        <i class="t_l_line"></i>
                        <i class="l_t_line"></i>
                    </div>
                    <!--右上边框-->
                    <div class="t_line_box">
                        <i class="t_r_line"></i>
                        <i class="r_t_line"></i>
                    </div>
                    <!--左下边框-->
                    <div class="t_line_box">
                        <i class="l_b_line"></i>
                        <i class="b_l_line"></i>
                    </div>
                    <!--右下边框-->
                    <div class="t_line_box">
                        <i class="r_b_line"></i>
                        <i class="b_r_line"></i>
                    </div>
                    <div class="main_title">
                        渐变堆叠面积图
                    </div>
                    <div id="cloud_1" class="chart" style="width:100%;height:778px; cursor: pointer;"></div>
                </div>

            <%--疫情分析预测--%>
            <div class="center_text t_cos12" style="display:none">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i>
                    <i class="l_t_line"></i>
                </div>
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i>
                    <i class="r_t_line"></i>
                </div>
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i>
                    <i class="b_l_line"></i>
                </div>
                <!--右下边框-->
                <div class="t_line_box">
                    <i class="r_b_line"></i>
                    <i class="b_r_line"></i>
                </div>
                <div class="main_title">
                    疫情预测分析
                </div>
                <div id="chart_12" class="chart" style="width:100%;height:778px;">
                    <div class="photo" style="margin: auto; padding: 30px">
                        <img src="../resources/forecast/forecast_1.png" width="450" height="350" style="padding-bottom: 20px">
                        <br>
                        <img src="../resources/forecast/forecast_2.png" width="450" height="350" style="padding-top: 20px">
                    </div>
                    <div class="intro">
                        <h4>感染症状</h4>
                        <h5>1.发烧或寒战咳嗽&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.气短或呼吸困难</h5>
                        <h5>3.疲劳&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            4.肌肉或身体酸痛</h5>
                        <h5>5.头疼&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            6.近期丧失味觉或嗅觉</h5>
                        <h5>7.喉咙痛&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            8.鼻塞或流鼻涕</h5>
                        <h5>9.恶心或呕吐&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            10.腹泻</h5>
                        <br>
                        <h4>预防小知识</h4>
                        <h5>第一，定期用含酒精成分的免洗洗手液洗手、或用肥皂和水洗手。手接触受污染的物品表面或病人后再触摸面部是病毒传播的途径之一，因此清洁双手可以降低病毒传播风险。</h5>
                        <h5>第二，定期用消毒剂清洁物品表面，例如厨房桌椅和办公桌等。</h5>
                        <h5>第三，自学有关新冠病毒肺炎相关知识，但要确保信息来自地方或国家公共卫生机构、世卫组织网站、地方卫生专业人员等可靠来源。对大多数人来说，感染新冠病毒后一开始的症状是发烧和干咳，而不是流鼻涕。大多数感染者为轻症，无须任何特殊照顾即可好转。</h5>
                        <h5>第四，在发烧或咳嗽期间避免旅行，如在飞行途中生病，应立即通知机组人员。回家后应立即与医卫人员联系，并告知他们自己去过哪里。</h5>
                        <h5>第五，咳嗽或打喷嚏时用衣袖遮挡或使用纸巾。纸巾用完应立即扔进封闭垃圾箱，然后洗手。</h5>
                        <h5>第六，60岁以上或有心血管疾病、呼吸系统疾病、糖尿病等基础疾病者，感染新冠病毒后出现重症的风险可能更高。这类人群应采取额外的预防措施，比如避免前往人多的场所或可能与病人有互动的场所。</h5>
                        <h5>第七，一旦感觉不舒服，请待在家中，并打电话给医生或当地医疗人员，他们会询问你的症状、去过哪里、和谁有过接触。这将有助于获取正确的建议或根据指引前往正确的医疗卫生机构，并可预防感染他人。</h5>
                        <h5>第八，生病时应待在家里，吃饭和睡觉与家人分开，使用不同的餐具。</h5>
                        <h5>第九，如出现呼吸急促，应立即就医。</h5>
                        <h5>第十，疫情期间感到焦虑是正常的，也是可以理解的，尤其是当生活在一个受疫情影响的国家或社区时。请了解本社区防控疫情的举措，并就如何在工作场所、学校等保障安全展开讨论。</h5>
                        <h5>第十一，不信谣，不传谣，积极配合国家相关部门的安排，遵守相关法律法规。</h5>
                    </div>


                </div>

            </div>

            <%--江苏省信息--%>
            <div class="center_text t_cos13" style="display:none">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i>
                    <i class="l_t_line"></i>
                </div>
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i>
                    <i class="r_t_line"></i>
                </div>
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i>
                    <i class="b_l_line"></i>
                </div>
                <!--右下边框-->
                <div class="t_line_box">
                    <i class="r_b_line"></i>
                    <i class="b_r_line"></i>
                </div>
                <div class="main_title">
                    江苏省新增确诊分布
                </div>
                <div id="chart_13" class="chart" style="width:100%;height:778px; cursor: pointer;"></div>
            </div>

            <%--我国累计确诊、死亡、治愈、现有确诊堆积面积图--%>
            <div class="center_text t_cos14" style="display:none">
                <!--左上边框-->
                <div class="t_line_box">
                    <i class="t_l_line"></i>
                    <i class="l_t_line"></i>
                </div>
                <!--右上边框-->
                <div class="t_line_box">
                    <i class="t_r_line"></i>
                    <i class="r_t_line"></i>
                </div>
                <!--左下边框-->
                <div class="t_line_box">
                    <i class="l_b_line"></i>
                    <i class="b_l_line"></i>
                </div>
                <!--右下边框-->
                <div class="t_line_box">
                    <i class="r_b_line"></i>
                    <i class="b_r_line"></i>
                </div>
                <div class="main_title">
                    堆积面积图
                </div>
                <div id="chart_14" class="chart" style="width:100%;height:778px; cursor: pointer;"></div>
            </div>

        </div>
    </div>
</div>

</body>
<script src="../resources/js/jquery-2.2.1.min.js"></script>
<script src="../resources/js/jquery-3.2.1.js"></script>
<script src="../resources/js/bootstrap.min.js"></script>
<script src="../resources/js/common.js"></script>
<script src="http://api.map.baidu.com/api?v=2.0&ak=dApOtvB5E3x6byHpUGHbRF1fxctCBdjw"></script>
<script src="../resources/js/echarts.min.js"></script>
<script src="../resources/js/dataTool.js"></script>
<script src="../resources/js/bmap.js"></script>
<script src="../resources/js/echarts-all.js"></script>
<script src="../resources/js/echarts-wordcloud.min.js"></script>

<script src="../resources/js/base.js"></script>
<script src="../resources/js/china.js"></script>
<script src="../resources/js/index.js"></script>

<script src="../resources/js/jiangsu.js"></script>
<script src="../resources/js/guangdong.js"></script>
<script type="text/javascript" src="https://assets.pyecharts.org/assets/maps/beijing.js"></script>
<script type="text/javascript" src="https://assets.pyecharts.org/assets/maps/shanghai.js"></script>


</html>
