import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { isDesktop } from "react-device-detect";
import UxHeader from "@/components/layout/UxHeader";
import UxFooter from "@/components/layout/UxFooter";


// React Transition Group (https://reactcommunity.org/react-transition-group/)
import { Transition, TransitionGroup } from "react-transition-group";
// React Transition Group Duration
const TIMEOUT = 100;
// React Transition Group Styles
const transitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
  },
};

// OverlayScrollbars (https://kingsora.github.io/OverlayScrollbars/)
import 'overlayscrollbars/overlayscrollbars.css';
import { useOverlayScrollbars } from "overlayscrollbars-react";
// OverlayScrollbars Options
const options = {
  paddingAbsolute: false,
  showNativeOverlaidScrollbars: false,
  update: {
    elementEvents: [['img', 'load']],
    debounce: [0, 33],
    attributes: null,
    ignoreMutation: null,
  },
  overflow: {
    x: 'hidden',
    y: 'scroll',
  },
  scrollbars: {
    theme: 'os-theme-dark',
    visibility: 'auto',
    autoHide: 'never',
    autoHideDelay: 1300,
    autoHideSuspend: false,
    dragScroll: true,
    clickScroll: false,
    pointers: ['mouse', 'touch', 'pen'],
  },
};
// OverlayScrollbars Events
const events = {
  initialized: (instance) => {
    const elements = instance.elements();

    elements.target.classList.add('scrollbars-target');
    elements.viewport.classList.add('scrollbars-viewport');
  },
  updated: (instance, onUpdatedArgs) => {
    const elements = instance.elements();

    elements.viewport.scrollTop = 0;
  },
  destroyed: (instance, canceled) => {},
  scroll: (instance, event) => {},
};
// OverlayScrollbars Defer
const defer = true;

export default function Layout({ children }) {
  const router = useRouter();
  const transitionRef = useRef();
  const scrollbarRef = useRef();
  const [initialize, instance] = useOverlayScrollbars({ options, events, defer });

  useEffect(() => {
    isDesktop && initialize(scrollbarRef.current);
  }, [initialize]);

  return (
    <>
      <UxHeader />
      <main
        ref={scrollbarRef}
        className="ux-main"
      >
        <TransitionGroup
          className="transition-group"
          style={{ position: "relative" }}
        >
          <Transition
            key={router.pathname}
            nodeRef={transitionRef}
            timeout={{
              enter: TIMEOUT,
              exit: TIMEOUT,
            }}
          >
            {(state) => (
              <div
                ref={transitionRef}
                className="transition"
                style={{ ...transitionStyles[state] }}
              >
                {children}
              </div>
            )}
          </Transition>
        </TransitionGroup>
      </main>
      <UxFooter />
    </>
  )
}