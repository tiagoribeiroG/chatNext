'use client'

import { Chat } from "@/types/Chat";
import { ChatArea } from "./components/ChatArea";
import { Header } from "./components/Header";
// Marque o componente pai como um "Client Component"

import { Sidebar } from "./components/Sidebar";
import { useState } from "react";

const Page = () => {
  

  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatActive, setChatActive] = useState<Chat>({
    id: '123', 
    title: 'Hello World! IA', 
    messages: [
      { id: '99', author: 'me', body: 'opa, tudo bom'},
      {id:'100',author:'ai', body: 'Tudo otimo, em que posso ajudar'}
    ]
  });

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

 

  const handleClearConversations = () => {

  }
  const handleNewChat = () => {
    
  }


return (
  <main className="flex min-h-screen bg-gpt-gray">
    <Sidebar
      open={sidebarOpened}
      onClose={closeSidebar}
      onClear={handleClearConversations}
      onNewChat={handleNewChat}
    >
      <div>...</div>
      
    </Sidebar>
    <section className="flex flex-col w-ful">
      <button onClick={() => setSidebarOpened(true)}>Abrir sidebar</button>

      <Header openSidebarClick={openSidebar}
      title={``}
      newChatClick={handleNewChat}

      />
      
      <ChatArea chat={chatActive} />

    </section>
  </main>);
}

export default Page;


