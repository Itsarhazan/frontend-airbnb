import { utilService } from './util-service'
import { httpService } from './http-service'
// import { storageService } from './async-storage-service'

const KEY = 'stay_db'
const ENDPOINT = 'stay'
    // const BASE_URL =
    //   process.env.NODE_ENV !== 'development' ? '/api/stay' : '//localhost:3030/api/stay/'

export const stayService = {
    query,
    getById,
    remove,
    save,
    //   getEmptyStay,
}

_createStays()

async function query(filterBy) {
    return await httpService.get(ENDPOINT, filterBy)
}

async function getById(id) {
    return await httpService.get(`${ENDPOINT}/${id}`)
        // return axios.get(BASE_URL + id).then((res) => res.data)
        // return storageService.getById(KEY, id)
}

async function remove(id) {
    return await httpService.delete(`${ENDPOINT}/${id}`)
        // return axios.delete(BASE_URL + id).then((res) => res.data)
        // return storageService.remove(KEY, id)
}

async function save(stay) {
    return stay._id ?
        await httpService.put(`${ENDPOINT}/${stay._id}`, stay) :
        await httpService.post(ENDPOINT, stay)
        // return stay._id ? storageService.put(KEY, stay) : storageService.post(KEY, stay)
}

// function getEmptyStay() {
//   return Promise.resolve({
//     name: '',
//     price: 0,
//     createdAt: new Date(),
//     reviews: [],
//   })
// }


