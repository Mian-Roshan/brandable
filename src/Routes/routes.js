import React from 'react';
const Login = React.lazy(() => import('../views/front/auth/Login'));
const Register = React.lazy(() => import('../views/front/auth/Register'));
const Home = React.lazy(() => import('../views/front/client/Home'));
const Dashboard = React.lazy(() => import('../views/front/client/Dashboard'));
const AssetDetail = React.lazy(() => import('../views/front/client/AssetDetail'));
const UploadFiles = React.lazy(() => import('../views/front/client/UploadFiles'));
const MyKit = React.lazy(() => import('../views/front/client/MyKit/MyKit'));
const MyProject = React.lazy(() => import('../views/front/client/MyProjects/MyProject'));
const NewProject = React.lazy(() => import('../views/front/client/NewProject/NewProject'));
const CreativeBrief = React.lazy(() => import('../views/front/client/NewProject/NewProjectSteps/CreativeBrief'));
const Optimization = React.lazy(() => import('../views/front/client/NewProject/NewProjectSteps/Optimization'));
const UploadAssets = React.lazy(() => import('../views/front/client/NewProject/NewProjectSteps/UploadAssets'));
const ProjectDetail = React.lazy(() => import('../views/front/client/NewProject/ProjectDetail/ProjectDetail'));
const Notifications = React.lazy(() => import('../views/front/client/Notifications/Notifications'));
const Settings = React.lazy(() => import('../views/front/Settings/Settings'));
const Analytics = React.lazy(() => import('../views/front/client/Analytics/Analytics'));
const InspectTemplate = React.lazy(() => import('../views/front/client/InspectTemplate/InspectTemplate'));
const SaveTemplate = React.lazy(() => import('../views/front/client/InspectTemplate/SaveTemplate'));
// Admin Routes start

const AdminAssets = React.lazy(() => import('../views/front/Admin/MyAssets'));
const AssignTask = React.lazy(() => import('../views/front/Admin/AssignTask'));
const AdminProjectDetail = React.lazy(() => import('../views/front/Admin/ProjectDetail'));
// Admin Routes end

// Designer Routes start

const DesignerMyProjects = React.lazy(() => import('../views/front/Designer/MyProjects'));
const DesignerTask = React.lazy(() => import('../views/front/Designer/AssignTask'));
const DesignerProjectDetail = React.lazy(() => import('../views/front/Designer/ProjectDetail'));
const DesignerNotifications = React.lazy(() => import('../views/front/Designer/Notifications/Notifications'));
const DesignerSettings = React.lazy(() => import('../views/front/Designer/Settings'));
const Plans = React.lazy(() => import('../views/front/Plans/Plans'));
// Designer Routes end

const NotFoundPage = React.lazy(() => import('../views/errorPages/NotFound'));
const routes = [
  { path: '/', exact: true,  name: 'Login', component: Login },
  { path: '/register', exact: true,  name: 'Register', component: Register },
  { path: '/client/home', exact: true,  name: 'myAssets', component: Home },
  { path: '/client/myAssets', exact: true,  name: 'myAssets', component: Dashboard },
  { path: '/client/asset/:asset_name', component:AssetDetail},
  { path: '/client/uploadFiles', component:UploadFiles, exact:true},
  { path: '/client/myKit', component:MyKit, exact:true},
  { path: '/client/myProjects', component:MyProject, exact:true},
  { path: '/client/newProject', component:NewProject, exact:true},
  { path: '/client/newProject/CreativeBrief', component:CreativeBrief, exact:true},
  { path: '/client/newProject/optimization', component:Optimization, exact:true},
  { path: '/client/UploadAssets', component:UploadAssets, exact:true},
  { path: '/client/myProjects/:project_name', component:ProjectDetail},
  { path: '/client/inspectTemplate/:templateName', component:InspectTemplate},
  { path: '/client/notifications', component:Notifications, exact:true},
  { path: '/client/settings', component:Settings, exact:true},
  { path: '/client/analytics', component:Analytics, exact:true},
  { path:  '/client/SaveTemplate', component:SaveTemplate, exact:true },
  { path:  '/client/plans', component:Plans, exact:true },
  { path: '/admin/myProjects', component:AdminAssets, exact:true},
  { path: '/admin/assignTask', component:AssignTask, exact:true},
  { path: '/admin/projectDetail/:Project_name', component:AdminProjectDetail, exact:true},
  { path: '/designer/myProjects', component:DesignerMyProjects, exact:true},
  { path: '/designer/assignTask', component:AssignTask, exact:true},
  { path: '/designer/projectDetail/:Project_name', component:DesignerProjectDetail, exact:true},
  { path: '/designer/notifications/', component:DesignerNotifications, exact:true},
  { path: '/designer/settings/', component:DesignerSettings, exact:true},
  { path:'*', exact:true, component:NotFoundPage}
];

export default routes;
