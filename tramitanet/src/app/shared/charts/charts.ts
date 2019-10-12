import * as echarts from 'echarts';

export const BarChart1 = {

    grid: {
        show: false,
        top: 5,
        left: 0,
        right: 0,
        bottom: 0
    },
    tooltip: {
        show: true,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    xAxis: [
        {
            type: 'category',

            axisTick: {
                alignWithLabel: true
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            label: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            }
        }

    ],

    series: [{
        label: { show: false, color: '#0168c1' },
        type: 'bar',
        barWidth: '70%',
        smooth: true
    }]

}

export const BarChart2 = {

    grid: {
        show: false,
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        borderRadius: 0,
        orient: 'horizontal',
        x: 'right',
        data: ['Online', 'Offline']
    },
    tooltip: {
        show: true,
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    xAxis: [
        {
            type: 'category',
            axisLabel: {
                color: '#444'
            },
            axisTick: {
                alignWithLabel: true,
                lineStyle: {
                    color: '#aaa'
                },
                color: '#eee'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaa'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                formatter: '${value}'
            },
            min: 0,
            max: 100000,
            interval: 25000,
            axisLine: {
                show: false
            },
            splitLine: {
                show: true,
                interval: 'auto'
            },
            axisTick: {
                show: false,
                color: '#eee'
            },
        }

    ],

    series: [
        {
            label: { show: false, color: '#0168c1' },
            type: 'bar',
            barGap: 0,
            smooth: true
        },
        {
            label: { show: false, color: '#0168c1' },
            type: 'bar',
            smooth: true
        }
    ]

}

export const BarChart3 = {

    tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        renderMode: 'html',
        formatter: "{c}<br/>{a}<br/>{b}:00",
    },
    grid: {
        show: false,
        top: 5,
        left: 0,
        right: 0,
        bottom: 0
    },
    xAxis: [
        {
            type: 'category',

            axisTick: {
                alignWithLabel: true
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            label: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            }
        }

    ],

    series: [{
        label: { show: false, color: '#0168c1' },
        type: 'bar',
        barWidth: '70%',
        smooth: true
    }]

}

export const BarChart4 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '8%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 500,
        interval: 100,
        axisLabel: {
            formatter: '{value}k',
            color: '#333',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 400
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        splitLine: {
            lineStyle: {
                color: '#ddd',
                width: 1,
                opacity: 0.5
            }
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: [
            'Dec, 1', 'Dec, 2', 'Dec, 3', 'Dec, 4', 'Dec, 5', 'Dec, 6', 'Dec, 7'
        ],
        axisLabel: {
            formatter: '{value}',
            color: '#333',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 400,

        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        }
    },
    series: [
        {
            color: '#3182bd',
            name: 'Campaign',
            type: 'bar',
            barGap: 0,
            label: {
                normal: {
                    show: false,
                    position: 'insideBottom',
                    distance: 5,
                    align: 'left',
                    verticalAlign: 'middle',
                    rotate: 90,
                    formatter: '{c}  {name|{a}}',
                    fontSize: 14,
                    fontWeight: 'bold',
                    rich: {
                        name: {
                            color: '#fff',

                        }
                    }
                }
            },
            data: [320, 332, 301, 334, 390, 350, 215]
        },
        {
            color: '#74c475',
            name: 'Steppe',
            type: 'bar',
            label: {
                normal: {
                    show: false,
                    position: 'insideBottom',
                    distance: 5,
                    align: 'left',
                    verticalAlign: 'middle',
                    rotate: 90,
                    formatter: '{c}  {name|{a}}',
                    fontSize: 14,
                    fontWeight: 'bold',
                    rich: {
                        name: {
                            color: '#fff',

                        }
                    }
                }
            },
            data: [220, 182, 191, 234, 290, 190, 210]
        },
        {
            color: '#e6550d',
            name: 'Desert',
            type: 'bar',
            label: {
                normal: {
                    show: false,
                    position: 'insideBottom',
                    distance: 5,
                    align: 'left',
                    verticalAlign: 'middle',
                    rotate: 90,
                    formatter: '{c}  {name|{a}}',
                    fontSize: 14,
                    fontWeight: 'bold',
                    rich: {
                        name: {
                            color: '#fff',

                        }
                    }
                }
            },
            data: [150, 232, 201, 154, 190, 150, 130]
        },
        {
            color: '#756bb1',
            name: 'Wetland',
            type: 'bar',
            label: {
                normal: {
                    show: false,
                    position: 'insideBottom',
                    distance: 5,
                    align: 'left',
                    verticalAlign: 'middle',
                    rotate: 90,
                    formatter: '{c}  {name|{a}}',
                    fontSize: 14,
                    fontWeight: 'bold',
                    rich: {
                        name: {
                            color: '#fff',

                        }
                    }
                }
            },
            data: [98, 77, 101, 99, 40, 30, 50]
        }

    ]
}

export const BarChart5 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                opacity: 0
            }
        }
    },
    grid: {
        top: '8%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
        axisLabel: {
            inside: true,
            textStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            }
        },
        splitLine: {
            show: false
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        { // For shadow
            name: 'Interested',
            type: 'bar',
            itemStyle: {
                normal: { color: 'rgba(0,0,0,0.05)' }
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: [500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500, 500],
            animation: false
        },
        {
            name: 'Going',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#83bff6' },
                            { offset: 0.5, color: '#188df0' },
                            { offset: 1, color: '#188df0' }
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#2378f7' },
                            { offset: 0.7, color: '#2378f7' },
                            { offset: 1, color: '#83bff6' }
                        ]
                    )
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220, 220, 182, 191, 234, 290, 330, 310, 123, 442, 212]
        }
    ]
}

