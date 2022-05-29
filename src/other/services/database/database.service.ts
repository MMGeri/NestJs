import { Injectable } from '@nestjs/common';
import { Question } from 'src/other/interfaces/question.interface';
import { Category } from 'src/other/DTOs/category.dto';
import { User } from 'src/other/DTOs/user.dto';

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

        return results;
    }


    createAnswer(){
        //TODO:
    }

    async getAllAnswers(){
        //TODO:
    }

    
    createUser(user:User){
        let stmt = "INSERT INTO user (id, name, email, gender) VALUES (?,?,?,?,?)";
        let preStmt = this.db.prepare(stmt);
        //TODO: hash
        preStmt.bind(null,user.name,user.email,user.gender,user.password,()=>
        {
            preStmt.run();
            preStmt.finalize();
        });
    }

    async getUser(username:string,password:string){
        //TODO:
    }
    
}



//Másik verzíó ( ez nem tetszett mert callbacket kellett hozzá használni)
    //  async getQuestions(cb,categories:Category[]=[],searchQuery:string=""){
    //     let query = "SELECT * FROM question";
    //     this.i++;
    //     //TODO: replace string query with prepared statement

    //     return this.db.all(query,cb);
    // }