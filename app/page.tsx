export default function Page(){
  return (
    <div className="space-y-6">
      <section className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">Fast‑track your English in 6 months</h1>
        <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">Daily micro‑lessons, pronunciation drills, and AI tutoring. Short, focused, and compounding.</p>
        <div className="flex items-center justify-center gap-3">
          <a className="btn" href="/practice">Start a micro‑lesson</a>
          <a className="btn bg-zinc-800 hover:bg-zinc-900 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-white" href="/dashboard">View dashboard</a>
        </div>
      </section>
      <section className="grid md:grid-cols-3 gap-4">
        <div className="card">
          <h3 className="font-medium mb-1">Personalized</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">Lessons adapt to your topic and level—zero fluff.</p>
        </div>
        <div className="card">
          <h3 className="font-medium mb-1">10–15 min/day</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">Small, consistent practice beats long, rare sessions.</p>
        </div>
        <div className="card">
          <h3 className="font-medium mb-1">Coach feedback</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">Get instant guidance and quick corrections.</p>
        </div>
      </section>
    </div>
  );
}
