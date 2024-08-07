import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Dish from './Dish'
import Order from './Order'

export default class Restaurant extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public ownerName: string

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public address: string

  @column()
  public phoneNumber: string

  @column()
  public licenseKey: string

  @column.dateTime()
  public openTime: DateTime

  @column.dateTime()
  public closeTime: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Dish)
  public dishes: HasMany<typeof Dish>

  @hasMany(() => Order)
  public orders: HasMany<typeof Order>
}