export const PaiChart1 = {

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {

            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            }
        }
    ],
    yAxis: [
        {
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            }
        }
    ],

    series: [
        {
            type: 'pie',
            radius: '75%',
            center: ['50%', '50%'],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }

    ]

}

export const PaiChart2 = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    color: ['#c13018', '#f36e12', '#ebcb37', '#a1b968', '#0d94bc', '#135bba'],

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: 'Source',
            type: 'pie',
            radius: '85%',
            center: ['50%', '50%'],
            data: [
                { value: 335, name: 'Direct Interview' },
                { value: 310, name: 'Email Marketing' },
                { value: 274, name: 'Alliance advertising' },
                { value: 235, name: 'Video Ads' },
                { value: 400, name: 'Search Engine' }
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.0)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
}

export const PaiChart3 = {

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    color: ['#c13018', '#f36e12', '#ebcb37', '#a1b968', '#0d94bc', '#135bba'],
    tooltip: {
        show: false,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    xAxis: [
        {

            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            }
        }

    ],
    yAxis: [
        {

            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            }
        }

    ],

    series: [
        {
            name: 'Sessions',
            type: 'pie',
            radius: ['50%', '85%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            hoverOffset: 5,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    textStyle: {
                        fontSize: '13',
                        fontWeight: 'normal'
                    },
                    formatter: "{a}",
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '15',
                        fontWeight: 'bold'
                    },
                    formatter: "{b} \n{c} ({d}%)",
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 335, name: 'Organic' },
                { value: 310, name: 'Search Eng.' },
                { value: 234, name: 'Email' },
                { value: 135, name: 'Referal' },
                { value: 148, name: 'Social' },
                { value: 548, name: 'Others' }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }

    ]


}

export const PaiChart4 = {

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    grid: {
        left: '5%',
        top: '2%',
        right: '5%',
        bottom: '2%'
    },
    series: [
        {
            name: 'DEMOGRAPHY',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner',
                    formatter: '{b} \n {c} ',
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 635, name: 'Male', selected: true },
                { value: 679, name: 'Female' },
                { value: 248, name: 'Others' }
            ]
        },
        {
            name: 'COUNTRY',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,

                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        abg: {
                            backgroundColor: '#333',
                            width: '100%',
                            align: 'right',
                            height: 22,
                            borderRadius: [4, 4, 0, 0]
                        },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data: [
                { value: 335, name: 'USA' },
                { value: 310, name: 'CAN' },
                { value: 234, name: 'MEX' },
                { value: 135, name: 'UK' },
                { value: 1048, name: 'GER' },
                { value: 251, name: 'AUS' },
                { value: 147, name: 'IND' },
                { value: 102, name: 'CHI' },
                { value: 122, name: 'OTHERS' }
            ]
        }
    ]


}

export const PaiChart5 = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    color: ['#c13018', '#f36e12', '#ebcb37', '#a1b968', '#0d94bc', '#135bba'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
    },

    calculable: true,
    series: [
        {
            name: '半径模式',
            type: 'pie',
            radius: [20, 110],
            center: ['25%', '50%'],
            roseType: 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: [
                { value: 10, name: 'rose1' },
                { value: 5, name: 'rose2' },
                { value: 15, name: 'rose3' },
                { value: 25, name: 'rose4' },
                { value: 20, name: 'rose5' },
                { value: 35, name: 'rose6' },
                { value: 30, name: 'rose7' },
                { value: 40, name: 'rose8' }
            ]
        },
        {
            name: '面积模式',
            type: 'pie',
            radius: [30, 110],
            center: ['75%', '50%'],
            roseType: 'area',
            data: [
                { value: 10, name: 'rose1' },
                { value: 5, name: 'rose2' },
                { value: 15, name: 'rose3' },
                { value: 25, name: 'rose4' },
                { value: 20, name: 'rose5' },
                { value: 35, name: 'rose6' },
                { value: 30, name: 'rose7' },
                { value: 40, name: 'rose8' }
            ]
        }
    ]
}

export const PaiChart6 = {
    color: ['#f36e12', '#a1b968', '#0d94bc', '#135bba'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    grid: {
        left: '5%',
        top: '2%',
        right: '5%',
        bottom: '2%'
    },
    angleAxis: {
    },
    radiusAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu'],
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 8],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
    }, {
        type: 'bar',
        data: [1, 2, 3, 4],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    }


}

export const DonutChart1 = {

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        position: [50, 10],
        backgroundColor: 'rgba(0, 0, 0, 1)'
    },

    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisPointer: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisPointer: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },

    series: [
        {
            name: 'Campaign',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            hoverOffset: 2,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '15',
                        fontWeight: 'bold'
                    },
                    z: 999
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 335, name: 'Social Media' },
                { value: 310, name: 'Youtube' },
                { value: 234, name: 'Google AdWord' }

            ]
        }

    ]

}

export const LineChart1 = {
    tooltip: {
        show: false
    },
    grid: {
        top: '8%',
        left: '0%',
        right: '0%',
        bottom: '2%'
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        type: 'line',
        showSymbol: false,
        lineStyle: {
            opacity: 1,
            width: 2,
        },
    }]

}

export const LineChart2 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            animation: true
        }
    },
    grid: {
        top: '10%',
        left: '2%',
        right: '2%',
        bottom: '0%'
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [
        {
            type: 'line',
            showSymbol: false,
            lineStyle: {
                opacity: 1,
                width: 2,
            },
        },
        {
            type: 'line',
            showSymbol: false,
            lineStyle: {
                opacity: 0.7,
                width: 2,
            },
        }
    ]

}

