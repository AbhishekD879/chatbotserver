const express=require("express");
const router=express.Router();



const songEmotionMa={
    "Anger":[
        {
            "name": "Montania",
            "uri": "spotify:track:6t3e2UfHXGVdxXJhPYj6Lg",
            "artist": "Calma Interiore",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851f403be9a1d371128320a4472"
        },
        {
            "name": "Ethereal",
            "uri": "spotify:track:1E8X81mDNXxPlzIWGdwFmg",
            "artist": "Joanna Neriah",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851f6f7edf1e9765627266e3ff9"
        },
        {
            "name": "Neblinoso",
            "uri": "spotify:track:6uZF7xC32ewhpsm36IaM5T",
            "artist": "Cameron Sinosa",
            "imgUri": "https://i.scdn.co/image/ab67616d000048511f6c146de2f70f7c18a54dc0"
        },
        {
            "name": "Dreaminess",
            "uri": "spotify:track:6FTI1GirXye67U41XkzR2h",
            "artist": "Miesha Berens",
            "imgUri": "https://i.scdn.co/image/ab67616d000048519a5382117b6eabc28b9217d8"
        },
        {
            "name": "Center Of Attention",
            "uri": "spotify:track:1ngTQ4T37HeS0NplRUTX24",
            "artist": "John Sentinela",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851195b36a7ece8ac4ed0753ee9"
        },
        {
            "name": "After the storm",
            "uri": "spotify:track:3WuOYQvrHVAANn735uiw1k",
            "artist": "Glimmolo",
            "imgUri": "https://i.scdn.co/image/ab67616d000048516c9bd90699fef5aeb1d28b8e"
        },
        {
            "name": "Underview",
            "uri": "spotify:track:5xcgi9ta3wVzBFktltBLMo",
            "artist": "Eldrelder",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851c484d6b05d6c8912cc4e93d5"
        },
        {
            "name": "Mixture",
            "uri": "spotify:track:0OXgaVgiSiuPYjPRiFSyiY",
            "artist": "Matt Deep",
            "imgUri": "https://i.scdn.co/image/ab67616d000048512f41a482005e7d11740e246b"
        },
        {
            "name": "in the hide",
            "uri": "spotify:track:2FojeY4xeZC2wrwIgTDDVU",
            "artist": "Rossyx",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851bd9bcfee09a70af054a2ee61"
        },
        {
            "name": "Aura",
            "uri": "spotify:track:2quE9M1AL9B7T6iSjzeT0o",
            "artist": "Zion Llama",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485157cf285c4188618077658f1a"
        },
        {
            "name": "Evolving Dreams",
            "uri": "spotify:track:6uFpwigsKJ1gDTaDjeabIN",
            "artist": "Ty Davies",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851287c8d875f158c7d7509a1fb"
        },
        {
            "name": "Dreams Dissolving",
            "uri": "spotify:track:0MQm7MYFD4ZBocFv0AgS5L",
            "artist": "Mathilda Skonare Karlsson",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851ecae92a3532d9733a09f1238"
        },
        {
            "name": "Whalus",
            "uri": "spotify:track:0SpMQOXBNSSrFD0n7xIxL4",
            "artist": "Hibisc",
            "imgUri": "https://i.scdn.co/image/ab67616d000048510c1f607a215a283a63af2072"
        },
        {
            "name": "Silhouettes",
            "uri": "spotify:track:4wGackeK3YeTnh1Mo0dB2e",
            "artist": "Lucas Delphy",
            "imgUri": "https://i.scdn.co/image/ab67616d000048519f9596567b613f8966116666"
        },
        {
            "name": "My Heart",
            "uri": "spotify:track:4cAGCkkLv77F0VWFPkQxUG",
            "artist": "Bella Mie",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851bbc1c075d5a4f07afa9a2897"
        },
        {
            "name": "Aurora",
            "uri": "spotify:track:3laOoR0JIzPzpuxYb8FATY",
            "artist": "fast and sea",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485134c45eaaaae8bf3cf6a1879e"
        },
        {
            "name": "Elliptical Orbit",
            "uri": "spotify:track:4Bu9EvfqsB5nms68U50oqT",
            "artist": "Velvet Garden",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851b4fb0ed5976cffacb7668620"
        },
        {
            "name": "Still Life",
            "uri": "spotify:track:7aK1caHaXe63BtAoIFvN2h",
            "artist": "De Moi",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485178d8bce3712a5e2bbca2448e"
        },
        {
            "name": "Authentic",
            "uri": "spotify:track:4WF88Pk0JMP7uOpdrd0bDL",
            "artist": "Chév Asto",
            "imgUri": "https://i.scdn.co/image/ab67616d000048513aee2e09745343cd0efd1b72"
        },
        {
            "name": "Soft Answers",
            "uri": "spotify:track:5cNxtUwvAsml2dxp4zpoVa",
            "artist": "Neoline Ewing",
            "imgUri": "https://i.scdn.co/image/ab67616d000048514b4fbfa2c0fd5fd0591a7dc4"
        },
        {
            "name": "Weaving Dreams",
            "uri": "spotify:track:3rXBtD5ukfXblk5F1aNF4Z",
            "artist": "Hanna Lindgren",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851607085a45825cad629fc3a00"
        },
        {
            "name": "Consciencia",
            "uri": "spotify:track:797PxzByzDMw8s2fpTRPuJ",
            "artist": "Lidia Peralta",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485167120d7ec57f6978afb2e33d"
        },
        {
            "name": "In Solitude",
            "uri": "spotify:track:4rEHRykxSQvP6mA23Umt71",
            "artist": "Restorative",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851da07d4223ea05d3964ed0a92"
        },
        {
            "name": "apoapsis",
            "uri": "spotify:track:4HeGTGqUfgIA98HEkIWTp2",
            "artist": "our distant worlds",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485180b704b029f14a3c5d7b2a5f"
        },
        {
            "name": "Rooted",
            "uri": "spotify:track:3Ac6RvFQVb4TMY4rjGLS2Y",
            "artist": "Jordan Beggs",
            "imgUri": "https://i.scdn.co/image/ab67616d000048510fbcfea6b55e5c994081ce45"
        },
        {
            "name": "Floating Mind",
            "uri": "spotify:track:4LhT34N5XqFSNlNV6z9S1M",
            "artist": "Boris Rosenbaum",
            "imgUri": "https://i.scdn.co/image/ab67616d000048518a28b8d44f975d0a56c636f9"
        },
        {
            "name": "Essentials",
            "uri": "spotify:track:1GJb1W2u1XOC4NnTprGsGk",
            "artist": "River Hall",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485146ad77fd2d9545635e19658f"
        },
        {
            "name": "What Matters Most",
            "uri": "spotify:track:3rPFA1lIlvYgmQbblz3sDp",
            "artist": "Nathaniel Rembrandt",
            "imgUri": "https://i.scdn.co/image/ab67616d000048515af51ed2620a4901481ecfdc"
        },
        {
            "name": "Metric",
            "uri": "spotify:track:4zSOtBBAs9EyMUpNwbp6ta",
            "artist": "Ervin Alba",
            "imgUri": "https://i.scdn.co/image/ab67616d000048519061818ca5b50c37179bc3b9"
        },
        {
            "name": "Carpe Noctem",
            "uri": "spotify:track:027030DBi749hu0tVBAFgX",
            "artist": "Franke Williums",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485108ca697c9e4486d4d48f2c7b"
        },
        {
            "name": "Tonals",
            "uri": "spotify:track:2H9IPI2Hu7ctIzPcoaACRC",
            "artist": "Night Songs",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851ab1ca21cb91b41dc25952cc2"
        },
        {
            "name": "Pure And Simple",
            "uri": "spotify:track:4r5bGfbWE7xqjeGT6b7JqX",
            "artist": "Edmund’s Oasis",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485175f1e434be1e6d5a36a95d90"
        },
        {
            "name": "Elemental Control",
            "uri": "spotify:track:6JMQQ8Y7ALaPBJJguEETbX",
            "artist": "Gates of Heaven",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485154c11caff6f54bf9f4d80765"
        },
        {
            "name": "For Simplicity's Sake",
            "uri": "spotify:track:6pQxeKnVSxdasJR9PEfFom",
            "artist": "Chrastigel",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485167d36ef4caf8526df65362d3"
        },
        {
            "name": "Passage",
            "uri": "spotify:track:7p5F5sN8xdUSxMjUw8Kyk2",
            "artist": "The Nowhows",
            "imgUri": "https://i.scdn.co/image/ab67616d000048510cb32cdc0a3af15fc5f72adb"
        },
        {
            "name": "Hiatus",
            "uri": "spotify:track:7ykoFQqjGcAOutbeVmg7O6",
            "artist": "Lost Wings",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485196ed7dcf46c6d63e3abaeb2d"
        },
        {
            "name": "Epiphany",
            "uri": "spotify:track:7etqolbqNqTmybDTIN77pt",
            "artist": "Aari Kumar",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851b7c3fb8f32c91843a4a4e1cc"
        },
        {
            "name": "Upwards",
            "uri": "spotify:track:044ltj4MTVLeCHXQZX1lFO",
            "artist": "Aiyden",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851bbe9fb1ccdbf43d5e791262f"
        },
        {
            "name": "Stillness of Mind",
            "uri": "spotify:track:5NL5Ez564SBRCpaaxB89CP",
            "artist": "Taylor Dawson",
            "imgUri": "https://i.scdn.co/image/ab67616d000048517790f9cba95276bd208d1a84"
        },
        {
            "name": "Stellar Constellations",
            "uri": "spotify:track:2XFQQ4XE7VsyBrNyIJ6DII",
            "artist": "X-Genie",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851125e0e514ccf110fe56e6099"
        },
        {
            "name": "Just In View",
            "uri": "spotify:track:5OJoZKBKLoJACasfMrKrCv",
            "artist": "Euloria",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851743acc7dc1dab11eea7b796c"
        },
        {
            "name": "Paralian",
            "uri": "spotify:track:2tEsGZfscyYYnHF7exJFIA",
            "artist": "Valérian Christophe",
            "imgUri": "https://i.scdn.co/image/ab67616d000048513bbed22826aaf99d3b7cd1c9"
        },
        {
            "name": "Reticence",
            "uri": "spotify:track:1VLKeNy3qUe8MNvejjTtoy",
            "artist": "Fiona Kolev",
            "imgUri": "https://i.scdn.co/image/ab67616d000048518d8db562f0d30d7232e786c7"
        },
        {
            "name": "En Route",
            "uri": "spotify:track:3FTgMfHOZNjSf4phnnkyhm",
            "artist": "Rosetta Arroyo",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851257a058c084b3981eed0b661"
        },
        {
            "name": "Miraculous",
            "uri": "spotify:track:39klOrreaNPjsYeh1zTFjh",
            "artist": "Muh Re",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851e79da2ff1a73dc4f56fa8cc1"
        },
        {
            "name": "Cuori Fragili",
            "uri": "spotify:track:1vDaVBhKUdQoif8v00iVgQ",
            "artist": "Victor Mancuso",
            "imgUri": "https://i.scdn.co/image/ab67616d000048513d86bbefd9da411bfd8005c8"
        },
        {
            "name": "Secret Message",
            "uri": "spotify:track:6hF7fW0UptdNRovONZT3JJ",
            "artist": "Clouds of Calm",
            "imgUri": "https://i.scdn.co/image/ab67616d000048519d791228b35a9ab356222bd9"
        },
        {
            "name": "Across The Purple Expanse",
            "uri": "spotify:track:1nh7NOJDfy3oewkGM6u08b",
            "artist": "Richter Gravitas",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485131c2527d0dba1f1bba786f79"
        },
        {
            "name": "Luminous Corridor",
            "uri": "spotify:track:1IIJYx2RQFNrHO2X9868LD",
            "artist": "Elevatissimo",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851a4a27ba0848e1b5d272548fc"
        },
        {
            "name": "Dusk Sermons",
            "uri": "spotify:track:4eoA6gqXBqpCuCemOineDh",
            "artist": "Le Palade",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851398846ceafefc0b5c9872004"
        }
    ],
    "Fear":[
        {
            "name": "Sunset Lover",
            "uri": "spotify:track:0hNduWmlWmEmuwEFcYvRu1",
            "artist": "Petit Biscuit",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851014080d39d56c94c0b285362"
        },
        {
            "name": "Demons",
            "uri": "spotify:track:3LlAyCYU26dvFZBDUIMb7a",
            "artist": "Imagine Dragons",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851b2b2747c89d2157b0b29fb6a"
        },
        {
            "name": "Hey There Delilah - Bonus Track",
            "uri": "spotify:track:3DWOTqMQGp5q75fnVsWwaN",
            "artist": "Plain White T's",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851596eb3b2abe78e33702b657f"
        },
        {
            "name": "Don't Be A Fool",
            "uri": "spotify:track:7msCKNrI0vZw9H4MIgLnAh",
            "artist": "Shawn Mendes",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851ea3ef7697cfd5705b8f47521"
        },
        {
            "name": "ocean eyes",
            "uri": "spotify:track:2uIX8YMNjGMD7441kqyyNU",
            "artist": "Billie Eilish",
            "imgUri": "https://i.scdn.co/image/ab67616d000048512cafcdd985630d72594ecc49"
        },
        {
            "name": "Banana Pancakes",
            "uri": "spotify:track:451GvHwY99NKV4zdKPRWmv",
            "artist": "Jack Johnson",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485106b42768ebe736eec21336ea"
        },
        {
            "name": "Robbers",
            "uri": "spotify:track:06cCziAHtDg6pcsidZHu03",
            "artist": "The 1975",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851ebcc3ef64dbef8acb47e2960"
        },
        {
            "name": "The Night We Met",
            "uri": "spotify:track:0QZ5yyl6B6utIWkxeBDxQN",
            "artist": "Lord Huron",
            "imgUri": "https://i.scdn.co/image/ab67616d000048519d2efe43d5b7ebc7cb60ca81"
        },
        {
            "name": "CAN'T STOP THE FEELING! - Film Version",
            "uri": "spotify:track:4sQmCQUZcnBPaVm4dEUKv7",
            "artist": "Justin Timberlake",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851d965d29d7dcf46ade5a8a7e4"
        },
        {
            "name": "ready now",
            "uri": "spotify:track:6FBe4eVw7wV48G3iijUbmj",
            "artist": "Amistat",
            "imgUri": "https://i.scdn.co/image/ab67616d000048519685eec935a47a969c3703f9"
        },
        {
            "name": "Nevermind",
            "uri": "spotify:track:63SevszngYpZOwf63o61K4",
            "artist": "Dennis Lloyd",
            "imgUri": "https://i.scdn.co/image/ab67616d000048514dbdd4d3c69bec0d471fc479"
        },
        {
            "name": "Ohio - filous Remix",
            "uri": "spotify:track:6W4GTXLYX8HkmZGmVkfrSC",
            "artist": "Damien Jurado",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851fdffcbc3454866436ac25d99"
        },
        {
            "name": "Night Trouble",
            "uri": "spotify:track:5LLtNp8qc3NaCIieZ2W4Dk",
            "artist": "Petit Biscuit",
            "imgUri": "https://i.scdn.co/image/ab67616d000048511b936cdd2a96870cc4e9278d"
        },
        {
            "name": "Jesus in LA",
            "uri": "spotify:track:0uLPKDuIhkIhttiwezNdiG",
            "artist": "Alec Benjamin",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851ee0232b590932e81529781e1"
        },
        {
            "name": "everything i wanted",
            "uri": "spotify:track:3ZCTVFBt2Brf31RLEnCkWJ",
            "artist": "Billie Eilish",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851f2248cf6dad1d6c062587249"
        },
        {
            "name": "Heartbeats",
            "uri": "spotify:track:5YqpHuXpFjDVZ7tY1ClFll",
            "artist": "José González",
            "imgUri": "https://i.scdn.co/image/ab67616d000048511017779b8f5fe0ccd77bf886"
        },
        {
            "name": "death bed (coffee for your head)",
            "uri": "spotify:track:7eJMfftS33KTjuF7lTsMCx",
            "artist": "Powfu",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851bf01fd0986a195d485922167"
        },
        {
            "name": "It's You",
            "uri": "spotify:track:5DqdesEfbRyOlSS3Tf6c29",
            "artist": "Ali Gatie",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485150a744f0ef5c3e260d9de720"
        },
        {
            "name": "Slow Dancing In The Rain at The End of The World",
            "uri": "spotify:track:0uuxD03pyHLKKuIBG6I9v6",
            "artist": "Jack Be",
            "imgUri": "https://i.scdn.co/image/ab67616d000048516e48a2e68a0e44623a844a2f"
        },
        {
            "name": "Jocelyn Flores",
            "uri": "spotify:track:7m9OqQk4RVRkw9JJdeAw96",
            "artist": "XXXTENTACION",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851203c89bd4391468eea4cc3f5"
        },
        {
            "name": "Let Her Go",
            "uri": "spotify:track:0JmiBCpWc1IAc0et7Xm7FL",
            "artist": "Passenger",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851a7c10595167c713a2df0f187"
        },
        {
            "name": "Don't Panic",
            "uri": "spotify:track:2QhURnm7mQDxBb5jWkbDug",
            "artist": "Coldplay",
            "imgUri": "https://i.scdn.co/image/ab67616d000048513d92b2ad5af9fbc8637425f0"
        },
        {
            "name": "New Slang - 2021 Remaster",
            "uri": "spotify:track:0NslHuacjxQYfUTOW3HCIV",
            "artist": "The Shins",
            "imgUri": "https://i.scdn.co/image/ab67616d000048514205b816277c7f9dba098d28"
        },
        {
            "name": "I Will Follow You into the Dark",
            "uri": "spotify:track:3kZC0ZmFWrEHdUCmUqlvgZ",
            "artist": "Death Cab for Cutie",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851c985bcc18dd81da80839e5a9"
        },
        {
            "name": "ily (i love you baby) (feat. Emilee)",
            "uri": "spotify:track:62aP9fBQKYKxi7PDXwcUAS",
            "artist": "Surf Mesa",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851b3de5764cc02f94714487c86"
        },
        {
            "name": "First Day of My Life",
            "uri": "spotify:track:0eBryM7ePQH3Klt3jz8xZd",
            "artist": "Bright Eyes",
            "imgUri": "https://i.scdn.co/image/ab67616d000048518eded59eb143ee6000a77c62"
        },
        {
            "name": "i'm so tired...",
            "uri": "spotify:track:4vjpLMyL3ZO6aphdYr8XYw",
            "artist": "Lauv",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485136b12a4082f11d16a519b964"
        },
        {
            "name": "Beauty Hurts",
            "uri": "spotify:track:0CfAlaFFXVlA4bD6vWa6z8",
            "artist": "Jack Be",
            "imgUri": "https://i.scdn.co/image/ab67616d000048516e48a2e68a0e44623a844a2f"
        },
        {
            "name": "How Could You Leave Us",
            "uri": "spotify:track:10bt2wAkFgCWRCEOyAyWT9",
            "artist": "NF",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485114c95b3975386061f46f3983"
        },
        {
            "name": "Stay With Me",
            "uri": "spotify:track:5Nm9ERjJZ5oyfXZTECKmRt",
            "artist": "Sam Smith",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851b11bdc91cb9ac6b14f5c1dae"
        },
        {
            "name": "lovely (with Khalid)",
            "uri": "spotify:track:0u2P5u6lvoDfwTYjAADbn4",
            "artist": "Billie Eilish",
            "imgUri": "https://i.scdn.co/image/ab67616d000048518a3f0a3ca7929dea23cd274c"
        },
        {
            "name": "the remedy for a broken heart (why am I so in love)",
            "uri": "spotify:track:4UKCKdYiLN6IMA5ZESUTL7",
            "artist": "XXXTENTACION",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851806c160566580d6335d1f16c"
        },
        {
            "name": "Who? (feat. Shiloh Dynasty)",
            "uri": "spotify:track:1F0a3Au8NIpoRP7PVdO1YR",
            "artist": "TSUKI",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851f906b633484d7497fd09fbfd"
        },
        {
            "name": "A Little Too Much",
            "uri": "spotify:track:1T7AiFL9ruKKwlONN35Vh0",
            "artist": "Shawn Mendes",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851d26246b23c8bfa8ce543b3bb"
        },
        {
            "name": "Bad Day",
            "uri": "spotify:track:0mUyMawtxj1CJ76kn9gIZK",
            "artist": "Daniel Powter",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851d5d74dc15f88ec6e02c7378d"
        },
        {
            "name": "Let Me Down Slowly",
            "uri": "spotify:track:2qxmye6gAegTMjLKEBoR3d",
            "artist": "Alec Benjamin",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851459d675aa0b6f3b211357370"
        },
        {
            "name": "ALONE TOGETHER",
            "uri": "spotify:track:1AorIVSHo531Rl5G41fc3F",
            "artist": "Jack Be",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851b4fc911863f370ae084347c5"
        },
        {
            "name": "Get You The Moon (feat. Snøw)",
            "uri": "spotify:track:4ZLzoOkj0MPWrTLvooIuaa",
            "artist": "Kina",
            "imgUri": "https://i.scdn.co/image/ab67616d000048510a64e2680bbc44107022e326"
        },
        {
            "name": "Sweet Creature",
            "uri": "spotify:track:5kRPPEWFJIMox5qIkQkiz5",
            "artist": "Harry Styles",
            "imgUri": "https://i.scdn.co/image/ab67616d000048516c619c39c853f8b1d67b7859"
        },
        {
            "name": "Someone You Loved",
            "uri": "spotify:track:2TIlqbIneP0ZY1O0EzYLlc",
            "artist": "Lewis Capaldi",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851b280aea74eef855675d7b93b"
        },
        {
            "name": "comethru",
            "uri": "spotify:track:18uwL0vNUanqZH0ro2QcOP",
            "artist": "Jeremy Zucker",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851cb16227d90152c2a5022bba1"
        },
        {
            "name": "Iris",
            "uri": "spotify:track:6Qyc6fS4DsZjB2mRW9DsQs",
            "artist": "The Goo Goo Dolls",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851eda9478c39a21e1cdc6609ca"
        },
        {
            "name": "Let It Go",
            "uri": "spotify:track:13HVjjWUZFaWilh2QUJKsP",
            "artist": "James Bay",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851b36f5e7575a59b21aef432f2"
        },
        {
            "name": "Porcelain",
            "uri": "spotify:track:2UKYMN7VnsQo40n0qCt6Sa",
            "artist": "Moby",
            "imgUri": "https://i.scdn.co/image/ab67616d000048514964b63a3b440fa58bb9d09e"
        },
        {
            "name": "Unsteady",
            "uri": "spotify:track:7lGKEWMXVWWTt3X71Bv44I",
            "artist": "X Ambassadors",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485152e8aa3275f7a3ee9c1e3628"
        },
        {
            "name": "Happening",
            "uri": "spotify:track:5Fl48pGA5WFGOoCY0iPSvM",
            "artist": "Audri",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851f754b4189740ebcd399d50a8"
        },
        {
            "name": "Waves",
            "uri": "spotify:track:6w8pFOKn42O418qwcQElZ3",
            "artist": "Dean Lewis",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851a787f718fb485b66d6219247"
        },
        {
            "name": "Slide Away",
            "uri": "spotify:track:44ADyYoY5liaRa3EOAl4uf",
            "artist": "Miley Cyrus",
            "imgUri": "https://i.scdn.co/image/ab67616d000048512bba357383c6f9dbb5112392"
        },
        {
            "name": "Best Part (feat. H.E.R.)",
            "uri": "spotify:track:1RMJOxR6GRPsBHL8qeC2ux",
            "artist": "Daniel Caesar",
            "imgUri": "https://i.scdn.co/image/ab67616d000048513138f891f3075c9c5d944037"
        },
        {
            "name": "changes",
            "uri": "spotify:track:7AFASza1mXqntmGtbxXprO",
            "artist": "XXXTENTACION",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851806c160566580d6335d1f16c"
        }
    ],
    "Joy":[
        {
            "name": "Hula Hoop",
            "uri": "spotify:track:07AiWpzE3B8aAuFAIfrlQ7",
            "artist": "OMI",
            "imgUri": "https://i.scdn.co/image/ab67616d000048511c61cec78c70409b783d1480"
        },
        {
            "name": "S&M",
            "uri": "spotify:track:7ySUcLPVX7KudhnmNcgY2D",
            "artist": "Rihanna",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485131548865f7c729290b96c794"
        },
        {
            "name": "CAN'T STOP THE FEELING! (from DreamWorks Animation's \"TROLLS\")",
            "uri": "spotify:track:1WkMMavIMc4JZ8cfMmxHkI",
            "artist": "Justin Timberlake",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851d965d29d7dcf46ade5a8a7e4"
        },
        {
            "name": "C'est La Vie",
            "uri": "spotify:track:0P6CPJrNJ1Zt755CQTWg3S",
            "artist": "B*Witched",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851d304bce5fa67ae430a9ac558"
        },
        {
            "name": "I Kissed A Girl",
            "uri": "spotify:track:005lwxGU1tms6HGELIcUv9",
            "artist": "Katy Perry",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851cd3978ebe35d93a07249b97f"
        },
        {
            "name": "Peanut Butter Jelly",
            "uri": "spotify:track:3aIhJDHxr1kgTSnutJxPTH",
            "artist": "Galantis",
            "imgUri": "https://i.scdn.co/image/ab67616d000048512b517912fd69652ff10d8e11"
        },
        {
            "name": "Happy - From \"Despicable Me 2\"",
            "uri": "spotify:track:60nZcImufyMA1MKQY3dcCH",
            "artist": "Pharrell Williams",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851e8107e6d9214baa81bb79bba"
        },
        {
            "name": "Ai Se Eu Te Pego - Ao Vivo",
            "uri": "spotify:track:46aIq2GKW7Vr6i4g2Vvycd",
            "artist": "Michel Teló",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851f03e65bf348f8bc52f72d8d6"
        },
        {
            "name": "Solo Dance",
            "uri": "spotify:track:3R6dPfF2yBO8mHySW1XDAa",
            "artist": "Martin Jensen",
            "imgUri": "https://i.scdn.co/image/ab67616d000048516b5f7f452f8443896ab8347c"
        },
        {
            "name": "Without You",
            "uri": "spotify:track:6R6ux6KaKrhAg2EIB2krdU",
            "artist": "Parachute",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851bf4ed2df35e0f3a81bec4991"
        },
        {
            "name": "Let's Talk About Sex",
            "uri": "spotify:track:6hTBP6QLwJdxbKyLlLXrGo",
            "artist": "Salt-N-Pepa",
            "imgUri": "https://i.scdn.co/image/ab67616d000048512cdf80d702f69bfebaa6af87"
        },
        {
            "name": "The Most Beautiful Girl In the World",
            "uri": "spotify:track:0aPaGIX2QIMAH5SMp0VEMe",
            "artist": "Prince",
            "imgUri": "https://i.scdn.co/image/ab67616d000048516a4175046856b90a9b5d67a1"
        },
        {
            "name": "Bang Bang",
            "uri": "spotify:track:0puf9yIluy9W0vpMEUoAnN",
            "artist": "Jessie J",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851930f686fe89425c7b6bf9a7d"
        },
        {
            "name": "How Do You Do!",
            "uri": "spotify:track:4Hn14NabX651eOOzsLL8Uc",
            "artist": "Roxette",
            "imgUri": "https://i.scdn.co/image/ab67616d000048516da93f685dcd77f30276a5e7"
        },
        {
            "name": "King",
            "uri": "spotify:track:5Z3zRrMIJk7CVpfcLsM9wD",
            "artist": "Years & Years",
            "imgUri": "https://i.scdn.co/image/ab67616d000048511b540c6520c468dfc0171a60"
        },
        {
            "name": "Telephone",
            "uri": "spotify:track:7rl7ao5pb9BhvAzPdWStxi",
            "artist": "Lady Gaga",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851bfd247438980173d32fd5ba8"
        },
        {
            "name": "Man! I Feel Like A Woman!",
            "uri": "spotify:track:6sxptembJVty4sNtcPMAVz",
            "artist": "Shania Twain",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851aaf012d56b8c72658da6c45f"
        },
        {
            "name": "Macarena - Bayside Boys Remix",
            "uri": "spotify:track:07DcH2UllHvVRKjD2HEJuC",
            "artist": "Los Del Rio",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485145d14c0fbb21667e3d5fecb9"
        },
        {
            "name": "Get the Party Started",
            "uri": "spotify:track:02jcEwywffn3Tsb48fXmlW",
            "artist": "P!nk",
            "imgUri": "https://i.scdn.co/image/ab67616d000048519da93c573c5ce2d9deb98e4f"
        },
        {
            "name": "All 'Bout the Money",
            "uri": "spotify:track:0rYiRqCAEbLHf1pCryJU9q",
            "artist": "Meja",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851cb732a2f1eabcfba42bb0ec8"
        },
        {
            "name": "Easy Love",
            "uri": "spotify:track:5s7xgzXtmY4gMjeSlgisjy",
            "artist": "Sigala",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851681d6da9a0ab5ff23fadf0f9"
        },
        {
            "name": "Coco Jamboo",
            "uri": "spotify:track:5fRvePkRGdpn2nKacG7I6d",
            "artist": "Mr. President",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851880fc46436bd0a7134c6ffbc"
        },
        {
            "name": "Drive By",
            "uri": "spotify:track:0KAiuUOrLTIkzkpfpn9jb9",
            "artist": "Train",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851bde344cc54eedc35050f4c61"
        },
        {
            "name": "Something Just Like This",
            "uri": "spotify:track:1dNIEtp7AY3oDAKCGg2XkH",
            "artist": "The Chainsmokers",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851f79b7f08426e2899a832d3e6"
        },
        {
            "name": "The Motown Song (with The Temptations)",
            "uri": "spotify:track:6SxbEd5bMcRwgYwlBJ3aT0",
            "artist": "Rod Stewart",
            "imgUri": "https://i.scdn.co/image/ab67616d000048514c782935ead3b4bfccc946ae"
        },
        {
            "name": "Mmm Yeah (feat. Pitbull)",
            "uri": "spotify:track:2n3CaPGPLYnYAvTEwKCX8t",
            "artist": "Austin Mahone",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851b8509a3d905deebb1c9232fb"
        },
        {
            "name": "Dance Monkey",
            "uri": "spotify:track:2N8m6CYs74qQO4mjVcXO30",
            "artist": "Tones And I",
            "imgUri": "https://i.scdn.co/image/ab67616d000048518e8197111f9d57793a5e7eff"
        },
        {
            "name": "Blurred Lines",
            "uri": "spotify:track:0n4bITAu0Y0nigrz3MFJMb",
            "artist": "Robin Thicke",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851bf4733171d920f2a62b24713"
        },
        {
            "name": "Inner Smile",
            "uri": "spotify:track:7zTbBG1yo6VUHbcqT2pAke",
            "artist": "Texas",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851dfe3fe3ce72f6f66835b4613"
        },
        {
            "name": "I Don't Like It, I Love It (feat. Robin Thicke & Verdine White)",
            "uri": "spotify:track:2S5LNtRVRPbXk01yRQ14sZ",
            "artist": "Flo Rida",
            "imgUri": "https://i.scdn.co/image/ab67616d000048517947bf3e8af32378de181b41"
        },
        {
            "name": "You're Gorgeous",
            "uri": "spotify:track:5COBer69wpwkCPPaLr1gFb",
            "artist": "Babybird",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851b400c62f5b9ee295a6c1c883"
        },
        {
            "name": "Watermelon Sugar",
            "uri": "spotify:track:6UelLqGlWMcVH1E5c4H7lY",
            "artist": "Harry Styles",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485177fdcfda6535601aff081b6a"
        },
        {
            "name": "Moves Like Jagger - Studio Recording From \"The Voice\" Performance",
            "uri": "spotify:track:7LcfRTgAVTs5pQGEQgUEzN",
            "artist": "Maroon 5",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851ce70cb2d7063cf869f9f1239"
        },
        {
            "name": "Show Me Love - Radio Version",
            "uri": "spotify:track:6SluaPiV04KOaRTOIScoff",
            "artist": "Robyn",
            "imgUri": "https://i.scdn.co/image/ab67616d000048512dbf3c8a92b1af1942918ad0"
        },
        {
            "name": "Solo (feat. Demi Lovato)",
            "uri": "spotify:track:3NuK5xMlSlB6K2Qp16zf3h",
            "artist": "Clean Bandit",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485137fb0680110fbb107740de5d"
        },
        {
            "name": "Good Life",
            "uri": "spotify:track:6OtCIsQZ64Vs1EbzztvAv4",
            "artist": "OneRepublic",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485177a7bd558d81172446e525bb"
        },
        {
            "name": "Fast Car",
            "uri": "spotify:track:1SN1vSPsr4V4tIUTR3s8YW",
            "artist": "Jonas Blue",
            "imgUri": "https://i.scdn.co/image/ab67616d000048515b6bcc59c3562a6f362344c6"
        },
        {
            "name": "Just Dance",
            "uri": "spotify:track:2x7MyWybabEz6Y6wvHuwGE",
            "artist": "Lady Gaga",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851631810af03785dbad83f5c81"
        },
        {
            "name": "One Foot",
            "uri": "spotify:track:0iQ77tSa7ncj7zBPtVx6cU",
            "artist": "WALK THE MOON",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851ffbb5bd9ea83111033066254"
        },
        {
            "name": "Love Is All Around - From \"Four Weddings And A Funeral\"",
            "uri": "spotify:track:0PCGfA36HrVPmsBZJ57zOU",
            "artist": "Wet Wet Wet",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851cbea7e7a20a9df4b22dc5148"
        },
        {
            "name": "Sunday Best",
            "uri": "spotify:track:1Cv1YLb4q0RzL6pybtaMLo",
            "artist": "Surfaces",
            "imgUri": "https://i.scdn.co/image/ab67616d000048513667dc27da7b24360d6050d0"
        },
        {
            "name": "I Love Your Smile",
            "uri": "spotify:track:69mFxANpGyq9s69LqH3d9G",
            "artist": "Shanice",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851e3c3dc63eabc5a7d242997a6"
        },
        {
            "name": "On Top Of The World",
            "uri": "spotify:track:6KuHjfXHkfnIjdmcIvt9r0",
            "artist": "Imagine Dragons",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851a8f95e7f840c11edfa6cc3bd"
        },
        {
            "name": "Joyride",
            "uri": "spotify:track:4wj8ppW6nJ5hYlgfeJNBn2",
            "artist": "Roxette",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485132e1aa5e872e62c9c2cfb678"
        },
        {
            "name": "I Gotta Feeling",
            "uri": "spotify:track:2H1047e0oMSj10dgp7p2VG",
            "artist": "Black Eyed Peas",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851382514f0114ba8f4a16d5db4"
        },
        {
            "name": "Life Is A Highway",
            "uri": "spotify:track:7jIFGkTBIK1UwWaEXMW2Nh",
            "artist": "Tom Cochrane",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851e0e79290082e9cee5ebdbaca"
        },
        {
            "name": "Gangnam Style (강남스타일)",
            "uri": "spotify:track:03UrZgTINDqvnUMbbIMhql",
            "artist": "PSY",
            "imgUri": "https://i.scdn.co/image/ab67616d000048516cfc57e5358c5e39e79bccbd"
        },
        {
            "name": "Love Generation - Radio Edit",
            "uri": "spotify:track:7M13FwBAKWNa2jqcZeUhL6",
            "artist": "Bob Sinclar",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485182feaca18c25474ce8de175f"
        },
        {
            "name": "It's Raining Men",
            "uri": "spotify:track:7q3qX7Ees3FZtRFJXWgPZs",
            "artist": "Geri Halliwell",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485120fa8a1a52c78ef950f52745"
        },
        {
            "name": "Don't Be so Hard on Yourself",
            "uri": "spotify:track:6jF1nHIMESqft9p33tQYPn",
            "artist": "Jess Glynne",
            "imgUri": "https://i.scdn.co/image/ab67616d000048515c02ac6b1fa1137d7d5b4354"
        }
    ],
    "Neutral":[
        {
            "name": "Without Me",
            "uri": "spotify:track:5p7ujcrUXASCNwRaWNHR1C",
            "artist": "Halsey",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851c42acc1b86597285c2c79559"
        },
        {
            "name": "Supalonely",
            "uri": "spotify:track:4nK5YrxbMGZstTLbvj6Gxw",
            "artist": "BENEE",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485182f4ec53c54bdd5be4eed4a0"
        },
        {
            "name": "Levitating (feat. DaBaby)",
            "uri": "spotify:track:5nujrmhLynf4yMoMtj8AQF",
            "artist": "Dua Lipa",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851d4daf28d55fe4197ede848be"
        },
        {
            "name": "In My Blood",
            "uri": "spotify:track:2QZ7WLBE8h2y1Y5Fb8RYbH",
            "artist": "Shawn Mendes",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851269423eb6467e308c0fbce24"
        },
        {
            "name": "Watermelon Sugar",
            "uri": "spotify:track:6UelLqGlWMcVH1E5c4H7lY",
            "artist": "Harry Styles",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485177fdcfda6535601aff081b6a"
        },
        {
            "name": "Stay",
            "uri": "spotify:track:6uBhi9gBXWjanegOb2Phh0",
            "artist": "Zedd",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851b993cba8ff7d0a8e9ee18d46"
        },
        {
            "name": "Kings & Queens",
            "uri": "spotify:track:7a53HqqArd4b9NF4XAmlbI",
            "artist": "Ava Max",
            "imgUri": "https://i.scdn.co/image/ab67616d000048519a95e89d24214b94de36ccf7"
        },
        {
            "name": "If the World Was Ending (feat. Julia Michaels)",
            "uri": "spotify:track:2kJwzbxV2ppxnQoYw4GLBZ",
            "artist": "JP Saxe",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851dedbec8cca43642f06533476"
        },
        {
            "name": "Head & Heart (feat. MNEK)",
            "uri": "spotify:track:6cx06DFPPHchuUAcTxznu9",
            "artist": "Joel Corry",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485191e93c59bacfe819db9601eb"
        },
        {
            "name": "no tears left to cry",
            "uri": "spotify:track:2qT1uLXPVPzGgFOx4jtEuo",
            "artist": "Ariana Grande",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851c3af0c2355c24ed7023cd394"
        },
        {
            "name": "Break My Heart",
            "uri": "spotify:track:017PF4Q3l4DBUiWoXk4OWT",
            "artist": "Dua Lipa",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851bd26ede1ae69327010d49946"
        },
        {
            "name": "Never Really Over",
            "uri": "spotify:track:5PYQUBXc7NYeI1obMKSJK0",
            "artist": "Katy Perry",
            "imgUri": "https://i.scdn.co/image/ab67616d000048519bea3b79b95f86d1b66ac960"
        },
        {
            "name": "This Feeling",
            "uri": "spotify:track:4NBTZtAt1F13VvlSKe6KTl",
            "artist": "The Chainsmokers",
            "imgUri": "https://i.scdn.co/image/ab67616d000048518e26bf4293c9da7a6439607b"
        },
        {
            "name": "Boy With Luv (feat. Halsey)",
            "uri": "spotify:track:4a9tbd947vo9K8Vti9JwcI",
            "artist": "BTS",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485118d0ed4f969b376893f9a38f"
        },
        {
            "name": "Woman Like Me (feat. Nicki Minaj)",
            "uri": "spotify:track:222B3aljXx6fFwKmFjuBED",
            "artist": "Little Mix",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485115174e2b2347b5ffbea6dbf0"
        },
        {
            "name": "Too Good At Goodbyes",
            "uri": "spotify:track:3VlbOrM6nYPprVvzBZllE5",
            "artist": "Sam Smith",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851f3ea7140c4a8ba597d0b276b"
        },
        {
            "name": "Summer Days (feat. Macklemore & Patrick Stump of Fall Out Boy)",
            "uri": "spotify:track:7Feaw9WAEREY0DUOSXJLOM",
            "artist": "Martin Garrix",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851d7658a5bf66a2f3f11878bdf"
        },
        {
            "name": "Girls Like You (feat. Cardi B) - Cardi B Version",
            "uri": "spotify:track:6V1bu6o1Yo5ZXnsCJU8Ovk",
            "artist": "Maroon 5",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851fc4852898bc6ed85b3e3f89c"
        },
        {
            "name": "Best Part (feat. Daniel Caesar)",
            "uri": "spotify:track:4OBZT9EnhYIV17t4pGw7ig",
            "artist": "H.E.R.",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851b5d9c8de465654c20d77305c"
        },
        {
            "name": "I Don't Care (with Justin Bieber)",
            "uri": "spotify:track:3HVWdVOQ0ZA45FuZGSfvns",
            "artist": "Ed Sheeran",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485157cc434093fd4b6af7500fd8"
        },
        {
            "name": "Con Calma",
            "uri": "spotify:track:5w9c2J52mkdntKOmRLeM2m",
            "artist": "Daddy Yankee",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851896ffcd42561c44fea2bae7b"
        },
        {
            "name": "Sunflower - Spider-Man: Into the Spider-Verse",
            "uri": "spotify:track:3KkXRkHbMCARz0aVfEt68P",
            "artist": "Post Malone",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851e2e352d89826aef6dbd5ff8f"
        },
        {
            "name": "More Than You Know",
            "uri": "spotify:track:6h5PAsRni4IRlxWr6uDPTP",
            "artist": "Axwell /\\ Ingrosso",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851fba6de0b38b0168d480b1a27"
        },
        {
            "name": "Bad At Love",
            "uri": "spotify:track:7y9iMe8SOB6z3NoHE2OfXl",
            "artist": "Halsey",
            "imgUri": "https://i.scdn.co/image/ab67616d000048510f7ad6d8d829906c17cae210"
        },
        {
            "name": "Promises (with Sam Smith)",
            "uri": "spotify:track:5N5k9nd479b1xpDZ4usjrg",
            "artist": "Calvin Harris",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851ccdcbd450e42fc7b27a82a1f"
        },
        {
            "name": "lovely (with Khalid)",
            "uri": "spotify:track:0u2P5u6lvoDfwTYjAADbn4",
            "artist": "Billie Eilish",
            "imgUri": "https://i.scdn.co/image/ab67616d000048518a3f0a3ca7929dea23cd274c"
        },
        {
            "name": "Mood (feat. iann dior)",
            "uri": "spotify:track:4jPy3l0RUwlUI9T5XHBW2m",
            "artist": "24kGoldn",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485184c53fa832dfa265192419c5"
        },
        {
            "name": "Don't Call Me Up",
            "uri": "spotify:track:5WHTFyqSii0lmT9R21abT8",
            "artist": "Mabel",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851fb4278cf3d557dc89ca80ad5"
        },
        {
            "name": "Sucker",
            "uri": "spotify:track:22vgEDb5hykfaTwLuskFGD",
            "artist": "Jonas Brothers",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851de1a3a5eaa0c75bb18e7b597"
        },
        {
            "name": "South of the Border (feat. Camila Cabello & Cardi B)",
            "uri": "spotify:track:4vUmTMuQqjdnvlZmAH61Qk",
            "artist": "Ed Sheeran",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485173304ce0653c7758dd94b259"
        },
        {
            "name": "Laugh Now Cry Later (feat. Lil Durk)",
            "uri": "spotify:track:2SAqBLGA283SUiwJ3xOUVI",
            "artist": "Drake",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485152c75ed37313b889447011ef"
        },
        {
            "name": "UN DIA (ONE DAY) (Feat. Tainy)",
            "uri": "spotify:track:0EhpEsp4L0oRGM0vmeaN5e",
            "artist": "J Balvin",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851312bd86cc2db22fde885ee73"
        },
        {
            "name": "Born To Be Yours",
            "uri": "spotify:track:0WVAQaxrT0wsGEG4BCVSn2",
            "artist": "Kygo",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485137084df74688999caf0cbb9f"
        },
        {
            "name": "Blinding Lights",
            "uri": "spotify:track:0VjIjW4GlUZAMYd2vXMi3b",
            "artist": "The Weeknd",
            "imgUri": "https://i.scdn.co/image/ab67616d000048518863bc11d2aa12b54f5aeb36"
        },
        {
            "name": "you broke me first",
            "uri": "spotify:track:45bE4HXI0AwGZXfZtMp8JR",
            "artist": "Tate McRae",
            "imgUri": "https://i.scdn.co/image/ab67616d000048510c2c97099fd6a637ed0aa4a4"
        },
        {
            "name": "Say So",
            "uri": "spotify:track:3Dv1eDb0MEgF93GpLXlucZ",
            "artist": "Doja Cat",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485182b243023b937fd579a35533"
        },
        {
            "name": "Someone You Loved",
            "uri": "spotify:track:7qEHsqek33rTcFNT9PFqLf",
            "artist": "Lewis Capaldi",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851fc2101e6889d6ce9025f85f2"
        },
        {
            "name": "Who Do You Love",
            "uri": "spotify:track:2fVHrSxsQbJUuj9MW9zG1e",
            "artist": "The Chainsmokers",
            "imgUri": "https://i.scdn.co/image/ab67616d000048515e90ff76fd49a23f7333de76"
        },
        {
            "name": "Be Kind (with Halsey)",
            "uri": "spotify:track:3Z8FwOEN59mRMxDCtb8N0A",
            "artist": "Marshmello",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851fdf2e993e10e67396b3bf759"
        },
        {
            "name": "New Light",
            "uri": "spotify:track:4T6FWA703h6H7zk1FoSARw",
            "artist": "John Mayer",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851779063301154e835a91a35e0"
        },
        {
            "name": "Juice",
            "uri": "spotify:track:0k664IuFwVP557Gnx7RhIl",
            "artist": "Lizzo",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485106af802e2ea241b6ba1ce0f2"
        },
        {
            "name": "deja vu",
            "uri": "spotify:track:6HU7h9RYOaPRFeh0R3UeAr",
            "artist": "Olivia Rodrigo",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851a91c10fe9472d9bd89802e5a"
        },
        {
            "name": "i'm so tired...",
            "uri": "spotify:track:4vjpLMyL3ZO6aphdYr8XYw",
            "artist": "Lauv",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485136b12a4082f11d16a519b964"
        },
        {
            "name": "Call You Mine",
            "uri": "spotify:track:2oejEp50ZzPuQTQ6v54Evp",
            "artist": "The Chainsmokers",
            "imgUri": "https://i.scdn.co/image/ab67616d000048515e90ff76fd49a23f7333de76"
        },
        {
            "name": "positions",
            "uri": "spotify:track:35mvY5S1H3J2QZyna3TFe0",
            "artist": "Ariana Grande",
            "imgUri": "https://i.scdn.co/image/ab67616d000048515ef878a782c987d38d82b605"
        },
        {
            "name": "Taki Taki (with Selena Gomez, Ozuna & Cardi B)",
            "uri": "spotify:track:4w8niZpiMy6qz1mntFA5uM",
            "artist": "DJ Snake",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851e105c410a7b390c61a58cbf8"
        },
        {
            "name": "Lonely (with benny blanco)",
            "uri": "spotify:track:4y4spB9m0Q6026KfkAvy9Q",
            "artist": "Justin Bieber",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485183b22beb73e2014b20159685"
        },
        {
            "name": "Beautiful People (feat. Khalid)",
            "uri": "spotify:track:4evmHXcjt3bTUHD1cvny97",
            "artist": "Ed Sheeran",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851358f874d5d31e76a8fe3f6d0"
        },
        {
            "name": "Happier",
            "uri": "spotify:track:2dpaYNEQHiRxtZbfNsse99",
            "artist": "Marshmello",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485104bfd5a5fd5aa6ca648f66aa"
        },
        {
            "name": "Delicate",
            "uri": "spotify:track:6NFyWDv5CjfwuzoCkw47Xf",
            "artist": "Taylor Swift",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851da5d5aeeabacacc1263c0f4b"
        }
    ],
    "Sadness":[
        {
            "name": "If I Go, I'm Goin",
            "uri": "spotify:track:1vqtj4c5aNPKkLS2LXkd4E",
            "artist": "Gregory Alan Isakov",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485193a1519118102a6d78164713"
        },
        {
            "name": "Call It Dreaming",
            "uri": "spotify:track:1MxHIIzcTeFnaNsDGY3pfj",
            "artist": "Iron & Wine",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485103a65555dc780c3a35139055"
        },
        {
            "name": "Neon Moon",
            "uri": "spotify:track:7laJx5tDtvm3Mkj832oxSb",
            "artist": "Cigarettes After Sex",
            "imgUri": "https://i.scdn.co/image/ab67616d000048518c1c90d4fa431541fe771e78"
        },
        {
            "name": "Heavenly",
            "uri": "spotify:track:1Bh0UzthW8pKEnYg7v40Oa",
            "artist": "Cigarettes After Sex",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851ced182a9a86195e9ba2a5183"
        },
        {
            "name": "Don't Let Me Go",
            "uri": "spotify:track:0dBQm6NsxCQ1cOwR4zWw89",
            "artist": "Cigarettes After Sex",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851ced182a9a86195e9ba2a5183"
        },
        {
            "name": "Wild",
            "uri": "spotify:track:1igYfsc6KT2t5IoBk668gj",
            "artist": "Dhruv Visvanath",
            "imgUri": "https://i.scdn.co/image/ab67616d000048518d10c61bc3ea4a253c263820"
        },
        {
            "name": "Let Her Go",
            "uri": "spotify:track:0JmiBCpWc1IAc0et7Xm7FL",
            "artist": "Passenger",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851a7c10595167c713a2df0f187"
        },
        {
            "name": "Save Tonight",
            "uri": "spotify:track:1t2Hq2WIBcZINOEnK6mdJG",
            "artist": "Eagle-Eye Cherry",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851aacc6949864aa4c1073d3060"
        },
        {
            "name": "if this is the last time",
            "uri": "spotify:track:3bsRMvQja4huvPWo1S5ONc",
            "artist": "LANY",
            "imgUri": "https://i.scdn.co/image/ab67616d000048513621fd5a6b01ba2f7f716b87"
        },
        {
            "name": "Closure",
            "uri": "spotify:track:0jBU9PMcOpikb0kUtDQiJm",
            "artist": "Vancouver Sleep Clinic",
            "imgUri": "https://i.scdn.co/image/ab67616d000048510b6a8c68e795bf97698e658b"
        },
        {
            "name": "Hell Froze Over",
            "uri": "spotify:track:1VqmEOKrIBxNbnvMaTfssE",
            "artist": "Kodaline",
            "imgUri": "https://i.scdn.co/image/ab67616d000048512112db8aa9dabc6cdd9e14d0"
        },
        {
            "name": "Say Something",
            "uri": "spotify:track:3kswR4VNp2z8f8VXUHfTSD",
            "artist": "Kodaline",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851070d4077732ffbfc675c0b9c"
        },
        {
            "name": "Heart Open",
            "uri": "spotify:track:5VWMC6mrcc0KVKXnaMinaG",
            "artist": "Kodaline",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851070d4077732ffbfc675c0b9c"
        },
        {
            "name": "Wildfire",
            "uri": "spotify:track:2Ro9FLIVhPwIQopSr48oJT",
            "artist": "Seafret",
            "imgUri": "https://i.scdn.co/image/ab67616d000048518c33272a7c77042f5eb39d75"
        },
        {
            "name": "Keep On Loving You",
            "uri": "spotify:track:6dYcUcj1TyZZES5ivtjLdk",
            "artist": "Cigarettes After Sex",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485160a8aaa49e86772697854949"
        },
        {
            "name": "Moving On",
            "uri": "spotify:track:3QFCL0dqEzXFIWlqWiVDJU",
            "artist": "Kodaline",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485106ad5b8704d1a23c7649611c"
        },
        {
            "name": "I Wish I Never Met You",
            "uri": "spotify:track:1Gl8PKu5MzKuVWEf5xc0lX",
            "artist": "Oh Wonder",
            "imgUri": "https://i.scdn.co/image/ab67616d000048512e534b8cc80fb7612392b069"
        },
        {
            "name": "Alone Again",
            "uri": "spotify:track:6b5P51m8xx2XA6U7sdNZ5E",
            "artist": "The Weeknd",
            "imgUri": "https://i.scdn.co/image/ab67616d000048518863bc11d2aa12b54f5aeb36"
        },
        {
            "name": "I Get Lonely",
            "uri": "spotify:track:3sMC6vfTTSa0mMAPTwzDVD",
            "artist": "Drake",
            "imgUri": "https://i.scdn.co/image/ab67616d000048519c1e02d4becb7c5bbca01e2a"
        },
        {
            "name": "Heather",
            "uri": "spotify:track:4xqrdfXkTW4T0RauPLv3WA",
            "artist": "Conan Gray",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485188e3cda6d29b2552d4d6bc43"
        },
        {
            "name": "Already Gone",
            "uri": "spotify:track:5zCunX8URvLoBHlg1Fnjv6",
            "artist": "Sleeping At Last",
            "imgUri": "https://i.scdn.co/image/ab67616d000048514e1aa82170ba0076076b9606"
        },
        {
            "name": "Saturn",
            "uri": "spotify:track:3tJjZMHLqhD8DaGgdBICnc",
            "artist": "Sleeping At Last",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851e46541278af6c9ba6881cb7e"
        },
        {
            "name": "Fallen",
            "uri": "spotify:track:076iseP2IYYRzQRfQHhYg1",
            "artist": "Gert Taberner",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485103fad746c4461d95930c5179"
        },
        {
            "name": "Somebody Else",
            "uri": "spotify:track:0z5hY7soxh7zU5HFTcT3xs",
            "artist": "The 1975",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851b399a23836bb9f18840a0e72"
        },
        {
            "name": "Anchor",
            "uri": "spotify:track:7qH9Z4dJEN0l9bidizW7fq",
            "artist": "Novo Amor",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851277620423172f5a151f452e3"
        },
        {
            "name": "Where's My Love - Acoustic",
            "uri": "spotify:track:0ElpbbncWT9aS7mgoqEHbQ",
            "artist": "SYML",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851e0ae18bdcb0c9ea0c788073c"
        },
        {
            "name": "Stay",
            "uri": "spotify:track:0Uon5NsSAkBDx69XYOaQ5P",
            "artist": "Gracie Abrams",
            "imgUri": "https://i.scdn.co/image/ab67616d000048518f0e4f832dfe1840169c8009"
        },
        {
            "name": "Someone To Stay",
            "uri": "spotify:track:2xlV2CuWgpPyE9e0GquKDN",
            "artist": "Vancouver Sleep Clinic",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851dabc6fe9dd3454884cf65071"
        },
        {
            "name": "From Eden",
            "uri": "spotify:track:5aRZk9oWIYUB5alrTs8TTV",
            "artist": "Hozier",
            "imgUri": "https://i.scdn.co/image/ab67616d000048514ca68d59a4a29c856a4a39c2"
        },
        {
            "name": "All I Want",
            "uri": "spotify:track:0NlGoUyOJSuSHmngoibVAs",
            "artist": "Kodaline",
            "imgUri": "https://i.scdn.co/image/ab67616d000048513e42854096da9a3b1ca901c9"
        },
        {
            "name": "Fast Car (Cover)",
            "uri": "spotify:track:1YMVXl39bk37KZGuUhzRw6",
            "artist": "Passenger",
            "imgUri": "https://i.scdn.co/image/ab67616d000048513b4e5451a188f72ef5b6c11a"
        },
        {
            "name": "Middle Of Nowhere",
            "uri": "spotify:track:7gUpHwmxXyJ4JVra6UHpKA",
            "artist": "Vancouver Sleep Clinic",
            "imgUri": "https://i.scdn.co/image/ab67616d000048516d81ec8c76377485dd7cadb0"
        },
        {
            "name": "Just Another Girl",
            "uri": "spotify:track:3aVyHFxRkf8lSjhWdJ68AW",
            "artist": "The Killers",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485148488c2eee5727efc30bf657"
        },
        {
            "name": "Some Kind Of Love",
            "uri": "spotify:track:7aPhHopd7f2qVb3rUKq1ZF",
            "artist": "The Killers",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851e7664a1deaefa43d6d7b1bb2"
        },
        {
            "name": "Beautiful (feat. Camila Cabello)",
            "uri": "spotify:track:4VUwkH455At9kENOfzTqmF",
            "artist": "Bazzi",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485105559264ebef3889709826cf"
        },
        {
            "name": "Cherry Flavoured",
            "uri": "spotify:track:40iocOzytrqaRn5RbGPDNp",
            "artist": "The Neighbourhood",
            "imgUri": "https://i.scdn.co/image/ab67616d000048511a721f3757e5b67f87e1acd3"
        },
        {
            "name": "Cherry",
            "uri": "spotify:track:4sRmzVSedvFkENbSJ342Ex",
            "artist": "Chromatics",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851f760c22b4b68d5d0616be34a"
        },
        {
            "name": "You Found Me",
            "uri": "spotify:track:4IoYz8XqqdowINzfRrFnhi",
            "artist": "The Fray",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485192b32435efed601fc8f1045d"
        },
        {
            "name": "Cigarette Daydreams",
            "uri": "spotify:track:2tznHmp70DxMyr2XhWLOW0",
            "artist": "Cage The Elephant",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851fb1cb900d28642e668d77b12"
        },
        {
            "name": "Pink Lemonade",
            "uri": "spotify:track:7dFERLugNJZUgtX1V3KA4b",
            "artist": "The Wombats",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851b241a0ad9ffc805fe22564f3"
        },
        {
            "name": "Wonderful Life",
            "uri": "spotify:track:2l9HDZnaCCaPxhL4fPWScK",
            "artist": "Smith & Burrows",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851d266f94c483c217e1af484d6"
        },
        {
            "name": "Don’t Matter To Me (with Michael Jackson)",
            "uri": "spotify:track:6G8kHiVZ1jW7vHMPVRNZU0",
            "artist": "Drake",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851f907de96b9a4fbc04accc0d5"
        },
        {
            "name": "Heartbeats",
            "uri": "spotify:track:4MHQS0NA1D6vUsepLzi1ox",
            "artist": "Fairlane",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851c8edda6de69a1421fa814f8a"
        },
        {
            "name": "Looking Too Closely",
            "uri": "spotify:track:7bhI6rnvaVw8qgZPn32qE0",
            "artist": "Fink",
            "imgUri": "https://i.scdn.co/image/ab67616d000048515e60321662867db9837b3421"
        },
        {
            "name": "Oh Love",
            "uri": "spotify:track:02sas1xqIwRm7iWSoHDvKe",
            "artist": "Prateek Kuhad",
            "imgUri": "https://i.scdn.co/image/ab67616d0000485100fe1b1daea6ee84f295277e"
        },
        {
            "name": "By Night",
            "uri": "spotify:track:2HiVLVR0RrcjQagWwuiwob",
            "artist": "Puzzle Muteson",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851d81011b4429033027b5a40d6"
        },
        {
            "name": "Broken",
            "uri": "spotify:track:2FkbeqpCrjjDdVH1SZgDo6",
            "artist": "Isak Danielson",
            "imgUri": "https://i.scdn.co/image/ab67616d000048516f16729be224e7420b4982a7"
        },
        {
            "name": "If the World Was Ending (feat. Julia Michaels)",
            "uri": "spotify:track:2kJwzbxV2ppxnQoYw4GLBZ",
            "artist": "JP Saxe",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851dedbec8cca43642f06533476"
        },
        {
            "name": "Someone To You",
            "uri": "spotify:track:2f0pn9DkEJwAzXApnFh5cr",
            "artist": "BANNERS",
            "imgUri": "https://i.scdn.co/image/ab67616d00004851f1bff89049561177b7cccebb"
        },
        {
            "name": "Alive",
            "uri": "spotify:track:5WBnKCEsPwsvWHUZmLjS3s",
            "artist": "Empire of the Sun",
            "imgUri": "https://i.scdn.co/image/ab67616d000048514a4c40f3d5034bc5181ea8d0"
        }
    ]
}

const getMeRandomElements = function(sourceArray, neededElements) {
    const result = [];
    
    for (var i = 0; i < neededElements; i++) {
        result.push(sourceArray[Math.floor(Math.random()*sourceArray.length)]);
    }
   
    return result;
}

router.post("/getSongs",(req,res)=>{
    const {emotion}=req.body;
    
    if(emotion!==""){
        const randomFetchedSongs=getMeRandomElements(songEmotionMa[emotion],10)
        
        res.status(200).send({
        emotionbasedSong:randomFetchedSongs,
    })
    }else{
        res.status(404)
    }
})

module.exports=router;