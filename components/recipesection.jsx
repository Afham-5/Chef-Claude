import ReactMarkdown from "react-markdown";
export default function RecipeSection(props) {
  return (
    props.boolrecipe && (
      <section className="suggested-recipe-container" aria-live="polite">
        <h2>Chef Claude Recommends:</h2>
        <ReactMarkdown>{props.result}</ReactMarkdown>
      </section>
    )
  );
}
