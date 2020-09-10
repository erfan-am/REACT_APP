import { createContext } from "react";
const DUMY_IMAGES = [
  {
    creator: "erfan",
    creatorImg:
      "data:image/jpeg;base64,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",
    image:
      "https://minitercomau.files.wordpress.com/2016/12/luxury-home-construction-sydney.jpg?w=1108&h=737&crop=1",
    place: "america-ls",
    id: "1",
    like: false,
    likes: 185,
    comments: [
      {
        name: "ali",
        img:
          "https://www.dhresource.com/0x0s/f2-albu-g5-M00-95-DB-rBVaI1lM0FiATYLpAABn6YHdvzw874.jpg/women-girs-natrual-long-wavy-full-head-wig.jpg",
        comment: "wowwww"
      },
      {
        name: "faranak",
        img:
          "https://pm1.narvii.com/7593/b3c3397951d3698c1e2b0fbccc3a020ba8bdba4dr1-720-737v2_uhq.jpg",
        comment: "howw its greate pic"
      }
    ]
  },
  {
    creator: "faranak",
    creatorImg:
      "https://i.insider.com/5d51bac1dcc1e71f8d1394c3?width=1100&format=jpeg&auto=webp",
    image:
      "https://architecturepin.com/wp-content/uploads/2018/04/adoublebayextbaljcrc-15234710374ngk8-700x460.jpg",
    place: "california",
    id: "2",
    like: false,
    likes: 520,
    comments: [
      {
        name: "negar",
        img:
          "https://1.bp.blogspot.com/-dZLiQaXgPew/X082k2HhFeI/AAAAAAAAEA4/WKOlXFNH77Y-3AsO0Ie-aiK7oVUrQlC4gCNcBGAsYHQ/s640/alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg",
        comment: "greate house"
      },
      {
        name: "erfan",
        img:
          "https://i.pinimg.com/originals/25/6b/0d/256b0d4ba14aac11555e09548ee09f9d.jpg",
        comment: "god kll me"
      }
    ]
  },
  {
    creator: "Arshavir",
    creatorImg:
      "data:image/jpeg;base64,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",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/12/16/633584-pexels-photo-368893.jpg",
    place: "Tabat",
    id: "3",
    like: false,
    likes: 320,
    comments: [
      {
        name: "mohadese",
        img:
          "https://pbs.twimg.com/profile_images/691698217642229760/zzlCj9bz.jpg",
        comment: "want it "
      },
      {
        name: "paravaneh",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMTy5GSJbc33Oo_ksKb4NRhGAjePhUIG1kEg&usqp=CAU",
        comment: "waaant"
      }
    ]
  }
];
const USER = [
  {
    name: "erfan",
    id: "1",
    email: "Erfanam582@gmail.com",
    job: "developer",
    img:
      "https://19d3782b340d3615223a-8b8ea69741e8d4c89e10e075b4ccc0a2.ssl.cf3.rackcdn.com/6158_t_f907d6c2-da03-4834-aff9-dd23f9660d85.jpg",
    images: [
      {
        place: "russa",
        img: "",
        bio: "hooooow i am?",
        data: new Date().getFullYear()
      },

      {
        place: "california",
        img: "",
        bio: "the people are very kind ):",
        data: new Date().getFullYear()
      }
    ],
    bio: "a person whoe  try so hard"
  },
  {
    name: "faranak",
    id: "2",
    email: "faranak@gmail.com",
    job: "teacher",
    img:
      "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1080529720%2F960x0.jpg%3Ffit%3Dscale",
    images: [
      {
        place: "island",
        img: "",
        bio: "good travel with wife",
        data: new Date().getFullYear()
      },

      {
        place: "ingland",
        img: "",
        bio: "gong to dogs",
        data: new Date().getFullYear()
      }
    ],
    bio: "a dauhthrt with beautiful eyes"
  },

  {
    name: "mohadese",
    id: "3",
    email: "mohadese@gmail.com",
    job: "doctor",
    img:
      "https://i.pinimg.com/originals/13/c8/2f/13c82f246b0cf8313b4b030a1c2d2b56.jpg",
    images: [
      {
        place: "iran",
        img: "",
        bio: "takhte jamshid is extroradinary",
        data: new Date().getFullYear()
      },

      {
        place: "french",
        img: "",
        bio: "weather is very gooood",
        data: new Date().getFullYear()
      }
    ],
    bio: "best dentist in the world"
  }
];
export const ContextAPI = createContext(DUMY_IMAGES);
export const UserContextApi = createContext(USER);
