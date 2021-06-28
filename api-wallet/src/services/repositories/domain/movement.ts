// import { MovementType } from '../../../common/enums/movement-type'

export interface Movement {
  id: number
  userId: number
  type: number
  amount: number
  createdAt: Date | null
  updatedAt: Date | null
}
