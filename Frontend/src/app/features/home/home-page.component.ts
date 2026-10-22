import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { TranslatePipe } from "../../shared/pipes/translate.pipe";
import { RouterLink } from "@angular/router";
import { communityStories } from "../community/community-stories";

@Component({
    selector: "app-home-page",
    imports: [HeaderComponent, TranslatePipe, RouterLink],
    templateUrl: "./home-page.component.html",
    styleUrl: "./home-page.component.css",
    changeDetection: ChangeDetectionStrategy.Eager
})
export class HomePageComponent {
    activeCommunityStory = 0;

    get previousCommunityStory(): number {
        return (this.activeCommunityStory - 1 + this.communityStories.length) % this.communityStories.length;
    }

    get nextCommunityStory(): number {
        return (this.activeCommunityStory + 1) % this.communityStories.length;
    }

    showPreviousCommunityStory(): void {
        this.activeCommunityStory = this.previousCommunityStory;
    }

    showNextCommunityStory(): void {
        this.activeCommunityStory = this.nextCommunityStory;
    }

    readonly communityStories = communityStories;
}
