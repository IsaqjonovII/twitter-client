export interface IAppRoutes {
  path: string;
  key: string | number;
  Component?: React.JSXElementConstructor<React.FC> | React.ReactElement | any;
}
export interface ISidebarRoutes {
  path: string;
  key: string | number;
  title: string;
  Icon?: JSX.Element | any;
  isActiveIcon?: JSX.Element | any;
}
export interface IUser {
  userId: string | number;
  username: string;
  name: string;
  email: string;
}

export interface ITweet {
  id: string | number;
  path: string;
  publishedAt: string | Date;
  content: string;
  likes: {
    likedUsers: IUser[];
    count: number;
  };
  comments: {
    commentedUsers: IUser[];
    commentsData: {
      commentId: string | number;
      commentContent: string;
      commentDate: string | Date;
    }[];
  };
}
