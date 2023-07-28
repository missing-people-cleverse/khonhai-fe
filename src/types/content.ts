export interface IContentDto {
  isArchive: boolean;
  name: string;
  surname: string;
  nickname: string;
  img?: string[]; //arr of str
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
}

export interface IContent extends IContentDto {
  id: number;
  createdAt: string;
  updatedAt: string;
  userId: string;
  user: {
    id: string;
    username: string;
    name: string;
    surname: string;
    email: string;
    phoneNumber: string;
  };
  comments: {
    id: number;
    name: string;
    surname: string;
    foundPlace: string;
    foundDatetime: string;
    foundDetail: string;
    img: string[];
    isArchive: false;
  }[];
}
