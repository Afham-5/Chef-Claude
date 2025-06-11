export default function IngredientsList(props) {
  return (
    <section>
      {props.length > 0 ? <h2>Ingredients on hand:</h2> : null}
      <ul className="ingredients-list" aria-live="polite">
        {props.items}
      </ul>

      <div className="get-recipe-container">
        <div>
          <h3>Ready for a recipe?</h3>
          {props.length < 4 ? (
            <p>Add atleast 4 ingredients to generate a Recipe.</p>
          ) : (
            <p>Generate a recipe from your list of ingredients.</p>
          )}
        </div>

        {props.length > 3 && (
          <button onClick={props.showrecipefunc}>Get a recipe</button>
        )}
      </div>
    </section>
  );
}
