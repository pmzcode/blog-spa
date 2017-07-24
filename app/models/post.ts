export class Post {
    id: number;
    header: string;
    subheader: string;
    content: string;
    commentsCount: number = 0;
    tags: string[];
    date: string;


    constructor(id: number, header: string, subheader: string, content: string, commentsCount: number, tags:string[], date: string){
        this.id = id;
        this.header = header;
        this.subheader = subheader;
        this.content = content;
        this.commentsCount = commentsCount;
        this.tags = tags;
        this.date = date;
    }


}
