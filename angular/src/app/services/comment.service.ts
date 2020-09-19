import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_PREFIX = "http://localhost:3001";

@Injectable({
  providedIn: "root"
})
export class CommentService {

  constructor(private http: HttpClient) {}

  /**
   * Reset comments back to original state.
   */
  resetComments(): Observable<object> {
    return this.http.post(`${API_PREFIX}/reset-comments`, {});
  }

  getComments(): Observable<object> {
    return this.http.get(`${API_PREFIX}/comments`, {});
  }

  deleteComment(id): Observable<object> {
    return this.http.delete(`${API_PREFIX}/comments/${id}`, {});
  }

  addComment(): Observable<object> {
    return this.http.post(`${API_PREFIX}/comments/`, {});
  }

  searchComment(value): Observable<object> {
    return this.http.get(`${API_PREFIX}/comments?q=${value}`, {});
  }
}
