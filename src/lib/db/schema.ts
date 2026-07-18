import { sql } from 'drizzle-orm'
import { integer, pgTable, PgTable, text } from 'drizzle-orm/pg-core'

export const LeaderData = pgTable("LeaderData",{
	id: integer("id").primaryKey(),
	top1: text()

})
export const User = pgTable("User",{
	  id: integer().primaryKey(),

	handle:text("handle").notNull().default('username'),
	level:integer("level").notNull().default(1)

})
// export const Day = pgTable('Day', {
// 	id: text('id').notNull().primaryKey().default(sql`cuid(1)`),
// 	name: text('name').notNull(),
// 	dayOfWeek: integer('dayOfWeek').notNull(),
// 	openTime: text('openTime').notNull(),
// 	closeTime: text('closeTime').notNull()
// });

// export const ClosedDay = pgTable('ClosedDay', {
// 	id: text('id').notNull().primaryKey().default(sql`cuid(1)`),
// 	date: timestamp('date', { precision: 3 }).notNull().unique()
// });