import { lazy, Suspense } from 'react';
import { AuthGuard, GuestGuard } from './authentication';
import { DefaultLayout, LoadingScreen } from './design';
import config from './generated/config.json';

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// Authentication pages
const Login = Loadable(
  lazy(() => import('./modules/Misc/views/authentication/Login'))
);

// Error pages
const NotFound = Loadable(lazy(() => import('./modules/Misc/views/NotFound')));

const OrganizationList = Loadable(
  lazy(() => import('./modules/Misc/views/Organizations/OrganizationList'))
);
const OrganizationView = Loadable(
  lazy(() => import('./modules/Misc/views/Organizations/OrganizationView'))
);
const OrganizationCreateForm = Loadable(
  lazy(() =>
    import('./modules/Misc/views/Organizations/OrganizationCreateForm')
  )
);
const OrganizationEditForm = Loadable(
  lazy(() => import('./modules/Misc/views/Organizations/OrganizationEditForm'))
);
const EnvironmentCreateForm = Loadable(
  lazy(() => import('./modules/Misc/views/Environments/EnvironmentCreateForm'))
);
const EnvironmentEditForm = Loadable(
  lazy(() => import('./modules/Misc/views/Environments/EnvironmentEditForm'))
);
const EnvironmentView = Loadable(
  lazy(() => import('./modules/Misc/views/Environments/EnvironmentView'))
);
const EnvironmentList = Loadable(
  lazy(() => import('./modules/Misc/views/Environments/EnvironmentList'))
);
const Catalog = Loadable(
  lazy(() => import('./modules/Misc/views/Catalog/Catalog'))
);

const DatasetList = Loadable(
  lazy(() => import('./modules/Datasets/views/DatasetList'))
);
const DatasetView = Loadable(
  lazy(() => import('./modules/Datasets/views/DatasetView'))
);
const DatasetCreateForm = Loadable(
  lazy(() => import('./modules/Datasets/views/DatasetCreateForm'))
);
const DatasetImportForm = Loadable(
  lazy(() => import('./modules/Datasets/views/DatasetImportForm'))
);
const DatasetEditForm = Loadable(
  lazy(() => import('./modules/Datasets/views/DatasetEditForm'))
);
const TableView = Loadable(
  lazy(() => import('./modules/Misc/views/Tables/TableView'))
);
const TableEditForm = Loadable(
  lazy(() => import('./modules/Misc/views/Tables/TableEditForm'))
);

const FolderCreateForm = Loadable(
  lazy(() => import('./modules/Misc/views/Folders/FolderCreateForm'))
);
const FolderView = Loadable(
  lazy(() => import('./modules/Misc/views/Folders/FolderView'))
);
const FolderEditForm = Loadable(
  lazy(() => import('./modules/Misc/views/Folders/FolderEditForm'))
);

const NotebookList = Loadable(
  lazy(() => import('./modules/Notebooks/views/NotebookList'))
);
const NotebookView = Loadable(
  lazy(() => import('./modules/Notebooks/views/NotebookView'))
);
const NotebookCreateForm = Loadable(
  lazy(() => import('./modules/Notebooks/views/NotebookCreateForm'))
);

const MLStudioList = Loadable(
  lazy(() => import('./modules/Misc/views/MLStudio/MLStudioList'))
);
const MLStudioView = Loadable(
  lazy(() => import('./modules/Misc/views/MLStudio/MLStudioView'))
);
const MLStudioCreateForm = Loadable(
  lazy(() => import('./modules/Misc/views/MLStudio/MLStudioCreateForm'))
);

const DashboardList = Loadable(
  lazy(() => import('./modules/Misc/views/Dashboards/DashboardList'))
);
const DashboardImportForm = Loadable(
  lazy(() => import('./modules/Misc/views/Dashboards/DashboardImportForm'))
);
const DashboardEditForm = Loadable(
  lazy(() => import('./modules/Misc/views/Dashboards/DashboardEditForm'))
);
const DashboardView = Loadable(
  lazy(() => import('./modules/Misc/views/Dashboards/DashboardView'))
);
const DashboardSessionStarter = Loadable(
  lazy(() => import('./modules/Misc/views/Dashboards/DashboardSessionStarter'))
);

const PipelineList = Loadable(
  lazy(() => import('./modules/Misc/views/Pipelines/PipelineList'))
);
const PipelineView = Loadable(
  lazy(() => import('./modules/Misc/views/Pipelines/PipelineView'))
);
const PipelineCreateForm = Loadable(
  lazy(() => import('./modules/Misc/views/Pipelines/PipelineCreateForm'))
);
const PipelineEditForm = Loadable(
  lazy(() => import('./modules/Misc/views/Pipelines/PipelineEditForm'))
);

const ShareList = Loadable(
  lazy(() => import('./modules/Misc/views/Shares/ShareList'))
);
const ShareView = Loadable(
  lazy(() => import('./modules/Misc/views/Shares/ShareView'))
);

const WorksheetList = Loadable(
  lazy(() => import('./modules/Misc/views/Worksheets/WorksheetList'))
);
const WorksheetView = Loadable(
  lazy(() => import('./modules/Misc/views/Worksheets/WorksheetView'))
);
const WorksheetCreateForm = Loadable(
  lazy(() => import('./modules/Misc/views/Worksheets/WorksheetCreateForm'))
);

