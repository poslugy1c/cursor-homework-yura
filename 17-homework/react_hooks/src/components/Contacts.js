import { useState } from "react";
import Contact from "./Contact";

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

const FillContacts = () => {

    const [stateContacts, setContacts] = useState(contacts);

    const findData = (value) => {
        // console.log(contacts);
        const findContacts = contacts.filter((elContact) => elContact.firstName.toLowerCase().includes(value.toLowerCase())
            || elContact.lastName.toLowerCase().includes(value.toLowerCase())
            || elContact.phone.includes(value));

        setContacts(() => {
            // console.log(findContacts);
            return findContacts;
        });
    };

    return (
        <div className="contactsTable">
            <h1>Пошук контактів</h1>
            <input
                type="text"
                placeholder=" Знайти"
                onChange={(event) => findData(event.target.value)}
            />
            {stateContacts.map((stateContacts) => {
                return <Contact key={stateContacts.lastName + new Date().toString()} {...stateContacts} />
            })}
        </div>
    );
};

export default FillContacts;