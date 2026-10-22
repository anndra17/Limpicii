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
    facilityRotation = 0;
    private facilitySwipeStartX: number | null = null;

    rotateFacilityGallery(direction: number): void {
        this.facilityRotation += direction * 60;
    }

    onFacilityGalleryKeydown(event: KeyboardEvent): void {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            this.rotateFacilityGallery(event.key === "ArrowDown" ? 1 : -1);
            event.preventDefault();
        }
    }

    onFacilityPointerDown(event: PointerEvent): void {
        if (event.pointerType !== "touch") return;
        this.facilitySwipeStartX = event.clientX;
        (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    }

    onFacilityPointerUp(event: PointerEvent): void {
        if (event.pointerType !== "touch" || this.facilitySwipeStartX === null) return;
        const distance = event.clientX - this.facilitySwipeStartX;
        this.facilitySwipeStartX = null;
        if (Math.abs(distance) > 35) this.rotateFacilityGallery(distance < 0 ? 1 : -1);
    }

    onFacilityPointerCancel(): void {
        this.facilitySwipeStartX = null;
    }

    readonly facilitySlides = [
        { image: "assets/images/LimpiciiTennis.jpg", title: "FACILITY.NOVEMBER_TITLE", description: "FACILITY.NOVEMBER_DESCRIPTION", alt: "FACILITY.NOVEMBER_ALT" },
        { image: "assets/images/LimpiciiTurneuTenis2026.jpg", title: "FACILITY.BRASOV_MARATHON_TITLE", description: "FACILITY.BRASOV_MARATHON_DESCRIPTION", alt: "FACILITY.BRASOV_MARATHON_ALT" },
        { image: "assets/images/LimpiciiLake.jpg", title: "FACILITY.BIMBO_TITLE", description: "FACILITY.BIMBO_DESCRIPTION", alt: "FACILITY.BIMBO_ALT" }
    ];

    readonly facilityGallerySlides = [...this.facilitySlides, ...this.facilitySlides];
}
