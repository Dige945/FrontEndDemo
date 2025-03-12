// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com/v1',
    apiKey: '<your-api-key>',
    dangerouslyAllowBrowser: true
});

async function main(input) {
    console.log(import.meta.env);
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant." }
            , { role: "user", content: input }],
            model: "deepseek-chat",
        });

        console.log(completion.choices[0].message.content);
        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Error calling DeepSeek API:', error);
        throw error;
    }
}

export default main;