export const dummyData={
    "0" : {
        id : "0",
        name : "Ayeon",
        phone : "010-3671-2150"
    }, 

    "1" : {
        id: "1",
        name : "Gaeul",
        phone : "010-4674-5294"
    },

    "2" : {
        id: "2",
        name : "Hanbit",
        phone : "010-4917-5347"
    },

    "3" : {
        id: "3",
        name : "Yunji",
        phone : "010-5513-6459"
    },

    "4" : {
        id: "4",
        name : "Chehyeon",
        phone : "010-7184-4723"
    },
    "5" : {
        id: "5",
        name : "Daon",
        phone : "010-2753-0954"
    }
};

export var nextId=Object.keys(dummyData).length;
export const setNextId=()=>{
    nextId++;
};