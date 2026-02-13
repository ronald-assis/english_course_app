import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main(){
  const email = 'chatito@example.com'
  const u = await prisma.user.upsert({
    where: { email },
    update: {},
    create: { email, Progress: { create: { streak: 1, wordsLearned: 10, lessonsDone: 2 } } }
  })
  console.log('Seeded', u.email)
}
main().finally(()=>prisma.$disconnect())
