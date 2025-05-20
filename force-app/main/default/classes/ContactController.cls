public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getRecentContacts() {
        return [SELECT Id, Name FROM Contact ORDER BY CreatedDate DESC LIMIT 10];
    }
}