const GlossaryList = Loadable(
  lazy(() => import('./modules/Misc/views/Glossaries/GlossaryList'))
);
const GlossaryView = Loadable(
  lazy(() => import('./modules/Misc/views/Glossaries/GlossaryView'))
);
const GlossaryCreateForm = Loadable(
  lazy(() => import('./modules/Misc/views/Glossaries/GlossaryCreateForm'))
);

const AdministrationView = Loadable(
  lazy(() => import('./modules/Misc/views/Administration/AdministrationView'))
);

const routes = [
  {
    children: [
      {
        path: 'login',
        element: (
          <GuestGuard>
            <Login />
          </GuestGuard>
        )
      }
    ]
  },
  {
    path: 'console',
    element: (
      <AuthGuard>
        <DefaultLayout />
      </AuthGuard>
    ),
    children: [
      {
        children: [
          {
            path: 'organizations',
            element: <OrganizationList />
          },
          {
            path: 'organizations/:uri',
            element: <OrganizationView />
          },
          {
            path: 'organizations/:uri/edit',
            element: <OrganizationEditForm />
          },
          {
            path: 'organizations/new',
            element: <OrganizationCreateForm />
          },
          {
            path: 'organizations/:uri/link',
            element: <EnvironmentCreateForm />
          }
        ]
      },
      {
        children: [
          {
            path: 'environments',
            element: <EnvironmentList />
          },
          {
            path: 'environments/:uri',
            element: <EnvironmentView />
          },
          {
            path: 'environments/:uri/edit',
            element: <EnvironmentEditForm />
          }
        ]
      },
      {
        path: 'catalog',
        element: <Catalog />
      },
      {
        children: [
          {
            path: 'datasets',
            element: <DatasetList />
          },
          {
            path: 'datasets/:uri',
            element: <DatasetView />
          },
          {
            path: 'datasets/new',
            element: <DatasetCreateForm />
          },
          {
            path: 'datasets/import',
            element: <DatasetImportForm />
          },
          {
            path: 'datasets/:uri/edit',
            element: <DatasetEditForm />
          },
          {
            path: 'datasets/:uri/edit',
            element: <DatasetEditForm />
          },
          {
            path: 'datasets/table/:uri',
            element: <TableView />
          },
          {
            path: 'datasets/table/:uri/edit',
            element: <TableEditForm />
          },
          {
            path: 'datasets/:uri/newfolder',
            element: <FolderCreateForm />
          },
          {
            path: 'datasets/folder/:uri',
            element: <FolderView />
          },
          {
            path: 'datasets/folder/:uri/edit',
            element: <FolderEditForm />
          }
        ]
      },
      {
        children: [
          {
            path: 'mlstudio',
            element: <MLStudioList />
          },
          {
            path: 'mlstudio/:uri',
            element: <MLStudioView />
          },
          {
            path: 'mlstudio/new',
            element: <MLStudioCreateForm />
          }
        ]
      },
      config.modules.notebooks.active && {
        children: [
          {
            path: 'notebooks',
            element: <NotebookList />
          },
          {
            path: 'notebooks/:uri',
            element: <NotebookView />
          },
          {
            path: 'notebooks/new',
            element: <NotebookCreateForm />
          }
        ]
      },
      {
        children: [
          {
            path: 'dashboards',
            element: <DashboardList />
          },
          {
            path: 'dashboards/:uri',
            element: <DashboardView />
          },
          {
            path: 'dashboards/session',
            element: <DashboardSessionStarter />
          },
          {
            path: 'dashboards/import',
            element: <DashboardImportForm />
          },
          {
            path: 'dashboards/:uri/edit',
            element: <DashboardEditForm />
          }
        ]
      },
      {
        children: [
          {
            path: 'pipelines',
            element: <PipelineList />
          },
          {
            path: 'pipelines/:uri',
            element: <PipelineView />
          },
          {
            path: 'pipelines/new',
            element: <PipelineCreateForm />
          },
          {
            path: 'pipelines/:uri/edit',
            element: <PipelineEditForm />
          }
        ]
      },
      {
        children: [
          {
            path: 'shares',
            element: <ShareList />
          },
          {
            path: 'shares/:uri',
            element: <ShareView />
          }
        ]
      },
      {
        children: [
          {
            path: 'worksheets',
            element: <WorksheetList />
          },
          {
            path: 'worksheets/:uri',
            element: <WorksheetView />
          },
          {
            path: 'worksheets/new',
            element: <WorksheetCreateForm />
          }
        ]
      },
      {
        children: [
          {
            path: 'glossaries',
            element: <GlossaryList />
          },
          {
            path: 'glossaries/:uri',
            element: <GlossaryView />
          },
          {
            path: 'glossaries/new',
            element: <GlossaryCreateForm />
          }
        ]
      },
      {
        children: [
          {
            path: 'administration',
            element: <AdministrationView />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: (
      <AuthGuard>
        <DefaultLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: '',
        element: <Catalog />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];

export default routes;
