type Props = {
    disable: boolean
    onSendMessage: (message: string) => void;
}

export const Footer = ({ disabled, onSendMessage }: Props) => {
    return (
        <footer className="w-full border-t border-t-gray-600 p-2">
            <div className="max-w-4xl m-auto">
                <ChatMessageImput
                disabled={disabled}
                onsend={onSendMessage}
                />
                <div className="pt-3 text-center text-xs text-gray-300">
                    Feito por Tiago. <br/>
                    <a href="" className="underline">
                        Quer aprender a programar
                    </a>

                </div>
            </div>

        </footer>
    )
}