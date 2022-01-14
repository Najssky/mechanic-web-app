import requestSender from "../helpers/requestSender";

export default function(Vue) {
	Vue.car = {
		async getCars() {
			const result = await requestSender.sendForUsers({
				method: "get",
				url: `https://localhost:44385/api/Cars`,
			});
			return result;
		},
		async addCar(request) {
			const result = await requestSender.sendForUsers(
				{
					method: "post",
					url: `https://localhost:44385/api/Cars`,
				},
				request,
			);
			return result;
		},
		async getCar(id) {
			const result = await requestSender.sendForUsers({
				method: "get",
				url: `https://localhost:44385/api/Cars/${+id}`,
			});
			return result;
		},
		async updateUser(id, request) {
			const result = await requestSender.sendForUsers(
				{
					method: "put",
					url: `https://localhost:44385/api/Users/${id}`,
				},
				request,
			);
			return result;
		},
		async deleteCar(id) {
			const result = await requestSender.sendForUsers({
				method: "delete",
				url: `https://localhost:44385/api/Cars/${id}`,
			});
			return result;
		},
	};

	Object.defineProperties(Vue.prototype, {
		$user: {
			get: () => Vue.user,
		},
	});
}
