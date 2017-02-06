const initialState = 
{
 byId : {
  1 : {
        id: 1,
        name: "Human",
        "type": "Goodkin",
        "strmod": 1.0,
        "conmod": 1.0,
        "dexmod": 1.0,
        "spdmod": 1.0,
        "lkmod": 1.0,
        "iqmod": 1.0,
        "wizmod": 1.0,
        "chrmod": 1.0,
        "abilities": ["Second chance LK"],
        "heightmod": 1.0,
        "weightmod": 1.0
  },
  2 : {
        id: 2,
        name: "Dwarf (Gristlegrim)",
        "type": "Goodkin",
        "strmod": 2.0,
        "conmod": 2.0,
        "dexmod": 1.0,
        "spdmod": 1.0,
        "lkmod": 0.75,
        "iqmod": 1.0,
        "wizmod": 1.0,
        "chrmod": 1.0,
        "abilities": ["Low light vision","Mineral sensitivity"],
        "heightmod": 0.67,
        "weightmod": 2.0
  },
  3 : {
        id: 3,
        name: "Dwarf (Midgardian)",
        "type": "Goodkin",
        "strmod": 2.0,
        "conmod": 2.0,
        "dexmod": 1.0,
        "spdmod": 1.0,
        "lkmod": 1.0,
        "iqmod": 1.0,
        "wizmod": 1.0,
        "chrmod": 0.75,
        "abilities": ["Low light vision","Mineral sensitivity"],
        "heightmod": 0.67,
        "weightmod": 0.80
  },
  4 : {
        id: 4,
        name: "Elf",
        "type": "Goodkin",
        "strmod": 1.0,
        "conmod": 0.67,
        "dexmod": 1.33,
        "spdmod": 1.0,
        "lkmod": 1.0,
        "iqmod": 1.5,
        "wizmod": 1.5,
        "chrmod": 1.5,
        "abilities": ["Aversion to iron"],
        "heightmod": 1.1,
        "weightmod": 1.0
  },
  5 : {
        id: 5,
        name: "Fairy",
        "type": "Goodkin",
        "strmod": 0.25,
        "conmod": 0.25,
        "dexmod": 1.75,
        "spdmod": 1.0,
        "lkmod": 1.5,
        "iqmod": 1.0,
        "wizmod": 2.0,
        "chrmod": 1.5,
        "abilities": ["Flight"],
        "heightmod": 0.10,
        "weightmod": 0.01
  },
  6 : {
        id: 6,
        name: "Hobb",
        "type": "Goodkin",
        "strmod": 0.5,
        "conmod": 2.0,
        "dexmod": 1.5,
        "spdmod": 1.0,
        "lkmod": 1.5,
        "iqmod": 1.0,
        "wizmod": 1.0,
        "chrmod": 1.0,
        "heightmod": 0.50,
        "weightmod": 0.75
  },
  7 : {
        id: 7,
        name: "Leprechaun",
        "type": "Goodkin",
        "strmod": 0.33,
        "conmod": 0.67,
        "dexmod": 1.5,
        "spdmod": 1.0,
        "lkmod": 1.5,
        "iqmod": 1.25,
        "wizmod": 1.5,
        "chrmod": 1.0,
        "abilities": ["Teleport"],
        "heightmod": 0.33,
        "weightmod": 0.10
  },
  8 : {
        id: 8,
        name: "Centaur",
        "type": "Illkin",
        "strmod": 3.0,
        "conmod": 3.0,
        "dexmod": 1.0,
        "spdmod": 1.0,
        "lkmod": 1.0,
        "iqmod": 1.0,
        "wizmod": 0.5,
        "chrmod": 2.0,
        "abilities": ["Healing"],
        "heightmod": 1.50,
        "weightmod": 8.00
  },
  9 : {
        id: 9,
        name: "Dakk",
        "type": "Illkin",
        "strmod": 2.0,
        "conmod": 2.0,
        "dexmod": 1.0,
        "spdmod": 1.0,
        "lkmod": 0.8,
        "iqmod": 1.1,
        "wizmod": 1.1,
        "chrmod": 0.75,
        "abilities": ["Low light vision","Mineral sensitivity"],
        "heightmod": 0.67,
        "weightmod": 0.80
  },
  10 : {
        id: 10,
        name: "Goblin",
        "type": "Illkin",
        "strmod": 0.75,
        "conmod": 0.75,
        "dexmod": 1.5,
        "spdmod": 1.0,
        "lkmod": 1.0,
        "iqmod": 1.0,
        "wizmod": 1.0,
        "chrmod": 0.5,
        "heightmod": 0.75,
        "weightmod": 0.50
  },
  11 : {
        id: 11,
        name: "Gnome",
        "type": "Illkin",
        "strmod": 0.33,
        "conmod": 0.5,
        "dexmod": 1.5,
        "spdmod": 1.0,
        "lkmod": 1.5,
        "iqmod": 2.0,
        "wizmod": 1.0,
        "chrmod": 0.67,
        "heightmod": 0.33,
        "weightmod": 0.33
  },
  12 : {
        id: 12,
        name: "Gremlin",
        "type": "Illkin",
        "strmod": 0.5,
        "conmod": 0.5,
        "dexmod": 1.0,
        "spdmod": 1.0,
        "lkmod": 1.5,
        "iqmod": 1.5,
        "wizmod": 1.5,
        "chrmod": 0.5,
        "abilities": ["Elude perception"],
        "heightmod": 0.33,
        "weightmod": 0.33
  },
  13 : {
        id: 13,
        name: "Dwelf",
        "type": "Illkin",
        "strmod": 1.25,
        "conmod": 1.25,
        "dexmod": 1.0,
        "spdmod": 1.0,
        "lkmod": 0.75,
        "iqmod": 0.9,
        "wizmod": 1.0,
        "chrmod": 1.25,
        "abilities": ["Iron sensitivity"],
        "heightmod": 1.25,
        "weightmod": 1.5
  },
  14 : {
        id: 14,
        name: "Hobgoblin",
        "type": "Illkin",
        "strmod": 1.0,
        "conmod": 1.5,
        "dexmod": 1.0,
        "spdmod": 1.0,
        "lkmod": 0.5,
        "iqmod": 0.75,
        "wizmod": 1.0,
        "chrmod": 0.75,
        "heightmod": 1.25,
        "weightmod": 1.5
  },
  15 : {
        id: 15,
        name: "Kobold",
        "type": "Illkin",
        "strmod": 0.5,
        "conmod": 0.5,
        "dexmod": 1.5,
        "spdmod": 1.0,
        "lkmod": 1.0,
        "iqmod": 2.0,
        "wizmod": 1.0,
        "chrmod": 0.75,
        "abilities": ["Shapeshifter"],
        "heightmod": 0.50,
        "weightmod": 0.50
  },
  16 : {
        id: 16,
        name: "Pixie",
        "type": "Illkin",
        "strmod": 0.25,
        "conmod": 0.33,
        "dexmod": 1.5,
        "spdmod": 1.0,
        "lkmod": 1.0,
        "iqmod": 1.0,
        "wizmod": 1.0,
        "chrmod": 1.5,
        "abilities": ["Flight"],
        "heightmod": 0.10,
        "weightmod": 0.01
  },
  17 : {
        id: 17,
        name: "Redcap",
        "type": "Illkin",
        "strmod": 0.5,
        "conmod": 0.67,
        "dexmod": 1.5,
        "spdmod": 1.0,
        "lkmod": 1.5,
        "iqmod": 1.25,
        "wizmod": 1.25,
        "chrmod": 0.75,
        "heightmod": 0.33,
        "weightmod": 0.10
  },
  18 : {
        id: 18,
        name: "Selkie",
        "type": "Illkin",
        "strmod": 1.0,
        "conmod": 1.0,
        "dexmod": 1.0,
        "spdmod": 1.0,
        "lkmod": 1.0,
        "iqmod": 1.0,
        "wizmod": 1.0,
        "chrmod": 1.0,
        "heightmod": 0.90,
        "weightmod": 0.90
  },
  19 : {
        id: 19,
        name: "Uruk (Orc)",
        "type": "Illkin",
        "strmod": 1.1,
        "conmod": 1.1,
        "dexmod": 1.0,
        "spdmod": 1.0,
        "lkmod": 0.67,
        "iqmod": 0.75,
        "wizmod": 1.0,
        "chrmod": 1.1,
        "abilities": ["Low light vision"],
        "heightmod": 1.0,
        "weightmod": 1.0
  },
  20 : {
        id: 20,
        name: "Living Skeleton",
        "type": "Illkin",
        "strmod": 1.0,
        "conmod": 1.0,
        "dexmod": 1.0,
        "spdmod": 1.0,
        "lkmod": 0.75,
        "iqmod": 1.0,
        "wizmod": 1.25,
        "chrmod": 1.0,
        "heightmod": 1.00,
        "weightmod": 1.00
  },
  21 : {
        id: 21,
        name: "Vampire",
        "type": "Illkin",
        "strmod": 2.5,
        "conmod": 1.0,
        "dexmod": 1.0,
        "spdmod": 1.0,
        "lkmod": 1.5,
        "iqmod": 1.5,
        "wizmod": 2.0,
        "chrmod": 2.0,
        "heightmod": 1.00,
        "weightmod": 1.10
  },
  22 : {
        id: 22,
        name: "Varta",
        "type": "Illkin",
        "strmod": 1.0,
        "conmod": 0.75,
        "dexmod": 1.33,
        "spdmod": 1.0,
        "lkmod": 1.0,
        "iqmod": 1.5,
        "wizmod": 1.5,
        "chrmod": 1.25,
        "abilities": ["Low light vision"],
        "heightmod": 1.10,
        "weightmod": 1.00
  },
  23 : {
        id: 23,
        name: "Werewolf",
        "type": "Illkin",
        "strmod": 2.0,
        "conmod": 3.0,
        "dexmod": 1.0,
        "spdmod": 1.0,
        "lkmod": 0.67,
        "iqmod": 0.75,
        "wizmod": 1.0,
        "chrmod": 1.0,
        "abilities": ["Shapeshifter","Swift healing"],
        "heightmod": 1.00,
        "weightmod": 1.10
  }
 },
 allIds : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22],
 goodkinIds : [ 1, 2, 3, 4, 5, 6, 7 ],
 illkinIds : [ 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
}

export default function kindredlist(state = initialState, action){
 switch (action.type) {
  //this reducer performs no action. 
  default:
   return state;
 }
}
