import { HttpStatus, Injectable } from '@nestjs/common';
import { Question } from 'src/other/interfaces/question.interface';
import { Category } from 'src/other/DTOs/category.dto';
import { User } from 'src/other/DTOs/user.dto';

import * as bcrypt from 'bcrypt';
import { userInfo } from 'os';
import { resolve } from 'path';

const  sqlite3 = require('sqlite3').verbose();

@Injectable()
export class DatabaseService {
    
    //by default request scope is singleton
    db = new sqlite3.Database('database.sqlite');
    
    
    createQuestion(question:Question){
        //TODO:
    }
    
    async getQuestions(categories:Category[]=[],searchQuery:string=""): Promise<Question[]>{
        
        let query = "SELECT * FROM question";
        let results:Promise<Question[]> = new Promise((resolve,reject)=>{
            this.db.all(query,(err,rows)=>{
                if(err) reject(err);
                else resolve(rows);
            });
        });
        //FIXME: implement filters
        return results;
    }
    
    
    createAnswer(){
        //TODO:
    }
    
    async getAllAnswers(){
        //TODO:
    }
    
    
    async createUser(user:User){
        //check if user already exists, helyette lehetne email-t primary keyként kezelni és megnézni hogy dob-e kivételt a db.
        if(await this.getUser(user.email,user.password) == null){

            const salt = await bcrypt.genSalt()
            user.password = await bcrypt.hash(user.password,salt)

            let stmt = "INSERT INTO user (name, email, gender, password) VALUES (?,?,?,?)";
            let preStmt = this.db.prepare(stmt);
           
            preStmt.run(user.name,user.email,user.gender,user.password,function(err){
                if(err)console.log(err)
                else{
                  console.log(this.changes)  
                }
            } );
            preStmt.finalize();
            return true;
        }
        return false;
    }
    
    async getUser(email:string,password:string):Promise<User|string| null> {
        const stmt = this.db.prepare('SELECT * FROM user WHERE email = ?');
        let result = new Promise<User|string|null>((resolve,reject) => {stmt.get(email,(err,row)=>{
            if(err) reject(err);
            else{
                if(row != undefined){
                    const user = row;
                    if(bcrypt.compareSync(password,user.password)){
                        console.log("Found user: " + user.name);
                        //user found
                        resolve(row as User);
                    }
                    else{
                        console.log("Bad password");
                        //Wrong password
                        resolve("wrong password");
                    }
                }
                else{
                    console.log("User not found "+email+" "+password+" "+row);
                    // user not found
                    resolve(null);
                }
            }
        });});
        return result;
    }
    
}


