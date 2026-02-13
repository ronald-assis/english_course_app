'use client'
import useSWR from 'swr'
const fetcher = (url:string)=>fetch(url).then(r=>r.json())
export default function Dashboard(){
  const { data } = useSWR('/api/progress', fetcher)
  const p = data?.progress ?? { streak: 0, wordsLearned: 0, lessonsDone: 0 }
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li>Streak: {p.streak} days</li>
        <li>Words learned: {p.wordsLearned}</li>
        <li>Lessons completed: {p.lessonsDone}</li>
      </ul>
    </div>
  )
}
