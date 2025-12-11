/**
 * User Posts Data
 * Sample data for social media posts
 */

export interface UserPost {
  id: number;
  userName: string;
  userLocation: string;
  postImageUrl?: string;
  likesCount: number;
  commentsCount: number;
  bookmarksCount: number;
}

export const userPostsData: UserPost[] = [
  {
    id: 1,
    userName: 'Allison Becker',
    userLocation: 'Sukabumi, Jawa Barat',
    likesCount: 1201,
    commentsCount: 24,
    bookmarksCount: 55,
  },
  {
    id: 2,
    userName: 'Sarah Johnson',
    userLocation: 'Los Angeles, California',
    likesCount: 892,
    commentsCount: 18,
    bookmarksCount: 42,
  },
  {
    id: 3,
    userName: 'Michael Chen',
    userLocation: 'Singapore',
    likesCount: 2451,
    commentsCount: 67,
    bookmarksCount: 128,
  },
  {
    id: 4,
    userName: 'Emma Wilson',
    userLocation: 'London, United Kingdom',
    likesCount: 645,
    commentsCount: 31,
    bookmarksCount: 38,
  },
  {
    id: 5,
    userName: 'David Martinez',
    userLocation: 'Barcelona, Spain',
    likesCount: 1789,
    commentsCount: 45,
    bookmarksCount: 91,
  },
  {
    id: 6,
    userName: 'Lisa Anderson',
    userLocation: 'New York, USA',
    likesCount: 3210,
    commentsCount: 89,
    bookmarksCount: 156,
  },
  {
    id: 7,
    userName: 'James Taylor',
    userLocation: 'Sydney, Australia',
    likesCount: 567,
    commentsCount: 22,
    bookmarksCount: 29,
  },
  {
    id: 8,
    userName: 'Sophia Rodriguez',
    userLocation: 'Mexico City, Mexico',
    likesCount: 1432,
    commentsCount: 54,
    bookmarksCount: 73,
  },
  {
    id: 9,
    userName: 'Ryan Brown',
    userLocation: 'Toronto, Canada',
    likesCount: 921,
    commentsCount: 38,
    bookmarksCount: 51,
  },
  {
    id: 10,
    userName: 'Isabella Garcia',
    userLocation: 'Miami, Florida',
    likesCount: 2109,
    commentsCount: 76,
    bookmarksCount: 112,
  },
  {
    id: 11,
    userName: 'Lucas Kim',
    userLocation: 'Seoul, South Korea',
    likesCount: 1876,
    commentsCount: 61,
    bookmarksCount: 94,
  },
  {
    id: 12,
    userName: 'Mia Thompson',
    userLocation: 'Paris, France',
    likesCount: 734,
    commentsCount: 29,
    bookmarksCount: 47,
  },
  {
    id: 13,
    userName: 'Noah Williams',
    userLocation: 'Berlin, Germany',
    likesCount: 1543,
    commentsCount: 49,
    bookmarksCount: 82,
  },
  {
    id: 14,
    userName: 'Ava Singh',
    userLocation: 'Mumbai, India',
    likesCount: 2987,
    commentsCount: 92,
    bookmarksCount: 167,
  },
  {
    id: 15,
    userName: 'Ethan Davis',
    userLocation: 'Chicago, Illinois',
    likesCount: 812,
    commentsCount: 34,
    bookmarksCount: 56,
  },
  {
    id: 16,
    userName: 'Charlotte Lee',
    userLocation: 'Hong Kong',
    likesCount: 1654,
    commentsCount: 58,
    bookmarksCount: 88,
  },
  {
    id: 17,
    userName: 'Mason Ahmed',
    userLocation: 'Dubai, UAE',
    likesCount: 2234,
    commentsCount: 71,
    bookmarksCount: 119,
  },
  {
    id: 18,
    userName: 'Amelia Nakamura',
    userLocation: 'Tokyo, Japan',
    likesCount: 1398,
    commentsCount: 52,
    bookmarksCount: 79,
  },
  {
    id: 19,
    userName: 'Oliver Santos',
    userLocation: 'Rio de Janeiro, Brazil',
    likesCount: 976,
    commentsCount: 41,
    bookmarksCount: 63,
  },
  {
    id: 20,
    userName: 'Harper Kowalski',
    userLocation: 'Warsaw, Poland',
    likesCount: 1165,
    commentsCount: 44,
    bookmarksCount: 71,
  },
];