function _createStays() {
    let stays = utilService.loadFromStorage(KEY)
    if (!stays || !stays.length) {
        stays = [{
                    "name": "Spacious and quiet duplex apartment in Poble Sec",
                    "summary": "Spacious apartment in a peculiar building in the central neighbourhood of Poble Sec, with patio and terrace, ideal for families with children or groups. Walking distance from center, Montjuïc, Plaza España, Fira Montjuïc/Gran Vía, Sant Antoni, Raval.",
                    "interaction": "Yamila lives in the neighborhood. Should you need it she will be near! Before your arrival, you might interact by e-mail either with Yamila or with me (Cristina, the apartment's owner).",
                    "houseRules": "RIGHT AFTER RESERVATION: 1. Send us your e-mail address so that we can send you a PDF file with all the info. 2. Send us by e-mail the following personal data FOR ALL GUESTS (children included), for the compulsory tourist registration with the local authorities: ID number*  Type of document (national ID or passport)* Date of issue (if visible)* Family name*  First name*   M/F* Birth date*  Nationality*  Date of arrival* Personal address  Phone number  Expected days of stay BEFORE YOUR ARRIVAL: 1. Make sure you provide us your arrival's details (time of arrival and mean of transportation) and a phone number so that we can contact you in case of need. 2. Let us know your preferences regarding the beds according to your group's composition: ex. if you are a family of 2 parents + 2 kids we will prepare the main room and the bulk beds; if you are 2 couples we will prepare the main room and the other double bed room; if there is a child we will prepare the baby bed or the little bed, etc.  3",
                    "propertyType": "Apartment",
                    "roomType": "Entire home/apt",
                    "bedType": "Real Bed",
                    "cancellationPolicy": "moderate",
                    "capacity": 7,
                    "bedrooms": 3,
                    "beds": 7,
                    "numOfReviews": 129,
                    "amenities": [
                        "TV",
                        "Cable TV",
                        "Internet",
                        "Wifi",
                        "Air conditioning",
                        "Kitchen",
                        "Heating",
                        "Smoke detector",
                        "Carbon monoxide detector",
                        "Buzzer-wireless intercom",
                        "Washer",
                        "First aid kit",
                        "Family-kid friendly",
                        "Safety card",
                        "Fire extinguisher",
                        "Essentials",
                        "Shampoo",
                        "24-hour check-in",
                        "Hangers",
                        "Hair dryer",
                        "Iron",
                        "Laptop friendly workspace",
                        "Outlet covers",
                        "Bathtub",
                        "High chair",
                        "Stair gates",
                        "Children’s books and toys",
                        "Crib",
                        "Pack ’n Play/travel crib",
                        "Room-darkening shades",
                        "Children’s dinnerware",
                        "Hot water",
                        "Bed linens",
                        "Extra pillows and blankets",
                        "Ethernet connection",
                        "Microwave",
                        "Coffee maker",
                        "Refrigerator",
                        "Dishwasher",
                        "Dishes and silverware",
                        "Cooking basics",
                        "Oven",
                        "Stove",
                        "Patio or balcony",
                        "Luggage dropoff allowed",
                        "Long term stays allowed",
                        "Wide doorway",
                        "Well-lit path to entrance",
                        "Wide entryway",
                        "Host greets you"
                    ],
                    "host": {
                        "_id": "622f3403e36c59e6164fb08c",
                        "fullname": "Cristina",
                        "location": "Barcelona, Catalonia, Spain",
                        "about": "(ES) Soy mujer, mamá y traductora. Me gusta tener tiempo para pensar, viajar, jugar con mis hijas y descubrir algo nuevo cada día. A veces por trabajo tengo que viajar, y entonces mi amiga Yamila, gran mujer y fantástica anfitriona, amante del campo y fotógrafa de profesión, me ayuda con los huéspedes.\r\n\r\n(EN) I am a woman, a mother and a translator. I like having time to think, to travel, to play with my daughters and to discover something new every day. Sometimes I have to travel because of my job: in those occasions my friend Yamila, great woman and fantastic host, outdoor lover and photographer, helps me out with guests.",
                        "responseTime": "within an hour",
                        "thumbnailUrl": "https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_small",
                        "pictureUrl": "https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_x_medium",
                        "isSuperhost": true,
                        "id": "6107595"
                    },
                    "address": {
                        "street": "Barcelona, Catalunya, Spain",
                        "country": "Spain",
                        "location": {
                            "lat": 2.15566,
                            "lan": 41.37479
                        },
                        "countryCode": "ES",
                        "city": "Barcelona"
                    },
                    "id": "1112838",
                    "bathrooms": 2,
                    "price": 130,
                    "securityDeposit": 300,
                    "cleaningFee": 65,
                    "extraPeople": 35,
                    "reviewScores": {
                        "accuracy": 10,
                        "cleanliness": 10,
                        "checkin": 10,
                        "communication": 10,
                        "location": 10,
                        "value": 10,
                        "rating": 95
                    },
                    "reviews": [{
                            "at": "2013-05-12T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb132",
                                "fullname": "Jean-Pierre",
                                "imgUrl": "https://a0.muscache.com/im/pictures/user/b0eef5b1-d155-4346-9a84-05ddc4d2b14b.jpg?aki_policy=profile_x_medium",
                                "id": "768849"
                            },
                            "txt": "Yamila appartement was just perfect for us!\r\nThe location in Poble sec is very close to BCN city center and the neighborhood is so quiet without any traffic like everywhere else in the city\r\nThe appartement is very clean, well equipped with very recent furniture, 2 bathrooms, 3 bedrooms, 2 balconies, 1 terrace, large kitchen and lounge.\r\nYamila was a perfect host with us also.\r\nI fully recommend this appartment"
                        },
                        {
                            "at": "2013-06-17T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fadce",
                                "fullname": "Ove M.",
                                "imgUrl": "https://a0.muscache.com/im/pictures/c9b876fc-b30e-4951-8f88-af9add00939e.jpg?aki_policy=profile_x_medium",
                                "id": "6146923"
                            },
                            "txt": "El piso esta muy guay, en una zona muy bien comunicada y con muchos restaurantes y bares cerca. Lo hemos pasado muy bien en este piso y volveriamos a alquilarlo."
                        },
                        {
                            "at": "2013-07-12T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb078",
                                "fullname": "Andrew",
                                "imgUrl": "https://a0.muscache.com/im/pictures/c9b876fc-b30e-4951-8f88-af9add00939e.jpg?aki_policy=profile_x_medium",
                                "id": "6597264"
                            },
                            "txt": "Awesome accommodations! Huge apartment that was obviously recently renovated and well maintained. The building is in a residential (read: non-touristy) part of Spain so if you are looking for a real taste of local culture this is the place to stay. 2 blocks from the subway and we were downtown in just a couple stops. The apartment is in building with a common courtyard (common for the style). The other people that live in the building were very friendly and helpful answering any questions we had. My son was even able to play with the other children (despite the language barrier). Awesome experience -- would definietly rent again."
                        },
                        {
                            "at": "2013-08-06T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbce7",
                                "fullname": "Juan Daniel",
                                "imgUrl": "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_x_medium",
                                "id": "6259139"
                            },
                            "txt": "Experiencia bastante agradable, puntuales, el piso muy limpio, ordenado y esta genial, muy bien situado, muy recomendable."
                        },
                        {
                            "at": "2013-08-09T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fba44",
                                "fullname": "Carey",
                                "imgUrl": "https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_x_medium",
                                "id": "7317566"
                            },
                            "txt": "The apartment is exactly as pictured. Very spacious, comfortable, and clean with a well equipped kitchen and nice terraces on both levels. The neighborhood is well situated - it is not at all touristy but close to transportation at Plaza España and Poble Sec metro stops so you can easily get to all the places you want to visit. We stayed here for 3 nights with our two children and found it perfect. We were able to walk or take the metro everywhere we wanted to go, but have a quieter place to sleep and relax. There is a park down the street and a supermarket directly across. Xavi met us on arrival and was very nice and helpful throughout our stay. When my husband accidentally left a few things in the apartment, Xavi collected them and met us upon our return to Barcelona a few days later to return them. Thanks, Xavi! It was a great stay in Barcelona and I would definitely recommend the apartment to anyone looking for space and comfort in a close but quieter neighborhood. "
                        },
                        {
                            "at": "2013-08-25T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbfa0",
                                "fullname": "Julie",
                                "imgUrl": "https://a0.muscache.com/im/pictures/c9b876fc-b30e-4951-8f88-af9add00939e.jpg?aki_policy=profile_x_medium",
                                "id": "3129321"
                            },
                            "txt": "Great flat in a very good location, very close from subway which brings you to wherever you want in a few minutes. Xabi has been really nice and we didn't miss anything in the flat. Thank you"
                        },
                        {
                            "at": "2013-09-16T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fae47",
                                "fullname": "Ron",
                                "imgUrl": "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_x_medium",
                                "id": "8464703"
                            },
                            "txt": "Yamila is a great hostess, the apartment is very comfortable.\r\nVery close to the metro. And a convenient store. A tv was missed, otherwise everything was great."
                        },
                        {
                            "at": "2013-10-27T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fc002",
                                "fullname": "Christine",
                                "imgUrl": "https://a0.muscache.com/im/users/31635864/profile_pic/1429604852/original.jpg?aki_policy=profile_x_medium",
                                "id": "3185553"
                            },
                            "txt": "Appartement conforme aux indications, très propre. Le quartier est calme mais tout de même assez proche de tout (2 stations de métro de la rambla et des plages...). Super Bon séjour !\r\n"
                        },
                        {
                            "at": "2013-11-05T05:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb814",
                                "fullname": "Jeremie",
                                "imgUrl": "https://robohash.org/9083747?set=set1",
                                "id": "9083747"
                            },
                            "txt": "Una estancia perfecta, el piso es muy grande y muy bien equipado. La descripción corresponde perfectamente a la casa. 100% recomendable."
                        },
                        {
                            "at": "2014-02-27T05:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb306",
                                "fullname": "Kirstin",
                                "imgUrl": "https://robohash.org/10268141?set=set1",
                                "id": "10268141"
                            },
                            "txt": "Super apartement, clean, spacios, great located and pretty quiet. Yamila is very nice, polite and helpful. I strongly can recommend the apartement. "
                        },
                        {
                            "at": "2014-03-04T05:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbbcc",
                                "fullname": "Oliver",
                                "imgUrl": "https://robohash.org/3385007?set=set1",
                                "id": "3385007"
                            },
                            "txt": "A very nice place and a great host!\r\nThe apartment is exactly as you can see in the pictures, everthing is clean and Yamila is just a call (or e-mail) away if you need help."
                        },
                        {
                            "at": "2014-03-18T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb476",
                                "fullname": "Okan",
                                "imgUrl": "https://robohash.org/10270886?set=set1",
                                "id": "10270886"
                            },
                            "txt": "EVERYTHING WAS GREAT. Yamila is very hospitable, very helpful. You can find everything you need at home.We will rent this House again barcelona 2015 Marathon."
                        },
                        {
                            "at": "2014-03-25T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb510",
                                "fullname": "Lisa",
                                "imgUrl": "https://robohash.org/13007630?set=set1",
                                "id": "13007630"
                            },
                            "txt": "Cristina and her friend Yamilia did a wonderful job of making us feel at home and were also very helpful with other miscellaneous necessities (calling us a taxi to take us to the airport on departure).  The duplex was very nice and spacious, clean, charming, outfitted with everything we needed, with comfortable beds and a very nice kitchen (with an induction cooktop!).  The property is older and there was some remodeling noise for a few hours from the neighboring apartment, which we could hear through what seemed to be a shared skylight, but it was very brief and not a concern (unless noise privacy is a very high priority, which it wasn't for us).  We didn't even use the third bedroom with bunk beds, but it would be ideal for a family.  The metro was close enough, and the bakery just downstairs, together with the grocery store literally across the street, were a wonderful convenience.  We went nearly everywhere by metro, and the location was central enough that at the end of the day, if we were too tired to make our way back by metro, an easy cab ride back to the apartment never exceeded 8 euros (which would've been the cost of the metro for all four of us anyway).  Overall, the apartment was a nice, comfortable bargain for family travel - not the most modern, but charming and fully met our needs."
                        },
                        {
                            "at": "2014-04-12T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb5a8",
                                "fullname": "Danielle",
                                "imgUrl": "https://robohash.org/10549520?set=set1",
                                "id": "10549520"
                            },
                            "txt": "Appartement trés agréable et trés bien situé à 2 pas d'une station de métro et de la place d'Espagne.\r\nToutes les pièces sont très agréables et les terrasses aussi.\r\nSupermarché en face et excellente boulangerie au pied de l'immeuble.\r\nImmeuble très calme.\r\nPas de cafetière électrique ni d'essoreuse à salade mais l'électroménager est top.\r\nDéco soignée.\r\nMerci, nous avons passé une excellente semaine !  "
                        },
                        {
                            "at": "2014-04-27T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbc22",
                                "fullname": "Henrik",
                                "imgUrl": "https://robohash.org/7244993?set=set1",
                                "id": "7244993"
                            },
                            "txt": "We stayed at Christina´s place for two weeks and were happy with the flat. The location is good: close to metro, and also bakery, convenience store etc is near.\r\nExcellent restaurants also nearby.  "
                        },
                        {
                            "at": "2014-05-01T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb07b",
                                "fullname": "Marie-Pierre",
                                "imgUrl": "https://robohash.org/5115465?set=set1",
                                "id": "5115465"
                            },
                            "txt": "Magnifique appartement, très calme dans un quartier sympathique. Boulangerie juste à côté, idéale le matin. Les enfants ont adoré!  Cristina et Yamila toujours à l'écoute par mail ou par tel. Nous gardons un excellent souvenir de ces vacances en famille à Barcelone. Un grand merci à nos hôtes. \r\nMarie-Pierre, Arnaud, Pierre et Benjamin"
                        },
                        {
                            "at": "2014-05-05T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbb13",
                                "fullname": "Céline",
                                "imgUrl": "https://robohash.org/4125966?set=set1",
                                "id": "4125966"
                            },
                            "txt": "Espectacular!\r\nEl piso era grande, confortable, limpio, y muy bien equipado, sobre todo en la cocina. Es un piso luminoso con terracitas perfectas para comer fuera, y un silencia muy apreciable durante la noche, una maravilla.\r\nEl piso está super bien situado, hay un supermercado en frente y una panadería muy buena justo al lado, la acogida fue perfecta y la logística (entrega y recogida de la llave...) muy sencilla. Muy recomendable."
                        },
                        {
                            "at": "2014-05-08T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb401",
                                "fullname": "Véronique",
                                "imgUrl": "https://robohash.org/11540553?set=set1",
                                "id": "11540553"
                            },
                            "txt": "Réactive et bon contact téléphonique."
                        },
                        {
                            "at": "2014-06-17T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164faf30",
                                "fullname": "Thorsten",
                                "imgUrl": "https://robohash.org/9056447?set=set1",
                                "id": "9056447"
                            },
                            "txt": "The Hous is great. It´s a super cosy place in a nice neighborhood. You find evrerything you need in the House, plus you got two terraces and a padio.\r\nIt is super located, everything you need is close, Supermarket, Bakery and Restaurants just in front of the Door. Metro station around the corner also the placa espanya Montjuïc a few minutes walk away.\r\nYamila (friend of Christina) is a great host, she was super nice and open for every question we had. She also called us a taxi to take us to the airport at 5! in the morning.\r\nWe will for sure come back and book that place again.\r\nWould totally recommend that House for a great stay in Barcelona.\r\nThank you.\r\n \r\n"
                        },
                        {
                            "at": "2014-06-21T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbf72",
                                "fullname": "Birgit",
                                "imgUrl": "https://robohash.org/16129927?set=set1",
                                "id": "16129927"
                            },
                            "txt": "GREAT!!! Christina and Yamila are very hospitable and very helpful. \r\nThe flat was very nice and spacious, clean and outfitted with everything we needed. The flat is super located (metro station, supermarket, bakery, ...).\r\n\r\nWe will come back : )\r\nThank you!"
                        }
                    ],
                    "_id": "622f337a75c7d36e498aab05",
                    "imgUrls": [
                        "028.jpeg",
                        "145.jpeg",
                        "094.jpeg",
                        "125.jpeg",
                        "102.jpeg"
                    ]
                },
                {
                    "name": "Spacious 3bdrm. Artsy and Perfect Location!",
                    "summary": "Welcome to stay in my 3bed apartment. Its a rare gem in HK,  as its Huge compared to other Hk apts! Perfect for a few friends sharing or a family. Walk everywhere in Central in  few min. Soho, Escalator, Hollywood road, MTR. It’s walk up building! please check my profile, I have many reviews :)",
                    "interaction": "I give my guests privacy but I'm always available for any questions or if anyone needs suggestions :)",
                    "houseRules": "No parties or loud music after 10 No smoking inside  Take care of my place as ur own  Be nice and respectful to the neighbours around :)",
                    "propertyType": "Apartment",
                    "roomType": "Entire home/apt",
                    "bedType": "Real Bed",
                    "cancellationPolicy": "strict_14_with_grace_period",
                    "capacity": 5,
                    "bedrooms": 3,
                    "beds": 3,
                    "numOfReviews": 125,
                    "amenities": [
                        "TV",
                        "Cable TV",
                        "Wifi",
                        "Air conditioning",
                        "Kitchen",
                        "Heating",
                        "Shampoo",
                        "Hangers",
                        "Hair dryer",
                        "Iron",
                        "Laptop friendly workspace"
                    ],
                    "host": {
                        "_id": "622f3404e36c59e6164fb603",
                        "fullname": "Melanie",
                        "location": "Seattle, Washington, United States",
                        "about": "Raised in the west, I decided to travel and work abroad for a few years. Working and backpacking away from home has helped me gain so much experience and insight from living away from home, I think everyone should try it! \r\n\r\nI love hosting! And I put my heart into it and always think about how I can make my place enjoyable and comfy.\r\nif you have any feedback I'd love to hear and learn how to grow from it.\r\n\r\nI can speak English and hope to make your stay as pleasant as possible :) We can definitely give you suggestions for eating, shopping, art and museums and also night life. Just ask!",
                        "responseTime": "within a few hours",
                        "thumbnailUrl": "https://a0.muscache.com/im/pictures/5db18be8-88b0-40d8-9960-46275d99ac3b.jpg?aki_policy=profile_small",
                        "pictureUrl": "https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_x_medium",
                        "isSuperhost": false,
                        "id": "930612"
                    },
                    "address": {
                        "street": "Hong Kong, Hong Kong Island, Hong Kong",
                        "country": "Hong Kong",
                        "location": {
                            "lat": 114.15202,
                            "lan": 22.28582
                        },
                        "countryCode": "HK",
                        "city": "Hong Kong"
                    },
                    "id": "10840938",
                    "bathrooms": 1,
                    "price": 1146,
                    "securityDeposit": 1500,
                    "cleaningFee": 285,
                    "extraPeople": 60,
                    "reviewScores": {
                        "accuracy": 9,
                        "cleanliness": 9,
                        "checkin": 9,
                        "communication": 10,
                        "location": 10,
                        "value": 9,
                        "rating": 87
                    },
                    "reviews": [{
                            "at": "2016-02-01T05:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbd26",
                                "fullname": "Veronica",
                                "imgUrl": "https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_x_medium",
                                "id": "10225425"
                            },
                            "txt": "Melanie was an amazing and friendly host! Super friendly, accommodating and quick to answer all my questions.\r\n\r\nThe location of her place is very convenient...only about a 5 min walk to the MTR, Soho and LKF. The space itself is extremely spacious for Hong Kong and not to mention super cute with a very artsy vibe. Absolutely loved the decor and you can really get a sense of who Melanie is from her lovely finishing touches. "
                        },
                        {
                            "at": "2016-02-10T05:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb34a",
                                "fullname": "Eunji",
                                "imgUrl": "https://a0.muscache.com/im/pictures/user/b0eef5b1-d155-4346-9a84-05ddc4d2b14b.jpg?aki_policy=profile_x_medium",
                                "id": "22116383"
                            },
                            "txt": "위치는 소호에서 도보 3분거리. 숙소자체는 좋으나 동네 자체가 오래되서 밤에 귀가할 때 조금 어두웠음. 홍콩에서 보기 드물게 방3개인 집이라 가족들과 좁지 않게 지낼 수 있어 좋았음. 다만 뜨거운 물 쓰는게 조금 불편했고 건물이 오래되어서 바깥 소음이나 방음이 잘 안되는 게 단점이었으나 전반적으로 가격대비 너무 깔끔하고 좋은 숙소였음! \n\nWe checked in late at night but Melanie gave us all the information before arrival so we could check in easily on our own. If you once find this place, you will relalise how close it is from Soho, but getting here for the first time wasn't very easy for us. I stayed here with my husband and my brother's family and the place was spacious enough (considering its hongkong) for us all to hang around. You need to walk up to the 4th floor but wasn't a problme at all to us. \nWe had some issue about electricity but Melanie responded quickly and helped us sort out the problem. One thing we felt inconvenient was hot shower but we got used to it later. And, it was very considerate of Melanie to prepare three heaters for us. \nI highly recommend this place for a family or groups of 4-5 ppl and especially those who wish to enjoy the atmosphere of Soho area and lankwaifong. I and my husband went out for a drink every night and found awesome bars and restaurants. We could have done it easily as the place is so close to it. \n"
                        },
                        {
                            "at": "2016-02-12T05:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb4bc",
                                "fullname": "Sergio",
                                "imgUrl": "https://a0.muscache.com/im/pictures/user/6bf03261-e7ac-4e0e-8121-3828612bbb6a.jpg?aki_policy=profile_x_medium",
                                "id": "47448814"
                            },
                            "txt": "The apartment itself is nicely decorated and in good condition, with two good sized bedrooms, one bedroom with a tatami and also a sofa bed.  It is very centrally located so you can stroll to Central and Lan Kwai Fong very easily. We would recommend it."
                        },
                        {
                            "at": "2016-02-14T05:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb929",
                                "fullname": "Lusy",
                                "imgUrl": "https://a0.muscache.com/im/pictures/87b9ccba-154a-4546-8cbe-8bdb25ddb36c.jpg?aki_policy=profile_x_medium",
                                "id": "30309397"
                            },
                            "txt": "We had SUCH a lovely stay at Melanie's apartment! This home is so clean and kept very nicely, we particularly loved the attention to detail with umbrellas, books, candles, hairdryers, etc. to make sure we felt at home! Thank you so much for letting us enjoy your place for the weekend :]]"
                        },
                        {
                            "at": "2016-02-18T05:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbbd3",
                                "fullname": "Anthony",
                                "imgUrl": "https://a0.muscache.com/im/pictures/87b9ccba-154a-4546-8cbe-8bdb25ddb36c.jpg?aki_policy=profile_x_medium",
                                "id": "7601463"
                            },
                            "txt": "Mel was extremely responsive with my super late booking. \r\nThe set of instructions she provided were more than adequate, but she even reached out on (Hidden by Airbnb) to ensure everything was understood. Would highly recommend Mel, and hope to stay in her huge place again soon"
                        },
                        {
                            "at": "2016-02-28T05:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb68b",
                                "fullname": "Salvatore",
                                "imgUrl": "https://a0.muscache.com/im/pictures/87b9ccba-154a-4546-8cbe-8bdb25ddb36c.jpg?aki_policy=profile_x_medium",
                                "id": "13362622"
                            },
                            "txt": "Melanie welcomed me promptly and timely providing me all the needed info to enjoy my staying at her place. She replied all of my questions and let me feel welcome.\r\n\r\nThe apartment is spacious (rare size in HK!) and really clean (not usual too), comfortable for families.\r\nFurthermore, it's strategically located in the heart of Soho and HK.\r\n\r\nCleanliness of the main gate and stairs could be improved.\r\n\r\nGreat experience overall.\r\n"
                        },
                        {
                            "at": "2016-03-15T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164facd8",
                                "fullname": "Riikka",
                                "imgUrl": "https://robohash.org/29979454?set=set1",
                                "id": "29979454"
                            },
                            "txt": "Melanie oli ystävällinen ja avulias majoittaja. Hän antoi kohteesta tarkan kuvauksen ja lähetti etukäteen tarkan ja äärimmäisen kattavan tietopaketin. Asunto vastasi odotuksia täydellisesti ja oli todellakin tilava Hong Kongin mittakaavassa. Sijainti oli mitä loistavin!!!!! Asunto oli siisti, miellyttävä ja hyvin varusteltu. Internet toimi moitteettomasti. Suosittelen Melanien majoitusta lämpimästi kaikille. "
                        },
                        {
                            "at": "2016-03-20T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb228",
                                "fullname": "David",
                                "imgUrl": "https://robohash.org/40018078?set=set1",
                                "id": "40018078"
                            },
                            "txt": "Melanie's home in Hong Kong is wonderful! Very convenient and accommodating - it was a great experience. Not to mention, Melanie is extremely helpful and provided some solid tips about seeing the city.  Her place is also very close to some delicious dim sum. I would recommend her place to anybody staying in the city. Thanks Melanie!"
                        },
                        {
                            "at": "2016-04-11T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb620",
                                "fullname": "Paul",
                                "imgUrl": "https://robohash.org/30302063?set=set1",
                                "id": "30302063"
                            },
                            "txt": "Melanie was very helpful when arriving and gave clear instructions on how to access the apartment. The apartment was clean and comfortable and as shown in the photos. The place was very spacious for four of us and the location was perfect. Would definitely consider staying here again."
                        },
                        {
                            "at": "2016-04-24T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fabd9",
                                "fullname": "Maria",
                                "imgUrl": "https://robohash.org/16114855?set=set1",
                                "id": "16114855"
                            },
                            "txt": "Melanie's home was the nicest place we stayed in Hong Kong, she was thorough and gave us excellent directions for easy access to her apartment. Neighborhood is full of trendy and great restaurants and bars and easy access to the MTR to explore other areas of the city. Highly recommend and would stay again on my next visit."
                        },
                        {
                            "at": "2016-05-09T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fae68",
                                "fullname": "Jing",
                                "imgUrl": "https://robohash.org/14350554?set=set1",
                                "id": "14350554"
                            },
                            "txt": "房间离上环地铁站很近,不管是往返机场还是市内出行都很方便｡房间装修和设施虽然简陋,但需要的东西基本都有｡最大的缺点是房间位于五楼,对于我这样家庭出游不太合适,抬着几个行李箱和宝宝推车爬楼梯的经历像一场噩梦｡推荐结伴出游的年轻人居住,性价比蛮高｡"
                        },
                        {
                            "at": "2016-05-22T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb790",
                                "fullname": "Dx",
                                "imgUrl": "https://robohash.org/43463016?set=set1",
                                "id": "43463016"
                            },
                            "txt": "The bed caused skin itches, could hardly sleep. \n\nApartment is very artistic, looks very comfortable. Good location. Toilets and showers in great condition. "
                        },
                        {
                            "at": "2016-05-27T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb412",
                                "fullname": "Simon",
                                "imgUrl": "https://robohash.org/4152981?set=set1",
                                "id": "4152981"
                            },
                            "txt": "I would highly recommend staying at Melanie's apartment in Sheung Wan, near the famous Lang Kwai Fong area of Hong Kong island. I've stayed in many overpriced, cramped hotels and hostels in Hong Kong over the years and this was my first time opting for AirBnB instead. I was not disappointed. Melanie's apartment is very very spacious, has a lot of character and is super comfortable. It's also fantastic value for money if a few of you are sharing. Her instructions of how to find and access the building were spot on, very helpful indeed. \r\n\r\nWe'll be back for sure!"
                        },
                        {
                            "at": "2016-06-13T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbbcf",
                                "fullname": "Rachel",
                                "imgUrl": "https://robohash.org/15625834?set=set1",
                                "id": "15625834"
                            },
                            "txt": "The check in instructions were clear and easy to get, I found my way there easily. The climb up wasn't that bad. When I checked in, the house was in a huge mess as the previous guest had trashed the listing and looked like they had a party there. Melanie was easily reachable and wasn't fazed much when I showed her pictures. Instead, she took it like a champ and pulled a miracle by getting her cleaner to come at midnight. I was calling Airbnb to move my reservation elsewhere but her ability to rectify everything in record time was all I could ask for. The apartment looked great for photos after the massive cleanup! Thank you!"
                        },
                        {
                            "at": "2016-06-19T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbd55",
                                "fullname": "Alex",
                                "imgUrl": "https://robohash.org/4395210?set=set1",
                                "id": "4395210"
                            },
                            "txt": "Fantastic apartment decorated with taste. BUT unfortunately experience was spoilt by deafening construction noise from the apartment on 3rd floor. If you don't plan on spending time in the apartment from 8am to 5pm you'll prob love your time."
                        },
                        {
                            "at": "2016-07-10T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb802",
                                "fullname": "嘉楠",
                                "imgUrl": "https://robohash.org/71291052?set=set1",
                                "id": "71291052"
                            },
                            "txt": "It really has a perfect location,and the rooms are very clean and tidy.Thanks,Melanie!"
                        },
                        {
                            "at": "2016-07-13T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb8f1",
                                "fullname": "Dan",
                                "imgUrl": "https://robohash.org/8945756?set=set1",
                                "id": "8945756"
                            },
                            "txt": "Melanie's place was great! The location is superb and her directions were very accurate and easy to follow. Communication was great. Construction site nearby was a bit noisy but we all slept fine. Convenience store on the corner very handy.\n\nThe place was spacious and clean. Shower had good flow and no trouble with hot water. Fridge small but all we needed. Plenty of markets and eateries around and the MTR (train) station is only a short walk and one stop to central.\n\nWe're able to drop our bags slightly earlier which was also very helpful in the heat.\n\nI would definitely stay at Melanie's place again.\n\nCheers for having us."
                        },
                        {
                            "at": "2016-07-17T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb83d",
                                "fullname": "Brad",
                                "imgUrl": "https://robohash.org/1338187?set=set1",
                                "id": "1338187"
                            },
                            "txt": "Melanie's place was great, and as advertised. Very spacious for Hong Kong and close to everything. Had a bit of trouble getting in with the key missing from the lock box upon arrival but her assistant Elvie came to the rescue and it was a non issue. Would definitely stay there again given how convenient and spacious it was.  "
                        },
                        {
                            "at": "2016-07-29T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fba77",
                                "fullname": "Jirat-Orn",
                                "imgUrl": "https://robohash.org/2092204?set=set1",
                                "id": "2092204"
                            },
                            "txt": "It was easy to find, not far from E2 exit of the MTR, but the place was on 5 floor (first floor has no room so actually didn't count but you have to gone up 5 floor by stair). The place was quite and nice, clean and comfy just like the picture. Have a bit problems with the light inside the room but she response quick and ask for the helper to come. Thanks to the place we have a nice sleep. P.S. The shop of King fish ball was right beside in front the corner of the place, not bad to have a try."
                        },
                        {
                            "at": "2016-07-31T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb68b",
                                "fullname": "Salvatore",
                                "imgUrl": "https://robohash.org/13362622?set=set1",
                                "id": "13362622"
                            },
                            "txt": "Melanie was super supporting in sharing all the needed details to make our experience just great! \r\n\r\n"
                        }
                    ],
                    "_id": "622f337a75c7d36e498aab1f",
                    "imgUrls": [
                        "012.jpeg",
                        "135.jpeg",
                        "145.jpeg",
                        "117.jpeg",
                        "022.jpeg"
                    ]
                },
                {
                    "name": "Private Entrance - Backyard Summer Dining - Enjoy",
                    "summary": "If you appreciate the natives in the outer boroughs, we appreciate you as guest.  Brooklyn has become very popular among Brooklynites and new comers.  While visiting NYC, if you are looking for crowds, museums and shopping, visit Manhattan.  Welcome!",
                    "interaction": "We respect your privacy so will not interfere with your visit. We are not offering a hotel experience, yet a friendly and family environment.  (Please do not bring people to hang out, party or sleepovers - each additional person will be charged a nightly rate whether visiting or staying).",
                    "houseRules": "No smoking, No pets.  Sanitary napkins, Tampons and Bounty napkins must be placed in the trash, NOT IN TOILET BOWL.  PLEASE DO NOT use hair dye/color.  Turn off lights, air conditioner and television when out enjoying the day.  Be sure doors and gates in front and back are locked when out of the house. Throw out trash and place in recycle bins.  Leaving the apartment untidy or dirty will incur a cleaning fee.  PLEASE RESPECT THE HOME AS IF IT WAS YOUR HOME WITH CLEANLINESS AND CARE OF BELONGINGS!  ALSO, NOTIFY HOST WITH YOUR DEPARTURE TIME - PLEASE DO NOT LEAVE WITHOUT NOTICE.  Departing after check out time (noon) will incur the daily rate.",
                    "propertyType": "Townhouse",
                    "roomType": "Entire home/apt",
                    "bedType": "Real Bed",
                    "cancellationPolicy": "strict_14_with_grace_period",
                    "capacity": 2,
                    "bedrooms": 1,
                    "beds": 2,
                    "numOfReviews": 184,
                    "amenities": [
                        "TV",
                        "Cable TV",
                        "Internet",
                        "Wifi",
                        "Air conditioning",
                        "Kitchen",
                        "Buzzer-wireless intercom",
                        "Heating",
                        "Family-kid friendly",
                        "Smoke detector",
                        "Carbon monoxide detector",
                        "First aid kit",
                        "Safety card",
                        "Fire extinguisher",
                        "Essentials",
                        "Shampoo",
                        "Hangers",
                        "Hair dryer",
                        "Iron",
                        "translation missing: en.hosting_amenity_50",
                        "Private entrance",
                        "Host greets you"
                    ],
                    "host": {
                        "_id": "622f3405e36c59e6164fb663",
                        "fullname": "Michelle",
                        "location": "New York, New York, United States",
                        "about": "Easy, breezy and enjoy having fun with friends and great people.  Appreciate a comfortable, clean home.  Favorite past time is reading or a good movie.  Family and my time, most important.",
                        "responseTime": "within an hour",
                        "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/b0eef5b1-d155-4346-9a84-05ddc4d2b14b.jpg?aki_policy=profile_small",
                        "pictureUrl": "https://a0.muscache.com/im/pictures/user/b0eef5b1-d155-4346-9a84-05ddc4d2b14b.jpg?aki_policy=profile_x_medium",
                        "isSuperhost": true,
                        "id": "5887081"
                    },
                    "address": {
                        "street": "Brooklyn, NY, United States",
                        "country": "United States",
                        "location": {
                            "lat": -73.95321,
                            "lan": 40.69034
                        },
                        "countryCode": "US",
                        "city": "New York"
                    },
                    "id": "1092760",
                    "bathrooms": 1,
                    "price": 110,
                    "securityDeposit": 400,
                    "cleaningFee": 40,
                    "extraPeople": 15,
                    "reviewScores": {
                        "accuracy": 10,
                        "cleanliness": 10,
                        "checkin": 10,
                        "communication": 10,
                        "location": 10,
                        "value": 10,
                        "rating": 96
                    },
                    "reviews": [{
                            "at": "2013-08-17T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb0d4",
                                "fullname": "Wendy",
                                "imgUrl": "https://a0.muscache.com/im/pictures/user/6bf03261-e7ac-4e0e-8121-3828612bbb6a.jpg?aki_policy=profile_x_medium",
                                "id": "4489874"
                            },
                            "txt": "Michelle was a very considerate, responsive host. The apartment is lovely and very comfortable and was furnished with everything we needed. We had a great stay."
                        },
                        {
                            "at": "2013-08-28T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbf5d",
                                "fullname": "Eric",
                                "imgUrl": "https://a0.muscache.com/im/pictures/user/7620074d-86d6-49c3-b7fe-cafe084051dd.jpg?aki_policy=profile_x_medium",
                                "id": "6672287"
                            },
                            "txt": "Séjour merveilleux chez Michelle qui est une hôte adorable, le logement etait vraiment super... très propre, , fonctionnel,petit plus le rez de jardin ou l on peux manger et profiter des petits oiseaux car nous sommes à new york , mais vraiment au calme,station de metro à deux (Website hidden by Airbnb) recommande vraiment cette adresse, nous sommes venus avec nos deux enfants...\r\nMerci michelle de nous avoir permis de passer un si bon voyage,!"
                        },
                        {
                            "at": "2013-09-21T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb829",
                                "fullname": "Julia & Mike & Pepper",
                                "imgUrl": "https://a0.muscache.com/im/pictures/87b9ccba-154a-4546-8cbe-8bdb25ddb36c.jpg?aki_policy=profile_x_medium",
                                "id": "6727618"
                            },
                            "txt": "I booked Michelle's private Brooklyn home for my retired parents, who were visiting me in LA from overseas and wanted to travel to New York for a few days. My parents returned from New York raving about Michelle, her graciousness and her beautiful home including a private outside patio! The apartment was attractively decorated and very clean with all the key amenities including coffeemaker, TV, internet, and even fresh fruit! The supermarket was conveniently around the corner, and my dad said he chatted with locals as he walked to the bakery to get bread each morning. My parents said it was like home away from home. They highly recommend Michelle as a host, and I can't wait to visit myself. Michelle, thank you for making my parents' New York trip so special. You and your family are welcome to visit us in Long Beach, CA anytime. \r\n\r\nMichelle, ist eine wunderbare und nette Gastgeberin.\r\nBei fragen und Tipps stets zur stelle und unglaublich hilfsbereit.\r\nDas Appartement ist sehr geräumig und voll ausgestattet.\r\nDie Lage ist erstklassig, U-Bahn und Supermarkt nicht mehr als 150 Meter entfernt.\r\nWir habe uns sehr wohl gefühlt und können uns nicht beklagen. Es ist jedem zu empfehlen der New York als Stadt erkunden will.\r\nJederzeit wieder!!\r\n"
                        },
                        {
                            "at": "2013-09-29T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb035",
                                "fullname": "Ilya",
                                "imgUrl": "https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_x_medium",
                                "id": "2759351"
                            },
                            "txt": "Very nice and big enough basement apartment with two rooms. Clean and nicely furnished with a good wide bed in one room and a sofa in kitchen, with all necessary dishes and coffee machine (Michelle even provided us with coffee for it) That was much more than enough for two persons. Also we used bbq in the court which also was great. Michelle was hospitable enough to meet us in the middle of the night!  We didn`t have any problems at all living in such kind of apartment. Should notice that the connection to Mahattan is a little complicated given the G metro line which is not very frequent. But in general the enviroment is quite ok with nice dominican dely on the corner of the street (highly recomended!) "
                        },
                        {
                            "at": "2013-10-02T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fac89",
                                "fullname": "Marcel",
                                "imgUrl": "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_x_medium",
                                "id": "6108605"
                            },
                            "txt": "Michelle was a nice person and really easy to communicate. We had a great time in this big apartment and no problem with to get into the city."
                        },
                        {
                            "at": "2013-10-05T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb1fb",
                                "fullname": "Gabriel",
                                "imgUrl": "https://a0.muscache.com/im/users/31635864/profile_pic/1429604852/original.jpg?aki_policy=profile_x_medium",
                                "id": "9039463"
                            },
                            "txt": "Very nice place!\r\nMichelle is very friendly, helpfull and a nice person to chat with.\r\nThe place is very clean, homy feeling. The Subway is less than 100 yards away (about 1/2 hour ride from midtown Manhattan) which is VERY convenient. Neighbourhood ok. At the end of the day is much nicer to come to instead of a \"cold\" hotel room! The back yard is great for morning / evening coffe or even BBQ (the grill is already there).\r\nThank you Michelle  :-)\r\nתודה רבה (Hebrew)"
                        },
                        {
                            "at": "2013-10-13T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb7c7",
                                "fullname": "Roberta",
                                "imgUrl": "https://robohash.org/7527666?set=set1",
                                "id": "7527666"
                            },
                            "txt": "Michelle is a fantastic host, she made us  feel very welcome.\r\nThe place was clean and perfectly organized,  quiet at night, 4 very comfortable sleeping places, safe neighborhood, we had everything we needed. the subway is literally 1minute walk from the apartment, you get to Manhattan in 20 minutes. There are also buses that take you in no time to down town Brooklyn and Williamsburg. Supermarket is around the corner. Bakery for great breakfasts and deliciuos donuts place at 2 minutes walk from home.\r\nThe back garden is also very nice, we were too busy walking all day long, but it gave us a sense of big space, on a nice day you could spend time outside and enjoy a private corner of open air.\r\nIf I have the chance to go to New York again, I will surely go back to Michelle!"
                        },
                        {
                            "at": "2013-10-16T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164faf5e",
                                "fullname": "Arnaud",
                                "imgUrl": "https://robohash.org/5053776?set=set1",
                                "id": "5053776"
                            },
                            "txt": "Everything was great in your apartment. Nice place, nice neighborhood with a subway station very close to the apartment. Thank you Michelle ! :-) "
                        },
                        {
                            "at": "2013-11-02T04:00:00.000Z",
                            "by": {
                                "_id": "622f3408e36c59e6164fc085",
                                "fullname": "Yol",
                                "imgUrl": "https://robohash.org/9079030?set=set1",
                                "id": "9079030"
                            },
                            "txt": "Notre expérience à l'appartement de Michelle fut merveilleuse! J'y suis aller avec mes parents, qui n'avaient jamais mis les pieds à Brooklyn, et ils furent enchantés par la proximité du métro, de l'épicerie, par la grandeur de l'appartement et ses facilités. Je recommande fortement l'appartement de Michelle, et j'y retournerai assurément à mon prochain séjour à New York!\n-----\nOur experience at Michelle's apartment was wonderful! I'm going with my parents, who had never been to Brooklyn, and they were delighted with the nearby subway, grocery, the size of the apartment and its facilities. I highly recommend the Michelle's apartment, and I certainly return on my next trip to New York!\nYol\nYol"
                        },
                        {
                            "at": "2013-11-21T05:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fc040",
                                "fullname": "Mara",
                                "imgUrl": "https://robohash.org/8579265?set=set1",
                                "id": "8579265"
                            },
                            "txt": "Io e la mia famiglia siamo stati 20 giorni nell'appartamento di Michelle e siamo stati benissimo. Appartamento con ingresso indipendente, pulito, ben tenuto e con tutto il necessario per 4 persone. I letti sono veramente comodi (non si trovano facilmente nelle case per vacanze). Vicinissimo alla metropolitana, si raggiunge Manhattan in poco tempo, e vicino ad alcuni market, per cui fare la spesa è stato facile. La zona è abbastanza tranquilla, si rientrava anche a sera tardi ma non abbiamo avuto nessun problema. Michelle è una persona molto simpatica, molto disponibile e molto discreta. consiglierei sicuramente di passare una vacanza nel suo appartamento. Grazie ancora Michelle ...e speriamo arrivederci!! I love NY"
                        },
                        {
                            "at": "2013-11-29T05:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fafdc",
                                "fullname": "Dovile",
                                "imgUrl": "https://robohash.org/8080976?set=set1",
                                "id": "8080976"
                            },
                            "txt": "Michelle was great host for my parents and very helpful in arranging taxi, showing shops and answering questions about New York. Her flat located just next to the metro station, which made it easy to get to the downtown. Had some minor problems with the radiator but Michelle took care of that so were no bigger issues. Recommended! "
                        },
                        {
                            "at": "2013-12-05T05:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbceb",
                                "fullname": "Mert",
                                "imgUrl": "https://robohash.org/9190807?set=set1",
                                "id": "9190807"
                            },
                            "txt": "This was my first time to use the Airbnb and I'm glad I chose Michelle and her house. \r\nThe house is as it's seen on the pictures. It is pretty good size for three people. My parents slept on the bed and I slept on the couch. I am 180 cm (5' 11'') and fit on the couch and it was pretty comfortable.\r\nWhen we arrived Michelle's house she greeted us right away, took her time to explain how to commute, where to eat and what to do in the city. \r\nThe location of house is pretty good. It takes 20-30 min with metro to Manhattan downtown, depends on which line you use. You can also take the metro from JFK, otherwise the cab costs  around $50. In the house everything was clean and neat. She also provided us towels for shower etc. Besides that, whenever I texted to Michelle she responded in timely manner, which made everything easier.\r\nHonestly, our overall experience was much better than I expected.  Me and my family had a very good time in Michelle's house and NY. If one day I go back to NY, I know where I should stay. \r\n"
                        },
                        {
                            "at": "2013-12-18T05:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fba96",
                                "fullname": "Annette",
                                "imgUrl": "https://robohash.org/903552?set=set1",
                                "id": "903552"
                            },
                            "txt": "We spent a wonderful week at Michelle's place. She was very nice and took care of what ever we needed. The apartment is just 2 min from the subway which helped us get to Manhattan quickly."
                        },
                        {
                            "at": "2013-12-21T05:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbbc4",
                                "fullname": "Ivan",
                                "imgUrl": "https://robohash.org/9952299?set=set1",
                                "id": "9952299"
                            },
                            "txt": "Michelle is really nice and her place is very cozy. This was my first airbnb experience and I enjoyed it a lot. Her service is much better than anything you would get at a hotel for a much better price. She gave us a recommendation on where to get breakfast that turned out great. The place is very clean and neatly decorated. It's literally right off the subway station, so that's a huge plus. We also met her mother, who is a fascinating woman. I highly recommend her place, if you are looking to visit the area.  \r\n-- Later Edit:\r\nI should mention that her internet is very fast. I don't know what ISP she uses, but it was a joy to go back to a temporary accommodation and know that you are well connected while traveling. I'm not sure of the exact setup, but it appeared that we had a separate modem and router just for us. This was a huge relief. Michelle had the SSID and password printed and ready for guests, so even if you forget to ask, you would still find them in the apartment. Overall, things were very well thought out before hand and Michelle was very proactive with tiny details like this that make all the difference. This was very surprising to me knowing that I'm dealing with an individual and not a company.   "
                        },
                        {
                            "at": "2014-01-01T05:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb085",
                                "fullname": "Aurelie",
                                "imgUrl": "https://robohash.org/8672189?set=set1",
                                "id": "8672189"
                            },
                            "txt": "Michelle was very nice and her flat is very confortable, well located with the subway at the end of the street. I recommend her. Thanks a lot Michelle and see you later."
                        },
                        {
                            "at": "2014-01-09T05:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fae32",
                                "fullname": "Anton",
                                "imgUrl": "https://robohash.org/9849330?set=set1",
                                "id": "9849330"
                            },
                            "txt": "Michelle was an outstanding host and very helpful, apartment clean and convenient."
                        },
                        {
                            "at": "2014-01-21T05:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fae8d",
                                "fullname": "Kyle",
                                "imgUrl": "https://robohash.org/10974375?set=set1",
                                "id": "10974375"
                            },
                            "txt": "Amazing 4 day stay with Michelle in Brooklyn! We arrived a little early but she was still able to find time to accommodate us...arriving with fresh fruit and water for us. The apartment is amazing, plenty of room with all the comforts you could ask for (small kitchen/TV with cable/wifi). Easy access to trains and transportation, with many restaurants near by. After this stay, I don't think I'll be booking a traditional hotel in NYC again. Highly recommended!! Thanks again Michelle!"
                        },
                        {
                            "at": "2014-02-26T05:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fadd9",
                                "fullname": "Sarah",
                                "imgUrl": "https://robohash.org/5247367?set=set1",
                                "id": "5247367"
                            },
                            "txt": "Très joli appartement dans Brooklyn! J'ai été agréablement surprise :) ! Nous y avons passé 4 nuits, et l'appart est parfait pour accommoder de 2 à 4 personnes. Très sympa de pouvoir rentrer pour prendre un verre ou déjeuner \"à la maison\". \r\nLe quartier n'est pas le plus trendy de brooklyn mais le métro est littéralement à 1 minute à pied! Michelle était charmante et tout était parfait! Et en plus, aucun problème pour stationner la voiture dans la rue, devant la maison! Merci!!!"
                        },
                        {
                            "at": "2014-03-04T05:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbe48",
                                "fullname": "Francisco",
                                "imgUrl": "https://robohash.org/10988436?set=set1",
                                "id": "10988436"
                            },
                            "txt": "Hermoso lugar, muy limpio. Michelle nos ayudó en todo momento y nos ofreció dejar las valijas gratuitamente unas horas aún cuando ya había pasado el tiempo del check out, el lugar es más lindo que en las fotos, y a muy pocas estaciones del downtown de Manhattan, 100% recomendable!\r\nA pesar de que había nieve no se sentía nada de frío, excelente calefacción. El patio trasero era muy bonito y se veían ardillas!\r\nHay supermercado y KFC muy cerca, y es cómodo que esté a metros del subte.\r\n\r\nMichelle is a great  hostess, she helped us with everything and even oferred to keep our lugagge some hours after the check out. \r\nThe place is perfect, there are groceries, KFC, subway station, and it´s 20-30 mins from downtown Manhattan! \r\nBeautiful place, very comfy and cozy, everything was clean. We couldn´t enjoy the backyard because the chill, but it was awesome! and there were some lovely squirrels! We want to come back some year, and sure will recommend it to our friends"
                        },
                        {
                            "at": "2014-03-15T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb3a3",
                                "fullname": "Yann",
                                "imgUrl": "https://robohash.org/11182347?set=set1",
                                "id": "11182347"
                            },
                            "txt": "Nous rentrons d'un séjour de 8 jours à NYC où nous avons séjourn (Website hidden by Airbnb) Adultes et 2 ados) chez Michelle début mars. nous en sommes ravis malgré des températures froides.\r\n==)positifs: \r\nBon compromis rapport qualité / prix. La proximité avec une station de métro est un plus ainsi que celle de l'épicerie permettant de faire les petites courses pour les repas pris au gite. Michelle est extrêmement accueillante et serviable. \r\nl'appartement est simple et très propres. 4 vrai lits confortables. \r\n==)négatifs:\r\nbien que situé dans un quartier + calme, la chambre donne sur la rue, et les nuits peuvent être difficiles pour les oreilles sensibles. le métro qui passe dessous est audible, tout comme les avions. mais à New York , il est difficile de trouver une endroit très calme. NEW YORK reste un environnement urbain et donc globalement bruyant, autant en avoir conscience. \r\nPour une famille de 4, les lits enfants sont dans la pièce qui sert de coin jour. Une table et chaises pliantes nécessitent d'être pliés  pour installer le 4ième lit et inversement, plier le lit pour prendre les repas. Pour les français que nous sommes, la table est aussi importante que le lit. ça peut être un problème. \r\nPeu de vaisselle ( verres en plastique) ce qui est un peu dommage mais ça reste un détail.\r\nMais quand on vient à New York, ce n'est pas pour une ballade gastronomique. Nous recommandons vraiment cette adresse. Très bon compromis.\r\nLa cours arrière sera appréciable pour les périodes + douces.\r\n\r\nEnglish comments:\r\nJust returned from NYC where we stayed with our 2 teenagers in Michelle's appartement. We are really delighted .\r\n\r\n==)positives:\r\nGood compromise quality / price ratio . Proximity to a metro station is a must as well as with the grocery store allowing some errands for meals at the appartement. really practical, opened until 21h. Michelle is extremely friendly and helpful.\r\nthe appartment is simple but  very clean with 4 real comfortable beds.\r\n\r\n==)negatives:\r\nAlthough located in a quiet neighborhood, the parent room is overlooking the street, and the nights can be difficult for sensitive ears. Subway is audible,as well as stay & trucks in the street. But to moderate this aspect,  in New York, it's difficult to find a quiet place because it remains a generally noisy urban environment as knowledge.\r\nFor a family of 4, children beds are in the main room. A table and chairs need to be folded to open beds and vice versa, folding bed for meals. it could be a problem.\r\nVery few dishes ( plastic glasses ) which could be improved but it's still a detail.\r\n\r\nBut when we come to visit New York, it is not for gastronomic ballad, and it's important  to find a confortable & clean area. The backyard could be pleasant when the weather allows to use it. Unfortunatelly for us it's was too cold begining of march.\r\nWe really recommend this address.\r\nMany thanks to Michelle.\r\n\r\nPascale et Yann."
                        }
                    ],
                    "_id": "622f337b75c7d36e498aabbc",
                    "imgUrls": [
                        "036.jpeg",
                        "008.jpeg",
                        "066.jpeg",
                        "072.jpeg",
                        "122.jpeg"
                    ]
                },
                {
                    "name": "Tamarama Penthouse",
                    "summary": "If you want to be close by Tamarama and Bondi, this is the Beach Pad for you. Tucked away in a quiet cul-de-sac and only a stone's throw to the beach they call \"Glamarama\" and minutes walk away from Bondi and Bronte Beaches.",
                    "interaction": "I am happy to assist you during your stay. Just give me a hola on the mobile should you need anything.",
                    "houseRules": "Respect our neighbours (no parties or loud music late at night), smoking on only the balcony only and keep the apartment clean and tidy. Treat the place as if it were your own.",
                    "propertyType": "Apartment",
                    "roomType": "Entire home/apt",
                    "bedType": "Real Bed",
                    "cancellationPolicy": "strict_14_with_grace_period",
                    "capacity": 7,
                    "bedrooms": 3,
                    "beds": 3,
                    "numOfReviews": 27,
                    "amenities": [
                        "TV",
                        "Iron",
                        "Wifi",
                        "Pool",
                        "Air conditioning",
                        "Kitchen",
                        "Heating",
                        "Shampoo",
                        "Smoke detector",
                        "Fire-extinguisher",
                        "Family-kid friendly",
                        "Hair dryer",
                        "Smoke detector",
                        "Fire-extinguisher",
                        "Free parking on premises",
                        "Essentials",
                        "Washer",
                        "Shampoo",
                        "24-hour check-in",
                        "Hangers",
                        "Hair dryer",
                        "Iron",
                        "Laptop friendly workspace",
                        "Private entrance",
                        "Hot water",
                        "Bed linens"
                    ],
                    "host": {
                        "_id": "622f3402e36c59e6164fabfe",
                        "fullname": "Lizzy",
                        "location": "Sydney, New South Wales, Australia",
                        "about": "I am a Executive Producer based in Sydney that works in advertising and cross-media entertainment.\r\n",
                        "responseTime": "within an hour",
                        "thumbnailUrl": "https://a0.muscache.com/im/users/118676/profile_pic/1417000371/original.jpg?aki_policy=profile_small",
                        "pictureUrl": "https://a0.muscache.com/im/pictures/c9b876fc-b30e-4951-8f88-af9add00939e.jpg?aki_policy=profile_x_medium",
                        "isSuperhost": true,
                        "id": "118676"
                    },
                    "address": {
                        "street": "Tamarama, NSW, Australia",
                        "country": "Australia",
                        "location": {
                            "lat": 151.26982,
                            "lan": -33.89741
                        },
                        "countryCode": "AU",
                        "city": "Sydney"
                    },
                    "id": "12098138",
                    "bathrooms": 2,
                    "price": 225,
                    "securityDeposit": 2000,
                    "cleaningFee": 200,
                    "extraPeople": 20,
                    "reviewScores": {
                        "accuracy": 10,
                        "cleanliness": 10,
                        "checkin": 10,
                        "communication": 10,
                        "location": 10,
                        "value": 10,
                        "rating": 99
                    },
                    "reviews": [{
                            "at": "2016-12-07T05:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164faefe",
                                "fullname": "Andy",
                                "imgUrl": "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_x_medium",
                                "id": "10999931"
                            },
                            "txt": "Lizzy's Tamarama pad is a truly outstanding property.  It's amazingly well equipped, spacious, with stunning outlook (from an enormous terrace) and its beautifully maintained.  Lizzy is an absolute pleasure to deal with.  This is a unique property with a wonderful relaxed feel to it.  Also a perfect place to get some serious work done - its quite inspiring."
                        },
                        {
                            "at": "2016-12-27T05:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbd9e",
                                "fullname": "Zosha",
                                "imgUrl": "https://a0.muscache.com/im/pictures/87b9ccba-154a-4546-8cbe-8bdb25ddb36c.jpg?aki_policy=profile_x_medium",
                                "id": "4351976"
                            },
                            "txt": "Lizzy was the best host, and we fell in love with her beautiful home in the best spot in Sydney.  \nHer home is beautifully equipped with everything you need for a beach holiday, and Lizzy is just downstairs if you need anything. Tamarama beach is literally a 2 minute walk, and our kids spent a lot of time playing in the grassy patch if they weren't catching waves! We have had the best holiday and will definitely be back. \n "
                        },
                        {
                            "at": "2017-02-28T05:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb60e",
                                "fullname": "Anna",
                                "imgUrl": "https://a0.muscache.com/im/pictures/c9b876fc-b30e-4951-8f88-af9add00939e.jpg?aki_policy=profile_x_medium",
                                "id": "4740734"
                            },
                            "txt": "What a place!! What a host!! It s a dream, watching the beach earing the see lying on a dayboat bed. The place is huge and very close to amazing beaches and beautiful costal promenades... lizzie was a super host, very helpfull and carefull about us having a good time. \nThe terrasse is superb\nThis place is marvellous!! We had a fantastic family time there we wont forgett"
                        },
                        {
                            "at": "2017-03-01T05:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb9bc",
                                "fullname": "Johnny",
                                "imgUrl": "https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_x_medium",
                                "id": "61652794"
                            },
                            "txt": "The big question for me is would I want to stay here again, and the answer is yes - in a heartbeat.\n\nTo watch the sun rise over Tamarama beach from the comfort of all the cushions in the 'boat' in the sitting room was a delight. Not an early riser? Don't worry, the lorikeets will have you up in plenty of time....!"
                        },
                        {
                            "at": "2017-04-15T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fb9e0",
                                "fullname": "Leigh",
                                "imgUrl": "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_x_medium",
                                "id": "124315236"
                            },
                            "txt": "Set between Bondi beach and Bronte beach which are easy to walk to. Superb local beach for family and easy to grab an uber to the city. really enjoyed the location and weather."
                        },
                        {
                            "at": "2017-07-09T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164facfd",
                                "fullname": "Luz",
                                "imgUrl": "https://a0.muscache.com/im/users/31635864/profile_pic/1429604852/original.jpg?aki_policy=profile_x_medium",
                                "id": "129991448"
                            },
                            "txt": "This place is pure magic! I had the most wonderful time with family and we had everything we needed in the house. The location the quiet and friiendly neighbourhood and the spectacular view of the ocean day and night makes this place a MUST to experience. Add to that a gracious host to welcone you and who is always around to assist. Highly recommended for families!"
                        },
                        {
                            "at": "2017-08-15T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb055",
                                "fullname": "Emma",
                                "imgUrl": "https://robohash.org/20784540?set=set1",
                                "id": "20784540"
                            },
                            "txt": "We had an fantastic stay in Lizzy's apartment. The location was excellent and Lizzy was so helpful and accommodating (making sure we had some breakfast provisions after we arrived late at night which was so very much appreciated). The apartment was more than spacious enough for our family of 5. The worst thing about this apartment was having to leave those amazing views behind when we left! I would definitely recommend this apartment to anyone else and would stay here again."
                        },
                        {
                            "at": "2017-09-05T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb695",
                                "fullname": "Michael",
                                "imgUrl": "https://robohash.org/44949?set=set1",
                                "id": "44949"
                            },
                            "txt": "Great place right on Tamara Beach. Very cosy and great host who kept in contact prior and through our visit making it very comfortable for us. Easy check in, nice walking areas & very close to cafe's Bondi and surrounding beaches, Bondi Junction for shopping and an easy drive to City. Big spacious apartment with beautiful views and good entertaining areas. And a nice day bed (boat) overlooking beach for the perfect afternoon nap."
                        },
                        {
                            "at": "2017-10-09T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb493",
                                "fullname": "Reiko",
                                "imgUrl": "https://robohash.org/139076135?set=set1",
                                "id": "139076135"
                            },
                            "txt": "We could have really beautiful time with my family in Lizzy's apartment.\nThe view was so wonderful that we enjoyed day and night at balcony.\nFor my 3 years old baby,everything is perfect. We wanna be back someday.\nWe really appreciate Lizzy's kindness and helpfulness.\nThank you for everything."
                        },
                        {
                            "at": "2017-12-12T05:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbfe1",
                                "fullname": "Lucas",
                                "imgUrl": "https://robohash.org/7562851?set=set1",
                                "id": "7562851"
                            },
                            "txt": "This is a fantastic apartment. The view is to die for. It’s very large. It has great facilities. And Lizzy is really helpful. We couldn’t have asked for a better place to stay. We came with 2 very small kids looking for a chilled out holiday in a cool area - this was perfect. Can’t wait to come back."
                        },
                        {
                            "at": "2017-12-21T05:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb99b",
                                "fullname": "Hamish",
                                "imgUrl": "https://robohash.org/826010?set=set1",
                                "id": "826010"
                            },
                            "txt": "Lizzy's place is fantastic! Beautiful view of Tamarama beach and only minutes walk from lots of shops and restaurants on Bondi road. Apartment is full of beautiful touches. Highly recommended!"
                        },
                        {
                            "at": "2018-01-06T05:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb82f",
                                "fullname": "Josh",
                                "imgUrl": "https://robohash.org/60708104?set=set1",
                                "id": "60708104"
                            },
                            "txt": "Great host, hospitality and place to stay at. We had a group of 5 and there was plenty of room. Would definitely recommend for anyone looking to visit Sydney and the eastern beaches.\nThanks Lizzy!"
                        },
                        {
                            "at": "2018-01-14T05:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb8d8",
                                "fullname": "Sarah",
                                "imgUrl": "https://robohash.org/603099?set=set1",
                                "id": "603099"
                            },
                            "txt": "If you’re looking for a truly magical stay in Tama this is the place. During our week long stay we never wanted to leave the apartment that was peaceful and zen like. We enjoyed our mornings checking the surf from the balcony and then walking barefoot to the beach for multiple swims. \n\nTruly it’s a slice of heaven."
                        },
                        {
                            "at": "2018-02-25T05:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb959",
                                "fullname": "Maysa",
                                "imgUrl": "https://robohash.org/3221747?set=set1",
                                "id": "3221747"
                            },
                            "txt": "Lizzys house is an amazing spot in sydney.\nTamarama is so nice and close to bronte pool that i personally lovee\nAlso lizZy have alot of details with us. She is always responding in a small time!\nThe house is just perfect!\nWe are looking forward to come back\nI really love this place and fully recomend it!!!!"
                        },
                        {
                            "at": "2018-03-17T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fad04",
                                "fullname": "Olivia",
                                "imgUrl": "https://robohash.org/39669237?set=set1",
                                "id": "39669237"
                            },
                            "txt": "Such a wonderful stay! Lizzy’s apartment is the best place to  stay in the Eastern Suburbs. Convenient, very clean, perfect for families and just above the beach! Last but not least, Lizzy is a great host, making sure we had all what we needed and very responsive. Thank you again for a wonderful stay!"
                        },
                        {
                            "at": "2018-04-03T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb596",
                                "fullname": "Michael",
                                "imgUrl": "https://robohash.org/28487228?set=set1",
                                "id": "28487228"
                            },
                            "txt": "This apartment is excellent - location is a stone's throw to the beach, coastal walk and great cafes, fantastic view, and a really well kept, comfortable and complete apartment for a family.  Thoroughly recommended"
                        },
                        {
                            "at": "2018-04-10T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbd1d",
                                "fullname": "Hannah",
                                "imgUrl": "https://robohash.org/115378822?set=set1",
                                "id": "115378822"
                            },
                            "txt": "Lizzy's place is just perfect! It is beautifully decorated and has a lovely calm and airy atmosphere. Very well appointed with everything you would need and a lovely balcony and day bed boat over looking the beach to chill. We took our two small children and it is a very baby/child friendly space. We were very comfortable and I would definitely recommend Lizzy's place and should we be in Sydney again we would definitely stay there."
                        },
                        {
                            "at": "2018-05-20T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb9a7",
                                "fullname": "Andrew",
                                "imgUrl": "https://robohash.org/4140594?set=set1",
                                "id": "4140594"
                            },
                            "txt": "The house was beautiful and Lizzy was the most attentive host. The view from the house was heavenly and the neighborhood was perfect. Highly recommend!"
                        },
                        {
                            "at": "2018-06-13T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fad40",
                                "fullname": "力",
                                "imgUrl": "https://robohash.org/117608429?set=set1",
                                "id": "117608429"
                            },
                            "txt": "Lizzy is a wonderful and kind host,  her plac is walking-distane to a great park and beach, fifteen minute to bondi beach as well"
                        },
                        {
                            "at": "2018-06-27T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb6c5",
                                "fullname": "Mary",
                                "imgUrl": "https://robohash.org/34991610?set=set1",
                                "id": "34991610"
                            },
                            "txt": "We loved staying at Lizzy’s place!  The location was fantastic!  The view from the apartment was spectacular!  Super cool Home and we especially loved the boat “couch” in the living room!"
                        }
                    ],
                    "_id": "622f337b75c7d36e498aab82",
                    "imgUrls": [
                        "010.jpeg",
                        "078.jpeg",
                        "012.jpeg",
                        "138.jpeg",
                        "134.jpeg"
                    ]
                },
                {
                    "name": "Westin Kaanapali",
                    "summary": "Westin Kaanapali Ocean Resort Villas North timeshare - Pay resort: $14-20/day, stays under 7 night $38/res - Inquire about availability, I review then offer/approve if available :) - READ \"The Space\" for cleaning/etc AND brief explanation about timeshare reservations - Want guaranteed view for additional cost? Must be weekly rental, other restrictions - Wheelchair accessible / ADA, call resort directly to ensure U receive. If U need ADA U MUST inform us BEFORE booking.",
                    "interaction": "There are activities programs and concierge activities booking services at this resort.",
                    "houseRules": "No smoking; No Pets; This resort's rules apply. Please call the resort directly to verify details.",
                    "propertyType": "Serviced apartment",
                    "roomType": "Entire home/apt",
                    "bedType": "Real Bed",
                    "cancellationPolicy": "strict_14_with_grace_period",
                    "capacity": 8,
                    "bedrooms": 2,
                    "beds": 4,
                    "numOfReviews": 9,
                    "amenities": [
                        "TV",
                        "Cable TV",
                        "Internet",
                        "Wifi",
                        "Air conditioning",
                        "Pool",
                        "Kitchen",
                        "Hair dryer",
                        "Smoke detector",
                        "Carbon monoxide detector",
                        "Doorman",
                        "Gym",
                        "Elevator",
                        "Hot tub",
                        "Heating",
                        "Family/kid friendly",
                        "Suitable for events",
                        "Washer",
                        "Smoke detector",
                        "Carbon monoxide detector",
                        "First aid kit",
                        "Safety card",
                        "Fire extinguisher",
                        "Essentials",
                        "Shampoo",
                        "24-hour check-in",
                        "Hangers",
                        "Hair dryer",
                        "Iron",
                        "Laptop friendly workspace",
                        "Self check-in",
                        "Building staff",
                        "Private entrance",
                        "Room-darkening shades",
                        "Hot water",
                        "Bed linens",
                        "Extra pillows and blankets",
                        "Ethernet connection",
                        "Luggage dropoff allowed",
                        "Long term stays allowed",
                        "Ground floor access",
                        "Wide hallway clearance",
                        "Step-free access",
                        "Wide doorway",
                        "Flat path to front door",
                        "Well-lit path to entrance",
                        "Disabled parking spot",
                        "Step-free access",
                        "Wide doorway",
                        "Wide clearance to bed",
                        "Step-free access",
                        "Wide doorway",
                        "Step-free access",
                        "Wide entryway",
                        "Waterfront",
                        "Beachfront"
                    ],
                    "host": {
                        "_id": "622f3403e36c59e6164faf93",
                        "fullname": "Patty And Beckett",
                        "location": "Eureka, California, United States",
                        "about": "Adventurous couple loves to travel :)",
                        "responseTime": "within an hour",
                        "thumbnailUrl": "https://a0.muscache.com/im/pictures/542dba0c-eb1b-4ab3-85f3-94d3cc8f87a4.jpg?aki_policy=profile_small",
                        "pictureUrl": "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_x_medium",
                        "isSuperhost": true,
                        "id": "36133410"
                    },
                    "address": {
                        "street": "Lahaina, HI, United States",
                        "country": "United States",
                        "location": {
                            "lat": -156.6917,
                            "lan": 20.93792
                        },
                        "countryCode": "US",
                        "city": "Maui"
                    },
                    "id": "12223067",
                    "bathrooms": 2,
                    "price": 595,
                    "securityDeposit": 500,
                    "cleaningFee": null,
                    "extraPeople": 0,
                    "reviewScores": {
                        "accuracy": 10,
                        "cleanliness": 10,
                        "checkin": 10,
                        "communication": 10,
                        "location": 10,
                        "value": 10,
                        "rating": 98
                    },
                    "reviews": [{
                            "at": "2016-06-12T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fc004",
                                "fullname": "Kiesha",
                                "imgUrl": "https://robohash.org/10711825?set=set1",
                                "id": "10711825"
                            },
                            "txt": "I had a great experience working with Patty and Peter.  Both were very attentive in sorting out the booking details and following up directly when I had questions.  I rented a 2 bedroom unit at the Westin Villas  in Maui and both the unit and property was absolutely amazing.  I think we had the best unit on the resort complete with 2 outdoor patios with direct access  to  the  beach.  I would HIGHLY recommend renting with Patty and Peter."
                        },
                        {
                            "at": "2016-07-28T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb204",
                                "fullname": "Chris",
                                "imgUrl": "https://robohash.org/70072865?set=set1",
                                "id": "70072865"
                            },
                            "txt": "Peter quickly responded to any questions I had before, and during the trip. Will use again, highly recommend. "
                        },
                        {
                            "at": "2016-09-11T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb703",
                                "fullname": "Kim",
                                "imgUrl": "https://robohash.org/71179725?set=set1",
                                "id": "71179725"
                            },
                            "txt": "We had the perfect location for a room, first floor right in front of the pool. The resort is beautiful, and the staff is so friendly! I enjoyed it so much, we talked about buying a timeshare ourselves."
                        },
                        {
                            "at": "2017-01-07T05:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb37f",
                                "fullname": "Tracy",
                                "imgUrl": "https://robohash.org/65593239?set=set1",
                                "id": "65593239"
                            },
                            "txt": "Beautiful location. Patty & Peter were super helpful and easy to work with!"
                        },
                        {
                            "at": "2017-04-07T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb105",
                                "fullname": "Duyen",
                                "imgUrl": "https://robohash.org/26215688?set=set1",
                                "id": "26215688"
                            },
                            "txt": "Great spot for the kids and family and close to beach and everything at the resort. We will definitely be back."
                        },
                        {
                            "at": "2017-05-09T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fabbe",
                                "fullname": "Binh",
                                "imgUrl": "https://robohash.org/117390236?set=set1",
                                "id": "117390236"
                            },
                            "txt": "The unit and the Westin offer variety of amenities you can possibly ask for. Sofa beds are very comfortable to sleep in. But there is charge for ocean view upgrade. Overall, I highly recommend to book with Patty and Peter. "
                        },
                        {
                            "at": "2018-02-24T05:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb4af",
                                "fullname": "Samy",
                                "imgUrl": "https://robohash.org/15143517?set=set1",
                                "id": "15143517"
                            },
                            "txt": "We spent a great week at Patty and Peter's place. The place was exactly as shown in the pictures, very comfortable, nice view, with all amenities. The resort is great with several pools, a long beach, many restaurants, and of course a lot of great activities all around."
                        },
                        {
                            "at": "2018-06-16T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb87b",
                                "fullname": "Breanne",
                                "imgUrl": "https://robohash.org/78173091?set=set1",
                                "id": "78173091"
                            },
                            "txt": "This place was perfect for my family. We had plenty of room to spread out and the service could not have been any better"
                        },
                        {
                            "at": "2018-06-29T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb713",
                                "fullname": "Kimberly",
                                "imgUrl": "https://robohash.org/100535039?set=set1",
                                "id": "100535039"
                            },
                            "txt": "We love Westin Kaanapalli"
                        }
                    ],
                    "_id": "622f337a75c7d36e498aaaf8",
                    "imgUrls": [
                        "090.jpeg",
                        "010.jpeg",
                        "153.jpeg",
                        "093.jpeg",
                        "094.jpeg"
                    ]
                },
                {
                    "name": "Belle chambre à côté",
                    "summary": "Chambre dans un bel appartement moderne avec balcon, ascenseur et terrasse. Private room in a beautiful modern apartment  with balcony, elevator and patio. La chambre est fermée avec une lit double. Vous aurez accès à une salle de bain avec une douche, terrasse. L'appartement est climatisé.  Votre chambre est équipé d'une connexion Wi-Fi illimité. Vous serez proche du centre ville, au pied du pont Jacques Cartier et à distance de marche de toutes les commodités (métro, supermarché, pharmacie",
                    "interaction": "J'adore recevoir mes invités personnellement mais il arrive que je ne puis être sur place lors de votre arrivée.",
                    "houseRules": "",
                    "propertyType": "Apartment",
                    "roomType": "Private room",
                    "bedType": "Real Bed",
                    "cancellationPolicy": "moderate",
                    "capacity": 2,
                    "bedrooms": 1,
                    "beds": 1,
                    "numOfReviews": 4,
                    "amenities": [
                        "TV",
                        "Wifi",
                        "Air conditioning",
                        "Kitchen",
                        "Heating",
                        "Family-kid friendly",
                        "Buzzer-wireless intercom",
                        "Hair dryer",
                        "Smoke detector",
                        "Carbon monoxide detector",
                        "Essentials",
                        "Elevator",
                        "Washer",
                        "Iron",
                        "translation missing: en.hosting_amenity_50"
                    ],
                    "host": {
                        "_id": "622f3401e36c59e6164fabab",
                        "fullname": "Angel",
                        "location": "Montreal, Québec, Canada",
                        "about": "",
                        "thumbnailUrl": "https://a0.muscache.com/im/pictures/12be1141-74de-4f04-bf28-82c3ed589d11.jpg?aki_policy=profile_small",
                        "pictureUrl": "https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_x_medium",
                        "isSuperhost": false,
                        "id": "80344827"
                    },
                    "address": {
                        "street": "Montréal, QC, Canada",
                        "country": "Canada",
                        "location": {
                            "lat": -73.54985,
                            "lan": 45.52797
                        },
                        "countryCode": "CA",
                        "city": "Montreal"
                    },
                    "id": "13732894",
                    "bathrooms": 1,
                    "price": 30,
                    "securityDeposit": 150,
                    "cleaningFee": 8,
                    "extraPeople": 15,
                    "reviewScores": {
                        "accuracy": 10,
                        "cleanliness": 9,
                        "checkin": 10,
                        "communication": 10,
                        "location": 9,
                        "value": 10,
                        "rating": 100
                    },
                    "reviews": [{
                            "at": "2016-07-07T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fc058",
                                "fullname": "Rowan",
                                "imgUrl": "https://robohash.org/81703602?set=set1",
                                "id": "81703602"
                            },
                            "txt": "The place was great, as was the host! I would recommend staying here."
                        },
                        {
                            "at": "2016-07-08T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb274",
                                "fullname": "Adriana",
                                "imgUrl": "https://robohash.org/64310987?set=set1",
                                "id": "64310987"
                            },
                            "txt": "J'ai adoré rester là. Très acceuillant."
                        },
                        {
                            "at": "2016-07-12T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb87c",
                                "fullname": "Emma",
                                "imgUrl": "https://robohash.org/23709900?set=set1",
                                "id": "23709900"
                            },
                            "txt": "Angel est un hôte très sympa et arrangeant ! L'appartement est agréable à vivre et propre. Proche du métro et du centre ville. Nous avons passé un très bon séjour !"
                        },
                        {
                            "at": "2016-08-02T04:00:00.000Z",
                            "by": {
                                "_id": "622f3408e36c59e6164fc082",
                                "fullname": "Jeffery",
                                "imgUrl": "https://robohash.org/44882622?set=set1",
                                "id": "44882622"
                            },
                            "txt": "Angel was warm and welcoming and has a beautiful apartment. I'd recommend his place to anyone visiting downtown Montreal!"
                        }
                    ],
                    "_id": "622f337a75c7d36e498aaaf9",
                    "imgUrls": [
                        "074.jpeg",
                        "077.jpeg",
                        "060.jpeg",
                        "110.jpeg",
                        "086.jpeg"
                    ]
                },
                {
                    "name": "M&M Space MM2  Apartamento no centro da cidade",
                    "summary": "O apartamento fica perto de arte e cultura e dos mais belos monumentos da cidade. Belos jardins e paisagens da cidade e do rio Douro ficam perto e podem ser apreciadas.  Existem restaurantes típicos e de comida internacional ao redor do apartamento.   O espaço fica numa rua típica da cidade, cheia da sua magia e magnetismo e é muito pratico e confortável. O espaço é excelente para quem pretende visitar e conhecer a zona histórica e turística do Porto. Transportes públicos ficam próximos.",
                    "interaction": "Será prestada ajuda aos hospedes, 24 horas por dia, desde que solicitada.",
                    "houseRules": "- Devem respeitar o restantes hospedes a morar no prédio evitando barulhos excessivos. - Animais de estimação: Questionar o proprietário. Podem ser permitidos a um custo extra a acordar. e em casos excepcionais. Fumar: Podem fumar na varanda desde que cumpram as regras de segurança necessárias. - Ter cuidado com o manuseamento dos equipamentos existentes na casa. Dão-se informações se solicitado. - Levar o lixo utilizado para os contentores no exterior. São fornecidos sacos extra para o feito. - Ter uma boa estadia.",
                    "propertyType": "Apartment",
                    "roomType": "Entire home/apt",
                    "bedType": "Real Bed",
                    "cancellationPolicy": "moderate",
                    "capacity": 4,
                    "bedrooms": 2,
                    "beds": 2,
                    "numOfReviews": 18,
                    "amenities": [
                        "TV",
                        "Cable TV",
                        "Internet",
                        "Wifi",
                        "Air conditioning",
                        "Kitchen",
                        "Smoke detector",
                        "First aid kit",
                        "Fire-extinguisher",
                        "Buzzer-wireless intercom",
                        "Family-kid friendly",
                        "Washer",
                        "Essentials",
                        "Shampoo",
                        "Lock on bedroom door",
                        "24-hour check-in",
                        "Hangers",
                        "Hair dryer",
                        "Iron",
                        "Laptop friendly workspace",
                        "Private entrance",
                        "Crib",
                        "Room-darkening shades",
                        "Hot water",
                        "Bed linens",
                        "Extra pillows and blankets",
                        "Microwave",
                        "Coffee maker",
                        "Refrigerator",
                        "Dishwasher",
                        "Dishes and silverware",
                        "Cooking basics",
                        "Oven",
                        "Stove",
                        "Patio or balcony",
                        "Luggage dropoff allowed",
                        "Long term stays allowed",
                        "Wide doorway",
                        "Well-lit path to entrance",
                        "Step-free access",
                        "Wide doorway",
                        "Accessible-height bed",
                        "Step-free access",
                        "Wide doorway",
                        "Accessible-height toilet",
                        "Step-free access",
                        "Wide entryway",
                        "Host greets you",
                        "Handheld shower head",
                        "Paid parking on premises",
                        "Fixed grab bars for shower"
                    ],
                    "host": {
                        "_id": "622f3403e36c59e6164fb266",
                        "fullname": "Maria",
                        "location": "Porto, Porto District, Portugal",
                        "about": "Simples, muito comunicativa, mas de elevado sentido de responsabilidade, de organização e de confiança.\r\nGosto muito de contacto humano, sem o qual não me sinto estável. Adoro conhecer pessoas de culturas diferentes.\r\nFaço várias viagens, mas de curta duração, pois tenho necessidade de sentir o lar e a família. Por ser assim, tento fazer tudo para que os meus hospedes se sintam confortáveis como em suas casas.",
                        "responseTime": "within an hour",
                        "thumbnailUrl": "https://a0.muscache.com/im/pictures/c9b876fc-b30e-4951-8f88-af9add00939e.jpg?aki_policy=profile_small",
                        "pictureUrl": "https://a0.muscache.com/im/pictures/c9b876fc-b30e-4951-8f88-af9add00939e.jpg?aki_policy=profile_x_medium",
                        "isSuperhost": true,
                        "id": "78704763"
                    },
                    "address": {
                        "street": "Porto, Porto, Portugal",
                        "country": "Portugal",
                        "location": {
                            "lat": -8.60154,
                            "lan": 41.14834
                        },
                        "countryCode": "PT",
                        "city": "Porto"
                    },
                    "id": "13605461",
                    "bathrooms": 1,
                    "price": 65,
                    "securityDeposit": 0,
                    "cleaningFee": 0,
                    "extraPeople": 0,
                    "reviewScores": {
                        "accuracy": 9,
                        "cleanliness": 10,
                        "checkin": 10,
                        "communication": 10,
                        "location": 9,
                        "value": 10,
                        "rating": 96
                    },
                    "reviews": [{
                            "at": "2016-07-18T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb090",
                                "fullname": "Lina & Alexis",
                                "imgUrl": "https://robohash.org/19177194?set=set1",
                                "id": "19177194"
                            },
                            "txt": "Mes parents ont passé un excellent séjour à Porto dans l'appartement de Maria qui est bien équipé, confortable et très propre. Il est situé au coeur du centre ville et tout est accessible à pied. Si vous venez en voiture, prévoir de se garer dans le parking souterrain payant juste à côté. Mes parents remercient chaudement Maria et son mari qui ont été adorables, notamment par leur accueil chaleureux."
                        },
                        {
                            "at": "2016-08-10T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb4e7",
                                "fullname": "Mario R.",
                                "imgUrl": "https://robohash.org/81211152?set=set1",
                                "id": "81211152"
                            },
                            "txt": "El apartamento es perfecto para una  estancia, esta perfectamente dotado para cubrir las necesidades de un viaje de recreo, situado perfectamente para acceder a pie a las zonas más interesantes de Oporto. María una perfecta anfitriona que te facilitará una inolvidable estancia en Oporto. Ha sido una gran experiencia."
                        },
                        {
                            "at": "2016-08-14T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb110",
                                "fullname": "Patricia",
                                "imgUrl": "https://robohash.org/16580426?set=set1",
                                "id": "16580426"
                            },
                            "txt": "Thierry, Patricia, Anaïs et Manon,\r\nMaria et son mari nous attendaient avec gentillesse et sourires, Maria a toujours répondu à mes mails et SMS en cours de voyage.   Ils nous ont aidé à monter les valises, Il y avait une bouteille d'eau au frais, très appréciable ainsi que des petits gâteaux et une bouteille de vin dans le frigo...L'appartement était très propre rien ne manquait, conforme à la description, bien situé, nous avons tout fait à pieds ...Très à l'écoute de nos demandes Maria et son mari sont charmants, nous nous sommes sentis en famille, nous reviendrons et je recommande fortement ce logement ...Nous avons pu apprécier notre séjour sans tracas.  "
                        },
                        {
                            "at": "2016-09-12T04:00:00.000Z",
                            "by": {
                                "_id": "622f3401e36c59e6164fab5b",
                                "fullname": "Ingrid",
                                "imgUrl": "https://robohash.org/40501338?set=set1",
                                "id": "40501338"
                            },
                            "txt": "Thanks Maria for your warm welcome. The appartement was really clean. It has everything that we needed for our stay and is really well located. It was easy to park for free near the appartement. Thanks!"
                        },
                        {
                            "at": "2017-05-13T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb27c",
                                "fullname": "Marie Odile",
                                "imgUrl": "https://robohash.org/110925120?set=set1",
                                "id": "110925120"
                            },
                            "txt": "L appartement de Maria est tres bien situe, propre et surtout tres calme. Il ne manque rien . Maria nous a tres bien recus . Je recommande cet appartement."
                        },
                        {
                            "at": "2017-06-13T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbd3c",
                                "fullname": "Anne",
                                "imgUrl": "https://robohash.org/23040000?set=set1",
                                "id": "23040000"
                            },
                            "txt": "Maria is a great host and we loved this apartment! It was bright, clean, airy and well-equipped and Maria gave us a thorough introduction to how everything worked. The bed was comfortable (it is not made for tall people though) and nights were quiet as both living room and bedroom are facing the backyard, not the street. Only in the morning we could not sleep in as there was loud construction noise during the day. The metro station is only a few minutes walk away and the city center is at walking distance. We also got a sweet welcome with Portuguese wine."
                        },
                        {
                            "at": "2017-06-30T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbd39",
                                "fullname": "Armelle",
                                "imgUrl": "https://robohash.org/113337848?set=set1",
                                "id": "113337848"
                            },
                            "txt": "Appartement très bien situé, tout le vieux porto se fait à pied. Très propre, indépendant et fonctionnel. Metro au pied en venant de l'aéroport, ligne directe 15 minutes environ.\nRestaurants et épiceries typiques au pied de l'immeuble. Climatisation et télé dans toutes les pièces, calme et quartier pittoresque. À recommander pour 3 ou 4. Accueil simple, gentil et efficace comme Maria la propriétaire.\n"
                        },
                        {
                            "at": "2017-08-01T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbc52",
                                "fullname": "Domingo",
                                "imgUrl": "https://robohash.org/114367498?set=set1",
                                "id": "114367498"
                            },
                            "txt": "apartamento bien situado, agradable, bonito, muy limpio y con una anfitriona maravillosa dispuesta a resolver cualquier inconveniente que se pueda presentar. lo recomiendo sin lugar a dudas.\ngracias Mariapor su gentileza"
                        },
                        {
                            "at": "2017-08-11T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbb3f",
                                "fullname": "Estelle",
                                "imgUrl": "https://robohash.org/123999116?set=set1",
                                "id": "123999116"
                            },
                            "txt": "Appartement très propre et très bien situé, bien agencé. Quartier très vivant mais appartement calme car ne donne pas sur la rue. Nous avons passé un très bon séjour chez Maria qui nous a très bien accueilli."
                        },
                        {
                            "at": "2017-09-21T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb06f",
                                "fullname": "Alfredo Julio Leandro",
                                "imgUrl": "https://robohash.org/148979666?set=set1",
                                "id": "148979666"
                            },
                            "txt": "Apartamento agradable, muy limpio y muy bien equipado, en zona tranquila pero accesible para llegar a todos lados de a pie. Maria y Arturo nos recibieron con un rico vino del Douro y galletitas y muy buenas recomendaciones para pasear y comer."
                        },
                        {
                            "at": "2017-10-17T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb78f",
                                "fullname": "Nataliia",
                                "imgUrl": "https://robohash.org/137603514?set=set1",
                                "id": "137603514"
                            },
                            "txt": "Нам очень понравилась квартира,светлая,уютная,на 3-м этаже,с большим балконом,в квартире есть все самое необходимое,стиральная машина,утюг,кровати очень удобные,красивое постельное белье,вся обстановка в квартире сделана с душой,все время прибывания чувствовали себя как дома.\nМария по приезду подарила нам бутылку вина из долины реки Дору,из красивых бокалов мы его с удовольствием выпили,спасибо за презент.\nВ этой маленькой уютной квартире -3 телевизора!!!!Смотреть было некогда,наслаждались красивым городом и окрестностями Порту."
                        },
                        {
                            "at": "2017-12-09T05:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fad62",
                                "fullname": "Liz",
                                "imgUrl": "https://robohash.org/144054479?set=set1",
                                "id": "144054479"
                            },
                            "txt": "Muy contentos con todo. El piso estaba bastante cerca del centro, Maria y su marido estaban incluso antes de la hora de nuestra llegada. El piso esta muy bien equipado: cafetera, botiquín, lavadora etc. Super super limpio todo y las camas muy comodas y acogedores. Y al ser un piso interior, no se oia nada de ruido. Recomendable!"
                        },
                        {
                            "at": "2018-01-09T05:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb1c3",
                                "fullname": "Ariadne",
                                "imgUrl": "https://robohash.org/151785573?set=set1",
                                "id": "151785573"
                            },
                            "txt": "Eu e minha amiga ficamos um mês no apartamento e foi uma otima experiencia!\nMuito bem localizado, perto de tudo! Não tivemos nenhuma dificuldade em encontrar o local, que fica a minutos da estação do metrô e é muito perto da região central.\nÓtima infraestrutura, limpeza e organização.\nFomos muito bem recebidas e bem auxiliadas pela Maria, que com certeza é uma ótima anfitriã!\nRecomendo muito a estadia, não poderia ter sido melhor!"
                        },
                        {
                            "at": "2018-02-27T05:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb5f5",
                                "fullname": "Bruno",
                                "imgUrl": "https://robohash.org/169584809?set=set1",
                                "id": "169584809"
                            },
                            "txt": "Respostas sempre rápidas; excelente recepção ; sempre simpática e disponível."
                        },
                        {
                            "at": "2018-06-24T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fad10",
                                "fullname": "João",
                                "imgUrl": "https://robohash.org/43281546?set=set1",
                                "id": "43281546"
                            },
                            "txt": "Clean, quiet and centrally located. Very welcoming host as well."
                        },
                        {
                            "at": "2018-07-18T04:00:00.000Z",
                            "by": {
                                "_id": "622f3408e36c59e6164fc075",
                                "fullname": "Alcides",
                                "imgUrl": "https://robohash.org/22956972?set=set1",
                                "id": "22956972"
                            },
                            "txt": "O Espaço de Maria é de extremo bom gosto. Tudo extremamente limpo, pratico e organizado nos mínimos detalhes.  Boa localização perto de tudo.  Sem falar na Simpatia e disponibilidade da Maria que com suas dicas tornou nossa estadia em Porto melhor do que esperávamos. Recomendadíssimo !"
                        },
                        {
                            "at": "2018-12-09T05:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbad8",
                                "fullname": "Miguel Angel",
                                "imgUrl": "https://robohash.org/3708225?set=set1",
                                "id": "3708225"
                            },
                            "txt": "Alojamiento coqueto y acogedor, muy limpio y bien ubicado, tiene 2 habitaciones y todo lo necesario para poder pasar unos días en Oporto, buena ubicación cerca de Sta Catarina. Nos ha gustado mucho la estancia, la atención de María inmejorable. Muchas gracias por su atención y amabilidad"
                        },
                        {
                            "at": "2018-12-29T05:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbede",
                                "fullname": "Alessandro",
                                "imgUrl": "https://robohash.org/38271990?set=set1",
                                "id": "38271990"
                            },
                            "txt": "buena ubicación, piso acogedor, reformado, excelente servicio y recomendaciones"
                        }
                    ],
                    "_id": "622f337a75c7d36e498aaafa",
                    "imgUrls": [
                        "112.jpeg",
                        "080.jpeg",
                        "140.jpeg",
                        "042.jpeg",
                        "055.jpeg"
                    ]
                },
                {
                    "name": "Fresh and modern 1BR in Bed-Stuy",
                    "summary": "A spacious, art-filled one-bedroom apartment near the express train (28 minutes to Times Square) and a Citibike station. Sample Bed-Stuy life at a nearby French restaurant,  a sunny Haitian cafe, a boutique grocery and more. We do NOT discriminate based on race, religion or sexual orientation.",
                    "interaction": ".  Guests stay in a separate,  private apartment and we make every effort to not disturb you unless absolutely necessary. We live above the apartment and will be happy to accommodate any reasonable requests",
                    "houseRules": "A/C may be used only when you are at home.  Please respect our delicate old pipes (no grease down the drain, etc.).  No smoking on premises. Guests are expected to wash take out their trash and recycling as needed. Guests are expected to wash and put away dishes prior to check-out (apartment has a dishwasher, soap packets are under the sink) Longer term guests may wish to launder the sheets and towels during their stay. This service is not provided. (There are two sets of bed linens provided and two sets of towels for each adult guest.) Owners may occasionally need to go through the apartment to access the basement. We shall endeavor to give advance notice of this and find a mutually convenient time.  $50 fee if keys are lost or not returned.",
                    "propertyType": "Apartment",
                    "roomType": "Entire home/apt",
                    "bedType": "Real Bed",
                    "cancellationPolicy": "strict_14_with_grace_period",
                    "capacity": 2,
                    "bedrooms": 1,
                    "beds": 1,
                    "numOfReviews": 180,
                    "amenities": [
                        "Internet",
                        "Wifi",
                        "Air conditioning",
                        "Kitchen",
                        "Heating",
                        "Family-kid friendly",
                        "Smoke detector",
                        "Carbon monoxide detector",
                        "Fire-extinguisher",
                        "Essentials",
                        "Shampoo",
                        "24-hour check-in",
                        "Hangers",
                        "Hair dryer",
                        "Iron",
                        "Laptop friendly workspace",
                        "translation missing: en.hosting_amenity_49",
                        "Self check-in",
                        "Lockbox"
                    ],
                    "host": {
                        "_id": "622f3402e36c59e6164fac46",
                        "fullname": "Shaila & Alex",
                        "location": "New York, New York, United States",
                        "about": "I'm a journalist from Texas and my husband is an artist from the Ukraine by way of Kansas City. We recently welcomed our son into the world. (Don't worry, he sleeps all night.)  We love exploring New York, especially Brooklyn, from the Brooklyn Flea to tiny taco joints to the Botanic Gardens to performance art in Bushwick storefronts (really). We've both spent a lot of time in the South, so hospitality is second nature to us. ",
                        "responseTime": "within an hour",
                        "thumbnailUrl": "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_small",
                        "pictureUrl": "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_x_medium",
                        "isSuperhost": true,
                        "id": "6334250"
                    },
                    "address": {
                        "street": "Brooklyn, NY, United States",
                        "country": "United States",
                        "location": {
                            "lat": -73.92922,
                            "lan": 40.68683
                        },
                        "countryCode": "US",
                        "city": "New York"
                    },
                    "id": "1155885",
                    "bathrooms": 1,
                    "price": 79,
                    "securityDeposit": 250,
                    "cleaningFee": 80,
                    "extraPeople": 0,
                    "reviewScores": {
                        "accuracy": 10,
                        "cleanliness": 10,
                        "checkin": 10,
                        "communication": 10,
                        "location": 9,
                        "value": 10,
                        "rating": 93
                    },
                    "reviews": [{
                            "at": "2013-05-27T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbfd2",
                                "fullname": "Nicolas",
                                "imgUrl": "https://robohash.org/4523027?set=set1",
                                "id": "4523027"
                            },
                            "txt": "Shaila's place is amazing! It's new, it's clean and it's big! And Shaila is very accommodating, we found everything we needed (cooking, coffee) and more. Given that we were the first guests she hosted through airbnb I can say that she did an amazing job! \r\n"
                        },
                        {
                            "at": "2013-06-04T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb048",
                                "fullname": "Jeff",
                                "imgUrl": "https://robohash.org/6443424?set=set1",
                                "id": "6443424"
                            },
                            "txt": "Great, quiet place to stay. It is great having Shaila just upstairs to answer any questions, and especially to give great tips on places to go. "
                        },
                        {
                            "at": "2013-06-13T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fba55",
                                "fullname": "Carla",
                                "imgUrl": "https://robohash.org/6121036?set=set1",
                                "id": "6121036"
                            },
                            "txt": "Shaila and Alex are wonderful hosts really, they helped us every time we needed with directions, the internet, the supermarket, the post office !!! (thank you guys !!!).The place and the neighbord are great, 8 blocks far from the apartment you have the subway and 30 min. later you are in the island, we moved early in the morning, late at night (sometimes we came back at 2am) and everything turned out great.Definetly I would come back to their apartment, It's bigger than ours in Argentina !!! I look forward to stay there again and, next time, go out with you guys and have a beer or anything.\r\nBye !!! - Guido and Carla - "
                        },
                        {
                            "at": "2013-06-20T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbf76",
                                "fullname": "Dan",
                                "imgUrl": "https://robohash.org/6460525?set=set1",
                                "id": "6460525"
                            },
                            "txt": "Shaila and Alex were incredibly accommodating and me and my girlfriend enjoyed our stay thoroughly. Highly recommended. The place was very private and homely. I didn't really know anything about New York and was nervous about staying in bed stuy but it was safe and friendly everywhere I went. Very easy to get to the airport and manhattan by train."
                        },
                        {
                            "at": "2013-06-25T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbe9d",
                                "fullname": "Ariane",
                                "imgUrl": "https://robohash.org/6825718?set=set1",
                                "id": "6825718"
                            },
                            "txt": "Great place to stay in Brooklyn! Alex gave us a really useful list of nice restaurants and coffee places near the place (We are very happy to have discovered, the restaurant \"Saraghina\", thanks to Alex's map!).  The apartment is vast, furnished with taste and very convenient. We highly recommend!"
                        },
                        {
                            "at": "2013-07-03T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fad91",
                                "fullname": "Ilka",
                                "imgUrl": "https://robohash.org/5823882?set=set1",
                                "id": "5823882"
                            },
                            "txt": "I can recommend to everyone to come to this beautiful apartment, Shaila and Alex are great hosts and the neighbourhood is very friendly everywhere we go.\r\nIt really felt like home."
                        },
                        {
                            "at": "2013-07-12T04:00:00.000Z",
                            "by": {
                                "_id": "622f3401e36c59e6164fab81",
                                "fullname": "Kristy",
                                "imgUrl": "https://robohash.org/5729991?set=set1",
                                "id": "5729991"
                            },
                            "txt": "My sister and I loved staying here! The apartment is very spacious and recently renovated so it looks amazing. The kitchen has everything you need with Alex and Shalia stocking it with a few basics. The neighbourhood is a little shabby, especially compared to the home we stayed in. We were told by some people in Manhattan that the neighbour of Bed-Stuy used to be very dangerous and just to be careful walking around at night. Walking from the subway after dark was a little daunting but we remained safe. We did catch a cab a few times from Manhattan as it was very late. Overall, it was a positive experience with Alex and Shalia being very helpful, even going out of their way to let us store our luggage at Shalia's work the day we were to fly out. They were great hosts."
                        },
                        {
                            "at": "2013-07-24T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb785",
                                "fullname": "Barbara",
                                "imgUrl": "https://robohash.org/6063814?set=set1",
                                "id": "6063814"
                            },
                            "txt": "We just met Alex when we checked in, but anyhow he had been a very friendly and helpful host. He was reachable anytime and answered my mails prompt.\r\nThe apartment was great! It was really beautiful and big. It has a perfectly equipped kitchen and there are also a few basics for breakfast and cooking. The bed is very comfortable. It is not that soundproofed as we are accustomed to (the steps from upstairs waked me every day - my son slept well, he did not hear it), but I think that is normal for american houses. But apart from this it is very quiet.\r\nThe neighbourhood is great! It is very authentic, people are friendly and helpful if required, no problems even late at night. We loved staying there!\r\nIn any case: apartment, host and neighbourhood are high recommended! If we are in New York again, we certainly return to this place!"
                        },
                        {
                            "at": "2013-07-29T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb515",
                                "fullname": "Gloria",
                                "imgUrl": "https://robohash.org/97251?set=set1",
                                "id": "97251"
                            },
                            "txt": "Hello! \n\nWe just spent 5 days in the big apple and we drove in to this Brooklyn location.  The host where incredibly attentive and just wonderful, the apartment spotless, hip & modern and really comfortable. \n\nDo not be intimidated by the transitioning neighborhood as we encountered that many residents are very friendly and helpful (directions) and this particular street has a real interest in making a real change hence empowering their community.\n\nThe subway is a little ways (12 to 15 min.) walk. We would use our vehicle to drive to the subway station (there are two corresponding)  and park nearby to facilitate the to and from.  If you need quick access to the subway at all hours of the day and night this may not be the place for you.\n\nThe apt. is an excellent value  for the money (as per  many  manhattan locations offer around  the same nightly  $$ rate but have to share their apt ).\n\n\n\n"
                        },
                        {
                            "at": "2013-09-07T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb079",
                                "fullname": "Javier",
                                "imgUrl": "https://robohash.org/7055720?set=set1",
                                "id": "7055720"
                            },
                            "txt": "We really had a wonderful time in NYC thanks to Alex’s house. It’s just as big, beautiful and clean as it seems in the pictures. Alex has an incredible apartment in the basement that makes you feel like home after being out all day knowing the big city. All the furniture and the kitchen appliances are new.\r\n\r\nThe location is perfect for visiting Brooklyn and Manhattan (only 15-20 to Brooklyn Bridge and South Manhattan or 25-30 min to Times Square in the underground).\r\n\r\nAlso, Alex gave us some good advices the first day for having all we needed in the neighbourhood. Don’t miss Saraghina’s brunch (10 minutes walking from the house)! He even let us to keep our luggage in the house until we left to the airport in the evening on our last day in the city."
                        },
                        {
                            "at": "2013-10-09T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fabc4",
                                "fullname": "Ivan",
                                "imgUrl": "https://robohash.org/8866660?set=set1",
                                "id": "8866660"
                            },
                            "txt": "The appartment was really clean, pretty spacious and kitchen was very well equipped! Its totally in line with all the information posted. \r\n\r\nAlex was very nice host, even allowed us to keep the luggage  after check out as we had a flight in the evening. Thank you once again for that! \r\n\r\nThe neighboorhood itself was safe, we had no issues at all, however I`d prefer staying   in Brooklyn districts closer to Manhattan area next time as  we were travelling to Midtown up to 1h. Being a citizen of the huge city too (Moscow, Russia) , underground is not our favorite place to be  :) \r\n\r\nOverall , it was a great stay. \r\n\r\n\r\n\r\n"
                        },
                        {
                            "at": "2013-11-01T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fada2",
                                "fullname": "India",
                                "imgUrl": "https://robohash.org/228580?set=set1",
                                "id": "228580"
                            },
                            "txt": "Communication with Alex was spot on.  He happily answered any questions and made it easy for me to arrive late at night and went above and beyond to help me have a good stay. \r\nThe apartment has been tastefully refurbished.  Extremely clean, and with all you could need for cooking.  The bed is so comfy.  The apartment is peaceful at night and I slept so well.   Some noise travels from Alex' apartment upstairs but it is only a little during the day.\r\nThe area is a bit out of the main hub of Williamsburg and Bushwick but everything is easily accessible with a short walk or the subway about 8 mins walk away.\r\nAlex left me a list of great stores, cafes and restaurants in the immediate area.  \r\nSome people may be concerned about the area at face value as it is a white minority but I felt safe at all times.  People seemed friendly.\r\n\r\n"
                        },
                        {
                            "at": "2013-11-10T05:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fb9f9",
                                "fullname": "Pamela",
                                "imgUrl": "https://robohash.org/8145538?set=set1",
                                "id": "8145538"
                            },
                            "txt": "Was an amazing stay, we charm your apartment and were very friendly. Thank you for all your attentions."
                        },
                        {
                            "at": "2013-11-14T05:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fae8c",
                                "fullname": "Lindsay",
                                "imgUrl": "https://robohash.org/979464?set=set1",
                                "id": "979464"
                            },
                            "txt": "Shaila and Alex are wonderful hosts - very accommodating, friendly, and easy to communicate with. We found it fairly easy to get around the city from Bed-Stuy, even with the weekend subway schedule. The apartment is lovely, bright, and very clean, and overall it was a pleasure to stay for a few nights. It's been recently renovated and thoughtfully decorated - we felt quite comfortable during our stay and appreciated the art and other nice touches throughout. I'd highly recommend staying with Shaila and Alex."
                        },
                        {
                            "at": "2013-12-01T05:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbf31",
                                "fullname": "Nadia",
                                "imgUrl": "https://robohash.org/1133198?set=set1",
                                "id": "1133198"
                            },
                            "txt": "Great apartment, really spacious & has a lovely homely feel to it. Alex & Shaila were very helpful & welcoming, bed was really comfortable, good transport links, only a 20 min subway ride into manhattan, the area is really nice & quiet, unlike manhattan.\r\n\r\nThanks Alex & Shaila for having us ! Enjoy the Gin !! "
                        },
                        {
                            "at": "2014-01-04T05:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbdab",
                                "fullname": "Barbara",
                                "imgUrl": "https://robohash.org/8310069?set=set1",
                                "id": "8310069"
                            },
                            "txt": "The apartment is spacious and well furnished, the kitchen very well equipped and the bed very confortable. Sheila and alex were friendly and the comunication with them was easy.the neighborhood is very nice with typical town house, and very quite. Also the people Who lives there was very kind and helped us on many occasion. \nDefinitely raccommend you to spend your holidays in NY in the lovely apartment of sheila&alex! "
                        },
                        {
                            "at": "2014-03-11T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb2c1",
                                "fullname": "Chris",
                                "imgUrl": "https://robohash.org/9935301?set=set1",
                                "id": "9935301"
                            },
                            "txt": "We had a great time staying with Alex & Shaila. The apartment is just as depicted in the photos. Lots of space and very comfortable.  The house is located really close to buses and subway which was very convenient. The neighbourhood is fine with a couple of nice places to eat nearby.\r\n\r\nShaila and alex were really friendly and easy to communicate with if needed.  \r\n\r\nWe stayed for 2 months and would recommend it to others who are looking for a place in Brooklyn."
                        },
                        {
                            "at": "2014-03-26T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb8fc",
                                "fullname": "Melody",
                                "imgUrl": "https://robohash.org/11278447?set=set1",
                                "id": "11278447"
                            },
                            "txt": "Upon arriving, Alex was very helpful giving directions to the location. , he gave us a brief overview of everything, and let us settle in. It was a very cozy place to come back to after long days out exploring New York. The subways are very close. We preferred heading up to broadway to catch our trains (Depending where we were going) only because it was much more pleasant on sunny days to be above grounds if we could. It was great to have all amenities available, and at such a reasonable price.The only thing I will mention is that if you do plan on sleeping in- it might not happen as they do have a newborn who you can sometimes hear in the morning if you are a light sleeper.\r\nOverall,  I would recommend you stay at Alex & Shailas airbnb! It was a great and pleasant environment."
                        },
                        {
                            "at": "2014-04-10T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb41e",
                                "fullname": "Carlos",
                                "imgUrl": "https://robohash.org/13281573?set=set1",
                                "id": "13281573"
                            },
                            "txt": "We felt very happy those days at the home of Alex and Shaila. It is a very warm and comfortable place, it was like being at home."
                        },
                        {
                            "at": "2014-04-21T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb087",
                                "fullname": "Sergei",
                                "imgUrl": "https://robohash.org/13487808?set=set1",
                                "id": "13487808"
                            },
                            "txt": "Great host. Very clean, nice place and friendly people. Thanks again!"
                        }
                    ],
                    "_id": "622f337a75c7d36e498aaafb",
                    "imgUrls": [
                        "101.jpeg",
                        "037.jpeg",
                        "038.jpeg",
                        "043.jpeg",
                        "113.jpeg"
                    ]
                },
                {
                    "name": "Habitación centro de Barcelona",
                    "summary": "Mi piso está en el centro de Barcelona. Cerca del metro, las ramblas, los museos, el Portal del Ángel, Plaza Cataluña. Mi alojamiento es bueno para turistas, aventureros, y viajeros de negocios....y tiene ascensor.",
                    "interaction": "Estaré disponible para cualquier duda o problema que se os presente. Conozco muy bien la ciudad y os puedo recomendar sitios.",
                    "houseRules": "No hacer fiestas, no traer invitados a la habitación. Respetar el descanso de los vecinos. Mantener el orden y la limpieza de la casa. Recordar que alquilas una habitación, no un piso. Please: No smoking, no loud noise after 11pm, be courteous to neighbors and clean up after yourself when you use the kitchen and the bathroom. No guests.",
                    "propertyType": "Apartment",
                    "roomType": "Private room",
                    "bedType": "Real Bed",
                    "cancellationPolicy": "flexible",
                    "capacity": 2,
                    "bedrooms": 1,
                    "beds": 1,
                    "numOfReviews": 2,
                    "amenities": [
                        "Wifi",
                        "Kitchen",
                        "Buzzer-wireless intercom",
                        "Heating",
                        "Essentials",
                        "Hangers",
                        "Hair dryer",
                        "Fire-extinguisher",
                        "Shampoo",
                        "Iron",
                        "Doorman",
                        "Elevator",
                        "translation missing: en.hosting_amenity_49",
                        "translation missing: en.hosting_amenity_50"
                    ],
                    "host": {
                        "_id": "622f3407e36c59e6164fbdae",
                        "fullname": "Marián",
                        "location": "Barcelona, Catalonia, Spain",
                        "about": "",
                        "thumbnailUrl": "https://a0.muscache.com/im/users/31635864/profile_pic/1429604852/original.jpg?aki_policy=profile_small",
                        "pictureUrl": "https://a0.muscache.com/im/users/31635864/profile_pic/1429604852/original.jpg?aki_policy=profile_x_medium",
                        "isSuperhost": false,
                        "id": "31635864"
                    },
                    "address": {
                        "street": "Barcelona, Catalunya, Spain",
                        "country": "Spain",
                        "location": {
                            "lat": 2.16685,
                            "lan": 41.38371
                        },
                        "countryCode": "ES",
                        "city": "Barcelona"
                    },
                    "id": "13669275",
                    "bathrooms": 1,
                    "price": 40,
                    "securityDeposit": null,
                    "cleaningFee": null,
                    "extraPeople": 20,
                    "reviewScores": {
                        "accuracy": 10,
                        "cleanliness": 10,
                        "checkin": 10,
                        "communication": 9,
                        "location": 10,
                        "value": 9,
                        "rating": 90
                    },
                    "reviews": [{
                            "at": "2016-07-12T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbebb",
                                "fullname": "Rafaela",
                                "imgUrl": "https://robohash.org/65117711?set=set1",
                                "id": "65117711"
                            },
                            "txt": "Host: Marian gave us a warm welcome and treated us kindly from the very beginning. She offered us help, told us what to visit and even put water, milk and orange juice in the fridge! We could have breakfast at her place which was perfect because she has a little sweet balcony! \r\nLocation: calmly situated in a side street, very near to the Placa Catalunya, the Rambla and the gothic area of Barcelona (very beautiful:)) so you have the old cultural center as well as all the restaurants and bars just nearby.\r\nHouse/Room: the appartment is not a huge, but I think you have everything you need (beautiful sitting room, balcony, kitchen) in it. You have to share the appartment with Marian so pay attention and don't be too loud in the evening!!\r\ndisadvantage: the heat is terrible in summer and there is no air-condition..\r\n\r\nI would overall recommend it to everybody!! But if you want to party and stay up late, take a hostel or another appartment."
                        },
                        {
                            "at": "2016-08-11T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164faf56",
                                "fullname": "Pauline",
                                "imgUrl": "https://robohash.org/50303773?set=set1",
                                "id": "50303773"
                            },
                            "txt": "Nous avons passé un bon séjour, l'appartement est très bien situé. La chambre est agréable et plus grande que sur la photo. Seul point négatif pas de volets dans la chambre. "
                        }
                    ],
                    "_id": "622f337a75c7d36e498aaafc",
                    "imgUrls": [
                        "088.jpeg",
                        "027.jpeg",
                        "008.jpeg",
                        "023.jpeg",
                        "136.jpeg"
                    ]
                },
                {
                    "name": "DOUBLE ROOM IN THE HEART OF BCN",
                    "summary": "Lit room with balcony. The apartment is in the center, just meters from the Palau de la Musica Catalana. Well connected, a few minutes from Las Ramblas and the Born. Very close to the beach and Ciutadella Park",
                    "interaction": "Te proporcionaré sábanas y toallas, para que no te preocupes de traerlas tú.",
                    "houseRules": "-Mantener el espacio limpio y recogido. -No está permitido invitar a gente al apartamento. -Respetar el descanso de los vecinos. -No hacer ruido en la escalera. Apelo al sentido común de los inquilinos para una convivencia relajada y fluída. No hay normas en la casa más allá de las que dicte el sentido común.",
                    "propertyType": "Apartment",
                    "roomType": "Private room",
                    "bedType": "Real Bed",
                    "cancellationPolicy": "strict_14_with_grace_period",
                    "capacity": 2,
                    "bedrooms": 1,
                    "beds": 1,
                    "numOfReviews": 108,
                    "amenities": [
                        "Wifi",
                        "Kitchen",
                        "Hair dryer",
                        "Smoke detector",
                        "Heating",
                        "Essentials",
                        "Shampoo",
                        "Hangers",
                        "Iron",
                        "Essentials",
                        "Lock on bedroom door",
                        "Hair dryer",
                        "Washer",
                        "translation missing: en.hosting_amenity_49",
                        "translation missing: en.hosting_amenity_50",
                        "Hot water",
                        "Bed linens",
                        "Host greets you"
                    ],
                    "host": {
                        "_id": "622f3404e36c59e6164fb63a",
                        "fullname": "Isabel",
                        "location": "Barcelona, Catalonia, Spain",
                        "about": "Mi nombre es Isabel, pero me llamo Isa. Nací en Vigo (Galicia). Con 20 años me fuí a vivir a Madrid con intención de ser actriz; ahora resido en Barcelona desde los 28. Soy una joven de 43 años, cantante de Jazz. Me gusta salir, pero también quedarme en casa a leer o ver alguna buena película.\r\nHe compartido piso muchos años, pero estas serán mis primeras experiencias como anfitriona.\r\n\r\n¡Sed bienvenidos!\r\n",
                        "responseTime": "within an hour",
                        "thumbnailUrl": "https://a0.muscache.com/im/pictures/72a579ce-37d7-466e-9c25-9876ee8de037.jpg?aki_policy=profile_small",
                        "pictureUrl": "https://a0.muscache.com/im/users/6107595/profile_pic/1442432675/original.jpg?aki_policy=profile_x_medium",
                        "isSuperhost": false,
                        "id": "35858044"
                    },
                    "address": {
                        "street": "Barcelona, Catalonia, Spain",
                        "country": "Spain",
                        "location": {
                            "lat": 2.17561,
                            "lan": 41.38701
                        },
                        "countryCode": "ES",
                        "city": "Barcelona"
                    },
                    "id": "11115528",
                    "bathrooms": 1,
                    "price": 25,
                    "securityDeposit": null,
                    "cleaningFee": 25,
                    "extraPeople": 20,
                    "reviewScores": {
                        "accuracy": 9,
                        "cleanliness": 9,
                        "checkin": 9,
                        "communication": 10,
                        "location": 10,
                        "value": 9,
                        "rating": 90
                    },
                    "reviews": [{
                            "at": "2016-02-24T05:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb95e",
                                "fullname": "Pierre",
                                "imgUrl": "https://robohash.org/58999873?set=set1",
                                "id": "58999873"
                            },
                            "txt": "Una instancia muy céntrica en uno de estos edificios antiguos del Barri Gotic. No es poco haber conseguido estar en el centro de Barcelona en la misma semana del Mobile World Congress. Isabel es un encanto de anfitrión."
                        },
                        {
                            "at": "2016-03-24T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fafa6",
                                "fullname": "Isabelle",
                                "imgUrl": "https://robohash.org/26247027?set=set1",
                                "id": "26247027"
                            },
                            "txt": "The host canceled this reservation 2 days before arrival. This is an automated posting."
                        },
                        {
                            "at": "2016-04-07T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbaf2",
                                "fullname": "Hélène",
                                "imgUrl": "https://robohash.org/46103953?set=set1",
                                "id": "46103953"
                            },
                            "txt": "Chambre très bien située et hôtesse très sympathique. Merci encore Isabel pour l'accueil !"
                        },
                        {
                            "at": "2016-04-13T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbdc3",
                                "fullname": "Daniel",
                                "imgUrl": "https://robohash.org/25801559?set=set1",
                                "id": "25801559"
                            },
                            "txt": "Sheets weren't clean... Shower has very low water pressure. Room is only good for sleeping. It's in a good location but that's about it. Isabel could've provided more information about what's around the house during check in... Overall just decent enough to sleep"
                        },
                        {
                            "at": "2016-04-25T04:00:00.000Z",
                            "by": {
                                "_id": "622f3401e36c59e6164fabad",
                                "fullname": "Maria Isabel",
                                "imgUrl": "https://robohash.org/60712702?set=set1",
                                "id": "60712702"
                            },
                            "txt": "Isabel est accueillante. L'appartement est charmant, correspond aux images. Très bien situé, à côté de Palau de la musica, dans un vieil immeuble plein de charme un peu désuet. Amateurs de confort et décor \"tendance\" s'abstenir. Chez Isabel on se trouve dans une authentique ambiance d'artiste. Merci beaucoup, je garderai le souvenir de cet accueil lié aux souvenirs de Barcelone."
                        },
                        {
                            "at": "2016-05-04T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb967",
                                "fullname": "Aitana",
                                "imgUrl": "https://robohash.org/53206905?set=set1",
                                "id": "53206905"
                            },
                            "txt": "Es un piso con mucho encanto, muy tranquilo y en un lugar inmejorable. La anfitriona, Isabel, es amable y facilitadora. El piso es una construcción antigua, lo que le da un ambiente genial pero también hace que el agua de la ducha salga con poquísima presión y sea un poco incómodo a veces. A parte de esto, si tuviese que poner alguna queja sería la hora del chekout, ya que las diez de la mañana me parece un poco pronto. \r\nEn conjunto tuvimos una muy buena experiencia y repetiríamos sin duda."
                        },
                        {
                            "at": "2016-05-12T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbb88",
                                "fullname": "Valentina",
                                "imgUrl": "https://robohash.org/69740054?set=set1",
                                "id": "69740054"
                            },
                            "txt": "Isabel was a wonderful host even if she was not there. She was in touch with me by mobile constantly. Thank you so much!\r\nThe house it's nice and was very clean and quite in the night.Perfect location. All you need for few days in Barcelona!"
                        },
                        {
                            "at": "2016-05-16T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb715",
                                "fullname": "Jeremy",
                                "imgUrl": "https://robohash.org/53581405?set=set1",
                                "id": "53581405"
                            },
                            "txt": "Isabel's place was perfect. It was cozy, clean and quiet. She was a very gracious host and was always there to answer my questions about getting around Barcelona. "
                        },
                        {
                            "at": "2016-05-25T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb0b2",
                                "fullname": "Mei-Lin",
                                "imgUrl": "https://robohash.org/40994614?set=set1",
                                "id": "40994614"
                            },
                            "txt": "Great room with lots of sunlight in a charming apartment. Fantastic location."
                        },
                        {
                            "at": "2016-06-10T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb1f7",
                                "fullname": "Taneli",
                                "imgUrl": "https://robohash.org/8010736?set=set1",
                                "id": "8010736"
                            },
                            "txt": "Isa was a kind and gracious host with a lovely appartment in a centric and vibrant area. We loved our stay and surely will visit again."
                        },
                        {
                            "at": "2016-06-16T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb623",
                                "fullname": "Natasha",
                                "imgUrl": "https://robohash.org/25592253?set=set1",
                                "id": "25592253"
                            },
                            "txt": "SUPER cute place with lots of charm!! Perfect for my first trip to Barcelona:) Amazing location! Gracias Isabel for helping me find last minute accommodations! \r\n"
                        },
                        {
                            "at": "2016-06-23T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fc013",
                                "fullname": "Elizabeth",
                                "imgUrl": "https://robohash.org/78467282?set=set1",
                                "id": "78467282"
                            },
                            "txt": "Isabel was a great host. She met me at the local bar where she worked and took me to her home a street away. The flight of stairs up to here place was a bit daunting but I can see why she lives up there.. It was beautiful! The room and whole place was clean, tidy and very welcoming. I saw Isabel twice, when I arrived and when I left, but it was perfect. \n\nThe facilities were great. The pressure in the shower was weak but it didn't bother me one bit. It is a bit noisy being in the heart of the city, but I can imagine it would be anywhere in this area. It was lovely to have a balcony, and the location was very convenient. Thanks.x"
                        },
                        {
                            "at": "2016-06-28T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb0af",
                                "fullname": "Monika",
                                "imgUrl": "https://robohash.org/11966400?set=set1",
                                "id": "11966400"
                            },
                            "txt": "Isabel was good host. Location is perfect."
                        },
                        {
                            "at": "2016-07-03T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb23a",
                                "fullname": "Margaux",
                                "imgUrl": "https://robohash.org/78589438?set=set1",
                                "id": "78589438"
                            },
                            "txt": "Super piso, super barrio! \r\nThe guest welcomed us well."
                        },
                        {
                            "at": "2016-07-11T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb21c",
                                "fullname": "Elisabeth",
                                "imgUrl": "https://robohash.org/4965921?set=set1",
                                "id": "4965921"
                            },
                            "txt": "It was really nice to stay at Isabels place. She is very uncomplicated and nice and the flat is super located for exploring bcn. For me it was perfect!:)"
                        },
                        {
                            "at": "2016-07-23T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbd7f",
                                "fullname": "Ingrid",
                                "imgUrl": "https://robohash.org/6058273?set=set1",
                                "id": "6058273"
                            },
                            "txt": "IT was the perfect stay to Discover the city-a super location with sometimes noisy tourists (even we we're tourists but hopefully not so noisy) but that's part of the location i guess :-). We loved the colourful house and we Will Be go back for a next stay. thank you!"
                        },
                        {
                            "at": "2016-07-30T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb1ac",
                                "fullname": "Liliane",
                                "imgUrl": "https://robohash.org/27060110?set=set1",
                                "id": "27060110"
                            },
                            "txt": "Isa is a very lovely, sensitive, artistic and gorgeous person. She is respectful of one's privacy but always ready to give support when asked upon. Be it in spoken or written form I always got my answers from her within no times. She also proofed to be very flexible in terms of arrival and departure times which I appreciated a great deal. If you are a fan of jazz music (like I am), make sure to double check ahead of time about her current concert dates so as not to miss your hostess on stage like I did (grumble ;-)).\n\nThe room I occupied was the smaller one of two that Isabel rents out. So if her flat is fully rented out there can be a maximum of 4 guests plus your hostess in the flat, which can cause some bathroom jam, especially during the hot and humid summer times, when the need for a cool shower is inherent to everyone's desire. \nMy room was as depicted. If you plan on using it for double occupancy, I recommend taking Isa's larger room (unless the two of you are very much in love and want to cuddle up close ;-)). Also, if you need a table for writing, ask for the larger room as well, which comes along with one.\nThe flat itself is absolutely enchanting and furnished with love and an artistic eye to details. It's location is a dream for touristic explorations with anything within walking distance. \nTherefore, I can easily recommend both Isabel and her flat to anyone wishing to immerge himself into the local customs and get a good doze of what it is like \"to live like a true Barcelonian\".  \n\nQuerida Isa, muchas gracias por tu hospedalid génial! Volveré a ciencia cierta!\nSaludos y besos\nLiliana"
                        },
                        {
                            "at": "2016-08-10T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb8e1",
                                "fullname": "Murat",
                                "imgUrl": "https://robohash.org/35246459?set=set1",
                                "id": "35246459"
                            },
                            "txt": "The apartment is very centrally located, in the heart of the gothic part of the city and a couple of blocks from the Placa de Catalunya which makes transportation and sightseeing very easy. It's a 20 minute walk from the beach which is a plus. It's located in a very old building on the top floor, so it is rather stuffy and warm in the apartment. The room overlooks a very narrow street/alley so it's rather dark and it's easy to hear the noise coming from the street and the neighboring apartments. There are a few other rooms in the house that are being rented out, so other people will be staying in the house which makes it a necessity to lock the room when you leave the apartment. \n\nIt's important to note that this place has a very strict check out time. On our last day, we had an evening flight but had to check out in the morning. When we asked if we could check out late, Isa told us to take our stuff to the train station and use the lockers there, but the train station does not have lockers. We ended up renting a locker  at a place called \"Barcelona lockers\". That, I would say changed all the plans for the last day. \n\n"
                        },
                        {
                            "at": "2016-08-26T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbcb4",
                                "fullname": "Mina",
                                "imgUrl": "https://robohash.org/121053?set=set1",
                                "id": "121053"
                            },
                            "txt": "I was happy to experience Isabels home as described here. It was spacious, bright and original, with lovely colours and beautiful artwork surrounding me in every room. Isabel is a creative, sensitive and respectful person, with an open mind- yet she has the necessary boundaries that are required to organize an environment where so many different people are going to stay and hopefully enjoy. \nThe street itself is very lively, but the noises didn't bother me at all as i could easily block them out with earplugs. The location could not have been more sentral, still it's on \"the right side\" of the Rambla, where you can find more independent shops, restaurants, cafes and bars compared to the same leveled streets towards Raval. It is an old and very charming building, so if you want an minimalistic experience with cold, stainless steel and elevators this is not the place for you! And perhaps you are not the right person for this place either ;) I had to leave earlier due to illness, and was so sorry i couldn't stay throughout the whole month as planned. Hope to be seeing Isabel and her welcoming surroundings again one day "
                        },
                        {
                            "at": "2016-09-07T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb85f",
                                "fullname": "Jessy",
                                "imgUrl": "https://robohash.org/2935800?set=set1",
                                "id": "2935800"
                            },
                            "txt": "Isabel was an amazing host. She is incredible and super considerate. The apartment was by no means the best location in Barcelona, I walked everywhere and never needed a map or a taxi. Arriving late at night was always fine and there was never any disturbing street noise. The block is super cute with awesome little shops that are open during the day. Best neighborhood to be in and incredible city ! Muchísima gracias Isabel, estas invitada a visitar Los Ángeles, todo fue increíble !❤️"
                        }
                    ],
                    "_id": "622f337a75c7d36e498aaafd",
                    "imgUrls": [
                        "127.jpeg",
                        "004.jpeg",
                        "096.jpeg",
                        "141.jpeg",
                        "114.jpeg"
                    ]
                },
                {
                    "name": "Home, Sweet, Harlem. Welcome!",
                    "summary": "Welcome! Upgrades Added as of January 2018 This listing is located in the Spanish Harlem Section of Manhattan. I offer a cozy apartment that has great transportation in and out the city! The area has a lot of ethnic restaurants and a lot of local, active residents. This residence is great for a quick, inexpensive stay in New York whether its for business, travel, or personal purposes. I am glad to welcome all guests!",
                    "interaction": "I am great with communicating with my guest and making sure everyone is comfortable as possible. The apartment is yours to use but I am only a phone call away!",
                    "houseRules": "I take time and effort to maintain the household with the utmost cleanliness and hospitality. It is filled with the essentials needed to enjoy your stay.  I do ask to kindly respect the household as if it was yours. Please be courteous.",
                    "propertyType": "Apartment",
                    "roomType": "Entire home/apt",
                    "bedType": "Real Bed",
                    "cancellationPolicy": "moderate",
                    "capacity": 3,
                    "bedrooms": 1,
                    "beds": 1,
                    "numOfReviews": 199,
                    "amenities": [
                        "TV",
                        "Wifi",
                        "Air conditioning",
                        "Kitchen",
                        "Iron",
                        "Heating",
                        "Smoke detector",
                        "Carbon monoxide detector",
                        "Essentials",
                        "Shampoo",
                        "Lock on bedroom door",
                        "Hangers",
                        "Iron",
                        "Laptop friendly workspace",
                        "translation missing: en.hosting_amenity_49",
                        "translation missing: en.hosting_amenity_50",
                        "Private living room",
                        "Hot water",
                        "Bed linens",
                        "Extra pillows and blankets",
                        "Refrigerator",
                        "Dishes and silverware",
                        "Cooking basics",
                        "Oven",
                        "Stove",
                        "Host greets you"
                    ],
                    "host": {
                        "_id": "622f3405e36c59e6164fb914",
                        "fullname": "Kevin",
                        "location": "New York, New York, United States",
                        "about": "Welcome Everyone! Thank you for stopping by. \r\n\r\nI was born and raised in Manhattan and I am here to help  share the New York City Experience with others through Airbnb!  I am easy to connect with and very reachable and always willing to interact with people. \r\n\r\nI am big on cleanliness and hospitality. I strive on making Guests feel as comfortable as possible. \r\n\r\nI hope you would like to get a chance to visit my location and enjoy the hosting I provide. If you have any questions/ comments, feel free to contact me. \r\n",
                        "responseTime": "within a few hours",
                        "thumbnailUrl": "https://a0.muscache.com/im/pictures/61b62b90-e38b-4609-a3c4-ff5ff06b5c08.jpg?aki_policy=profile_small",
                        "pictureUrl": "https://a0.muscache.com/im/pictures/87b9ccba-154a-4546-8cbe-8bdb25ddb36c.jpg?aki_policy=profile_x_medium",
                        "isSuperhost": false,
                        "id": "24800102"
                    },
                    "address": {
                        "street": "New York, NY, United States",
                        "country": "United States",
                        "location": {
                            "lat": -73.93955,
                            "lan": 40.79733
                        },
                        "countryCode": "US",
                        "city": "New York"
                    },
                    "id": "11097962",
                    "bathrooms": 1,
                    "price": 110,
                    "securityDeposit": 0,
                    "cleaningFee": 10,
                    "extraPeople": 25,
                    "reviewScores": {
                        "accuracy": 9,
                        "cleanliness": 10,
                        "checkin": 10,
                        "communication": 10,
                        "location": 9,
                        "value": 9,
                        "rating": 90
                    },
                    "reviews": [{
                            "at": "2016-03-26T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb8b4",
                                "fullname": "Christine",
                                "imgUrl": "https://robohash.org/47877926?set=set1",
                                "id": "47877926"
                            },
                            "txt": "Kevin was very welcoming and thorough with all information. The description of the property was accurate. It's also near the MTA if you want to get to another part of the city. Kevin got in touch before I arrived, and his brother was there to meet me and show me where everything was, which was great. Last but not least, he had provided a great information on the local area with recommendations for places to eat, etc., which I found really useful.\r\n"
                        },
                        {
                            "at": "2016-04-17T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbdb9",
                                "fullname": "Hector",
                                "imgUrl": "https://robohash.org/36832696?set=set1",
                                "id": "36832696"
                            },
                            "txt": "Kevin was nice. And he was very responsive via text, which I appreciate. The listing is in East Harlem, which isn't for everyone. The area is not very posh, but, for me, it feels like home, so I tend to stay there whenever I go to New York. The listing description was accurate enough, with respect to the way the apartment looks. If you can't deal with noise at night, however, this might not be the place for you. The neighbors were surprisingly noisy in the wee hours of the night and virtually silent during the day. This apartment is close to the subway, which was very useful."
                        },
                        {
                            "at": "2016-04-23T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbdca",
                                "fullname": "Jaime",
                                "imgUrl": "https://robohash.org/37244180?set=set1",
                                "id": "37244180"
                            },
                            "txt": "Kevin was very helpful and communicative during the whole time. The apartment is very nice, and within walking distance to the subway. Would definitely stay there again."
                        },
                        {
                            "at": "2016-04-24T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fae69",
                                "fullname": "Anan",
                                "imgUrl": "https://robohash.org/30380132?set=set1",
                                "id": "30380132"
                            },
                            "txt": "I had a wonderful stay at Kevin's apartment. The apartment is very close to the six train line. Everything in the apartment was spotless clean. I definitely recommend this apartment to others. Thank you Kevin for hosting me!"
                        },
                        {
                            "at": "2016-05-04T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbf23",
                                "fullname": "Yamilis",
                                "imgUrl": "https://robohash.org/5684819?set=set1",
                                "id": "5684819"
                            },
                            "txt": "Kevin fue excelente anfitrión. Se mantuvo en contacto con nosotros y fue muy comprensivo aún cuando llegamos más tarde de la hora acordada para el check in porque nos perdimos en el subway. También fue muy comprensivo para acordar el check out de acuerdo a la hora que fue más conveniente para nosotros, aún cuando también se nos hizo tarde. Nos proveyó de un matress de aire para nuestra amiga que vino de M.A. y se quedó una noche con nosotros. El barrio nos pareció bien, no tuvimos ningún incidente. Muchos puertoriqueños y Dominicanos, así que nos sentimos como en casa. Todo fue muy cómodo y limpio. Los vecinos hicieron mucho ruido en las noches, pero no fue problema para nosotros. Una sugerencia sería poner un espejo de cuerpo completo en alguna parte del apartento. En resumen, el apartamento fue perfecto para nosotros, nos volveríamos a quedar y claro que lo recomendaría! Muchas Gracias Kevin por tu ayuda!"
                        },
                        {
                            "at": "2016-05-08T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb6a4",
                                "fullname": "Leonam",
                                "imgUrl": "https://robohash.org/44604680?set=set1",
                                "id": "44604680"
                            },
                            "txt": "Kevin was really thoughtful about everything. He gave me all information needed while staying on his house. The house was very clean."
                        },
                        {
                            "at": "2016-05-11T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fc063",
                                "fullname": "Amy",
                                "imgUrl": "https://robohash.org/4923470?set=set1",
                                "id": "4923470"
                            },
                            "txt": "Kevin is a really nice host, flexible and very responsive. The apartment is a 4th-floor walk up, well-maintained and exactly as advertised in the listing. The apartment has all the basic things--it's especially nice to have a kitchen and comfy sofa. There's no TV and wifi, but you probably don't need it anyway since you are here to see New York city! It is just a short 5-min walk from the subway station, so very convenient. Street noise is not a problem although you can hear the neighbors at times (the kids next door can be noisy). East Harlem is a bustling Latino neighborhood with many local eateries and shops. The food selection is supposed to be great (too bad we didn't get to try any). There is a grocery store right outside the building. There're always locals hanging out in front but we were never bothered. All and all, a good choice if you are looking to stay in this part of the city."
                        },
                        {
                            "at": "2016-05-17T04:00:00.000Z",
                            "by": {
                                "_id": "622f3401e36c59e6164fab7d",
                                "fullname": "Vlad",
                                "imgUrl": "https://robohash.org/61270769?set=set1",
                                "id": "61270769"
                            },
                            "txt": "Kevin was an excellent host. Everything was absolutely as described. The apartment is lovely and very clean. There are numerous windows in every room and there is plenty of light! Would definitely stay again!"
                        },
                        {
                            "at": "2016-05-19T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbe7b",
                                "fullname": "Derick",
                                "imgUrl": "https://robohash.org/63351088?set=set1",
                                "id": "63351088"
                            },
                            "txt": "Great experience, we enjoyed ourselves for the night we stayed, only issue really were the neighbors being loud all night made it hard to sleep."
                        },
                        {
                            "at": "2016-05-21T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbefb",
                                "fullname": "Derek",
                                "imgUrl": "https://robohash.org/794527?set=set1",
                                "id": "794527"
                            },
                            "txt": "Kevin's place is exactly as other reviewers describe it:  nice and clean, spacious and very convenient as a base to explore and enjoy NYC. \r\n\r\nThe Neighborhood is definitely classic East Harlem.  Very real NYC vibe. Not a tourist area.  \r\n\r\nThe neighbors are noisy sometimes, so if you are a light sleeper, that could be a problem. But I didn't have any trouble. \r\n\r\nIt would have been nice to have wireless, but I didn't come to NYC to play online, so I didn't mind that too much.  \r\n\r\nKevin was a very nice, responsive host! "
                        },
                        {
                            "at": "2016-05-22T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb484",
                                "fullname": "Shiann",
                                "imgUrl": "https://robohash.org/26290842?set=set1",
                                "id": "26290842"
                            },
                            "txt": "Kevin made my friend and I feel really welcomed. The apartment was very clean!"
                        },
                        {
                            "at": "2016-05-26T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb208",
                                "fullname": "Stephanie",
                                "imgUrl": "https://robohash.org/73751485?set=set1",
                                "id": "73751485"
                            },
                            "txt": "Me and my husband stayed in the apartment this was our first time using this site and Kevin made us feel like we are regulars. We stayed one night and it was wonderful. Kevin contacted us right away and was really good with getting us whatever we need to stay there. The area is the only bad thing but when we went in the apartment you really forget about the outside."
                        },
                        {
                            "at": "2016-05-29T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb52c",
                                "fullname": "Virginie",
                                "imgUrl": "https://robohash.org/8842288?set=set1",
                                "id": "8842288"
                            },
                            "txt": "Kevin is easy to get in touch with and waited for us to arrive Even if it was already late in the evening. He even asked if everything was fine during our stay.\nThe appartment is perfectly situated to visit Manhattan island. Just note the neighbours are noisy if it is important to you."
                        },
                        {
                            "at": "2016-06-06T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb803",
                                "fullname": "Ada",
                                "imgUrl": "https://robohash.org/65358522?set=set1",
                                "id": "65358522"
                            },
                            "txt": "Kevin was absolutely wonderful. He was very responsive and communicative and I could tell he takes great pride in being an exceptional host. His place was exactly as described, as shown in the pictures and also very clean. The neighborhood is great and the room is a great price for someone looking to stay in the city and explore. It's right next to the trains, neighborhood gems but also commonly known stores for anyone who isn't familiar with the area. "
                        },
                        {
                            "at": "2016-06-11T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbc21",
                                "fullname": "Fernando",
                                "imgUrl": "https://robohash.org/75294316?set=set1",
                                "id": "75294316"
                            },
                            "txt": "everything was correct , very good condition to this price"
                        },
                        {
                            "at": "2016-06-14T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbdfe",
                                "fullname": "Francesca",
                                "imgUrl": "https://robohash.org/56355386?set=set1",
                                "id": "56355386"
                            },
                            "txt": "This is my first time using Airbnb. Kevin responded quickly to my inquiry about booking his apartment. Once booked he was very easy to reach via phone or text if I needed to. His one bedroom apartment was very clean and nicely furnished. It is central to a lot of restaurants and neighborhood shopping should you need something and a couple blocks from the subway and buses. Kevin was a great host. He was there to greet me, show me around the apartment and tell me a bit about the area. He also has maps and booklets about what to visit while in New York City. There is wifi in the apartment which is great. Kevin checked in with me just to make sure everything was ok during my trip. I had a wonderful stay at his apartment and would book it again! "
                        },
                        {
                            "at": "2016-06-20T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb4de",
                                "fullname": "Alex",
                                "imgUrl": "https://robohash.org/45975680?set=set1",
                                "id": "45975680"
                            },
                            "txt": "Kevin was a phenomenal host, he was very accommodating about arrival and check out times and provided me with a ton of useful information to navigate the area and make my stay as pleasant as possible. The apartment is two blocks from the subway and easy to navigate from. I would definitely recommend staying at Kevin's for all those considering a trip to New York."
                        },
                        {
                            "at": "2016-06-24T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbd08",
                                "fullname": "Johanna",
                                "imgUrl": "https://robohash.org/75777207?set=set1",
                                "id": "75777207"
                            },
                            "txt": "The apartment is as described. Kevin is very pleasant and was kind to helped me bring my belongings to the apartment. The apartment is cozy in a great location. I will definitely be using this apartment again"
                        },
                        {
                            "at": "2016-07-03T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb7a6",
                                "fullname": "Bandele",
                                "imgUrl": "https://robohash.org/5357325?set=set1",
                                "id": "5357325"
                            },
                            "txt": "Kevin's a great guy, but if you're looking for a hotel-like experience, this is NOT it... This however, IS a genuine NYC experience. Noisy & inconsiderate neighbors, dirty streets, dangerous vibes... All in all your safe, and anyone you actually talk to will be cool... Kevin was also very considerate and did everything he could to add comfort to my stay, he even warned me of the noisy neighbors in advance... This place is good for people who already know NYC, and need an affordable, SHORT-TERM (like 1-2days), place to crash uptown..."
                        },
                        {
                            "at": "2016-07-13T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb80a",
                                "fullname": "Bryan",
                                "imgUrl": "https://robohash.org/73430217?set=set1",
                                "id": "73430217"
                            },
                            "txt": "This place was cozy, comfortable and very clean. The AC was very helpful during the heat waves. Good shower and great WiFi connection as well."
                        }
                    ],
                    "_id": "622f337a75c7d36e498aaafe",
                    "imgUrls": [
                        "026.jpeg",
                        "119.jpeg",
                        "017.jpeg",
                        "023.jpeg",
                        "096.jpeg"
                    ]
                },
                {
                    "name": "Heroísmo IV",
                    "summary": "If the dates you wish are not available, we have other options in the same location. You can find them on my profile. My goal is for you to have your days with the most comfort i can propose. I want you to taste all the feelings in Porto, as our food, as our best places, our best pointviews. I just love to help you enjoying this beautiful city :)",
                    "interaction": "I'm always available to help as much as I can for my guests to spend a wonderful time in Porto.",
                    "houseRules": "I ask all the care with: - Noise from the 22 hours, especially when it comes to reach the apartment. - With decorative objects, furniture, bedding and bath, care in the handling of kitchen equipment. I am always available to answer any questions.",
                    "propertyType": "Apartment",
                    "roomType": "Entire home/apt",
                    "bedType": "Real Bed",
                    "cancellationPolicy": "moderate",
                    "capacity": 2,
                    "bedrooms": 0,
                    "beds": 1,
                    "numOfReviews": 31,
                    "amenities": [
                        "TV",
                        "Cable TV",
                        "Internet",
                        "Wifi",
                        "Kitchen",
                        "Shampoo",
                        "Heating",
                        "First aid kit",
                        "Safety card",
                        "Fire-extinguisher",
                        "Essentials",
                        "Shampoo",
                        "24-hour check-in",
                        "Hangers",
                        "Hair dryer",
                        "translation missing: en.hosting_amenity_49",
                        "translation missing: en.hosting_amenity_50",
                        "Room-darkening shades",
                        "Hot water",
                        "Bed linens",
                        "Extra pillows and blankets",
                        "Microwave",
                        "Refrigerator",
                        "Dishes and silverware",
                        "Cooking basics",
                        "Stove",
                        "Single level home",
                        "Long term stays allowed",
                        "Host greets you",
                        "Handheld shower head"
                    ],
                    "host": {
                        "_id": "622f3401e36c59e6164fab5c",
                        "fullname": "Apartments2Enjoy",
                        "location": "Porto, Porto District, Portugal",
                        "about": "Welcome!\r\nThe apartments has all the things to provide you a perfect days in Porto. It is located in a very central area, inside a typical oporto building. \r\nI will give you lots of informations about Porto, my personal tips, and I'll always be available to help you with anything. All I want is for you to go home knowing Porto and inevitably loving the city! :)\r\n\r\n",
                        "responseTime": "within a day",
                        "thumbnailUrl": "https://a0.muscache.com/im/pictures/f3e85f0c-e28d-4698-9da9-2f203aea1f3d.jpg?aki_policy=profile_small",
                        "pictureUrl": "https://a0.muscache.com/im/pictures/user/6bf03261-e7ac-4e0e-8121-3828612bbb6a.jpg?aki_policy=profile_x_medium",
                        "isSuperhost": true,
                        "id": "9320470"
                    },
                    "address": {
                        "street": "Porto, Porto, Portugal",
                        "country": "Portugal",
                        "location": {
                            "lat": -8.59275,
                            "lan": 41.1462
                        },
                        "countryCode": "PT",
                        "city": "Porto"
                    },
                    "id": "10487917",
                    "bathrooms": 1,
                    "price": 29,
                    "securityDeposit": 0,
                    "cleaningFee": 10,
                    "extraPeople": 0,
                    "reviewScores": {
                        "accuracy": 9,
                        "cleanliness": 9,
                        "checkin": 9,
                        "communication": 9,
                        "location": 9,
                        "value": 9,
                        "rating": 89
                    },
                    "reviews": [{
                            "at": "2016-02-06T05:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb449",
                                "fullname": "Tejovra",
                                "imgUrl": "https://robohash.org/41111599?set=set1",
                                "id": "41111599"
                            },
                            "txt": "Nuno and Francisca were extremely kind and helpful people. They made us feel very welcome and the house is surprisingly spacious. The wifi connection did struggle in our room but maybe we just had bad luck. They were even kind enough to extend our stay last minute. The service was top quality and the shower was amazing. Highly recommend staying here."
                        },
                        {
                            "at": "2016-02-21T05:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fafcc",
                                "fullname": "Sara",
                                "imgUrl": "https://robohash.org/52749020?set=set1",
                                "id": "52749020"
                            },
                            "txt": "Muito simpáticos e atenciosos. O apartamento é muito confortável e com pequenos detalhes que fazem a diferença. Muito perto do metro, o que é óptimo para deslocações necessárias."
                        },
                        {
                            "at": "2016-03-06T05:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164faf68",
                                "fullname": "Jennifer",
                                "imgUrl": "https://robohash.org/55700681?set=set1",
                                "id": "55700681"
                            },
                            "txt": "Bonjour, Notre séjour a été très agréable. Nous avons été très bien accueillies. Nuno nous a donné de nombreux conseils, lieux de visites... Le logement était également très bien. Nous avons vraiment pu profiter de Porto. Le métro est tout proche du logement. C'était vraiment un très bon séjour. Merci encore. "
                        },
                        {
                            "at": "2016-03-22T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb5b1",
                                "fullname": "Irune",
                                "imgUrl": "https://robohash.org/13478831?set=set1",
                                "id": "13478831"
                            },
                            "txt": "Our stay at Heroísmo IV was the perfect Airbnb experience. When we got there, Francisca was waiting for us. She was extremely nice and accommodating, she showed us the apartment and gave us a map of the city and plenty of tips about what to visit, where to eat, etc. The apartment is really small but has absolutely everything you need. It's clean, new, has a really nice kitchen, a very comfortable bed and is near the city center (we walked everyday). I highly recommend staying at Nuno's place. ¡Gracias por todo, Francisca! Porto is a beautiful city, we hope to come back soon!"
                        },
                        {
                            "at": "2016-04-30T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb0c1",
                                "fullname": "Marlene",
                                "imgUrl": "https://robohash.org/61125497?set=set1",
                                "id": "61125497"
                            },
                            "txt": "A nice litte appartement. We arrived very late but were kindly greeted by the host. She showed us arround and gave us very useful tips (where to go/ where to eat/ etc.). The appartement is located directly to a metro station and has a Lidl and other grocery stores very near by.  It was a perfect stay!"
                        },
                        {
                            "at": "2016-05-11T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fae67",
                                "fullname": "Елизавета",
                                "imgUrl": "https://robohash.org/20996941?set=set1",
                                "id": "20996941"
                            },
                            "txt": "Квартира не большая и очень уютная. В ней есть все необходимое. Отличное расположение рядом с метро. Я получила много полезной информации при заселении. Во время сильного дождя в ней сыро, но это не испортило отдых."
                        },
                        {
                            "at": "2016-08-05T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb3e7",
                                "fullname": "Teresa",
                                "imgUrl": "https://robohash.org/5868654?set=set1",
                                "id": "5868654"
                            },
                            "txt": "Desde o primeiro contacto, a comunicação foi muito fácil e clara. Colocaram à nossa disposição uma série de hipóteses de transporte a partir do aeroporto, bem como a possibilidade de termos em casa cabazes de alimentos. Assim que chegamos, com toda a sua simpatia, tinhamos a Mariana à nossa espera, recebeu-nos explicando os vários  pontos importantes para quem chega: locais a visitar, restaurantes, transportes...\r\nGostámos muito do espaço, do Porto, fazemos questão de voltar em breve. Local excelente!"
                        },
                        {
                            "at": "2016-08-11T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbf5b",
                                "fullname": "Joyce",
                                "imgUrl": "https://robohash.org/39810791?set=set1",
                                "id": "39810791"
                            },
                            "txt": "Francisca was very friendly and was waiting for us, she took the time to explain us everything about the flat, she even let us good adresses of restaurants, coffees and places to visit in Porto.\r\nThe flat is 10 minutes by foot from the center, with no stairs to climb, good for our heavy luggages! It is very calm and we even had a table outside where we took our breakfasts. The flat is tiny but very functional, clean, and well equipped.\r\nIt is perfect for a short time in Porto."
                        },
                        {
                            "at": "2016-08-27T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbaad",
                                "fullname": "Jess",
                                "imgUrl": "https://robohash.org/35186577?set=set1",
                                "id": "35186577"
                            },
                            "txt": "The apartment is great value for money and the location is fantastic. We arrived before the check in time but were greeted promptly and could leave our luggage to explore the city straight away. Francisca gave us a lot of good advice and recommendations for the city, which was very helpful. "
                        },
                        {
                            "at": "2016-09-27T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164faeed",
                                "fullname": "Jennifer",
                                "imgUrl": "https://robohash.org/34970659?set=set1",
                                "id": "34970659"
                            },
                            "txt": "Thank you for hosting us Nuno. Our trip was perfect. The host was very kind. And the apartment is beautiful, near the center and is well think : it has everything for a few days."
                        },
                        {
                            "at": "2016-12-11T05:00:00.000Z",
                            "by": {
                                "_id": "622f3401e36c59e6164fab65",
                                "fullname": "Joana",
                                "imgUrl": "https://robohash.org/60496781?set=set1",
                                "id": "60496781"
                            },
                            "txt": "Estúdio muito simpático e limpo. Ideal para uma ou duas pessoas, para explorar o Porto durante um par de dias. Estação de metro à porta. Perto da zona histórica do Porto — faz-se bem a pé. Pastelaria ideal para pequeno almoço mesmo à porta."
                        },
                        {
                            "at": "2017-01-01T05:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb749",
                                "fullname": "Nicolas",
                                "imgUrl": "https://robohash.org/106998486?set=set1",
                                "id": "106998486"
                            },
                            "txt": "L'emplacement est parfait, dans un quartier calme et à proximité immédiate du métro et du centre-ville. Seul bémol: l'absence d'eau chaude à la douche (un seul ballon d'eau chaude disponible pour plusieurs appartements), franchement regrettable en plein coeur de l'hiver. Ce qui du coup entraîne un rapport qualité-prix un peu cher"
                        },
                        {
                            "at": "2017-03-17T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb10c",
                                "fullname": "Marina",
                                "imgUrl": "https://robohash.org/115887917?set=set1",
                                "id": "115887917"
                            },
                            "txt": "El apartamento esta genial, es pequeño pero tiene todo lo necesario, cama super grande y cómoda, el apartamento está en general como nuevo y se ve exactamente como las fotos, estaba todo suuuuper limpio y tienen un radiador que calienta el habitáculo en muy poco tiempo. Nos recibió Rita, y de maravilla, nos dio un montón de información sobre Porto en un momento y nos dejó un montón de mapas e info útil. la zona es tranquila y tiene un montos de aparcamiento seguro en la misma calle. Aun que no está en el mismo centro de la ciudad se llega a el en un paseo de poco más de 10 mins, además en la misma puerta hay una parada de metro. Ha sido una experiencia genial quedarnos aquí para visitar la ciudad. Muchas gracias por la amabilidad, si volvemos a la ciudad no dudaríamos en volver a quedarnos aquí."
                        },
                        {
                            "at": "2017-04-13T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fad5b",
                                "fullname": "Diogo",
                                "imgUrl": "https://robohash.org/122269906?set=set1",
                                "id": "122269906"
                            },
                            "txt": "Gostamos muito do espaco, pequeno mas muito agradavel. Excelente para passar apenas uns dias. Obrigada ao Nuno que esperou por nos ate tarde e que ainda tirou um tempinho para nos explicar e dar umas dicas sobre a cidade! Aconselho!"
                        },
                        {
                            "at": "2017-06-02T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb79e",
                                "fullname": "Anastasia",
                                "imgUrl": "https://robohash.org/9456078?set=set1",
                                "id": "9456078"
                            },
                            "txt": "Небольшая, но очень уютная квартирка со всем необходимым! Завтракать на свежем воздухе очень приятно, в кухне можно приготовить все, что захочешь! Очень гостеприимная хозяйка, рассказала много интересного о местах поблизости и в городе!"
                        },
                        {
                            "at": "2017-06-18T04:00:00.000Z",
                            "by": {
                                "_id": "622f3401e36c59e6164fab70",
                                "fullname": "Raphael",
                                "imgUrl": "https://robohash.org/32418543?set=set1",
                                "id": "32418543"
                            },
                            "txt": "Excelente Studio, muito bem localizado e com todas as comodidades necessárias para uma pequena estadia."
                        },
                        {
                            "at": "2017-06-30T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbc99",
                                "fullname": "Judith",
                                "imgUrl": "https://robohash.org/47537690?set=set1",
                                "id": "47537690"
                            },
                            "txt": "The flat is situated right next to a metro station. Also perfect, if you arrive by car - free parking just in front. 15 mins walk to downtown but lot of cheap cafes and restaurants full of locals around.\nThe check-in was perfect. We got lots of information, what to do/see/where to eat. Thanks for that. \nThe Apartement is very small but for a short city visit, big enough. If you stay for a week or so, I would recommend a larger Apartement.  "
                        },
                        {
                            "at": "2017-07-11T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb694",
                                "fullname": "Marta",
                                "imgUrl": "https://robohash.org/20010340?set=set1",
                                "id": "20010340"
                            },
                            "txt": "Fantástica estancia en Oporto. Apartamento pequeño pero suficiente para pasar unos días en  Oporto una pareja. Situado un poco a las afueras pero muy buena comunicación  con el centro (parada de metro y autobús enfrente del apartamento).\nAtención inmejorable del anfitrión, respondiendo muy rápido a nuestras consultas y gestionando nuestra llegada. El único fallo es que la lavadora no se podía utilizar. Muy recomendable para pasar unos días en Oporto relación calidad-precio.\n"
                        },
                        {
                            "at": "2017-07-30T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fadc4",
                                "fullname": "Aron",
                                "imgUrl": "https://robohash.org/31601157?set=set1",
                                "id": "31601157"
                            },
                            "txt": "We had a very nice welcome where we received tips about the neighbourhood. Those we tried turned out excellent. It's a 15 to 20 minute walk to the centre, the room is small but it has everything you need and is well maintained. Very close to the subway, a small outdoor area where you can sit. \nTip: sandwiches (pork with cheese) from casa guedes"
                        },
                        {
                            "at": "2017-11-15T05:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fba79",
                                "fullname": "Márcio",
                                "imgUrl": "https://robohash.org/50134628?set=set1",
                                "id": "50134628"
                            },
                            "txt": "Excelente relação preço qualidade, muito boa comodidade e excelentes acessos. Muitas opções para as refeições por perto e metro à porta. Recomendo."
                        }
                    ],
                    "_id": "622f337a75c7d36e498aaaff",
                    "imgUrls": [
                        "120.jpeg",
                        "059.jpeg",
                        "056.jpeg",
                        "035.jpeg",
                        "121.jpeg"
                    ]
                },
                {
                    "name": "Monte dos Burgos - Cosy Room",
                    "summary": "The neighbourhood is a quiet, family residential area, 20 minutes by bus from the historic center of Porto and 20 minutes from the beach (Matosinhos - where you may eat very GOOD fish!). You will love to stay in a very spacious, familiar and bright room, where you can enjoy a large and flowery garden, comfortable kitchen and laundry with washer and dryer machine. My space is good for couples, solo adventures, and business travelers!",
                    "interaction": "Respect and confidance is the key to our hosts!!!",
                    "houseRules": "",
                    "propertyType": "House",
                    "roomType": "Private room",
                    "bedType": "Real Bed",
                    "cancellationPolicy": "strict_14_with_grace_period",
                    "capacity": 2,
                    "bedrooms": 1,
                    "beds": 1,
                    "numOfReviews": 5,
                    "amenities": [
                        "Wifi",
                        "Kitchen",
                        "Hangers",
                        "Hair dryer",
                        "Iron",
                        "Internet",
                        "Hair dryer",
                        "First aid kit",
                        "Fire-extinguisher",
                        "Essentials",
                        "Shampoo",
                        "Lock on bedroom door",
                        "Laptop friendly workspace",
                        "translation missing: en.hosting_amenity_49",
                        "translation missing: en.hosting_amenity_50"
                    ],
                    "host": {
                        "_id": "622f3404e36c59e6164fb54f",
                        "fullname": "Patrícia Sousa Casimiro",
                        "location": "Senhora da Hora, Porto, Portugal",
                        "about": "",
                        "responseTime": "a few days or more",
                        "thumbnailUrl": "https://a0.muscache.com/im/pictures/87b9ccba-154a-4546-8cbe-8bdb25ddb36c.jpg?aki_policy=profile_small",
                        "pictureUrl": "https://a0.muscache.com/im/pictures/87b9ccba-154a-4546-8cbe-8bdb25ddb36c.jpg?aki_policy=profile_x_medium",
                        "isSuperhost": false,
                        "id": "80558077"
                    },
                    "address": {
                        "street": "Porto, Porto District, Portugal",
                        "country": "Portugal",
                        "location": {
                            "lat": -8.63082,
                            "lan": 41.18075
                        },
                        "countryCode": "PT",
                        "city": "Porto"
                    },
                    "id": "13750579",
                    "bathrooms": 1,
                    "price": 26,
                    "securityDeposit": null,
                    "cleaningFee": 8,
                    "extraPeople": 5,
                    "reviewScores": {
                        "accuracy": 10,
                        "cleanliness": 10,
                        "checkin": 10,
                        "communication": 10,
                        "location": 9,
                        "value": 10,
                        "rating": 96
                    },
                    "reviews": [{
                            "at": "2016-08-11T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fad68",
                                "fullname": "Celeste",
                                "imgUrl": "https://robohash.org/38181630?set=set1",
                                "id": "38181630"
                            },
                            "txt": "We had a very nice stay in the house and felt at home. The room is big and light, we had a private bathroom, could use the kitchen and the nice garden. Patricia picked us up at the station of the metro, the bus is near. Patricia and Chris are very open and welcoming people, we talked about Portugal, Fado, Porto ... Also, they gave us several tips to see in Porto. When we are in Porto again we will come back!! We really recommand to stay here. Thanks Patricia and Casimiro!"
                        },
                        {
                            "at": "2016-08-14T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fadf0",
                                "fullname": "Martin",
                                "imgUrl": "https://robohash.org/32511082?set=set1",
                                "id": "32511082"
                            },
                            "txt": "Patricia and Chris has been wonderful hosts. They help us very much with all questions we had. We enjoyed our stay very much."
                        },
                        {
                            "at": "2016-08-15T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164faedf",
                                "fullname": "Sandra",
                                "imgUrl": "https://robohash.org/66617047?set=set1",
                                "id": "66617047"
                            },
                            "txt": "Une chambre très spacieuse et une salle de bain privée : au top ! \r\nChristian et Patricia ont été très accueillants et nous nous sommes tout de suite sentis comme chez nous ! "
                        },
                        {
                            "at": "2016-08-20T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb3ed",
                                "fullname": "Erika",
                                "imgUrl": "https://robohash.org/78636529?set=set1",
                                "id": "78636529"
                            },
                            "txt": "Des hôtes très accueillant et à l'écoute de leurs invités! De supers adresses à conseiller. \r\nUne maison décorée avec goût et avec une sublime salle de bain privée.\r\nLe centre est très facile d'accès en bus car inaccessible en voiture. \r\nTrès facile de se garer dans la rue de nos hôtes.\r\nUn excellent rapport qualité prix!"
                        },
                        {
                            "at": "2016-08-22T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb9bd",
                                "fullname": "Guy",
                                "imgUrl": "https://robohash.org/88496638?set=set1",
                                "id": "88496638"
                            },
                            "txt": "Patricia et Casimir ont été très accueillants et nous ont donné toutes les informations pratiques pour se rendre au centre de Porto en bus. La chambre est spacieuse et la salle de bain privée est juste à coté. Le quartier est très calme et le séjour était très agréable."
                        }
                    ],
                    "_id": "622f337a75c7d36e498aab00",
                    "imgUrls": [
                        "086.jpeg",
                        "016.jpeg",
                        "070.jpeg",
                        "121.jpeg",
                        "141.jpeg"
                    ]
                },
                {
                    "name": "Nice Cosy Room In Taksim",
                    "summary": "Welcome if you want to stay at a cozy flat with local experience.:) It is in the center of Istanbul.The neighborhood is safe and close to attractions.Transportation is easy. I will help you always.",
                    "interaction": "After the booking you can reach me from (Hidden by Airbnb) or whatsaap",
                    "houseRules": "",
                    "propertyType": "Apartment",
                    "roomType": "Private room",
                    "bedType": "Real Bed",
                    "cancellationPolicy": "strict_14_with_grace_period",
                    "capacity": 2,
                    "bedrooms": 1,
                    "beds": 1,
                    "numOfReviews": 31,
                    "amenities": [
                        "TV",
                        "Cable TV",
                        "Internet",
                        "Wifi",
                        "Air conditioning",
                        "Kitchen",
                        "Heating",
                        "Pool",
                        "Essentials",
                        "Shampoo"
                    ],
                    "host": {
                        "_id": "622f3402e36c59e6164fae4d",
                        "fullname": "Nihat",
                        "location": "Istanbul",
                        "about": "I live alone in Taksim area and i work at bar.\r\nI like meet new friends from all of the world.\r\nI like to Travel a lot ofcourse if i have free time :) East Asia , Sun , Sea , Sand , Movie  :) ",
                        "responseTime": "within an hour",
                        "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/6bf03261-e7ac-4e0e-8121-3828612bbb6a.jpg?aki_policy=profile_small",
                        "pictureUrl": "https://a0.muscache.com/im/pictures/user/6bf03261-e7ac-4e0e-8121-3828612bbb6a.jpg?aki_policy=profile_x_medium",
                        "isSuperhost": true,
                        "id": "5823933"
                    },
                    "address": {
                        "street": "Taksim, Cihangir, Istanbul , Beyoğlu, Turkey",
                        "country": "Turkey",
                        "location": {
                            "lat": 28.98648,
                            "lan": 41.03376
                        },
                        "countryCode": "TR",
                        "city": "Istanbul"
                    },
                    "id": "1058555",
                    "bathrooms": 1,
                    "price": 105,
                    "securityDeposit": null,
                    "cleaningFee": 60,
                    "extraPeople": 60,
                    "reviewScores": {
                        "accuracy": 10,
                        "cleanliness": 10,
                        "checkin": 10,
                        "communication": 10,
                        "location": 10,
                        "value": 9,
                        "rating": 96
                    },
                    "reviews": [{
                            "at": "2014-04-06T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbcc7",
                                "fullname": "Quentin",
                                "imgUrl": "https://robohash.org/12424603?set=set1",
                                "id": "12424603"
                            },
                            "txt": "I greatly appreciated both the location of the place (very central) and the appartment per se (clean and comfortable, with a very cosy room and with Wi-Fi). \r\n\r\nNihat was perfect host, quite welcoming and helpful about places to go (or avoid) and things to do in town. \r\n\r\nHosça kal!\r\n\r\n\r\n"
                        },
                        {
                            "at": "2015-04-02T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb7f6",
                                "fullname": "Steve",
                                "imgUrl": "https://robohash.org/10300292?set=set1",
                                "id": "10300292"
                            },
                            "txt": "Nice room in a flat well located. Nihat is very nce and helpful. Good experience."
                        },
                        {
                            "at": "2015-05-19T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb624",
                                "fullname": "Jess",
                                "imgUrl": "https://robohash.org/8641944?set=set1",
                                "id": "8641944"
                            },
                            "txt": "We had a fantastic stay in this charming apartment. The location was perfect and Nihat welcomed us even when we made a late reservation and arrived early. He works at a bar no far from there- a great place to have a drink after seeing the sites! I highly recommend this place!"
                        },
                        {
                            "at": "2015-08-25T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbcb6",
                                "fullname": "Irina",
                                "imgUrl": "https://robohash.org/42110174?set=set1",
                                "id": "42110174"
                            },
                            "txt": "The flat is clean and and very good located, 3 minutes walk to Taksim Square. The bedroom is quiet at night, even though there is a crowded area next to the flat. Nihat was always extremely quick in answering our emails and let us feel comfortable. He is really kind and discrete, we met him few times cause he works in the evening. "
                        },
                        {
                            "at": "2015-09-21T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fae1a",
                                "fullname": "Matthew",
                                "imgUrl": "https://robohash.org/40562632?set=set1",
                                "id": "40562632"
                            },
                            "txt": "Nihat went out of his way to accommodate our very early arrival and some unforeseeable challenges.  A great host!"
                        },
                        {
                            "at": "2015-11-09T05:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fc03f",
                                "fullname": "Valon",
                                "imgUrl": "https://robohash.org/47981428?set=set1",
                                "id": "47981428"
                            },
                            "txt": "Nice place and host, very good location :)"
                        },
                        {
                            "at": "2015-12-28T05:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb7a0",
                                "fullname": "Amanda",
                                "imgUrl": "https://robohash.org/29625938?set=set1",
                                "id": "29625938"
                            },
                            "txt": "Everything was great about the room and the location."
                        },
                        {
                            "at": "2016-01-09T05:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb3fe",
                                "fullname": "Mathieu & Hilal",
                                "imgUrl": "https://robohash.org/50390021?set=set1",
                                "id": "50390021"
                            },
                            "txt": "The stay at Nihat's place was really pleasant. The apartment is very clean and confortable, and located in a very vibrant and animated neighborhood with many restaurants, cafes, bars, shops just nearby. Just a 5 min walk to the Taksim Metro station makes it easy to access any other parts of the city pretty quickly. Nihat was also a great and welcoming host. We totally recommend this place for your stay in Istanbul, especially if you want to experience the local life to the fullest ! "
                        },
                        {
                            "at": "2016-03-20T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb225",
                                "fullname": "Christie",
                                "imgUrl": "https://robohash.org/48957037?set=set1",
                                "id": "48957037"
                            },
                            "txt": "The host canceled this reservation 30 days before arrival. This is an automated posting."
                        },
                        {
                            "at": "2017-05-11T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fad81",
                                "fullname": "Vanessa",
                                "imgUrl": "https://robohash.org/551888?set=set1",
                                "id": "551888"
                            },
                            "txt": "I stayed at Nihat's for a week. It was exactly as the pics, very nice room. A little bit cold but he offers heating and AC. The apt is cozy and central, close to nice restaurants and bars. Have in mind is on the 4th fl no elevator. Nihat is a very easygoing guy who's open to help with any question or tip about the city. Totally recommend! thanks Nihat! "
                        },
                        {
                            "at": "2017-05-21T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb2d1",
                                "fullname": "Florentin",
                                "imgUrl": "https://robohash.org/75066050?set=set1",
                                "id": "75066050"
                            },
                            "txt": "Nihat is a very nice host, he is very helpful and creates an agreeable atmosphere inside the flat. Thank you :)"
                        },
                        {
                            "at": "2017-08-27T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fae29",
                                "fullname": "Harshak",
                                "imgUrl": "https://robohash.org/19784722?set=set1",
                                "id": "19784722"
                            },
                            "txt": "Nice cozy place very close to Taksim Square. Nihat is helpful and informative."
                        },
                        {
                            "at": "2017-09-26T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbc70",
                                "fullname": "Haytham",
                                "imgUrl": "https://robohash.org/10741329?set=set1",
                                "id": "10741329"
                            },
                            "txt": "nice apartment with good location. the room was clean and neat. Nihat was helpful and supportive. totally recommend his accommodation"
                        },
                        {
                            "at": "2017-10-03T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb5fd",
                                "fullname": "Vural",
                                "imgUrl": "https://robohash.org/14053758?set=set1",
                                "id": "14053758"
                            },
                            "txt": "Nihat is a very friendly host and makes you really feel comfortable. I have had a great stay and recommend it to anyone who wants to stay very central (Cihangir), the hip and modern part of the city with cozy venues and great cafes just a 3min walk. The place is very close to Taksim Square, etc...everything as described in the prior conments. I will definitely come again! Cheers vural"
                        },
                        {
                            "at": "2017-12-03T05:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fba05",
                                "fullname": "Wasseem",
                                "imgUrl": "https://robohash.org/2072593?set=set1",
                                "id": "2072593"
                            },
                            "txt": "I totally recommend this place. Great experience staying at Nihat’s apartment. To start with, Nihat is a wonderful friendly person who I was happy to meet. He was very friendly at house, and we had the chance to spend time together outside. Staying with him reflects the true meaning of this website, which is living as a local with a local person. Thank you Nihat. \nRegarding the apartment, it is exactly as described. The room is nice and bed is comfortable. It was clean and well prepared for us. \nRegarding the neighborhood, it is very close to Taksim square and Istiklal Street with few minutes walk. As normal as it is in Istanbul, there is a short hill you need to walk to get to the square, which was totally fine with us. \n\nIn general, next time I visit Istanbul I would first check the availability with Nihat before searching others."
                        },
                        {
                            "at": "2018-02-23T05:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fac4c",
                                "fullname": "Mr Joseph",
                                "imgUrl": "https://robohash.org/10668432?set=set1",
                                "id": "10668432"
                            },
                            "txt": "Nihat was an amazing host. He picked me up from the bus stop, gave me some great tips on what to do in Istanbul and just an all round great guy. If you're looking for somewhere close to Taksim then Nihat's place is great. Highly recommend him! Thanks Nihat."
                        },
                        {
                            "at": "2018-03-05T05:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb8b8",
                                "fullname": "Gökçe",
                                "imgUrl": "https://robohash.org/64172965?set=set1",
                                "id": "64172965"
                            },
                            "txt": "Nihat is so hospitable person. Me and My boyfriend stayed 6 days in Nihat's place and everything was perfect. Nihat is so tactful person despite he was working so hard, he all the time asked us 'do we need anything?' he was so clean and his house is exactly same with the pictures.\nI'm highly recommend his place! \nthank you Nihat!"
                        },
                        {
                            "at": "2018-04-01T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb952",
                                "fullname": "Bruno",
                                "imgUrl": "https://robohash.org/6316350?set=set1",
                                "id": "6316350"
                            },
                            "txt": "Very helping and welcoming host. Perfect location for a few days in Istanbul."
                        },
                        {
                            "at": "2018-04-04T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb73d",
                                "fullname": "Vichapas",
                                "imgUrl": "https://robohash.org/68234834?set=set1",
                                "id": "68234834"
                            },
                            "txt": "Nihat was very nice, polite and very helpful to us. He let us drop our baggages off in the morning and left them for a little longer when we checked out. The location is great as it is near Taksim Square. There are local grocery shops nearby if you want to buy some food or snacks."
                        },
                        {
                            "at": "2018-04-23T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb0fe",
                                "fullname": "Show",
                                "imgUrl": "https://robohash.org/107816748?set=set1",
                                "id": "107816748"
                            },
                            "txt": "Nihat is very nice host, and came to wait for me in the shuttle bus station near Taksim squre, His house is very convenient for travel. He is very experirenced and warm host, the room super clean and warm, and house has everything, next time i will choose his house again in istanbul. miss you nihat. see you next time."
                        }
                    ],
                    "_id": "622f337a75c7d36e498aab01",
                    "imgUrls": [
                        "042.jpeg",
                        "110.jpeg",
                        "037.jpeg",
                        "005.jpeg",
                        "075.jpeg"
                    ]
                },
                {
                    "name": "Beach penthouse",
                    "summary": "Price includes nightly rate & 14.42% tax.  Our fully remodeled 9th floor Penthouse unit offers the most amazing views.  The entire front of the condo is windows offering you a fantastic view of beautiful Pacific Ocean, Molokai & Lana'i.  Perfect location for watching beautiful sunsets, see our resident sea turtles & an excellent place for spotting whales during the whale migration season. This spacious two level 3 bedroom and 3 full bath Penthouse unit has over 2,050 sq ft of living space w/ AC.",
                    "interaction": "As your host I will be available via phone for any questions or concerns.  I am always happy to answer any questions or give assistance prior to your arrival.",
                    "houseRules": "Resort fee of $75 collected by front desk at time of check in.  One time fee. - Rates are for 6 guests.  An additional $25 per night per person for up to 2 more guests. - Resort Quiet Hours 10:00 p.m. - 8:00 a.m. - No smoking on the lanai or in unit per Hawaii state law",
                    "propertyType": "Condominium",
                    "roomType": "Entire home/apt",
                    "bedType": "Real Bed",
                    "cancellationPolicy": "strict_14_with_grace_period",
                    "capacity": 9,
                    "bedrooms": 3,
                    "beds": 6,
                    "numOfReviews": 17,
                    "amenities": [
                        "TV",
                        "Safety card",
                        "Internet",
                        "Wifi",
                        "Air conditioning",
                        "Pool",
                        "Kitchen",
                        "Smoke detector",
                        "Carbon monoxide detector",
                        "First aid kit",
                        "Free parking on premises",
                        "Gym",
                        "Elevator",
                        "Hot tub",
                        "Family/kid friendly",
                        "Washer",
                        "Hair dryer",
                        "Fire extinguisher",
                        "Essentials",
                        "Shampoo",
                        "Lock on bedroom door",
                        "24-hour check-in",
                        "Hangers",
                        "Hair dryer",
                        "Iron",
                        "Laptop friendly workspace",
                        "Self check-in",
                        "Building staff",
                        "Private entrance",
                        "Bathtub",
                        "Baby bath",
                        "High chair",
                        "Children’s books and toys",
                        "Crib",
                        "Pack ’n Play/travel crib",
                        "Children’s dinnerware",
                        "Hot water",
                        "Bed linens",
                        "Extra pillows and blankets",
                        "Microwave",
                        "Coffee maker",
                        "Refrigerator",
                        "Dishwasher",
                        "Dishes and silverware",
                        "Cooking basics",
                        "Oven",
                        "Stove",
                        "BBQ grill",
                        "Patio or balcony",
                        "Beach essentials",
                        "Step-free access",
                        "Disabled parking spot",
                        "Step-free access",
                        "Step-free access",
                        "Step-free access",
                        "Beachfront",
                        "Pool with pool hoist"
                    ],
                    "host": {
                        "_id": "622f3405e36c59e6164fb6ba",
                        "fullname": "Cynthia",
                        "location": "California, United States",
                        "about": "My husband and I are Real Estate Investors.  We enjoy traveling and no matter where we go, we always find ourselves looking at properties.  Since we still have school age children I have found that a beach vacation is usually the most enjoyable for everyone.  Living on the West Coast, Hawaii continued to be a place that we would return to time and time again.",
                        "responseTime": "within an hour",
                        "thumbnailUrl": "https://a0.muscache.com/im/pictures/07c98f2f-9ffe-4ed8-82ca-1e9cd00c673f.jpg?aki_policy=profile_small",
                        "pictureUrl": "https://a0.muscache.com/im/users/6334250/profile_pic/1368287493/original.jpg?aki_policy=profile_x_medium",
                        "isSuperhost": true,
                        "id": "82827178"
                    },
                    "address": {
                        "street": "Lahaina, HI, United States",
                        "country": "United States",
                        "location": {
                            "lat": -156.68034,
                            "lan": 20.97104
                        },
                        "countryCode": "US",
                        "city": "Maui"
                    },
                    "id": "13934996",
                    "bathrooms": 3,
                    "price": 800,
                    "securityDeposit": 2000,
                    "cleaningFee": 325,
                    "extraPeople": 50,
                    "reviewScores": {
                        "accuracy": 10,
                        "cleanliness": 10,
                        "checkin": 10,
                        "communication": 10,
                        "location": 10,
                        "value": 10,
                        "rating": 100
                    },
                    "reviews": [{
                            "at": "2016-12-08T05:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbfd3",
                                "fullname": "Therese",
                                "imgUrl": "https://robohash.org/5536819?set=set1",
                                "id": "5536819"
                            },
                            "txt": "We have just returned from a fabulous holiday at Cynthia's condo on Maui. Everything was fantastic. From the moment we booked Cynthia could not have been more helpful with everything and was always ready and willing to answer all of our queries. Cynthia provided us with an extensive list of recommendations for our stay on Maui and we were not disappointed. The condo is located in a quiet but convenient neighbourhood and close to many amenities. We found the condo extremely spacious and it accommodated our party of 3 adults and two teenaged children with no problem at all. Cynthia's condo is the penthouse and is set right on the beach so we were treated to gorgeous Hawaiian sunsets every night, as well as being able to see turtles and whales from our balcony. The condo is beautifully presented and very well equipped - we could not have asked for anything more for our nine day stay. \r\nMahalo Cynthia "
                        },
                        {
                            "at": "2017-03-23T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbb9b",
                                "fullname": "Alexandra",
                                "imgUrl": "https://robohash.org/29101218?set=set1",
                                "id": "29101218"
                            },
                            "txt": "The location was great and the view was incredible! You are right on the beach and it is a great place for families with kids. Highly recommend staying here!"
                        },
                        {
                            "at": "2017-04-28T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb19f",
                                "fullname": "Daisy",
                                "imgUrl": "https://robohash.org/111663869?set=set1",
                                "id": "111663869"
                            },
                            "txt": "This place was beyond my expectations. There were no hidden surprises. Knew exactly what to expect, and Cynthia was always there to answer any quesions. The view is spectacular. Beautiful location. I highly recommend this place."
                        },
                        {
                            "at": "2017-07-29T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fac44",
                                "fullname": "Peter",
                                "imgUrl": "https://robohash.org/54509004?set=set1",
                                "id": "54509004"
                            },
                            "txt": "Very nice location with good beach. Penthouse is nice sized and comfortable. Amenities are good. Location is very good with close proximity to Lahaina and Kapalua."
                        },
                        {
                            "at": "2017-11-03T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb70f",
                                "fullname": "Megan",
                                "imgUrl": "https://robohash.org/5818782?set=set1",
                                "id": "5818782"
                            },
                            "txt": "If you want a one-stop, stress-free vacation, in a beautiful location with all the amenities you need....this is it!  We lucked out with perfect weather too.  Cynthia provides basic amenities, pool towels, bookie boards, snorkeling gear, and the comfort of being in a cozy home.  It was really easy to run up to the Condo for my 9-month old nap times or a quick snack, without being too separated from the family.  The onsite pools, restaurant and of course restaurant/bar became our home bases for the week.  Miso Phat Sushi (across the street) and Maui Brewing were awesome near-by/within walking distance restaurants.  My family and I can't stop bragging about our trip and what a wonderful family/group set-up this Condo is!  We recommend renting a car due to the distance from the airport, but the Condo/Resort has onsite parking."
                        },
                        {
                            "at": "2018-01-30T05:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fae2f",
                                "fullname": "Brenda",
                                "imgUrl": "https://robohash.org/151153465?set=set1",
                                "id": "151153465"
                            },
                            "txt": "Such a beautiful location in Paradise! The amazing balconies provided us with gathering spots for our morning coffee to watch the whales and gorgeous sunsets each evening. During our week long stay, we decided to visit Costco, the local fish market and the farmers market and ate 4 dinners in the condo.  The kitchen has everything you need, and the barbques downstairs were perfect for grilling.  Cynthia left us plenty of information for dining in the vicinity, so we had 3 nice dinners out. The guide she sent us before our visit was very informative and helped us to plan our outings while in Maui. Cynthia also checked in with us during our visit, making sure we had everything we needed. We are already planning a return visit to #391 at the Sands of Kahana in the near future!"
                        },
                        {
                            "at": "2018-03-24T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb04f",
                                "fullname": "Daria",
                                "imgUrl": "https://robohash.org/38292402?set=set1",
                                "id": "38292402"
                            },
                            "txt": "We had such a great time at Cynthia's condo.  Everything was sparkling clean. The check in and check out were seamless.  We loved that the condo came with some beach gear for our use (snorkels, boogie boards, water shoes...).  The views from the balconies are outstanding.  There is a nice and swimmable beach right downstairs, as well as a volleyball court and a casual restaurant. Great location with easy access to beach rentals, groceries, and anything else you might need during your stay.  Cynthia was very quick to respond to any questions we had. Loved the place! Would definitely stay again."
                        },
                        {
                            "at": "2018-04-14T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164faec7",
                                "fullname": "Amy",
                                "imgUrl": "https://robohash.org/95449574?set=set1",
                                "id": "95449574"
                            },
                            "txt": "This place was incredible. From the views to the thoughtfulness in everything in the condo. While climbing nine flights of stairs during an unexpected elevator renovation (that ends in May!) does not sound fun, it was actually not bad at all for the adults in our party, as well as the 3 sub-8 year old children, and allowed us to think we were earning all the delicious calories we ate and drank.\n\nI cannot rave enough about the amenities that are incredibly family friendly, including a full sized high chair, travel crib, toddler (and big kid) friendly toys for both indoors and at the beach. Cynthia is very quick to respond to communication and is clear as to what she can provide as a host, as well as her expectation of guests. She was as incredible as her Kahana home was and we'd highly recommend this place for anyone, including those with small children."
                        },
                        {
                            "at": "2018-05-19T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fba90",
                                "fullname": "Stacey",
                                "imgUrl": "https://robohash.org/69659100?set=set1",
                                "id": "69659100"
                            },
                            "txt": "This place is amazing. We will be back!"
                        },
                        {
                            "at": "2018-06-03T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbb28",
                                "fullname": "Rebekah",
                                "imgUrl": "https://robohash.org/154101405?set=set1",
                                "id": "154101405"
                            },
                            "txt": "What an amazing place to stay with a spectacular view!! The beach out front is awesome and we saw turtles daily! Cynthia was great with communication and making our stay feel just like home. Hope to stay here again!!"
                        },
                        {
                            "at": "2018-08-25T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbda0",
                                "fullname": "Chris",
                                "imgUrl": "https://robohash.org/170664766?set=set1",
                                "id": "170664766"
                            },
                            "txt": "Fantastic unit. Amazing sunsets."
                        },
                        {
                            "at": "2018-09-13T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbc74",
                                "fullname": "Esther",
                                "imgUrl": "https://robohash.org/4059349?set=set1",
                                "id": "4059349"
                            },
                            "txt": "Enjoyed our stay very much! The condo was clean, spacious and with all the amenities of a home away from home. Cynthia was very responsive, even checking up on us when the tropical storm warnings went out. Thankfully, the storm didn’t dampen our stay. Enjoyed many beautiful Maui sunsets from the home!"
                        },
                        {
                            "at": "2018-10-18T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb016",
                                "fullname": "Elaine",
                                "imgUrl": "https://robohash.org/73108150?set=set1",
                                "id": "73108150"
                            },
                            "txt": "The place has amazing ocean views!!! Cynthia provided beach chairs, gears, and toys for the kids. The entire condo is well organized and our family had such a great time. Appreciate all the little touches you provided for your guests. Will definitely stay there again when we return on Maui! :)"
                        },
                        {
                            "at": "2019-01-11T05:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb239",
                                "fullname": "Dan",
                                "imgUrl": "https://robohash.org/217281282?set=set1",
                                "id": "217281282"
                            },
                            "txt": "This condo was very spacious.  We had eight people (ages 5-85) and there was plenty of space for everyone.  Cynthia was readily accessible if we needed anything.  The view from the lanai was breathtaking and we watched whales every morning.  The condo was stocked with plenty of snorkel gear, boogie boards, beach chairs, sand toys for the kids, board games, puzzles, etc.  The kitchen had plenty of pots, pans, dishes, utensils, etc.  Thanks for the great stay!"
                        },
                        {
                            "at": "2019-01-22T05:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164faf7d",
                                "fullname": "Jess",
                                "imgUrl": "https://robohash.org/20450315?set=set1",
                                "id": "20450315"
                            },
                            "txt": "Very clean. Cleanest Airbnb we have stayed at. Beautiful home and beautiful view of the sunset from the apartment. Loved that they had binoculars to see the whales jumping out in the distance."
                        },
                        {
                            "at": "2019-02-14T05:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb1af",
                                "fullname": "Anna-Mae",
                                "imgUrl": "https://robohash.org/76192807?set=set1",
                                "id": "76192807"
                            },
                            "txt": "If you are wanting a beautiful place right on the beach when you visit Kaanapali with your family , then this is the place for you ! Gorgeous full ocean view from the large deck ,large spacious rooms, super clean, lots of extras and great communication with Cynthia! We came here with our 3 adult kids and their spouses and loved everything about this place .. well stocked kitchen , lots of towels, beach toys (boogie boards were a hit ) comfortable beds ..and then there is outside !  Beautiful clean beach right outfront, nice pool and grounds , very helpful staff and amenities close by ... we watched whales and turtles right from our beach and deck, amazing !! This condo made our trip to Maui a real treat ..chose Cynthia's condo , you will not be disappointed !!"
                        },
                        {
                            "at": "2019-02-27T05:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb766",
                                "fullname": "Lj",
                                "imgUrl": "https://robohash.org/69116372?set=set1",
                                "id": "69116372"
                            },
                            "txt": "I cannot say enough good things about this condo. There was more than enough space for my friends and I to spread out. Each room was beautifully decorated. the bathrooms we're impeccably remodeled, I even took inspiration pictures! Cynthia thought of everything to make this a home away from home. AC was in every room, but with the trade winds, we never needed it. Don't hesitate, book this place now!!!"
                        }
                    ],
                    "_id": "622f337a75c7d36e498aab02",
                    "imgUrls": [
                        "100.jpeg",
                        "001.jpeg",
                        "150.jpeg",
                        "132.jpeg",
                        "021.jpeg"
                    ]
                },
                {
                    "name": "+Spacious Studio&Kitchenette near Blue Mosque+",
                    "summary": "A spacious, private studio with high speed Wi-Fi wireless internet. It is located in historical district of Sultanahmet oldcity center. It's Only 10 minutes (by walking) away from Sultanahmet  Blue Mosque, Hagia Sophia, Topkapı Palace, Underground Cistern and Hippodrome. This area is called Kadirga and it's famous with it's local restaurants. There are more gorcery stores and supermarkets in this are since it's not %100 touristic area. There is children playground right in front of the building.",
                    "interaction": "I was born in Istanbul and worked as receptionist and as a concierge for more than 20 years. I am doing my best to make my guests' visit easier. *After the reservation is complete, my guests will receive an e-mail consisting of the exact adress, contact number ( (Hidden by Airbnb) available), description about how to reach from the airports and most importantly the Wi-Fi password for communication at arrival. You can simply connect to Wi-Fi when you arrive at the front door and call us fron (Hidden by Airbnb) or Viber. Airport shuttle service is also available on reasonable prices.",
                    "houseRules": "",
                    "propertyType": "Apartment",
                    "roomType": "Entire home/apt",
                    "bedType": "Real Bed",
                    "cancellationPolicy": "strict_14_with_grace_period",
                    "capacity": 5,
                    "bedrooms": 0,
                    "beds": 4,
                    "numOfReviews": 39,
                    "amenities": [
                        "TV",
                        "Wifi",
                        "Air conditioning",
                        "Kitchen",
                        "Hair dryer",
                        "Iron",
                        "Heating",
                        "Family-kid friendly",
                        "Fire-extinguisher",
                        "Essentials",
                        "Shampoo",
                        "Hangers",
                        "Hot water",
                        "Microwave",
                        "Refrigerator",
                        "Host greets you"
                    ],
                    "host": {
                        "_id": "622f3405e36c59e6164fb898",
                        "fullname": "Kadirga",
                        "location": "Istanbul, İstanbul, Turkey",
                        "about": "",
                        "responseTime": "within an hour",
                        "thumbnailUrl": "https://a0.muscache.com/im/pictures/user/7620074d-86d6-49c3-b7fe-cafe084051dd.jpg?aki_policy=profile_small",
                        "pictureUrl": "https://a0.muscache.com/im/pictures/user/7620074d-86d6-49c3-b7fe-cafe084051dd.jpg?aki_policy=profile_x_medium",
                        "isSuperhost": false,
                        "id": "98780303"
                    },
                    "address": {
                        "street": "Fatih, İstanbul, Turkey",
                        "country": "Turkey",
                        "location": {
                            "lat": 28.96755,
                            "lan": 41.00488
                        },
                        "countryCode": "TR",
                        "city": "Istanbul"
                    },
                    "id": "15417267",
                    "bathrooms": 1,
                    "price": 264,
                    "securityDeposit": 0,
                    "cleaningFee": 0,
                    "extraPeople": 26,
                    "reviewScores": {
                        "accuracy": 8,
                        "cleanliness": 8,
                        "checkin": 9,
                        "communication": 9,
                        "location": 9,
                        "value": 9,
                        "rating": 78
                    },
                    "reviews": [{
                            "at": "2016-11-06T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb5a5",
                                "fullname": "Sime",
                                "imgUrl": "https://robohash.org/65556580?set=set1",
                                "id": "65556580"
                            },
                            "txt": "地点很方便,房间也很大,有好多张床,如果是家庭出游将是不错的选择｡"
                        },
                        {
                            "at": "2016-11-09T05:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbcdd",
                                "fullname": "Liberato",
                                "imgUrl": "https://robohash.org/77131064?set=set1",
                                "id": "77131064"
                            },
                            "txt": "The room was great. I was able to get the much needed Rest and relaxation I was looking for. What stood out for me was Emre's concern for my piece of mind. I approached him with a few minor concerns and he went to great lengths to ensure that I would have a restful stay at his hotel. He was extremely helpful in helping me secure ground transportation to my next destination, as I had failed miserably ha in get attempted to do it on my own. Stay here, the neighborhood will give you a true taste of Istanbul, a healthy step away from the too touristy neighborhoods."
                        },
                        {
                            "at": "2016-12-10T05:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbb72",
                                "fullname": "Tash",
                                "imgUrl": "https://robohash.org/3276660?set=set1",
                                "id": "3276660"
                            },
                            "txt": "Great place, very friendly host, I would recommend this place to anyone."
                        },
                        {
                            "at": "2017-01-26T05:00:00.000Z",
                            "by": {
                                "_id": "622f3408e36c59e6164fc07f",
                                "fullname": "Magdi",
                                "imgUrl": "https://robohash.org/65666427?set=set1",
                                "id": "65666427"
                            },
                            "txt": "With a good honest people everything is great, thanks boys "
                        },
                        {
                            "at": "2017-02-06T05:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb1d3",
                                "fullname": "Daria",
                                "imgUrl": "https://robohash.org/109484218?set=set1",
                                "id": "109484218"
                            },
                            "txt": "Thanks for your nice guest house"
                        },
                        {
                            "at": "2017-02-26T05:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb406",
                                "fullname": "Ziying",
                                "imgUrl": "https://robohash.org/40753110?set=set1",
                                "id": "40753110"
                            },
                            "txt": "这个房间性价比真的很好呀!位置也ok,离景点不远｡但是离metro有点远,去交通点上坡好累｡洗手间还是有点脏,去的时候地上有小虫｡厕所马桶有点摇摇欲坠,厕所门锁不上｡但是看在这价钱,休息几晚能接受｡"
                        },
                        {
                            "at": "2017-03-12T05:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb0da",
                                "fullname": "Florianne",
                                "imgUrl": "https://robohash.org/117885577?set=set1",
                                "id": "117885577"
                            },
                            "txt": "The flat is perfect for preople who want to visit Istanbul! thanks"
                        },
                        {
                            "at": "2017-04-10T04:00:00.000Z",
                            "by": {
                                "_id": "622f3405e36c59e6164fb843",
                                "fullname": "Zakiuddin",
                                "imgUrl": "https://robohash.org/116676576?set=set1",
                                "id": "116676576"
                            },
                            "txt": "place is closer to main attractions and at the same time in quite locality. i recomend fellow travellers to try kadirga park when visiting istanbul. good for families."
                        },
                        {
                            "at": "2017-04-26T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbebe",
                                "fullname": "Kristy",
                                "imgUrl": "https://robohash.org/66755882?set=set1",
                                "id": "66755882"
                            },
                            "txt": "Emre wad a great host. His communication before and during our stay had been absolutely top notch. He was very helpful and accommodating and we would stay with him again,  no question! "
                        },
                        {
                            "at": "2017-06-14T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbfdf",
                                "fullname": "Bas",
                                "imgUrl": "https://robohash.org/4966099?set=set1",
                                "id": "4966099"
                            },
                            "txt": "I had a great time staying here. Emre has a wealth of local useful information. Ask him anything and he'll basically plan your holiday for you :) I was greeted when I arrived by one of his staff and quickly shown to my room. The room was basic but spacious, clean and safe - great value for money. Istanbul is incredibly beautiful and very exciting. There's a supermarket literally across the road, as is the Istanbul photography museum. The Hagia Sophia and Blue Mosque are a stone throw away. Lots of restaurants and cafes in the area. Easy to walk everywhere and public transport is easy, cheap, mosern, safe and fast - speak to Emre and he'll quickly help you get your head around it. Stay here, you won't regret it. "
                        },
                        {
                            "at": "2017-06-17T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb299",
                                "fullname": "Mahgrine",
                                "imgUrl": "https://robohash.org/6629816?set=set1",
                                "id": "6629816"
                            },
                            "txt": "The place is near to the tram, around 8-10 mins walk. The room is clean, big, and comfy. The only drawback is that I didn't expect that I need to go uphill every time I'm going out from the house. Nevertheless, it's a great location. You can reach the Grand Bazar, Blue Mosque, Hagia Sophia and TopKapi Palace by walking, approx. 20mins.  "
                        },
                        {
                            "at": "2017-08-17T04:00:00.000Z",
                            "by": {
                                "_id": "622f3407e36c59e6164fbd57",
                                "fullname": "Tolga",
                                "imgUrl": "https://robohash.org/48053238?set=set1",
                                "id": "48053238"
                            },
                            "txt": "Nice apartment overall. Its located at the bottom of a hill so expect a hike whenever you want to go anywhere. There's a supermarket just down the road which stocks things you'll need on a daily basis which is very handy. The park across the road does get very loud and stays busy well after midnight so keep that in mind."
                        },
                        {
                            "at": "2017-09-24T04:00:00.000Z",
                            "by": {
                                "_id": "622f3404e36c59e6164fb4ad",
                                "fullname": "Öner",
                                "imgUrl": "https://robohash.org/29635802?set=set1",
                                "id": "29635802"
                            },
                            "txt": "+ :\nBien situé, je n'ai pas eu du mal à visiter les lieux proches. \n\n- : \n* Tous les équipements n'y étaient pas (sèche cheveux, lave linge...)\n\n* la porte d'entrée est juste au niveau de la porte d'entrée du bâtiment. On entend donc tous les gens qui passent avec le claquement de porte. Pas super la nuit. \n\n* wifi ne capte pas bien. \n\n* la lumière de salle de bain fonctionne avec un détecteur de mouvement qui ne capte pas si vous êtes dans la douche. Il faut donc utiliser le flash de son portable."
                        },
                        {
                            "at": "2017-10-03T04:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb129",
                                "fullname": "Med Zied",
                                "imgUrl": "https://robohash.org/36523012?set=set1",
                                "id": "36523012"
                            },
                            "txt": "Good location"
                        },
                        {
                            "at": "2017-10-14T04:00:00.000Z",
                            "by": {
                                "_id": "622f3406e36c59e6164fbb01",
                                "fullname": "Danielle",
                                "imgUrl": "https://robohash.org/70117115?set=set1",
                                "id": "70117115"
                            },
                            "txt": "Fantastic little apartment, ideal for a weekend break in Istanbul. Located on a road with lots of good cheap street food, only ten minutes walk from the main tourist spots of Sultanahmet including the blue mosque and Hagia Sophia. Great road of restaurants just three minutes away with great atmosphere and decent prices - although everyone will try and lure you in! It's a very steep climb up a hill to public transport but not a problem if you enjoy a walk!\n\nApartment has everything you need for a comfortable stay. Only problem is the noise. The doorbell is loud and people coming in and out kept us awake one night!"
                        },
                        {
                            "at": "2017-10-21T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fae6a",
                                "fullname": "Arifur",
                                "imgUrl": "https://robohash.org/154348770?set=set1",
                                "id": "154348770"
                            },
                            "txt": "Ganz bequem und guter Lage. Jederzeit kann ich Empfehlen. Emre ist nette man und freundlich. Die Zimmer ist preiswert. Blaue Moschee nur 6-7 min zu fuss."
                        },
                        {
                            "at": "2017-10-30T04:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164fad87",
                                "fullname": "Nass",
                                "imgUrl": "https://robohash.org/22615931?set=set1",
                                "id": "22615931"
                            },
                            "txt": "Appartement simple, des lits un frigo,\nLes - :  pas toujours le nécessaire de cuisine, plaque vieille..pas de machine a laver, assez froid (pas de chauffage, la clim chauffe mal) fortes odeurs dans la salle de bain, et les draps sont pas changé de la semaine...les serviette retiré mais pas rajouter...\n\nLes + : \nBon emplacement loin du tumulte de la ville mais dans le centre historique de Sulthanamey.Emre est réactif,plein de petits boui boui autour, restaurants, ménage fait durant le séjour, et quartier calme !"
                        },
                        {
                            "at": "2017-11-06T05:00:00.000Z",
                            "by": {
                                "_id": "622f3401e36c59e6164fab5f",
                                "fullname": "Fadi",
                                "imgUrl": "https://robohash.org/152749523?set=set1",
                                "id": "152749523"
                            },
                            "txt": "Mr Emre was very helpful and friendly with us help us showing around especially being Turkish interpter when needed.\nHighly recommended place to stay in Old Istanbul "
                        },
                        {
                            "at": "2017-11-19T05:00:00.000Z",
                            "by": {
                                "_id": "622f3403e36c59e6164fb185",
                                "fullname": "Igor",
                                "imgUrl": "https://robohash.org/5445704?set=set1",
                                "id": "5445704"
                            },
                            "txt": "Удобное расположение до основных достопримечательностей (пешая доступность). Оперативные ответы и помощь от хозяина квартиры."
                        },
                        {
                            "at": "2018-01-03T05:00:00.000Z",
                            "by": {
                                "_id": "622f3402e36c59e6164faca0",
                                "fullname": "Sarah",
                                "imgUrl": "https://robohash.org/103139094?set=set1",
                                "id": "103139094"
                            },
                            "txt": "L'appartement d'Emre est davantage une petite chambre d’hôtel où l'on a les équipements attendus sauf la machine à laver. L'appartement est globalement assez propre.\nIl est très bien placé (à 10 min à pied de la mosquée bleue et de sainte Sophie) et dans un quartier authentique. Nous avons aussi apprécié qu'il y ait en face un supérette où nous avons pu faire des courses.\nEmre est très réactif et très sympa. Nous recommandons cet appartement."
                        }
                    ],
                    "_id": "622f337a75c7d36e498aab03",
                    "imgUrls": [
                        "015.jpeg",
                        "144.jpeg",
                        "043.jpeg",
                        "092.jpeg",
                        "010.jpeg"
                    ]
                }
            ]
            // utilService.saveToStorage(KEY, stays)
    }
    return stays
}

