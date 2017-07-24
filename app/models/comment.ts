export class Comment {

    id: number;
    postId: number;
    sender: string;
    recipient: string;
    date: string;
    text: string;
    childComment: number[];



    constructor(id:number ,postId: number,sender: string,recipient: string,date: string, text:string, childComment: number[]){
        this.id = id;
        this.postId = postId;
        this.sender = sender;
        this.recipient = recipient;
        this.text = text;
        this.date = date;
        this.childComment = childComment;
    }


}
