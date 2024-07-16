import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.scss'
})
export class PasswordGeneratorComponent {
  form: FormGroup;
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
    // lógica para gerar a senha
  }
}
