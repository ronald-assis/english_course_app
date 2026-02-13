import { NextResponse } from 'next/server'
export async function GET(){
  // placeholder progress; in production, query DB by user
  return NextResponse.json({ progress: { streak: 3, wordsLearned: 42, lessonsDone: 7 } })
}
