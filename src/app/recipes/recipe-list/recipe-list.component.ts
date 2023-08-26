import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.thespruceeats.com/thmb/h9hTzwViqJIVYDuWQzc8xi7cB48=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/caramel-flan-individual-servings-2343004-hero-01-44e1e9d1ab954ef990505d69e19e856c.jpg'
    ),
    new Recipe(
      'A Another Recipe',
      'This is another a test',
      'https://picturetherecipe.com/wp-content/uploads/2018/06/Chicken-Cutlets-by-PictureTheRecipe-Featured-395x500.jpg'
    ),
  ];
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
