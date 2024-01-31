import Chat from "../pages/view/chat/Index";
import ChatDetail from "../pages/view/chat/detail";

const routes = [
    {
        path: "/chat",
        exact: true,
        auth: true,
        component: <Chat title="Chat" />
    },
    {
        path: "/chat-detail",
        exact: true,
        auth: true,
        permission: [1, 2], // 1 for customer 2 for service providers
        layout: 2,
        component: <ChatDetail title="Chat Detail" />
    }
]

export default routes;