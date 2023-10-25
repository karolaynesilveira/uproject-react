import PrivateRoute from '../../components/functional/privateRoute';
import { Route } from 'react-router-dom';

export default [
  <Route key={'/administration'} exact path='/' element={<PrivateRoute/>}>
    <Route key={'route'} exact path={'/administration/route'} element={<>Rota privada de administration</>} />,
  </Route>,
];
