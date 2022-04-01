import React from 'react';

function RecipeDetails() {
  return (
    <section data-testid="recipe-details">
      <img data-testid="recipe-photo" alt="recipe-img" />
      <h1 data-testid="recipe-title">titulo</h1>
      <button type="button" data-testid="share-btn">compartilhar</button>
      <button type="button" data-testid="favorite-btn">favoritar</button>
      <p data-testid="recipe-category">categoria</p>
      <p data-testid="$index-ingredient-name-and-measure">ingredients</p>
      <p data-testid="instructions">intruções</p>
      <a data-testid="video" href="https://www.youtube.com/watch?v=g-X_ACmw8GY">video</a>
      <div data-testid="$index-recomendation-card">receitas recomendadas</div>
      <button data-testid="start-recipe-btn" type="button">iniciar receita</button>
    </section>
  );
}

export default RecipeDetails;
