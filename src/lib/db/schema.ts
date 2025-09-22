import { sql } from 'drizzle-orm'
import { boolean, doublePrecision, integer, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

export const MenuItem = pgTable('MenuItem', {
	id: text('id').notNull().primaryKey().default(sql`cuid(1)`),
	createdAt: timestamp('createdAt', { precision: 3 }).notNull().defaultNow(),
	updatedAt: timestamp('updatedAt', { precision: 3 }).notNull(),
	name: text('name').notNull(),
	price: doublePrecision('price').notNull(),
	categories: text('categories').array().notNull(),
	imageKey: text('imageKey').notNull(),
	active: boolean('active').notNull().default(true)
});

export const Day = pgTable('Day', {
	id: text('id').notNull().primaryKey().default(sql`cuid(1)`),
	name: text('name').notNull(),
	dayOfWeek: integer('dayOfWeek').notNull(),
	openTime: text('openTime').notNull(),
	closeTime: text('closeTime').notNull()
});

export const ClosedDay = pgTable('ClosedDay', {
	id: text('id').notNull().primaryKey().default(sql`cuid(1)`),
	date: timestamp('date', { precision: 3 }).notNull().unique()
});