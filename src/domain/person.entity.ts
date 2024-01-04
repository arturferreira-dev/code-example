import { BaseEntity, BaseType } from "./base.entity";

interface PersonType extends BaseType { name: string; age: number };
export class Person extends BaseEntity {
    name: string;
    age: number;
    constructor({ name, age }: PersonType) {
        super()
        this.name = name;
        this.age = age;
        this.validate()
    }
   public validate() {
       this.errors = []
       if(!this.name){
        this.errors.push('name is required')
       } 
       if(!this.age){
        this.errors.push('age is required')
       }
    }
    
}