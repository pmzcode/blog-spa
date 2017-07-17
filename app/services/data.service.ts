

export class DataService{

    private authorized: boolean = false;

    user: { username: "egor", password: "pomz" };

    login(username:string, password:string){

        return "egor";
    }

}
