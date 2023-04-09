import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import path from 'node:path';
import fs from 'node:fs'
import { fromEvent } from 'rxjs';
import { filter, share, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  loading = false;
  @Output() folderSelected = new EventEmitter<File[]>();

  constructor() { }

  ngOnInit(): void { }

  onFolderSelected(event: Event): void {
    const files: FileList | null = (event.target as HTMLInputElement).files;
    if (files) {
      const fileList: File[] = Array.from(files);
      this.folderSelected.emit(fileList);
    }
  }
}
