import { createContext } from "react";
import { useContext, useReducer } from "react";

const FAKE_USER = {
	name: "Jack",
	email: "jack@example.com",
	password: "qwerty",
	avatar: "https://i.pravatar.cc/100?u=zz",
};

const AuthContext = createContext();

const initialState = {
	user: {
		email: "",
		password: "",
	},
	isAuthenticated: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "login":
			return { ...state, user: action.payload, isAuthenticated: true };

		case "logout":
			return { ...state, user: null, isAuthenticated: false };

		default:
			throw new Error("Unknow Action");
	}
};

function AuthProvider({ children }) {
	const [{ user, isAuthenticated }, dispatch] = useReducer(
		reducer,
		initialState
	);

	function login(email, password) {
		if (email === FAKE_USER.email && password === FAKE_USER.password) {
			dispatch({ type: "login", payload: FAKE_USER });
		}
	}

	function logout() {
		dispatch({ type: "logout" });
	}

	return (
		<AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) throw new Error("Component not in context");
	return context;
}

export { AuthProvider, useAuth };
