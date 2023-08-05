import { ITweet, IUser } from "../interfaces";

// Helper function to generate random dates within a range
function getRandomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

// Generate a random user
function generateRandomUser(userId: string): IUser {
  const names = [
    "299",
    "Jane Smith",
    "Michael Johnson",
    "Emily Lee",
    "William Brown",
  ];
  const usernames = ["isaqjonov_i", "user2", "user3", "user4", "user5"];
  const emails = [
    "isaqjonoviii@example.com",
    "user2@example.com",
    "user3@example.com",
    "user4@example.com",
    "user5@example.com",
  ];

  const randomIndex = Math.floor(Math.random() * names.length);

  return {
    userId,
    name: names[randomIndex],
    username: usernames[randomIndex],
    email: emails[randomIndex],
  };
}

// Generate 10 random tweets
export const tweets: ITweet[] = Array.from({ length: 10 }, (_, index) => ({
  id: index,
  path: `user/profile/status/${index}`,
  content: `Ilhomjon is creating Twitter clone ${index}`,
  publishedAt: getRandomDate(
    new Date(2023, 0, 1),
    new Date()
  ).toLocaleDateString(),
  likes: {
    likedUsers: Array.from({ length: 5 }, (_, i) =>
      generateRandomUser(i.toString())
    ), // Convert index to string here
    count: Math.floor(Math.random() * 100),
  },
  comments: {
    commentedUsers: Array.from({ length: 5 }, (_, i) =>
      generateRandomUser(i.toString())
    ), // Convert index to string here
    commentsData: [
      {
        commentId: `comment_${index}`,
        commentContent: "Random comment",
        commentDate: getRandomDate(
          new Date(2023, 0, 1),
          new Date()
        ).toLocaleDateString(),
      },
    ],
  },
}));
