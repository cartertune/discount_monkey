// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const email = 'test@test.com'
  const user = await prisma.user.create({
    data: {
      email,
    },
  })

  res.status(200).json(user)
}
