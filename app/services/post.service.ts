import {Post} from '../models/post';

export class PostService{

    private data: Post[] = [
        {id:1,header:"test", subheader: "another_test",image:"ds",content:"bla-bla",commentsCount:12},
        {id:2,header:"test", subheader: "another_test",image:"ds",content:"bla-bla",commentsCount:12}
    ];
    getData(): Post[] {

        return this.data;
    }
    addData(id: number, header: string, subheader: string, image: string, content: string, commentsCount: number){
        this.data.push(new Post(id, header, subheader, image, content, commentsCount));
    }
}
