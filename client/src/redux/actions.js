import { FETCH_REGIONS, SHOW_LOADER, HIDE_LOADER } from "./types";

export function fetchRegions() {
    return async (dispatch) => {
        try {
            console.log("fetch regions");
            const response = await fetch("http://localhost:5000/get-regions", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                console.log("Not ok: ", response);
            }

            const json = await response.json();
            console.log(json);

            dispatch({
                type: FETCH_REGIONS,
                payload: json,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    };
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    };
}