import requestSender from "../helpers/requestSender";

export default function (Vue) {
	Vue.chatroom = {
		async createChatRoom(request) {
			const result = await requestSender.send(
				{
					method: "post",
					url: "/chat",
				},
				request,
			);

			return result;
		},
		async getChatRooms() {
			const result = await requestSender.sendForUsers({
				method: "get",
				url: "https://localhost:44385/api/ChatRoom",
			});
			console.log(result);
			return result;
		},
	};

	Object.defineProperties(Vue.prototype, {
		$chatroom: {
			get: () => Vue.chatroom,
		},
	});
}
