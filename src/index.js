
import myCode from './js/mycodes';
myCode();

// import './images/_DSC1603.jpg';
// import './images/milk.svg';
// import './images/milk188@2x.png';
require.context("./images/", true, /\.(png|svg|jpg|gif)$/); //вставляє усі картинки з ісходної папки в оброблену

import './css/styles.scss';