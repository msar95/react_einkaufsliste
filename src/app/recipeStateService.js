export function sumRecipes(recipes) {
  return recipes
    .reduce((list, recipe) => {
      //erstes Argument = Rückgabewert des vorherigen Durchlaufs
      return [...list, ...recipe.ingredients]; // mergen der bisherigen Liste mit der neuen Liste -> zusammnegefügte List
    }, []) // da beim ersten Durchlauf noch kein Rückgabewert des vorherigen Durchlaufs existiert wird ein leerer Array zurückgegeben
    .reduce((list, ingredient) => {
      const existingIngredient = list.find(
        (currentIngredient) => currentIngredient.name === ingredient.name
      );
      //The find() method returns the value of the first element that passes a test. -> otherwise undefined
      if (existingIngredient) {
        existingIngredient.amount += ingredient.amount;
      } else {
        list.push(ingredient);
      }

      return list;
    }, []);
}
