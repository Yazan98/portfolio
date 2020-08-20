import {PersonalInfo, PersonalService, SocialMediaEntity} from "./Entities";

export interface InfoManagerImpl {
    getPersonalInfo(): PersonalInfo,
    getSocialMediaLinks(): Array<SocialMediaEntity>,
    getPersonalServices(): Array<PersonalService>
}
