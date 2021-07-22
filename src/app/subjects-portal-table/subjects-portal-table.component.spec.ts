import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsPortalTableComponent } from './subjects-portal-table.component';

describe('SubjectsPortalTableComponent', () => {
    let component: SubjectsPortalTableComponent;
    let fixture: ComponentFixture<SubjectsPortalTableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SubjectsPortalTableComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SubjectsPortalTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
