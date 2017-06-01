import t7 from 'template7';
import $ from 'dom7';

// F7 Class
import Framework7 from './components/app/framework7-class';

// Import Core Modules
import Resize from './modules/resize/resize';
import Device from './modules/device/device';
import Support from './modules/support/support';
import Touch from './modules/touch/touch';
import Router from './modules/router/router';
import History from './modules/history/history';
import Clicks from './modules/clicks/clicks';

// Core Components
import Statusbar from './components/statusbar/statusbar';
import View from './components/view/view';
import Navbar from './components/navbar/navbar';
import Toolbar from './components/toolbar/toolbar';
import Preloader from './components/preloader/preloader';
import Progressbar from './components/progressbar/progressbar';
import Modal from './components/modal/modal';
import Dialog from './components/dialog/dialog';
import Popup from './components/popup/popup';
import LoginScreen from './components/login-screen/login-screen';
import Popover from './components/popover/popover';
import Actions from './components/actions/actions';

// Additional Components
import Sortable from './components/sortable/sortable';
import Swipeout from './components/swipeout/swipeout';
import SmartSelect from './components/smartselect/smartselect';
import Calendar from './components/calendar/calendar';
import Picker from './components/picker/picker';
import Panels from './components/panels/panels';

// Template7
Framework7.prototype.t7 = t7;
if (!window.Template7) window.Template7 = t7;

// Dom7
Framework7.prototype.$ = $;
if (!window.Dom7) window.Dom7 = $;

// Install Modules
Framework7
  // Core Modules
  .use(Support)
  .use(Device)
  .use(Resize)
  .use(Touch)
  .use(Router)
  .use(History)
  .use(Clicks)
  // Core Components
  .use(Statusbar)
  .use(View)
  .use(Navbar)
  .use(Toolbar)
  .use(Preloader)
  .use(Progressbar)
  .use(Modal)
  .use(Dialog)
  .use(Popup)
  .use(LoginScreen)
  .use(Popover)
  .use(Actions)
  // Additional Components
  .use(Sortable)
  .use(Swipeout)
  .use(SmartSelect)
  .use(Calendar)
  .use(Picker)
  .use(Panels);

export default Framework7;