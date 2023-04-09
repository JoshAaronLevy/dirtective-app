import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'dirtective';
  uploadedFiles: any[] = [];
  loading = false;
  maxFileSize: any;

  constructor(private messageService: MessageService) { }

  handleFolderSelected(files: File[]): void {
    console.log('Files in the selected folder:\n', files);
  }

  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  onUpload(event: { files: any; }) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    console.log(this.uploadedFiles);
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }
}
