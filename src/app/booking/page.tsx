import CalendarComponent from '@/components/Calendar'
import { formatISO } from 'date-fns'
import { type NextPage } from 'next'
import { prisma } from '@/server/db/client'
import { Day } from '@prisma/client'

interface HomeProps {
  days: Day[]
  closedDays: string[] // as ISO string
}
export const metadata = {
  title: 'Booking Software',
  description: 'by josh',
}
async function Home(props: HomeProps = {
  days: [],
  closedDays: []
}) {

  const days: Day[] = (await prisma.day.findMany()) || props.days
  const closedDays = (await prisma.closedDay.findMany()).map((d) => formatISO(d.date)) || props.closedDays

  return (
    
      

      <main>
        <CalendarComponent days={days} closedDays={closedDays} />
      </main>
      )
}



export default Home