import {EventEmitter} from "node:events";

export const eventEmitter = new EventEmitter();

eventEmitter.on('EmployeeAdded',(employee: string)=>{
    console.log(`${employee} is added`);
})

eventEmitter.on('UserDeleted',(employee: string)=>{
    console.log(`${employee} is deleted`);
})