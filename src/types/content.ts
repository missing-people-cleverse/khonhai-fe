export interface IContent {
  id: number;
  createdAt: string;
  updatedAt: string;
  isArchive: boolean;
  name: string;
  surname: string;
  nickname: string;
  userId: string;
  img: string; //arr of str
  nationality: string;
  ageLastSeen: number;
  dateOfBirth: string;
  missingDetail: string;
  gender: string;
  weight: number;
  height: number;
  skin: string;
  remark: string;
  status: string;
  province: string;
  place: string;
  missingDatetime: string;
  user?: {
    id?: string;
    username?: string;
    name?: string;
    surname?: string;
    email?: string;
    phoneNumber?: string;
  };
  comments?: {
    id?: number;
    name?: string;
    surname?: string;
    foundPlace?: string;
    foundDatetime?: string;
    foundDetail?: string;
    img?: string;
    isArchive?: false;
  }[];
}

export interface ICommentDto {
  id: number;
  name: string;
  surname: string;
  foundPlace: string;
  foundDatetime: string;
  foundDetail: string;
  img: string[];
  isArchive: false;
}
