import * as actionTypes from "./actionTypes";

const initialState = {
  data: {
    personalInfo: {
      name: {
        id: "name",
        value: "Alojzy",
        label: "Name",
        type: "text",
      },
      surname: {
        id: "surname",
        value: "Safanduła",
        label: "Surname",
        type: "text",
      },
      city: {
        id: "city",
        value: "Zagreb",
        label: "City",
        type: "text",

        isActive: true,
      },
      address: {
        id: "address",
        value: "Adressowa 14/88",
        label: "address",
        type: "text",

        isActive: true,
      },

      zipCode: {
        id: "zipCode",
        value: "23-222",
        label: "Zip Code",
        type: "text",

        isActive: true,
      },
      birthDate: {
        id: "birthDate",
        value: "2000-11-11",
        label: "Birth date",
        type: "date",

        isActive: true,
      },
    },
    contact: {
      phone: {
        id: "phone",
        value: "+33 123 444 421",
        label: "phone number",
        type: "tel",
      },
      email: {
        id: "email",
        value: "test@test.com",
        label: "e-mail",
        type: "text",
      },

      website: {
        id: "website",
        value: "www.testside.com",
        label: "Website",
        type: "text",
        isActive: true,
      },
      facebook: {
        id: "facebook",
        value: "www.facebook.com",
        label: "Facebook",
        type: "text",
        isActive: true,
      },
      linkedin: {
        id: "linkedin",
        value: "www.linkedin.com",
        type: "text",
        label: "LinkedIn",
        isActive: true,
      },
      github: {
        id: "github",
        value: "www.github.com",
        type: "text",
        label: "Git Hub",
        isActive: true,
      },
    },
    work: [
      {
        place: {
          id: "place",
          value: "Wall Street",
          type: "text",
          label: "name",
        },
        specialization: {
          id: "specialization",
          value: "Analitycs of analize",
          type: "text",
          label: "Your specialization",
        },
        skills: {
          id: "skills",
          value: [],
          type: "text",
          label: "skills",
        },
        date: {
          id: "date",
          value: ["2010-03", "2011-11"],
          type: "month",
          label: "work date",
        },
      },
    ],
    school: [
      {
        place: {
          id: "place",
          value: "Oxford University",
          type: "text",
          label: "name",
        },
        specialization: {
          id: "specialization",
          value: "Campus tents logistic manager",
          type: "text",
          label: "Your specialization",
        },
        skills: {
          id: "skills",
          value: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quia?",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quia?",
          ],
          type: "text",
          label: "skills",
        },
        date: {
          id: "date",
          value: ["2011-09", "2011-10"],
          type: "month",
          label: "date",
        },
      },
    ],
    language: [
      {
        language: {
          id: "language",
          value: "Spanish",
          type: "text",
          label: "language name",
        },
        level: {
          id: "level",
          value: "Elementary",
          type: "text",
          label: "Your level",
        },
        skills: {
          id: "skills",
          value: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quia?",
          ],
          type: "text",
          label: "skills",
        },
      },
    ],
    otherInfo: [
      {
        id: "skills",
        skills: {
          value: [],
        },
        label: "Skills",
        type: "text",
      },

      {
        id: "courses",
        skills: {
          value: [],
        },
        label: "Courses",
        type: "text",
      },

      {
        id: "hobby",
        skills: {
          value: [],
        },
        label: "Interests",
        type: "text",
      },
    ],
    photo: {
      id: "photo",
      value:
        "https://scontent-vie1-1.xx.fbcdn.net/v/t31.0-8/11077388_943919848993811_7908546017701811595_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=ZWfic2C4JvcAX__XNg2&_nc_ht=scontent-vie1-1.xx&oh=77bd609021e76e3e3a91370a024e0ee4&oe=5FE01DED",
      label: "image",
      type: "text",
      placeholder: "paste URL link to your photo",
      isShowed: false,
    },
    aboutMe: {
      aboutMe: {
        isActive: true,
        id: "aboutMe",
        value:
          "Hi, I'm Algae LED fotobioreactoren zijn de wereldwijde introductie van grootschalige volcontinue locatie onafhankelijk voedselveilige micro-algen teelt en verdere",
        label: "About me",
        type: "text",
      },
    },
  },
  isSumbitted: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FORM_DATA:
      return {
        ...state,
        isSumbitted: true,
        data: action.data,
      };

    default:
      return state;
  }
};
