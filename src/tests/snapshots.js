const PercyScript = require("@percy/script");
const options = { headless: false };
PercyScript.run(async (page, percySnapshot) => {
    // await page.setBypassCSP(true);
    await page.setRequestInterception(true);
    page.on("request", request => {
        console.log("request.url", request.url());
        if (
            request
                .url()
                .includes(
                    "api.stream-io-api.com/api/v1.0/enrich/feed/notification"
                )
        ) {
            request.respond({
                status: 200,
                contentType: "application/json; charset=utf-8",
                // The mocked data you want to return
                body: JSON.stringify({
                    results: [],
                    next: "",
                    duration: "6.15ms",
                    unseen: 1,
                    unread: 3
                })
            });
        } else if (
            request.url().includes("api.stream-io-api.com/api/v1.0/user")
        ) {
            request.respond({
                status: 200,
                contentType: "application/json; charset=utf-8",
                // The mocked data you want to return
                body: JSON.stringify({
                    created_at: "2020-01-16T22:22:08.249844Z",
                    updated_at: "2020-01-16T22:22:08.249844Z",
                    id: "user-one",
                    data: {
                        name: "Curious bot",
                        profileImage:
                            "https://user-images.githubusercontent.com/88735/44455162-a77b8880-a5fd-11e8-8e59-e8f52949bfb9.png"
                    },
                    duration: "0.73ms"
                })
            });
        } else if (
            request
                .url()
                .includes("api.stream-io-api.com/api/v1.0/enrich/feed/timeline")
        ) {
            request.respond({
                status: 200,
                contentType: "application/json; charset=utf-8",
                // The mocked data you want to return
                body: JSON.stringify({
                    results: [
                        {
                            actor: {
                                created_at: "2020-01-16T22:22:08.249844Z",
                                updated_at: "2020-01-16T22:22:08.249844Z",
                                id: "user-one",
                                data: {
                                    name: "Curious bot",
                                    profileImage:
                                        "https://user-images.githubusercontent.com/88735/44455162-a77b8880-a5fd-11e8-8e59-e8f52949bfb9.png"
                                }
                            },
                            attachments: {
                                files: [],
                                images: [],
                                og: {
                                    description:
                                        "The Soyuz MS-11 launched from the Baikonur Cosmodrome in Kazakhstan to the International Space Station at 6:31 a.m. EST Monday, Dec. 3 (5:31 p.m. in Baikonur...",
                                    duration: "454.45ms",
                                    favicon:
                                        "https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico",
                                    images: [
                                        {
                                            height: 720,
                                            image:
                                                "https://i.ytimg.com/vi/WKfiio7lOH0/maxresdefault.jpg",
                                            width: 1280
                                        }
                                    ],
                                    site_name: "YouTube",
                                    title:
                                        "New Crew Blasts Off Heading to Space Station Today",
                                    type: "video.other",
                                    url: "https://youtu.be/WKfiio7lOH0",
                                    videos: [
                                        {
                                            height: 720,
                                            secure_url:
                                                "https://www.youtube.com/embed/WKfiio7lOH0",
                                            type: "text/html",
                                            url:
                                                "https://www.youtube.com/embed/WKfiio7lOH0",
                                            width: 1280
                                        }
                                    ]
                                }
                            },
                            foreign_id: "",
                            id: "43c6b6aa-3930-11ea-9378-12f8ef9c949e",
                            object: "a post https://youtu.be/WKfiio7lOH0.",
                            origin: null,
                            own_reactions: {},
                            reaction_counts: { like: 0 },
                            target: "",
                            text: "a post https://youtu.be/WKfiio7lOH0.",
                            time: "2020-01-17T13:50:04.653124",
                            verb: "post"
                        },
                        {
                            actor: {
                                created_at: "2020-01-16T22:22:08.249844Z",
                                updated_at: "2020-01-16T22:22:08.249844Z",
                                id: "sadbear270",
                                data: {
                                    name: "Cody burns",
                                    profileImage:
                                        "https://randomuser.me/api/portraits/med/men/47.jpg"
                                }
                            },
                            foreign_id: "",
                            id: "a2274a7d-38ae-11ea-9dcd-12f8ef9c949e",
                            object:
                                "@tinyleopard709 let's get coffee one these days ☕",
                            origin: "user:sadbear270",
                            own_reactions: {
                                comment: [
                                    {
                                        created_at:
                                            "2020-01-16T23:20:35.997913Z",
                                        updated_at:
                                            "2020-01-16T23:20:35.997913Z",
                                        id:
                                            "25f24f4a-96fb-44b3-a5e0-9a6096297106",
                                        user_id: "user-one",
                                        user: {
                                            created_at:
                                                "2020-01-16T22:22:08.249844Z",
                                            updated_at:
                                                "2020-01-16T22:22:08.249844Z",
                                            id: "user-one",
                                            data: {
                                                name: "Curious bot",
                                                profileImage:
                                                    "https://user-images.githubusercontent.com/88735/44455162-a77b8880-a5fd-11e8-8e59-e8f52949bfb9.png"
                                            }
                                        },
                                        kind: "comment",
                                        activity_id:
                                            "a2274a7d-38ae-11ea-9dcd-12f8ef9c949e",
                                        data: { text: "Can I test again?" },
                                        parent: "",
                                        latest_children: {},
                                        children_counts: {}
                                    },
                                    {
                                        created_at:
                                            "2020-01-16T23:20:31.614263Z",
                                        updated_at:
                                            "2020-01-16T23:20:31.614263Z",
                                        id:
                                            "649fa718-4573-454d-8634-22f007a265a4",
                                        user_id: "user-one",
                                        user: {
                                            created_at:
                                                "2020-01-16T22:22:08.249844Z",
                                            updated_at:
                                                "2020-01-16T22:22:08.249844Z",
                                            id: "user-one",
                                            data: {
                                                name: "Curious bot",
                                                profileImage:
                                                    "https://user-images.githubusercontent.com/88735/44455162-a77b8880-a5fd-11e8-8e59-e8f52949bfb9.png"
                                            }
                                        },
                                        kind: "comment",
                                        activity_id:
                                            "a2274a7d-38ae-11ea-9dcd-12f8ef9c949e",
                                        data: { text: "test" },
                                        parent: "",
                                        latest_children: {},
                                        children_counts: {}
                                    }
                                ],
                                like: [
                                    {
                                        created_at:
                                            "2020-01-17T15:05:25.608095Z",
                                        updated_at:
                                            "2020-01-17T15:05:25.608095Z",
                                        id:
                                            "4f519e2f-cb05-46bd-a2c2-9bdc3c86a6d8",
                                        user_id: "user-one",
                                        user: {
                                            created_at:
                                                "2020-01-16T22:22:08.249844Z",
                                            updated_at:
                                                "2020-01-16T22:22:08.249844Z",
                                            id: "user-one",
                                            data: {
                                                name: "Curious bot",
                                                profileImage:
                                                    "https://user-images.githubusercontent.com/88735/44455162-a77b8880-a5fd-11e8-8e59-e8f52949bfb9.png"
                                            }
                                        },
                                        kind: "like",
                                        activity_id:
                                            "a2274a7d-38ae-11ea-9dcd-12f8ef9c949e",
                                        data: {},
                                        parent: "",
                                        latest_children: {},
                                        children_counts: {}
                                    }
                                ]
                            },
                            reaction_counts: { comment: 2, like: 1 },
                            target: "",
                            time: "2020-01-16T22:22:08.417036",
                            verb: "post"
                        },
                        {
                            actor: {
                                created_at: "2020-01-16T22:22:08.249844Z",
                                updated_at: "2020-01-16T22:22:08.249844Z",
                                id: "whitezebra986",
                                data: {
                                    name: "Christoffer kristensen",
                                    profileImage:
                                        "https://randomuser.me/api/portraits/med/men/59.jpg"
                                }
                            },
                            attachments: {
                                og: {
                                    description:
                                        "Why choose one when you can wear both? These energizing pairings stand out from the crowd",
                                    images: [
                                        {
                                            image:
                                                "https://www.rollingstone.com/wp-content/uploads/2018/08/GettyImages-1020376858.jpg"
                                        }
                                    ],
                                    title:
                                        "'Queen' rapper rescheduling dates to 2019 after deciding to \u0026#8220;reevaluate elements of production on the 'NickiHndrxx Tour'",
                                    url:
                                        "https://www.rollingstone.com/music/music-news/nicki-minaj-cancels-north-american-tour-with-future-714315/"
                                }
                            },
                            foreign_id: "",
                            id: "a224c4d4-38ae-11ea-9dcc-12f8ef9c949e",
                            object: "Oh snap",
                            origin: "user:whitezebra986",
                            own_reactions: {},
                            reaction_counts: { like: 0 },
                            target: "",
                            time: "2020-01-16T22:22:08.400508",
                            verb: "post"
                        },
                        {
                            actor: {
                                created_at: "2020-01-16T22:22:08.249844Z",
                                updated_at: "2020-01-16T22:22:08.249844Z",
                                id: "tinybird807",
                                data: {
                                    name: "Eddie collins",
                                    profileImage:
                                        "https://randomuser.me/api/portraits/med/men/51.jpg"
                                }
                            },
                            attachments: {
                                og: {
                                    description:
                                        "Why choose one when you can wear both? These energizing pairings stand out from the crowd",
                                    images: [
                                        {
                                            image:
                                                "https://images.wsj.net/im-21927/TOP"
                                        }
                                    ],
                                    title:
                                        "How to Pair Neutrals and Bright Colors",
                                    url:
                                        "https://graphics.wsj.com/glider/marketreport-4a039902-7e0d-4631-ab83-6cc1931c1bc6"
                                }
                            },
                            foreign_id: "",
                            id: "a2224719-38ae-11ea-9dcb-12f8ef9c949e",
                            object: "I totally agree!",
                            origin: "user:tinybird807",
                            own_reactions: {},
                            reaction_counts: {},
                            target: "",
                            time: "2020-01-16T22:22:08.384182",
                            verb: "post"
                        },
                        {
                            actor: {
                                created_at: "2020-01-16T22:22:08.249844Z",
                                updated_at: "2020-01-16T22:22:08.249844Z",
                                id: "greenmouse314",
                                data: {
                                    name: "Perry carlson",
                                    profileImage:
                                        "https://randomuser.me/api/portraits/med/men/87.jpg"
                                }
                            },
                            attachments: {
                                og: {
                                    description:
                                        "Serial entrepreneur Elon Musk wants to fundamentally change the way we live. But his path to success has been characterized by both great accomplishments and flirtations with failure.",
                                    images: [
                                        {
                                            image:
                                                "https://static01.nyt.com/images/2018/08/22/us/19xp-musk-vid-2/19xp-musk-vid-2-videoSixteenByNine1050.jpg"
                                        }
                                    ],
                                    title:
                                        "Elon Musk’s Highs and Lows: PayPal, SpaceX, Tesla",
                                    url:
                                        "https://www.nytimes.com/video/business/100000006060092/elon-musk-tesla-spacex.html"
                                }
                            },
                            foreign_id: "",
                            id: "a2200384-38ae-11ea-a690-0a0d7a10423a",
                            object: "I enjoyed watching this",
                            origin: "user:greenmouse314",
                            own_reactions: {},
                            reaction_counts: {},
                            target: "",
                            time: "2020-01-16T22:22:08.369344",
                            verb: "post"
                        },
                        {
                            actor: {
                                created_at: "2020-01-16T22:22:08.249844Z",
                                updated_at: "2020-01-16T22:22:08.249844Z",
                                id: "brownkoala508",
                                data: {
                                    name: "Gina pierce",
                                    profileImage:
                                        "https://randomuser.me/api/portraits/med/women/4.jpg"
                                }
                            },
                            foreign_id: "",
                            id: "a21d9b2d-38ae-11ea-a68f-0a0d7a10423a",
                            image:
                                "https://pbs.twimg.com/media/DlD9f0-XgAAD_rU.jpg",
                            object: "sad, I wanted drama",
                            origin: "user:brownkoala508",
                            own_reactions: {},
                            reaction_counts: {},
                            target: "",
                            time: "2020-01-16T22:22:08.353566",
                            verb: "reply"
                        },
                        {
                            actor: {
                                created_at: "2020-01-16T22:22:08.249844Z",
                                updated_at: "2020-01-16T22:22:08.249844Z",
                                id: "goldenelephant669",
                                data: {
                                    name: "Joris dumas",
                                    profileImage:
                                        "https://randomuser.me/api/portraits/med/men/89.jpg"
                                }
                            },
                            foreign_id: "",
                            id: "a21ad807-38ae-11ea-9dca-12f8ef9c949e",
                            object:
                                "I just realized that I've met of fan of every team in the #NFL in real life...except a Jaguars fan. I've never had a real encounter with one...💁",
                            origin: "user:goldenelephant669",
                            own_reactions: {},
                            reaction_counts: {},
                            target: "",
                            time: "2020-01-16T22:22:08.335463",
                            verb: "post"
                        },
                        {
                            actor: {
                                created_at: "2020-01-16T22:22:08.249844Z",
                                updated_at: "2020-01-16T22:22:08.249844Z",
                                id: "tinyleopard709",
                                data: {
                                    name: "Roland carroll",
                                    profileImage:
                                        "https://randomuser.me/api/portraits/med/men/5.jpg"
                                }
                            },
                            foreign_id: "post:2",
                            id: "a21861ad-38ae-11ea-9dc9-12f8ef9c949e",
                            image:
                                "https://images.unsplash.com/photo-1516544820488-4a99efa70a58?ixlib=rb-0.3.5\u0026ixid=eyJhcHBfaWQiOjEyMDd9\u0026s=0ff2b499992b568b957a0a9636540ed2\u0026dpr=1\u0026auto=format\u0026fit=crop\u0026w=1000\u0026q=80\u0026cs=tinysrgb",
                            object: "sad, I wanted drama",
                            origin: "user:tinyleopard709",
                            own_reactions: {},
                            reaction_counts: {},
                            target: "",
                            time: "2020-01-16T22:22:08.319326",
                            verb: "reply"
                        },
                        {
                            actor: {
                                created_at: "2020-01-16T22:22:08.249844Z",
                                updated_at: "2020-01-16T22:22:08.249844Z",
                                id: "happymeercat189",
                                data: {
                                    name: "Adam sanchez",
                                    profileImage:
                                        "https://randomuser.me/api/portraits/med/men/79.jpg"
                                }
                            },
                            foreign_id: "post:1",
                            id: "a2162aad-38ae-11ea-a68e-0a0d7a10423a",
                            object:
                                "I just realized that I've met of fan of every team in the #NFL in real life...except a Jaguars fan. I've never had a real encounter with one...💁",
                            origin: "user:happymeercat189",
                            own_reactions: {},
                            reaction_counts: {},
                            target: "",
                            time: "2020-01-16T22:22:08.304811",
                            verb: "post"
                        },
                        {
                            actor: {
                                created_at: "2020-01-16T22:22:08.249844Z",
                                updated_at: "2020-01-16T22:22:08.249844Z",
                                id: "bigtiger788",
                                data: {
                                    name: "Samuel berger",
                                    profileImage:
                                        "https://randomuser.me/api/portraits/med/men/6.jpg"
                                }
                            },
                            attachments: {
                                og: {
                                    description:
                                        "We are in a Simulation - Elon Musk",
                                    images: [],
                                    site_name: "YouTube",
                                    title: "We are in a Simulation - Elon Musk",
                                    type: "video.other",
                                    url:
                                        "https://www.youtube.com/watch?v=xBKRuI2zHp0",
                                    videos: [
                                        {
                                            height: "360",
                                            secure_url:
                                                "https://www.youtube.com/embed/xBKRuI2zHp0",
                                            type: "text/html",
                                            width: "640"
                                        }
                                    ]
                                }
                            },
                            foreign_id: "",
                            id: "a212f3e5-38ae-11ea-9dc8-12f8ef9c949e",
                            object: "That would be pretty depressing!",
                            origin: "user:bigtiger788",
                            own_reactions: {},
                            reaction_counts: {},
                            target: "",
                            time: "2020-01-16T22:22:08.283748",
                            verb: "post"
                        }
                    ],
                    next:
                        "/api/v1.0/enrich/feed/timeline/user-one/?api_key=jd5j24rnypem\u0026id_lt=a212f3e5-38ae-11ea-9dc8-12f8ef9c949e\u0026limit=10",
                    duration: "16.08ms"
                })
            });
        } else if (request.url().includes("localhost")) {
            request.continue();
        } else {
            request.abort();
        }
    });
    await page.goto("http://localhost:8080/", { waitUntil: "networkidle0" });
    // ensure the page has loaded before capturing a snapshot
    await percySnapshot("homepage");
}, options);