// function _createStay(name, price, labels, reviews) {
//   return {
//     _id: utilService.makeId(),
//     name,
//     price,
//     labels,
//     inStock: true,
//     createdAt: new Date(),
//     reviews: [
//       { _id: utilService.makeId(), txt: utilService.getLoremIpsum(5), createdAt: new Date() },
//       { _id: utilService.makeId(), txt: utilService.getLoremIpsum(5), createdAt: new Date() },
//       { _id: utilService.makeId(), txt: utilService.getLoremIpsum(5), createdAt: new Date() },
//     ],
//   }
// }

// orders = [{
//     "date":"03/13/22",
//     "booker":"Leo",
//     "stay": "Fresh and modern 1BR in Bed-Stuy",
//     "tripDates":"03/14/22-03/18/22",
//     "nights":4,
//     "guests":3,
//     "amount":516,
//     "status":["✔️","❌"]
//    },
//    {
//     "date":"03/09/22",
//     "booker":"Leo",
//     "stay": "Fresh and modern 1BR in Bed-Stuy",
//     "tripDates":"03/10/22-03/12/22",
//     "nights":2,
//     "guests":3,
//     "amount":313,
//     "status":["✔️","❌"]
//    },
//    {
//     "date":"02/11/22",
//     "booker":"Leo",
//     "stay": "Fresh and modern 1BR in Bed-Stuy",
//     "tripDates":"02/16/22-02/17/22",
//     "nights":1,
//     "guests":2,
//     "amount":330,
//     "status":["✔️","❌"]
//    },
//    {
//     "date":"02/03/22",
//     "booker":"Leo",
//     "stay": "Fresh and modern 1BR in Bed-Stuy",
//     "tripDates":"02/11/22-02/15/22",
//     "nights":4,
//     "guests":3,
//     "amount":889,
//     "status":["✔️","❌"]
//    },
//    {
//     "date":"01/13/22",
//     "booker":"Leo",
//     "stay": "Fresh and modern 1BR in Bed-Stuy",
//     "tripDates":"01/14/22-01/18/22",
//     "nights":4,
//     "guests":5,
//     "amount":1200,
//     "status":["✔️","❌"]
//    },
//    {
//     "date":"01/08/22",
//     "booker":"Leo",
//     "stay": "Fresh and modern 1BR in Bed-Stuy",
//     "tripDates":"01/15/22-01/18/22",
//     "nights":3,
//     "guests":2,
//     "amount":550,
//     "status":["✔️","❌"]
//    },
//    {
//     "date":"12/13/21",
//     "booker":"Leo",
//     "stay": "Fresh and modern 1BR in Bed-Stuy",
//     "tripDates":"12/22/21-12/27/21",
//     "nights":5,
//     "guests":4,
//     "amount":1600,
//     "status":["✔️","❌"]
//    },
//    {
//     "date":"11/18/21",
//     "booker":"Leo",
//     "stay": "Fresh and modern 1BR in Bed-Stuy",
//     "tripDates":"11/22/21-11/28/21",
//     "nights":6,
//     "guests":2,
//     "amount":2500,
//     "status":["✔️","❌"]
//    },
//    {
//     "date":"11/13/21",
//     "booker":"Leo",
//     "stay": "Fresh and modern 1BR in Bed-Stuy",
//     "tripDates":"11/14/21-11/18/21",
//     "nights":4,
//     "guests":4,
//     "amount":3000,
//     "status":["✔️","❌"]
//    },
//    {
//     "date":"10/15/21",
//     "booker":"Leo",
//     "stay": "Fresh and modern 1BR in Bed-Stuy",
//     "tripDates":"10/20/21-10/28/21",
//     "nights":8,
//     "guests":2,
//     "amount":3500,
//     "status":["✔️","❌"]
//    },
//    {
//     "date":"09/10/21",
//     "booker":"Leo",
//     "stay": "Fresh and modern 1BR in Bed-Stuy",
//     "tripDates":"09/25/21-09/28/21",
//     "nights":3,
//     "guests":5,
//     "amount":2000,
//     "status":["✔️","❌"]
//    },
//    {
//     "date":"08/13/21",
//     "booker":"Leo",
//     "stay": "Fresh and modern 1BR in Bed-Stuy",
//     "tripDates":"08/17/21-08/18/20",
//     "nights":1,
//     "guests":2,
//     "amount":516,
//     "status":["✔️","❌"]
//    },
//    {
//     "date":"08/17/21",
//     "booker":"Leo",
//     "stay": "Fresh and modern 1BR in Bed-Stuy",
//     "tripDates":"08/19/21-08/22/21",
//     "nights":3,
//     "guests":4,
//     "amount":1750,
//     "status":["✔️","❌"]
//    }
// ]