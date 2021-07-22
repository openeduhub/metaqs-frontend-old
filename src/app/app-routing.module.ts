import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsPortalTableResolverService } from './subjects-portal-table/subjects-portal-table-resolver.service';
import { SubjectsPortalTableComponent } from './subjects-portal-table/subjects-portal-table.component';

const routes: Routes = [
    {
        path: 'subjects-portal-table/:id',
        component: SubjectsPortalTableComponent,
        resolve: {
            collectionTree: SubjectsPortalTableResolverService,
        },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
