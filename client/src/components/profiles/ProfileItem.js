import { Link } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className='profile-list'>
      <Link to={`/profile/${_id}`} className='bg-light profile-card row'>
        <img
          src={avatar}
          alt='avatar'
          className='round-img col-6 col-md-2 center-profile-image'
        />
        <div className='col-12 col-md-3 center-profile-item'>
          <h4 className='lead'>{name}</h4>
        </div>
        <div className='col-12 col-md-4 center-profile-item'>
          <p>
            {status} {company && <span> at {company}</span>}
          </p>
          <p>{location && <span>{location}</span>}</p>
        </div>
        <ul className='col-12 col-md-3 center-profile-skills hide-sm'>
          {skills.slice(0, 4).map((skill, index) => (
            <li key={index} className='text-primary'>
              <i className='fas fa-check'></i> {skill}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
};

export default ProfileItem;
