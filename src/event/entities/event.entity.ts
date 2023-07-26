import { User } from 'src/user/entities';
import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'event' })
export class Event {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  createdAt: Date;
  @Column()
  DeletedAt: number;
  @Column({ nullable: false })
  userId: number;
  @JoinColumn({ name: 'userId' })
  user: User;
}
