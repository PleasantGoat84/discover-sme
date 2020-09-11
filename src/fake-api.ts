import {
  HotSme,
  SmeCategory,
  Post,
  UploadForm,
  CarouselItem,
  SmeWithGPos
} from "./types";

export function fakeApiHotSmes(): Array<HotSme & SmeWithGPos> {
  return [
    {
      name: "新爽爽豬肉丸美食",
      id: 2,
      rank: 1,
      popularity: 9487,
      imgs: [
        {
          url: require("@/assets/fake-api/hot-sme/1/1.jpg")
        },
        {
          url: require("@/assets/fake-api/hot-sme/1/2.png")
        },
        {
          url: require("@/assets/fake-api/hot-sme/1/3.jpg")
        },
        {
          url: require("@/assets/fake-api/hot-sme/1/4.jpg")
        },
        {
          url: require("@/assets/fake-api/hot-sme/1/5.jpg")
        },
        {
          url: require("@/assets/fake-api/hot-sme/1/6.jpg")
        },
        {
          url: require("@/assets/fake-api/hot-sme/1/7.jpg")
        }
      ],
      category: SmeCategory.Cafe,
      gPos: {
        latitude: 22.205367,
        longitude: 113.545896
      }
    },
    {
      name: "CraftsmanShip 匠舫",
      id: 745,
      rank: 2,
      popularity: 1128,
      imgs: [
        {
          url: require("@/assets/fake-api/hot-sme/2/1.jpg")
        },
        {
          url: require("@/assets/fake-api/hot-sme/2/2.jpg")
        },
        {
          url: require("@/assets/fake-api/hot-sme/2/3.jpg")
        },
        {
          url: require("@/assets/fake-api/hot-sme/2/4.jpg")
        },
        {
          url: require("@/assets/fake-api/hot-sme/2/5.jpg")
        }
      ],
      category: SmeCategory.Other,
      gPos: {
        latitude: 22.196416,
        longitude: 113.545621
      }
    },
    {
      name: "茶里",
      id: 521,
      rank: 3,
      popularity: 346,
      imgs: [
        {
          url: require("@/assets/fake-api/hot-sme/3/1.jpg")
        },
        {
          url: require("@/assets/fake-api/hot-sme/3/2.jpg")
        },
        {
          url: require("@/assets/fake-api/hot-sme/3/3.jpg")
        },
        {
          url: require("@/assets/fake-api/hot-sme/3/4.jpg")
        }
      ],
      category: SmeCategory.Drink,
      gPos: {
        latitude: 22.209562,
        longitude: 113.543913
      }
    }
  ];
}

export function fakeApiAllSmes(): Array<HotSme> {
  return [
    ...fakeApiHotSmes(),
    {
      name: "七賢小食店",
      rank: 4,
      popularity: 312,
      imgs: [],
      id: 165,
      category: SmeCategory.Cafe
    },
    {
      name: "彬彬制服專家",
      rank: 5,
      popularity: 297,
      imgs: [],
      id: 985,
      category: SmeCategory.Other
    },
    {
      name: "Galeries RC 日式雜貨禮品店",
      rank: 6,
      popularity: 124,
      imgs: [],
      id: 85,
      category: SmeCategory.Other
    },
    {
      name: "時香花生瓜子",
      rank: 7,
      popularity: 215,
      imgs: [],
      id: 81,
      category: SmeCategory.Cafe
    },
    {
      name: "樂韻琴行",
      rank: 8,
      popularity: 201,
      imgs: [],
      id: 898,
      category: SmeCategory.Musical
    },
    {
      name: "蘭枝手作坊",
      rank: 9,
      popularity: 187,
      imgs: [],
      id: 366,
      category: SmeCategory.Barber
    },
    {
      name: "七賢小食店",
      rank: 14,
      popularity: 31,
      imgs: [],
      id: 1065,
      category: SmeCategory.Cafe
    },
    {
      name: "彬彬制服專家",
      rank: 15,
      popularity: 29,
      imgs: [],
      id: 9085,
      category: SmeCategory.Other
    },
    {
      name: "Galeries RC 日式雜貨禮品店",
      rank: 16,
      popularity: 12,
      imgs: [],
      id: 805,
      category: SmeCategory.Other
    },
    {
      name: "時香花生瓜子",
      rank: 17,
      popularity: 21,
      imgs: [],
      id: 801,
      category: SmeCategory.Cafe
    },
    {
      name: "樂韻琴行",
      rank: 18,
      popularity: 20,
      imgs: [],
      id: 8098,
      category: SmeCategory.Musical
    },
    {
      name: "蘭枝手作坊",
      rank: 19,
      popularity: 18,
      imgs: [],
      id: 3066,
      category: SmeCategory.Barber
    }
  ];
}

