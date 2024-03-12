'use client'

import { Chat } from "@/types/Chat";
import { ChatArea } from "./components/ChatArea";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Marque o componente pai como um "Client Component"

import { Sidebar } from "./components/Sidebar";
import { useEffect, useState } from "react";


const Page = () => {
  

  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState<string>('');
  const [chatActive, setChatActive] = useState<Chat>();
  

  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList]); 

  const [AILoading, setAILoading] = useState(false)

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

 

  const handleClearConversations = () => {
    if(AILoading) return;

    setChatActiveId('');
    setChatList([]);
  };

  
  const handleNewChat = () => {
    if(AILoading) return;

    setChatActiveId('');
    closeSidebar();
    
  }

  const hadleSendMessage = () => {  

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

      <Footer 
      // onSendMessage={handleSendMessage}
      disabled={AILoading}
      />

    </section>
  </main>);
}

export default Page;


