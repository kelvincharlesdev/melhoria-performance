interface Pagination {
  seed: string
  results: number
  page: number
  version: string
}

interface UserId {
  name: string
  value: string
}

interface UserName {
  title: string
  first: string
  last: string
}

export interface Pessoa {
  id: UserId
  name: UserName
  email: string
  phone: string
}

export interface GetUserResponse {
  results: Pessoa[]
  info: Pagination
}

// export interface Pessoa {
//   id: string
//   nome: string
//   email: string
//   telefone?: string
//   endereco?: string
//   foto?: string
// }
