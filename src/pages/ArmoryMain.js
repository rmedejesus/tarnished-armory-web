import { ArmoryTypes } from '../constants/ArmoryTypes';
import { Link } from 'react-router-dom'

export default function ArmoryMain() {
  let armoryTypes = ArmoryTypes;

  return (
    <div>
      <ul>
        { armoryTypes.map(post => (<li key={post.value}><Link to={'/specific-list'} state={post.url}>{post.value}</Link></li>)) }
      </ul>
    </div>
  );
}