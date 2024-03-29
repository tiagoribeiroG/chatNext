'use client'

import { Chat } from "@/types/Chat";
import { ChatArea } from "./components/ChatArea";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {v4 as uuidv4 } from 'uuid';

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

  const hadleSendMessage = (message: string) => {  
    if(!chatActiveId) {
      // creating new chat minuto 2:25
      let newChatId = uuidv4();
      setChatList([{
        id: newChatId,
        title: message,
        messages: [
          { id: uuidv4(), author: 'me', body: message}
        ]
      }, ...chatList,]);

      setChatActiveId(newChatId); 

    } else {
      // updating existing chat
      let chatListClone = [...chatList,];
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
      chatListClone[chatIndex].messages.push({
        id: uuidv4(), 
        author: 'me', 
        body: message
      })
       }


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


