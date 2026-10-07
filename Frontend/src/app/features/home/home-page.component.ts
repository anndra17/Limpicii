import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { TranslatePipe } from "../../shared/pipes/translate.pipe";

@Component({
    selector: "app-home-page",
    imports: [HeaderComponent, TranslatePipe],
    templateUrl: "./home-page.component.html",
    styleUrls: ["./home-page.component.css"],
    changeDetection: ChangeDetectionStrategy.Eager
})
export class HomePageComponent {}