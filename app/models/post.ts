export class Post {
    public id: number;
    header: string;
    subheader: string;
    image: string;
    content: string;

    commentsCount: number = 0;

    constructor(id: number, header: string, subheader: string, image: string, content: string, commentsCount: number){
        this.id = id;
        this.header = header;
        this.subheader = subheader;
        this.image = image;
        this.content = content;
        this.commentsCount = commentsCount;
    }
}
