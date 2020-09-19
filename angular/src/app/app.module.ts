import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";


import { AppComponent } from "./app.component";
import { CommentFeedComponent } from "./components/comment-feed/comment-feed.component";
import { SearchCommentComponent } from './components/search-comment/search-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentFeedComponent,
    SearchCommentComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
