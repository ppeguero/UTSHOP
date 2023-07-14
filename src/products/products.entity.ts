import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  pkProduct: number;

  @Column()
  productName: string;

  @Column()
  productPrice: number;

  @Column()
  productCategory: string;

  @Column()
  productStock: number;

  @Column()
  productDescription: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  create: Date;
}