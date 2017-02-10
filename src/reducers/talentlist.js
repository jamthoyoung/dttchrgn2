const initialState = 
{
 byId : {
  1 : {
        id: 1,
        name: "Blacksmith"
  },
  2 : {
        id: 2,
        name: "Jeweller"
  },
  3 : {
        id: 2,
        name: "Lockpicking"
  }
 },
 allIds : [ 1, 2, 3 ],
 regularIds : [ 1, 2 ],
 rogueIds : [ 3 ]
}

export default function talentlist(state = initialState, action){
 switch (action.type) {
  //this reducer performs no action. 
  default:
   return state;
 }
}
