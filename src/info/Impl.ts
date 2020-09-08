import {
    ArchiveEntity,
    ExpItem,
    GithubProject,
    PersonalInfo,
    PersonalService,
    Project,
    SocialMediaEntity
} from "./Entities";

export interface InfoManagerImpl {
    getPersonalInfo(): PersonalInfo,
    getSocialMediaLinks(): Array<SocialMediaEntity>,
    getPersonalServices(): Array<PersonalService>,
    getProjects(): Array<Project>,
    getGithubProjects(): Array<GithubProject>,
    getArchiveList(): Array<ArchiveEntity>,
    getAndroidExp(): Array<ExpItem>
}
