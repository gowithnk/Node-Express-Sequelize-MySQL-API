import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "products",
})
export class Products extends Model {

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  price!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description!: string;
}