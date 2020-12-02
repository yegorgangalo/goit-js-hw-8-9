import myCode from './js/mycodes';
// myCode();

require.context("./images/", true, /\.(png|svg|jpg|gif)$/); //вставляє усі картинки з ісходної папки в оброблену
import './css/styles.scss';