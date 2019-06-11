export class Site
{

    public pages : Page[];
    public pieces : SuperPiece[];
}


export class SuperPiece
{
    public name : string;
    public type : number;
    public data : Data;
    public meta: any
    public id;
    public page : string;
    public parent : string;

}

export class Page extends SuperPiece
{
    public route : string;
}

export class ColComponent extends SuperPiece
{
    public data : Data;
}

export class TextComponent extends SuperPiece
{
    public textType : Number
}

export class ImageComponent extends SuperPiece
{
}

export class HtmlComponent extends SuperPiece
{
}

export class Nav{
    public type : number;

}
export class Data{
    public inner : string[];
    public next : string[];
    public text : String
}

export class Breadcrumb{

    public id;
    public name
}

/*

{
    "nav": {
        "type": 1
    },
    "pages": [
        {
            "route":"Home",
            "name":"Home",
            "type": 1,
            "data": {
                "inner": [
                    {
                        "type": 1,
                        "data":{
                            "inner":[],
                            "next":[]
                        }
                    },
                    {
                        "type": 1,
                        "data": {
                            "inner":[
                                {
                                    "type": 101,
                                    "data": "test"
                                }
                            ],
                            "next":[]
                        }
                    },
                    {
                        "type": 1,
                        "data":{
                            "inner":[],
                            "next":[]
                        }
                    }
                ]
            }
        }

    ]
}
*/