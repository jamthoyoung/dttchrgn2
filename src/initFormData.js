module.exports = {
  "name" : "Enter name",
  "gender" : "Male",
  "kindred": {
    "id": 1420070500001,
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
    "heightmod": 1.1,
    "weightmod": 1.0
  },
  "attributes" : {
    str : [ 1, 1, 2 ],
    con : [ 1, 1, 2 ],
    dex : [ 1, 1, 2 ],
    spd : [ 1, 1, 2 ],
    lk : [ 1, 1, 2 ],
    iq : [ 1, 1, 2 ],
    wiz : [ 1, 1, 2 ],
    chr : [ 1, 1, 2 ]
  },
  class: "Warrior",
  height: 11,
  weight: 12,
  gold: 30,
  equipment : [
    { name: "Short Sword",
      damagedice: 3,
      damageadds: 0,
      weight: 25,
      active: true
    },
    { name: "Sheild",
      armourpts: 1,
      weight: 30,
      active: true
    },
    { name: "Mace",
      damagedice: 3,
      damageadds: 0,
      weight: 25,
      active: false
    } 
  ]
};
