import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { ActivatedRoute } from '@angular/router';
import {
    CollectionData,
    CollectionTreeNode,
    SubjectsPortalTableService,
} from './subjects-portal-table.service';

interface CollectionFlatNode {
    data: CollectionData;
    expandable: boolean;
    level: number;
}

@Component({
    selector: 'app-subjects-portal-table',
    templateUrl: './subjects-portal-table.component.html',
    styleUrls: ['./subjects-portal-table.component.scss'],
})
export class SubjectsPortalTableComponent implements OnInit {
    private _transformer = (node: CollectionTreeNode, level: number) => {
        return {
            expandable: !!node.children && node.children.length > 0,
            data: node.data,
            level: level,
        };
    };

    treeControl = new FlatTreeControl<CollectionFlatNode>(
        (node) => node.level,
        (node) => node.expandable,
    );

    treeFlattener = new MatTreeFlattener(
        this._transformer,
        (node) => node.level,
        (node) => node.expandable,
        (node) => node.children,
    );

    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    columns = ['title', 'count_total_resources'];

    constructor(
        private readonly subjectsPortalTable: SubjectsPortalTableService,
        private readonly route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.route.data.subscribe(({ collectionTree }) => {
            this.dataSource.data = collectionTree.rootNodes;
        });
    }

    hasChild = (_: number, node: CollectionFlatNode) => node.expandable;
}
