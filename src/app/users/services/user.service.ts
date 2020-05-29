import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
// import { HttpClient,HttpHeaders,HttpXsrfTokenExtractor } from '@angular/common/http';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { JwtResponse } from  '../jwt-response';
import { tap } from  'rxjs/operators';
import { User } from '../user';

@Injectable({providedIn:'root'})

export class UserService {

  private apiUrl=" http://127.0.0.1:8000/api/users";
  
  private userSubject= new BehaviorSubject(false);
  private token = "Bearer dda1c50d453af4262ec5e616bc409813d9032d131885e78c3857bb6ec05ae6f2";
  
  // constructor( private tokenService: HttpXsrfTokenExtractor,
  constructor(private http:HttpClient) { }
    
    // token = this.tokenService.getToken();
    
    // changeData(data){
    //   this.userSubject.next(data);
    // }

    // get userSubjectObservable(){
    //   return this.userSubject.asObservable();
    // }
    handleError(error: HttpErrorResponse) {
      let errorMessage = 'Unknown error!';
      if (error.error instanceof ErrorEvent) {
        // Client-side errors
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Server-side errors
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    }
  

    getUsers(){
      return this.http.get(this.apiUrl).pipe(retry(3), catchError(this.handleError));
    }


    getUsersById(id){
      return this.http.get(`${this.apiUrl}/${id}`);
    }
    
    // register(user): Observable<JwtResponse> {
    //   // return this.http.post<JwtResponse>(`${this.AUTH_SERVER}/register`, user).pipe(
    //   return this.http.post<JwtResponse>(this.apiUrl, user).pipe(
    //     tap((res:  JwtResponse ) => {
  
    //       if (res.user) {
    //         localStorage.set("ACCESS_TOKEN", res.user.access_token);
    //         localStorage.set("EXPIRES_IN", res.user.expires_in);
    //         this.userSubject.next(true);
    //       }
    //     })
  
    //   );
    // }
  //   singIn(user: User): Observable<JwtResponse> {
  //   // singIn(user): Observable<JwtResponse> {
  //     return this.http.post(`${this.AUTH_SERVER}/login`, user).pipe(
  //       tap(async (res: JwtResponse) => {
  
  //         if (res.user) {
  //           localStorage.setItem("ACCESS_TOKEN", res.user.access_token);
  //           localStorage.setItem("EXPIRES_IN", res.user.expires_in);
  //           this.authSubject.next(true);
  //         }
  //       })
  //     );
  //   }
  //   signOut() {
  //     localStorage.removeItem("ACCESS_TOKEN");
  //     localStorage.removeItem("EXPIRES_IN");
  //     this.authSubject.next(false);
  //   }
  //   isAuthenticated() {
  //     return  this.authSubject.asObservable();
  // }
    addUser(user){
      const headers = new HttpHeaders();
// headers.append('Content-Type', 'multipart/form-data');
      headers.append('Content-Type', 'application/json');
      // headers.append('X-XSRF-TOKEN',this.token);
      console.log(user);

      // req = req.clone({headers: req.headers.set(this.headerName, token)});
  
      return this.http.post(this.apiUrl,user, {
        headers: headers
        });
      // return this.http.post(this.apiUrl,user,{ headers: new HttpHeaders().set(['Content-Type':'application/json','X-XSRF-TOKEN':this.token]) });
      // return this.http.post(this.apiUrl,user,{ headers: new HttpHeaders().set('X-XSRF-TOKEN',this.token) });
    }

    updateUser(user){
      console.log("updateDeleted2");
      return this.http.put(this.apiUrl,user);
    }
    deleteUser(id){
      console.log("userDeleted2");
      return this.http.delete(`${this.apiUrl}/${id}`);
    }

}
