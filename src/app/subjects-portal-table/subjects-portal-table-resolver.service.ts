import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CollectionTree, SubjectsPortalTableService } from './subjects-portal-table.service';

@Injectable({
    providedIn: 'root',
})
export class SubjectsPortalTableResolverService {
    constructor(private readonly subjectsPortalTable: SubjectsPortalTableService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<CollectionTree> {
        const id = route.paramMap.get('id');
        if (id) {
            return this.subjectsPortalTable.getCollectionTree(id);
        } else {
            throw new Error('Missing parameter "id"');
        }
    }
}
