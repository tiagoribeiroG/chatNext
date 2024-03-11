import { useState } from "react";
import IconSend from "./icons/iconSend"

type Props = {
    disabled: boolean;
    onSend: (message: string) => void;

}

export const ChatMessageInput = ({ disabled, onSend }: Props) => {
    const [text, seText] = useState('');

    const handleSendMessage = () => {
        if(!disabled && text.trim() !== '') {
            onSend(text);
            setText('')

        } 


    
    return (
        <div className={`flex border border-gray-800/50 bg-gpt-lightgray p-2 rounded-md
        ${disabled && 'opacity-50'}`}>
            <textarea className="flex-1 border-0 bg-transparent resize-none outline-none
            h-7 max-h-48 overflow-auto"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={e => setText(e.target.value)}>

            </textarea>

            <div onClick={handleSendMessage} className="">
                <IconSend width={14} height={14} />
            </div>
        </div>
    )
}