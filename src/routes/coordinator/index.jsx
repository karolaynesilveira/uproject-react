import PrivateRoute from '../../components/functional/privateRoute';
import { Route } from 'react-router-dom';

export default [
  <Route key={'/coordinator'} exact path='/' element={<PrivateRoute/>}>
    <Route key={'route'} exact path={'/coordinator/route'} element={<>Rota privada de coordinator</>} />,
  </Route>,
];
