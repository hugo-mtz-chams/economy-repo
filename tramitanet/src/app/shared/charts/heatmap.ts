
export const OptionHeatMap = {

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
        color: ['#f70500', '#f86200', '#f86200',  '#f8c800', '#f7f88e' ]
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
