import { Route } from 'react-router-dom';
import Login from '../../components/artifacts/login';

export default [
  <Route key={'/'} exact path={'/'} element={<>Ola</>} />,
  <Route key={'/entrar'} exact path={'/entrar'} element={<Login/>} />,
];
