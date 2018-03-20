import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      name: 'Cher Scarlett',
      footerLinks: [
        {
          id: 'instagram',
          url: 'instagram.com/codehitchhiker'
        },
        {
          id: 'twitter',
          url: 'twitter.com/codehitchhiker'
        },
        {
          id: 'twitch',
          url: 'twitch.tv/cherp'
        },
        {
          id: 'youtube',
          url: 'youtube.com/c/cherpx'
        },
        {
          id: 'linkedin',
          url: 'linkedin.com/in/cherscarlett'
        },
        {
          id: 'github',
          url: 'github.com/cherscarlett'
        },
        {
          id: 'patreon',
          url: 'patreon.com/cherp'
        }
      ],
      animals: [
        {
          name: 'Madeline',
          nickname: 'Maddy',
          class: 'Mammal',
          type: 'Dog',
          breed: 'Dalmatian',
          scientific: 'Canis lupus familiaris',
          birthday: '2017-06-09T00:00:00',
          sex: 'female',
          photo: 'https://pbs.twimg.com/media/DTtJf2tU8AEM8jK.jpg'
        },
        {
          name: 'Isabelle',
          nickname: 'Izzie',
          class: 'Mammal',
          type: 'Dog',
          breed: 'Beagle Mix',
          scientific: 'Canis lupus familiaris',
          birthday: '2017-12-01T00:00:00',
          sex: 'female',
          photo: 'https://pbs.twimg.com/media/DW-lDPaWsAATEkb.jpg'
        },
        {
          name: 'Justice',
          class: 'Mammal',
          type: 'Rodent',
          breed: 'Mongolian Gerbil',
          scientific: 'Meriones unguiculatus',
          birthday: '2016-08-15T00:00:00',
          sex: 'female'
        },
        {
          name: 'Destiny',
          class: 'Mammal',
          type: 'Rodent',
          species: 'Mongolian Gerbil',
          scientific: 'Meriones unguiculatus',
          birthday: '2016-08-15T00:00:00',
          sex: 'female'
        },
        {
          name: 'Sam',
          class: 'Reptile',
          type: 'Turtle',
          species: 'Yellow-bellied Slider',
          scientific: 'Trachemys scripta scripta',
          birthday: '2016-07-01T00:00:00',
          sex: 'male',
          photo:
            'https://c1.staticflickr.com/5/4723/26574078328_db3ff5b6cb_b.jpg'
        },
        {
          name: 'Camille',
          class: 'Reptile',
          type: 'Gecko',
          species: 'Chinese Cave Gecko',
          scientific: 'Goniurosaurus hainanensis',
          birthday: '2018-01-01T00:00:00',
          sex: 'female',
          photo: 'https://pbs.twimg.com/media/DXAyQAZXUAAbk-u.jpg'
        },
        {
          name: 'Lirath',
          class: 'Fish',
          type: 'Guppy',
          species: 'Black Phantom Delta Guppy',
          scientific: 'Oecilia reticulata',
          birthday: '2017-12-01T00:00:00',
          sex: 'male'
        },
        {
          name: 'Mikasa',
          class: 'Fish',
          type: 'Betta',
          species: 'Koi Veiltail Betta',
          scientific: 'Betta splendens',
          birthday: '2017-11-01T00:00:00',
          sex: 'female'
        },
        {
          name: 'Yeager',
          class: 'Fish',
          type: 'Betta',
          species: 'Marble Doubletail Betta',
          scientific: 'Betta splendens',
          birthday: '2017-10-01T00:00:00',
          sex: 'male'
        }
      ],
      content: {
        photography: {
          photos: {
            type: 'Photo',
            items: [
              {
                src:
                  'https://c1.staticflickr.com/5/4753/40124143662_b7718e7474_o.jpg',
                url: 'https://www.flickr.com/photos/supermomma/40124143662',
                publisher: 'flickr',
                date: '2018-02-08T00:00:00',
                thumbnail:
                  'https://c1.staticflickr.com/5/4753/40124143662_49ecd7eee7_n.jpg'
              },
              {
                src:
                  'https://c1.staticflickr.com/5/4665/28376391349_fbff6317e8_o.jpg',
                url: 'https://www.flickr.com/photos/supermomma/28376391349',
                publisher: 'flickr',
                date: '2018-02-08T00:00:00',
                thumbnail:
                  'https://c1.staticflickr.com/5/4665/28376391349_a673103534_n.jpg'
              },
              {
                src:
                  'https://c1.staticflickr.com/5/4605/40124144462_d6c47bcb6c_o.jpg',
                url: 'https://www.flickr.com/photos/supermomma/40124144462',
                publisher: 'flickr',
                date: '2018-02-08T00:00:00',
                thumbnail:
                  'https://c1.staticflickr.com/5/4605/40124144462_22e584f7cb_n.jpg'
              },
              {
                src:
                  'https://c2.staticflickr.com/4/3663/3612005660_208a1cc480_o.jpg',
                url: 'https://www.flickr.com/photos/supermomma/3612005660',
                publisher: 'flickr',
                date: '2009-06-05T00:00:00',
                thumbnail:
                  'https://c2.staticflickr.com/4/3663/3612005660_e6cda1f826_n.jpg'
              },
              {
                src:
                  'https://c1.staticflickr.com/3/2463/3663364986_b35f3826f1_o.jpg',
                url: 'https://www.flickr.com/photos/supermomma/3663364986',
                publisher: 'flickr',
                date: '2009-06-25T00:00:00',
                thumbnail:
                  'https://c1.staticflickr.com/3/2463/3663364986_09180875c8_n.jpg'
              },
              {
                src:
                  'https://c1.staticflickr.com/3/2429/3660773863_0956fd80ef_o.jpg',
                url: 'https://www.flickr.com/photos/supermomma/3660773863',
                publisher: 'flickr',
                date: '2009-06-25T00:00:00',
                thumbnail:
                  'https://c1.staticflickr.com/3/2429/3660773863_c28899ed74_n.jpg'
              },
              {
                src:
                  'https://c2.staticflickr.com/4/3106/2684854530_9daf68f7f1_o.jpg',
                url: 'https://www.flickr.com/photos/supermomma/2684854530',
                publisher: 'flickr',
                date: '2008-07-19T00:00:00',
                thumbnail:
                  'https://c2.staticflickr.com/4/3106/2684854530_97e8a0df96_n.jpg'
              },
              {
                src:
                  'https://c2.staticflickr.com/4/3143/2640279156_22eeb2833b_o.jpg',
                url: 'https://www.flickr.com/photos/supermomma/2640279156',
                publisher: 'flickr',
                date: '2008-07-04T00:00:00',
                thumbnail:
                  'https://c2.staticflickr.com/4/3143/2640279156_3a13a1613e_n.jpg'
              },
              {
                src:
                  'https://c2.staticflickr.com/4/3235/2619489715_a59b071f2f_o.jpg',
                url: 'https://www.flickr.com/photos/supermomma/2619489715',
                publisher: 'flickr',
                date: '2003-06-01T00:00:00',
                thumbnail:
                  'https://c2.staticflickr.com/4/3235/2619489715_4a4cc72fbc_n.jpg'
              },
              {
                src:
                  'https://c2.staticflickr.com/4/3046/2609982004_15c844ce2e_o.jpg',
                url: 'https://www.flickr.com/photos/supermomma/2609982004',
                publisher: 'flickr',
                date: '2008-06-24T00:00:00',
                thumbnail:
                  'https://c2.staticflickr.com/4/3046/2609982004_67e8450681_n.jpg'
              }
            ]
          }
        },
        tech: {
          articles: {
            type: 'Article',
            items: [
              {
                title: 'Adapt or die (philosophically)',
                date: '2017-08-11T00:00:00',
                url:
                  'https://medium.com/@cherp/a-femgineers-womanifesto-67f6278fdb38',
                publication: 'Medium'
              },
              {
                title: 'Buttons and the hand cursor',
                date: '2018-02-24T00:00:00',
                url:
                  'https://medium.com/@cherp/the-spec-simply-says-that-the-pointer-cursor-is-for-links-577bb8f831d7',
                publication: 'Medium'
              },
              {
                title: 'Const is fucking useful',
                date: '2018-03-20T00:00:00',
                url:
                  'https://medium.com/@cherp/const-is-fucking-useful-8f2b4e6652ea',
                publication: 'Medium'
              }
            ]
          }
        },
        mentalHealth: {
          articles: {
            type: 'Article',
            items: [
              {
                title: 'I tried to kill myself.',
                date: '2018-02-05T00:00:00',
                url:
                  'https://medium.com/@cherp/i-tried-to-kill-myself-3709f9a9bd88',
                publication: 'Medium'
              }
            ]
          }
        },
        gaming: {
          articles: {
            type: 'Article',
            items: [
              {
                title: 'Five things we learned at PAX East',
                date: '2015-03-17T00:00:00',
                url:
                  'https://www.usatoday.com/story/tech/gaming/2015/03/17/pax-east-best/24839811/',
                publication: 'USA Today'
              },
              {
                title: 'First impressions: "The Elder Scrolls Online"',
                date: '2014-04-20T00:00:00',
                url:
                  'https://www.usatoday.com/story/tech/gaming/2014/04/20/elder-scrolls-online-impressions/7864041/',
                publication: 'USA Today'
              }
            ]
          },
          videos: {
            type: 'Video',
            items: [
              {
                title: 'Lush chases Reghar across the map',
                date: '2015-04-14T00:00:00',
                platform: 'twitch',
                url: 'https://www.twitch.tv/videos/40623703',
                videoId: '40623703'
              },
              {
                title: 'The Saddest Arena Loss',
                date: '2015-03-26T00:00:00',
                platform: 'twitch',
                url: 'https://www.twitch.tv/videos/44590912',
                videoId: '44590912'
              },
              {
                title:
                  'Kinda Funny Games Pax East Pass Sub Giveaway Announcement 2015',
                date: '2015-02-24T00:00:00',
                platform: 'youtube',
                url: 'https://www.youtube.com/watch?v=YvajcYy_fu0',
                videoId: 'YvajcYy_fu0'
              }
            ]
          }
        },
        animals: {
          photos: {
            type: 'Photo',
            items: [
              {
                src:
                  'https://scontent-sjc3-1.cdninstagram.com/vp/b441cedc73c9b8afeb60096de2fa64e6/5B4E51E4/t51.2885-15/e35/27891078_688545314868583_8749231750732840960_n.jpg',
                url: 'https://www.instagram.com/p/Bfd53FVBJ0-/',
                publisher: 'instagram',
                date: '2018-02-21T00:00:00',
                thumbnail:
                  'https://scontent-atl3-1.cdninstagram.com/vp/491749f98833bab1088db8f80644ca4d/5B4CBB85/t51.2885-15/s640x640/sh0.08/e35/27891078_688545314868583_8749231750732840960_n.jpg'
              },
              {
                thumbnail:
                  'https://c1.staticflickr.com/5/4753/26573994688_e19a90020f_n.jpg',
                src:
                  'https://c1.staticflickr.com/5/4753/26573994688_e19a90020f_b.jpg',
                url: 'https://www.flickr.com/photos/supermomma/26573994688',
                publisher: 'flickr',
                date: '2018-02-17T00:00:00'
              },
              {
                src:
                  'https://scontent-atl3-1.cdninstagram.com/vp/060ca6ffca7fa23ed1891b22bb47721e/5B07C8F7/t51.2885-15/e35/25010024_134809597210349_189306632100904960_n.jpg',
                url: 'https://www.instagram.com/p/BcxqiqxHz_X/',
                publisher: 'instagram',
                date: '2017-12-16T00:00:00',
                thumbnail:
                  'https://scontent-atl3-1.cdninstagram.com/vp/08404b964b64c6d52b39a10d84c67cc3/5B1B6A62/t51.2885-15/s640x640/sh0.08/e35/25010024_134809597210349_189306632100904960_n.jpg'
              },
              {
                thumbnail:
                  'https://c1.staticflickr.com/5/4619/25573966317_b6a86c2669_n.jpg',
                src:
                  'https://c1.staticflickr.com/5/4619/25573966317_b6a86c2669_b.jpg',
                url: 'https://www.flickr.com/photos/supermomma/25573966317',
                publisher: 'flickr',
                date: '2018-02-23T00:00:00'
              },
              {
                thumbnail:
                  'https://c1.staticflickr.com/5/4603/39548743105_7ddf4383ac_n.jpg',
                src:
                  'https://c1.staticflickr.com/5/4603/39548743105_7ddf4383ac_b.jpg',
                url: 'https://www.flickr.com/photos/supermomma/39548743105',
                publisher: 'flickr',
                date: '2018-02-23T00:00:00'
              },
              {
                thumbnail:
                  'https://c1.staticflickr.com/5/4723/26574078328_db3ff5b6cb_n.jpg',
                src:
                  'https://c1.staticflickr.com/5/4723/26574078328_db3ff5b6cb_b.jpg',
                url: 'https://www.flickr.com/photos/supermomma/26574078328',
                publisher: 'flickr',
                date: '2018-02-17T00:00:00'
              },
              {
                thumbnail:
                  'https://c1.staticflickr.com/5/4630/39548741335_c6fca340c9_n.jpg',
                src:
                  'https://c1.staticflickr.com/5/4630/39548741335_c6fca340c9_b.jpg',
                url: 'https://www.flickr.com/photos/supermomma/39548741335',
                publisher: 'flickr',
                date: '2018-02-23T00:00:00'
              },
              {
                thumbnail:
                  'https://c1.staticflickr.com/5/4765/39548740215_f1018c5493_n.jpg',
                src:
                  'https://c1.staticflickr.com/5/4765/39548740215_f1018c5493_b.jpg',
                url: 'https://www.flickr.com/photos/supermomma/39548740215',
                publisher: 'flickr',
                date: '2018-02-23T00:00:00'
              },
              {
                thumbnail:
                  'https://c1.staticflickr.com/5/4705/39548739355_ba411c742e_n.jpg',
                src:
                  'https://c1.staticflickr.com/5/4705/39548739355_ba411c742e_b.jpg',
                url: 'https://www.flickr.com/photos/supermomma/39548739355',
                publisher: 'flickr',
                date: '2018-02-23T00:00:00'
              },
              {
                src:
                  'https://scontent-atl3-1.cdninstagram.com/vp/de752d9837e46e20eb6f28bcfe688a79/5B2E6E44/t51.2885-15/e35/21981118_256314884891195_8583274381919125504_n.jpg',
                url: 'https://www.instagram.com/p/BZZLyQEnh1G/',
                publisher: 'instagram',
                date: '2017-09-23T00:00:00',
                thumbnail:
                  'https://scontent-atl3-1.cdninstagram.com/vp/8ebc6e2fb8016279644c0d9a2547257b/5B2CA025/t51.2885-15/s640x640/sh0.08/e35/21981118_256314884891195_8583274381919125504_n.jpg'
              },
              {
                src:
                  'https://scontent-atl3-1.cdninstagram.com/vp/fe86d43540d00a83749b9e42f12ff7ba/5B115B9A/t51.2885-15/e35/20969234_339534169838987_1068673285849350144_n.jpg',
                url: 'https://www.instagram.com/p/BYCGCdHgQam/',
                publisher: 'instagram',
                date: '2017-08-20T00:00:00',
                thumbnail:
                  'https://scontent-atl3-1.cdninstagram.com/vp/ac46c634ee09fd99542f7b20ed1a1455/5B176AFB/t51.2885-15/s640x640/sh0.08/e35/20969234_339534169838987_1068673285849350144_n.jpg'
              },
              {
                thumbnail:
                  'https://c1.staticflickr.com/5/4677/39770428074_db2525b4a9_n.jpg',
                src:
                  'https://c1.staticflickr.com/5/4677/39770428074_db2525b4a9_b.jpg',
                url: 'https://www.flickr.com/photos/supermomma/39770428074',
                publisher: 'flickr',
                date: '2018-02-26T00:00:00'
              },
              {
                src:
                  'https://scontent-atl3-1.cdninstagram.com/vp/d34800530cd18ced55f9358f1a677d87/5B277C7A/t51.2885-15/e35/27894315_1624223421025592_5061195577639829504_n.jpg',
                url: 'https://www.instagram.com/p/BfoWAZVBh89/',
                publisher: 'instagram',
                date: '2018-02-26T00:00:00',
                thumbnail:
                  'https://scontent-atl3-1.cdninstagram.com/vp/27d2155679d351638beb468112a44b1e/5B164E50/t51.2885-15/s640x640/sh0.08/e35/27894315_1624223421025592_5061195577639829504_n.jpg'
              },
              {
                src: 'https://pbs.twimg.com/media/DTtJf2tU8AEM8jK.jpg',
                url:
                  'https://twitter.com/codehitchhiker/status/953436561575641088',
                publisher: 'twitter',
                date: '2018-01-16T00:00:00',
                thumbnail: 'https://pbs.twimg.com/media/DTtJf2tU8AEM8jK.jpg'
              },
              {
                src: 'https://pbs.twimg.com/media/DTtJUUuVMAEBSqt.jpg',
                url:
                  'https://twitter.com/codehitchhiker/status/953436364539875328',
                publisher: 'twitter',
                date: '2018-01-16T00:00:00',
                thumbnail: 'https://pbs.twimg.com/media/DTtJUUuVMAEBSqt.jpg'
              },
              {
                src: 'https://pbs.twimg.com/media/DTtIijqVQAA7JWd.jpg',
                url:
                  'https://twitter.com/codehitchhiker/status/953435511544311808',
                publisher: 'twitter',
                date: '2018-01-16T00:00:00',
                thumbnail: 'https://pbs.twimg.com/media/DTtIijqVQAA7JWd.jpg'
              },
              {
                src: 'https://pbs.twimg.com/media/DW6QJj4W0AAIcSz.jpg',
                url:
                  'https://twitter.com/codehitchhiker/status/967869479807045634',
                publisher: 'twitter',
                date: '2018-02-26T00:00:00',
                thumbnail: 'https://pbs.twimg.com/media/DW6QJj4W0AAIcSz.jpg'
              },
              {
                src: 'https://pbs.twimg.com/media/DXAyQAZXUAAbk-u.jpg',
                url:
                  'https://twitter.com/codehitchhiker/status/968329181737218050',
                publisher: 'twitter',
                date: '2018-02-26T00:00:00',
                thumbnail: 'https://pbs.twimg.com/media/DXAyQAZXUAAbk-u.jpg'
              },
              {
                src: 'https://pbs.twimg.com/media/DW-lDPaWsAATEkb.jpg',
                url:
                  'https://twitter.com/codehitchhiker/status/968173940995747840',
                publisher: 'twitter',
                date: '2018-02-26T00:00:00',
                thumbnail: 'https://pbs.twimg.com/media/DW-lDPaWsAATEkb.jpg'
              },
              {
                src:
                  'https://scontent-atl3-1.cdninstagram.com/vp/bbd116b79fb8c92a8f7c210106c0cd44/5B16AC37/t51.2885-15/e35/14714460_557661274422538_8258537638449905664_n.jpg',
                url: 'https://www.instagram.com/p/BLxhDBKAaOc/',
                publisher: 'instagram',
                date: '2016-10-20T00:00:00',
                thumbnail:
                  'https://scontent-atl3-1.cdninstagram.com/vp/f6a10521c3b85cf23ebb07cff8b8cb94/5B2C1D56/t51.2885-15/s640x640/sh0.08/e35/14714460_557661274422538_8258537638449905664_n.jpg'
              }
            ]
          },
          videos: {
            type: 'Video',
            items: [
              {
                title: 'Maddy and Izzie',
                platform: 'instagram',
                url: 'https://www.instagram.com/p/BfREdf5BUew/',
                videoId: 'BfREdf5BUew',
                date: '2018-02-16T00:00:00',
                thumbnail:
                  'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e15/27581034_222019058363968_5509044874294329344_n.jpg'
              },
              {
                title: 'Sam',
                platform: 'instagram',
                url: 'https://www.instagram.com/p/BfREdf5BUew/',
                videoId: 'BfKOGQBBZUv',
                date: '2018-02-13T00:00:00',
                thumbnail:
                  'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e15/27578840_815643308626545_1697148712037384192_n.jpg'
              },
              {
                title: 'Camille',
                platform: 'instagram',
                url: 'https://www.instagram.com/p/BfFCZp9hJ6_/',
                videoId: 'BfFCZp9hJ6_',
                date: '2018-02-11T00:00:00',
                thumbnail:
                  'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e15/27579822_1990233574634161_7461702066944081920_n.jpg'
              },
              {
                title: 'Camille',
                platform: 'instagram',
                url: 'https://www.instagram.com/p/Be3pi3Nh84q/',
                videoId: 'Be3pi3Nh84q',
                date: '2018-02-06T00:00:00',
                thumbnail:
                  'https://scontent-atl3-1.cdninstagram.com/t51.2885-15/e15/27893188_535090023516819_6925944019625181184_n.jpg'
              },
              {
                title: 'Maddy',
                platform: 'twitter',
                url:
                  'https://twitter.com/codehitchhiker/status/956011471606984704',
                date: '2018-01-23T00:00:00',
                videoId: 'mKQEyHJxm6',
                thumbnail:
                  'https://pbs.twimg.com/ext_tw_video_thumb/956011436542640128/pu/img/EY9dSgNN6683tEwK.jpg'
              },
              {
                title: 'A Little Guppy World',
                platform: 'youtube',
                url: 'https://www.youtube.com/watch?v=xqgVmxwMltc',
                date: '2018-03-04T00:00:00',
                videoId: 'xqgVmxwMltc'
              }
            ]
          }
        }
      }
    },
    mutations: {}
  })
}

export default createStore
