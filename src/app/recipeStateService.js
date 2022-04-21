export function sumRecipes(recipes) {
  return recipes.reduce((list, recipe) => {
    //erstes Argument = Rückgabewert des vorherigen Durchlaufs
    return [...list, ...recipe.ingredients]; // mergen der bisherigen Liste mit der neuen Liste -> zusammnegefügte List
  }, []); // da beim ersten Durchlauf noch kein Rückgabewert des vorherigen Durchlaufs existiert wird ein leerer Array zurückgegeben
}
