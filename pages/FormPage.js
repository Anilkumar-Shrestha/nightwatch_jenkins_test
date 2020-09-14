const elements = {
    // shorthand definition
    leftFormName: "#et_pb_contact_name_0",

    //full defintion
    leftFormMessage: {
       selector: '#et_pb_contact_message_0',
       locateStrategy: 'css selector',
    },

    form: '#et_pb_contact_form_0 form',
    btnSubmit: `#et_pb_contact_form_0 form button`,
    lblLeftFormMessage: '#et_pb_contact_form_0 > div:nth-child(1)'
};

const commands = [
     {
         /**
          * Enters the given name and message into the left form feilds
          * 
          * @param {String} name
          * @param {String} message
          */
         enterNameAndMessage(name, message){
               return this
                       .setValue('@leftFormName', name)
                       .setValue('@leftFormMessage', message)
         },

         submitLeftForm(){
               return this.click('@btnSubmit')
         }
     }
];

module.exports = {
   elements: elements,
   commands: commands,
   url: function() {
       return `${this.api.launchUrl}/filling-out-forms/`
   },

   sections: {
       rightForm: {
           selector: '#et_pb_contact_form_1',
           elements: {
               txtName: '#et_pb_contact_name_1',
               txtMessage: '#et_pb_contact_message_1',
               btnSubmit: 'button'
           },
           commands: [
               {
                   enterName(name){
                       return this
                                .setValue('@txtName', name)
                   }
               }
           ]
       } 
   }
}