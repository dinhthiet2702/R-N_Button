//State

let appState = {
    data: [
        {
            id: 0,
            name: "Default Button",
            backgroundColor: "red",
            radius: 20,
            width: 100,
            height: 50,
            color: "white",
            fontSize: 18,
            borderWidth: 0,
            borderColor: 'white',
            fontWeight: 800,
            positionIcon: [],
            imageSource: null,
        },
    ],
};
// Action

export const AppendButton = (obj) => {
    return {
        type: "Append",
        value: obj,
    };
};

export const DeleteButton = (obj) => {
    return {
        type: "Delete",
        value: obj,
    };
};

export const UpdateButton = (obj) => {
    return {
        type: "Update",
        value: obj,
    };
};

//Reduce

export const btnListReduce = (state = appState, action) => {
    let arrBtn = state.data;

    switch (action.type) {
        case "Append":
            return { ...state, data: [...state.data, action.value] };

        case "Update":
            const index = arrBtn.findIndex((obj) => obj.id === action.value.id);
            arrBtn[index] = action.value;
            return { ...state, data: [...arrBtn] };

        case "Delete":
            const indexD = arrBtn.findIndex((obj) => obj.id === action.value.id);
            let arr = arrBtn.filter((e, index) => index !== indexD);

            return { ...state, data: [...arr] };
    }

    return state;
};
