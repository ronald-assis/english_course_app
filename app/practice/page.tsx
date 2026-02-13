'use client'
import React from 'react'
export default function Practice(){
  const [topic, setTopic] = React.useState('greetings')
  const [level, setLevel] = React.useState('beginner')
  const [out, setOut] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string|undefined>()

  async function gen(){
    setLoading(true); setError(undefined); setOut('')
    try{
      const r = await fetch('/api/generate', { method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({ topic, level }) })
      if(!r.ok){ throw new Error(`HTTP ${r.status}`)}
      const t = await r.text(); setOut(t)
    }catch(e:any){ setError(e?.message||'Failed to generate') }
    finally{ setLoading(false) }
  }
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Practice</h2>
      <div className="card grid md:grid-cols-3 gap-3 items-end">
        <label className="flex flex-col gap-1">
          <span className="text-sm">Topic</span>
          <input className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2" value={topic} onChange={e=>setTopic(e.target.value)} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm">Level</span>
          <select className="rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent px-3 py-2" value={level} onChange={e=>setLevel(e.target.value)}>
            <option>beginner</option><option>intermediate</option><option>advanced</option>
          </select>
        </label>
        <button className="btn" onClick={gen} disabled={loading}>{loading? 'Generating…' : 'Generate micro‑lesson'}</button>
      </div>
      {error && <div className="card border-red-300 text-red-700 dark:border-red-900 dark:text-red-300">{error}</div>}
      {out && <pre className="mt-2">{out}</pre>}
      {!out && !loading && !error && <p className="text-sm text-zinc-500">Tip: try topics like “travel”, “job interview”, or “small talk”.</p>}
    </div>
  )
}
