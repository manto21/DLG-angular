import { HttpClient, HttpHandler } from "@angular/common/http";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { SignUpComponent } from "./sign-up.component";

describe("SignUpComponent", () => {
    let component: SignUpComponent;
    let fixture: ComponentFixture<SignUpComponent>;
    

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [SignUpComponent],
            imports: [RouterTestingModule],
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