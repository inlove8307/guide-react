import { useEffect } from 'react';
import { isDesktop, isWindows, isMacOs, isMobile, isIOS, isAndroid, isChrome, isFirefox, isSafari, isEdge } from 'react-device-detect';
import classnames from 'classnames';
import $ from 'jquery';
import Layout from '../components/layout';

// Styles
import "@/public/styles/base.css";
import "@/public/styles/global.scss";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    $('html').addClass(classnames({
      desktop: isDesktop,
      windows: isWindows,
      macos: isMacOs,
      mobile: isMobile,
      ios: isIOS,
      aos: isAndroid,
      chrome: isChrome,
      firefox: isFirefox,
      safari: isSafari,
      edge: isEdge
    }));
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}