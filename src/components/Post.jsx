import { paragraf } from "../styles/Post.module.css";

export default function Post({ props: { id, title, body } }) {
  return (
    <div>
      <h3>
        #{id}. {title}
      </h3>
      <p className={paragraf}>{body}</p>
    </div>
  );
}
