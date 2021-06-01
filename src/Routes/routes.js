import React from 'react';
const Login = React.lazy(() => import('../views/front/auth/Login'));
const Register = React.lazy(() => import('../views/front/auth/Register'));
const Dashboard = React.lazy(() => import('../views/front/client/Dashboard'));
const AssetDetail = React.lazy(() => import('../views/front/client/AssetDetail'));
const UploadFiles = React.lazy(() => import('../views/front/client/UploadFiles'));
const MyKit = React.lazy(() => import('../views/front/client/MyKit/MyKit'));
const MyProject = React.lazy(() => import('../views/front/client/MyProjects/MyProject'));
const NewProject = React.lazy(() => import('../views/front/client/NewProject/NewProject'));
const routes = [
  { path: '/', exact: true,  name: 'Login', component: Login },
  { path: '/register', exact: true,  name: 'Register', component: Register },
  { path: '/client/dashboard', exact: true,  name: 'Register', component: Dashboard },
  { path: '/client/asset/:asset_name', component:AssetDetail},
  { path: '/client/uploadFiles', component:UploadFiles, exact:true},
  { path: '/client/myKit', component:MyKit, exact:true},
  { path: '/client/myProjects', component:MyProject, exact:true},
  { path: '/client/newProject', component:NewProject, exact:true},
];

export default routes;