export const LineChart3 = {
    tooltip: {
        show: true,
        backgroundColor: 'rgba(0, 0, 0, .8)',
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            animation: true,
            lineStyle: {
                color: 'rgba(0,0,0,0.2)'
            }
        }
    },
    grid: {
        show: false,
        top: 0,
        right: '-8%',
        left: '-8%',
        bottom: 0
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', ''],
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        }
    },
    series: [{
        data: [1000, 1000, 900, 1200, 800, 1300, 1100, 1400, 1300, 1600, 1500, 1600, 1900, 2000],
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                color: '#2afca8',
                width: 5,
                shadowBlur: 30,
                shadowColor: '#000',
                shadowOffsetX: -1,
                shadowOffsetY: 12
            }
        },
        itemStyle: {
            normal: {
                opacity: 0
            },
            emphasis: {
                opacity: 1,
                shadowBlur: 50,
                shadowColor: '#000'
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#000'
                }, {
                    offset: 1,
                    color: 'rgba(255, 255, 255, 0.1)'
                }
                ])

            }
        }
    }]
}

export const LineChart4 = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        top: '10%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: '#999'
        },
        axisLine: {
            color: '#999',
            lineStyle: {
                color: '#999999'
            }
        }
    },
    yAxis: {
        type: 'value',
        min: 65,
        max: 110,

        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    },
    series: [
        {
            name: 'Alpha',
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbolSize: 8,
            lineStyle: {
                color: '#ff5721',
                opacity: 1,
                width: 1.5,
            },
            itemStyle: {
                show: false,
                color: '#fff',
                borderColor: '#ff5721',
                borderWidth: 1.5
            }
        },
        {
            name: 'Beta',
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbolSize: 8,
            lineStyle: {
                color: '#5f6cc1',
                opacity: 1,
                width: 1.5,
            },
            itemStyle: {
                color: '#fff',
                borderColor: '#5f6cc1',
                borderWidth: 1.5
            }
        },
        {
            name: 'Gama',
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbolSize: 10,
            lineStyle: {
                color: '#4cae50',
                opacity: 1,
                width: 1.5,
            },
            itemStyle: {
                color: '#fff',
                borderColor: '#4cae50',
                borderWidth: 1.5
            }
        }
    ]
}

export const LineChart5 = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        top: '10%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: '#999'
        },
        axisLine: {
            color: '#999',
            lineStyle: {
                color: '#999999'
            }
        }
    },
    yAxis: {
        type: 'value',
        min: 65,
        max: 110,

        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    },
    series: [
        {
            name: 'Alpha',
            type: 'line',
            smooth: true,
            symbolSize: 8,
            lineStyle: {
                color: '#ff5721',
                opacity: 1,
                width: 1.5,
            },
            itemStyle: {
                color: '#fff',
                borderColor: '#ff5721',
                borderWidth: 1.5
            }
        },
        {
            name: 'Beta',
            type: 'line',
            smooth: true,
            symbolSize: 8,
            lineStyle: {
                color: '#5f6cc1',
                opacity: 1,
                width: 1.5,
            },
            itemStyle: {
                color: '#fff',
                borderColor: '#5f6cc1',
                borderWidth: 1.5
            }
        },
        {
            name: 'Gama',
            type: 'line',
            smooth: true,
            symbolSize: 10,
            lineStyle: {
                color: '#4cae50',
                opacity: 1,
                width: 1.5,
            },
            itemStyle: {
                color: '#fff',
                borderColor: '#4cae50',
                borderWidth: 1.5
            }
        }
    ]
}

// Area Charts

export const AreaChart1 = {
    tooltip: {
        trigger: 'axis',

        axisPointer: {
            animation: true
        }
    },
    grid: {
        left: '4%',
        top: '4%',
        right: '3%',
        bottom: '10%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct',
            'Nov', 'Dec'
        ],
        axisLabel: {
            formatter: '{value}',
            color: '#666',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 400,

        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        axisTick: {
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 200,
        interval: 50,
        axisLabel: {
            formatter: '{value}k',
            color: '#666',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 400,

        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        axisTick: {
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        splitLine: {
            lineStyle: {
                color: '#ddd',
                width: 1,
                opacity: 0.5
            }
        }
    },
    series: [
        {
            name: 'Visit',
            type: 'line',
            smooth: true,
            data: [140, 135, 95, 115, 95, 126, 93, 145, 115,
                140, 135, 95, 115, 95, 126, 125, 145, 115, 140,
                135, 95, 115, 95, 126, 93, 145, 115, 140, 135, 95],
            symbolSize: 8,
            showSymbol: false,
            lineStyle: {
                color: 'rgb(255, 87, 33)',
                opacity: 1,
                width: 1.5,
            },
            itemStyle: {
                show: false,
                color: '#ff5721',
                borderColor: '#ff5721',
                borderWidth: 1.5
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(255, 87, 33, 1)'
                        }, {
                            offset: 0.3, color: 'rgba(255, 87, 33, 0.7)'
                        }, {
                            offset: 1, color: 'rgba(255, 87, 33, 0)'
                        }]
                    }
                }
            }
        }
    ]
}

