import { Component, OnInit } from '@angular/core';
import { TreeNode } from "angular-tree-component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Angular 2/4 Tree Component';
    nodes = [];
    nodeId = 0;

    ngOnInit(): void {
        this.createNodes(5);
    }

    nodeChecked(node, isChecked) {
        this.updateChildren(node, isChecked);
        this.updateParent(node.parent);
    }

    updateChildren(node, isChecked) {
        node.data.isChecked = isChecked;
        if (node.hasChildren) {
            node.children.forEach(child => this.updateChildren(child, isChecked));
        }
    }

    updateParent(node) {
        if (!node || node.data.virtual) {
            return;
        }
        let isChecked = true;
        if (node.hasChildren) {
            node.children.forEach(child => isChecked = child.data.isChecked && isChecked);
        }
        node.data.isChecked = isChecked;
        this.updateParent(node.parent);
    }

    onEvent(event) {
        if (event.node) {
            if (event.node.data) {
                console.log(event.eventName, ' - ', event.node.data.id);
                return;
            }
            console.log(event);
        }
    }

    createNodes(count: number) {
        let nodes= [];
        this.nodeId = 0;

        for (var index = 0; index < count; index++) {
            let depth: number = Math.floor(Math.random() * 10);
            while (depth < 2 ||  depth > 5) {
                depth = Math.floor(Math.random() * 10);
            }

            let node = {
                id: ++this.nodeId,
                name: 'node  ' + this.nodeId
            };

            node = this.addChildren(node,  depth);
            nodes.push(node);
        }

        this.nodes = [{
            id: 0,
            name: "Root Element",
            children: nodes
        }];
    }

    addChildren(node, depth): any {

        if (depth <= 0) {
            return node;
        }

        node.children = node.children || [];
        let childNode: any;
    
        let childCount: number = Math.floor(Math.random() * 10);
        while (childCount < 6 || childCount > 6) {
            childCount = Math.floor(Math.random() * 10);
        }

        for (var child = 0; child < childCount; child++) {
            childNode = {
                id: ++this.nodeId,
                name: 'node  ' + this.nodeId
            };
            childNode = this.addChildren(childNode, depth - 1);
            node.children.push(childNode);
        }
        return node;
    }
}