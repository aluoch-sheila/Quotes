export class Quote {
    public showDescription: boolean;
    constructor(public id: number, public name: string, public description: string, public upVotes: number, public downVotes: number) {
        this.showDescription = false;

    }
}


