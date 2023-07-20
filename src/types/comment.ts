export interface IComment {
  id: number;
  contentId: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
  foundPlace: string;
  foundDatetime: string;
  foundDetail: string;
  img: string[];
  isArchive: boolean;
  user: {
    id: string;
    username: string;
    name: string;
    surname: string;
  };
}
