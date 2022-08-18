import { Fragment } from 'react';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import remove from '../../assets/images/remove.png';

const Experience = ({ experience }) => {
  const dispatch = useDispatch();
  const handleDeleteExperience = (expId) => {
    dispatch(deleteExperience(expId));
  };

  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className='hide-sm'>{exp.title}</td>
      <td>
        <Moment format='DD/MM/YYYY'>{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          ' Now'
        ) : (
          <Moment format='DD/MM/YYYY'>{exp.to}</Moment>
        )}
      </td>
      <td>
        <img
          className='img-icon'
          src={remove}
          onClick={() => handleDeleteExperience(exp._id)}
          alt='remove'
        />
      </td>
    </tr>
  ));

  if (experience.length === 0) {
    return (
      <p className='dashboard-card bg-light'>
        <i className='fas fa-exclamation-circle'></i>
        <span> You have not added your experiences yet</span>
      </p>
    );
  }

  return (
    <Fragment>
      <h2 className='mt-1'>Experience Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

export default Experience;
