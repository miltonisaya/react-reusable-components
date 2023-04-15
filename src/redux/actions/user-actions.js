export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const CREATE_USER = "CREATE_USER";
export const GET_USERS = "GET_USERS";
export const SET_USERS = "SET_USERS";

export function addItem(user) {
    return { type: ADD_USER, payload: user };
}

export function updateItem(user) {
    return { type: UPDATE_USER, payload: user };
}

export function deleteItem(user) {
    return { type: DELETE_USER, payload: user };
}

export function createUser(user) {
    return { type: CREATE_USER, payload: user };

}export function setUsers(users) {
    return { type: SET_USERS, payload: users };
}