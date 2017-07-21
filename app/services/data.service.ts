import {Post} from "../models/post";
import {forEach} from "@angular/router/src/utils/collection";
import {EventEmitter, Injectable} from "@angular/core";


@Injectable()
export class DataService{

    private authorized: boolean = false;



    private data: Post[] = [
        {id:1,header:"Скоро практика закончится", subheader: "Побыстрее бы",image:"ds",content:"Было бы круто все успеть сделать",commentsCount:3},
        {id:2,header:"Надо сдавать лабы смелову", subheader: "Три штуки осталось",image:"ds",content:"Хз как",commentsCount:0},
        {id:17,header:"Vtfdfdfdf", subheader: "Побыddе бы",image:"ds",content:"Было бы круто все успеть сделать",commentsCount:3},
        {id:9,header:"Нqazвать лабы смелову", subheader: "Трfeуки осталось",image:"ds",content:"Хз как",commentsCount:0},
        {id:7,header:"Епта прол", subheader: "Трfeуки осталось",image:"ds",content:"Хз как",commentsCount:0},
        {id:4,header:"петуч петуч", subheader: "Трfeуки осталось",image:"ds",content:"Хз как",commentsCount:0},

    ];





    logout(){
        this.authorized = false;
        console.log("LOGOUT");
    }

    isLogin(): boolean{
        console.log("is");
        return this.authorized;

    }


    login(username:string, password:string){
        this.authorized = true;

        //отправляем запрос получаем данные

        return "egor";
    }




    getRecentPosts(): Post[]{
        var buff: Post[] = this.data.sort((a, b) => {
            if (a.id > b.id) return 1;
            if (a.id < b.id) return -1;
        })
        return buff.slice(0,4);
    }








    getPosts(): Post[] {

        return this.data;
    }

    addPost(id: number, header: string, subheader: string, image: string, content: string, commentsCount: number){
        this.data.push(new Post(id, header, subheader, image, content, commentsCount));
        console.log("data")

        for(var i=0;i< this.data.length;i++){
            console.log(this.data[i].id+" "+ this.data[i].header);
        }


    }

    updatePost(id: number, header: string, subheader: string, image: string, content: string, commentsCount: number){

    }

    deletePost(id: number){
        console.log("Deleted:"+ id);
        delete this.data[0];
    }

}
