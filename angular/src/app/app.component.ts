import { Component, OnInit } from "@angular/core";

import { CommentService } from './services/comment.service';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "comment-feed-app";
  commentSectionForm: FormGroup;
  showError = false;
  errorMsg = '';
  showComments;

  constructor(private commentService: CommentService,
    private fb: FormBuilder) {
      this.commentSectionForm = this.fb.group({
        searchComment: [''],
        addComment: ['']
      });
    }

    ngOnInit() {
      this.getAllComments();
    }

    getAllComments() {
      this.commentService.getComments().subscribe((res) => {
        if (res['code'] = '200 OK') {
          this.showComments = res;
        }
      });
    }

  submitClicked() {
    this.commentService.addComment().subscribe((res) => {
      if (res['code'] = '201 Created') {
        this.showError = false;
        this.getAllComments();
      } else {
        this.showError = true;
        this.errorMsg = 'Sorry record is not added. Please try again later'
      }
    });
  }

  searchComment() {
    this.commentService.searchComment(this.commentSectionForm.controls['searchComment'].value).subscribe((res) => {
      this.showError = false;
      if (res['code'] = '200 OK') {
        this.showComments = res;
      } else {
        this.showComments = [];
      }
    });
  }

  resetCommentFeed() {
    this.commentSectionForm.controls['searchComment'].reset('');
    this.commentSectionForm.controls['addComment'].reset('');
    this.commentService.resetComments().subscribe((res) => {
      if (res['code'] = '204 No Content') {
        this.getAllComments();
      }
    })
  }

}