export const AreaChart2 = {
    tooltip: {
        trigger: 'axis',

        axisPointer: {
            animation: true
        }
    },
    grid: {
        left: '4%',
        top: '4%',
        right: '3%',
        bottom: '10%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct',
            'Nov', 'Dec'
        ],
        axisLabel: {
            formatter: '{value}',
            color: '#666',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 400,

        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        axisTick: {
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 200,
        interval: 50,
        axisLabel: {
            formatter: '{value}k',
            color: '#666',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 400,

        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        axisTick: {
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        splitLine: {
            lineStyle: {
                color: '#ddd',
                width: 1,
                opacity: 0.5
            }
        }
    },
    series: [
        {
            name: 'Visit',
            type: 'line',
            smooth: true,
            data: [140, 135, 95, 115, 95, 126, 93, 145, 115,
                140, 135, 95, 115, 95, 126, 125, 145, 115, 140,
                135, 95, 115, 95, 126, 93, 145, 115, 140, 135, 95],
            symbolSize: 8,
            showSymbol: false,
            lineStyle: {
                color: 'rgb(255, 87, 33)',
                opacity: 1,
                width: 1.5,
            },
            itemStyle: {
                show: false,
                color: '#ff5721',
                borderColor: '#ff5721',
                borderWidth: 1.5
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(255, 87, 33, 1)'
                        }, {
                            offset: 0.3, color: 'rgba(255, 87, 33, 0.7)'
                        }, {
                            offset: 1, color: 'rgba(255, 87, 33, 0)'
                        }]
                    }
                }
            }
        },
        {
            name: 'Sales',
            type: 'line',
            smooth: true,
            data: [50, 70, 65, 84, 75, 80, 70, 50, 70, 65,
                104, 75, 80, 70, 50, 70, 65, 94, 75, 80, 70, 50,
                70, 65, 86, 75, 80, 70, 50, 70],
            symbolSize: 8,
            showSymbol: false,
            lineStyle: {
                color: 'rgb(95, 107, 194)',
                opacity: 1,
                width: 1.5,
            },
            itemStyle: {
                color: '#5f6cc1',
                borderColor: '#5f6cc1',
                borderWidth: 1.5
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(95, 107, 194, 1)'
                        }, {
                            offset: 0.5, color: 'rgba(95, 107, 194, 0.7)'
                        }, {
                            offset: 1, color: 'rgba(95, 107, 194, 0)'
                        }]
                    }
                }
            }
        },
    ]
}

export const AreaChart3 = {
    tooltip: {
        trigger: 'axis',

        axisPointer: {
            animation: true
        }
    },
    grid: {
        left: '4%',
        top: '4%',
        right: '3%',
        bottom: '10%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'
        ],
        axisLabel: {
            formatter: '{value}',
            color: '#666',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 400,

        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        axisTick: {
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 200,
        interval: 50,
        axisLabel: {
            formatter: '{value}k',
            color: '#666',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 400,

        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        axisTick: {
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        splitLine: {
            lineStyle: {
                color: '#ddd',
                width: 1,
                opacity: 0.5
            }
        }
    },
    series: [
        {
            name: 'Impression',
            type: 'line',
            smooth: true,
            data: [140, 135, 95, 115, 95, 126, 93, 145, 115,
                140, 135, 95, 115, 95, 126, 125, 145, 115, 140,
                135, 95, 115, 95, 126, 93, 145, 115, 140, 135, 95],
            symbolSize: 8,
            lineStyle: {
                color: 'rgb(255, 87, 33)',
                opacity: 1,
                width: 1.5,
            },
            itemStyle: {
                color: '#ff5721',
                borderColor: '#ff5721',
                borderWidth: 1.5
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(255, 87, 33, 1)'
                        }, {
                            offset: 0.3, color: 'rgba(255, 87, 33, 0.7)'
                        }, {
                            offset: 1, color: 'rgba(255, 87, 33, 0)'
                        }]
                    }
                }
            }
        },
        {
            name: 'Clicks',
            type: 'line',
            smooth: true,
            data: [50, 70, 65, 84, 75, 80, 70, 50, 70, 65,
                104, 75, 80, 70, 50, 70, 65, 94, 75, 80, 70, 50,
                70, 65, 86, 75, 80, 70, 50, 70],
            symbolSize: 8,
            lineStyle: {
                color: 'rgb(95, 107, 194)',
                opacity: 1,
                width: 1.5,
            },
            itemStyle: {
                color: '#5f6cc1',
                borderColor: '#5f6cc1',
                borderWidth: 1.5
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(95, 107, 194, 1)'
                        }, {
                            offset: 0.5, color: 'rgba(95, 107, 194, 0.7)'
                        }, {
                            offset: 1, color: 'rgba(95, 107, 194, 0)'
                        }]
                    }
                }
            }
        },
    ]
}

export const AreaChart4 = {
    tooltip: {
        trigger: 'axis',

        axisPointer: {
            animation: true
        }
    },
    grid: {
        left: '4%',
        top: '4%',
        right: '3%',
        bottom: '10%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        axisLabel: {
            formatter: '{value}',
            color: '#666',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 400,

        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 150,
        interval: 50,
        axisLabel: {
            formatter: '{value}',
            color: '#666',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 400,

        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#ccc',
                width: 1
            }
        },
        splitLine: {
            lineStyle: {
                color: '#ddd',
                width: 1,
                opacity: 0.5
            }
        }
    },
    series: [
        {
            name: 'This Year',
            type: 'line',
            smooth: true,
            data: [55, 80, 60, 125, 95, 110, 80, 60, 95, 120, 85, 67],
            symbolSize: 8,
            lineStyle: {
                color: 'rgb(255, 112, 14)',
                opacity: 1,
                width: 1,
            },
            itemStyle: {
                color: '#ff5721',
                borderColor: '#ff5721',
                borderWidth: 1.5,
                normal: {
                    opacity: 0
                },
                emphasis: {
                    opacity: 1,
                    shadowColor: 'rgba(255, 112, 14, 1)',
                    shadowBlur: 30,
                }
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(255, 112, 14, 1)'
                        }, {
                            offset: 0.3, color: 'rgba(255, 112, 14, 0.7)'
                        }, {
                            offset: 1, color: 'rgba(255, 112, 14, 0)'
                        }]
                    }
                }
            }
        },
        {
            name: 'Last Year',
            type: 'line',
            showSymbol: false,
            smooth: true,
            data: [40, 45, 55, 35, 65, 20, 60, 20, 50, 40, 25, 10],
            symbolSize: 8,
            lineStyle: {
                show: true,
                color: 'rgb(73, 163, 77)',
                width: 1,
                opacity: 1,
            },
            itemStyle: {
                color: '#49a34d',
                borderColor: '#49a34d',
                borderWidth: 1.5,
                emphasis: {
                    opacity: 1,
                    shadowColor: 'rgba(73, 163, 77, 1)',
                    shadowBlur: 20,
                }
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(73, 163, 77, 1)'
                        }, {
                            offset: 0.5, color: 'rgba(73, 163, 77, 0.7)'
                        }, {
                            offset: 1, color: 'rgba(73, 163, 77, 0)'
                        }]
                    }
                }
            }
        }

    ]
}

