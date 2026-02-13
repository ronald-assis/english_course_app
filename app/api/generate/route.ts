import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const system = `You are an English tutor. Generate a concise 10–15 minute micro-lesson with:
- Warm-up sentence
- 5 useful words with examples (EN + PT-BR)
- 1 pronunciation drill line
- 1 mini-dialog (4 turns)
- 3 practice prompts for speaking
Keep it friendly, practical, and aligned to a 6-month fast-track.`

export async function POST(req: Request){
  const { topic = 'greetings', level = 'beginner' } = await req.json().catch(()=>({}))
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  const prompt = `Topic: ${topic}\nLevel: ${level}`
  const resp = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [ { role:'system', content: system }, { role:'user', content: prompt } ],
    temperature: 0.7
  })
  const text = resp.choices?.[0]?.message?.content || 'No output.'
  return new NextResponse(text)
}
