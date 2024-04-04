import { prisma } from '../src/lib/prisma'

async function seed(){
    await prisma.event.create({
        data:{
            id: 'd65fd2f1-1399-4554-8944-2fa8a8fbf1db',
            title: 'Unite Summit', 
            slug: 'unite-summit',
            details: 'Um evento para apaixonados por código!',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded')
    prisma.$disconnect
})