export const AreaChart5 = {
    tooltip: {
        show: true,
        trigger: 'axis'
    },
    grid: {
        top: '5%',
        left: '2%',
        right: '2%',
        bottom: '3%',
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,

        axisLabel: {
            show: true,
            color: '#999',
            interval: 5,
            inside: false,
            align: 'center'
        },
        axisLine: {
            color: '#999',
            show: false,
            lineStyle: {
                color: '#999'
            }
        },
        axisTick: {
            interval: 0,
            show: false,
            lineStyle: {
                color: '#999'
            }
        }
    },
    yAxis: {
        type: 'value',

        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        type: 'line',
        smooth: true,
        showSymbol: false,
        itemStyle: {
            borderColor: '#009588'
        },
        lineStyle: {
            opacity: 1,
            width: 1,
        },
        areaStyle: {
            opacity: 1
        }
    }]
}

export const Timeriver = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: 'rgba(0,0,0,0.9)',
                width: 1,
                type: 'solid'
            }
        }
    },

    singleAxis: {
        top: 50,
        bottom: 50,
        axisLabel: {
            color: '#666'
        },
        type: 'time',
        axisPointer: {
            animation: true,
            label: {
                show: false
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                opacity: 0.2
            }
        },
        axisTick: {
            color: '#999',
            lineStyle: {
                color: '#e6e6e6',
                width: 1
            }
        },
        axisLine: {
            color: '#999',
            lineStyle: {
                color: '#e6e6e6',
                width: 1
            }
        }

    },

    series: [
        {
            type: 'themeRiver',
            itemStyle: {
                emphasis: {
                    shadowBlur: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.05)'
                }
            },
            label: {
                normal: {
                    show: false
                }
            }
        }
    ]
}

var upColor = '#f36c12';
var upBorderColor = '#f36c12';
var downColor = '#00da3c';
var downBorderColor = '#008F28';

function splitData(rawData) {
    var categoryData = [];
    var values = []
    for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i])
    }
    return {
        categoryData: categoryData,
        values: values
    };
}

function calculateMA(dayCount) {
    var result = [];
    for (var i = 0, len = data0.values.length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += data0.values[i - j][1];
        }
        result.push(sum / dayCount);
    }
    return result;
}

