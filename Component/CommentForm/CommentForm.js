import { FormContainer } from "@/styles";
export default function CommentForm({ onAddComment, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddComment(slug, data.Comment);
    event.target.reset();
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <label htmlFor="Comment"> Add Comment</label>
      <input type="text" name="Comment"></input>
      <button type="submit">Send</button>
    </FormContainer>
  );
}
