"use client";

import { Send } from "lucide-react";
import clsx from "clsx";
import { useReducer } from "react";
import TopNav from "@/app/utils/ui/top-nav";
import { inference } from "@/app/utils/inference";

// Example initial messages
const initialMessages = [
  {
    role: "ai",
    message: "Hello! I'm doing great, How can I assist you today?",
    timestamp: "2024-10-02T10:00:05Z",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
        message: "", // clear input after sending
      };
    case "SET_MESSAGE":
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}

export default function Page() {
  const [state, dispatch] = useReducer(reducer, {
    messages: initialMessages, // initial message history
    message: "",
  });

  const handleSendMessage = async () => {
    if (state.message.trim() === "") return; // Prevent sending empty messages

    const newMessage = {
      role: "human",
      message: state.message,
      timestamp: new Date().toISOString(),
    };

    // Add the human message to the chat
    dispatch({ type: "ADD_MESSAGE", payload: newMessage });

    // Call inference to get the AI response (you can adjust this to your needs)
    const aiResponse = await inference(newMessage.message);

    const aiMessage = {
      role: "ai",
      message: aiResponse,
      timestamp: new Date().toISOString(),
    };

    // Add the AI response to the chat
    dispatch({ type: "ADD_MESSAGE", payload: aiMessage });
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <TopNav />
      {/* Chat messages container */}
      <div className="flex-grow p-10 flex flex-col space-y-2 overflow-y-auto">
        {state.messages.map((message, index) => (
          <div
            key={index}
            className={clsx(
              "p-3 rounded-3xl max-w-[70%]",
              message.role === "ai"
                ? "self-start bg-[#252525] text-white"
                : "self-end bg-[black] text-white"
            )}
          >
            <p className="p-1">{message?.message}</p>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div className="w-full flex items-center justify-center p-4 sticky bottom-0">
        <div className="flex w-[76%] flex-row items-center justify-center">
          <input
            type="text"
            value={state.message}
            onChange={(e) =>
              dispatch({ type: "SET_MESSAGE", payload: e.target.value })
            }
            className="flex-grow input input-bordered p-2 px-4 bg-border text-white rounded-full outline-none"
            placeholder="Say something..."
          />
          <button onClick={handleSendMessage} className="ml-3">
            <Send size={30} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
