import useSWR from 'swr'
const fetcher = (url:string)=>fetch(url).then(r=>r.json())
export default function Dashboard(){
  const { data, isLoading, error } = useSWR('/api/progress', fetcher)
  const p = data?.progress ?? { streak: 0, wordsLearned: 0, lessonsDone: 0 }
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card"><div className="text-sm text-zinc-500">Streak</div><div className="text-2xl font-bold">{p.streak} days</div></div>
        <div className="card"><div className="text-sm text-zinc-500">Words learned</div><div className="text-2xl font-bold">{p.wordsLearned}</div></div>
        <div className="card"><div className="text-sm text-zinc-500">Lessons completed</div><div className="text-2xl font-bold">{p.lessonsDone}</div></div>
      </div>
      {isLoading && <p className="text-sm text-zinc-500">Loading progress…</p>}
      {error && <p className="text-sm text-red-600">Failed to load progress.</p>}
    </div>
  )
}
