import { relations, sql } from 'drizzle-orm'
import { foreignKey, int, numeric, real, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const MenuItem = sqliteTable('MenuItem', {
	id: text('id').notNull().primaryKey().default(sql`cuid(1)`),
	createdAt: numeric('createdAt').notNull().default(sql`DATE('now')`),
	updatedAt: numeric('updatedAt').notNull(),
	name: text('name').notNull(),
	price: real('price').notNull(),
	imageKey: text('imageKey').notNull(),
	active: int('active', { mode: 'boolean' }).notNull().default(true)
});

export const Category = sqliteTable('Category', {
	id: text('id').notNull().primaryKey().default(sql`cuid(1)`),
	name: text('name').notNull().unique(),
	createdAt: numeric('createdAt').notNull().default(sql`DATE('now')`),
	updatedAt: numeric('updatedAt').notNull()
});

export const day = sqliteTable('Day', {
	id: text('id').notNull().primaryKey().default(sql`cuid(1)`),
	name: text('name').notNull(),
	dayOfWeek: int('dayOfWeek').notNull(),
	openTime: text('openTime').notNull(),
	closeTime: text('closeTime').notNull()
});

export const ClosedDay = sqliteTable('ClosedDay', {
	id: text('id').notNull().primaryKey().default(sql`cuid(1)`),
	date: numeric('date').notNull().unique()
});

export const CategoryToMenuItem = sqliteTable('_CategoryToMenuItem', {
	MenuItemId: text('A').notNull(),
	CategoryId: text('B').notNull()
}, (CategoryToMenuItem) => ({
	'_CategoryToMenuItem_MenuItem_fkey': foreignKey({
		name: '_CategoryToMenuItem_MenuItem_fkey',
		columns: [CategoryToMenuItem.MenuItemId],
		foreignColumns: [MenuItem.id]
	})
		.onDelete('cascade')
		.onUpdate('cascade'),
	'_CategoryToMenuItem_Category_fkey': foreignKey({
		name: '_CategoryToMenuItem_Category_fkey',
		columns: [CategoryToMenuItem.CategoryId],
		foreignColumns: [Category.id]
	})
		.onDelete('cascade')
		.onUpdate('cascade')
}));

export const MenuItemRelations = relations(MenuItem, ({ many }) => ({
	categories: many(CategoryToMenuItem, {
		relationName: 'MenuItemToCategoryToMenuItem'
	})
}));

export const CategoryRelations = relations(Category, ({ many }) => ({
	menuItems: many(CategoryToMenuItem, {
		relationName: 'CategoryToCategoryToMenuItem'
	})
}));

export const CategoryToMenuItemRelations = relations(CategoryToMenuItem, ({ one }) => ({
	MenuItem: one(MenuItem, {
		relationName: 'MenuItemToCategoryToMenuItem',
		fields: [CategoryToMenuItem.MenuItemId],
		references: [MenuItem.id]
	}),
	Category: one(Category, {
		relationName: 'CategoryToCategoryToMenuItem',
		fields: [CategoryToMenuItem.CategoryId],
		references: [Category.id]
	})
}));
export type Day = typeof day