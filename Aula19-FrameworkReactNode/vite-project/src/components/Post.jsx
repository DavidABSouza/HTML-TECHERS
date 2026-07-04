import { useState } from "react";

export function Post(props) {
    const [likes, setLikes] = useState(0);

    function handleLike() {
        setLikes((estadoAnterior) => estadoAnterior +1);
    }

    return (
        <article classname="post-card">
            <header>
                <strong>@{props.author}</strong>
                <span>
                    Sent a vibe: <strong>{props.vibe}</strong>
                </span>
            </header>
            
            <p>{props.content}</p>

            <footer>
                {/*Evento que dispara a reatividade*/}
                <button onClick={handleLike} className="btn-like">
                    Curtir Vibe ({likes})
                </button>
            </footer>
        </article>
    );
}