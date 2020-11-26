export class App {
    constructor(
        public name: string,
        public description: string,
        public logo: string,
        public createdAt: string,
        public projectLink: string,
        public mainImageLink: string,
        public tags: Array<string>,
        public images: Array<string>
    ) {
    }
}