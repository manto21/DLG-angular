import { HttpClient, HttpHandler } from "@angular/common/http";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { SignUpComponent } from "./sign-up.component";
import { DataApiService } from "../app-data/data-api.service";

describe("SignUpComponent", () => {
    let component: SignUpComponent;
    let fixture: ComponentFixture<SignUpComponent>;
    let dataApiServiceSpy: any;

    beforeEach(waitForAsync(() => {
        dataApiServiceSpy = jasmine.createSpyObj('DataApiService', ['userSignUp']);
        TestBed.configureTestingModule({
            declarations: [SignUpComponent],
            imports: [HttpClientTestingModule],
            providers: [HttpClient, HttpHandler,
                { provide: DataApiService, dataApiServiceSpy }]
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

    it("should call buildForm method", () => {
        component.buildForm();
        expect(dataApiServiceSpy.userSignUp).toHaveBeenCalled();
        expect(component.enableSubmitBtn).not.toBeNull();
    });

    it("should call submit method", () => {
        component.submit();
        expect(dataApiServiceSpy.userSignUp).toHaveBeenCalled();
        expect(component.signUpSuccess).toBeTrue();
    });
    
    it("should call closeBanner method", () => {
        component.closeBanner();
        expect(component.signUpSuccess).toBeFalse();
    });
});