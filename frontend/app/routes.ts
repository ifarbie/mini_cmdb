import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/dashboard.tsx'),
  route('/applications', 'routes/application.tsx'),
  route('/applications/new', 'routes/application-new.tsx'),
  route('/applications/edit/:id', 'routes/application-edit.tsx'),
  route('/applications/:id', 'routes/application-detail.tsx'),

  route('/ips', 'routes/ip.tsx'),
  route('/ips/new', 'routes/ip-new.tsx'),
  route('/ips/edit/:id', 'routes/ip-edit.tsx'),

  route('/groups', 'routes/group.tsx'),
  route('/groups/:id', 'routes/group-detail.tsx'),
  route('/groups/new', 'routes/group-new.tsx'),
  route('/groups/edit/:id', 'routes/group-edit.tsx'),
] satisfies RouteConfig;
