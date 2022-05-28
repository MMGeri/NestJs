import { Injectable } from '@nestjs/common';
import { sqlite3 } from 'sqlite3';
import { Category } from '../../DTOs/category.dto';

@Injectable()
export class DatabaseService {

    db = new sqlite3.Database('database.sqlite');

    getQuestions(categories:Category[]=[],searchQuery:string=""){
        let query = "SELECT * FROM questions";
        if(categories.length>0){
            query += " WHERE ";
            //todo
        }
        if(searchQuery.length>0){
            if(categories.length>0){
                query += " AND ";
            }
            //todo
        }
        //todo replace string query with prepared statement
        console.log(query);
        return this.db.all(query);
    }
    
}
