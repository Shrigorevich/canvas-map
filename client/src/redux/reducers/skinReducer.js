import {
    SHOW_LOADER,
    HIDE_LOADER,
    CREATE_REGION,
    CHANGE_REGION,
    DELETE_REGION,
} from "../types";

const initialState = {
    list: [
        {
            id: 1,
            image: "https://i.imgur.com/OXmFR9w.png",
            name: "Паладин",
            description:
                "Паладин он и в африке паладин. А вообще тут будет краткое описание персонажа",
        },
        {
            id: 2,
            image: "https://i.imgur.com/Sx7NP99.png",
            name: "Странник",
            description:
                "Паладин он и в африке паладин. А вообще тут будет краткое описание персонажа",
        },
        {
            id: 3,
            image: "https://i.imgur.com/BbmWA4X.png",
            name: "Рыцарь",
            description:
                "Паладин он и в африке паладин. А вообще тут будет краткое описание персонажа",
        },
        {
            id: 4,
            image: "https://i.imgur.com/8zrRAgW.png",
            name: "Работяга",
            description:
                "Паладин он и в африке паладин. А вообще тут будет краткое описание персонажа",
        },
        {
            id: 5,
            image: "https://i.imgur.com/8zrRAgW.png",
            name: "Паладин",
            description:
                "Паладин он и в африке паладин. А вообще тут будет краткое описание персонажа",
        },
        {
            id: 6,
            image: "https://i.imgur.com/8zrRAgW.png",
            name: "Странник",
            description:
                "Паладин он и в африке паладин. А вообще тут будет краткое описание персонажа",
        },
        {
            id: 7,
            image: "https://i.imgur.com/8zrRAgW.png",
            name: "Рыцарь",
            description:
                "Паладин он и в африке паладин. А вообще тут будет краткое описание персонажа",
        },
        {
            id: 8,
            image: "https://i.imgur.com/8zrRAgW.png",
            name: "Работяга",
            description:
                "Паладин он и в африке паладин. А вообще тут будет краткое описание персонажа",
        },
    ],
};

export const skinReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_REGION:
            return { ...state, createResponse: action.payload };
        default:
            return state;
    }
};
