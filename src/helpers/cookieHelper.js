import cookie from "vue-cookies";

const SESSION_COOKIE_NAME = "common_token";
const APP_DOMAIN =
	process.env.VUE_APP_NODE_ENV === "production"
		? "https://mechanic-web-app.github.io/"
		: "";
const APP_PATH =
	process.env.VUE_APP_NODE_ENV === "production"
		? "https://mechanic-web-app.herokuapp.com/"
		: "";

const defaultParams = {
	expires: "2h",
};

export default {
	deleteSessionCookie() {
		cookie.remove(SESSION_COOKIE_NAME, APP_PATH, APP_DOMAIN);
	},
	hasSessionCookie() {
		return !!cookie.get(SESSION_COOKIE_NAME);
	},
	setSessionCookie(token) {
		cookie.set(
			SESSION_COOKIE_NAME,
			token,
			defaultParams.expires,
			APP_PATH,
			APP_DOMAIN,
		);
	},
	getSessionCookie() {
		return cookie.get(SESSION_COOKIE_NAME);
	},
};