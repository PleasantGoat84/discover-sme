import { HotSme, SmeCategory, SmeEvent, Post } from "./types";

export function fakeApiHotSmes(): Array<HotSme> {
  return [
    {
      name: "新爽爽豬肉丸美食",
      id: 2,
      rank: 1,
      popularity: 9487,
      imgs: [
        {
          url:
            "https://i2.wp.com/zamag.net/wp-content/uploads/2019/09/20190629-AM4A7358.jpg?w=1068"
        },
        {
          url:
            "https://d314m3nkjsdr4r.cloudfront.net/original/c1/4e/93/15735327491-52-1573532763.png"
        },
        {
          url:
            "https://pic1.zhimg.com/v2-5908dbdaed10af4d280915e3b20868df_b.jpg"
        },
        {
          url:
            "https://youimg1.c-ctrip.com/target/100d0y000000meb7i6792_D_260_195_Q90.jpg"
        },
        {
          url: "https://youimg1.c-ctrip.com/target/100h1700000123m933ED7.jpg"
        },
        {
          url: "https://youimg1.c-ctrip.com/target/10091700000124g61D202.jpg"
        },
        {
          url:
            "https://e.share.photo.xuite.net/nickhh/1ec472f/4695535/179324224_l.jpg"
        }
      ],
      category: SmeCategory.Cafe
    },
    {
      name: "CraftsmanShip 匠舫",
      id: 745,
      rank: 2,
      popularity: 1128,
      imgs: [
        {
          url:
            "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/26169358_1527273333975357_4350052215481500058_n.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_ohc=eE6xh0WsiEkAX_nE-jo&_nc_ht=scontent-hkt1-1.xx&oh=37aabfe78312b5f65ffc041f436f6dc0&oe=5F70BBB5"
        },
        {
          url:
            "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/26195710_1527273343975356_101995740886527856_n.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_ohc=Q8trO-91_1QAX_JoI8x&_nc_ht=scontent-hkt1-1.xx&oh=269995d1e3b5b438dc0ce7f99e1eaf27&oe=5F7029CC"
        },
        {
          url:
            "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/26219259_1527275630641794_5226385376297699012_n.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=uJGUKLIKKE0AX-h5bTB&_nc_ht=scontent-hkt1-1.xx&oh=cce3193e02f1aa1685546bf77fb10d2f&oe=5F717DF2"
        },
        {
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBiRTbZhCBjRW_M4aEJ5NxGunKHwIcuI1iCQ&usqp=CAU"
        },
        {
          url:
            "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/74698789_2430898600279488_337845743865823232_o.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_ohc=duSqjO_1fygAX9uvmwt&_nc_ht=scontent-hkt1-1.xx&oh=eecebb909d3edc6c2457308e34f3411b&oe=5F6E5E61"
        }
      ],
      category: SmeCategory.Other
    },
    {
      name: "茶里",
      id: 521,
      rank: 3,
      popularity: 346,
      imgs: [
        {
          url:
            "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/58622787_1046257432229218_4952107845022646272_o.jpg?_nc_cat=108&_nc_sid=730e14&_nc_ohc=wJgD8Ko4Qr8AX_GizEY&_nc_ht=scontent-hkt1-1.xx&oh=412da9642fbdcd680e692f42230e0068&oe=5F70E4F3"
        },
        {
          url:
            "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/58755168_1046257382229223_8664211000502779904_o.jpg?_nc_cat=100&_nc_sid=730e14&_nc_ohc=JsgtIyk8gtUAX8Xi8FI&_nc_ht=scontent-hkt1-1.xx&oh=76f616b880a4f2ca261db80db98a6022&oe=5F7051C9"
        },
        {
          url:
            "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/58749401_1046257265562568_6723634404100407296_o.jpg?_nc_cat=106&_nc_sid=730e14&_nc_ohc=O-ngy2Zvb3QAX-gD3_i&_nc_ht=scontent-hkt1-1.xx&oh=5eddd5948c6c62c8f737b69a5e723796&oe=5F6FBA2F"
        },
        {
          url:
            "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/58376328_1046257278895900_4098097256555610112_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=v7BMdPxjfHkAX_doN56&_nc_ht=scontent-hkt1-1.xx&oh=ee5de639d1cc14e3b907fcd2059f1fb5&oe=5F71B962"
        }
      ],
      category: SmeCategory.Drink
    }
  ];
}

