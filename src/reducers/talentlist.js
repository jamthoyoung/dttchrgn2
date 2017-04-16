import { ADD_TALENT, UPDATE_TALENT, DELETE_TALENT } from '../constants/ActionTypes';

const initialState =
{
 byId : {
  1 : {
        id: 1,
        group: 1,
        name: "Butcher"
  },
  2 : {
        id: 2,
        group: 1,
        name: "Surgeon"
  },
  3 : {
        id: 3,
        group: 1,
        name: "Specific anatomy"
  },
  4 : {
        id: 4,
        group: 2,
        name: "Animal husbandry"
  },
  5 : {
        id: 5,
        group: 2,
        name: "Horsemanship or riding"
  },
  6 : {
        id: 6,
        group: 2,
        name: "Hunting and tracking"
  },
  7 : {
        id: 7,
        group: 2,
        name: "Training"
  },
  8 : {
        id: 8,
        group: 3,
        name: "Actor"
  },
  9 : {
        id: 9,
        group: 3,
        name: "Painter"
  },
  10 : {
        id: 10,
        group: 3,
        name: "Sculptor"
  },
  11 : {
        id: 11,
        group: 3,
        name: "Calligrapher"
  },
  12 : {
        id: 12,
        group: 3,
        name: "Scribe"
  },
  13 : {
        id: 13,
        group: 3,
        name: "Jewelry maker"
  },
  14 : {
        id: 14,
        group: 3,
        name: "Leather worker"
  },
  15 : {
        id: 15,
        group: 3,
        name: "Musician"
  },
  16 : {
        id: 16,
        group: 3,
        name: "Potter and ceramicist"
  },
  17 : {
        id: 17,
        group: 3,
        name: "Singer"
  },
  18 : {
        id: 18,
        group: 3,
        name: "Bard"
  },
  19 : {
        id: 19,
        group: 4,
        name: "Contortionist"
  },
  20 : {
        id: 20,
        group: 4,
        name: "Dance (or specific dances)"
  },
  21 : {
        id: 21,
        group: 4,
        name: "Deep water diving"
  },
  22 : {
        id: 22,
        group: 4,
        name: "Acrobat"
  },
  23 : {
        id: 23,
        group: 4,
        name: "Juggler"
  },
  24 : {
        id: 24,
        group: 4,
        name: "Martial artist"
  },
  25 : {
        id: 25,
        group: 4,
        name: "Mountaineer"
  },
  26 : {
        id: 26,
        group: 4,
        name: "Skier"
  },
  27 : {
        id: 27,
        group: 4,
        name: "Caver"
  },
  28 : {
        id: 28,
        group: 4,
        name: "Swimmer"
  },
  29 : {
        id: 29,
        group: 5,
        name: "Apothecary"
  },
  30 : {
        id: 30,
        group: 5,
        name: "Healer"
  },
  31 : {
        id: 31,
        group: 5,
        name: "Herbalist"
  },
  32 : {
        id: 32,
        group: 5,
        name: "Poisoner"
  },
  33 : {
        id: 33,
        group: 6,
        name: "Architect"
  },
  34 : {
        id: 34,
        group: 6,
        name: "Engineer"
  },
  35 : {
        id: 35,
        group: 6,
        name: "Mason"
  },
  36 : {
        id: 36,
        group: 6,
        name: "Shipbuilder"
  },
  37 : {
        id: 37,
        group: 7,
        name: "Cleverness"
  },
  38 : {
        id: 38,
        group: 8,
        name: "Poisoner"
  },
  39 : {
        id: 39,
        group: 8,
        name: "Healer"
  },
  40 : {
        id: 40,
        group: 9,
        name: "Brewer"
  },
  41 : {
        id: 41,
        group: 9,
        name: "Candy maker"
  },
  42 : {
        id: 42,
        group: 9,
        name: "Tailer"
  },
  43 : {
        id: 43,
        group: 9,
        name: "Weaver"
  },
  44 : {
        id: 44,
        group: 9,
        name: "Cook"
  },
  45 : {
        id: 45,
        group: 9,
        name: "Farmer"
  },
  46 : {
        id: 46,
        group: 9,
        name: "Tinker"
  },
  47 : {
        id: 47,
        group: 9,
        name: "Jewelry maker"
  },
  48 : {
        id: 48,
        group: 9,
        name: "Leather worker"
  },
  49 : {
        id: 49,
        group: 9,
        name: "Armorer"
  },
  50 : {
        id: 50,
        group: 9,
        name: "Blacksmith"
  },
  51 : {
        id: 51,
        group: 9,
        name: "Farrier"
  },
  52 : {
        id: 52,
        group: 9,
        name: "Swordsmith"
  },
  53 : {
        id: 53,
        group: 10,
        name: "Diplomat"
  },
  54 : {
        id: 54,
        group: 10,
        name: "Species-specific lore"
  },
  55 : {
        id: 55,
        group: 10,
        name: "Historian"
  },
  56 : {
        id: 56,
        group: 10,
        name: "Literature"
  },
  57 : {
        id: 57,
        group: 10,
        name: "Poet"
  },
  58 : {
        id: 58,
        group: 10,
        name: "Social adept"
  },
  59 : {
        id: 59,
        group: 11,
        name: "Knowledge of rites and rituals"
  },
  60 : {
        id: 60,
        group: 11,
        name: "Mental discipline"
  },
  61 : {
        id: 61,
        group: 12,
        name: "Archer"
  },
  62 : {
        id: 62,
        group: 12,
        name: "Sharpshooter"
  },
  63 : {
        id: 63,
        group: 12,
        name: "Swordsman"
  },
  64 : {
        id: 64,
        group: 13,
        name: "Miner"
  },
  65 : {
        id: 65,
        group: 14,
        name: "Bargaining, bartering"
  },
  66 : {
        id: 66,
        group: 14,
        name: "Streetwise"
  },
  67 : {
        id: 67,
        group: 14,
        name: "Merchant"
  },
  68 : {
        id: 68,
        group: 15,
        name: "Historian (specific)"
  },
  69 : {
        id: 69,
        group: 15,
        name: "Librarian"
  },
  70 : {
        id: 70,
        group: 15,
        name: "Intellectual"
  },
  71 : {
        id: 71,
        group: 15,
        name: "Literate, well-read"
  },
  72 : {
        id: 72,
        group: 15,
        name: "Philosopher"
  },
  73 : {
        id: 73,
        group: 15,
        name: "Playwright"
  },
  74 : {
        id: 74,
        group: 15,
        name: "Poet"
  },
  75 : {
        id: 75,
        group: 15,
        name: "Storytelling"
  },
  76 : {
        id: 76,
        group: 15,
        name: "Writer"
  }
 },
 groups: {
   1: {
     id: 1,
     talentIds: [1,2,3],
     name: "Anatomy"
   },
   2: {
     id: 2,
     talentIds: [4,5,6,7],
     name: "Animal Knowledge"
   },
   3: {
     id: 3,
     talentIds: [8,9,10,11,12,13,14,15,16,17,18],
     name: "Artisan"
   },
   4: {
     id: 4,
     talentIds: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
     name: "Athlete"
   },
   5: {
     id: 5,
     talentIds: [29, 30, 31, 32],
     name: "Botany, Knowledge of Plants"
   },
   6: {
     id: 6,
     talentIds: [33, 34, 35, 36],
     name: "Botany, Knowledge of Plants"
   },
   7: {
     id: 7,
     talentIds: [37],
     name: "Cleverness (IQ)"
   },
   8: {
     id: 8,
     talentIds: [38, 39],
     name: "Medicine"
   },
   9: {
     id: 9,
     talentIds: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
     name: "Crafts"
   },
   10: {
     id: 10,
     talentIds: [53, 54, 55, 56, 57, 58],
     name: "Culture Knowledge"
   },
   11: {
     id: 11,
     talentIds: [59, 60],
     name: "Comparative Religion"
   },
   12: {
     id: 12,
     talentIds: [61, 62, 63],
     name: "Exceptional Use Of Weapons"
   },
   13: {
     id: 13,
     talentIds: [64],
     name: "Geology, Earth Sciences"
   },
   14: {
     id: 14,
     talentIds: [65, 66, 67],
     name: "Daily Life Skills"
   },
   15: {
     id: 15,
     talentIds: [68, 69, 70, 71, 72, 73, 74, 75, 76],
     name: "History"
   },
   16: {
     id: 16,
     talentIds: [],
     name: "Language Profiency"
   },
   17: {
     id: 17,
     talentIds: [],
     name: "Bureaucrat"
   },
   18: {
     id: 18,
     talentIds: [],
     name: "Persuasion"
   },
   19: {
     id: 19,
     talentIds: [],
     name: "Marine Knowledge"
   },
   20: {
     id: 20,
     talentIds: [],
     name: "Mathematics"
   },
   21: {
     id: 21,
     talentIds: [],
     name: "Mechanics"
   },
   22: {
     id: 22,
     talentIds: [],
     name: "Leadership"
   },
   23: {
     id: 23,
     talentIds: [],
     name: "Resilience"
   },
   24: {
     id: 24,
     talentIds: [],
     name: "Scientist, Investigator"
   },
   25: {
     id: 25,
     talentIds: [],
     name: "Subtlety, Roguery, Thievery"
   },
   26: {
     id: 26,
     talentIds: [],
     name: "Wilderness Skills, Outdoormanship"
   }
 },
 allGroups: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
 allIds : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
            30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
            58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76],
 regularIds : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29,
            30, 31, 32, 33, 34, 35, 36, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
            59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76],
 rogueIds : [ 22, 37 ]
}

export default function talentlist(state = initialState, action){
 switch (action.type) {
   case ADD_TALENT:
    let newById = [
      ...state.byId,
      action.id: {
        id: action.id,
        name: action.name
      }];
      let newAllIds =[
          ...state.allIds,
          action.id
        ];
    if (action.isRogue){
      return {
        ...state,
        byId : newById,
        allIds : newAllIds,
        rogueIds : [
            ...state.rogueIds,
            action.id
        ]
      }
    } else {
      return {
        ...state,
        byId : newById,
        allIds : newAllIds
      }
    }
   case UPDATE_TALENT:
    return state;
   case DELETE_TALENT:
    return state;
  default:
   return state;
 }
}
