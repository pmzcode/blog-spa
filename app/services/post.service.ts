import {Post} from '../models/post';

export class PostService{

    private authorized: boolean = false;

    private data: Post[] = [
      //  {id:1,header:"Скоро практика закончится", subheader: "Побыстрее бы",image:"ds",content:"Было бы круто все успеть сделать",commentsCount:3},
        {id:2,header:"Надо сдавать лабы смелову", subheader: "Три штуки осталось",image:"ds",content:"Хз как",commentsCount:0}
    ];
    getData(): Post[] {

        return this.data;
    }
    addData(id: number, header: string, subheader: string, image: string, content: string, commentsCount: number){
        this.data.push(new Post(id, header, subheader, image, content, commentsCount));
    }
}
