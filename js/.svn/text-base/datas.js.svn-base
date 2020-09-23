 // 基于准备好的dom，初始化echarts实例,第一个柱状图
 var myChart1= echarts.init(document.getElementById('datasmain01'));
 // 指定图表的配置项和数据
 var option = {
    color: ['rgba(227, 153, 245, 0.712)'],
     tooltip: {},
     xAxis: {
         data: ["1月","","3月","","5月","","7月","","9月","","11月"]
     },
    yAxis: [
        {
            type: 'value',
            min: 0,
            max: 2.5,
            interval:0.5,
            axisLabel: {
                formatter: '{value} 亿'
            }
        }
    ],
     series: [{
         type: 'bar',
         data: [0.5, 2.3, 2.0, 1.2, 1.8, 2.1, 2.0, 0.6, 1.0, 1.0, 2.0]
     }]
 };

 // 使用刚指定的配置项和数据显示图表。
 myChart1.setOption(option);
 
 //第二个柱状图
 var myChart2 = echarts.init(document.getElementById('datasmain02'));
 // 指定图表的配置项和数据
 var option = {
    color: ['rgba(227, 153, 245, 0.712)'],
     tooltip: {},
     xAxis: {
         data: ["0","","3月","","5月","","7月","","9月","","11月"]
     },
    yAxis: [
        {
            type: 'value',
            min: 0,
            max: 800,
            interval:100,
            axisLabel: {
                formatter: '{value} 笔'
            }
        }
    ],
     series: [{
         type: 'bar',
         data: [512, 233, 200, 572, 188, 491, 450, 689, 690, 780, 690]
     }]
 };
 // 使用刚指定的配置项和数据显示图表。
 myChart2.setOption(option);
 //第一个饼状图
 var myChart3 = echarts.init(document.getElementById('datasmain03'));
 // 指定图表的配置项和数据
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
           
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '65%'],
            data:[
                {value:335, name:'其他'},
                {value:310, name:'9个月'},
                {value:234, name:'3个月'},
                {value:135, name:'6个月'},
                {value:1048, name:'7个月'},
                {value:251, name:'3个月内'},
                {value:147, name:'5个月'},
            ]
        }
    ]
};
 // 使用刚指定的配置项和数据显示图表。
 myChart3.setOption(option);
 //第二个饼状图
 var myChart4 = echarts.init(document.getElementById('datasmain04'));
 // 指定图表的配置项和数据
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
           
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '65%'],
            data:[
                {value:335, name:'小于3%'},
                {value:310, name:'3%~6%'},
                {value:234, name:'8%~24%'},
                {value:135, name:'34%~45%'},
                {value:1048, name:'68%以上'},
            ]
        }
    ]
};
 // 使用刚指定的配置项和数据显示图表。
 myChart4.setOption(option);

 //年龄分布图
 var myChart6= echarts.init(document.getElementById('datasmain06'));
 // 指定图表的配置项和数据
 var option = {
    color: ['rgba(227, 153, 245, 0.712)'],
     tooltip: {},
     xAxis: {
         data: ["18-29岁","30-39岁","40-49岁","50-59以上"]
     },
     yAxis: [
        {
            type: 'value',
            min: 0,
            max: 100,
            interval:10,
            axisLabel: {
                formatter: '{value} 岁'
            }
        }
    ],
     series: [{
         type: 'bar',
         data: [23, 60, 72,90]
     }]
 };
 // 使用刚指定的配置项和数据显示图表。
 myChart6.setOption(option);

 //第三个饼状图
 var myChart7 = echarts.init(document.getElementById('datasmain07'));
 // 指定图表的配置项和数据
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
           
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '65%'],
            data:[
                {value:335, name:'保守型%'},
                {value:310, name:'积极型'},
                {value:234, name:'健康型'},
                {value:135, name:'跟风型'}

            ]
        }
    ]
};
 // 使用刚指定的配置项和数据显示图表。
 myChart7.setOption(option);

 //第八个饼状图
 var myChart8= echarts.init(document.getElementById('datasmain08'));
 // 指定图表的配置项和数据
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
           
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '65%'],
            data:[
                {value:335, name:'小于1万'},
                {value:310, name:'3万~6万'},
                {value:234, name:'8万~24万'},
                {value:135, name:'34万~45万'},
                {value:1048, name:'68万以上'},
            ]
        }
    ]
};
 // 使用刚指定的配置项和数据显示图表。
 myChart8.setOption(option);

 //地理图
 var myChart = echarts.init(document.getElementById('china-map'));
 var option = {
     tooltip: {
//                    show: false //不显示提示标签
         formatter: '{b}', //提示标签格式
         backgroundColor:"#ff7f50",//提示标签背景颜色
         textStyle:{color:"#fff"} //提示标签字体颜色
     },
     series: [{
         type: 'map',
         mapType: 'china',
         label: {
             normal: {
                 show: true,//显示省份标签
                 textStyle:{color:"#c71585"}//省份标签字体颜色
             },    
             emphasis: {//对应的鼠标悬浮效果
                 show: true,
                 textStyle:{color:"#800080"}
             } 
         },
         itemStyle: {
             normal: {
                 borderWidth: .5,//区域边框宽度
                 borderColor: '#009fe8',//区域边框颜色
                 areaColor:"#ffefd5",//区域颜色
             },
             emphasis: {
                 borderWidth: .5,
                 borderColor: '#4b0082',
                 areaColor:"#ffdead",
             }
         },
         data:[
             {name:'福建', selected:true}//福建为选中状态
         ]
     }],
 };
 
 myChart.setOption(option);
 myChart.on('mouseover', function (params) {
     var dataIndex = params.dataIndex;
     console.log(params);
 });


 /* 楼层和回到顶部 */
 $(function(){
    //1.楼梯什么时候显示，800px scroll--->scrollTop
    $(window).on('scroll',function(){
        var $scroll=$(this).scrollTop();
        if($scroll>=800){
            $('#loutinav').show();
        }else{
            $('#loutinav').hide();
        }

        //4.拖动滚轮，对应的楼梯样式进行匹配
        $('.louti').each(function(){
            var $loutitop=$('.louti').eq($(this).index()).offset().top;
            //console.log($loutitop);
            if($loutitop>$scroll){//楼层的top大于滚动条的距离
                $('#loutinav li').removeClass('active');
                $('#loutinav li').eq($(this).index()).addClass('active');
                return false;//中断循环
            }
        });
    });
    //2.获取每个楼梯的offset().top,点击楼梯让对应的内容模块移动到对应的位置  offset().left
    
    var $loutili=$('#loutinav li').not('.last');
    $loutili.on('click',function(){
        $(this).addClass('active').siblings('li').removeClass('active');
        var $loutitop=$('.louti').eq($(this).index()).offset().top-150;
        //获取每个楼梯的offsetTop值
        $('html,body').animate({//$('html,body')兼容问题body属于chrome
            scrollTop:$loutitop
        })
    });
    //3.回到顶部
    $('.last').on('click',function(){
        $('html,body').animate({//$('html,body')兼容问题body属于chrome
            scrollTop:0
        })
    })
})