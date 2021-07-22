import { TestBed } from '@angular/core/testing';

import { SubjectsPortalTableResolverService } from './subjects-portal-table-resolver.service';

describe('SubjectsPortalTableResolverService', () => {
  let service: SubjectsPortalTableResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectsPortalTableResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
