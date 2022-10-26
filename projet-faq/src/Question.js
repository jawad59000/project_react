import { TbPlus, TbMinus } from "react-icons/tb";

const Question = ({ info, title, id, randleClick, etat }) => {
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          id={id}
          onClick={() => {
            randleClick(id);
          }}
        >
          {!etat ? <TbPlus /> : <TbMinus />}
        </button>
      </header>
      {etat ? <p>{info}</p> : <p></p>}
    </article>
  );
};

export default Question;
