import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  editMode = false;
  isSubmitted = false;
  form: FormGroup;
  categories = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      countInStock: ['', Validators.required],
      description: ['', Validators.required],
      richDescription: [''],
      image: [''],
      // isFeatured: [''],
    });

    this.categoriesService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

  onSubmit() {
    this.isSubmitted = true;
    if(this.form.invalid) {
      return;
    }

    const productFormData = new FormData();
    

    // Object.keys(this.form).map((key) => {
    //   console.log(key);
    //   console.log(this.form[key].value);
    // })
  }

  cancel() {
    this.router.navigate(['/products']);
  }
}
