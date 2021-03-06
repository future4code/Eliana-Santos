export type AuthenticationData = {
    id: string
}
export default class User {
    public get password(): string {
        return this._password
    }
    public set password(value: string) {
        this._password = value
    }
    public get email(): string {
        return this._email
    }
    public set email(value: string) {
        this._email = value
    }
    public get name(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }
    public get id(): string {
        return this._id
    }
    public set id(value: string) {
        this._id = value
    }

    constructor(
        private _id: string,
        private _name: string,
        private _email: string,
        private _password: string
    ) { }

    static toUserModel(data: any): User {
        return new User(data.id, data.name, data.email, data.password)
    }
}
export interface SignupInputDTO {
    name: string,
    email: string,
    password: string
}
export interface LoginInputDTO {
    email: string,
    password: string
}
