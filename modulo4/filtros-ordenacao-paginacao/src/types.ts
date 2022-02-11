export enum TYPE {
   Teacher = "Teacher",
   Operations = "Operations",
   CX = "CX"

}
export type user = {
   id: string
   name: string
   email: string
   type: TYPE
}