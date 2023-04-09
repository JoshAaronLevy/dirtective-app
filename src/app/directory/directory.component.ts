import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
