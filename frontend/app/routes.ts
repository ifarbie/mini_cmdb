import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
    index('routes/dashboard.tsx'), 
    route('/applications', 'routes/application.tsx'),
    route('/applications/new', 'routes/application-form.tsx'),
    route('/applications/edit', 'routes/application-edit.tsx'),
    route('/applications/:id', 'routes/application-detail.tsx'),
    route('/groups/:id', 'routes/group-detail.tsx'),
] satisfies RouteConfig;
