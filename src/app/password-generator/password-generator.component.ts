import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.scss'
})
export class PasswordGeneratorComponent {
  form: FormGroup;
  copySuccess: boolean = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      passwordText: [""],
      passwordLength: [10],
      includeUppercase: [false],
      includeLowercase: [false],
      includeNumbers: [false],
      includeSymbols: [false],
    });
  }

  generatePassword() {
    const length = this.form.get('passwordLength')?.value;
    const includeUppercase = this.form.get('includeUppercase')?.value;
    const includeLowercase = this.form.get('includeLowercase')?.value;
    const includeNumbers = this.form.get('includeNumbers')?.value;
    const includeSymbols = this.form.get('includeSymbols')?.value;

    let charset = '';
    if (includeUppercase) {
      charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeLowercase) {
      charset += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeNumbers) {
      charset += '0123456789';
    }
    if (includeSymbols) {
      charset += '!@#$%^&*()_+[]{}|;:,.<>?';
    }

    if (!charset) {
      charset = 'abcdefghijklmnopqrstuvwxyz';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    this.form.get('passwordText')?.setValue(password);
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.form.get('passwordText')?.value).then(
      () => {
        this.copySuccess = true;
        console.log('Text copied successfully!');
      },
      (err) => {
        console.error('Failed to copy text: ', err);
      }
    );
  }
}
