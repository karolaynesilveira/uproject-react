import PrivateRoute from '../../components/functional/privateRoute';
import { Route } from 'react-router-dom';

export default [
  <Route key={'/directorate'} exact path='/' element={<PrivateRoute/>}>
    <Route key={'route'} exact path={'/directorate/route'} element={<>Rota privada de directorate</>} />,
  </Route>,
];
