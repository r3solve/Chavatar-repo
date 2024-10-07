import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export async function inference(message:string) {
  const chatCompletion = await getGroqChatCompletion(message);
  // Print the completion returned by the LLM.
  return chatCompletion.choices[0]?.message?.content || ""
}

export async function getGroqChatCompletion(message:string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `${message}`,
      },
    ],
    model: "llama3-8b-8192",
    max_tokens:100
  });
}
