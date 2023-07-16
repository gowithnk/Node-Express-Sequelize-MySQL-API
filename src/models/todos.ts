import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: true,
  tableName: "todos",
})
export class Todos extends Model {

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description!: string;
}