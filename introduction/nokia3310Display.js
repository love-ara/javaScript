const prompt =  require('prompt-sync')();

class PhoneBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    display() {
        console.log('Contacts:');
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.name} (${contact.phoneNumber})`);
        });
    }

    search(name) {
        const foundContact = this.contacts.find(contact => contact.name === name);
        return foundContact ? foundContact : 'Contact not found';
    }

    delete(name) {
        this.contacts = this.contacts.filter(contact => contact.name !== name);
    }
}

class Contact {
    constructor(name, address, phoneNumber, email) {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

const phoneBook = new PhoneBook();

function display1() {
    console.log('PHONE');
    console.log('Speed dial');
    console.log('Enter "1" to view contacts');
    console.log('Enter "2" to add contacts');
    console.log('Enter "3" to search contacts');
    console.log('Enter "4" to delete contact');
    console.log('Enter "0" to EXIT');
    const dial = parseInt(prompt('Enter your choice: '));
    methodCall(dial);
}

function methodCall(number) {
    switch (number) {
        case 1:
            phoneBook.display();
            returnTo();
            break;
        case 2:
            input();
            break;
        case 3:
            console.log('Enter name:');
            const name = prompt('Enter your choice: ');
            try {
                console.log(phoneBook.search(name));
                returnTo();
            } catch (error) {
                console.log('Search not found!');
            }
            break;
        case 4:
            console.log('Enter contact name to delete:');
            const nameToDelete = prompt('Enter your choice: ');
            phoneBook.delete(nameToDelete);
            returnTo();
            break;
        case 5:
            back();
            break;
        default:
            console.log('Nothing here');
            back();
    }
}

function input() {
    const name = prompt('Enter name: ');
    const phoneNumber = prompt('Enter phone number: ');
    const email = prompt('Enter email: ');
    const address = prompt('Enter address: ');
    console.log('Contact added!');
    contact(name, address, phoneNumber, email);
}


function contact(name, address, phoneNumber, email) {
    const contact = new Contact(name, address, phoneNumber, email);
    add(contact);
}

function add(contact) {
    phoneBook.addContact(contact);
    console.log('Enter "2" to add another contact or "5" to view menu');
    const enter = prompt('Enter your choice: '); 
    methodCall(enter);
}

function back() {
    console.log('Enter "1" to view contacts');
    console.log('Enter "2" to add contacts');
    console.log('Enter "3" to search contacts');
}

 display1();
