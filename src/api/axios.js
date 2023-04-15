import axios from "axios";
import {ADD_USER, UPDATE_USER, DELETE_USER, SET_USERS, setUsers} from "../redux/actions/user-actions";

export function getUsers() {
    return async function (dispatch) {
        try {
            const response = await axios.get("/api/users");
            dispatch(getUsers(response.data));
        } catch (error) {
            console.error(error);
        }
    };
}

export function createUser(user) {
    return async function (dispatch) {
        try {
            const response = await axios.post("/api/users", user);
            dispatch(setUsers(response.data));
        } catch (error) {
            console.error(error);
        }
    };
}

export function updateUser(user) {
    return async function (dispatch) {
        try {
            const response = await axios.put(`/api/users/${user.id}`, user);
            dispatch(updateItem(response.data));
        } catch (error) {
            console.error(error);
        }
    };
}

export function deleteUser(userId) {
    return async function (dispatch) {
        try {
            await axios.delete(`/api/users/${userId}`);
            dispatch(deleteItem(userId));
        } catch (error) {
            console.error(error);
        }
    };
}
