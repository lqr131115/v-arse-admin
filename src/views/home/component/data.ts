import { EChartsOption } from "echarts";

export const categoryRankOpts: EChartsOption = {
  title: [
    {
      text: "品牌分布",
      textStyle: {
        color: "#000",
        fontSize: 14,
      },
    },
    {
      text: "累计订单量",
      subtext: "100",
      textStyle: {
        fontSize: 14,
        color: "#999",
      },
      subtextStyle: {
        fontSize: 28,
        color: "#333",
      },
      left: "49%",
      top: "42%",
      textAlign: "center",
    },
  ],
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "right",
    top: "30%",
  },
  series: [
    {
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
    },
  ],
};

export const getKeywordSearchOpts = (echarts: any): EChartsOption => {
  return {
    title: {
      text: "搜索用户数",
      textStyle: {
        color: "#666",
        fontSize: 12,
      },
      subtext: "93,132",
      subtextStyle: {
        color: "#000",
        fontSize: 28,
      },
    },
    dataset: {
      source: [
        ["2000-06-05", 116],
        ["2000-06-06", 129],
        ["2000-06-07", 135],
        ["2000-06-08", 86],
        ["2000-06-09", 73],
        ["2000-06-10", 85],
        ["2000-06-11", 73],
        ["2000-06-12", 68],
        ["2000-06-13", 92],
        ["2000-06-14", 130],
        ["2000-06-15", 245],
        ["2000-06-16", 139],
        ["2000-06-17", 115],
        ["2000-06-18", 111],
        ["2000-06-19", 309],
        ["2000-06-20", 206],
        ["2000-06-21", 137],
        ["2000-06-22", 128],
        ["2000-06-23", 85],
        ["2000-06-24", 94],
        ["2000-06-25", 71],
        ["2000-06-26", 106],
        ["2000-06-27", 84],
        ["2000-06-28", 93],
        ["2000-06-29", 85],
        ["2000-06-30", 73],
        ["2000-07-01", 83],
        ["2000-07-02", 125],
        ["2000-07-03", 107],
        ["2000-07-04", 82],
        ["2000-07-05", 44],
        ["2000-07-06", 72],
        ["2000-07-07", 106],
        ["2000-07-08", 107],
        ["2000-07-09", 66],
        ["2000-07-10", 91],
        ["2000-07-11", 92],
        ["2000-07-12", 113],
        ["2000-07-13", 107],
        ["2000-07-14", 131],
        ["2000-07-15", 111],
        ["2000-07-16", 64],
        ["2000-07-17", 69],
        ["2000-07-18", 88],
        ["2000-07-19", 77],
        ["2000-07-20", 83],
        ["2000-07-21", 111],
        ["2000-07-22", 57],
        ["2000-07-23", 55],
        ["2000-07-24", 60],
      ],
    },
    xAxis: {
      show: false,
      type: "category",
      boundaryGap: false,
    },
    yAxis: {
      show: false,
    },
    grid: {
      left: 0,
      top: 20,
      right: 0,
      bottom: 0,
    },
    series: [
      {
        type: "line",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(0, 221, 203)",
            },
            {
              offset: 1,
              color: "rgb(77, 119, 203)",
            },
          ]),
        },
        itemStyle: {
          opacity: 0,
        },
        encode: { x: 0, y: 1 },
      },
    ],
  };
};

export type rankItem = {
  no: number;
  name: string;
  money: string;
};

export const rankData: rankItem[] = [
  {
    no: 1,
    name: "麦当劳",
    money: "$ 1,234",
  },
  {
    no: 2,
    name: "麦当劳",
    money: "$ 1,234",
  },
  {
    no: 3,
    name: "麦当劳",
    money: "$ 1,234",
  },
  {
    no: 4,
    name: "麦当劳",
    money: "$ 1,234",
  },
  {
    no: 5,
    name: "麦当劳",
    money: "$ 1,234",
  },
  {
    no: 6,
    name: "麦当劳",
    money: "$ 1,234",
  },
  {
    no: 7,
    name: "麦当劳",
    money: "$ 1,234",
  },
  {
    no: 8,
    name: "麦当劳",
    money: "$ 1,234",
  },
  {
    no: 9,
    name: "麦当劳",
    money: "$ 1,234",
  },
  {
    no: 10,
    name: "麦当劳",
    money: "$ 1,234",
  },
  {
    no: 11,
    name: "麦当劳",
    money: "$ 1,234",
  },
  {
    no: 12,
    name: "麦当劳",
    money: "$ 1,234",
  },
  {
    no: 13,
    name: "麦当劳",
    money: "$ 1,234",
  },
  {
    no: 14,
    name: "麦当劳",
    money: "$ 1,234",
  },
  {
    no: 15,
    name: "麦当劳",
    money: "$ 1,234",
  },
];

export const shortcuts = [
  {
    text: "前一周",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
  {
    text: "前一个月",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    },
  },
  {
    text: "前三个月",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    },
  },
];

export const getSalesViewOpts = (echarts: any): EChartsOption => {
  return {
    title: {
      text: "年度销售额",
      textStyle: {
        color: "#000",
      },
    },
    xAxis: {
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#999",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    dataZoom: [
      {
        type: "inside",
      },
    ],
    grid: {
      left: 40,
      right: 10,
    },
    series: [
      {
        type: "bar",
        barWidth: 20,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" },
            ]),
          },
        },
        data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149],
      },
    ],
  };
};

export const getTodayUsersOpts = (echarts: any): EChartsOption => {
  return {
    xAxis: {
      type: "category",
      data: [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
      ],
      show: false,
    },
    yAxis: {
      type: "value",
      show: false,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    series: [
      {
        type: "bar",
        itemStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(55, 162, 255)",
            },
            {
              offset: 1,
              color: "rgb(116, 21, 219)",
            },
          ]),
        },
        data: [120, 200, 80, 110, 70, 150, 80, 70, 110, 130, 100, 140, 90, 100],
      },
    ],
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  };
};

export const getTotalUsersOpts = (echarts: any): EChartsOption => {
  return {
    xAxis: {
      type: "value",
      boundaryGap: false,
      show: false,
    },
    yAxis: {
      type: "category",
      show: false,
    },
    grid: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    series: [
      {
        type: "bar",
        stack: "总量",
        barWidth: 15,
        itemStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 191, 0)",
            },
            {
              offset: 1,
              color: "rgb(224, 62, 76)",
            },
          ]),
        },
        data: [220],
      },
      {
        type: "bar",
        stack: "总量",
        itemStyle: {
          opacity: 0.8,
          color: "#eee",
        },
        data: [290],
      },
    ],
  };
};

export const getTotalOrdersOpts = (echarts: any): EChartsOption => {
  return {
    xAxis: {
      type: "category",
      boundaryGap: false,
      show: false,
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        type: "line",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        itemStyle: {
          opacity: 0,
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(128, 255, 165)",
            },
            {
              offset: 1,
              color: "rgb(1, 191, 236)",
            },
          ]),
        },
        data: [320, 132, 201, 334, 190, 130, 220, 140, 310, 157],
      },
    ],
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  };
};
