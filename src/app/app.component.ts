import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IEncryptionStrategy } from './models/encryption-strategy.interface';
import { EncryptionService } from './services/encryption.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public form: FormGroup = this.fb.group({
    openText: '',
    closedText: '',
    key: '',
  });

  public get formValue(): {
    openText: string;
    closedText: string;
    key: string;
  } {
    return this.form.value;
  }

  constructor(
    private fb: FormBuilder,
    private encryptionService: EncryptionService
  ) {}

  public onStrategySelect(strategy: IEncryptionStrategy) {
    this.encryptionService.setEncryptionStrategy(strategy);
  }

  public onEncryptionButtonClick() {
    this.form.patchValue({
      closedText: this.encryptionService.encrypt(
        this.formValue.openText,
        this.formValue.key
      ),
    });
  }
}
