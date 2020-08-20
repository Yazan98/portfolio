export class PersonalInfo {
    constructor(
        public name: string,
        public publicActions: Array<string>,
        public description: string,
        public email: string,
        public services: Array<PersonalService>
    ) {
    }
}

export class PersonalService {
    constructor(
        public name: string,
        public key: string,
        public description: string
    ) {
    }
}

export class SocialMediaEntity {
    constructor(
        public link: string,
        public icon: string,
    ) {
    }
}
