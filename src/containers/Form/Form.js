import React from 'react';


class Form extends React.Component {
    state = {
        basic: {
         name: {
            id: "name",
            value: "",
            position: "basic",
            type: "text",
            desc: "Imię",
          },
         surname: {
            id: "surname",
            value: "",
            position: "basic",
            type: "text",
            desc: "Nazwisko",
          },
        city:  {
            id: "city",
            value: "",
            position: "basic",
            type: "text",
            desc: "Miasto",
            isActive: true,
          },
        adress:  {
            id: "adress",
            value: "",
            position: "basic",
            type: "text",
            desc: "Adres",
            isActive: true,
          },
        birthDate: {
            id: "birthDate",
            value: "",
            position: "basic",
            type: "date",
            desc: "Data urodzenia",
            isActive: true,
          },
        phone:  {
            id: "phone",
            value: "",
            type: "text",
            desc: "Numer telefonu",
          },
        email:  {
            id: "email",
            value: "",
            type: "text",
            desc: "adres e-mail",
          },
        facebook:  {
            id: "facebook",
            value: "",
            type: "text",
            desc: "facebook",
            isActive: true,
          },
        linkedin:  {
            id: "linkedin",
            value: "",
            type: "text",
            desc: "linkedin",
            isActive: true,
          },
        },
        work: [
         { company:  {
              value: "",
              type: "text",
              placeholder: "Nazwa Firmy",
            },
          post:  {
              value: "",
              type: "text",
              placeholder: "Twoje stanowisko",
            },
            skills: {
              value: [""],
              type: "text",
              placeholder: "Nabyte umiejętności",
            },
            workDate: { 
                name: "date", 
                value: ["", ""],
                type: "month" },
          }
        ],
        school: [
            { 
                schoolName:  {

                 value: "",
                 type: "text",
                 placeholder: "Nazwa szkoły",
               },
               specialization:  {
                 value: "",
                 type: "text",
                 placeholder: "Twoje stanowisko",
               },
               skills: {
                 value: [""],
                 type: "text",
                 placeholder: "Nabyte umiejętności",
               },
               schoolDate: { 
                   value: ["", ""],
                   type: "month" },
             }
           ],
    
        
      };


      render(){
          return
      }
}

export default Form