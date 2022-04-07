<%--
  Created by IntelliJ IDEA.
  User: chongchong
  Date: 2022/3/21
  Time: 14:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>--%>
<%@ page import="java.util.List" %>
<%@ page import="com.ccit.bean.Confirmed" %>
<%@ page import="java.sql.*" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>首页</title>
    <link href="${pageContext.request.contextPath}/resources/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/base.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/index.css">
  
    <style>
        .t_title{
            width: 100%;
            height: 100%;
            text-align: center;
            font-size: 2.5em;
            line-height: 80px;
            color: #fff;
        }
        #chart_map{
            cursor: pointer;
        }
        .t_show{
            position: absolute;
            top: 0;
            right: 0;
            border-radius: 2px;
            background: #2C58A6;
            padding: 2px 5px;
            color: #fff;
            cursor: pointer;
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
</div>

<!--main-->
<div class="data_content">
    <div class="data_time">
        温馨提示: 点击模块后跳转至详情页面。
    </div>

<%--左侧：前十省+江苏  +  我国地图  + 右侧：数据+上海--%>
    <div class="data_main">
        <%--左侧两栏--%>
        <div class="main_left fl">
            <%--确诊最高十省--%>
            <div class="left_1 t_btn6" style="cursor: pointer;">
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
                    <img src="${pageContext.request.contextPath}/resources/img/t_1.png" alt="">
                    确诊最高十省
                </div>
                <div id="chart_1" class="chart" style="width:100%;height: 280px;">
                </div>
            </div>

            <%--江苏省疫情地图--%>
            <div class="left_2" style="cursor: pointer;">
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
                    <img src="${pageContext.request.contextPath}/resources/img/t_2.png" alt="">
                    江苏省疫情分布图
                </div>
                <div id="chart_2" class="chart t_btn9" style="width:100%;height: 280px;">
                </div>
            </div>
        </div>

        <%--我国疫情地图分布--%>
        <div class="main_center fl">
            <%--我国疫情地图分布--%>
            <div class="center_text">
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
                    <img src="${pageContext.request.contextPath}/resources/img/t_3.png" alt="">
                    我国疫情地图分布
                </div>
                <div id="chart_map" style="width:100%;height:610px;">

                </div>
            </div>

        </div>

        <%--右侧两栏--%>
        <div class="main_right fr">
            <%-- 全国疫情情况折线图--%>
            <div class="right_1">
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
                    <img src="${pageContext.request.contextPath}/resources/img/t_4.png" alt="">
                    全国疫情情况折线图
                </div>
                <div id="chart_3" class="echart t_btn7" style="width:100%;height: 280px;"></div>
            </div>

            <%--上海市疫情分布图--%>
            <div class="right_2">
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
                    <img src="${pageContext.request.contextPath}/resources/img/t_5.png" alt="">
                    上海市疫情分布图
                </div>
                <div id="chart_4" class="echart fl t_btn4" style="width:100%;height: 280px;cursor: pointer;"></div>
            </div>

        </div>

    </div>

    <%--底部四栏--%>
    <div class="data_bottom">
        <%--北京市疫情分布图--%>
        <div class="bottom_1 fl t_btn5" style="cursor: pointer;">
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
                <img src="${pageContext.request.contextPath}/resources/img/t_6.png" alt="">
                北京市疫情分布图
            </div>
            <div id="chart_5" class="echart fl" style="width:100%;height: 250px;margin-top: 15px;"></div>
        </div>

        <%--底部中间两栏--%>
        <div class="bottom_center fl">

            <%--全国疫情累计情况--%>
            <div class="bottom_2 fl">
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
                    <img src="${pageContext.request.contextPath}/resources/img/t_7.png" alt="">
                    全国疫情累计情况
                </div>
                <div class="main_table t_btn8">
                    <table>
                        <thead>
                        <tr>
                            <th>城市</th>
                            <th>确诊(人)</th>
                            <th>死亡(人)</th>
                            <th>治愈(人)</th>
                            <th>现有确诊(人)</th>
                        </tr>
                        </thead>
                        <tbody>
<%--                        <c:forEach items="${confirmedList}" var="confirmed">--%>
<%--                            <tr>--%>
<%--                                <td>${confirmed.province}</td>--%>
<%--                                <td>${confirmed.confirmed}</td>--%>
<%--                                <td>${confirmed.death}</td>--%>
<%--                                <td>${confirmed.cure}</td>--%>
<%--                                <td>${confirmed.existingConfirmed}</td>--%>
<%--                            </tr>--%>
<%--                        </c:forEach>--%>
                        <%
                            Statement stmt = null;
                            ResultSet rs = null;
                            Connection conn = null;
                            try {
                                Class.forName("com.mysql.cj.jdbc.Driver");
                                String url = "jdbc:mysql://localhost:3306/covid?characterEncoding=utf8&useSSL=false&serverTimezone=UTC&rewriteBatchedStatements=true"; //数据库名
                                String username = "root"; //数据库用户名
                                String password = "123"; //数据库用户密码
                                conn = DriverManager.getConnection(url, username, password); //连接状态
                                System.out.println("数据库连接成功！");
                        %>
                        <%

                            String sql = "select * from province_confirmed order by cast(confirmed as UNSIGNED INTEGER) DESC limit 5"; //查询语句
                            stmt = conn.createStatement();
                            rs = stmt.executeQuery(sql);
//                            out.print("查询结果：");
//                            out.print("<br/>");
                            while (rs.next()) {
                        %>
                        <tr>
                            <td><%=rs.getString("province")%></td>
                            <td><%=rs.getString("confirmed")%></td>
                            <td><%=rs.getString("death")%></td>
                            <td><%=rs.getString("cure")%></td>
                            <td><%=rs.getString("existing_confirmed")%></td>
                        </tr>
                        <%
                                }
                            } catch (Exception e) {
                                e.printStackTrace();
                                System.out.println("数据库连接失败");
                            } finally{
                                    try {
                                        if(stmt!=null)
                                            stmt.close();
                                    }
                                    catch (SQLException ex) {
                                        ///错误处理
                                    }
                                    try{
                                        if(conn!=null)
                                            conn.close();
                                    }
                                    catch (SQLException ex) {
                                        ///错误处理
                                    }
                                }
                        %>
                        </tbody>
                    </table>
                </div>
            </div>

            <%--全国疫情新增情况--%>
            <div class="bottom_3 fl">
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
                    <img src="${pageContext.request.contextPath}/resources/img/t_7.png" alt="">
                    全国疫情增量情况
                </div>
                <div class="main_table t_btn2">
                    <table>
                        <thead>
                        <tr>
                            <th>城市</th>
                            <th>确诊增量(人)</th>
                            <th>死亡增量(人)</th>
                            <th>治愈增量(人)</th>
                            <th>现有确诊增量(人)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <%
//                            Statement stmt = null;
//                            ResultSet rs = null;
//                            Connection conn = null;
                            try {
                                Class.forName("com.mysql.cj.jdbc.Driver");
                                String url = "jdbc:mysql://localhost:3306/covid?characterEncoding=utf8&useSSL=false&serverTimezone=UTC&rewriteBatchedStatements=true"; //数据库名
                                String username = "root"; //数据库用户名
                                String password = "123"; //数据库用户密码
                                conn = DriverManager.getConnection(url, username, password); //连接状态
                                System.out.println("数据库连接成功！");
                        %>
                        <%

                            String sql = "select * from province_increment order by cast(confirmed_increment as UNSIGNED INTEGER) DESC limit 5"; //查询语句
                            stmt = conn.createStatement();
                            rs = stmt.executeQuery(sql);
//                            out.print("查询结果：");
//                            out.print("<br/>");
                            while (rs.next()) {
                        %>
                            <tr>
                                <td><%=rs.getString("province")%></td>
                                <td><%=rs.getString("confirmed_increment")%></td>
                                <td><%=rs.getString("death_increment")%></td>
                                <td><%=rs.getString("cure_increment")%></td>
                                <td><%=rs.getString("existing_confirmed_increment")%></td>
                            </tr>
                        <%
                                }
                            } catch (Exception e) {
                                e.printStackTrace();
                                System.out.println("数据库连接失败");
                            }
                            finally{
                                try {
                                    if(stmt!=null)
                                        stmt.close();
                                    }
                                    catch (SQLException ex) {
                                        ///错误处理
                                    }
                                    try{
                                        if(conn!=null)
                                            conn.close();
                                    }
                                    catch (SQLException ex) {
                                        ///错误处理
                                    }
                                }
                        %>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>


        <%--广东省疫情地图分布--%>
        <div class="bottom_4 fr">
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
                <img src="${pageContext.request.contextPath}/resources/img/t_7.png" alt="">
                广东省疫情分布图
            </div>
            <div id="chart_6" class="echart fl t_btn4" style="width:100%;height: 280px;cursor: pointer;"></div>
<%--            <div id="chart_6" class="main_table t_btn3"></div>--%>

        </div>

    </div>

</div>

 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery-2.2.1.min.js"></script>
 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery-3.2.1.js"></script>
 <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/common.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/echarts.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/dataTool.js"></script>

    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/index.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/china.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jiangsu.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/guangdong.js"></script>
<%--    <script type="text/javascript" src="resources/js/beijing.js"></script>--%>

<%--    <script type="text/javascript" src="resources/js/shanghai.js"></script>--%>

<%--<script type="text/javascript" src="https://assets.pyecharts.org/assets/echarts.min.js"></script>--%>
<script type="text/javascript" src="https://assets.pyecharts.org/assets/maps/beijing.js"></script>
<script type="text/javascript" src="https://assets.pyecharts.org/assets/maps/shanghai.js"></script>

</body>

</html>
