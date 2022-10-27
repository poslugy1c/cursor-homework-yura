import { useState } from "react";
import Contact from "./Contact";

const FillContacts = () => {
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

    const [stateContacts, setContacts] = useState(contacts);

    const render = (contacts) => {
        return (
            contacts.map((contact) => {
                return <Contact key={contact.lastName + contact.firstName} {...contact} />
            })
        );
    };

    const findData = (value) => {
        const findContacts = contacts.filter((elContact) => {
            elContact.firstName.toLowerCase().includes(value.toLowerCase())
                || elContact.lastName.toLowerCase().includes(value.toLowerCase())
                || elContact.phone.includes(value)
        })

        setContacts(() => {
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
            {render(stateContacts)}
        </div>
    );
};

export default FillContacts;