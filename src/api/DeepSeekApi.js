// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com/v1',
    apiKey: 'sk-946ee132a8c7408a9229d20a3065698b',
    dangerouslyAllowBrowser: true
});

async function main(input, model = "deepseek-chat")  {
    console.log(import.meta.env);
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "你是一个智能助手." }
            , { role: "user", content: input }],
            model: model,
        });

        console.log(completion.choices[0].message.content);
        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Error calling DeepSeek API:', error);
        throw error;
    }
}

export default main;