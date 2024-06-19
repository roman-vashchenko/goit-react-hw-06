import css from "../Contact/Contact.module.css";
const Contact = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <div className={css.wrap}>
      <div className={css.content}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
        className={css.btn}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
