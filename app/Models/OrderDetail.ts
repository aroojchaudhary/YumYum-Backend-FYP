import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Order from './Order'
import Dish from './Dish'

export default class OrderDetail extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public orderId: number

  @column()
  public dishId: number

  @column()
  public quantity: number

  @column()
  public price: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Order)
  public order: BelongsTo<typeof Order>
  
  @belongsTo(() => Dish)
  public dish: BelongsTo<typeof Dish>
}
