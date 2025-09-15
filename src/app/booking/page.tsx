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
const Home: NextPage<HomeProps> = async () => {  
  const days:Day[] = (await prisma.day.findMany())
  const closedDays = (await prisma.closedDay.findMany()).map((d) => formatISO(d.date))

  return (
    <>
      

      <main>
        <CalendarComponent days={days} closedDays={closedDays} />
      </main>
    </>
  )
}



export default Home