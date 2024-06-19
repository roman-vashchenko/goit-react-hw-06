import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li key={contact.id} className={css.item}>
            <Contact contact={contact} deleteContact={deleteContact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
