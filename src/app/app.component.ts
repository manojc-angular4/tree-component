import { Component, OnInit } from '@angular/core';
import { TreeNode, ITreeOptions } from "angular-tree-component";
import { ITreeNode } from "angular-tree-component/dist/defs/api";

import * as data from "./data.json";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Angular 2/4 Tree Component';
    nodes = [];
    nodeId = 0;

    options: ITreeOptions = {
        displayField: "name",
        idField: "id",
        childrenField: "children"
    }

    ngOnInit(): void {
        // this.nodeId = 0;
        // this.createNodes(5);
        this.translate(data.constructor === Array ? data: [data]);
    }

    translate(node: any, name?: string | number, root?: any) {
        if (!node) {
            return;
        }

        if ((!name && name !== 0) ||  !root) {
            root = root || {};
            root.name = "Root";
            root.id = ++this.nodeId;
            root.children = [];            
        }

        if (node.constructor === Array) {
            root.name = name;
            root.id = ++this.nodeId;
            root.children = [];
            node.forEach((item, index) => {
                root = this.translate(item, index, root);
            });
        }

        if (node.constructor === Object) {
            root.name = name;
            root.id = ++this.nodeId;
            root.children = [];
            Object.keys(node).forEach((key,  index) => {
                root = this.translate(node[key], key, root);
            });
        }

        root.value = node;
        return root;
    }

    nodeChecked(node, isChecked) {
        this.updateChildren(node, isChecked);
        this.updateParent(node.parent);
    }

    updateChildren(node, isChecked) {
        node.data.isChecked = isChecked;
        if (node.hasChildren) {
            node[this.options.childrenField].forEach(child => this.updateChildren(child, isChecked));
        }
    }

    updateParent(node) {
        if (!node || node.data.virtual) {
            return;
        }
        let isChecked = true;
        if (node.hasChildren) {
            node[this.options.childrenField].forEach(child => isChecked = child.data.isChecked && isChecked);
        }
        node.data.isChecked = isChecked;
        this.updateParent(node.parent);
    }

    onEvent(event) {
        if (event.node) {
            if (event.node.data) {
                console.log(event.eventName, ' - ', event.node.data[this.options.idField]);
                return;
            }
            console.log(event);
        }
    }

    createNodes(count: number) {
        let nodes = [];
        this.nodeId = 1;

        for (var index = 0; index < count; index++) {
            let depth: number = Math.floor(Math.random() * 10);
            while (depth < 2 || depth > 5) {
                depth = Math.floor(Math.random() * 10);
            }

            let node = this.buildNode('node  ' + this.nodeId, []);

            node = this.addChildren(node, depth);
            nodes.push(node);
        }
        this.nodeId = -1;
        this.nodes = [this.buildNode('Root Element', nodes)];
    }

    addChildren(node, depth): any {

        if (depth <= 0) {
            return node;
        }

        node[this.options.childrenField] = node[this.options.childrenField] || [];
        let childNode: any;

        let childCount: number = Math.floor(Math.random() * 10);
        while (childCount < 6 || childCount > 6) {
            childCount = Math.floor(Math.random() * 10);
        }

        for (var child = 0; child < childCount; child++) {
            childNode = this.buildNode('node  ' + this.nodeId, []);
            childNode = this.addChildren(childNode, depth - 1);
            node[this.options.childrenField].push(childNode);
        }
        return node;
    }

    buildNode(name, nodes) {
        let node: any = {};
        node[this.options.displayField] = name;
        node[this.options.idField] = ++this.nodeId;
        node[this.options.childrenField] = nodes || [];
        return node;
    }
}