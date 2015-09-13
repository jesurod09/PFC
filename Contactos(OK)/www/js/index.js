
        document.addEventListener("deviceready", onDeviceReady, false);

        // Esperar a que el dispositivo esté listo
        function onDeviceReady() {
            window.addEventListener('load', function() {
            new FastClick(document.body);
            }, false);
        }
        
        // Función que se ejecuta cuando se quiere añadir un contacto
        function add_contact()
        {
            intel.xdk.contacts.addContact();
        }
        // Listener que desencadena la función add_contact()
        document.addEventListener('intel.xdk.contacts.add', function(evt){
            if(evt.success == true)
            {
                import_contacts();
                alert("Contacto "+evt.contactid+" añadido con éxito");
            }
            else
            {
                alert("Acción añadir contacto cancelada");
            }
        });
        
        // Función que se ejecuta cuando se selecciona un contacto
        function select_a_contact()
        {
            intel.xdk.contacts.chooseContact();
        }
        // Listener que desencadena la ejecución de la función select_a_contact()
        document.addEventListener('intel.xdk.contacts.choose', function(evt){
            if (evt.success == true)
            {
                var contactID = evt.contactid;
                
                //Esta función devuelve información el contacto en función de su id
                var contactInfo = intel.xdk.contacts.getContactData(contactID);
                
                var firstName = contactInfo.first;
                var lastName = contactInfo.last;
                var phoneNumbers = contactInfo.phones;
                var emails = contactInfo.emails;
                var address = contactInfo.addresses;
                
                alert(firstName + lastName);
            }
            else if (evt.cancelled == true)
            {
                alert("Acción Seleccionar Contacto cancelada");
            }
        });
        
        
        // Función que se ejecuta cuando se quieren listar los contactos
        function import_contacts()
        {
            intel.xdk.contacts.getContacts();
        }
        // Listener que desencadena la función import_contacts()
        document.addEventListener('intel.xdk.contacts.get', display_contacts, false);
                                  
        function display_contacts(evt)
        {
            var myContacts = intel.xdk.contacts.getContactList();
            
            document.getElementById("contacts_list").innerHTML = "";
            
            for(var i=0; i < myContacts.length; i++) 
           {
               var contactID = myContacts[i];
               
               var contactInfo = intel.xdk.contacts.getContactData(contactID);
               var firstName = contactInfo.first;
               var lastName = contactInfo.last;
               
               var html = "<li>Name: " + firstName + " " + lastName + " <br> <button onclick='remove_contact(" + contactID + ")'>Remove</button><button onclick='edit_contact(" + contactID + ")'>Edit</button></li>";
                document.getElementById("contacts_list").innerHTML = document.getElementById("contacts_list").innerHTML + html;
            }
        }
        
        function remove_contact(contactID)
        {
            intel.xdk.contacts.removeContact(contactID);

        }
        
        document.addEventListener('intel.xdk.contacts.remove', function(evt){
            if (evt.success == true)
            {   
                import_contacts();
                alert("Contact has been removed");
            }
            else
            {
                alert("Contact couldn't be deleted");
            }
        });  
        
        function edit_contact(contactID)
        {
            intel.xdk.contacts.editContact(contactID);
        }
        
        document.addEventListener('intel.xdk.contacts.edit', function(evt){
            if (evt.success == true)
            {
                import_contacts();
                alert("Contact has been edited");
            }
            else if (evt.cancelled == true)
            {
                alert("Edit Contact Cancelled");
            }
        });
        
    