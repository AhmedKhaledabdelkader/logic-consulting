import { bootstrapApplication } from '@angular/platform-browser';
import 'bootstrap';
import { loadRuntimeConfig } from './environments/environment';

// Load config.json (backend URL) BEFORE the app code is evaluated, because
// the API endpoint constants are built from it when their module loads.
loadRuntimeConfig()
  .then(async () => {
    const [{ appConfig }, { AppComponent }] = await Promise.all([
      import('./app/app.config'),
      import('./app/app.component'),
    ]);
    return bootstrapApplication(AppComponent, appConfig);
  })
  .catch((err) => console.error(err));
