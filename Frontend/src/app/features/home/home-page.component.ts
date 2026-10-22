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

    readonly communityStories = [
        { image: "assets/images/news/cros15noiembrie.jpg", title: "COMMUNITY_IMPACT.NOVEMBER_TITLE", description: "COMMUNITY_IMPACT.NOVEMBER_DESCRIPTION", alt: "COMMUNITY_IMPACT.NOVEMBER_ALT" },
        { image: "assets/images/news/brasovMarathon.jpg", title: "COMMUNITY_IMPACT.BRASOV_MARATHON_TITLE", description: "COMMUNITY_IMPACT.BRASOV_MARATHON_DESCRIPTION", alt: "COMMUNITY_IMPACT.BRASOV_MARATHON_ALT" },
        { image: "assets/images/news/bimboGlobalRace.jpg", title: "COMMUNITY_IMPACT.BIMBO_TITLE", description: "COMMUNITY_IMPACT.BIMBO_DESCRIPTION", alt: "COMMUNITY_IMPACT.BIMBO_ALT" },
        { image: "assets/images/news/RunnersSupport.jpeg", title: "COMMUNITY_IMPACT.RUNNERS_TITLE", description: "COMMUNITY_IMPACT.RUNNERS_DESCRIPTION", alt: "COMMUNITY_IMPACT.RUNNERS_ALT" },
        { image: "assets/images/news/assistanceAfterFire.jpeg", title: "COMMUNITY_IMPACT.COMMUNITY_SUPPORT_TITLE", description: "COMMUNITY_IMPACT.COMMUNITY_SUPPORT_DESCRIPTION", alt: "COMMUNITY_IMPACT.COMMUNITY_SUPPORT_ALT" }
    ];
}