var data0 = splitData([
    ['2013/1/24', 2320.26, 2320.26, 2287.3, 2362.94],
    ['2013/1/25', 2300, 2291.3, 2288.26, 2308.38],
    ['2013/1/28', 2295.35, 2346.5, 2295.35, 2346.92],
    ['2013/1/29', 2347.22, 2358.98, 2337.35, 2363.8],
    ['2013/1/30', 2360.75, 2382.48, 2347.89, 2383.76],
    ['2013/1/31', 2383.43, 2385.42, 2371.23, 2391.82],
    ['2013/2/1', 2377.41, 2419.02, 2369.57, 2421.15],
    ['2013/2/4', 2425.92, 2428.15, 2417.58, 2440.38],
    ['2013/2/5', 2411, 2433.13, 2403.3, 2437.42],
    ['2013/2/6', 2432.68, 2434.48, 2427.7, 2441.73],
    ['2013/2/7', 2430.69, 2418.53, 2394.22, 2433.89],
    ['2013/2/8', 2416.62, 2432.4, 2414.4, 2443.03],
    ['2013/2/18', 2441.91, 2421.56, 2415.43, 2444.8],
    ['2013/2/19', 2420.26, 2382.91, 2373.53, 2427.07],
    ['2013/2/20', 2383.49, 2397.18, 2370.61, 2397.94],
    ['2013/2/21', 2378.82, 2325.95, 2309.17, 2378.82],
    ['2013/2/22', 2322.94, 2314.16, 2308.76, 2330.88],
    ['2013/2/25', 2320.62, 2325.82, 2315.01, 2338.78],
    ['2013/2/26', 2313.74, 2293.34, 2289.89, 2340.71],
    ['2013/2/27', 2297.77, 2313.22, 2292.03, 2324.63],
    ['2013/2/28', 2322.32, 2365.59, 2308.92, 2366.16],
    ['2013/3/1', 2364.54, 2359.51, 2330.86, 2369.65],
    ['2013/3/4', 2332.08, 2273.4, 2259.25, 2333.54],
    ['2013/3/5', 2274.81, 2326.31, 2270.1, 2328.14],
    ['2013/3/6', 2333.61, 2347.18, 2321.6, 2351.44],
    ['2013/3/7', 2340.44, 2324.29, 2304.27, 2352.02],
    ['2013/3/8', 2326.42, 2318.61, 2314.59, 2333.67],
    ['2013/3/11', 2314.68, 2310.59, 2296.58, 2320.96],
    ['2013/3/12', 2309.16, 2286.6, 2264.83, 2333.29],
    ['2013/3/13', 2282.17, 2263.97, 2253.25, 2286.33],
    ['2013/3/14', 2255.77, 2270.28, 2253.31, 2276.22],
    ['2013/3/15', 2269.31, 2278.4, 2250, 2312.08],
    ['2013/3/18', 2267.29, 2240.02, 2239.21, 2276.05],
    ['2013/3/19', 2244.26, 2257.43, 2232.02, 2261.31],
    ['2013/3/20', 2257.74, 2317.37, 2257.42, 2317.86],
    ['2013/3/21', 2318.21, 2324.24, 2311.6, 2330.81],
    ['2013/3/22', 2321.4, 2328.28, 2314.97, 2332],
    ['2013/3/25', 2334.74, 2326.72, 2319.91, 2344.89],
    ['2013/3/26', 2318.58, 2297.67, 2281.12, 2319.99],
    ['2013/3/27', 2299.38, 2301.26, 2289, 2323.48],
    ['2013/3/28', 2273.55, 2236.3, 2232.91, 2273.55],
    ['2013/3/29', 2238.49, 2236.62, 2228.81, 2246.87],
    ['2013/4/1', 2229.46, 2234.4, 2227.31, 2243.95],
    ['2013/4/2', 2234.9, 2227.74, 2220.44, 2253.42],
    ['2013/4/3', 2232.69, 2225.29, 2217.25, 2241.34],
    ['2013/4/8', 2196.24, 2211.59, 2180.67, 2212.59],
    ['2013/4/9', 2215.47, 2225.77, 2215.47, 2234.73],
    ['2013/4/10', 2224.93, 2226.13, 2212.56, 2233.04],
    ['2013/4/11', 2236.98, 2219.55, 2217.26, 2242.48],
    ['2013/4/12', 2218.09, 2206.78, 2204.44, 2226.26],
    ['2013/4/15', 2199.91, 2181.94, 2177.39, 2204.99],
    ['2013/4/16', 2169.63, 2194.85, 2165.78, 2196.43],
    ['2013/4/17', 2195.03, 2193.8, 2178.47, 2197.51],
    ['2013/4/18', 2181.82, 2197.6, 2175.44, 2206.03],
    ['2013/4/19', 2201.12, 2244.64, 2200.58, 2250.11],
    ['2013/4/22', 2236.4, 2242.17, 2232.26, 2245.12],
    ['2013/4/23', 2242.62, 2184.54, 2182.81, 2242.62],
    ['2013/4/24', 2187.35, 2218.32, 2184.11, 2226.12],
    ['2013/4/25', 2213.19, 2199.31, 2191.85, 2224.63],
    ['2013/4/26', 2203.89, 2177.91, 2173.86, 2210.58],
    ['2013/5/2', 2170.78, 2174.12, 2161.14, 2179.65],
    ['2013/5/3', 2179.05, 2205.5, 2179.05, 2222.81],
    ['2013/5/6', 2212.5, 2231.17, 2212.5, 2236.07],
    ['2013/5/7', 2227.86, 2235.57, 2219.44, 2240.26],
    ['2013/5/8', 2242.39, 2246.3, 2235.42, 2255.21],
    ['2013/5/9', 2246.96, 2232.97, 2221.38, 2247.86],
    ['2013/5/10', 2228.82, 2246.83, 2225.81, 2247.67],
    ['2013/5/13', 2247.68, 2241.92, 2231.36, 2250.85],
    ['2013/5/14', 2238.9, 2217.01, 2205.87, 2239.93],
    ['2013/5/15', 2217.09, 2224.8, 2213.58, 2225.19],
    ['2013/5/16', 2221.34, 2251.81, 2210.77, 2252.87],
    ['2013/5/17', 2249.81, 2282.87, 2248.41, 2288.09],
    ['2013/5/20', 2286.33, 2299.99, 2281.9, 2309.39],
    ['2013/5/21', 2297.11, 2305.11, 2290.12, 2305.3],
    ['2013/5/22', 2303.75, 2302.4, 2292.43, 2314.18],
    ['2013/5/23', 2293.81, 2275.67, 2274.1, 2304.95],
    ['2013/5/24', 2281.45, 2288.53, 2270.25, 2292.59],
    ['2013/5/27', 2286.66, 2293.08, 2283.94, 2301.7],
    ['2013/5/28', 2293.4, 2321.32, 2281.47, 2322.1],
    ['2013/5/29', 2323.54, 2324.02, 2321.17, 2334.33],
    ['2013/5/30', 2316.25, 2317.75, 2310.49, 2325.72],
    ['2013/5/31', 2320.74, 2300.59, 2299.37, 2325.53],
    ['2013/6/3', 2300.21, 2299.25, 2294.11, 2313.43],
    ['2013/6/4', 2297.1, 2272.42, 2264.76, 2297.1],
    ['2013/6/5', 2270.71, 2270.93, 2260.87, 2276.86],
    ['2013/6/6', 2264.43, 2242.11, 2240.07, 2266.69],
    ['2013/6/7', 2242.26, 2210.9, 2205.07, 2250.63],
    ['2013/6/13', 2190.1, 2148.35, 2126.22, 2190.1]
]);

