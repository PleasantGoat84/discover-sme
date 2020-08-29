import { HotSme, SmeCategory, SmeEvent, HotPost, Post } from "./types";

export function fakeApiHotSmes(): Array<HotSme> {
  return [
    {
      name: "甲甲甲咖啡室",
      id: 567,
      rank: 1,
      popularity: 9487,
      imgs: [
        { url: "http://via.placeholder.com/400x300" },
        { url: "http://via.placeholder.com/500x200" },
        { url: "http://via.placeholder.com/200x300" },
        { url: "http://via.placeholder.com/500x300" },
        { url: "http://via.placeholder.com/400x200" },
        { url: "http://via.placeholder.com/400x300" },
        { url: "http://via.placeholder.com/400x300" }
      ],
      category: SmeCategory.Cafe
    },
    {
      name: "乙乙工作坊",
      id: 365,
      rank: 2,
      popularity: 8547,
      imgs: [
        { url: "http://via.placeholder.com/1080x960" },
        { url: "http://via.placeholder.com/360x360" },
        { url: "http://via.placeholder.com/500x600" },
        { url: "http://via.placeholder.com/150x960" },
        { url: "http://via.placeholder.com/400x300" }
      ],
      category: SmeCategory.Other
    },
    {
      name: "丙丙飲品",
      id: 848,
      rank: 3,
      popularity: 6253,
      imgs: [
        { url: "http://via.placeholder.com/400x300" },
        { url: "http://via.placeholder.com/400x300" },
        { url: "http://via.placeholder.com/400x300" },
        { url: "http://via.placeholder.com/400x300" },
        { url: "http://via.placeholder.com/400x300" },
        { url: "http://via.placeholder.com/400x300" }
      ],
      category: SmeCategory.Drink
    }
  ];
}

export function fakeApiEventCarousel(): Array<SmeEvent> {
  const events: Array<SmeEvent> = [];

  for (let i = 1; i <= 10; i++)
    events.push({
      carouselImg: { url: "http://via.placeholder.com/400x200" },
      id: i
    });

  return events;
}

export function fakeApiPosts(): Array<Post> {
  const posts: Array<Post> = [];

  for (let i = 0; i < 12; i++) {
    posts.push({
      name: [
        "甲甲甲飲食體驗!",
        "乙乙實作心得",
        "丙丙飲品好甜~",
        "甲甲甲餐牌分享",
        "乙乙手作材料準備",
        "丙丙新品推薦"
      ][Math.floor(Math.random() * 5.9)],
      id: i,
      img: [
        {
          url: "http://via.placeholder.com/1600x900"
        },
        {
          url: "http://via.placeholder.com/1600x900"
        },
        {
          url: "http://via.placeholder.com/1600x900"
        }
      ],
      content:
        "天地玄黃，宇宙洪荒。日月盈昃，辰宿列張。寒來暑往，秋收冬藏。閏餘成歲，律呂調陽。雲騰緻雨，露結為霜。金生麗水，玉出昆岡。劍號巨闕，珠稱夜光。果珍李柰，菜重芥薑。海鹹河淡，鱗潛羽翔。龍師火帝，鳥官人皇。始製文字，乃服衣裳。",
      author: {
        id: 84,
        name: "山頂的羊"
      }
    });
  }

  return posts;
}

export function fakeApiHotPosts(): Array<HotPost> {
  const posts: Array<Post> = fakeApiPosts();
  const hotPosts: Array<HotPost> = [];

  posts.forEach((post, i) => {
    hotPosts[i] = {
      ...post,
      popularity: Math.floor(Math.random() * (100 - i))
    };
  });

  return hotPosts;
}
