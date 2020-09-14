module.exports = {
    beforeEach: (client) => {
       client
           .url(`${client.launch_url}/filling-out-forms/`)
    },

//    "Should successfully fill out the left form": (client) =>{
//        client
//            .verify.title('Filling Out Forms - Ultimate QA')
//            .setValue('#et_pb_contact_name_0', 'John Doe')
//            .setValue('#et_pb_contact_message_0', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
//            .submitForm('#et_pb_contact_form_0 form')
//            .expect.element('#et_pb_contact_form_0').text.to.be.equal('Form filled out successfully')
//    },

   "Should successfully fill out the left form using -  Page Object": (client) => {
           const FormPage = client.page.FormPage();
           const rightForm = FormPage.section.rightForm;
           FormPage
               .navigate()
               .verify.title('Filling Out Forms - Ultimate QA')
               .enterNameAndMessage('John Doe', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.')
               .submitLeftForm()
               .verify.containsText('@lblLeftFormMessage', 'Form filled out successfully')
           rightForm.expect.element('@txtName').to.be.visible
   },

   "Should verify error message when the left form is not filled out and submitted": (client) => {
        client
           .submitForm('#et_pb_contact_form_0 form')
           .verify.containsText('#et_pb_contact_form_0 > div:nth-child(1)', 
                   'Please, fill in the following fields:\nName\nMessage')
   },

   after: (client) => {
       client.end();
   }
};