export function fakeApiCarousel(): Array<CarouselItem> {
  return [
    {
      carouselImg: {
        url: require("@/assets/carousel/upload.jpg")
      },
      carouselLink: "/upload"
    },
    {
      carouselImg: {
        url: require("@/assets/carousel/view-all.jpg")
      },
      carouselLink: "/view-all"
    },
    {
      carouselImg: {
        url: require("@/assets/fake-api/carousel/1.jpg")
      },
      carouselLink: ""
    },
    {
      carouselImg: {
        url: require("@/assets/fake-api/carousel/2.png")
      },
      carouselLink: ""
    },
    {
      carouselImg: {
        url: require("@/assets/fake-api/carousel/3.jpg")
      },
      carouselLink: ""
    },
    {
      carouselImg: {
        url: require("@/assets/fake-api/carousel/4.jpg")
      },
      carouselLink: ""
    }
  ];
}

export function fakeApiPosts(): Array<Post> {
  return [
    {
      name: "新爽爽招版米線",
      id: 7,
      img: [
        {
          url: require("@/assets/post/1/1.jpg")
        }
      ],
      content: "雅廉訪美食——新爽爽豬肉丸, 其中最為招牌的就是肉丸米鳥!",
      author: {
        name: "Terry C.C.I.",
        id: 8487,
        avatar: {
          url: require("@/assets/avatar/1.png")
        }
      },
      popularity: 5,
      liked: true,
      postDate: "2020/08/21",
      sme: {
        name: "新爽爽豬肉丸",
        id: 2,
        category: SmeCategory.Cafe
      }
    },
    {
      name: "新爽爽豬肉丸——保存傳統滋味  讓豬肉丸「彈」出澳門",
      id: 6,
      img: [
        {
          url: require("@/assets/post/2/1.jpg")
        },
        {
          url: require("@/assets/post/2/2.jpg")
        }
      ],
      content:
        "澳門的新爽爽豬肉丸美食由潘先生夫婦經營，除了豬肉丸外，更有各款新鮮無添加丸類可供顧客選擇，招牌丸類包括墨魚丸、牛丸、白魚丸、鯪魚丸等等獲得街坊和各地食客的好評。開業接近二十年的街坊小店，由以前主要客源是本地街坊，到現在各地遊客慕名而來，生意蒸蒸日上，是甚麼促使潘先生夫婦重新設計該餐廳品牌，他們又想新爽爽豬肉丸美食在未來有甚麼新突破呢？\n星期六下午三時，接近下午茶時份，位於聖心中學對面的新爽爽茶餐廳依舊繁忙。儘管週末少了學生的光顧，擁有大概50多個座位的新爽爽仍一位難求，許多街坊和遊客都要「搭枱」享用美食。",
      author: {
        name: "ZA誌",
        id: 84,
        avatar: {
          url: require("@/assets/avatar/2.png")
        }
      },
      popularity: 84,
      liked: true,
      postDate: "2020/08/23",
      sme: {
        name: "新爽爽豬肉丸",
        id: 2,
        category: SmeCategory.Cafe
      }
    },
    {
      name: "俊秀圍文創街需支援活化",
      id: 5,
      img: [
        {
          url: require("@/assets/post/3/1.jpg")
        },
        {
          url: require("@/assets/post/3/2.jpg")
        },
        {
          url: require("@/assets/post/3/3.jpg")
        }
      ],
      content:
        "Craftsmanship匠舫，2017年成立品牌，現時主要出售原創手工皮革製品及開設皮革工作坊，未來以品牌塑造為核心，衍生具品牌風格的產品；店面同時設有設計類品牌手錶，手工藝品寄售區。",
      author: {
        name: "文創講壇",
        id: 85,
        avatar: {
          url: require("@/assets/avatar/3.jpg")
        }
      },
      popularity: 65,
      liked: false,
      postDate: "2020/08/22",
      sme: {
        name: "CraftsmanShip 匠舫",
        id: 745,
        category: SmeCategory.Other
      }
    },
    {
      name: "【三口八胃實驗室】茶里茶里",
      id: 4,
      img: [
        {
          url: require("@/assets/post/4/1.jpg")
        },
        {
          url: require("@/assets/post/4/2.jpg")
        },
        {
          url: require("@/assets/post/4/3.jpg")
        }
      ],
      content:
        "位於青洲街嘅茶里茶里(ChaLi ChaLi)，由兩位和藹可親嘅夫妻檔一腳踢咁打理，雖然係連鎖品牌，但定價卻係比坊間嘅台式飲品店更平易近人；老闆娘話想鄰近校區嘅學生哥同街坊飲得開心，所以寧願遊走薄利多銷體制咁話喎。睇完個餐牌，發現店內最平嘅產品最低只係13蚊就有交易，價錢佛心之餘，眼見多款茶飲都係由新鮮生果演變出嚟，用料夠晒實在，係咪值得支持先？😍😍",
      author: {
        name: "FOOK U 福利團",
        id: 86,
        avatar: {
          url: require("@/assets/avatar/4.png")
        }
      },
      popularity: 48,
      liked: true,
      postDate: "2020/08/21",
      sme: {
        name: "茶里",
        id: 521,
        category: SmeCategory.Drink
      }
    },
    {
      name: "皮革私製 零售開班兼備",
      id: 2,
      img: [
        {
          url: require("@/assets/post/5/1.jpg")
        }
      ],
      content:
        "近年不少青年人喜歡自己動手創作心水皮革用品，送禮實用有心思，很多皮革興趣班應運而生。Craftsman Ship匠舫是一間皮革工作坊，主營皮革用品的私人訂製，風格簡約。業務包括現貨銷售及開班教學，店舖更銷售手錶及文創產品。今年四月正式營業，兩人投資四十萬元，預計一年半能回本。負責人期望在保留傳統工藝的同時加入新元素，把品牌推廣至其他地方。",
      author: {
        name: "editor",
        id: 9494
      },
      popularity: 17,
      liked: false,
      postDate: "2020/06/01",
      sme: {
        name: "CraftsmanShip 匠舫",
        id: 745,
        category: SmeCategory.Other
      }
    },
    {
      name: "天馬策劃簡介",
      id: 3,
      img: [
        {
          url: require("@/assets/post/6/1.jpg")
        }
      ],
      content: "人氣分享",
      author: {
        name: "人氣分享人",
        id: 33
      },
      popularity: 23567,
      liked: false,
      postDate: "2020/06/01",
      sme: {
        name: "天馬策劃有限公司",
        id: 9999,
        category: SmeCategory.Other
      }
    },

    {
      name: "澳門創意產業的極致創意",
      id: 1,
      img: [
        {
          url: require("@/assets/post/7/1.jpg")
        }
      ],
      content: "澳門創意產業科學館活動設計",
      author: {
        name: "人氣分享人",
        id: 33
      },
      popularity: 52,
      liked: false,
      postDate: "2020/05/01",
      sme: {
        name: "澳門創意產業有限公司",
        id: 99991,
        category: SmeCategory.Other
      }
    }
  ];
}

export function fakeApiHotPosts(): Array<Post> {
  return fakeApiPosts()
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 6);
}

export function fakeApiGenPost(form: UploadForm): Post {
  return {
    name: form.getTitle(),
    id: Math.floor(Math.random() * 9999),
    author: {
      id: Math.floor(Math.random() * 9999),
      name: "新用戶"
    },
    postDate: new Date()
      .toISOString()
      .substr(0, 10)
      .replace(/-/g, "/"),
    content: form.getContent(),
    img: form
      .getImgGrid()
      .getImgs()
      .map(s => ({
        url: s
      })),
    popularity: 0,
    liked: false,
    sme: {
      name: form.getSme().name,
      id: Math.floor(Math.random() * 9999),
      category: form.getCategory()
    }
  };
}

export function fakeApiCategories(): { [key: string]: SmeCategory } {
  return {
    餐廳: SmeCategory.Cafe,
    飲品: SmeCategory.Drink,
    髮廊: SmeCategory.Barber,
    機電: SmeCategory.Mechanical,
    時裝: SmeCategory.Fashion,
    音樂: SmeCategory.Musical,
    醫療: SmeCategory.Medical,
    教育: SmeCategory.Education,
    其他: SmeCategory.Other
  };
}
