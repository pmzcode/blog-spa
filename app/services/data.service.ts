import {Post} from "../models/post";

export class DataService{

    private authorized: boolean = false;

    user: { username: "egor", password: "pomz" };
    private data: Post[] = [
        {id:1,header:"Скоро практика закончится", subheader: "Побыстрее бы",image:"ds",content:"Было бы круто все успеть сделать",commentsCount:3},
        {id:2,header:"Надо сдавать лабы смелову", subheader: "Три штуки осталось",image:"ds",content:"Хз как",commentsCount:0}
    ];


    login(username:string, password:string){


        return "egor";
    }


    getPosts(): Post[] {

        return this.data;
    }

    addPost(id: number, header: string, subheader: string, image: string, content: string, commentsCount: number){
        this.data.push(new Post(id, header, subheader, image, content, commentsCount));
    }

    updatePost(id: number, header: string, subheader: string, image: string, content: string, commentsCount: number){

    }

    deletePost(id: number){
        console.log("Deleted:"+ id);
    }

}
