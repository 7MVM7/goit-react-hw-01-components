import {
  Container,
  MyBox,
  Tag,
  Location,
  Foto,
  Label,
} from "./SocialProfile.styled";

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <Container>
      <div classNameName="description">
        <Foto src={avatar} alt="Аватар пользователя" />
        <MyBox>{name}</MyBox>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>
      <Label>
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </Label>
    </Container>
  );
}
export default Profile;

//       {/* const stats={ "followers": 5603,
//       "views": 4827,
//       "likes": 1308}
// const arayData=[{
//     "name": "Jacques Gluke",
//     "tag": "jgluke",
//     "location": "Ocho Rios, Jamaica",
//     "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//     "stats": {
//       "followers": 5603,
//       "views": 4827,
//       "likes": 1308
//     }
//   },{
//     "name": "Alex",
//     "tag": "jgluke",
//     "location": "Ocho Rios, Jamaica",
//     "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//     "stats": {
//       "followers": 3,
//       "views": 47,
//       "likes": 108
//     }
//   },{
//     "name": "Vlad",
//     "tag": "jgluke",
//     "location": "Ocho Rios, Jamaica",
//     "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
//     "stats": {
//       "followers": 503,
//       "views": 427,
//       "likes": 308
//     }
//   }
//  ]
// <ul>
// {arayData.map((obj)=>(
//   <li>
//      <h1>{obj.name}</h1>
//   <span>{obj.stats.likes}</span>
//   <p>{obj.stats.views}</p>
//   </li>
// ))}

// </ul>

// <ul>
//   <li>
//      <h1>Jacques Gluke</h1>
//   <span>1308</span>
//   <p>4827</p>
//   </li>
//   <li>

//      <h1>Alex</h1>
//   <span>108</span>
//   <p>47</p>
//   </li>

//   <li>
//      <h1>Vlad</h1>
//   <span>308</span>
//   <p>427</p>
//   </li>

//   </ul>

// const newarey=arayData.map((number)=> number*2)
// [20,40,60,80] */}
