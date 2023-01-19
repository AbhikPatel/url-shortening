export class linksModel{
    id:number
    link:string
    shorten:string

    constructor(
        id:number,
        link:string,
        shorten:string
    ){
        this.id = id
        this.link = link
        this.shorten = shorten
    }
}