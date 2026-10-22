import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { TranslatePipe } from "../../shared/pipes/translate.pipe";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-home-page",
    imports: [HeaderComponent, TranslatePipe, RouterLink],
    templateUrl: "./home-page.component.html",
    styleUrl: "./home-page.component.css",
    changeDetection: ChangeDetectionStrategy.Eager
})
export class HomePageComponent {
    readonly facilitySlides = [
        { image: "assets/images/LimpiciiTennis.jpg", title: "FACILITY.COURTS", description: "FACILITY.COURTS_DESCRIPTION", alt: "ACTIVITY_PAGES.TENNIS.EYEBROW" },
        { image: "assets/images/LimpiciiTurneuTenis2026.jpg", title: "FACILITY.LOCKER_ROOMS", description: "FACILITY.LOCKER_ROOMS_DESCRIPTION", alt: "ABOUT.IMAGE_ALT" },
        { image: "assets/images/LimpiciiHike.jpg", title: "FACILITY.SHOWERS", description: "FACILITY.SHOWERS_DESCRIPTION", alt: "ACTIVITIES.HIKING" },
        { image: "assets/images/LimpiciiLake.jpg", title: "FACILITY.GRANDSTAND", description: "FACILITY.GRANDSTAND_DESCRIPTION", alt: "ACTIVITIES.SWIMMING" }
    ];

    readonly facilityFilmstripSlides = [...this.facilitySlides, ...this.facilitySlides];
}
