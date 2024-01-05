import  express, { Request, Response } from "express";
import { Person } from "../../../domain/person.entity";

const app = express();

app.get("/", (req: Request, res: Response) => {
    const person = new Person({ name: "Artur", age: 31 })
    res.json(person);
})

export {
    app
}
