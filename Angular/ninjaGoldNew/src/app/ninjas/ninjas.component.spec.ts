import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjasComponent } from './ninjas.component';

describe('NinjasComponent', () => {
    let component: NinjasComponent;
    let fixture: ComponentFixture<NinjasComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NinjasComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NinjasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});