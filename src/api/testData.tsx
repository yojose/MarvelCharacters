import {ResponseAPI} from "../types/apiTypes"

export const testDataCharactaersList:ResponseAPI={
  code: 200,
  status: "Ok",
  copyright: "© 2024 MARVEL",
  attributionText: "Data provided by Marvel. © 2024 MARVEL",
  attributionHTML: "<a href=\"http://marvel.com\">Data provided by Marvel. © 2024 MARVEL</a>",
  etag: "719dbd9745778aeb9c0d086f2f0e570d5284a5c0",
  data: {
      "offset": 0,
      "limit": 50,
      "total": 1564,
      "count": 50,
      "results": [
          {
              "id": 1011334,
              "name": "3-D Man",
              "description": "Using his mighty ability to control magnetic fields, the one called Magneto fights to help mutants replace humans as the world's dominant species.",
              "modified": "2014-04-29T14:18:17-0400",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011334",
              "comics": {
                  "available": 12,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21366",
                          "name": "Avengers: The Initiative (2007) #14"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/24571",
                          "name": "Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21546",
                          "name": "Avengers: The Initiative (2007) #15"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21741",
                          "name": "Avengers: The Initiative (2007) #16"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21975",
                          "name": "Avengers: The Initiative (2007) #17"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/22299",
                          "name": "Avengers: The Initiative (2007) #18"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/22300",
                          "name": "Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/22506",
                          "name": "Avengers: The Initiative (2007) #19"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8500",
                          "name": "Deadpool (1997) #44"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/10223",
                          "name": "Marvel Premiere (1972) #35"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/10224",
                          "name": "Marvel Premiere (1972) #36"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/10225",
                          "name": "Marvel Premiere (1972) #37"
                      }
                  ],
                  "returned": 12
              },
              "series": {
                  "available": 3,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
                          "name": "Avengers: The Initiative (2007 - 2010)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2005",
                          "name": "Deadpool (1997 - 2002)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2045",
                          "name": "Marvel Premiere (1972 - 1981)"
                      }
                  ],
                  "returned": 3
              },
              "stories": {
                  "available": 21,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/19947",
                          "name": "Cover #19947",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/19948",
                          "name": "The 3-D Man!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/19949",
                          "name": "Cover #19949",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/19950",
                          "name": "The Devil's Music!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/19951",
                          "name": "Cover #19951",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/19952",
                          "name": "Code-Name:  The Cold Warrior!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47184",
                          "name": "AVENGERS: THE INITIATIVE (2007) #14",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47185",
                          "name": "Avengers: The Initiative (2007) #14 - Int",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47498",
                          "name": "AVENGERS: THE INITIATIVE (2007) #15",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47499",
                          "name": "Avengers: The Initiative (2007) #15 - Int",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47792",
                          "name": "AVENGERS: THE INITIATIVE (2007) #16",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47793",
                          "name": "Avengers: The Initiative (2007) #16 - Int",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/48361",
                          "name": "AVENGERS: THE INITIATIVE (2007) #17",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/48362",
                          "name": "Avengers: The Initiative (2007) #17 - Int",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/49103",
                          "name": "AVENGERS: THE INITIATIVE (2007) #18",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/49104",
                          "name": "Avengers: The Initiative (2007) #18 - Int",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/49106",
                          "name": "Avengers: The Initiative (2007) #18, Zombie Variant - Int",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/49888",
                          "name": "AVENGERS: THE INITIATIVE (2007) #19",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/49889",
                          "name": "Avengers: The Initiative (2007) #19 - Int",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/54371",
                          "name": "Avengers: The Initiative (2007) #14, Spotlight Variant - Int",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011334/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                          "name": "Secret Invasion"
                      }
                  ],
                  "returned": 1
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/3-D_Man_(Chandler)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011334/3-d_man?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1017100,
              "name": "A-Bomb (HAS)",
              "description": "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
              "modified": "2013-09-18T15:54:04-0400",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017100",
              "comics": {
                  "available": 4,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/47176",
                          "name": "FREE COMIC BOOK DAY 2013 1 (2013) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/40632",
                          "name": "Hulk (2008) #53"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/40630",
                          "name": "Hulk (2008) #54"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/40628",
                          "name": "Hulk (2008) #55"
                      }
                  ],
                  "returned": 4
              },
              "series": {
                  "available": 2,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/17765",
                          "name": "FREE COMIC BOOK DAY 2013 1 (2013)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3374",
                          "name": "Hulk (2008 - 2012)"
                      }
                  ],
                  "returned": 2
              },
              "stories": {
                  "available": 7,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/92078",
                          "name": "Hulk (2008) #55",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/92079",
                          "name": "Interior #92079",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/92082",
                          "name": "Hulk (2008) #54",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/92083",
                          "name": "Interior #92083",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/92086",
                          "name": "Hulk (2008) #53",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/92087",
                          "name": "Interior #92087",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/105929",
                          "name": "cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1",
                          "type": "cover"
                      }
                  ],
                  "returned": 7
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017100/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1009144,
              "name": "A.I.M.",
              "description": "AIM is a terrorist organization bent on destroying the world.",
              "modified": "2013-10-17T14:41:30-0400",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/20/52602f21f29ec",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009144",
              "comics": {
                  "available": 53,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009144/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/36763",
                          "name": "Ant-Man & the Wasp (2010) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17553",
                          "name": "Avengers (1998) #67"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/7340",
                          "name": "Avengers (1963) #87"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/4214",
                          "name": "Avengers and Power Pack Assemble! (2006) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/63217",
                          "name": "Avengers and Power Pack (2017) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/63218",
                          "name": "Avengers and Power Pack (2017) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/63219",
                          "name": "Avengers and Power Pack (2017) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/63220",
                          "name": "Avengers and Power Pack (2017) #6"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/64790",
                          "name": "AVENGERS BY BRIAN MICHAEL BENDIS: THE COMPLETE COLLECTION VOL. 2 TPB (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/103371",
                          "name": "Avengers Unlimited Infinity Comic (2022) #17"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1170",
                          "name": "Avengers Vol. 2: Red Zone (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1214",
                          "name": "Avengers Vol. II: Red Zone (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12787",
                          "name": "Captain America (1998) #28"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/7513",
                          "name": "Captain America (1968) #132"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/7514",
                          "name": "Captain America (1968) #133"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/65466",
                          "name": "Captain America by Mark Waid, Ron Garney & Andy Kubert (Hardcover)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20367",
                          "name": "Defenders (1972) #57"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/31068",
                          "name": "Incredible Hulks (2010) #606 (VARIANT)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/46168",
                          "name": "Indestructible Hulk (2012) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/43944",
                          "name": "Iron Man (2012) #1"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 36,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009144/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/13082",
                          "name": "Ant-Man & the Wasp (2010 - 2011)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
                          "name": "Avengers (1998 - 2004)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
                          "name": "Avengers (1963 - 1996)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23123",
                          "name": "Avengers and Power Pack (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1046",
                          "name": "Avengers and Power Pack Assemble! (2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/27689",
                          "name": "AVENGERS BY BRIAN MICHAEL BENDIS: THE COMPLETE COLLECTION VOL. 2 TPB (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/35600",
                          "name": "Avengers Unlimited Infinity Comic (2022 - 2023)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/227",
                          "name": "Avengers Vol. 2: Red Zone (2003)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/271",
                          "name": "Avengers Vol. II: Red Zone (2003)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1997",
                          "name": "Captain America (1998 - 2002)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1996",
                          "name": "Captain America (1968 - 1996)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23810",
                          "name": "Captain America by Mark Waid, Ron Garney & Andy Kubert (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3743",
                          "name": "Defenders (1972 - 1986)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/8842",
                          "name": "Incredible Hulks (2010 - 2011)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/16583",
                          "name": "Indestructible Hulk (2012 - 2014)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2029",
                          "name": "Iron Man (1968 - 1996)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/16593",
                          "name": "Iron Man (2012 - 2014)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23915",
                          "name": "Iron Man Epic Collection: Doom (2018)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/9718",
                          "name": "Marvel Adventures Super Heroes (2010 - 2012)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1506",
                          "name": "MARVEL MASTERWORKS: CAPTAIN AMERICA (2005)"
                      }
                  ],
                  "returned": 20
              },
              "stories": {
                  "available": 57,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009144/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5800",
                          "name": "Avengers and Power Pack Assemble! (2006) #2",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5801",
                          "name": "2 of 4 - 4XLS",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/10253",
                          "name": "When the Unliving Strike",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/10255",
                          "name": "Cover #10255",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/10256",
                          "name": "The Enemy Within!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/10259",
                          "name": "Death Before Dishonor!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/10261",
                          "name": "Cover #10261",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/10262",
                          "name": "The End of A.I.M.!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/11921",
                          "name": "The Red Skull Lives!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/11930",
                          "name": "He Who Holds the Cosmic Cube",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/11936",
                          "name": "The Maddening Mystery of the Inconceivable Adaptoid!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/11981",
                          "name": "If This Be... Modok",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/11984",
                          "name": "A Time to Die -- A Time to Live!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/11995",
                          "name": "At the Mercy of the Maggia",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/15243",
                          "name": "Look Homeward, Avenger",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/17518",
                          "name": "Captain America (1968) #132",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/17519",
                          "name": "The Fearful Secret of Bucky Barnes",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/17520",
                          "name": "Captain America (1968) #133",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/17521",
                          "name": "Madness In the Slums",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28233",
                          "name": "In Sin Airy X",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009144/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/77/aim.?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/A.I.M.?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1009144/aim.?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1010699,
              "name": "Aaron Stack",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010699",
              "comics": {
                  "available": 14,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010699/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/40776",
                          "name": "Dark Avengers (2012) #177"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/40773",
                          "name": "Dark Avengers (2012) #179"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/40774",
                          "name": "Dark Avengers (2012) #180"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/40778",
                          "name": "Dark Avengers (2012) #181"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/40787",
                          "name": "Dark Avengers (2012) #182"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/40786",
                          "name": "Dark Avengers (2012) #183"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/38073",
                          "name": "Hulk (2008) #43"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/11910",
                          "name": "Universe X (2000) #6"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/11911",
                          "name": "Universe X (2000) #7"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/11912",
                          "name": "Universe X (2000) #8"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/11913",
                          "name": "Universe X (2000) #9"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/11903",
                          "name": "Universe X (2000) #10"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/11904",
                          "name": "Universe X (2000) #11"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/11905",
                          "name": "Universe X (2000) #12"
                      }
                  ],
                  "returned": 14
              },
              "series": {
                  "available": 3,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010699/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/789",
                          "name": "Dark Avengers (2012 - 2013)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3374",
                          "name": "Hulk (2008 - 2012)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2085",
                          "name": "Universe X (2000 - 2001)"
                      }
                  ],
                  "returned": 3
              },
              "stories": {
                  "available": 27,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010699/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/25634",
                          "name": "Universe X (2000) #10",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/25635",
                          "name": "Interior #25635",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/25637",
                          "name": "Universe X (2000) #12",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/25638",
                          "name": "Interior #25638",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/25647",
                          "name": "Universe X (2000) #6",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/25648",
                          "name": "Interior #25648",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/25649",
                          "name": "Universe X (2000) #7",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/25650",
                          "name": "Interior #25650",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/25651",
                          "name": "Universe X (2000) #8",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/25652",
                          "name": "Interior #25652",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/25653",
                          "name": "Universe X (2000) #9",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/25654",
                          "name": "Interior #25654",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/67100",
                          "name": "Universe X (2000) #11",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/89190",
                          "name": "Hulk (2008) #43",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/90002",
                          "name": "Interior #90002",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/92370",
                          "name": "Dark Avengers (2012) #179",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/92371",
                          "name": "Interior #92371",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/92372",
                          "name": "Dark Avengers (2012) #180",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/92373",
                          "name": "Interior #92373",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/92376",
                          "name": "Dark Avengers (2012) #177",
                          "type": "cover"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010699/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/2809/aaron_stack?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1010699/aaron_stack?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1009146,
              "name": "Abomination (Emil Blonsky)",
              "description": "Formerly known as Emil Blonsky, a spy of Soviet Yugoslavian origin working for the KGB, the Abomination gained his powers after receiving a dose of gamma radiation similar to that which transformed Bruce Banner into the incredible Hulk.",
              "modified": "2012-03-20T12:32:12-0400",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009146",
              "comics": {
                  "available": 58,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009146/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/88869",
                          "name": "Abominations (1996) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/88870",
                          "name": "Abominations (1996) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/88871",
                          "name": "Abominations (1996) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17547",
                          "name": "Avengers (1998) #61"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17548",
                          "name": "Avengers (1998) #62"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1098",
                          "name": "AVENGERS: WORLD TRUST (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8557",
                          "name": "Earth X (1999) #7"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/4241",
                          "name": "EARTH X TPB [NEW PRINTING] (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20863",
                          "name": "Hulk (2008) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/2499",
                          "name": "Hulk: Destruction (2005) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14424",
                          "name": "Hulk (1999) #24"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14425",
                          "name": "Hulk (1999) #25"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14428",
                          "name": "Hulk (1999) #28"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14450",
                          "name": "Hulk (1999) #50"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14451",
                          "name": "Hulk (1999) #51"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14453",
                          "name": "Hulk (1999) #53"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14454",
                          "name": "Hulk (1999) #54"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8948",
                          "name": "Incredible Hulk (1962) #137"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8982",
                          "name": "Incredible Hulk (1962) #171"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/9005",
                          "name": "Incredible Hulk (1962) #194"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 28,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009146/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/30582",
                          "name": "Abominations (1996 - Present)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
                          "name": "Avengers (1998 - 2004)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/158",
                          "name": "AVENGERS: WORLD TRUST (2003)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/378",
                          "name": "Earth X (1999 - 2000)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1806",
                          "name": "EARTH X TPB [NEW PRINTING] (2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3374",
                          "name": "Hulk (2008 - 2012)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/465",
                          "name": "Hulk (1999 - 2008)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/924",
                          "name": "Hulk: Destruction (2005)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2021",
                          "name": "Incredible Hulk (1962 - 1999)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2983",
                          "name": "Incredible Hulk Annual (1976 - 1994)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22424",
                          "name": "Incredible Hulk Epic Collection: The Hulk Must Die (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/212",
                          "name": "Incredible Hulk Vol. 4: Abominable (2003)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/244",
                          "name": "Incredible Hulk Vol. IV: Abominable (2003)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/8842",
                          "name": "Incredible Hulks (2010 - 2011)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2572",
                          "name": "Iron Man (1998 - 2004)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/977",
                          "name": "Irredeemable Ant-Man (2006 - 2007)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2423",
                          "name": "IRREDEEMABLE ANT-MAN VOL. 1: LOW-LIFE DIGEST (2007)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3722",
                          "name": "Killraven (2002 - 2003)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2437",
                          "name": "KILLRAVEN PREMIERE HC (2007)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/32108",
                          "name": "Maestro: World War M (2022)"
                      }
                  ],
                  "returned": 20
              },
              "stories": {
                  "available": 68,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009146/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/4946",
                          "name": "4 of 4 - 4XLS",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5496",
                          "name": "Irredeemable Ant-Man (2006) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12370",
                          "name": "Cover #12370",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12372",
                          "name": "Whosoever Harms the Hulk..!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18419",
                          "name": "[none]",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18420",
                          "name": "The Stars Mine Enemy",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18488",
                          "name": "Incredible Hulk (1962) #171",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18489",
                          "name": "Revenge",
                          "type": ""
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18534",
                          "name": "Incredible Hulk (1962) #194",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18535",
                          "name": "The Day of the Locust!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18536",
                          "name": "Incredible Hulk (1962) #195",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18537",
                          "name": "Warfare In Wonderland!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18538",
                          "name": "Incredible Hulk (1962) #196",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18539",
                          "name": "The Abomination Proclamation!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18546",
                          "name": "Incredible Hulk (1962) #200",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18547",
                          "name": "An Intruder In the Mind!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18776",
                          "name": "Cover #18776",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18877",
                          "name": "Incredible Hulk (1962) #364",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18878",
                          "name": "Countdown Part 4: The Abomination",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18881",
                          "name": "Incredible Hulk (1962) #366",
                          "type": "cover"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009146/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
                          "name": "Chaos War"
                      }
                  ],
                  "returned": 1
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/81/abomination?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Abomination?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1009146/abomination_emil_blonsky?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1016823,
              "name": "Abomination (Ultimate)",
              "description": "",
              "modified": "2012-07-10T19:11:52-0400",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016823",
              "comics": {
                  "available": 2,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1016823/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/40638",
                          "name": "Hulk (2008) #50"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/15717",
                          "name": "Ultimate X-Men (2001) #26"
                      }
                  ],
                  "returned": 2
              },
              "series": {
                  "available": 2,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1016823/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3374",
                          "name": "Hulk (2008 - 2012)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/474",
                          "name": "Ultimate X-Men (2001 - 2009)"
                      }
                  ],
                  "returned": 2
              },
              "stories": {
                  "available": 3,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1016823/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/31883",
                          "name": "Free Preview of THE INCREDIBLE HULK #50",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/92098",
                          "name": "Hulk (2008) #50",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/92099",
                          "name": "Interior #92099",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 3
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1016823/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/81/abomination?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1016823/abomination_ultimate?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1009148,
              "name": "Absorbing Man",
              "description": "",
              "modified": "2013-10-24T14:32:08-0400",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009148",
              "comics": {
                  "available": 104,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009148/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/43507",
                          "name": "A+X (2012) #8"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/7045",
                          "name": "Avengers (1963) #183"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/7046",
                          "name": "Avengers (1963) #184"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/7142",
                          "name": "Avengers (1963) #270"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/36481",
                          "name": "Avengers Academy (2010) #16"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/36480",
                          "name": "Avengers Academy (2010) #17"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/36479",
                          "name": "Avengers Academy (2010) #18"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/36484",
                          "name": "Avengers Academy (2010) #19"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17776",
                          "name": "Avengers Annual (1967) #20"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/63662",
                          "name": "Black Bolt (2017) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/64278",
                          "name": "Black Bolt (2017) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/66533",
                          "name": "Black Bolt (2017) #11"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/65327",
                          "name": "Black Bolt Vol. 1: Hard Time (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12783",
                          "name": "Captain America (1998) #24"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20427",
                          "name": "Dazzler (1981) #18"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20428",
                          "name": "Dazzler (1981) #19"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8499",
                          "name": "Deadpool (1997) #43"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/15541",
                          "name": "Fantastic Four (1998) #22"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/13151",
                          "name": "Fantastic Four (1961) #330"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/41433",
                          "name": "Fear Itself (2010) #2 (3rd Printing Variant)"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 53,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009148/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
                          "name": "A+X (2012 - 2014)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
                          "name": "Avengers (1963 - 1996)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
                          "name": "Avengers Academy (2010 - 2012)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
                          "name": "Avengers Annual (1967 - 1994)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23121",
                          "name": "Black Bolt (2017 - 2018)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23778",
                          "name": "Black Bolt Vol. 1: Hard Time (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1997",
                          "name": "Captain America (1998 - 2002)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3745",
                          "name": "Dazzler (1981 - 1986)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2005",
                          "name": "Deadpool (1997 - 2002)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2121",
                          "name": "Fantastic Four (1961 - 1998)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/421",
                          "name": "Fantastic Four (1998 - 2012)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/13691",
                          "name": "Fear Itself (2010 - 2011)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/13857",
                          "name": "Fear Itself: Fellowship of Fear (2011)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/13827",
                          "name": "Fear Itself: The Worthy (2011)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/31372",
                          "name": "Gamma Flight (2021)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/20084",
                          "name": "Heroes for Hire (1997 - 1999)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/465",
                          "name": "Hulk (1999 - 2008)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/20552",
                          "name": "Illuminati (2015 - 2016)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/24278",
                          "name": "Immortal Hulk (2018 - 2021)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/24891",
                          "name": "Immortal Hulk Vol. 2: The Green Door (2019)"
                      }
                  ],
                  "returned": 20
              },
              "stories": {
                  "available": 116,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009148/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/4988",
                          "name": "1 of 1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/7866",
                          "name": "Punisher War Journal (2006) #4",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/10997",
                          "name": "Journey Into Mystery (1952) #114",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/10998",
                          "name": "The Stronger I Am, the Sooner I Die",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/11000",
                          "name": "Journey Into Mystery (1952) #115",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/11001",
                          "name": "The Vengeance of the Thunder God",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/11022",
                          "name": "Journey Into Mystery (1952) #120",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/11023",
                          "name": "With My Hammer In Hand",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/11025",
                          "name": "Journey Into Mystery (1952) #121",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/11026",
                          "name": "The Power!  The Passion!  The Pride!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/11028",
                          "name": "Journey Into Mystery (1952) #122",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/11029",
                          "name": "Where Mortals Fear To Tread!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/11031",
                          "name": "Journey Into Mystery (1952) #123",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/11032",
                          "name": "While a Universe Trembles",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12951",
                          "name": "Fantastic Four (1961) #330",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12952",
                          "name": "Good Dreams!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/13957",
                          "name": "\"...With Foes Like These...!\"",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/14628",
                          "name": "Avengers (1963) #183",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/14630",
                          "name": "Avengers (1963) #184",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/14823",
                          "name": "Avengers (1963) #270",
                          "type": "cover"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 5,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009148/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
                          "name": "Acts of Vengeance!"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
                          "name": "Civil War"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
                          "name": "Fear Itself"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
                          "name": "Secret Wars"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/273",
                          "name": "Siege"
                      }
                  ],
                  "returned": 5
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/84/absorbing_man?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Absorbing_Man?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1009148/absorbing_man?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1009149,
              "name": "Abyss",
              "description": "",
              "modified": "2014-04-29T14:10:43-0400",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009149",
              "comics": {
                  "available": 8,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009149/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/13943",
                          "name": "Uncanny X-Men (1981) #402"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/13945",
                          "name": "Uncanny X-Men (1981) #404"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/13946",
                          "name": "Uncanny X-Men (1981) #405"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/13947",
                          "name": "Uncanny X-Men (1981) #406"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/13970",
                          "name": "Uncanny X-Men (1981) #429"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/13972",
                          "name": "Uncanny X-Men (1981) #431"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12386",
                          "name": "X-Men: Alpha (1995) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/2539",
                          "name": "X-MEN: THE COMPLETE AGE OF APOCALYPSE EPIC (Trade Paperback)"
                      }
                  ],
                  "returned": 8
              },
              "series": {
                  "available": 3,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009149/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
                          "name": "Uncanny X-Men (1981 - 2011)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2104",
                          "name": "X-Men: Alpha (1995)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1583",
                          "name": "X-MEN: THE COMPLETE AGE OF APOCALYPSE EPIC (2005)"
                      }
                  ],
                  "returned": 3
              },
              "stories": {
                  "available": 8,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009149/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/26281",
                          "name": "A Beginning",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28352",
                          "name": "Utility of Myth",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28356",
                          "name": "Army Ants",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28358",
                          "name": "Ballroom Blitzkrieg",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28360",
                          "name": "Staring Contests are for Suckers",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28407",
                          "name": "The Draco Part One: Sins of the Father",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28411",
                          "name": "The Draco Part Three",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28413",
                          "name": "The Draco Part Four",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 8
              },
              "events": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009149/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/227",
                          "name": "Age of Apocalypse"
                      }
                  ],
                  "returned": 1
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/85/abyss?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Abyss_(alien)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1009149/abyss?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1010903,
              "name": "Abyss (Age of Apocalypse)",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010903",
              "comics": {
                  "available": 3,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010903/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/18099",
                          "name": "Weapon X (1995) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12386",
                          "name": "X-Men: Alpha (1995) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/2539",
                          "name": "X-MEN: THE COMPLETE AGE OF APOCALYPSE EPIC (Trade Paperback)"
                      }
                  ],
                  "returned": 3
              },
              "series": {
                  "available": 3,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010903/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3635",
                          "name": "Weapon X (1995)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2104",
                          "name": "X-Men: Alpha (1995)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1583",
                          "name": "X-MEN: THE COMPLETE AGE OF APOCALYPSE EPIC (2005)"
                      }
                  ],
                  "returned": 3
              },
              "stories": {
                  "available": 2,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010903/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/26280",
                          "name": "X-Men: Alpha (1994) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/38448",
                          "name": "X-Facts",
                          "type": ""
                      }
                  ],
                  "returned": 2
              },
              "events": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010903/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/227",
                          "name": "Age of Apocalypse"
                      }
                  ],
                  "returned": 1
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/85/abyss?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Abyss_(Age_of_Apocalypse)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1010903/abyss_age_of_apocalypse?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011266,
              "name": "Adam Destine",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011266",
              "comics": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011266/comics",
                  "items": [],
                  "returned": 0
              },
              "series": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011266/series",
                  "items": [],
                  "returned": 0
              },
              "stories": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011266/stories",
                  "items": [],
                  "returned": 0
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011266/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/2902/adam_destine?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Destine,_Adam?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011266/adam_destine?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1010354,
              "name": "Adam Warlock",
              "description": "Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.",
              "modified": "2013-08-07T13:49:06-0400",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010354",
              "comics": {
                  "available": 202,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010354/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/105140",
                          "name": "Adam Warlock Omnibus (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/105920",
                          "name": "Adam Warlock: Strange Tales Facsimile Edition (2023) #178"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/62151",
                          "name": "All-New Guardians of the Galaxy Vol. 3: Infinity Quest (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17271",
                          "name": "Annihilation: Conquest (2007) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17405",
                          "name": "Annihilation: Conquest (2007) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17645",
                          "name": "Annihilation: Conquest (2007) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20686",
                          "name": "Annihilation: Conquest (2007) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20885",
                          "name": "Annihilation: Conquest (2007) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21016",
                          "name": "Annihilation: Conquest (2007) #6"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12412",
                          "name": "Avengers Forever (1998) #9"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1033",
                          "name": "AVENGERS LEGENDS: AVENGERS FOREVER (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20731",
                          "name": "CLANDESTINE CLASSIC PREMIERE HC (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20187",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #27"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20193",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #32"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20197",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #36"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8552",
                          "name": "Earth X (1999) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8550",
                          "name": "Earth X (1999) #11"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/4241",
                          "name": "EARTH X TPB [NEW PRINTING] (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12975",
                          "name": "Fantastic Four (1961) #172"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/13195",
                          "name": "Fantastic Four (1961) #370"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 89,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010354/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/36369",
                          "name": "Adam Warlock Omnibus (2023)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/36621",
                          "name": "Adam Warlock: Strange Tales Facsimile Edition (2023)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23058",
                          "name": "All-New Guardians of the Galaxy (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22778",
                          "name": "All-New Guardians of the Galaxy Vol. 3: Infinity Quest (2018)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3061",
                          "name": "Annihilation: Conquest (2007)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2111",
                          "name": "Avengers Forever (1998 - 1999)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/93",
                          "name": "AVENGERS LEGENDS: AVENGERS FOREVER (2002)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3874",
                          "name": "CLANDESTINE CLASSIC PREMIERE HC (2008)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3741",
                          "name": "Doctor Strange, Sorcerer Supreme (1988 - 1996)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/378",
                          "name": "Earth X (1999 - 2000)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1806",
                          "name": "EARTH X TPB [NEW PRINTING] (2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2121",
                          "name": "Fantastic Four (1961 - 1998)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/4885",
                          "name": "Guardians of the Galaxy (2008 - 2010)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/27554",
                          "name": "Guardians Of The Galaxy Annual (2019)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/26496",
                          "name": "Guardians Of The Galaxy Vol. 2: Faithless (2020)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22422",
                          "name": "GUARDIANS OF THE GALAXY: ROAD TO ANNIHILATION VOL. 2 TPB (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/37451",
                          "name": "Guardians of the Galaxy: Somebody's Got to Do It Infinity Comic (2023)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2021",
                          "name": "Incredible Hulk (1962 - 1999)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2983",
                          "name": "Incredible Hulk Annual (1976 - 1994)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/26307",
                          "name": "Infinity By Starlin & Hickman (2019)"
                      }
                  ],
                  "returned": 20
              },
              "stories": {
                  "available": 231,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010354/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1412",
                          "name": "Cover #1412",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1602",
                          "name": "Cover #1602",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1800",
                          "name": "Cover #1800",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1842",
                          "name": "Cover #1842",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/3758",
                          "name": "WARLOCK (2004) #3",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/3760",
                          "name": "WARLOCK (2004) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/3762",
                          "name": "WARLOCK (2004) #2",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/3764",
                          "name": "WARLOCK (2004) #4",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12568",
                          "name": "Fantastic Four (1961) #172",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12569",
                          "name": "Cry, the Bedeviled Planet!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/13121",
                          "name": "Forever Evil",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18500",
                          "name": "Incredible Hulk (1962) #177",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18501",
                          "name": "Peril of the Paired Planets",
                          "type": ""
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/18503",
                          "name": "Triumph On Terra-Two",
                          "type": ""
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/19847",
                          "name": "Cover #19847",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/19848",
                          "name": "Performance",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/19859",
                          "name": "Days of Future Present Part 4",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/19860",
                          "name": "You Must Remember This",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/19883",
                          "name": "The Adventures of Lockheed the Space Dragon and His Pet Girl, Kitty",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/19884",
                          "name": "The Saga of Storm: Goddess of Thunder",
                          "type": "cover"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 8,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010354/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/293",
                          "name": "Annihilation: Conquest"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
                          "name": "Atlantis Attacks"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/235",
                          "name": "Blood and Thunder"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
                          "name": "Days of Future Present"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
                          "name": "Infinity War"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/263",
                          "name": "Mutant Massacre"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
                          "name": "Secret Wars II"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/280",
                          "name": "X-Tinction Agenda"
                      }
                  ],
                  "returned": 8
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/2854/adam_warlock?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Warlock,_Adam?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1010354/adam_warlock?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1010846,
              "name": "Aegis (Trey Rollins)",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/e0/4c0035c9c425d",
                  "extension": "gif"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010846",
              "comics": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010846/comics",
                  "items": [],
                  "returned": 0
              },
              "series": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010846/series",
                  "items": [],
                  "returned": 0
              },
              "stories": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010846/stories",
                  "items": [],
                  "returned": 0
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010846/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/95/aegis?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Aegis_%28Trey_Rollins%29?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1010846/aegis_trey_rollins?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1017851,
              "name": "Aero (Aero)",
              "description": "",
              "modified": "2021-08-27T17:52:34-0400",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017851",
              "comics": {
                  "available": 29,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017851/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/76349",
                          "name": "Aero (2019) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/76350",
                          "name": "Aero (2019) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/76351",
                          "name": "Aero (2019) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/76352",
                          "name": "Aero (2019) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/76353",
                          "name": "Aero (2019) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/76354",
                          "name": "Aero (2019) #6"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/76355",
                          "name": "Aero (2019) #7"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/76356",
                          "name": "Aero (2019) #8"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/76357",
                          "name": "Aero (2019) #9"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/76358",
                          "name": "Aero (2019) #10"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/76359",
                          "name": "Aero (2019) #11"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/76360",
                          "name": "Aero (2019) #12"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/77001",
                          "name": "Agents of Atlas (2019) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/77003",
                          "name": "Agents of Atlas (2019) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/77005",
                          "name": "Agents of Atlas (2019) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/83989",
                          "name": "Atlantis Attacks (2020) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/83993",
                          "name": "Atlantis Attacks (2020) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/83994",
                          "name": "Atlantis Attacks (2020) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/83995",
                          "name": "Atlantis Attacks (2020) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/83996",
                          "name": "Atlantis Attacks (2020) #5"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 5,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017851/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/27392",
                          "name": "Aero (2019 - 2020)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/27624",
                          "name": "Agents of Atlas (2019)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/29600",
                          "name": "Atlantis Attacks (2020)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/31376",
                          "name": "King In Black: Black Knight (2021)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/28381",
                          "name": "The Marvels (2021 - 2022)"
                      }
                  ],
                  "returned": 5
              },
              "stories": {
                  "available": 29,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017851/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/169570",
                          "name": "cover from Aero (2019) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/169572",
                          "name": "cover from Aero (2019) #2",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/169574",
                          "name": "cover from Aero (2019) #3",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/169576",
                          "name": "cover from Aero (2019) #4",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/169578",
                          "name": "cover from Aero (2019) #5",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/169580",
                          "name": "cover from Aero (2019) #6",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/169582",
                          "name": "cover from Aero (2019) #7",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/169584",
                          "name": "cover from Aero (2019) #8",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/169586",
                          "name": "cover from Aero (2019) #9",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/169588",
                          "name": "cover from Aero (2019) #10",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/169590",
                          "name": "cover from Aero (2019) #11",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/169592",
                          "name": "cover from Aero (2019) #12",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/170874",
                          "name": "cover from New Agents of Atlas (2019) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/170878",
                          "name": "cover from New Agents of Atlas (2019) #3",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/170882",
                          "name": "cover from New Agents of Atlas (2019) #5",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/178282",
                          "name": "cover from The Marvels (2029) #2",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/178288",
                          "name": "cover from The Marvels (2029) #4",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/178290",
                          "name": "cover from The Marvels (2029) #5",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/178294",
                          "name": "cover from The Marvels (2029) #7",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/178296",
                          "name": "cover from The Marvels (2029) #8",
                          "type": "cover"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017851/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/comics/characters/1017851/aero_aero?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1017851/aero_aero?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1012717,
              "name": "Agatha Harkness",
              "description": "",
              "modified": "2021-08-06T11:30:56-0400",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/a0/4ce5a9bf70e19",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1012717",
              "comics": {
                  "available": 24,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1012717/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17751",
                          "name": "Avengers (1996) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17756",
                          "name": "Avengers (1996) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17757",
                          "name": "Avengers (1996) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17758",
                          "name": "Avengers (1996) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17762",
                          "name": "Avengers (1996) #8"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/110269",
                          "name": "Avengers Annual (2023) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21358",
                          "name": "Avengers Fairy Tales (2008) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/77235",
                          "name": "Captain America (2018) #19"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/95785",
                          "name": "Captain Marvel (2019) #39"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/95788",
                          "name": "Captain Marvel (2019) #42"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/13304",
                          "name": "Fantastic Four (1961) #94"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/101173",
                          "name": "Midnight Suns (2022) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/54974",
                          "name": "Scarlet Witch (1994) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/57094",
                          "name": "Scarlet Witch (2015) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/54977",
                          "name": "Scarlet Witch (1994) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/54978",
                          "name": "Scarlet Witch (1994) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/60028",
                          "name": "Scarlet Witch (2015) #13"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/110287",
                          "name": "Spider-Man Annual (2023) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/114846",
                          "name": "Strange Academy: Blood Hunt (2024) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21182",
                          "name": "Ultimate Fantastic Four (2003) #54"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 13,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1012717/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
                          "name": "Avengers (1996 - 1997)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/38734",
                          "name": "Avengers Annual (2023)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3971",
                          "name": "Avengers Fairy Tales (2008)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/24503",
                          "name": "Captain America (2018 - 2022)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/26673",
                          "name": "Captain Marvel (2019 - 2023)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2121",
                          "name": "Fantastic Four (1961 - 1998)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/34645",
                          "name": "Midnight Suns (2022 - 2023)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/20338",
                          "name": "Scarlet Witch (1994)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/20854",
                          "name": "Scarlet Witch (2015 - 2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/37695",
                          "name": "Spider-Man Annual (2023)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/39279",
                          "name": "Strange Academy: Blood Hunt (2024 - Present)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/702",
                          "name": "Ultimate Fantastic Four (2003 - 2009)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3655",
                          "name": "Vision and the Scarlet Witch (1985 - 1986)"
                      }
                  ],
                  "returned": 13
              },
              "stories": {
                  "available": 29,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1012717/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/13503",
                          "name": "The Return of the Frightful Four",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37673",
                          "name": "Avengers (1996) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37688",
                          "name": "Avengers (1996) #2",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37690",
                          "name": "Avengers (1996) #3",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37693",
                          "name": "Avengers (1996) #4",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37701",
                          "name": "Avengers (1996) #8",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/39320",
                          "name": "VISION AND THE SCARLET WITCH (1985) #12",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/39325",
                          "name": "Ancestors",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/46790",
                          "name": "Ultimate Fantastic Four (2003) #54",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/46791",
                          "name": "Namor War 1 of 4",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47112",
                          "name": "Ultimate Fantastic Four (2003) #55",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47113",
                          "name": "Namor War 2 of 4",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47169",
                          "name": "Avengers Fairy Tales (2008) #4",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47170",
                          "name": "The Wizard of Oz",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47425",
                          "name": "Ultimate Fantastic Four (2003) #56",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47426",
                          "name": "3 of 4 - Salem Seven",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/125005",
                          "name": "cover from Scarlet Witch (2016) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/130587",
                          "name": "cover from Scarlet Witch (2015) #13",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/135317",
                          "name": "interior to Scarlet Witch (1994) #1",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/135321",
                          "name": "interior to Scarlet Witch (1994) #3",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1012717/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/comics/characters/1012717/agatha_harkness?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Agatha%20Harkness?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1012717/agatha_harkness?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011297,
              "name": "Agent Brand",
              "description": "",
              "modified": "2013-10-24T13:09:30-0400",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/60/52695285d6e7e",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011297",
              "comics": {
                  "available": 35,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011297/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/6120",
                          "name": "Astonishing X-Men (2004) #21"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/6309",
                          "name": "Astonishing X-Men (2004) #22"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/16119",
                          "name": "Astonishing X-Men (2004) #23"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17353",
                          "name": "Astonishing X-Men (2004) #24"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/24503",
                          "name": "Astonishing X-Men (2004) #32"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/24504",
                          "name": "Astonishing X-Men (2004) #33"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/38318",
                          "name": "Astonishing X-Men (2004) #38"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/38319",
                          "name": "Astonishing X-Men (2004) #40"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/40024",
                          "name": "Astonishing X-Men (2004) #40 (I Am Captain America Variant)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/45950",
                          "name": "Cable and X-Force (2012) #8"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/112856",
                          "name": "Dead X-Men (2024) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/39890",
                          "name": "Heralds (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/90340",
                          "name": "S.W.O.R.D. (2020) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/90341",
                          "name": "S.W.O.R.D. (2020) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/26232",
                          "name": "S.W.O.R.D. (2009) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/90342",
                          "name": "S.W.O.R.D. (2020) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/26233",
                          "name": "S.W.O.R.D. (2009) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/90343",
                          "name": "S.W.O.R.D. (2020) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/26234",
                          "name": "S.W.O.R.D. (2009) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/30518",
                          "name": "S.W.O.R.D. (2009) #5"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 9,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011297/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
                          "name": "Astonishing X-Men (2004 - 2013)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/16907",
                          "name": "Cable and X-Force (2012 - 2014)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/38790",
                          "name": "Dead X-Men (2024 - Present)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/13065",
                          "name": "Heralds (2010)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/31083",
                          "name": "S.W.O.R.D. (2020 - 2021)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/8233",
                          "name": "S.W.O.R.D. (2009 - 2010)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22551",
                          "name": "The Mighty Captain Marvel (2017 - 2018)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/17635",
                          "name": "X-Men (2013 - 2015)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/32962",
                          "name": "X-Men Red (2022 - Present)"
                      }
                  ],
                  "returned": 9
              },
              "stories": {
                  "available": 39,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011297/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/3353",
                          "name": "Interior #3353",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/7670",
                          "name": "ASTONISHING X-MEN (2004) #21",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/8144",
                          "name": "ASTONISHING X-MEN (2004) #22",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/32919",
                          "name": "ASTONISHING X-MEN (2004) #23",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/36374",
                          "name": "ASTONISHING X-MEN (2004) #24",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/54039",
                          "name": "ASTONISHING X-MEN (2004) #32",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/54041",
                          "name": "ASTONISHING X-MEN (2004) #33",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/57763",
                          "name": "S.W.O.R.D. (2009) #2",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/57765",
                          "name": "S.W.O.R.D. (2009) #3",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/57767",
                          "name": "S.W.O.R.D. (2009) #4",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/69862",
                          "name": "S.W.O.R.D. (2009) #5",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/89830",
                          "name": "ASTONISHING X-MEN (2004) #38",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/89900",
                          "name": "Astonishing X-Men (2004) #38",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/90548",
                          "name": "Heralds TPB",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/90819",
                          "name": "Interior #90819",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/90853",
                          "name": " Interior  Astonishing X-Men (2004) #40",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/90944",
                          "name": "ASTONISHING X-MEN (2004) #40",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/103418",
                          "name": "Cable and X-Force (2012) #8",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/103419",
                          "name": "story from Cable and X-Force (2012) #8",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/109479",
                          "name": "cover from X-Men (2013) #19",
                          "type": "cover"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011297/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/100/agent_brand?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Agent_Brand?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011297/agent_brand?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011031,
              "name": "Agent X (Nijo)",
              "description": "Originally a partner of the mind-altering assassin Black Swan, Nijo spied on Deadpool as part of the Swan's plan to exact revenge for Deadpool falsely taking credit for the Swan's assassination of the Four Winds crime family, which included Nijo's brother.",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011031",
              "comics": {
                  "available": 18,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011031/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17702",
                          "name": "Agent X (2002) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17709",
                          "name": "Agent X (2002) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17710",
                          "name": "Agent X (2002) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17711",
                          "name": "Agent X (2002) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17712",
                          "name": "Agent X (2002) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17713",
                          "name": "Agent X (2002) #6"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17714",
                          "name": "Agent X (2002) #7"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17715",
                          "name": "Agent X (2002) #8"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17716",
                          "name": "Agent X (2002) #9"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17703",
                          "name": "Agent X (2002) #10"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17704",
                          "name": "Agent X (2002) #11"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17705",
                          "name": "Agent X (2002) #12"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17706",
                          "name": "Agent X (2002) #13"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17707",
                          "name": "Agent X (2002) #14"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/394",
                          "name": "Agent X (2002) #15"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1649",
                          "name": "Cable & Deadpool (2004) #12"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21845",
                          "name": "Cable & Deadpool (2004) #46 (Zombie Variant)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5761",
                          "name": "Cable & Deadpool Vol. 2: The Burnt Offering (Trade Paperback)"
                      }
                  ],
                  "returned": 18
              },
              "series": {
                  "available": 3,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011031/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/459",
                          "name": "Agent X (2002 - 2004)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/693",
                          "name": "Cable & Deadpool (2004 - 2008)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1338",
                          "name": "Cable & Deadpool Vol. 2: The Burnt Offering (2007)"
                      }
                  ],
                  "returned": 3
              },
              "stories": {
                  "available": 23,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011031/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1135",
                          "name": "AGENT X (2002) #15",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2484",
                          "name": "CABLE & DEADPOOL (2004) #12",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37514",
                          "name": "AGENT X (2002) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37515",
                          "name": "Dead Man's Switch Part One",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37516",
                          "name": "AGENT X (2002) #10",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37518",
                          "name": "AGENT X (2002) #11",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37521",
                          "name": "AGENT X (2002) #13",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37523",
                          "name": "AGENT X (2002) #14",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37525",
                          "name": "AGENT X (2002) #2",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37526",
                          "name": "Dead Man's Switch Part Two",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37527",
                          "name": "AGENT X (2002) #3",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37528",
                          "name": "Dead Man's Switch Part Three",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37529",
                          "name": "AGENT X (2002) #4",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37530",
                          "name": "Dead Man's Switch Part Four",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37531",
                          "name": "AGENT X (2002) #5",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37532",
                          "name": "Dead Man's Switch Part Five",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37533",
                          "name": "AGENT X (2002) #6",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37534",
                          "name": "Dead Man's Switch Part Six",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37535",
                          "name": "AGENT X (2002) #7",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/67703",
                          "name": "AGENT X (2002) #12",
                          "type": "cover"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011031/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/101/agent_x?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Agent_X_(Nijo)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011031/agent_x_nijo?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1009150,
              "name": "Agent Zero",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c0042121d790",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009150",
              "comics": {
                  "available": 29,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009150/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/100853",
                          "name": "Life of Wolverine Infinity Comic (2022) #6"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/18082",
                          "name": "Weapon X (2002) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/18092",
                          "name": "Weapon X (2002) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/18074",
                          "name": "Weapon X (2002) #12"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/246",
                          "name": "Weapon X (2002) #13"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/2204",
                          "name": "Weapon X: Days of Future Now (2005) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/2324",
                          "name": "Weapon X: Days of Future Now (2005) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/2438",
                          "name": "Weapon X: Days of Future Now (2005) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/2439",
                          "name": "Weapon X: Days of Future Now (2005) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/3016",
                          "name": "Weapon X: Days of Future Now (2005) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/3357",
                          "name": "Weapon X: Days of Future Now (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/18408",
                          "name": "Weapon X: The Draft – Agent Zero (2002) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14182",
                          "name": "Wolverine (1988) #60"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14183",
                          "name": "Wolverine (1988) #61"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14184",
                          "name": "Wolverine (1988) #62"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14185",
                          "name": "Wolverine (1988) #63"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14186",
                          "name": "Wolverine (1988) #64"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14189",
                          "name": "Wolverine (1988) #67"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14190",
                          "name": "Wolverine (1988) #68"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14211",
                          "name": "Wolverine (1988) #87"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 10,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009150/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/34445",
                          "name": "Life of Wolverine Infinity Comic (2022)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/543",
                          "name": "Weapon X (2002 - 2004)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1478",
                          "name": "Weapon X: Days of Future Now (2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/869",
                          "name": "Weapon X: Days of Future Now (2005)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3649",
                          "name": "Weapon X: The Draft – Agent Zero (2002)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2262",
                          "name": "Wolverine (1988 - 2003)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/84",
                          "name": "WOLVERINE/DEADPOOL: WEAPON X (1999)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3643",
                          "name": "X-Man (1995 - 2000)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2265",
                          "name": "X-Men (1991 - 2001)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3637",
                          "name": "X-Men Unlimited (1993 - 2003)"
                      }
                  ],
                  "returned": 10
              },
              "stories": {
                  "available": 31,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009150/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1131",
                          "name": "WEAPON X (2002) #13",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/4603",
                          "name": "1 of 5 - 5XLS",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/4605",
                          "name": "2 of 5 - 5XLS",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/4606",
                          "name": "3 of 5 - 5XLS",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/4608",
                          "name": "4 of 5 - 5XLS",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/4610",
                          "name": "5 of 5 - 5XLS",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28706",
                          "name": "The Hunted Part 2",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28712",
                          "name": "The Hunted Part 5",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28738",
                          "name": "The Logan Files Epilogue",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28881",
                          "name": "Counting Coup",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28883",
                          "name": "Nightmare Quest!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28885",
                          "name": "Reunion!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28887",
                          "name": "Bastions of Glory!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28889",
                          "name": "What Goes Around...",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28895",
                          "name": "Valley O' Death",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28897",
                          "name": "Epsilon Red",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28941",
                          "name": "Showdown In Lowtown",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/29125",
                          "name": "Last Stand",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/29139",
                          "name": "Over...Again",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/38511",
                          "name": "Second Contact",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009150/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/102/agent_zero?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Agent_Zero?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1009150/agent_zero?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011198,
              "name": "Agents of Atlas",
              "description": "",
              "modified": "2016-02-03T10:25:22-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce18a834b7f5",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011198",
              "comics": {
                  "available": 45,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011198/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/23659",
                          "name": "Agents of Atlas (2009) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/4801",
                          "name": "Agents of Atlas (2006) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/77001",
                          "name": "Agents of Atlas (2019) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/23660",
                          "name": "Agents of Atlas (2009) #1 (50/50 COVER)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5089",
                          "name": "Agents of Atlas (2006) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/23825",
                          "name": "Agents of Atlas (2009) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/27402",
                          "name": "Agents of Atlas (2009) #2 (BACHALO 2ND PRINTING VARIANT)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/23824",
                          "name": "Agents of Atlas (2009) #2 (MCGUINNESS VARIANT)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5241",
                          "name": "Agents of Atlas (2006) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/24015",
                          "name": "Agents of Atlas (2009) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/24016",
                          "name": "Agents of Atlas (2009) #3 (MCGUINNESS VARIANT)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/24017",
                          "name": "Agents of Atlas (2009) #3 (Wolverine Art Appreciation Variant)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5404",
                          "name": "Agents of Atlas (2006) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/24219",
                          "name": "Agents of Atlas (2009) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/24221",
                          "name": "Agents of Atlas (2009) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5665",
                          "name": "Agents of Atlas (2006) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/24222",
                          "name": "Agents of Atlas (2009) #5 (MCGUINNESS VARIANT)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/24360",
                          "name": "Agents of Atlas (2009) #6"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5842",
                          "name": "Agents of Atlas (2006) #6"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/24361",
                          "name": "Agents of Atlas (2009) #7"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 13,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011198/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1097",
                          "name": "Agents of Atlas (2006 - 2007)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/6807",
                          "name": "Agents of Atlas (2009)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/27624",
                          "name": "Agents of Atlas (2019)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1980",
                          "name": "AGENTS OF ATLAS PREMIERE HC (2007)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/24134",
                          "name": "Agents of Atlas: The Complete Collection Vol. 1 (2018)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/29600",
                          "name": "Atlantis Attacks (2020)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/9782",
                          "name": "Atlas (2010)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/9181",
                          "name": "Avengers Vs. Atlas (2010)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/6415",
                          "name": "Dark Reign: New Nation (2008)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/27620",
                          "name": "Incoming! (2019)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/27505",
                          "name": "War of the Realms: New Agents of Atlas (2019)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/27374",
                          "name": "War Of The Realms: New Agents Of Atlas (2019)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22365",
                          "name": "Wolverine: Prehistory (2017)"
                      }
                  ],
                  "returned": 13
              },
              "stories": {
                  "available": 52,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011198/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/6008",
                          "name": "1 of 6 - 6 XLS-",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/6009",
                          "name": "1 of 6 - 6 XLS-",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/6010",
                          "name": "2 of 6 - 6 XLS -",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/6011",
                          "name": "2 of 6 - 6 XLS -",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/6012",
                          "name": "3 of 6 - 6 XLS -",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/6013",
                          "name": "3 of 6 - 6 XLS -",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/6014",
                          "name": "4 of 6 - 6 XLS -",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/6015",
                          "name": "4 of 6 - 6 XLS -",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/6016",
                          "name": "5 of 6 - 6 XLS -",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/6017",
                          "name": "5 of 6 - 6 XLS -",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/6018",
                          "name": "5 of 6 - Story A - 6XLS",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/6019",
                          "name": "5 of 6 - Story A - 6XLS",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/51050",
                          "name": "1 of 1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/52393",
                          "name": "1 of 3",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/52395",
                          "name": "1 of 3",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/52861",
                          "name": "2 of 3",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/52863",
                          "name": "2 of 3",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/53263",
                          "name": "3 of 3",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/53265",
                          "name": "3 of 3",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/53266",
                          "name": "3 of 3",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011198/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
                          "name": "Dark Reign"
                      }
                  ],
                  "returned": 1
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/comics/characters/1011198/agents_of_atlas?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Agents_of_Atlas?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011198/agents_of_atlas?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011175,
              "name": "Aginar",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011175",
              "comics": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011175/comics",
                  "items": [],
                  "returned": 0
              },
              "series": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011175/series",
                  "items": [],
                  "returned": 0
              },
              "stories": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011175/stories",
                  "items": [],
                  "returned": 0
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011175/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/105/aginar?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Aginar?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011175/aginar?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011136,
              "name": "Air-Walker (Gabriel Lan)",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011136",
              "comics": {
                  "available": 4,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011136/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/4108",
                          "name": "Annihilation: Silver Surfer (2006) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5589",
                          "name": "Heroes Reborn: Iron Man (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/16330",
                          "name": "Iron Man (1996) #11"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/16331",
                          "name": "Iron Man (1996) #12"
                      }
                  ],
                  "returned": 4
              },
              "series": {
                  "available": 3,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011136/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1078",
                          "name": "Annihilation: Silver Surfer (2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1814",
                          "name": "Heroes Reborn: Iron Man (2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/13577",
                          "name": "Iron Man (1996 - 1998)"
                      }
                  ],
                  "returned": 3
              },
              "stories": {
                  "available": 3,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011136/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5925",
                          "name": "Annihilation: Silver Surfer (2006) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/34082",
                          "name": "Magical Mystery Tour",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/34085",
                          "name": "Matters of the Heart",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 3
              },
              "events": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011136/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/229",
                          "name": "Annihilation"
                      }
                  ],
                  "returned": 1
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/109/air-walker?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Air-Walker_(Gabriel_Lan)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011136/air-walker_gabriel_lan?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011176,
              "name": "Ajak",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/80/4c002f35c5215",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011176",
              "comics": {
                  "available": 4,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011176/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21175",
                          "name": "Incredible Hercules (2008) #117"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21324",
                          "name": "Incredible Hercules (2008) #118"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21505",
                          "name": "Incredible Hercules (2008) #119"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21707",
                          "name": "Incredible Hercules (2008) #120"
                      }
                  ],
                  "returned": 4
              },
              "series": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011176/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3762",
                          "name": "Incredible Hercules (2008 - 2010)"
                      }
                  ],
                  "returned": 1
              },
              "stories": {
                  "available": 8,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011176/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/46776",
                          "name": "Incredible Hercules (2008) #117",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/46777",
                          "name": "Interior #46777",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47097",
                          "name": "Incredible Hercules (2008) #118",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47098",
                          "name": "Interior #47098",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47415",
                          "name": "Incredible Hercules (2008) #119",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47416",
                          "name": "3 of 4 - Secret Invasion",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47721",
                          "name": "Incredible Hercules (2008) #120",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47722",
                          "name": "4 of 4 - Secret Invasion",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 8
              },
              "events": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011176/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                          "name": "Secret Invasion"
                      }
                  ],
                  "returned": 1
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/111/ajak?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Ajak?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011176/ajak?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1010870,
              "name": "Ajaxis",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/70/4c0035adc7d3a",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010870",
              "comics": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010870/comics",
                  "items": [],
                  "returned": 0
              },
              "series": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010870/series",
                  "items": [],
                  "returned": 0
              },
              "stories": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010870/stories",
                  "items": [],
                  "returned": 0
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010870/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/113/ajaxis?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Ajaxis?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1010870/ajaxis?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011194,
              "name": "Akemi",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011194",
              "comics": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011194/comics",
                  "items": [],
                  "returned": 0
              },
              "series": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011194/series",
                  "items": [],
                  "returned": 0
              },
              "stories": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011194/stories",
                  "items": [],
                  "returned": 0
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011194/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/114/akemi?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011194/akemi?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011170,
              "name": "Alain",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011170",
              "comics": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011170/comics",
                  "items": [],
                  "returned": 0
              },
              "series": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011170/series",
                  "items": [],
                  "returned": 0
              },
              "stories": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011170/stories",
                  "items": [],
                  "returned": 0
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011170/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/116/alain?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Alain?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011170/alain?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1009240,
              "name": "Albert Cleary",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009240",
              "comics": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009240/comics",
                  "items": [],
                  "returned": 0
              },
              "series": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009240/series",
                  "items": [],
                  "returned": 0
              },
              "stories": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009240/stories",
                  "items": [],
                  "returned": 0
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009240/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/2692/albert_cleary?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1009240/albert_cleary?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011120,
              "name": "Albion",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011120",
              "comics": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011120/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/16489",
                          "name": "New Excalibur (2005) #23"
                      }
                  ],
                  "returned": 1
              },
              "series": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011120/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/935",
                          "name": "New Excalibur (2005 - 2007)"
                      }
                  ],
                  "returned": 1
              },
              "stories": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011120/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/33247",
                          "name": "NEW EXCALIBUR (2005) #23",
                          "type": "cover"
                      }
                  ],
                  "returned": 1
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011120/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/118/albion?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Albion?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011120/albion?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1010836,
              "name": "Alex Power",
              "description": "",
              "modified": "2011-10-27T09:57:58-0400",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce5a385a2e82",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010836",
              "comics": {
                  "available": 21,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010836/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/78439",
                          "name": "Future Foundation (2019) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/79184",
                          "name": "Future Foundation (2019) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/79185",
                          "name": "Future Foundation (2019) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/79186",
                          "name": "Future Foundation (2019) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17285",
                          "name": "Iron Man and Power Pack (2007) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17417",
                          "name": "Iron Man and Power Pack (2007) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17652",
                          "name": "Iron Man and Power Pack (2007) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20697",
                          "name": "Iron Man and Power Pack (2007) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/69184",
                          "name": "New Warriors (1990) #55"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/69185",
                          "name": "New Warriors (1990) #56"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/69197",
                          "name": "New Warriors (1990) #75"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/65092",
                          "name": "Power Pack (2017) #63"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/31366",
                          "name": "Thor and the Warriors Four (2010) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/31368",
                          "name": "Thor and the Warriors Four (2010) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/31370",
                          "name": "Thor and the Warriors Four (2010) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/31372",
                          "name": "Thor and the Warriors Four (2010) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/2565",
                          "name": "X-Men and Power Pack (2005) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/3093",
                          "name": "X-Men and Power Pack (2005) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/3207",
                          "name": "X-Men and Power Pack (2005) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/3416",
                          "name": "X-Men and Power Pack (2005) #4"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 7,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010836/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/27824",
                          "name": "Future Foundation (2019 - Present)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3077",
                          "name": "Iron Man and Power Pack (2007 - 2008)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/16341",
                          "name": "New Warriors (1990 - 1996)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23679",
                          "name": "Power Pack (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/9731",
                          "name": "Thor and the Warriors Four (2010)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/970",
                          "name": "X-Men and Power Pack (2005 - 2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1634",
                          "name": "X-Men and Power Pack: The Power of X (2006)"
                      }
                  ],
                  "returned": 7
              },
              "stories": {
                  "available": 28,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010836/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5463",
                          "name": "X-Men and Power Pack (2005) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5464",
                          "name": "1 of 4 - 4XLS",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5465",
                          "name": "X-Men and Power Pack (2005) #2",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5466",
                          "name": "2 of 4 - 4XLS",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5467",
                          "name": "X-Men and Power Pack (2005) #3",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5468",
                          "name": "3 of 4 - 4XLS",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5469",
                          "name": "X-Men and Power Pack (2005) #4",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5470",
                          "name": "4 of 4 - 4XLS",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/36224",
                          "name": "Iron Man and Power Pack (2007) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/36225",
                          "name": "4XLS 1 of 4",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/36519",
                          "name": "Iron Man and Power Pack (2007) #2",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/36520",
                          "name": "4XLS 2 of 4",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/36949",
                          "name": "Iron Man and Power Pack (2007) #3",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/36950",
                          "name": "4XLS 3 of 4",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/44388",
                          "name": "Iron Man and Power Pack (2007) #4",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/44389",
                          "name": "4XLS 4 of 4",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/71416",
                          "name": "Thor and the Warriors Four (2010) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/71420",
                          "name": "Thor and the Warriors Four (2010) #2",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/71424",
                          "name": "Thor and the Warriors Four (2010) #3",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/71428",
                          "name": "Thor and the Warriors Four (2010) #4",
                          "type": "cover"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010836/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/1387/alex_power?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1010836/alex_power?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1010755,
              "name": "Alex Wilder",
              "description": "Despite being the only one of the Runaways without any superhuman abilities or tech, Alex Wilder became the de facto leader of the group due to his natural leadership skills and intellect, as well as prodigy-level logic and strategy.",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/c0/4c00377144d5a",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010755",
              "comics": {
                  "available": 9,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010755/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/60754",
                          "name": "Power Man and Iron Fist (2016) #14"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/15061",
                          "name": "Runaways (2003) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/15071",
                          "name": "Runaways (2003) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/15072",
                          "name": "Runaways (2003) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/15073",
                          "name": "Runaways (2003) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/15074",
                          "name": "Runaways (2003) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/15075",
                          "name": "Runaways (2003) #6"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/70566",
                          "name": "Runaways (2017) #17"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/1273",
                          "name": "RUNAWAYS: PRIDE & JOY (Digest)"
                      }
                  ],
                  "returned": 9
              },
              "series": {
                  "available": 4,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010755/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/21122",
                          "name": "Power Man and Iron Fist (2016 - 2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2584",
                          "name": "Runaways (2003 - 2004)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23461",
                          "name": "Runaways (2017 - 2021)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/327",
                          "name": "RUNAWAYS: PRIDE & JOY (2004)"
                      }
                  ],
                  "returned": 4
              },
              "stories": {
                  "available": 9,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010755/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/30606",
                          "name": "Pride and Joy, Part 1 of 6",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/30622",
                          "name": "Cover #30622",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/30623",
                          "name": "Pride and Joy, Part 2 of 6",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/30625",
                          "name": "Pride and Joy, Part 3 of 6",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/30627",
                          "name": "Pride and Joy, Part 4 of 6",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/30629",
                          "name": "Pride and Joy, Part 5 of 6",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/30631",
                          "name": "Pride and Joy, Part 6 of 6",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/131977",
                          "name": "cover from Power Man and Iron Fist (2016) #14",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/156957",
                          "name": "cover from Runaways (2017) #17",
                          "type": "cover"
                      }
                  ],
                  "returned": 9
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010755/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/2820/alex_wilder?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Wilder%2C_Alex?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1010755/alex_wilder?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011214,
              "name": "Alexa Mendez",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011214",
              "comics": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011214/comics",
                  "items": [],
                  "returned": 0
              },
              "series": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011214/series",
                  "items": [],
                  "returned": 0
              },
              "stories": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011214/stories",
                  "items": [],
                  "returned": 0
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011214/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/2892/alexa_mendez?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011214/alexa_mendez?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1009497,
              "name": "Alexander Pierce",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009497",
              "comics": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009497/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/26285",
                          "name": "Secret Warriors (2009) #12"
                      }
                  ],
                  "returned": 1
              },
              "series": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009497/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/6796",
                          "name": "Secret Warriors (2009 - 2011)"
                      }
                  ],
                  "returned": 1
              },
              "stories": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009497/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/57873",
                          "name": "Secret Warriors (2008) #12",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 1
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009497/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/2738/alexander_pierce?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1009497/alexander_pierce?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1014990,
              "name": "Alice",
              "description": "",
              "modified": "2010-11-18T16:01:44-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/70/4cd061e6d6573",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1014990",
              "comics": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1014990/comics",
                  "items": [],
                  "returned": 0
              },
              "series": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1014990/series",
                  "items": [],
                  "returned": 0
              },
              "stories": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1014990/stories",
                  "items": [],
                  "returned": 0
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1014990/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/122/alice?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1014990/alice?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1009435,
              "name": "Alicia Masters",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/4c003d40ac7ae",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009435",
              "comics": {
                  "available": 78,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009435/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/2055",
                          "name": "Essential Fantastic Four Vol. 4 (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/98731",
                          "name": "Fantastic Four (2022) #8"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/98732",
                          "name": "Fantastic Four (2022) #9"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/110798",
                          "name": "Fantastic Four (2022) #14"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/110799",
                          "name": "Fantastic Four (2022) #15"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/110801",
                          "name": "Fantastic Four (2022) #17"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/110802",
                          "name": "Fantastic Four (2022) #18"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/110803",
                          "name": "Fantastic Four (2022) #19"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/110805",
                          "name": "Fantastic Four (2022) #21"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/110806",
                          "name": "Fantastic Four (2022) #22"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/15546",
                          "name": "Fantastic Four (1998) #27"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12965",
                          "name": "Fantastic Four (1961) #163"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12966",
                          "name": "Fantastic Four (1961) #164"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12970",
                          "name": "Fantastic Four (1961) #168"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12971",
                          "name": "Fantastic Four (1961) #169"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12973",
                          "name": "Fantastic Four (1961) #170"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/13056",
                          "name": "Fantastic Four (1961) #245"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/13062",
                          "name": "Fantastic Four (1961) #250"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/13063",
                          "name": "Fantastic Four (1961) #251"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/13064",
                          "name": "Fantastic Four (1961) #252"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 22,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009435/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1263",
                          "name": "Essential Fantastic Four Vol. 4 (2005)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/34035",
                          "name": "Fantastic Four (2022 - Present)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/421",
                          "name": "Fantastic Four (1998 - 2012)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2121",
                          "name": "Fantastic Four (1961 - 1998)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3292",
                          "name": "Fantastic Four 1 2 3 4 (2001)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2012",
                          "name": "Fantastic Four Annual (1963 - 1994)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3090",
                          "name": "Fantastic Four Omnibus Vol. 1 (2007)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1458",
                          "name": "FANTASTIC FOUR VISIONARIES: GEORGE PEREZ VOL. 1 TPB (2005)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/341",
                          "name": "FANTASTIC FOUR VISIONARIES: JOHN BYRNE VOL. 2 TPB (2004)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1424",
                          "name": "Fantastic Four Visionaries: John Byrne Vol. 3 (2004)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2254",
                          "name": "FANTASTIC FOUR VISIONARIES: WALTER SIMONSON VOL. 1 TPB (2007)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1266",
                          "name": "Fantastic Four Vol. 2 (2005)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/25306",
                          "name": "Fantastic Four Vol. 2: Mr. And Mrs. Grimm (2019)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2579",
                          "name": "Fantastic Four: 1234 (2001 - 2002)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/14102",
                          "name": "Fear Itself: FF (2011)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/20424",
                          "name": "Galactus the Devourer (1999 - 2000)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1346",
                          "name": "Marvel Masterworks: The Fantastic Four Vol. 7 (2004)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3715",
                          "name": "Marvel Two-in-One (1974 - 1983)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2288",
                          "name": "Silver Surfer (1987 - 1998)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3667",
                          "name": "Thing (1983 - 1986)"
                      }
                  ],
                  "returned": 20
              },
              "stories": {
                  "available": 102,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009435/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/802",
                          "name": "Fantastic Four (1998) #509",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/803",
                          "name": "Interior #803",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/912",
                          "name": "Fantastic Four (1998) #512",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/913",
                          "name": "Interior #913",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12548",
                          "name": "Fantastic Four (1961) #163",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12549",
                          "name": "Finale!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12550",
                          "name": "Fantastic Four (1961) #164",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12551",
                          "name": "The Crusader Syndrome!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12558",
                          "name": "Fantastic Four (1961) #168",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12559",
                          "name": "Where Have All the Powers Gone?",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12560",
                          "name": "Fantastic Four (1961) #169",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12561",
                          "name": "Five Characters in Search of a Madman!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12564",
                          "name": "Fantastic Four (1961) #170",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12565",
                          "name": "A Sky Full of Fear!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12753",
                          "name": "Fantastic Four (1961) #245",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12754",
                          "name": "Childhood's End",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12765",
                          "name": "Fantastic Four (1961) #250",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12766",
                          "name": "X-Factor",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12768",
                          "name": "Fantastic Four (1961) #251",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12769",
                          "name": "Into the Negative Zone",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 2,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009435/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
                          "name": "Acts of Vengeance!"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
                          "name": "Inferno"
                      }
                  ],
                  "returned": 2
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/2732/alicia_masters?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Masters%2C_Alicia?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1009435/alicia_masters?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1010370,
              "name": "Alpha Flight",
              "description": "",
              "modified": "2013-10-24T13:09:22-0400",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/60/52695277ee088",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010370",
              "comics": {
                  "available": 221,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010370/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/39654",
                          "name": "Alpha Flight (2011) #0.1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12637",
                          "name": "Alpha Flight (1983) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/106868",
                          "name": "Alpha Flight (2023) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/393",
                          "name": "Alpha Flight (2004) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/39819",
                          "name": "Alpha Flight (2011) #1 (Eaglesham Variant)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/38569",
                          "name": "Alpha Flight (2011) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12679",
                          "name": "Alpha Flight (1983) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/106870",
                          "name": "Alpha Flight (2023) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/456",
                          "name": "Alpha Flight (2004) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/39818",
                          "name": "Alpha Flight (2011) #2 (Eaglesham Variant)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/106871",
                          "name": "Alpha Flight (2023) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12690",
                          "name": "Alpha Flight (1983) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/616",
                          "name": "Alpha Flight (2004) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/39820",
                          "name": "Alpha Flight (2011) #3 (Eaglesham Variant)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12701",
                          "name": "Alpha Flight (1983) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/38567",
                          "name": "Alpha Flight (2011) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/106872",
                          "name": "Alpha Flight (2023) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/677",
                          "name": "Alpha Flight (2004) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/12712",
                          "name": "Alpha Flight (1983) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/38568",
                          "name": "Alpha Flight (2011) #5"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 44,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010370/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/719",
                          "name": "Alpha Flight (2004 - 2005)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/13907",
                          "name": "Alpha Flight (2011 - 2012)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/36873",
                          "name": "Alpha Flight (2023)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
                          "name": "Alpha Flight (1983 - 1994)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/27041",
                          "name": "Alpha Flight Facsimile Edition (2019)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/27625",
                          "name": "Alpha Flight: True North (2019)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/18142",
                          "name": "Amazing X-Men (2013 - 2015)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/28069",
                          "name": "Annihilation: Scourge (2020)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
                          "name": "Astonishing X-Men (2004 - 2013)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
                          "name": "Avengers (1963 - 1996)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1995",
                          "name": "Cable (1993 - 2002)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/20718",
                          "name": "Captain Marvel (2016 - 2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22552",
                          "name": "Champions (2016 - 2019)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/11854",
                          "name": "Chaos War (2010 - 2011)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/13468",
                          "name": "Chaos War One-Shots (2010)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/13260",
                          "name": "Chaos War: Alpha Flight (2010)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/21692",
                          "name": "Civil War II: Choosing Sides (2016)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/14399",
                          "name": "Essential X-Men Vol. 2 (All-New Edition) (2011 - Present)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2123",
                          "name": "Fantastic Four (1996 - 1997)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2121",
                          "name": "Fantastic Four (1961 - 1998)"
                      }
                  ],
                  "returned": 20
              },
              "stories": {
                  "available": 390,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010370/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2921",
                          "name": "Alpha Flight (2004) #9",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2922",
                          "name": "1 of 4 - Days of Future Present Past Participle",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2923",
                          "name": "Alpha Flight (2004) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2924",
                          "name": "Interior #2924",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2925",
                          "name": "Alpha Flight (2004) #2",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2926",
                          "name": "Interior #2926",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2927",
                          "name": "Alpha Flight (2004) #6",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2928",
                          "name": "Interior #2928",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2929",
                          "name": "Alpha Flight (2004) #5",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2930",
                          "name": "Interior #2930",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2931",
                          "name": "Alpha Flight (2004) #3",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2932",
                          "name": "Interior #2932",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2933",
                          "name": "Alpha Flight (2004) #4",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2934",
                          "name": "Interior #2934",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2935",
                          "name": "Alpha Flight (2004) #7",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2936",
                          "name": "\"WAXING POETIC\" PART 1 (OF 2) Is the All-New, All-Different Alpha Flight really disbanding after only seven issues? Not if the r",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2937",
                          "name": "Alpha Flight (2004) #8",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2938",
                          "name": "\"WAXING POETIC\" PART 2 (OF 2) Montreal faces its gravest hour as it falls under attack by…wax statues of the entire Marvel Unive",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2939",
                          "name": "Alpha Flight (2004) #10",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2940",
                          "name": "2 of 4 - Days of Future Present Past Participle",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 6,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010370/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
                          "name": "Acts of Vengeance!"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
                          "name": "Chaos War"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
                          "name": "Fear Itself"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
                          "name": "Infinity War"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/337",
                          "name": "Monsters Unleashed"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
                          "name": "Secret Wars II"
                      }
                  ],
                  "returned": 6
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/126/alpha_flight?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Alpha_Flight?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1010370/alpha_flight?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011324,
              "name": "Alpha Flight (Ultimate)",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011324",
              "comics": {
                  "available": 2,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011324/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21177",
                          "name": "Ultimate X-Men (2001) #94"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21326",
                          "name": "Ultimate X-Men (2001) #95"
                      }
                  ],
                  "returned": 2
              },
              "series": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011324/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/474",
                          "name": "Ultimate X-Men (2001 - 2009)"
                      }
                  ],
                  "returned": 1
              },
              "stories": {
                  "available": 4,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011324/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/46780",
                          "name": "Ultimate X-Men (2001) #94",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/46781",
                          "name": "1 of 4",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47101",
                          "name": "Ultimate X-Men (2001) #95",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47102",
                          "name": "2 of 4",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 4
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011324/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/126/alpha_flight?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Alpha%20Flight%20(Ultimate)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011324/alpha_flight_ultimate?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011164,
              "name": "Alvin Maker",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011164",
              "comics": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011164/comics",
                  "items": [],
                  "returned": 0
              },
              "series": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011164/series",
                  "items": [],
                  "returned": 0
              },
              "stories": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011164/stories",
                  "items": [],
                  "returned": 0
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011164/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/2880/alvin_maker?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011164/alvin_maker?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011227,
              "name": "Amadeus Cho",
              "description": "",
              "modified": "2013-08-07T13:50:56-0400",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/520288b9cb581",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011227",
              "comics": {
                  "available": 150,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011227/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/77001",
                          "name": "Agents of Atlas (2019) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/77002",
                          "name": "Agents of Atlas (2019) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/77004",
                          "name": "Agents of Atlas (2019) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/77005",
                          "name": "Agents of Atlas (2019) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/83994",
                          "name": "Atlantis Attacks (2020) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/83995",
                          "name": "Atlantis Attacks (2020) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/83996",
                          "name": "Atlantis Attacks (2020) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/65264",
                          "name": "Avengers (2016) #674"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/61442",
                          "name": "Champions (2016) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/61443",
                          "name": "Champions (2016) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/73805",
                          "name": "Champions (2019) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/61444",
                          "name": "Champions (2016) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/73806",
                          "name": "Champions (2019) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/61445",
                          "name": "Champions (2016) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/73807",
                          "name": "Champions (2019) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/61446",
                          "name": "Champions (2016) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/81193",
                          "name": "Champions (2020) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/61447",
                          "name": "Champions (2016) #6"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/61448",
                          "name": "Champions (2016) #7"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/61449",
                          "name": "Champions (2016) #8"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 35,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011227/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/27624",
                          "name": "Agents of Atlas (2019)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/29600",
                          "name": "Atlantis Attacks (2020)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22547",
                          "name": "Avengers (2016 - 2018)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22552",
                          "name": "Champions (2016 - 2019)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/29034",
                          "name": "Champions (2020)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/26592",
                          "name": "Champions (2019)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22755",
                          "name": "CHAMPIONS VOL. 1: CHANGE THE WORLD TPB (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22756",
                          "name": "CHAMPIONS VOL. 2: THE FREELANCER LIFESTYLE TPB (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/24137",
                          "name": "Domino (2018)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/13881",
                          "name": "Fear Itself: The Home Front (2010)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23684",
                          "name": "Generations (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23281",
                          "name": "Generations: Banner Hulk & The Totally Awesome Hulk (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/20866",
                          "name": "Ghost Rider (2016 - 2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/20867",
                          "name": "GHOST RIDER: FOUR ON THE FLOOR TPB (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/9350",
                          "name": "Hercules: Fall of an Avenger (2010)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/24832",
                          "name": "Hulk: Return to Planet Hulk (2018)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3762",
                          "name": "Incredible Hercules (2008 - 2010)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23635",
                          "name": "Incredible Hulk (2017 - 2018)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/8842",
                          "name": "Incredible Hulks (2010 - 2011)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23456",
                          "name": "Marvel Legacy (2017)"
                      }
                  ],
                  "returned": 20
              },
              "stories": {
                  "available": 176,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011227/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/44255",
                          "name": "Incredible Hercules (2008) #114",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/44256",
                          "name": "Herc 3 of 4",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/44605",
                          "name": "Incredible Hercules (2008) #115",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/44606",
                          "name": "Herc 4 of 4",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/44607",
                          "name": "Herc 4 of 4",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/45230",
                          "name": "Incredible Hercules (2008) #116",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/45231",
                          "name": "Interior #45231",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/46776",
                          "name": "Incredible Hercules (2008) #117",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/46777",
                          "name": "Interior #46777",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47097",
                          "name": "Incredible Hercules (2008) #118",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47098",
                          "name": "Interior #47098",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47415",
                          "name": "Incredible Hercules (2008) #119",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47416",
                          "name": "3 of 4 - Secret Invasion",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47721",
                          "name": "Incredible Hercules (2008) #120",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/47722",
                          "name": "4 of 4 - Secret Invasion",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/48208",
                          "name": "Incredible Hercules (2008) #121",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/48209",
                          "name": "1 of 4",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/49032",
                          "name": "Incredible Hercules (2008) #122",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/49033",
                          "name": "2 of 4",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/49816",
                          "name": "Incredible Hercules (2008) #123",
                          "type": "cover"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 5,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011227/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
                          "name": "Dark Reign"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
                          "name": "Fear Itself"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
                          "name": "Secret Empire"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
                          "name": "Secret Invasion"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/273",
                          "name": "Siege"
                      }
                  ],
                  "returned": 5
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/comics/characters/1011227/amadeus_cho?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Amadeus_Cho?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011227/amadeus_cho?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1009567,
              "name": "Amanda Sefton",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009567",
              "comics": {
                  "available": 7,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009567/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8660",
                          "name": "Excalibur (1988) #75"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8661",
                          "name": "Excalibur (1988) #76"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8662",
                          "name": "Excalibur (1988) #77"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/50497",
                          "name": "Nightcrawler (2014) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/50498",
                          "name": "Nightcrawler (2014) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/50499",
                          "name": "Nightcrawler (2014) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/50500",
                          "name": "Nightcrawler (2014) #4"
                      }
                  ],
                  "returned": 7
              },
              "series": {
                  "available": 2,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009567/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2011",
                          "name": "Excalibur (1988 - 1998)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/18875",
                          "name": "Nightcrawler (2014 - 2015)"
                      }
                  ],
                  "returned": 2
              },
              "stories": {
                  "available": 7,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009567/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/22609",
                          "name": "Rachel as the Phoenix--For the Last Time!",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/22612",
                          "name": "Cover #22612",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/22614",
                          "name": "Cover #22614",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/113020",
                          "name": "cover from Nightcrawler (2014) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/113022",
                          "name": "cover from X-Men Legacy (2014) #2",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/113024",
                          "name": "cover from X-Men Legacy (2014) #3",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/113026",
                          "name": "cover from X-Men Legacy (2014) #4",
                          "type": "cover"
                      }
                  ],
                  "returned": 7
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009567/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/2755/amanda_sefton?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1009567/amanda_sefton?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011382,
              "name": "Amazoness",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011382",
              "comics": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011382/comics",
                  "items": [],
                  "returned": 0
              },
              "series": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011382/series",
                  "items": [],
                  "returned": 0
              },
              "stories": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011382/stories",
                  "items": [],
                  "returned": 0
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011382/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/130/amazoness?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011382/amazoness?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011361,
              "name": "American Eagle (Jason Strongbow)",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/80/4ce5a6d8b8f2a",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011361",
              "comics": {
                  "available": 6,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011361/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/10105",
                          "name": "Marvel Comics Presents (1988) #27"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/10042",
                          "name": "Marvel Comics Presents (1988) #128"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/10045",
                          "name": "Marvel Comics Presents (1988) #130"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/10063",
                          "name": "Marvel Comics Presents (1988) #147"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/10064",
                          "name": "Marvel Comics Presents (1988) #148"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/99072",
                          "name": "Marvel's Voices: Heritage (2022) #1"
                      }
                  ],
                  "returned": 6
              },
              "series": {
                  "available": 2,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011361/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2039",
                          "name": "Marvel Comics Presents (1988 - 1995)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/34174",
                          "name": "Marvel's Voices: Heritage (2022)"
                      }
                  ],
                  "returned": 2
              },
              "stories": {
                  "available": 6,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011361/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/22862",
                          "name": "The Hunter and the Hunted",
                          "type": ""
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/22880",
                          "name": "Screams",
                          "type": ""
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/22990",
                          "name": "Saints and Sinner",
                          "type": ""
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/22996",
                          "name": "500 Guns",
                          "type": ""
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/23237",
                          "name": "Just Another Shade of Hate",
                          "type": ""
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/219240",
                          "name": "cover from Marvel's Voices: Indigenous Voices (2021) #1",
                          "type": "cover"
                      }
                  ],
                  "returned": 6
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011361/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/132/american_eagle?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/American_Eagle_(Jason_Strongbow)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011361/american_eagle_jason_strongbow?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1009151,
              "name": "Amiko",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009151",
              "comics": {
                  "available": 12,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009151/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/62744",
                          "name": "Elektra (1996) #15"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/13722",
                          "name": "Uncanny X-Men (1981) #181"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14206",
                          "name": "Wolverine (1988) #82"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14045",
                          "name": "Wolverine (1988) #107"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14046",
                          "name": "Wolverine (1988) #108"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14047",
                          "name": "Wolverine (1988) #109"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14093",
                          "name": "Wolverine (1988) #150"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14094",
                          "name": "Wolverine (1988) #151"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14095",
                          "name": "Wolverine (1988) #152"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14096",
                          "name": "Wolverine (1988) #153"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14118",
                          "name": "Wolverine (1988) #173"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14119",
                          "name": "Wolverine (1988) #174"
                      }
                  ],
                  "returned": 12
              },
              "series": {
                  "available": 3,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009151/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23024",
                          "name": "Elektra (1996 - 1998)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
                          "name": "Uncanny X-Men (1981 - 2011)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2262",
                          "name": "Wolverine (1988 - 2003)"
                      }
                  ],
                  "returned": 3
              },
              "stories": {
                  "available": 12,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009151/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/27872",
                          "name": "Tokyo Story",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28580",
                          "name": "Once Upon a Time in Little Tokyo",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28582",
                          "name": "East is East",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28584",
                          "name": "[Untitled]",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28677",
                          "name": "Blood Debt Part 1",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28680",
                          "name": "Blood Debt Part 2",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28682",
                          "name": "Blood Debt Part 3",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28684",
                          "name": "Blood Debt Part 4",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28729",
                          "name": "The Logan Files Part 1",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28732",
                          "name": "The Logan Files Part 2",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/28931",
                          "name": "Omnia Mutantur",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/156489",
                          "name": "cover to Elektra (1996) #15",
                          "type": "cover"
                      }
                  ],
                  "returned": 12
              },
              "events": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009151/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
                          "name": "Secret Wars"
                      }
                  ],
                  "returned": 1
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/134/amiko?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Amiko?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1009151/amiko?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1010672,
              "name": "Amora",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010672",
              "comics": {
                  "available": 13,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010672/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/17763",
                          "name": "Avengers (1996) #9"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/48369",
                          "name": "Journey Into Mystery (1996) #503"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/48344",
                          "name": "Journey Into Mystery (1952) #503"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/48370",
                          "name": "Journey Into Mystery (1996) #504"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/48345",
                          "name": "Journey Into Mystery (1952) #504"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/48373",
                          "name": "Journey Into Mystery (1996) #507"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/48348",
                          "name": "Journey Into Mystery (1952) #507"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/48374",
                          "name": "Journey Into Mystery (1996) #508"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/48349",
                          "name": "Journey Into Mystery (1952) #508"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/48375",
                          "name": "Journey Into Mystery (1996) #510"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/48351",
                          "name": "Journey Into Mystery (1952) #510"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/18681",
                          "name": "Thor (1998) #55"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/18684",
                          "name": "Thor (1998) #58"
                      }
                  ],
                  "returned": 13
              },
              "series": {
                  "available": 4,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010672/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
                          "name": "Avengers (1996 - 1997)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/13569",
                          "name": "Journey Into Mystery (1996 - 1998)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2032",
                          "name": "Journey Into Mystery (1952 - 1966)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/581",
                          "name": "Thor (1998 - 2004)"
                      }
                  ],
                  "returned": 4
              },
              "stories": {
                  "available": 8,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010672/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/37703",
                          "name": "Avengers (1996) #9",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/67955",
                          "name": "Thor (1998) #55",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/67958",
                          "name": "Thor (1998) #58",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/113168",
                          "name": "Cover from Journey Into Mystery (1996) #510",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/113169",
                          "name": "Cover from Journey Into Mystery (1996) #508",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/113170",
                          "name": "Cover from Journey Into Mystery (1996) #507",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/113173",
                          "name": "Cover from Journey Into Mystery (1996) #504",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/113174",
                          "name": "Cover from Journey Into Mystery (1996) #503",
                          "type": "cover"
                      }
                  ],
                  "returned": 8
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010672/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/136/amora?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1010672/amora?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1010673,
              "name": "Amphibian (Earth-712)",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010673",
              "comics": {
                  "available": 4,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010673/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/3908",
                          "name": "Squadron Supreme (2006) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/4038",
                          "name": "Squadron Supreme (2006) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5425",
                          "name": "SQUADRON SUPREME : THE PRE-WAR YEARS (Hardcover)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/18820",
                          "name": "Squadron Supreme: New World Order (1999) #1"
                      }
                  ],
                  "returned": 4
              },
              "series": {
                  "available": 3,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010673/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/944",
                          "name": "Squadron Supreme (2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1791",
                          "name": "SQUADRON SUPREME : THE PRE-WAR YEARS (2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3685",
                          "name": "Squadron Supreme: New World Order (1999)"
                      }
                  ],
                  "returned": 3
              },
              "stories": {
                  "available": 3,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010673/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5249",
                          "name": "1 of 6 - The Pre-War Years",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5251",
                          "name": "2 of 6 - The Pre-War Years",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/40338",
                          "name": "Cover #40338",
                          "type": "cover"
                      }
                  ],
                  "returned": 3
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010673/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/137/amphibian?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Amphibian_(Earth-712)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1010673/amphibian_earth-712?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1010905,
              "name": "Amun",
              "description": "Amun is a ruthless teenage assassin, employed by the Sisterhood of the Wasp to serve under the mage Vincent after Araña interrupted the ritual to initiate the Wasp's new chosen one.",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010905",
              "comics": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010905/comics",
                  "items": [],
                  "returned": 0
              },
              "series": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010905/series",
                  "items": [],
                  "returned": 0
              },
              "stories": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010905/stories",
                  "items": [],
                  "returned": 0
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010905/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/140/amun?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Amun?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1010905/amun?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1009152,
              "name": "Ancient One",
              "description": "",
              "modified": "1969-12-31T19:00:00-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4ce59ea2103ac",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009152",
              "comics": {
                  "available": 30,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009152/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/62140",
                          "name": "DOCTOR STRANGE AND THE SORCERERS SUPREME VOL. 1: OUT OF TIME TPB (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20234",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #7"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20245",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #8"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20172",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #13"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20182",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #22"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20183",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #23"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20194",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #33"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20195",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #34"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20207",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #45"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20209",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #47"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20217",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #54"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20218",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #55"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20250",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #84"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20251",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #85"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20253",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #87"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20254",
                          "name": "Doctor Strange, Sorcerer Supreme (1988) #88"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20090",
                          "name": "Doctor Strange (1974) #12"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20091",
                          "name": "Doctor Strange (1974) #13"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20097",
                          "name": "Doctor Strange (1974) #19"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/50874",
                          "name": "Guardians of the Galaxy (1990) #19"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 11,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009152/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3740",
                          "name": "Doctor Strange (1974 - 1988)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22767",
                          "name": "DOCTOR STRANGE AND THE SORCERERS SUPREME VOL. 1: OUT OF TIME TPB (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3741",
                          "name": "Doctor Strange, Sorcerer Supreme (1988 - 1996)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/21012",
                          "name": "Doctor Strange: Masterworks Vol. 7 (2016)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/19019",
                          "name": "Guardians of the Galaxy (1990 - 1994)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/19020",
                          "name": "Guardians of the Galaxy Annual (1991)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23007",
                          "name": "Guidebook to the Marvel Cinematic Universe (2015 - 2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1468",
                          "name": "MARVEL MASTERWORKS: DOCTOR STRANGE (2005)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2076",
                          "name": "Strange Tales (1951 - 1968)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/25557",
                          "name": "Untold Tales of Spider-Man: Strange Encounter (1998)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3648",
                          "name": "What If? (1989 - 1998)"
                      }
                  ],
                  "returned": 11
              },
              "stories": {
                  "available": 34,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009152/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/10258",
                          "name": "Cover #10258",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/10263",
                          "name": "If Kaluu Should Triumph...",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/10292",
                          "name": "Umar Walks the Earth!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/10333",
                          "name": "This Dream---This Doom!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/39010",
                          "name": "What if Wolverine had Become Lord of the Vampires?",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/43011",
                          "name": "Doctor Strange (1974) #12",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/43012",
                          "name": "Final Curtain!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/43040",
                          "name": "Doctor Strange (1974) #13",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/43041",
                          "name": "Planet Earth is No More!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/43052",
                          "name": "Doctor Strange (1974) #19",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/43053",
                          "name": "Lo, the Powers Changeth!",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/43211",
                          "name": "TBOTV:The Curse of the Darkhold Part V, The Torch is Passed",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/43237",
                          "name": "TBOTV:Legends and Lore of the Dark Dimension, Part 2",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/43240",
                          "name": "TBOTV:Legends and Lore of the Dark Dimension, Part 3",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/43266",
                          "name": "The Alexandrain Quatrain",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/43269",
                          "name": "Is There a Doctor Not In The House?",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/43293",
                          "name": "Death's Greatest Hits",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/43297",
                          "name": "Strange Bedfellows II",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/43314",
                          "name": "From Here...To There...To Eternity",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/43317",
                          "name": "World Enough, And Time...",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 2,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009152/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
                          "name": "Acts of Vengeance!"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
                          "name": "Infinity War"
                      }
                  ],
                  "returned": 2
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/145/ancient_one?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Ancient_One?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1009152/ancient_one?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1016824,
              "name": "Ancient One (Ultimate)",
              "description": "",
              "modified": "2012-07-10T19:15:49-0400",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016824",
              "comics": {
                  "available": 2,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1016824/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/15771",
                          "name": "Ultimate Marvel Team-Up (2001) #12"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5132",
                          "name": "Ultimate Marvel Team-Up Ultimate Collection (Trade Paperback)"
                      }
                  ],
                  "returned": 2
              },
              "series": {
                  "available": 2,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1016824/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2311",
                          "name": "Ultimate Marvel Team-Up (2001 - 2002)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1823",
                          "name": "Ultimate Marvel Team-Up Ultimate Collection (2006)"
                      }
                  ],
                  "returned": 2
              },
              "stories": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1016824/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/32118",
                          "name": "[untitled]",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 1
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1016824/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/145/ancient_one?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1016824/ancient_one_ultimate?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011684,
              "name": "Angel (Angel Salvadore)",
              "description": "Driven out of home by her abusive step-father, fourteen-year old Angel Salvadore slept in the woods, where her mutant nature manifested itself in the form of a protective cocoon.",
              "modified": "2021-08-19T00:06:46-0400",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011684",
              "comics": {
                  "available": 5,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011684/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5451",
                          "name": "New X-Men (Hardcover)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14937",
                          "name": "New X-Men (2001) #118"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/14960",
                          "name": "New X-Men (2001) #141"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/38300",
                          "name": "New X-Men Vol. 2: Germ-Free Generation GN-TPB (Graphic Novel)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/2592",
                          "name": "NEW X-MEN: IMPERIAL (Trade Paperback)"
                      }
                  ],
                  "returned": 5
              },
              "series": {
                  "available": 4,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011684/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1807",
                          "name": "New X-Men (2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2281",
                          "name": "New X-Men (2001 - 2004)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/13801",
                          "name": "New X-Men Vol. 2: Germ-Free Generation GN-TPB (2011 - Present)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1166",
                          "name": "NEW X-MEN: IMPERIAL (2005)"
                      }
                  ],
                  "returned": 4
              },
              "stories": {
                  "available": 3,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011684/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/30476",
                          "name": "Germ Free Generation: one of three",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/67329",
                          "name": "new x-men 141 cover",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/90480",
                          "name": "New X-Men By Grant Morrison Vol. 2 GN-TPB",
                          "type": "cover"
                      }
                  ],
                  "returned": 3
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011684/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/1/angel?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Angel_(Angel_Salvadore)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011684/angel_angel_salvadore?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011396,
              "name": "Angel (Thomas Halloway)",
              "description": "",
              "modified": "2014-03-05T13:14:48-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/03/531769834b15f",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011396",
              "comics": {
                  "available": 10,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011396/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20636",
                          "name": "Incredible Hercules (2008) #114"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/3973",
                          "name": "MARVEL MASTERWORKS: GOLDEN AGE MARVEL COMICS (Hardcover)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/16736",
                          "name": "Marvel Mystery Comics (1939) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/16758",
                          "name": "Marvel Mystery Comics (1939) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/16733",
                          "name": "Marvel Mystery Comics (1939) #27"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/26595",
                          "name": "The Marvels Project (2009) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/28927",
                          "name": "The Marvels Project (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/26599",
                          "name": "The Marvels Project (2009) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/26600",
                          "name": "The Marvels Project (2009) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/30554",
                          "name": "The Marvels Project (2009) #7"
                      }
                  ],
                  "returned": 10
              },
              "series": {
                  "available": 5,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011396/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3762",
                          "name": "Incredible Hercules (2008 - 2010)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1730",
                          "name": "MARVEL MASTERWORKS: GOLDEN AGE MARVEL COMICS (2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2981",
                          "name": "Marvel Mystery Comics (1939 - 1949)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/8395",
                          "name": "The Marvels Project (2009 - 2010)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/10470",
                          "name": "The Marvels Project (2011)"
                      }
                  ],
                  "returned": 5
              },
              "stories": {
                  "available": 9,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011396/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/34538",
                          "name": "Cover #34538",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/34565",
                          "name": "Cover #34565",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/34757",
                          "name": "[untitled]",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/44256",
                          "name": "Herc 3 of 4",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/58499",
                          "name": "Cover #58499",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/58507",
                          "name": "Cover #58507",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/58509",
                          "name": "Cover #58509",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/63049",
                          "name": "The Marvels Project: Birth Of The Super Heroes TPB",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/69934",
                          "name": "Cover #69934",
                          "type": "cover"
                      }
                  ],
                  "returned": 9
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011396/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/1011396/angel_thomas_halloway/featured?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Angel_(Thomas_Halloway)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011396/angel_thomas_halloway?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1011338,
              "name": "Angel (Ultimate)",
              "description": "",
              "modified": "2014-03-05T13:15:49-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/4/50/531769ae4399f",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011338",
              "comics": {
                  "available": 19,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011338/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/15715",
                          "name": "Ultimate X-Men (2001) #24"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/15716",
                          "name": "Ultimate X-Men (2001) #25"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/211",
                          "name": "Ultimate X-Men (2001) #40"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/2227",
                          "name": "Ultimate X-Men (2001) #61"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/2475",
                          "name": "Ultimate X-Men (2001) #63"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/2476",
                          "name": "Ultimate X-Men (2001) #64"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/3037",
                          "name": "Ultimate X-Men (2001) #65"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/4041",
                          "name": "Ultimate X-Men (2001) #69"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/4153",
                          "name": "Ultimate X-Men (2001) #70"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/16453",
                          "name": "Ultimate X-Men (2001) #86"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20638",
                          "name": "Ultimate X-Men (2001) #91"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/20967",
                          "name": "Ultimate X-Men (2001) #93"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21177",
                          "name": "Ultimate X-Men (2001) #94"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21326",
                          "name": "Ultimate X-Men (2001) #95"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21507",
                          "name": "Ultimate X-Men (2001) #96"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21709",
                          "name": "Ultimate X-Men (2001) #97"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/23572",
                          "name": "Ultimate X-Men (2001) #100"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/15918",
                          "name": "Ultimate X-Men Annual (2005) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/5057",
                          "name": "ULTIMATE X-MEN VOL. 14: PHOENIX TPB (Trade Paperback)"
                      }
                  ],
                  "returned": 19
              },
              "series": {
                  "available": 3,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011338/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/474",
                          "name": "Ultimate X-Men (2001 - 2009)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1055",
                          "name": "Ultimate X-Men Annual (2005 - 2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1662",
                          "name": "ULTIMATE X-MEN VOL. 14: PHOENIX TPB (2006)"
                      }
                  ],
                  "returned": 3
              },
              "stories": {
                  "available": 33,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011338/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1454",
                          "name": "Ultimate X-Men (2001) #61",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1455",
                          "name": "1 of 5 - Escape of Magneto",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1458",
                          "name": "Ultimate X-Men (2001) #63",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1459",
                          "name": "3 of 5 - Magnetic North",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1460",
                          "name": "Ultimate X-Men (2001) #64",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1461",
                          "name": "4 of 5 - Magnetic North",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1462",
                          "name": "Ultimate X-Men (2001) #65",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1463",
                          "name": "5 of 5 - Magnetic North",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1470",
                          "name": "Ultimate X-Men (2001) #69",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1471",
                          "name": "1 of 3 -",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1472",
                          "name": "Ultimate X-Men (2001) #70",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/1473",
                          "name": "2 of 3 -",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/2041",
                          "name": "Ultimate X-Men (2001) #40",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/31888",
                          "name": "[UNCANNY X-MEN #416 Preview]",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/31899",
                          "name": "[UNCANNY X-MEN #416 Preview]",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/33168",
                          "name": "Sentinels 3 of 5",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/36757",
                          "name": "Ultimate X-Men Annual (2005) #1",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/36758",
                          "name": "Interior #36758",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/44259",
                          "name": "Ultimate X-Men (2001) #91",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/44260",
                          "name": "Apocalypse Now 3 of 5",
                          "type": "interiorStory"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 0,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011338/events",
                  "items": [],
                  "returned": 0
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/1/angel?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Angel_(Ultimate)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1011338/angel_ultimate?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1009153,
              "name": "Angel (Warren Worthington III)",
              "description": "",
              "modified": "2012-05-30T14:06:57-0400",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009153",
              "comics": {
                  "available": 119,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009153/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/60507",
                          "name": "All-New Wolverine (2015) #17"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21197",
                          "name": "Angel: Revelations (2008) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21345",
                          "name": "Angel: Revelations (2008) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21525",
                          "name": "Angel: Revelations (2008) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21725",
                          "name": "Angel: Revelations (2008) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/21953",
                          "name": "Angel: Revelations (2008) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/65055",
                          "name": "Astonishing X-Men (2017) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/65405",
                          "name": "Astonishing X-Men (2017) #7"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/66299",
                          "name": "Astonishing X-Men by Charles Soule Vol. 1: Life of X (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8055",
                          "name": "Champions (1975) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8066",
                          "name": "Champions (1975) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8067",
                          "name": "Champions (1975) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8068",
                          "name": "Champions (1975) #6"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8069",
                          "name": "Champions (1975) #7"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8070",
                          "name": "Champions (1975) #8"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8056",
                          "name": "Champions (1975) #10"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8058",
                          "name": "Champions (1975) #12"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8059",
                          "name": "Champions (1975) #13"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8061",
                          "name": "Champions (1975) #15"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/8063",
                          "name": "Champions (1975) #17"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 49,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009153/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/20682",
                          "name": "All-New Wolverine (2015 - 2018)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/4811",
                          "name": "Angel: Revelations (2008)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23262",
                          "name": "Astonishing X-Men (2017 - 2018)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/24018",
                          "name": "Astonishing X-Men by Charles Soule Vol. 1: Life of X (2018)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2001",
                          "name": "Champions (1975 - 1978)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/1635",
                          "name": "Decimation: Generation M (2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/3743",
                          "name": "Defenders (1972 - 1986)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22406",
                          "name": "DEFENDERS EPIC COLLECTION: ASHES, ASHES… TPB (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/30527",
                          "name": "Empyre: X-Men (2020)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2121",
                          "name": "Fantastic Four (1961 - 1998)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2012",
                          "name": "Fantastic Four Annual (1963 - 1994)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/2435",
                          "name": "Fantastic Four Omnibus Vol. 2 (2007)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/341",
                          "name": "FANTASTIC FOUR VISIONARIES: JOHN BYRNE VOL. 2 TPB (2004)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/21726",
                          "name": "Gambit Annual (2000)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/13853",
                          "name": "Gambit: From the Marvel Vault (2011)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/973",
                          "name": "Generation M (2005 - 2006)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/4819",
                          "name": "Genext (2008)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/38953",
                          "name": "Giant-Size X-Men (2024 - Present)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/23096",
                          "name": "Iceman (2017 - 2018)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/13344",
                          "name": "Iceman and Angel (2010)"
                      }
                  ],
                  "returned": 20
              },
              "stories": {
                  "available": 125,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009153/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/4058",
                          "name": "Cover #4058",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5489",
                          "name": "4 of 5 - 5XLS",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5491",
                          "name": "5 of 5 - 5XLS - Generation M",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/5992",
                          "name": "1 of 1 - The Peach Boy",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12765",
                          "name": "Fantastic Four (1961) #250",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/12766",
                          "name": "X-Factor",
                          "type": "interiorStory"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/15346",
                          "name": "Fantastic Four Annual (1963) #3",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/15347",
                          "name": "Bedlam at the Baxter Builing",
                          "type": ""
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/15379",
                          "name": "Uncanny X-Men (1963) #100",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/15602",
                          "name": "Uncanny X-Men (1963) #61",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/20434",
                          "name": "Cover #20434",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/20436",
                          "name": "Cover #20436",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/20440",
                          "name": "From Beyond the Stars...The Stranger Strikes!",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/20442",
                          "name": "Cover #20442",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/20446",
                          "name": "Cover #20446",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/20450",
                          "name": "Cover #20450",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/20456",
                          "name": "Cover #20456",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/20458",
                          "name": "Cover #20458",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/20460",
                          "name": "Cover #20460",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/20462",
                          "name": "Cover #20462",
                          "type": "cover"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 5,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009153/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/227",
                          "name": "Age of Apocalypse"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
                          "name": "Dark Reign"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
                          "name": "Fear Itself"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/316",
                          "name": "X-Men: Battle of the Atom"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/306",
                          "name": "X-Men: Schism"
                      }
                  ],
                  "returned": 5
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/characters/1/angel?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "wiki",
                      "url": "http://marvel.com/universe/Angel_(Warren_Worthington_III)?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1009153/angel_warren_worthington_iii?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          },
          {
              "id": 1017574,
              "name": "Angela (Aldrif Odinsdottir)",
              "description": "",
              "modified": "2014-11-17T17:45:37-0500",
              "thumbnail": {
                  "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/00/545a82f59dd73",
                  "extension": "jpg"
              },
              "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017574",
              "comics": {
                  "available": 38,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017574/comics",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/51201",
                          "name": "1602 Witch Hunter Angela (2015) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/56505",
                          "name": "Angela: Queen of Hel (2015) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/71308",
                          "name": "Asgardians of the Galaxy (2018) #1"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/71310",
                          "name": "Asgardians of the Galaxy (2018) #2"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/71311",
                          "name": "Asgardians of the Galaxy (2018) #3"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/71312",
                          "name": "Asgardians of the Galaxy (2018) #4"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/71313",
                          "name": "Asgardians of the Galaxy (2018) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/73994",
                          "name": "Asgardians of the Galaxy (2018) #6"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/73995",
                          "name": "Asgardians of the Galaxy (2018) #7"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/73996",
                          "name": "Asgardians of the Galaxy (2018) #8"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/73998",
                          "name": "Asgardians of the Galaxy (2018) #10"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/71309",
                          "name": "Asgardians Of The Galaxy Vol. 1: The Infinity Armada (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/43301",
                          "name": "Guardians of the Galaxy (2013) #5"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/43300",
                          "name": "Guardians of the Galaxy (2013) #6"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/43296",
                          "name": "Guardians of the Galaxy (2013) #10"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/43295",
                          "name": "Guardians of the Galaxy (2013) #11"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/60980",
                          "name": "Guardians of the Galaxy (2015) #18"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/60676",
                          "name": "GUARDIANS OF THE GALAXY VOL. 4 HC (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/60168",
                          "name": "Guardians of The Galaxy: New Guard Vol. 3 - Civil War II (Trade Paperback)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/comics/60169",
                          "name": "GUARDIANS OF THE GALAXY: NEW GUARD VOL. 3 - CIVIL WAR II TPB (Trade Paperback)"
                      }
                  ],
                  "returned": 20
              },
              "series": {
                  "available": 16,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017574/series",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/19244",
                          "name": "1602 Witch Hunter Angela (2015)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/20696",
                          "name": "Angela: Queen of Hel (2015 - 2016)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/25996",
                          "name": "Asgardians of the Galaxy (2018 - 2019)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/25997",
                          "name": "Asgardians Of The Galaxy Vol. 1: The Infinity Armada (2019)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/16410",
                          "name": "Guardians of the Galaxy (2013 - 2015)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/20465",
                          "name": "Guardians of the Galaxy (2015 - 2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22420",
                          "name": "GUARDIANS OF THE GALAXY VOL. 4 HC (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22117",
                          "name": "Guardians of The Galaxy: New Guard Vol. 3 - Civil War II (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22118",
                          "name": "GUARDIANS OF THE GALAXY: NEW GUARD VOL. 3 - CIVIL WAR II TPB (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/37429",
                          "name": "Immortal Thor (2023 - Present)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/32375",
                          "name": "Marvel's Voices: Pride (2021)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22120",
                          "name": "Mighty Thor Vol. 3: The Asgard/Shi'ar War (2017)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/22121",
                          "name": "Mighty Thor Vol. 3: The Asgard/Shi'ar War (2018)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/18681",
                          "name": "Original Sin (2014)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/27891",
                          "name": "Strikeforce (2019 - 2020)"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/series/24308",
                          "name": "Thor (2018 - 2019)"
                      }
                  ],
                  "returned": 16
              },
              "stories": {
                  "available": 38,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017574/stories",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/96952",
                          "name": "Cover #96952",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/96954",
                          "name": "Guardians of the Galaxy #10",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/96962",
                          "name": "Cover #96962",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/96964",
                          "name": "Cover #96964",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/111122",
                          "name": "cover from new series (2015) #6",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/113693",
                          "name": "ORIGINAL SIN 5.1 ",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/113708",
                          "name": "ORIGINAL SIN 5.2 (SIN, WITH DIGITAL CODE)",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/113729",
                          "name": "ORIGINAL SIN 5.3 (SIN, WITH DIGITAL CODE)",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/113773",
                          "name": "ORIGINAL SIN 5.4 (SIN, WITH DIGITAL CODE)",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/113810",
                          "name": "ORIGINAL SIN 5.5 (SIN, WITH DIGITAL CODE)",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/113979",
                          "name": "cover from 1602 Witch Hunter Angela (2015) #4",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/121290",
                          "name": "Original Sin (2014) #8 Cover",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/123865",
                          "name": "cover from Angela: Queen of Hel (2015) #5",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/130833",
                          "name": "cover from Guardians of the Galaxy: New Guard (2017)",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/130835",
                          "name": "cover from Guardians of the Galaxy: New Guard (2017)",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/130839",
                          "name": "cover from Mighty Thor (2017)",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/130841",
                          "name": "cover from Mighty Thor (2017)",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/131821",
                          "name": "cover from Guardians of the Galaxy: New Guard (2017)",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/132413",
                          "name": "cover from Guardians of the Galaxy (2015) #18",
                          "type": "cover"
                      },
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/stories/154813",
                          "name": "cover from Thor (2018) #8",
                          "type": "cover"
                      }
                  ],
                  "returned": 20
              },
              "events": {
                  "available": 1,
                  "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017574/events",
                  "items": [
                      {
                          "resourceURI": "http://gateway.marvel.com/v1/public/events/319",
                          "name": "Original Sin"
                      }
                  ],
                  "returned": 1
              },
              "urls": [
                  {
                      "type": "detail",
                      "url": "http://marvel.com/comics/characters/1017574/angela_aldrif_odinsdottir?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  },
                  {
                      "type": "comiclink",
                      "url": "http://marvel.com/comics/characters/1017574/angela_aldrif_odinsdottir?utm_campaign=apiRef&utm_source=422c32a7c4c3f9adfe3f4aef0db1a1e8"
                  }
              ]
          }
      ]
  }
};