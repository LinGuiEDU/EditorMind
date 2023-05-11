// 导入 jsmind 样式
import 'jsmind/style/jsmind.css';
// 导入 jsmind.js 作用是渲染思维导图
import jsMind from 'jsmind/js/jsmind.js';
// @ts-ignore
window.jsMind = jsMind;
// 导入 jsmind.screenshot 作用是截图
import 'jsmind/js/jsmind.screenshot.js';
// 导入 jsmind.draggable 作用是拖拽
import 'jsmind/js/jsmind.draggable-node.js';
// 导入配置数据
import {mindOptions, formOptions} from './config';

let _this: any = null;
export default class EditorMind {
    constructor() {
        _this = this;
        _this.init();
    }

    // 初始化编辑器
    init() {
        let data = _this.handleData();
        _this.jm = jsMind.show(mindOptions, data);
        window.onresize = () => {
            _this.jm.resize();
        }
    }

    // 处理数据
    handleData() {
        let data: any = {
            meta: {
                name: 'jsMind-demo',
                author: 'lg',
                version: '0.2'
            },
            format: 'node_tree', // 格式 node_tree:节点树
            data: {
                id: 'root', // 根节点
                topic: '表单节点树', // 根节点名称
                direction: 'right', // 根节点方向
                children: [ // 子节点
                    {
                        id: 'sub1',
                        topic: 'sub111',
                        children: [
                            {
                                id: 'sub12',
                                topic: 'sub12',
                            }
                        ]
                    }
                ]
            }
        }
        // 节点树
        let children: Array<any> = [];
        formOptions.group.map((item_g: any, index_g: number) => {
            // 表单分组
            let obj_g: any = {
                id: item_g.prop,
                topic: item_g.label,
                children: []
            }
            if (item_g.column) {
                item_g.column.map((item_g_c: any, index_g_c: number) => {
                    // 分组组件与子表
                    let obj_g_c: any = {
                        id: item_g_c.prop,
                        topic: item_g_c.label,
                        children: []
                    }
                    if (item_g_c.children && item_g_c.children.column) {
                        item_g_c.children.column.map((item_g_c_c: any, index_g_c_c: number) => {
                            // 子表组件
                            let obj_g_c_c: any = {
                                id: item_g_c_c.elId || item_g_c_c.prop,
                                topic: item_g_c_c.label,
                                children: []
                            }
                            obj_g_c.children.push(obj_g_c_c);
                        })
                    }
                    console.log(obj_g_c)
                    obj_g.children.push(obj_g_c)
                })
            }
            children.push(obj_g);
        })
        data.data.children = children;
        return data
    }
}
