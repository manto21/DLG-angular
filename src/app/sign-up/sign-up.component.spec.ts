import { HttpClient, HttpHandler } from "@angular/common/http";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { SignUpComponent } from "./sign-up.component";

describe("SignUpComponent", () => {
    let component: SignUpComponent;
    let fixture: ComponentFixture<SignUpComponent>;
    
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [SignUpComponent],
            imports: [HttpClientTestingModule], 
            providers: [HttpClient, HttpHandler ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignUpComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});