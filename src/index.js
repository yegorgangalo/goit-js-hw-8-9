require.context("./images/", true, /\.(png|svg|jpg|gif)$/); //вставляє усі картинки з ісходної папки в оброблену
import './js/mycodes.js';

console.log(process.env.NODE_ENV);
console.log(process.env.APP_ENV);

import './css/styles.scss';