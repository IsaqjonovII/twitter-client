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
  _id: string;
  username: string;
  name: string;
  email: string;
  joinedAt?: Date;
}

export interface ITweet {
  _id: string;
  path?: string;
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
      commentLikes: number;
    }[];
    commentsCount: number | string;
  };
  tweetedUser: string;
}
export interface ISignUp {
  name: string;
  email: string;
  username: string;
  password: string;
}
