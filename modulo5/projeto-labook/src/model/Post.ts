export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}

export interface PostInputDTO {
    photo: string,
    description: string,
    type: POST_TYPES,
    token: string
}

export default class Post {
    public get photo(): string {
        return this._photo
    }
    public set photo(value: string) {
        this._photo = value
    }
    public get description(): string {
        return this._description
    }
    public set description(value: string) {
        this._description = value
    }
    public get types(): POST_TYPES {
        return this._types
    }
    public set types(value: POST_TYPES) {
        this.types = value
    }
    public get creatAt(): Date {
        return this._creatAt
    }
    public set creatAt(value: Date) {
        this._creatAt = value
    }
    public get authorId(): string {
        return this._author_id
    }
    public set authorId(value: string) {
        this._author_id = value
    }

    public get id(): string {
        return this._id
    }
    public set id(value: string) {
        this._id = value
    }

    constructor(
        private _id: string,
        private _photo: string,
        private _description: string,
        private _types: POST_TYPES,
        private _creatAt: Date,
        private _author_id: string
    ) { }
} 