import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/dashboard.tsx'),
  route('/applications', 'routes/application.tsx'),
  route('/applications/new', 'routes/application-form.tsx'),
  route('/applications/edit/:id', 'routes/application-edit.tsx'),
  route('/applications/:id', 'routes/application-detail.tsx'),
  route('/applications/groups/:id', 'routes/group-detail.tsx'),

  route('/ips', 'routes/ip.tsx'),
  route('/ips/new', 'routes/ip-form.tsx'),
  route('/ips/edit/:id', 'routes/ip-edit.tsx'),
] satisfies RouteConfig;
