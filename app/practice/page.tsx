'use client'
import React from 'react'
export default function Practice(){
  const [topic, setTopic] = React.useState('greetings')
  const [level, setLevel] = React.useState('beginner')
  const [out, setOut] = React.useState('')
  async function gen(){
    const r = await fetch('/api/generate', { method:'POST', body: JSON.stringify({ topic, level }) })
    const t = await r.text(); setOut(t)
  }
  return (
    <div>
      <h2>Practice</h2>
      <label>Topic <input value={topic} onChange={e=>setTopic(e.target.value)} /></label>
      <label style={{ marginLeft:12 }}>Level 
        <select value={level} onChange={e=>setLevel(e.target.value)}>
          <option>beginner</option><option>intermediate</option><option>advanced</option>
        </select>
      </label>
      <button onClick={gen} style={{ marginLeft:12 }}>Generate micro-lesson</button>
      <pre style={{ whiteSpace:'pre-wrap', marginTop:16 }}>{out}</pre>
    </div>
  )
}
