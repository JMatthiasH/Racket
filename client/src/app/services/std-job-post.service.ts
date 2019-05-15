import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StdJobPostService {
  StdURL: string = 'http://localhost:4001/users/students';

  constructor(private http: HttpClient) { }
  getStudents(){
    return this.http.get(this.StdURL)
}
getStudent(id){
  return this.http.get(`${this.StdURL}/${id}`)
}
}