export const CandleStick = {
    color: ['#003765', '#0167c1', '#4a92ea', '#88c2f9', '#5a99d5', '#017bff'],

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data: ['Dow Jones Index', 'MA5', 'MA10', 'MA20', 'MA30']
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '15%'
    },
    xAxis: {
        type: 'category',
        data: data0.categoryData,
        scale: true,
        boundaryGap: false,
        axisLine: {
            onZero: false,
            show: false,
            lineStyle: {
                color: '#000'
            }
        },
        axisLabel: {
            color: '#333'
        },
        splitLine: { show: false },
        splitArea: { show: false },
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax'
    },
    yAxis: {
        scale: true,
        splitArea: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    dataZoom: [
        {
            type: 'inside',
            start: 50,
            end: 100
        },
        {
            show: true,
            type: 'slider',
            y: '90%',
            start: 50,
            end: 100
        }
    ],
    series: [
        {
            name: 'Dow Jones Index',
            type: 'candlestick',
            data: data0.values,
            itemStyle: {
                normal: {
                    color: upColor,
                    color0: downColor,
                    borderColor: upBorderColor,
                    borderColor0: downBorderColor
                }
            },
            markPoint: {
                label: {
                    normal: {
                        formatter: function (param) {
                            return param != null ? Math.round(param.value) : '';
                        }
                    }
                },
                data: [
                    {
                        name: 'XX标点',
                        coord: ['2013/5/31', 2300],
                        value: 2300,
                        itemStyle: {
                            normal: { color: 'rgb(41,60,85)' }
                        }
                    },
                    {
                        name: 'highest value',
                        type: 'max',
                        valueDim: 'highest'
                    },
                    {
                        name: 'lowest value',
                        type: 'min',
                        valueDim: 'lowest'
                    },
                    {
                        name: 'average value on close',
                        type: 'average',
                        valueDim: 'close'
                    }
                ],
                tooltip: {
                    formatter: function (param) {
                        return param.name + '<br>' + (param.data.coord || '');
                    }
                }
            },
            markLine: {
                symbol: ['none', 'none'],
                data: [
                    [
                        {
                            name: 'from lowest to highest',
                            type: 'min',
                            valueDim: 'lowest',
                            symbol: 'circle',
                            symbolSize: 10,
                            label: {
                                normal: { show: false },
                                emphasis: { show: false }
                            }
                        },
                        {
                            type: 'max',
                            valueDim: 'highest',
                            symbol: 'circle',
                            symbolSize: 10,
                            label: {
                                normal: { show: false },
                                emphasis: { show: false }
                            }
                        }
                    ],
                    {
                        name: 'min line on close',
                        type: 'min',
                        valueDim: 'close'
                    },
                    {
                        name: 'max line on close',
                        type: 'max',
                        valueDim: 'close'
                    }
                ]
            }
        },
        {
            name: 'MA5',
            type: 'line',
            data: calculateMA(5),
            smooth: true,
            lineStyle: {
                normal: { opacity: 0.5 }
            }
        },
        {
            name: 'MA10',
            type: 'line',
            data: calculateMA(10),
            smooth: true,
            lineStyle: {
                normal: { opacity: 0.5 }
            }
        },
        {
            name: 'MA20',
            type: 'line',
            data: calculateMA(20),
            smooth: true,
            lineStyle: {
                normal: { opacity: 0.5 }
            }
        },
        {
            name: 'MA30',
            type: 'line',
            data: calculateMA(30),
            smooth: true,
            lineStyle: {
                normal: { opacity: 0.5 }
            }
        },

    ]
}

