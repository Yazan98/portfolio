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

export class Project {
    constructor(
        public name: string,
        public description: string,
        public mainImageLink: string,
        public type: string,
        public appLink: string
    ) {
    }
}

export class GithubProject {
    constructor(
        public name: string,
        public description: string,
        public link: string,
        public githubLink: string,
        public isOpenSource: boolean,
        public tags: Array<string>
    ) {
    }
}

export class ArchiveEntity {
    constructor(
        public year: number,
        public title: string,
        public madeAt: string,
        public builtWith: Array<string>,
        public isOpenSource: boolean,
        public links: Array<LinkItem>
    ) {
    }
}

export class LinkItem {
    constructor(
        public type: string,
        public link: string
    ) {
    }
}