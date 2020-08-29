import { HotSme, SmeCategory, SmeEvent, HotPost, Post } from "./types";

export function fakeApiHotSmes(): Array<HotSme> {
  return [
    {
      name: "甲甲甲咖啡室",
      id: 567,
      rank: 1,
      popularity: 9487,
      imgs: [
        { url: "https://pic.pimg.tw/box1817/1533534041-2995191221_n.jpg" },
        {
          url:
            "https://yp-app.oss-cn-hongkong.aliyuncs.com/business/e9b58dbcaa7de5a4f724a208ec79b37a.png"
        },
        {
          url:
            "https://a.bbkz.net/forum/attachment.php?attachmentid=687550&thumb=1&d=1350395734"
        },
        { url: "https://pic.pimg.tw/miyakorice/1456310727-1130783908.jpg" },
        {
          url:
            "https://2.bp.blogspot.com/-0ZkZMDU0u0M/Tew44t79GWI/AAAAAAAAAfQ/ovyb4ymlkRo/s1600/%25E6%25B2%259B%25E8%25A8%2598%25E5%2592%2596%25E5%2595%25A1%25E5%25AE%25A4_001.jpg"
        },
        {
          url:
            "https://media-cdn.tripadvisor.com/media/photo-s/18/61/02/8a/caption.jpg"
        },
        {
          url:
            "https://livetheworld.americanexpress.com/wp-content/uploads/2019/03/Round-the-Clock-Coffee-Shop_image-780x540.jpg"
        }
      ],
      category: SmeCategory.Cafe
    },
    {
      name: "乙乙工作坊",
      id: 365,
      rank: 2,
      popularity: 8547,
      imgs: [
        {
          url:
            "https://7.share.photo.xuite.net/jasmine_lsf/17952ad/10104162/461533771_m.jpg"
        },
        {
          url:
            "https://7.share.photo.xuite.net/jasmine_lsf/179521d/10104162/461237947_m.jpg"
        },
        {
          url:
            "https://media.cyberctm.com/uploads/images/news_4/2015-04/8bcb171525d2097f24e7f3ca02430721.jpg?v=1.5"
        },
        {
          url:
            "https://travel.ulifestyle.com.hk/cms/news_photo/w600/20170111160813_5_581%20wn%20506.jpg"
        },
        {
          url:
            "https://7.share.photo.xuite.net/jasmine_lsf/179521c/10104162/461474746_m.jpg"
        }
      ],
      category: SmeCategory.Other
    },
    {
      name: "丙丙飲品",
      id: 848,
      rank: 3,
      popularity: 6253,
      imgs: [
        {
          url:
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExIVFhUXFxgVFhYYGBUXGBcXFRcXGBUVFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGyslHyUvLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAAIDBAUBBwj/xABGEAACAQIEAwUEBwUHAwMFAAABAhEAAwQSITEFQVEGEyJhcTKBkaEHFFKxwdHwFSNCYoIzQ1NyktLhJMLxk7KzFlRjc6L/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAuEQACAgEDAwIFBAIDAAAAAAAAAQIRAxIhMQRBURNhFCJxgbGRofDx0eEFQlL/2gAMAwEAAhEDEQA/APG3+/Wo2qTlTGFZBG10V0ClHlRDQ8KPtfI/hSKj7QPuP5UlWni3QsOkjjzHz/KnC35j4x99SC1TxZo2bSxq4c/aT0zrPwmmvZYdI8mQ/IGRUvcml3JpkwaSDK3SueLzqx3J8qXcnpVErFplcsa5nNWDaNMKHzptICNDJrgu1IJFcy+XypGgje9rve08MOaKf9Q+5hXHy/YA9C34k0tBGd7XRcphUfo1zLQpGJRdrpuVEo+6mxS0YlJpVHlpVqMPFNYVwGnNQMJacKaFpwSsOOAqRVqMJUqWqARwtVMuH86Vqx51dtYQ9a1+5q9isMOetdNg9a0RgT1prYRqeO4GilYwbuwVAWYmAokknoAN6MOFfR9dcTduhBuQi95GkwzSFnTkWra7BcGVbXekS9zN692G7sIDyzuDPkB5yarnzi1agsDlzQN+YWfZUdd9N69bFgSjbOac32ADE/RmuyYkzH2EaYjTS4NfF57HpQlxzsricMMzKGTQ50kgA7FgQGUHqRB5E19AcU4Vdt2cwu3LjAjMGhlCwZORpnlWESLqn+FlksBqCsQWAM6AbpsRNGMYZI2hNUovc8Aa3TclFnbTgQw90Mgyo8+EahHWMyg/Z1Vh5NHKhwWzXDlx6HR0xdord3S7urq2TXHwxrmbHKJt1E9vyq81k1A9thQMVCvlXIqdgajM1gG3wfhNu7azEGZIMHpSq/2PM23HRp+IH5UqlJtMZIELa61JcA0im2dKc41qgiHCnCmi3TltUNh9zuSalt2aatk1ZtYc0wCbDYXzrZweC86qYPCGiDBYeKVhQl4bVfEYOK3bVljsapY2w/6NNj5NIKuxeIBw6Aam2SpH8yXDdA96Pp1KmjHg5Fm67nMUcEoygkQWnWPdXi/DOK3MJe7wAshgXFmJj2WB5MOR/AmvUezXam1cA7m4DzNsjxA8ybczPmsjXfkPXlc8e33OJ7SD9DOo2Img3E4TLibjqItJmLHZdU1UepJEVrntCOiT0LxBgnXw6bfMUP8AabtAgTNeuBFGqgiASP5T4rp8gPWKh02PJCTtUnsGck0BH0igdxbB9rPa/wD5ssH++38qArdqtjtDxk4q4GghFnIDvqZZ2/mY/AADlVW1Ymh1ck5FsS2I0wZNSNgW61o4fAHqKkayRXmyZdIwL+Easy/aYUR4u2fOsXFo1FWB0ZjqelMg9Kncmm5j0pgG72Lbx3F6hT8CR+NKo+ybxiPVWH3N+FKoz5CjNbCL0qpdQBoHL8q2Wt1kXpLmOtOnaBW5wCkqGu+KpEzUUMx1u01X8LhGNV7E16t9HnCLC4W/jsQneC1IS2YgsACSRz9pRr5114cd7slOSQE4XBuOvxrdwdpuhox4ycbcwrM3D8MloqrrcQoHRZDSBMnTSABvXexGBRbd3E3lDJbUgAgEFok6HnED+qqy6Zc/hpk1lBqSOtVcSrHr8KK+3OGWzdFy2o7u4ouKBoNBqBG3I/1Vo8Kx+FvYK9i2wVte6MZAd9FPtQI9rpWj06SUq2f07heXseU4pG6fKqbYU8vn+pr0rshhsNjsZdJsZbWQlbeZjlI7tZzCDzY++pezPYzPiHXE2HFrKxUnMozZljxDymui/TvtRNtSPNRjsUBAv3gOguvHwmqT2GY5mJJO5JJPxNekdiezuHxDYnvldhaAKhTB3eR5nwiszivD8I2JsWrNvE21dlW4Ly5W8TqspPkT8qq3Jtx8CLStwQtYetDDYavRL/0fYM3Xw1rEXRfVO8AdQVIO2qgcyKyeyfZm1iFv5sQbb2Cc6hSwCx7UzrqHED7PnXHkxqStP9n34LLIlsYdnDtG/wAzSu2D+jRF2d7NPirN25bu+K2xQJB8RCq2jTp7UbcqoW+E3Hw9++GAFhwjoQc0nLMacs/yNcsunlbKrJEF8Yrj9CsbF5qOuE9ksXi0L2wqoNM9w5VJG8aEn1iKHu1vZ+/g3VL2XxrmUqcwIBg61vRa8G1oFXJ6U1T5VK7V20ZNSkqGW5Z4Xcy3A3T8QRSp1sQR5g/h/wA0qi9xqJLyuATkMRJ1HL31hhtzRPxVv3T+n30NW2AoQdo3c6LhqRLppC4KkW4KdfQP3JLN2j7sN24t4a3cw2JtG5h7mpCxmUkAHQkSCAOYiKAlvCnZlPWuvBlUdpLYjkhfDPXMX204emFuYbCrfPec3iFmJ1LExA2qIfSPbsYW1ZwqsLimbrOqwSZnLDGdTuY0ArzDDhAZk1awxtqZEknrXZ6+Lum++/dkPSl5PROM9uLGLwttHDfWVJmFGQgzIBnTTKdtxUHD+0uFtcPxGFYkXbjSihTBB7se0BA9lqBxaXNnn3cvupt+0CwadvwpfXx8LZc/e7G9KVBz9H/aDDYXEM95+7RrbKDlZvEWQxCgnYGr/Yvt2RiX+t4oiyVbIXmM2ZcsadJrzO+obnFQ3LegGbaj62OServt/Rnilex6f9HPHsPau4k3b6Wg48DMQATmbUT6g1Q7TYr9/hbr8Ss4vLcA8ARTbUMrEtlOxjn0rzp7ZgDNtUTIRzqizw1ud7v6f2I8UuD6Fxfa6w2NOE75Al2yO7v22WVuHN4S4JGwBHn61ifRzwtrV/H2nZCAq25zDxZgxVh1Ug/hXigtmnLYbypE8ag4p1dft3M4zu6PX+x+IuWMFxMK0XcPcLyNRmQa+om3763bGOw+K4bi8VZAVrlotfQfw3bSEsfeApnmADvNeFohzk/w9JruHvXbZIV2VDowViAwg6MAdd+daUoSbd72n+Nv2MoSR6zYX69wfDC0rXRZur9ZsW2h3VS2dRqNTmDD86w/pC7PYfDYTDX7Fu9aFxiDavMxZJXMFKsTlOh2oBwPE8RhnL4e69ttpQkSOjDY++puJ9pcXiQBib9y4F1UNEA9coAE+dCclWz2tuvqGMXe5QYzyrgWmG6Kcjg7V5czsjRJc0g+f4GlUd/2TSpEFopXLVwDXvI03YEeW1dtKI1qvbxDMIJmrdoaUJOjQVncq/o08Kv6NMe3NdWx5/r40E15HafglCr+jTgF/RqLufOnCz5imT9xd/BYQL+jUqgVVFrzp4t+Yqil7itexeFzzrveedUcnmKWQ9RRtGtlxmqJmqqbZp+bSg5UFbjy1cDVGWppuAf+KXUNRaVqct8dKqrdXr8qM+xN7hjWLi4oWg4dwDcuqhYG2MmWSpAzBhM7mdOVsUdbJ5JaUDIvDoaa11elF/AW4S+EcXmti+EvGWYyCmfKwKtDfwR9qNBuTTwuF4c+AD5gMWMPfuMoe4QXtLIzSIUyU0EAkx4uXR6BH1gXZlqF8tH/AGk4Lw76ib+FCm4Bbbw3WY+JwrwrOwI3AIJkqQDU3ansLgcPbs3EvXmDX7Vp5ZD4brkFgwSAw5aR4etB4vc3rI82NsVxVivRe0XYfDWWwndXbrJfvCwzZkeC6ZrZXInNg241G0b1hduuyowJtlLhu27huANA8JtkDKWGhJBPIeyahPE0rKRyRboFyaVRM1KuVlzPw40qyobzpptwoOWOvKekdaj74+dNySTSLQDedOGbzqmMV6/GnDFevxraWNqRchvOugN51FZuE9a0LeDcj2vvrcGtFYBqeM1Pu2GX+Kq+dvtUVYNieTUq7VVW43WrNqzcOxH691Z2FNDiKjYedTtw+9E6fGqN4ON4pKfkbUvBIVphtTVdmY9K6EbpRprubUvBP3PnVd8Gev8A4qUYe59k/L86a6uNwaaMpLhivS+xEMG1MODbyqQ3j5/Gmm+evzqvq5PImmBH9Xbp91c7poIipe/PWui6ab1pg9OJGLl0ahnBBBBDHQgQCNdCBpPSrDY284C3Ltxwvsh3ZgvKFDExsNulNN8dDSW+siRInUdfKpyzSkqYyxxTuxFqVav1vBFmlCATKjx6CBI0PWaVczb8MrZYFkZQDG1D/FMF3ZkeydvLyoiY+VVOJx3Zn9aUYPcSXALzT1NMK05F/XpXQRN/szdw4ur9YDm3OuSM0eU6UZ/XeEzdj6wFj91rbJBjXP1E9OVeY2SZA66V69hOztkp7AnrlB99JLYZbnnOPxQLHKdOVUTdo+4p2fUbBfesc99PKsJ+FCdVXnsPhQUkM0zBt3aJuy9zDM8Yi61teqrmPwkeVcw3Bkb+EfAUScI7LWiPFbU+6s5IFMr3PqOS6frbAgkWx3THOORYg+Hn1oHxt9cxgyJMHqOVeoYnsbaySLI9YoVx3Zq2pPhA6UqlGwtMDTcqazerYbgaTsKv4DstbciR8zTtoFM72fwlm8rG5irVmBID5yW30GUHp8xvyXF+FWVw63Ri7LO29lcxdflB6e/nW3/9CWY0Dbcmb86w+JdlFQGC3xNKmg7gw9kddap4hQOdal3g43lvjWXxHC93l1JmflH508WKyCa0+BcIu4q6LVkAserKo0EmWYxWdh8Oz7VPdwTKJpmwI38f2Hx1q3cutaU27ZIZ1uW2Gm8Q2o9KH8OdYqs1cVyKFMNmrA6ClWcmJI5TSpdLDqQYMKo8a0T4/d/zWotgyJFZXaHRY8vxFShyNJg8RT8PMmOhHxBFNArb7M8N7+6LcgZp1PkrH41ZukIkV+z2CNy9bGkd4g15y4FfTODsIq6hQNq8G/Zq4bGW7ZuCLd6yztMLlLI5JPkCZr1m3xqziP3dm7bd9wEdWMjyB9a58jbdootlRa47g7LjQAGNaC8f2eIbTatlOJ2s2Vr1svOQAOp1PLfVp5Voi/J/DnQxQySV0ZziluYfDOFovtDaKM+EKkIwA1J+AMUP8VwN14NlwhiDI+Y0Na3DlNtLSSDkEEnQk82+OtBYsrk9S2N6kK2aCXFEZCB0rz3jBDOqFFOYxI3ovv8AE1UEswAAkk6ADqTQouGstfF3v1YCSi5liWG8zroTGlJlxT1RY2OUaYLfsUltPP76IeF8GRCpb57aeXvrTs4ZFIynr05mTtS4mGZBkgsDoCYkHcT8PhRyxk4vSaLVm1ZW26kADQqJiNzWFx7gSFSwkaVLwPNbtN3xGdnzQCDAWMon3T76mxXEVYZSOUaUsIy0q+RnVnkmPt5XKsI108/+aHe0mHgWz1LD/wBteocWtoWghmHLf8E/Gg7tvh17iyy/4rAjXmp11A+zV8WpVZOS2BngggmtzFIjLGUVi2XCxAj843q1bvMxCqCxOwAJJ9AKefIYJUZuMwwG1U0USATAnU9K2L1i4Qzd28LoxytC+TGNPfWY415e/b3+VNGQJxRbt4G2Rm7zTry+NKmhc0SM/TNKIPJEGppVvuIG0UOdpm1A8h95ogY0Mdom8cen3UkeTGSK3uzGKKOSpEwYmTqRA2151gA1pcJYyQOYP4U8uAo3OLOSXxBAYnlqPZAHw0rGw2JAOYaKdGHQHcVpq7qrSZVl0B5MRrB+z5Vl/VNT0I2qSoLCXhWDW1cwzriLT97cQd2Jzp+8EFgRAkbEda9QOJAYLmMttXh3Bb4XEWC5AVLyEsTAChwTJOw0mvYhxfBEqRjMNp/+a1/u6/dXpdNOcYNQ5tfocHU44zmtV8M0b2KCBJuZZOgIJzDoI2PnUlzFZFLO0CSJ9OVUnxmCuZM2JsHIQw/fW9x/VUmMxGHuJlGIs7z/AGiH3+1Xd6srfHsciwQ+VO/co9q8aBhb+v8AdMNdtVMSelUeE8OzLaMwFVf/AGgU/tnirX1PFQ6ktaZRDKeWkQap8T48uGto+9sgDMpBymNAyjUA9f8AioZWpZE5cJHT0qeOLUe4RDD+PwkeEH1BJVgT8Kex1AMQw1WdQeWg0099AVjtMLrli+TbKQGII8ykkH3fdW/wO7Aa45BLaAk/wjnrqPeKWGWTnpS28+xeWGKjqb38V3+pZ7RhVw18nYWrkT/kMCvHsP3eRiSwbQIokAanz8vnXp3afHB8PeYmALbqo03IIzadZ0rzAKkDrpPziufqmnLYfEqRbe49y4zglZ0gMelPOFMeJieepJ++qti5rvUxvVylitj7eWP18em1W+y9xjibahmXOHQlTDANbcNlP2o284qhjm/D8aqJJIAIB5SQo/1EgD1ms1YU6DZ7l90uuUc5rF22Cc57tMmZlxDNqXXIyqTvnB2gUFVoXeD3Q14d5blASx7634wrAajPI3nxffWWGoJGsJLGBsi0LiYp2vn+7t2nkCdc1+4VHuUGlRDwjDBrVto3RT8QK7UnNhpFcvQ9jmXvzniI0mN4EaHetuSRVLC8MS811mElWAA9d/upk63Jsq99aIg5I5CFMa8ummlVeCnxsY0HTpP5CqnG8Mtu+9tdlIj3qD+NXuzluc/9P/dtTyfy2NFWwgxVkZVjoKpXbGtWAGDQJ1OxBI5bR+FSYu2RuCPUR8jXPCeorOGkFHGp9accO+pyNA38J0naelS4Wyzs0AnbYTG9GFzhtzubhN5mLrbLAhBIUFmkgbghdPWraqJVYHYaAykiQDqOtWr+ViSEyjSNvftUeHsSBWlhMLMaVnMyiZ/1cdK59WHQURjhw51BxILZts+XNA2/OlUhqM7g2DRrvjUMACwB2JWN+o8q2/o2ydxeDIpPe81U/wAC+VRIAqvdA1XKANi2YDSdftfKoeyF0qt8RBN4mOkgaVRStUI1uGV1bP8AhW+vsLuNjtWXxbKUfwr7J5DoaY+KNUsZflSPI0bMAFu7WhhLniWdswn4isWwavI2lMwLg2e2aAXBH2R8mYflQ021b3aH2LJ62x+FYIoLgZhBi+JWmN4i4vjtlQBYCtmIXQ3YzHUc6wAaJcX2WIwaX0lnyi7cE/3bCQFHlueuvpQyKyrsA9a7I4MvhLJ/kA+Gn4V2rX0cXpwFryNwfC40fKKVcsrtlVwCjGKFeLIwuHMCJJIkESJ3E8qL+7PShbtDdZrviAEKAN9tetWiSM0CtvgDBUdjsCuvIb71hit7h9sfU7x550HzH50ZboZOmX7qglGDSc3IkgSh5RHKtc2JSddp1BB+B1FYmDwly33LusKzQJKkmVI9neI5nStQY242gQuuUnOuZpMtlAI30A+NR009h3K0B92/cQMEJALAGNJMGB8zRb2PxNzuLy3JyqpZXJOmYEFNehAPvrP4d2cv3PGbcSTAaVOmh0I8qzOJulu9ct5Qyq0CTmAIAmPfOtUbvZCpLuXMTYY2sqA5jA0+evpUnA8QLXgL5mJ218IjUyfdWhw+xcuWhcVSVzFRAPIKZ9PFv5GsfFWGV2uMrFQDtpmJ0toI1ImSY1gHypVvsNVbhV3qgSSAOp0FCXGePC5ntwAslQdZ00n5VkftC7KsWJynQHUAjyNbJ7KYi4n1jPaysve6s2aCM22Xf31SOOnuTcrWxqpiPCqzqxJjXZVgfcaj4A/iv/8A7P8AtFRWrDlkOXQLoeszpH9U+6lwu2wa7oNXBGo+yPOlQWa16/yqldvTXLhjfeq2amAB9qraGqg3NWENVYqLOIvsygMZCiF20H6FUxU7HQ1AKQcJMB2we3hzYZA3ga2jzBUEQAy/xR7qHAKLcDcJGFK38ilVTu+79trWtwAkeKRAkTJ01OlC+MI7x42ztGkaZjGh29KETHp/0a3f+jjpccfGG/GlWf8ARpeixdETF2fii/lSqUuRkWWtjpQL2iP79vID8aOWY0A8cab7+77qOPkVlIVqWMUq4coTqzgx/KInXblWUK2OGWFZdVkyPPSPSqsBujBYjFWwtvKotNkDMz5tbQ3CggeF+XnRLwjB4m1atpktHKAJ71lnedO60k1V7DMvcXGbQG63yCj/ALaJL9xEhiDM5R8envruh0uF405ffc4J9TkjNpFLvcSI/drz/vjv1P7qvNuJcGxAxJtyodw17RiRlZ20JyjWZ5V6hi3UFcx1nw6neQOXrQnjWH7TWf8A7Yf/ACE/jT/CYYuorulyBdTklyR8O4dikVfApyrlMXSM2hH2DG+1SPwi+VCmwsZp/tyDtGv7uNuYFFVoiBrzFTX2XSrL/jcD33/UHx2X2/Q8k4r2bv25d8kFyIB2LE0dcLvIcGiBwzLbFoqC0ZwnsHYV3tHBW3ESb6DXbc7+VYzcTa0jOLS+2QR7HiVVksF8p18q83rYLHkUInd0t5YObH4K/h7KqmJud3e5plc6SSIZRBH/ADWctliWZEUoSAGmJ1KzrrOvyrNxOOe4zvoA7ar7UaRpmG29EXDMMqWg3tMFJynTRrh1EDr06VyO47stzwZ97Mo8ShZ2gz6z8Yqqz1qcbtBfCAfCxltIlgGyiOkjQ9aw2eKeO6sWSpmC3tH1P31KlRtufU/fUlurMnElOxqGpyNDVekKFy5bv3MjEO3hy2z/AC2gdFjplb4HnNRYw3C7G7mz6ZswhthEg+UUa8EuE2bcMA3dIJyiRFxrYGZTmjUxEGSddaFu0CkXRIiUQiVKkiIkqzM0mCfEZ60sXbozCn6NAWF9AygyjakrM5hoR6ClQ92Y4qLDOWmGA2EnSfPzpVHJH5ikZUgvPOgHip/fP6/gKPLjQPdQBj2m4586fGTZAKM+y/C7jIXVwNSsQZ2FBlHvY/HlA3/UPbkxuoHkQYJU+dbM3p2Ghya3D+D3bVs21uoUzF4ewzakzuLorQe1imibtgwcwnDuYPX+3p1jtFiEBCXcQynVmFtHkxHtFegFJeNT47t1ucIwS0xOn8QgH30q6vqIraX8/QD6fFJ24kN/CYlypa7YlTK/uLgg9dL9Z17s3fa/35xFvNkyR3TARM7d4da08Rxe4zBsM7rHtEKLinymCDt5Vyzxe+AQ14kzJIthI9YIFH4zqH/2/b/QPhsS4RGnDcT/AItn/wBJ/wDfT24biT/e2f8A03/301+M5IBBcDXM9825P+VEg0x+KXrgJtNcSdf3R70aAgZmyjKNdgPOnXWdV/6/H+BfhsPgbc4DecpnvW8quHOW20nKZjV61MTwwMrqGILjU5AfEAAGiddtvOqPCv2ldDLbvPcBJBc+FUI0IBI1I2IUGI1irn7G4raEtda4ByFwz7wyLm5c56UZ4OpzfPLcaEseP5VsZ13sfYKwoytmnMA0ctAC/wCp0itDBcHW2QQWZsuTVRsCxmBz8VZNu7jDcLjE3CZIKZiApjVWUgQR6TTcdj8Qkfv7rE8g6Lz/AJlmuaandNlY12LvEOzNu4ILXB4s5hQNcqr02hRVFew1o/xXz6Bf9tLDXbrHMq4gvrD5w5Uc5YyqjflUy4q+DDtimB0P7yxEcx7I5UqlNbJhaj4KqfRxYJMfWSegy/7K5e+j2yCFAvhumZZ+BWtOzj2ytZtWRbB1a4LihhrqQQQfuqvc4ucptsUkHW42JKu/nKHxAVteTybTHwDfaXs0uHyhQ2YzIZlJ0IE6R12oLoi46UzBlaZmTnd5MjUs2pNDprpxXW5OZqYPhN26gK3VymfDmuMRkIkZFU7G4D/VVTiOCay+ViCSA0jNs22jAEH1FbXBOJW1tBHf2c5KkKBDFYVTqXaUnb+PXaqHaK6j3FZGVhkiF1gAnLJ6kcuVOm7EKGFUloAknlSruB/tF9/3GlSzdMaKDp30PpQLij42/wAx++jS4RlOvKgm6fEfU/fQxgY0UadnbtkWmDOytmJgMQWEDYA6negwUXcDSLc95l1OxWdvWRQzcDQ5NXDpcZgVxFxvcQV6HKpg66Gal7i6JF243l4Xbf8Am0HwqIEvAFzUbEsC224XnSW46ypxGkaqwAn5iucpZesiPELzGBOUr4vQdfvqUYu5GjXR5i2I+Lbms60bpPs2/Xu0H6NWmsXD45ZegQKYA3jNtWNY9jmOZ7rKTsTZtgkf1RVzAYcYi6lnuyATJYDIcijxaBvabRZG2cGqNnFRsXYnck5T75XKBWv2Vx5+uIHYao6jxqxLApcOi6ezbaurpYKWRJk8jqLaPQ8JhwuW1bVZgBQBCqo0Gg5bwOnWanx9trRE+IEakALrzAjf31Lws5XzEEgqE01gqFUz8J9DWnxSwXtlQJMiPjv8Jr1pZNM0nx/PwcSWx5p2xwWSL6AEyFfQwytAUwCJIJtgeVyP4RQpeu5pZbdxT0cqqn0jNFGn0hYlUwxXNu1tFI3JD2ySPdZuH3CgNldjKXQrbEAlgPTcj1rh6+K1J+UdWBvSS3C8ZcwIP8PeeEHlpkE1XTBw2a53fpJbTnIzACn2zcX2rneRqZf5gSNa7c4ivLMs8zcQR55Qda80uT3uHW3g9w4AGhXQGNeR38/nWTjMSo8DJcAgDKxWI/pnT3ipb9ouCTcczvBugfBCRUK4Po+gj2hcOp5Q24rBMDjeJzBQAoAnYEdKwDRL2gB01nU7W2Qbcid6G2rpxcEp8mlwvgxvKWBYABj/AGbtMQBlKg5vEQCNxvB5VuJYA2SoLZswJ9llIhipBVgDuKucJxdu2hDHxMWBkMyhcgClkGjS3v0rvH8Zau5MhlhmkwQIJBG6jWZ2FPbsUx1MGlVjAAd4siRrI9xpVm6MlYX34yNQXEnTWi3GXPAaFbZYiMxgcpipw4N3Gga0RcLUhZyTM/wE7ecgVgF20BM0R8MvMEAVxOpgjNz5Ctkew0TTw6A7o/qIUj4EGpxdjTu3Uc82Vp97fnVDO5Il1BI0i2wI2kRXTfdRreMf5bsfEGBURi46tspIX+VFP3fnUlvHLpm7zwiM2Rpnkci6e+quGuW3Mm4CY55on+o/jVq5iVQQNuot5xvrsPxomLPet7XeM6xorLkkHz3rPxmJuAi5bVlKMHVo9krtDU1bzOwH7oDfw+Bj7iRrTsQRHst/UzR8RNUxy0ysElaPQOzH0j2CALrizc2afYbzVtRHk0RtJrZ4r9IWFVD/ANQjfyoQxPQeCfmQK8Ru2JJISB6N+IBplrBPvoPIkAn3TXqLqIPeS3OV42EPFOMvjb6sQyIp/doIkdSZMEmB5AAD1fetWVBNxrgkbOFg9PZ5TWPanYKPPn8fhVpCF1JUDaSB8JY71wdTNzlbOjGqVIu28OrDMjaqPsgLtqBnPzpveE722HvUQOpEEzVHE3LPMFucgrE9cs6a018WTJy3I3M3lWANz4TPT41yNFS+1xm0QXDGk+MD02FZ9+QDPMxBd4HoefvqviscsTLRE5VxDa+un/NP/agyDKonTQuwUAbjTU+sc61MFmdxpmIWRAk7bHSsFhW3xTEFwDlQaz4cx+MisY10Y+CchkUortKqCnUMGlXJpUaMb2MxIyETVDD4dMqk3Fltxr4PXrRRiuGK1sga6bDc+nSsJuC3V/hgdTH51zpqqKR2e5lXAM2hkbT1131q/Zx2X2RHLlPxog4b2dtgBrohpkLPIfajqeVajYHCj+5Q/wBNZ5Im0sDjxCdwad+0ugPxovOGwo2sof6R+VR3cPhv8FBOnsil1x8G0sF/2w0RrHuph4sfOipcPY/wbcf5B+I1pC3anS1bn/Iu9Nrj4NpfkETxL1ikvE42n40ZAWx/d2x/Sn5VKq2/8NPci/lTKS8A0vyBf7WP83+qo2xynUrr1n/ijvuLc6W7f+lfyrhsDXwqvTKB+Iqil7CuL8gMOJRsPnXH4ix3UH1oxe2ZglfLzj3U6ycsyMx6xrQlJeAqL8gSMS3JB7ga6LtzlbP+lqNu/iNCP10qO5iD7qi8nsNo9wNLXv8ADb/S1IC+dAjf6TReb+b2gPLWktzWI5Tpt8aX1PYOj3BIYPEH+Bj7hVVsFdkju3nplY/cKOVuAGOfr+VJcQ86tHlRWV+DaAIHDLx/ubn+hvyrv7Jv/wCC/wAIo579jsT8qrP3nM1vWYNCA0cKv/4TfL86VEl+yfMUqb1mDQhW3II1/XrUmFxDMJJ5kUqVTCie8dCecH7qeo0HpNKlQGHW3OXfr99cLGlSomJAxj311WNKlRRhz7e+nAc67Sp4gHZtQOVPdjp76VKrCEbsfupucyfSlSpJDIga4SoM8/SmOPxpUqkxkMU605dZpUqRhFzqJ9a7SrAGbEU+lSrGGc6VKlWAf//Z"
        },
        {
          url:
            "https://www.openrice.com/userphoto/Article/0/2I/000HVX0A0FF7F0D92570EAj.jpg"
        },
        {
          url:
            "https://www.jump-hr.com/wp-content/uploads/2016/11/gathering21.png"
        },
        {
          url:
            "https://travel.ulifestyle.com.hk/cms/news_photo/w600/20190114162957_7_34.jpg"
        },
        {
          url:
            "data:image/jpeg;base64,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"
        },
        {
          url:
            "https://images.53.com.cn/project/201834/49b21eb94b8a4dae8e8e5be8f62379b9.jpg"
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
          "https://eastweek.my-magazine.me/tmp_images/article_images/80830/618bebc50c3e2fb2b5a65d6d5b87d3a39a21d73e.jpg"
      },
      id: 1
    },
    {
      carouselImg: {
        url:
          "https://www.sme360.mo/uploads/attachment/2018-08/dd8331d80dcd1dc9459fc1e65bfa21bc.png"
      },
      id: 2
    },
    {
      carouselImg: {
        url:
          "https://media.bastillepost.com/wp-content/uploads/hongkong/2018/09/20182009_MO_%E5%8C%AF%E6%A5%AD-2.png"
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
