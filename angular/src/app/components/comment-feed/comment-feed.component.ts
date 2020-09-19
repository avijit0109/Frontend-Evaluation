import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from "@angular/core";

import { CommentService } from "./../../services/comment.service";

@Component({
  selector: "app-comment-feed",
  templateUrl: "./comment-feed.component.html",
  styleUrls: ["./comment-feed.component.css"]
})
export class CommentFeedComponent implements OnInit, OnChanges {
  @Input('commentValue') commentValue;
  @Output() deleteCliked: EventEmitter<any> = new EventEmitter();
  comments: Comment[];
  errorMessage = "";
  allComments;

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    if (this.commentValue.length != 0) {
      this.allComments = this.commentValue;
    } else {
      this.allComments = [];
    }
  }

  ngOnChanges() {
    this.allComments = this.commentValue;
  }

  deleteComment(idToDelete) {
    this.commentService.deleteComment(idToDelete).subscribe((res) => {
      if (res['code'] = '200 OK') {
        this.deleteCliked.emit(true);
      }
    });
  }
}
