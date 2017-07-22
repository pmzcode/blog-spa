import {Post} from "../models/post";
import {forEach} from "@angular/router/src/utils/collection";
import {EventEmitter, Injectable} from "@angular/core";
import {Tag} from "../models/tag";
import {Comment} from "../models/comment"



@Injectable()
export class DataService{

    private authorized: boolean = false;



    private data: Post[] = [
        {
            id:1,
            header:"Скоро практика закончится",
            subheader: "Побыстрее бы",
            content:"Было бы круто все успеть сделать",
            commentsCount:3,
            tags: ["sddsdsd","sdsds","efor"],
            date:"dsd"
        },
        {
            id:2,
            header:"Надо сдавать лабы смелову",
            subheader: "Три штуки осталось",
            content:"Хз как",
            commentsCount:0,
            tags:[],
            date:"22th July 2017"
        },
        {
            id:17,
            header:"Vtfdfdfdf",
            subheader: "Побыddе бы",
            content:"Было бы круто все успеть сделать",
            commentsCount:3,
            tags:[],
            date:"22th July 2017"

        }
    ];


    private tags:Tag[] = [
        {name:"egor", size:"14px"},
        {name:"test",size:"12px"},
        {name:"spider-man",size:"10px"},
        {name:"bstu",size:"8px"},
        {name:"Oxxxymiron",size:"7px"},
        {name:"lol",size:"6px"}
        ];

    private comments: Comment[] = [
        {
            id:1,
            postId:1,
            sender: "Egor" ,
            recipient:"",
            date:"7 days ago" ,
            text:"ABVG" ,
            childComment:[]
        },

        {
            id:2,
            postId:1,
            sender: "Egor" ,
            recipient:"",
            date:"7 days ago" ,
            text:"Hi my names egor" ,
            childComment:[4]
        },

        {
            id:3,
            postId:1,
            sender: "Egor" ,
            recipient:"",
            date:"7 days ago" ,
            text:"Hi" ,
            childComment:[]
        },

        {
            id:4,
            postId:1,
            sender: "Vasya" ,
            recipient:"Egor",
            date:"7 days ago" ,
            text:"ti loh" ,
            childComment:[]
        },
    ]


    logout(){
        this.authorized = false;
    }

    isLogin(): boolean{
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
        this.data.push(new Post(id, header, subheader, content, commentsCount, [], this._getDate()));
        console.log("data")

        for(var i=0;i< this.data.length;i++){
            console.log(this.data[i].id+" "+ this.data[i].header);
        }


    }

    editPost(id: number, header: string, subheader: string, content: string, tags: string){
        for(var i=0;i< this.data.length;i++){

            if(this.data[i].id == id)
            {
                this.data[i].header=header;
                this.data[i].subheader=subheader;
                this.data[i].content=content;
                this.data[i].tags = this._createTagsArray(tags);

            }
        }
    }

    deletePost(id: number){
        for(var i=0;i< this.data.length;i++){
            console.log(this.data[i].id+" "+this.data[i].header+" ss:"+i)
            if(this.data[i].id == id)
            {
                this.data.splice(i,1);
                console.log("Deleted:"+ i);
            }
        }

    }

    getPost(id: number): Post{
        for(var i=0;i< this.data.length;i++){

            if(this.data[i].id == id)
            {
                return this.data[i];
            }
        }

    }





    getPopularTags(){
        return this.tags;
    }


    getComments(id: number):Comment[] {

        let buff: Comment[] = [];
        for(var i=0;i< this.comments.length;i++){
            if(this.comments[i].postId == id && this.comments[i].recipient =="")
            {
                buff.push(this.comments[i])
            }
        }
        console.log("DATASERVIce");
        console.log(buff);
        console.log("_______________");
        return buff;
    }

    getSubComments(id: number):Comment[] {

        let result: Comment[] = [];
        let subcomments: number[] = [];
        subcomments = this._findComment(id).childComment;

        for(let i=0; i < subcomments.length; i++){
            result.push(this._findComment(subcomments[i]))
        }

        return result;
    }



    private _getDate(): string {


        var months = [,"January","Febrary","March","April","May","June","July","August",
            "September","October","November","December"];

        var time=new Date();
        var thismonth=months[time.getMonth() + 1];
        var date=time.getDate();
        var thisyear=time.getFullYear();
        var day=time.getDay() + 1;

        if (thisyear < 2000)
            thisyear = thisyear + 1900;


        return date+"th "+thismonth + " " + thisyear;

    }

    private _createTagsArray(str: string): string[]{
        var VRegExp = new RegExp(/^(\s|\u00A0)+/g);
        var VResult = str.replace(VRegExp, '');
        return VResult.split(',');
    }

    private _findComment(id: number): Comment{
        for(var i=0;i< this.comments.length;i++){
            if(this.comments[i].id == id)
            {
                return this.comments[i];
            }
        }
        return new Comment(0,0,"","","","",[]);
    }


}
