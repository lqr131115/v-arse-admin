import { FormOptions } from "@/types/component";

export const options: FormOptions[] = [
  {
    type: "input",
    value: "",
    label: "用户名",
    prop: "username",
    placeholder: "请输入用户名",
    rule: [
      {
        required: true,
        message: "用户名不能为空",
        trigger: "blur",
      },
      {
        min: 3,
        max: 10,
        message: "用户名3-10位",
        trigger: "blur",
      },
    ],
  },
  {
    type: "input",
    value: "",
    label: "密码",
    prop: "password",
    placeholder: "请输入密码",
    rule: [
      {
        required: true,
        message: "密码不能为空",
        trigger: "blur",
      },
      {
        min: 6,
        max: 15,
        message: "密码6-15位",
        trigger: "blur",
      },
    ],
    attrs: {
      showPassword: true,
    },
  },
  {
    type: "select",
    value: "",
    label: "职位",
    prop: "job",
    placeholder: "请选择职位",
    rule: [
      {
        required: true,
        message: "请选择职位",
        trigger: "change",
      },
    ],
    attrs: {
      clearable: true,
      style: {
        width: "100%",
      },
    },
    children: [
      {
        type: "option",
        value: "1",
        label: "董事长",
      },
      {
        type: "option",
        value: "2",
        label: "经理",
      },
      {
        type: "option",
        value: "3",
        label: "员工",
      },
    ],
  },
  {
    type: "checkbox-group",
    value: [],
    label: "爱好",
    prop: "hobby",
    rule: [
      {
        required: true,
        message: "爱好不能为空",
        trigger: "change",
      },
    ],
    children: [
      {
        type: "checkbox",
        value: "1",
        label: "足球",
      },
      {
        type: "checkbox",
        value: "2",
        label: "篮球",
      },
      {
        type: "checkbox",
        value: "3",
        label: "排球",
      },
    ],
  },
  {
    type: "radio-group",
    value: "",
    label: "性别",
    prop: "sex",
    children: [
      {
        type: "radio",
        label: "男",
        value: "male",
      },
      {
        type: "radio",
        label: "女",
        value: "female",
      },
      {
        type: "radio",
        label: "保密",
        value: "secret",
      },
    ],
  },
  {
    type: "switch",
    value: false,
    label: "记住我",
    prop: "remember",
  },
  {
    type: "date-picker",
    value: [],
    label: "日期",
    prop: "time",
    placeholder: "请选择日期",
    attrs: {
      type: "datetimerange",
      startPlaceholder: "Start date",
      endPlaceholder: "End date",
    },
  },
  {
    type: "upload",
    label: "上传",
    prop: "pic",
    // rule: [
    //   {
    //     required: true,
    //     message: "上传图片不能为空",
    //     trigger: "blur",
    //   },
    // ],
    uploadAttrs: {
      action: "https://jsonplaceholder.typicode.com/posts/",
      multiple: true,
      limit: 2,
    },
  },
  {
    type: "editor",
    value: "",
    prop: "desc",
    label: "描述",
    placeholder: "请输入描述",
    rule: [
      {
        required: true,
        message: "描述不能为空",
        trigger: "blur",
      },
    ],
  },
  {
    type: "markdown",
    value: "",
    prop: "detail",
    label: "详情",
    placeholder: "请输入描述",
  },
];