export function fakeApiEventCarousel(): Array<SmeEvent> {
  // const events: Array<SmeEvent> = [];

  // for (let i = 1; i <= 10; i++)
  //   events.push({
  //     carouselImg: { url: "http://via.placeholder.com/400x200" },
  //     id: i
  //   });

  return [
    {
      carouselImg: {
        url:
          "https://smelab.com.hk/wp-content/uploads/2019/12/SME-Lab-Article-20191230-v2-1024x538.jpg"
      },
      id: 1
    },
    {
      carouselImg: {
        url:
          "https://cdn.thestandnews.com/media/photos/cache/a_Lc53V_1200x0.png"
      },
      id: 2
    },
    {
      carouselImg: {
        url:
          "https://statics.exmoo.com/uploads/2020-03-03/iPCfSTeIuxHTx06uOAaM.jpg"
      },
      id: 3
    },
    {
      carouselImg: {
        url: "https://i.ytimg.com/vi/TnmA1UcElFw/maxresdefault.jpg"
      },
      id: 4
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
          url:
            "https://fastly.4sqi.net/img/general/600x600/31703202_yjVQEPb3UiI4oNXpiioPkv67RIg_N6CbIfKH0h4nfEA.jpg"
        }
      ],
      content: "雅廉訪美食——新爽爽豬肉丸, 其中最為招牌的就是肉丸米鳥!",
      author: {
        name: "Terry C.C.I.",
        id: 8487,
        avatar: {
          url:
            "https://cdn.discordapp.com/avatars/578869529783042048/a02c08a2f068822669d05495f682a007.png?size=128"
        }
      },
      popularity: 5,
      liked: true,
      postDate: "2020/08/21"
    },
    {
      name: "新爽爽豬肉丸——保存傳統滋味  讓豬肉丸「彈」出澳門",
      id: 6,
      img: [
        {
          url:
            "https://static5.orstatic.com/userphoto/photo/0/FA/0030N481B16CEF54A24FE7px.jpg"
        },
        {
          url:
            "https://static7.orstatic.com/userphoto/photo/1/1BB/009CJQ6891BE294C35ED14px.jpg"
        }
      ],
      content:
        "澳門的新爽爽豬肉丸美食由潘先生夫婦經營，除了豬肉丸外，更有各款新鮮無添加丸類可供顧客選擇，招牌丸類包括墨魚丸、牛丸、白魚丸、鯪魚丸等等獲得街坊和各地食客的好評。開業接近二十年的街坊小店，由以前主要客源是本地街坊，到現在各地遊客慕名而來，生意蒸蒸日上，是甚麼促使潘先生夫婦重新設計該餐廳品牌，他們又想新爽爽豬肉丸美食在未來有甚麼新突破呢？\n星期六下午三時，接近下午茶時份，位於聖心中學對面的新爽爽茶餐廳依舊繁忙。儘管週末少了學生的光顧，擁有大概50多個座位的新爽爽仍一位難求，許多街坊和遊客都要「搭枱」享用美食。",
      author: {
        name: "ZA誌",
        id: 84,
        avatar: {
          url: "http://zamag.net/wp-content/uploads/ZAMAG-Logo_2016.png"
        }
      },
      popularity: 84,
      liked: true,
      postDate: "2020/08/23"
    },
    {
      name: "俊秀圍文創街需支援活化",
      id: 5,
      img: [
        {
          url:
            "https://cinlectureroom.com/wp-content/uploads/2017/06/pshipp-1280x960.jpg"
        },
        {
          url: "https://cinlectureroom.com/wp-content/uploads/2017/06/SHIPD.jpg"
        },
        {
          url: "https://cinlectureroom.com/wp-content/uploads/2017/06/SHIPE.jpg"
        }
      ],
      content:
        "Craftsmanship匠舫，2017年成立品牌，現時主要出售原創手工皮革製品及開設皮革工作坊，未來以品牌塑造為核心，衍生具品牌風格的產品；店面同時設有設計類品牌手錶，手工藝品寄售區。",
      author: {
        name: "文創講壇",
        id: 85,
        avatar: {
          url:
            "https://cinlectureroom.com/wp-content/uploads/2015/10/cropped-LOGO-small-32x32.jpg"
        }
      },
      popularity: 65,
      liked: false,
      postDate: "2020/08/22"
    },
    {
      name: "【三口八胃實驗室】茶里茶里",
      id: 4,
      img: [
        {
          url:
            "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/59484786_1046257358895892_6786539839442386944_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=RqQo4Fm1Fi4AX83Jbkd&_nc_ht=scontent-hkt1-1.xx&oh=ad86774ab0fe7d5a448b7c4ba9f10bcb&oe=5F717A92"
        },
        {
          url:
            "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/58612964_1046257338895894_5642795206773309440_o.jpg?_nc_cat=110&_nc_sid=730e14&_nc_ohc=3x6ouTRGpQEAX-weYfJ&_nc_ht=scontent-hkt1-1.xx&oh=fab5b0eba51b9ab42bbada94679e458a&oe=5F72AC12"
        },
        {
          url:
            "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/58961561_1046257322229229_7773102318483931136_o.jpg?_nc_cat=108&_nc_sid=730e14&_nc_ohc=DMk5_pgfyowAX9xi4aQ&_nc_ht=scontent-hkt1-1.xx&oh=78c93ecf3a3d15ad4e5a6c2937b8356c&oe=5F71668C"
        }
      ],
      content:
        "位於青洲街嘅茶里茶里(ChaLi ChaLi)，由兩位和藹可親嘅夫妻檔一腳踢咁打理，雖然係連鎖品牌，但定價卻係比坊間嘅台式飲品店更平易近人；老闆娘話想鄰近校區嘅學生哥同街坊飲得開心，所以寧願遊走薄利多銷體制咁話喎。睇完個餐牌，發現店內最平嘅產品最低只係13蚊就有交易，價錢佛心之餘，眼見多款茶飲都係由新鮮生果演變出嚟，用料夠晒實在，係咪值得支持先？😍😍",
      author: {
        name: "FOOK U 福利團",
        id: 86,
        avatar: {
          url:
            "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/p148x148/14333628_558753627646270_6200286093088935593_n.png?_nc_cat=109&_nc_sid=1eb0c7&_nc_ohc=023FaDHr3oQAX8CpQik&_nc_ht=scontent-hkt1-1.xx&oh=1ed6e427b06ea23423511a8203a04a46&oe=5F71841E"
        }
      },
      popularity: 48,
      liked: true,
      postDate: "2020/08/21"
    },
    {
      name: "皮革私製 零售開班兼備",
      id: 2,
      img: [
        {
          url:
            "http://www.smes-macao.com/upload/thumb_src/600_400/1525502622.JPG"
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
      postDate: "2020/06/01"
    },
    {
      name: "天馬策劃簡介",
      id: 3,
      img: [
        {
          url:
            "https://lh3.ggpht.com/p/AF1QipO0M6egm9yIrKXHZ8_AF65RNyq-ixqovt91eRm9=s1024"
        }
      ],
      content: "人氣分享",
      author: {
        name: "人氣分享人",
        id: 33
      },
      popularity: 23567,
      liked: false,
      postDate: "2020/06/01"
    },

    {
      name: "澳門創意產業的極致創意",
      id: 1,
      img: [
        {
          url:
            "https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/113999567_3002065353175619_7710923728805403943_o.jpg?_nc_cat=106&_nc_sid=730e14&_nc_ohc=_xLtthHMsasAX91xapB&_nc_ht=scontent-hkt1-1.xx&oh=886d232dfe147aef2bff927121bdfab7&oe=5F720C54"
        }
      ],
      content: "澳門創意產業科學館活動設計",
      author: {
        name: "人氣分享人",
        id: 33
      },
      popularity: 52,
      liked: false,
      postDate: "2020/05/01"
    }
  ];
}

export function fakeApiHotPosts(): Array<Post> {
  return fakeApiPosts()
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 6);
}
