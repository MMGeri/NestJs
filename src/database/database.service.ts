import { Question } from 'src/other/interfaces/question.interface';
import { QuestionDTO } from 'src/other/DTOs/question.dto';
import { Answer } from 'src/other/interfaces/answer.interface';
import { AnswerDTO } from 'src/other/DTOs/answer.dto';
import { User } from 'src/other/DTOs/user.dto';
import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';
import { resolve } from 'path';




const  sqlite3 = require('sqlite3').verbose();

@Injectable()
export class DatabaseService {
    
    //by default request scope is singleton
    //if database is on a server, use of async provider is recommended (userFactory, return the connection) so we wait for database before starting the server
    //additionally global module for the DatabaseService is recommended if we have future modules that access to the database
    db = new sqlite3.Database('database.sqlite');
    
    
    createQuestion(question:QuestionDTO){
        let sql="INSERT INTO Question (authorId, questionTitle, questionBody) VALUES (?,?,?)";
        const stmt = this.db.prepare(sql);

        stmt.run(question.authorId,question.questionTitle,question.questionBody,function(err){
            if(err)console.log(err)
        });
        stmt.finalize();
    }
    
    async getQuestions(categories:number[]=[],searchQuery:string=""): Promise<Question[]>{
        //IDEA: create index for faster search
        let query:string;
        if(categories.length == 0)
            query = "SELECT * FROM question WHERE questionTitle LIKE ?";
        else{
            query = `SELECT * FROM question WHERE questionTitle LIKE ? AND id 
            in (SELECT questionId FROM questioncategory WHERE categoryId in (${new Array(10).fill("?").join(',')}))`;
        }   
        
        //create prepared statement
        let preStmt = this.db.prepare(query);
        
        //return with a promise containing the results
        return new Promise((resolve,reject)=>{
            preStmt.all('%'+searchQuery+'%',...categories,(err,rows)=>{
                if(err) reject(err);
                else resolve(rows);
            });
        });
    }

    async getSingleQuestion(questionId:number):Promise<Question>{
        const stmt = this.db.prepare('SELECT * FROM question WHERE id = ?');
        return new Promise<Question>((resolve) => {
            stmt.get(questionId,(err,row)=>{
                if(row != undefined){
                    resolve(row as Question);
                    return;
                }
                resolve(null);
            });}); 
    }
    
    
    createAnswer(answer:AnswerDTO){
        //create prepared statement
        let stmt = "INSERT INTO answer (questionId, authorId, answerBody, likeCount, dislikeCount) VALUES (?,?,?,1,0)";
        const preStmt = this.db.prepare(stmt);
        
        
        preStmt.run(answer.questionId,answer.authorId,answer.answerBody,function(err){
            if(err) console.log(err)
        });
        preStmt.finalize();
    }
    
    async getAllAnswers(questionId:number):Promise<Answer[]>{
        const stmt = this.db.prepare('SELECT * FROM answer WHERE questionId = ?');
        return new Promise<Answer[]>((resolve) => {
            stmt.all(questionId,(err,rows)=>{
                if(err)console.log(err);
                else resolve(rows);
            });}); 
    }


    likeAnswer(answerId:number){
        const stmt = this.db.prepare('UPDATE answer SET likeCount = likeCount + 1 WHERE id = ?');
        stmt.run(answerId,function(err){
            if(err)console.log(err)
        });
        stmt.finalize();
    }
    
    
    
    async createUser(user:User){
        //check if user already exists, helyette lehetne email-t primary keyként kezelni és megnézni hogy dob-e kivételt a db.
        if(await this.getUser(user.email))
        return false;
    
        //hash password
        const salt = await bcrypt.genSalt()
        user.password = await bcrypt.hash(user.password,salt)
        
        //create prepared statement 
        let stmt = "INSERT INTO user (name, email, gender, password) VALUES (?,?,?,?)";
        let preStmt = this.db.prepare(stmt);
        
        preStmt.run(user.name,user.email,user.gender,user.password,function(err){
            if(err)console.log(err)
        } );
        preStmt.finalize();
        return true;
    }
    
 
    async getUser(email:string=""):Promise<User|null> {
        const stmt = this.db.prepare('SELECT * FROM user WHERE email = ?');
        return new Promise<User|null>((resolve) => {
            stmt.get(email,(err,row)=>{
                if(row != undefined){
                   resolve(row as User);
                }
                resolve(null);
            });}); 
    }

   

}


