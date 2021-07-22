import { TestBed } from '@angular/core/testing';

import { SubjectsPortalTableService } from './subjects-portal-table.service';

describe('SubjectsPortalTableService', () => {
    let service: SubjectsPortalTableService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SubjectsPortalTableService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
