import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService],
})
export class CategoryComponent implements OnInit {
  title = 'Categories';

  constructor(
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getAll().subscribe((data) => {
      this.categories = data;
    })
  }

  categories: Category[] = [];
}
