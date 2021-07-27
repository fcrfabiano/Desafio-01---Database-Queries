interface IFindUserWithGamesDTO {
  user_id: string;
}

interface IFindUserByFullNameDTO {
  first_name: string;
  last_name: string;
}

interface ICreateUserDTO {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  created_at?: string;
  updated_at?: string;
}

export { IFindUserWithGamesDTO, IFindUserByFullNameDTO, ICreateUserDTO };
