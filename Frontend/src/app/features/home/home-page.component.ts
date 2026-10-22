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
    activeFacilitySlide = 0;

    get previousFacilitySlide(): number {
        return (this.activeFacilitySlide - 1 + this.facilitySlides.length) % this.facilitySlides.length;
    }

    get nextFacilitySlide(): number {
        return (this.activeFacilitySlide + 1) % this.facilitySlides.length;
    }

    showPreviousFacilitySlide(): void {
        this.activeFacilitySlide = this.previousFacilitySlide;
    }

    showNextFacilitySlide(): void {
        this.activeFacilitySlide = this.nextFacilitySlide;
    }

    readonly facilitySlides = [
        { image: "assets/images/news/cros15noiembrie.jpg", title: "FACILITY.NOVEMBER_TITLE", description: "FACILITY.NOVEMBER_DESCRIPTION", alt: "FACILITY.NOVEMBER_ALT" },
        { image: "assets/images/news/brasovMarathon.jpg", title: "FACILITY.BRASOV_MARATHON_TITLE", description: "FACILITY.BRASOV_MARATHON_DESCRIPTION", alt: "FACILITY.BRASOV_MARATHON_ALT" },
        { image: "assets/images/news/bimboGlobalRace.jpg", title: "FACILITY.BIMBO_TITLE", description: "FACILITY.BIMBO_DESCRIPTION", alt: "FACILITY.BIMBO_ALT" },
        { image: "assets/images/news/RunnersSupport.jpeg", title: "FACILITY.RUNNERS_TITLE", description: "FACILITY.RUNNERS_DESCRIPTION", alt: "FACILITY.RUNNERS_ALT" },
        { image: "assets/images/news/assistanceAfterFire.jpeg", title: "FACILITY.COMMUNITY_SUPPORT_TITLE", description: "FACILITY.COMMUNITY_SUPPORT_DESCRIPTION", alt: "FACILITY.COMMUNITY_SUPPORT_ALT" }
    ];
}
