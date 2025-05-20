import { LightningElement, wire } from 'lwc';
import getRecentContacts from '@salesforce/apex/ContactController.getRecentContacts';

export default class RecentContactsPicklist extends LightningElement {
    values = [];

    @wire(getRecentContacts)
    wiredContacts({ error, data }) {
        if (data) {
            this.values = data.map(contact => ({
                label: contact.Name,
                value: contact.Id,
                selected: false
            }));
        } else if (error) {
            // handle error as needed
            // eslint-disable-next-line no-console
            console.error(error);
        }
    }
}
