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
  },
  77 : {
        id: 77,
        group: 16,
        name: "Ancient tongues"
  },
  78 : {
        id: 78,
        group: 16,
        name: "Codes, ciphers, and secret writing"
  },
  79 : {
        id: 79,
        group: 16,
        name: "Translator"
  },
  80 : {
        id: 80,
        group: 16,
        name: "Rhetoric"
  },
  81 : {
        id: 81,
        group: 17,
        name: "Judge"
  },
  82 : {
        id: 82,
        group: 17,
        name: "Lawyer"
  },
  83 : {
        id: 83,
        group: 18,
        name: "Leadership"
  },
  84 : {
        id: 84,
        group: 18,
        name: "Seduction"
  },
  85 : {
        id: 85,
        group: 19,
        name: "Deep-water fishing"
  },
  86 : {
        id: 86,
        group: 19,
        name: "Canoeing or kayaking"
  },
  87 : {
        id: 87,
        group: 19,
        name: "Navigation, piloting"
  },
  88 : {
        id: 88,
        group: 19,
        name: "Sailing"
  },
  89 : {
        id: 89,
        group: 19,
        name: "Knot tying"
  },
  90 : {
        id: 90,
        group: 20,
        name: "Accounting, bookkeeping"
  },
  91 : {
        id: 91,
        group: 20,
        name: "Astrology"
  },
  92 : {
        id: 92,
        group: 20,
        name: "Astronomy"
  },
  93 : {
        id: 93,
        group: 20,
        name: "Gambling"
  },
  94 : {
        id: 94,
        group: 20,
        name: "Practical arithmetic"
  },
  95 : {
        id: 95,
        group: 20,
        name: "Theoretical math"
  },
  96 : {
        id: 96,
        group: 21,
        name: "Clockworks"
  },
  97 : {
        id: 97,
        group: 21,
        name: "Siege machinery"
  },
  98 : {
        id: 98,
        group: 22,
        name: "Military tactics"
  },
  99 : {
        id: 99,
        group: 22,
        name: "Small unit tactics"
  },
  100 : {
        id: 100,
        group: 23,
        name: "Competetive drinking"
  },
  101 : {
        id: 101,
        group: 23,
        name: "Endurance"
  },
  102 : {
        id: 102,
        group: 23,
        name: "Self-defence"
  },
  103 : {
        id: 103,
        group: 23,
        name: "Dodge"
  },
  104 : {
        id: 104,
        group: 24,
        name: "Anatomy"
  },
  105 : {
        id: 105,
        group: 24,
        name: "Chemistry"
  },
  106 : {
        id: 106,
        group: 24,
        name: "Medicine"
  },
  107 : {
        id: 107,
        group: 24,
        name: "Research skills"
  },
  108 : {
        id: 108,
        group: 25,
        name: "Arson"
  },
  109 : {
        id: 109,
        group: 25,
        name: "Assassin"
  },
  110 : {
        id: 110,
        group: 25,
        name: "Conspiracy"
  },
  111 : {
        id: 111,
        group: 25,
        name: "Disguise"
  },
  112 : {
        id: 112,
        group: 25,
        name: "Gambling"
  },
  113 : {
        id: 113,
        group: 25,
        name: "Garrote"
  },
  114 : {
        id: 114,
        group: 25,
        name: "Lock-picking"
  },
  115 : {
        id: 115,
        group: 25,
        name: "Pickpocket"
  },
  116 : {
        id: 116,
        group: 25,
        name: "Poisoner"
  },
  117 : {
        id: 117,
        group: 25,
        name: "Sleight of hand"
  },
  118 : {
        id: 118,
        group: 25,
        name: "Streetwise"
  },
  119 : {
        id: 119,
        group: 25,
        name: "Spy"
  },
  120 : {
        id: 120,
        group: 25,
        name: "Stealth"
  },
  121 : {
        id: 121,
        group: 25,
        name: "Thievery"
  },
  122 : {
        id: 122,
        group: 26,
        name: "Camping"
  },
  123 : {
        id: 123,
        group: 26,
        name: "Firemaking"
  },
  124 : {
        id: 124,
        group: 26,
        name: "Fishing"
  },
  125 : {
        id: 125,
        group: 26,
        name: "Hunting"
  },
  126 : {
        id: 126,
        group: 26,
        name: "Knot tying"
  },
  127 : {
        id: 127,
        group: 26,
        name: "Overland trekking"
  },
  128 : {
        id: 128,
        group: 26,
        name: "Trapping"
  },
  129 : {
        id: 129,
        group: 26,
        name: "Wilderness survival"
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
     talentIds: [77, 78, 79, 80],
     name: "Language Profiency"
   },
   17: {
     id: 17,
     talentIds: [81, 82],
     name: "Bureaucrat"
   },
   18: {
     id: 18,
     talentIds: [83, 84],
     name: "Persuasion"
   },
   19: {
     id: 19,
     talentIds: [85, 86, 87, 88, 89],
     name: "Marine Knowledge"
   },
   20: {
     id: 20,
     talentIds: [90, 91, 92, 93, 94, 95],
     name: "Mathematics"
   },
   21: {
     id: 21,
     talentIds: [96, 97],
     name: "Mechanics"
   },
   22: {
     id: 22,
     talentIds: [98, 99],
     name: "Leadership"
   },
   23: {
     id: 23,
     talentIds: [100, 101, 102, 103],
     name: "Resilience"
   },
   24: {
     id: 24,
     talentIds: [104, 105, 106, 107],
     name: "Scientist, Investigator"
   },
   25: {
     id: 25,
     talentIds: [108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121],
     name: "Subtlety, Roguery, Thievery"
   },
   26: {
     id: 26,
     talentIds: [122, 123, 124, 125, 126, 127, 128, 129],
     name: "Wilderness Skills, Outdoormanship"
   }
 },
 allGroups: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
 allIds : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
            30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
            58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
            86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
            111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129],
 regularIds : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29,
            30, 31, 32, 33, 34, 35, 36, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
            59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
            87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 104, 105, 106, 107, 122, 123, 124, 125, 126,
            127, 128, 129],
 rogueIds : [ 22, 37, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121 ]
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