// HeatMap Option
export const HeatMap = {
    tooltip: {
        position: 'top'
    },
    animation: true,
    grid: {
        y: '5%',
        top: '15%',
        bottom: '10%',
        left: '5%',
        right: '3%'
    },
    xAxis: {
        show: true,
        type: 'category',
        splitArea: {
            show: true
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        show: true,
        type: 'category',
        position: 'top',
        nameLocation: 'middle',
        axisLabel: {
            show: true
        },
        splitArea: {
            show: true
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    visualMap: {
        calculable: true,
        orient: 'horizontal',
        top: '0%',
        right: '0%',
        color: ['#f70500', '#f86200', '#f86200', '#f8c800', '#f7f88e']
    },
    series: [{
        type: 'heatmap',
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
}

// Treemap Option
export const TreeMap = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        formatter: "{a} <br />{b} - {c}%"
    },
    xAxis: {
        show: false,

        axisTick: {
            show: false
        }
    },

    grid: {
        top: '2%',
        left: '10%',
        bottom: '2%',
        right: '30%',
    },
    series: [
        {
            type: 'tree',
            name: 'Traffic In',
            left: '20%',
            right: '50%',

            data: [
                {
                    "children": [
                        {
                            name: "Direct",
                            value: "36.52",
                            symbolSize: 10,

                            itemStyle: {
                                borderColor: '#d94e20'
                            },
                            label: {
                                color: '#d94e20',
                                position: 'left',
                                verticalAlign: 'middle',
                                align: 'right',
                                fontSize: 15,
                                fontWeight: 'Normal',
                                fontFamily: 'Roboto'
                            },
                            lineStyle: {
                                color: '#d94e20',
                                width: 2,
                                curveness: 0.5
                            },

                        },
                        {
                            name: "Google",
                            value: "35.20",
                            symbolSize: 10,
                            itemStyle: {
                                borderColor: '#ef8b2c'
                            },
                            label: {
                                color: '#ef8b2c',
                                position: 'left',
                                verticalAlign: 'middle',
                                align: 'right',
                                fontSize: 15,
                                fontWeight: 'Normal',
                                fontFamily: 'Roboto'
                            },
                            lineStyle: {
                                color: '#ef8b2c',
                                width: 2,
                                curveness: 0.5
                            }

                        },
                        {
                            name: "Facebook",
                            value: "35.20",
                            symbolSize: 10,
                            itemStyle: {
                                borderColor: '#3f51b5'
                            },
                            label: {
                                color: '#3f51b5',
                                position: 'left',
                                verticalAlign: 'middle',
                                align: 'right',
                                fontSize: 15,
                                fontWeight: 'Normal',
                                fontFamily: 'Roboto'
                            },
                            lineStyle: {
                                color: '#3f51b5',
                                width: 2,
                                curveness: 0.5
                            }


                        },
                        {
                            name: "Youtube",
                            value: "35.20",
                            symbolSize: 10,
                            itemStyle: {
                                borderColor: '#c02f1d'
                            },
                            label: {
                                color: '#c02f1d',
                                position: 'left',
                                verticalAlign: 'middle',
                                align: 'right',
                                fontSize: 15,
                                fontWeight: 'Normal',
                                fontFamily: 'Roboto'
                            },
                            lineStyle: {
                                color: '#c02f1d',
                                width: 2,
                                curveness: 0.5
                            }

                        },
                        {
                            name: "Twitter",
                            value: "35.20",
                            symbolSize: 10,
                            itemStyle: {
                                borderColor: '#1294ba'
                            },
                            label: {
                                color: '#1294ba',
                                position: 'left',
                                verticalAlign: 'middle',
                                align: 'right',
                                fontSize: 15,
                                fontWeight: 'Normal',
                                fontFamily: 'Roboto'
                            },
                            lineStyle: {
                                color: '#1294ba',
                                width: 2,
                                curveness: 0.5
                            }


                        },
                        {
                            name: "Others",
                            value: "35.20",
                            symbolSize: 10,
                            itemStyle: {
                                borderColor: '#0f5a78'
                            },
                            label: {
                                color: '#0f5a78',
                                position: 'left',
                                verticalAlign: 'middle',
                                align: 'right',
                                fontSize: 15,
                                fontWeight: 'Normal',
                                fontFamily: 'Roboto'
                            },
                            lineStyle: {
                                color: '#0f5a78',
                                width: 2,
                                curveness: 0.5
                            }


                        }
                    ]

                }
            ],


            symbolSize: 10,
            orient: 'RL',

            label: {
                normal: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'right'
                }
            },

            lineStyle: {
                color: '#aaa',
                width: 1.5,
                curveness: 0.5
            },

            leaves: {
                color: '#eee',
                label: {
                    fontSize: 15,
                    normal: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                }
            },

            expandAndCollapse: false,

            animationDuration: 550,
            animationDurationUpdate: 750

        },
        {
            type: 'tree',
            name: 'Trafic Out',
            left: '50%',
            right: '20%',

            data: [
                {
                    "children": [
                        {
                            name: "github.com",
                            value: "15.50",
                            symbolSize: 10,

                            itemStyle: {
                                borderColor: '#d94e20'
                            },
                            label: {
                                color: '#d94e20',
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left',
                                fontSize: 15,
                                fontWeight: 'Normal',
                                fontFamily: 'Roboto'
                            },
                            lineStyle: {
                                color: '#d94e20',
                                width: 2,
                                curveness: 0.5
                            },

                        },
                        {
                            name: "paypal",
                            value: "15.50",
                            symbolSize: 10,
                            itemStyle: {
                                borderColor: '#ef8b2c'
                            },
                            label: {
                                color: '#ef8b2c',
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left',
                                fontSize: 15,
                                fontWeight: 'Normal',
                                fontFamily: 'Roboto'
                            },
                            lineStyle: {
                                color: '#ef8b2c',
                                width: 2,
                                curveness: 0.5
                            }

                        },
                        {
                            name: "Facebook",
                            value: "15.50",
                            symbolSize: 10,
                            itemStyle: {
                                borderColor: '#3f51b5'
                            },
                            label: {
                                color: '#3f51b5',
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left',
                                fontSize: 15,
                                fontWeight: 'Normal',
                                fontFamily: 'Roboto'
                            },
                            lineStyle: {
                                color: '#3f51b5',
                                width: 2,
                                curveness: 0.5
                            }
                        },
                        {
                            name: "Youtube",
                            value: "15.50",
                            symbolSize: 10,
                            itemStyle: {
                                borderColor: '#c02f1d'
                            },
                            label: {
                                color: '#c02f1d',
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left',
                                fontSize: 15,
                                fontWeight: 'Normal',
                                fontFamily: 'Roboto'
                            },
                            lineStyle: {
                                color: '#c02f1d',
                                width: 2,
                                curveness: 0.5
                            }
                        },
                        {
                            name: "Twitter",
                            value: "15.50",
                            symbolSize: 10,
                            itemStyle: {
                                borderColor: '#1294ba'
                            },
                            label: {
                                color: '#1294ba',
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left',
                                fontSize: 15,
                                fontWeight: 'Normal',
                                fontFamily: 'Roboto'
                            },
                            lineStyle: {
                                color: '#1294ba',
                                width: 2,
                                curveness: 0.5
                            }
                        },
                        {
                            name: "Others",
                            value: "15.50",
                            symbolSize: 10,
                            itemStyle: {
                                borderColor: '#0f5a78'
                            },
                            label: {
                                color: '#0f5a78',
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left',
                                fontSize: 15,
                                fontWeight: 'Normal',
                                fontFamily: 'Roboto'
                            },
                            lineStyle: {
                                color: '#0f5a78',
                                width: 2,
                                curveness: 0.5
                            }
                        }
                    ]
                }
            ],

            symbolSize: 10,
            orient: 'LR',

            label: {
                normal: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'right'
                }
            },

            lineStyle: {
                color: '#aaa',
                width: 1.5,
                curveness: 0.5
            },

            leaves: {
                color: '#eee',
                label: {
                    fontSize: 15,
                    normal: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                }
            },

            expandAndCollapse: false,
            animationDuration: 550,
            animationDurationUpdate: 750

        }

    ]
}