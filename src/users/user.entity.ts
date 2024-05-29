import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Usuarios')
export class Users {
  @PrimaryGeneratedColumn({
    name: 'id',
    // primaryKeyConstraintName: 'productos_pk',
  })
  id: number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 255,
  })
  name: string;

  @Column({
    name: 'email',
    type: 'varchar',
  })
  email: string;
}
