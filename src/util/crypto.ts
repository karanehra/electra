import { createHash } from 'crypto'

export const hashPassword = (password: string): string => {
  const hash = createHash('sha512')
  hash.update(password)
  return hash.digest('hex')
}
