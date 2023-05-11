// 表单 options
export let formOptions = {
    column: [],
    labelPosition: 'left',
    labelSuffix: '：',
    labelWidth: 120,
    gutter: 0,
    menuBtn: true,
    submitBtn: true,
    submitText: '提交',
    emptyBtn: true,
    emptyText: '清空',
    menuPosition: 'center',
    submitParams: 'jsonData',
    objectCode: 'lmb_contract',
    disabled: false,
    detail: false,
    group: [
        {
            label: '场地',
            prop: 'place',
            arrow: false,
            collapse: true,
            display: true,
            column: [
                {
                    type: 'input',
                    isCrud: true,
                    label: '场地名',
                    span: 12,
                    display: true,
                    prop: 'place_name',
                    elId: 'place_name',
                    cruds: [],
                    propCrudValue: 'place_name_crudValue',
                    isCustomProp: true
                },
                {
                    type: 'dynamic',
                    label: '子场地',
                    span: 24,
                    display: true,
                    version: '1.0',
                    children: {
                        align: 'center',
                        headerAlign: 'center',
                        index: false,
                        addBtn: true,
                        delBtn: true,
                        clearBtn: false,
                        selection: false,
                        column: [
                            {
                                type: 'radio',
                                label: '条件A',
                                dicData: [
                                    {
                                        label: '选项一',
                                        value: '0'
                                    },
                                    {
                                        label: '选项二',
                                        value: '1'
                                    },
                                    {
                                        label: '选项三',
                                        value: '2'
                                    }
                                ],
                                span: 24,
                                display: true,
                                dicOption: 'static',
                                props: {
                                    label: 'label',
                                    value: 'value'
                                },
                                prop: 'condition_a',
                                elId: 'a168378726206291354',
                                cruds: [],
                                isCustomProp: false
                            },
                            {
                                type: 'checkbox',
                                label: '条件B',
                                dicData: [
                                    {
                                        label: '选项一',
                                        value: '0'
                                    },
                                    {
                                        label: '选项二',
                                        value: '1'
                                    },
                                    {
                                        label: '选项三',
                                        value: '2'
                                    }
                                ],
                                span: 24,
                                display: true,
                                dicOption: 'static',
                                props: {
                                    label: 'label',
                                    value: 'value'
                                },
                                prop: 'condition_b',
                                elId: 'a168378726464296443',
                                cruds: []
                            },
                            {
                                type: 'select',
                                label: '条件C',
                                dicData: [
                                    {
                                        label: '选项一',
                                        value: '0'
                                    },
                                    {
                                        label: '选项二',
                                        value: '1'
                                    },
                                    {
                                        label: '选项三',
                                        value: '2'
                                    }
                                ],
                                span: 24,
                                display: true,
                                dicOption: 'static',
                                props: {
                                    label: 'label',
                                    value: 'value',
                                    desc: 'desc'
                                },
                                prop: 'condition_c',
                                elId: 'a168378732679896468',
                                cruds: [],
                                cascader: []
                            }
                        ]
                    },
                    prop: 'place_child',
                    elId: 'eova_user_code',
                    cruds: [],
                    isCustomProp: true,
                    objectCode: 'eova_user_code'
                }
            ]
        },
        {
            label: '网点',
            prop: 'area',
            arrow: false,
            collapse: true,
            display: true,
            column: [
                {
                    type: 'input',
                    isCrud: true,
                    label: '网点名',
                    span: 12,
                    display: true,
                    prop: 'area_name',
                    elId: 'area_name',
                    cruds: [],
                    propCrudValue: 'area_name_crudValue',
                    isCustomProp: true
                },
                {
                    type: 'dynamic',
                    label: '子网点',
                    span: 24,
                    display: true,
                    version: '1.0',
                    children: {
                        align: 'center',
                        headerAlign: 'center',
                        index: false,
                        addBtn: true,
                        delBtn: true,
                        clearBtn: false,
                        selection: false,
                        column: [
                            {
                                type: 'radio',
                                label: '条件A',
                                dicData: [
                                    {
                                        label: '选项一',
                                        value: '0'
                                    },
                                    {
                                        label: '选项二',
                                        value: '1'
                                    },
                                    {
                                        label: '选项三',
                                        value: '2'
                                    }
                                ],
                                span: 24,
                                display: true,
                                dicOption: 'static',
                                props: {
                                    label: 'label',
                                    value: 'value'
                                },
                                prop: 'condition_a',
                                elId: 'a168378735976456013',
                                cruds: []
                            },
                            {
                                type: 'checkbox',
                                label: '条件B',
                                dicData: [
                                    {
                                        label: '选项一',
                                        value: '0'
                                    },
                                    {
                                        label: '选项二',
                                        value: '1'
                                    },
                                    {
                                        label: '选项三',
                                        value: '2'
                                    }
                                ],
                                span: 24,
                                display: true,
                                dicOption: 'static',
                                props: {
                                    label: 'label',
                                    value: 'value'
                                },
                                prop: 'condition_b',
                                elId: 'a168378737344251350',
                                cruds: []
                            },
                            {
                                type: 'select',
                                label: '条件C',
                                dicData: [
                                    {
                                        label: '选项一',
                                        value: '0'
                                    },
                                    {
                                        label: '选项二',
                                        value: '1'
                                    },
                                    {
                                        label: '选项三',
                                        value: '2'
                                    }
                                ],
                                span: 24,
                                display: true,
                                dicOption: 'static',
                                props: {
                                    label: 'label',
                                    value: 'value',
                                    desc: 'desc'
                                },
                                prop: 'condition_c',
                                elId: 'a168378737518681038',
                                cruds: [],
                                cascader: []
                            }
                        ]
                    },
                    prop: 'area_child',
                    elId: 'a168378721217652962',
                    cruds: []
                }
            ]
        },
        {
            label: '商户',
            prop: 'biz',
            arrow: false,
            collapse: true,
            display: true,
            column: [
                {
                    type: 'input',
                    isCrud: true,
                    label: '商户名',
                    span: 12,
                    display: true,
                    prop: 'biz_name',
                    elId: 'biz_name',
                    cruds: [],
                    propCrudValue: 'biz_name_crudValue',
                    isCustomProp: true
                },
                {
                    type: 'dynamic',
                    label: '子商户',
                    span: 24,
                    display: true,
                    version: '1.0',
                    children: {
                        align: 'center',
                        headerAlign: 'center',
                        index: false,
                        addBtn: true,
                        delBtn: true,
                        clearBtn: false,
                        selection: false,
                        column: [
                            {
                                type: 'radio',
                                label: '条件A',
                                dicData: [
                                    {
                                        label: '选项一',
                                        value: '0'
                                    },
                                    {
                                        label: '选项二',
                                        value: '1'
                                    },
                                    {
                                        label: '选项三',
                                        value: '2'
                                    }
                                ],
                                span: 24,
                                display: true,
                                dicOption: 'static',
                                props: {
                                    label: 'label',
                                    value: 'value'
                                },
                                prop: 'condition_a',
                                elId: 'a168378738554767021',
                                cruds: []
                            },
                            {
                                type: 'checkbox',
                                label: '条件B',
                                dicData: [
                                    {
                                        label: '选项一',
                                        value: '0'
                                    },
                                    {
                                        label: '选项二',
                                        value: '1'
                                    },
                                    {
                                        label: '选项三',
                                        value: '2'
                                    }
                                ],
                                span: 24,
                                display: true,
                                dicOption: 'static',
                                props: {
                                    label: 'label',
                                    value: 'value'
                                },
                                prop: 'condition_b',
                                elId: 'a168378738683572202',
                                cruds: []
                            },
                            {
                                type: 'select',
                                label: '条件C',
                                dicData: [
                                    {
                                        label: '选项一',
                                        value: '0'
                                    },
                                    {
                                        label: '选项二',
                                        value: '1'
                                    },
                                    {
                                        label: '选项三',
                                        value: '2'
                                    }
                                ],
                                span: 24,
                                display: true,
                                dicOption: 'static',
                                props: {
                                    label: 'label',
                                    value: 'value',
                                    desc: 'desc'
                                },
                                prop: 'condition_c',
                                elId: 'a168378738869199356',
                                cruds: [],
                                cascader: []
                            }
                        ]
                    },
                    prop: 'biz_child',
                    elId: 'a168378721660175248',
                    cruds: []
                }
            ]
        }
    ]
}

// 脑图 options
export let mindOptions = {
    container: 'layout', // 容器
    theme: 'primary', // 主题
    editable: true, // 是否可编辑
    mode: 'side', // 模式 side:侧边栏模式 full:全屏模式
    shortcut: {
        enable: true, // 是否启用快捷键
    }
}
